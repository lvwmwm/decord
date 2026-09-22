// Module ID: 5293
// Function ID: 5294
// Dependencies: []

// Module 5293
class MetadataMissingError {
  constructor(arg0) {
    obj = { name: "MetadataMissingError" };
    str = arg0;
    if (!arg0) {
      str = "No Exif data";
    }
    obj.message = str;
    error = new Error();
    obj.stack = error.stack;
    return;
  }
}
let error = new Error();
MetadataMissingError.prototype = error;

export default { MetadataMissingError };
