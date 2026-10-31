// Module ID: 8278
// Function ID: 8279
// Dependencies: []

// Module 8278
class MetadataMissingError {
  constructor(arg0) {
    const str = arg0 || "No Exif data";
    const error = new Error();
  }
}
let error = new Error();
MetadataMissingError.prototype = error;

export default { MetadataMissingError };
