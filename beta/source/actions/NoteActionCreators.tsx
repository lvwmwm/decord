// Module ID: 12633
// Function ID: 12634
// Name: NoteActionCreators
// Dependencies: [1086, 1283, 2]

// Module 12633 (NoteActionCreators)
import Constants from "Constants" /* 1086 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let obj = {
  updateNote(arg0, note) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.NOTE(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note };
    return HTTP.put(request);
  }
};
const result = size.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default obj;
