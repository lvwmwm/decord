// Module ID: 4801
// Function ID: 4802
// Name: error
// Dependencies: []

// Module 4801 (error)
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
arg5.default = { MetadataMissingError };
