// Module ID: 4074
// Function ID: 4075
// Name: ArtboardByIndex
// Dependencies: []

// Module 4074 (ArtboardByIndex)
arg5.ArtboardByIndex = (arg0) => {
  if (Number.isInteger(arg0)) {
    const obj = { type: "index", index: null };
    obj[1] = arg0;
    return obj;
  } else {
    const _Error = Error;
    const error = new Error("Artboard index must be an integer");
    throw error;
  }
};
arg5.ArtboardByName = (name) => ({ type: "name", name });
