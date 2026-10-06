// Module ID: 11357
// Function ID: 11358
// Name: UploaderError
// Dependencies: [4738, 2]

// Module 11357 (UploaderError)
import APIError from "APIError" /* 4738 */;
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
