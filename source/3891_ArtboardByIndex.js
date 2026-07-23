// Module ID: 3891
// Function ID: 32215
// Name: ArtboardByIndex
// Dependencies: []

// Module 3891 (ArtboardByIndex)
arg5.ArtboardByIndex = function ArtboardByIndex(index) {
  if (Number.isInteger(index)) {
    const obj = { type: "index", index };
    return obj;
  } else {
    const _Error = Error;
    const error = new Error("Artboard index must be an integer");
    throw error;
  }
};
arg5.ArtboardByName = function ArtboardByName(name) {
  return { type: "name", name };
};
