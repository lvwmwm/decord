// Module ID: 13350
// Function ID: 13351
// Name: NoteActionCreators
// Dependencies: [1074, 1271, 2]

// Module 13350 (NoteActionCreators)
import Constants from "Constants" /* 1074 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(arg0, note) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.NOTE(arg0), body: { note }, oldFormErrors: true, rejectWithError: true };
    return HTTP.put(request);
  }
};
