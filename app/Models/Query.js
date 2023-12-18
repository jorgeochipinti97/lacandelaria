import mongoose from "mongoose";

const querySchema = new mongoose.Schema(
  {
    name: { type: String },
    phone: { type: String },
    date: { type: String },
    query: { type: String },
  },
  {
    timestamps: true,
  }
);

const QueryModel =
  mongoose.models.QueryModel || mongoose.model("QueryModel", querySchema);

export default QueryModel;
