const express = require('express');
const Snippet = require('../models/Snippet')
const { requireAuth } = require("@clerk/clerk-sdk-node");

const router = express.Router();

router.post("/", requireAuth(), async (req, res) => {
    const { title, code, language, isPublic } = req.body;
    try {
      const snippet = new Snippet({
        title,
        code,
        language,
        isPublic,
        userId: req.auth.userId, // Clerk's user ID
      });
      await snippet.save();
      res.status(201).json(snippet);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


  router.get("/public", async (req, res) => {
    try {
      const snippets = await Snippet.find({ isPublic: true });
      res.json(snippets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.get("/my-snippets", requireAuth(), async (req, res) => {
    try {
      const snippets = await Snippet.find({ userId: req.auth.userId });
      res.json(snippets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  router.patch("/:id", requireAuth(), async (req, res) => {
    const { title, code, language, isPublic } = req.body;
    
    try {
      const snippet = await Snippet.findById(req.params.id);
      
      if (!snippet) {
        return res.status(404).json({ error: "Snippet not found" });
      }
  
      if (snippet.userId.toString() !== req.auth.userId) {
        return res.status(403).json({ error: "Unauthorized" });
      }
  
      // Update fields if provided
      if (title) snippet.title = title;
      if (code) snippet.code = code;
      if (language) snippet.language = language;
      if (isPublic !== undefined) snippet.isPublic = isPublic;
  
      await snippet.save();
      res.json(snippet);
      
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  

  router.delete("/:id", requireAuth(), async (req, res) => {
    try {
      const snippet = await Snippet.findById(req.params.id);
      if (!snippet) return res.status(404).json({ error: "Snippet not found" });
      if (snippet.userId !== req.auth.userId)
        return res.status(403).json({ error: "Unauthorized" });
  
      await snippet.deleteOne();
      res.json({ message: "Snippet deleted" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  module.exports = router;
