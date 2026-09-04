// Module ID: 12991
// Function ID: 12992
// Dependencies: [673, 527, 2]

// Module 12991
import set from "set" /* 2 */;
import sendRequest from "sendRequest" /* 527 */;
import ME from "ME" /* 673 */;

const Endpoints = ME.Endpoints;
const result = set.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(closure_0, closure_6) {
    const HTTP = sendRequest.HTTP;
    obj = { url: Endpoints.NOTE(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: closure_6 };
    return HTTP.put(obj);
  }
};
