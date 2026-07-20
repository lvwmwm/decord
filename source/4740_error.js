// Module ID: 4740
// Function ID: 41138
// Name: error
// Dependencies: []

// Module 4740 (error)
class MetadataMissingError {
  constructor(arg0) {
    str = arg0;
    self = this;
    this.name = "MetadataMissingError";
    if (!arg0) {
      str = "No Exif data";
    }
    self.message = str;
    error = new Error();
    self.stack = error.stack;
    return;
  }
}
const error = new Error();
MetadataMissingError.prototype = error;
arg5.default = { MetadataMissingError };
