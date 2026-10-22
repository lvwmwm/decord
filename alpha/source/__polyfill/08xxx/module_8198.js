// Module ID: 8198
// Function ID: 8199
// Dependencies: []

// Module 8198
class MetadataMissingError {
  constructor(arg0) {
    const str = arg0 || "No Exif data";
    const error = new Error();
  }
}
let error = new Error();
MetadataMissingError.prototype = error;

export default { MetadataMissingError };
