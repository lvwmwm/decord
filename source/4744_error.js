// Module ID: 4744
// Function ID: 41213
// Name: error
// Dependencies: []

// Module 4744 (error)
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
let error = new Error();
MetadataMissingError.prototype = error;
arg5.default = { MetadataMissingError };
