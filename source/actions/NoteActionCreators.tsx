// Module ID: 11982
// Function ID: 92572
// Dependencies: [653, 507, 2]

// Module 11982
import { Endpoints } from "ME";

const result = require("set").fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(outer2_0, outer2_5) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.NOTE(outer2_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: outer2_5 };
    return HTTP.put(obj);
  }
};
