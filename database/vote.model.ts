import { Document, model, models, Schema, Types } from "mongoose";

export interface IVote {
  actionId: Types.ObjectId;
  author: Types.ObjectId;
  actionType: "question" | "answer";
  voteType: "upvote" | "downvote";
}

export interface IVoteDoc extends IVote, Document {}

const VoteSchema = new Schema<IVote>(
  {
    actionId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    author: { type: Schema.Types.ObjectId, refPath: "type", required: true },
    actionType: { type: String, enum: ["question", "answer"], required: true },
    voteType: { type: String, enum: ["upvote", "downvote"], required: true },
  },
  { timestamps: true }
);

const Vote = models?.Vote || model<IVote>("Vote", VoteSchema);

export default Vote;
