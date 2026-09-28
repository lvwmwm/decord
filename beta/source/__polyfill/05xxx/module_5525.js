// Module ID: 5525
// Function ID: 5526
// Dependencies: []

// Module 5525
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
