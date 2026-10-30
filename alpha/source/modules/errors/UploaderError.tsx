// Module ID: 13711
// Function ID: 13712
// Name: UploaderError
// Dependencies: [6441, 2]

// Module 13711 (UploaderError)
import APIError from "APIError" /* 6441 */;
import size from "module_2" /* 2 */;

class UploaderError extends APIError {
  constructor(body, arg1) {
    const tmp2 = new tmp(body, arg1, new.target, tmp, this);
    tmp2.attachments = [];
    const tmp3 = null != body.body && null != body.body.attachments;
    if (tmp3) {
      tmp2.attachments = body.body.attachments;
    }
    return tmp2;
  }
}
const result = size.fileFinishedImporting("modules/errors/UploaderError.tsx");

export default UploaderError;
