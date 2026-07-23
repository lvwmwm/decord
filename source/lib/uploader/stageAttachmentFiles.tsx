// Module ID: 7083
// Function ID: 56702
// Name: _stageAttachmentFiles
// Dependencies: [5, 653, 4664, 2]
// Exports: default

// Module 7083 (_stageAttachmentFiles)
import asyncGeneratorStep from "asyncGeneratorStep";
import { AbortCodes } from "ME";

const require = arg1;
async function _stageAttachmentFiles(arg0, arg1) {
  let iter = (function*(arr) {
    let flag = arg1;
    if (flag === undefined) {
      flag = false;
    }
    let closure_1 = arg2;
    yield undefined;
    yield Promise.all(arr.map((arg0) => {
      let closure_0 = arg0;
      return new Promise((arg0, arg1) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        const status = closure_0.status;
        if (outer4_0(outer4_1[2]).CloudUploadStatus.NOT_STARTED === status) {
          closure_0.upload();
        } else if (outer4_0(outer4_1[2]).CloudUploadStatus.COMPLETED === status) {
          arg0("complete");
        } else if (outer4_0(outer4_1[2]).CloudUploadStatus.ERROR === status) {
          if (closure_0) {
            if (closure_0.error !== outer4_3.ENTITY_TOO_LARGE) {
              closure_0.upload();
            }
          }
          const _Error2 = Error;
          let error = new Error("File failed to upload");
          arg1(error);
        } else if (outer4_0(outer4_1[2]).CloudUploadStatus.CANCELED === status) {
          const _Error = Error;
          const error1 = new Error("Upload is canceled");
          arg1(error1);
        } else if (outer4_0(outer4_1[2]).CloudUploadStatus.REMOVED_FROM_MSG_DRAFT === status) {
          const _Error3 = Error;
          const error2 = new Error("Upload is removed from draft");
          arg1(error2);
        }
        closure_0.on("complete", () => {
          lib("complete");
        });
        closure_0.on("error", () => {
          const error = new Error("File " + lib.id + " failed to upload");
          callback(error);
        });
        closure_0.on("progress", (arg0, arg1) => {
          if (null != outer2_1) {
            outer2_1(arg0, arg1);
          }
        });
      });
    }));
  })();
  iter.next();
  return iter;
}
const result = require("_callSuper").fileFinishedImporting("lib/uploader/stageAttachmentFiles.tsx");

export default function stageAttachmentFiles() {
  return _stageAttachmentFiles(...arguments);
};
