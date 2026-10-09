// Module ID: 13128
// Function ID: 13129
// Name: NoteActionCreators
// Dependencies: [1085, 1295, 2]

// Module 13128 (NoteActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
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
