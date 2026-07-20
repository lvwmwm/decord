// Module ID: 11962
// Function ID: 92470
// Dependencies: []

// Module 11962
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("actions/NoteActionCreators.tsx");

export default {
  updateNote(closure_0, closure_5) {
    const HTTP = require(dependencyMap[1]).HTTP;
    let obj = { url: Endpoints.NOTE(closure_0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { note: closure_5 };
    return HTTP.put(obj);
  }
};
