// Module ID: 4046
// Function ID: 4047
// Name: ArtboardByIndex
// Dependencies: []

// Module 4046 (ArtboardByIndex)
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
