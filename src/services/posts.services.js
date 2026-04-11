const Post=require("../models/users.models");
const users=require("../models/posts.models");

const getAllPosts = async () =>{
    return await Post.find().populate("author","username");
}

s
const createPost = async (postData)=>{
    return await Post.create(postData);
};

const updatePost = async (IdleDeadline,updateData) =>{
    return await Post.findByIdAndUpdate(IdleDeadline,updateData,{
        new:true,
        runValidators:true,
    });
}