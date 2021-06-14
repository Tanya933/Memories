import express from 'express';

import { getPosts,createPost,updatePost,deletePost,likePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/' , getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);            // id is a parameter , it a dynamic route
router.delete('/:id', deletePost);
router.patch('/:id/likePost',likePost);        

export default router;