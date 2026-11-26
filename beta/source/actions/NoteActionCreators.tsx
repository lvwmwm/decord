// Module ID: 14532
// Function ID: 14533
// Name: NoteActionCreators
// Dependencies: [1071, 1284, 2]

// Module 14532 (NoteActionCreators)
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
let obj = {
  updateNote(userId, note) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.NOTE(userId), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note };
    return HTTP.put(request);
  }
};
const result = size.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default obj;
