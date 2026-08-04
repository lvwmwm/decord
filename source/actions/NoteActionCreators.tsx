// Module ID: 12247
// Function ID: 12248
// Dependencies: [676, 530, 2]

// Module 12247
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(closure_0, closure_5) {
    const HTTP = require(530) /* sendRequest */.HTTP;
    obj = { url: Endpoints.NOTE(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: closure_5 };
    return HTTP.put(obj);
  }
};
