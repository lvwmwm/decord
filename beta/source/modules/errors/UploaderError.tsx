// Module ID: 12129
// Function ID: 12130
// Name: UploaderError
// Dependencies: [4660, 2]

// Module 12129 (UploaderError)
import APIError from "APIError" /* 4660 */;

const prototype = function UploaderError(body, arg1) {
  const tmp2 = new tmp(body, arg1, new.target, tmp, new.target);
  tmp2.attachments = [];
  if (tmp3) {
    tmp2.attachments = body.body.attachments;
  }
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/UploaderError.tsx");

export default prototype;
