// Module ID: 14602
// Function ID: 14603
// Name: NoteActionCreators
// Dependencies: [1084, 1294, 2]

// Module 14602 (NoteActionCreators)
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
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
