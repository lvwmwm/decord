// Module ID: 3926
// Function ID: 32330
// Name: ArtboardByIndex
// Dependencies: []

// Module 3926 (ArtboardByIndex)
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
