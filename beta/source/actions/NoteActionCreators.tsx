// Module ID: 12878
// Function ID: 12879
// Name: NoteActionCreators
// Dependencies: [1085, 1282, 2]

// Module 12878 (NoteActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
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
