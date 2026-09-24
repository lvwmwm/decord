// Module ID: 4591
// Function ID: 4592
// Name: ArtboardByIndex
// Dependencies: []
// Exports: ArtboardByIndex, ArtboardByName

// Module 4591 (ArtboardByIndex)

export const ArtboardByIndex = (index) => {
  if (Number.isInteger(index)) {
    const obj = { type: "index", index };
    return obj;
  } else {
    const _Error = Error;
    const error = new Error("Artboard index must be an integer");
    throw error;
  }
};
export (name) => ({ type: "name", name })
