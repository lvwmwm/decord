// Module ID: 4626
// Function ID: 4627
// Name: ArtboardByIndex
// Dependencies: []
// Exports: ArtboardByIndex, ArtboardByName

// Module 4626 (ArtboardByIndex)

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
