// Module ID: 15778
// Function ID: 15779
// Name: NoteActionCreators
// Dependencies: [1072, 1285, 2]

// Module 15778 (NoteActionCreators)
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
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
