import mongoose from "mongoose";
import mogoose from "mongoose";

//1- create schema
//2- model based off of that schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // like, createdAt, updatedAt
);

const Note = mogoose.model("Note", noteSchema);

export default Note