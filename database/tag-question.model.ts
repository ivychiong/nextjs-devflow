import { model, models, Schema, Types } from "mongoose";

export interface ITagQuestion {
  question: Types.ObjectId;
  tagId: Types.ObjectId;
}

const TagQuestionSchema = new Schema<ITagQuestion>({
  question: { type: Schema.Types.ObjectId, ref: "Question", required: true },
  tagId: { type: Schema.Types.ObjectId, ref: "Tag", required: true },
});

const TagQuestion =
  models?.tag || model<ITagQuestion>("TagQuestion", TagQuestionSchema);

export default TagQuestion;
