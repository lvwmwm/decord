// Module ID: 5249
// Function ID: 5250
// Name: ArtboardByIndex
// Dependencies: []
// Exports: ArtboardByIndex, ArtboardByName

// Module 5249 (ArtboardByIndex)

export const ArtboardByIndex = function(index) {
  if (Number.isInteger(index)) {
    return { type: "index", index };
  } else {
    const _Error = Error;
    const self = this;
    const self2 = this;
    const error = new Error("Artboard index must be an integer");
    throw error;
  }
};
export const ArtboardByName = (name) => ({ type: "name", name });
