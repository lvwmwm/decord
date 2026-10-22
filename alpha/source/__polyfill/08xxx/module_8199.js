// Module ID: 8199
// Function ID: 8200
// Dependencies: []

// Module 8199
class MetadataMissingError {
  constructor(arg0) {
    const str = arg0 || "No Exif data";
    const error = new Error();
  }
}
let error = new Error();
MetadataMissingError.prototype = error;

export default { MetadataMissingError };
