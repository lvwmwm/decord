// Module ID: 7077
// Function ID: 56645
// Name: _stageAttachmentFiles
// Dependencies: []
// Exports: default

// Module 7077 (_stageAttachmentFiles)
async function _stageAttachmentFiles(arg0, arg1) {
  const fn = function*(arr) {
    let flag = arg1;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    yield Promise.all(arr.map((arg0) => new Promise((self) => {
      const status = self.status;
      if (self(arg1[2]).CloudUploadStatus.NOT_STARTED === status) {
        self.upload();
      } else if (self(arg1[2]).CloudUploadStatus.COMPLETED === status) {
        self("complete");
      } else if (self(arg1[2]).CloudUploadStatus.ERROR === status) {
        if (self) {
          if (self.error !== constants.ENTITY_TOO_LARGE) {
            self.upload();
          }
        }
        const _Error2 = Error;
        const error = new Error("File failed to upload");
        arg1(error);
      } else if (self(arg1[2]).CloudUploadStatus.CANCELED === status) {
        const _Error = Error;
        const error1 = new Error("Upload is canceled");
        arg1(error1);
      } else if (self(arg1[2]).CloudUploadStatus.REMOVED_FROM_MSG_DRAFT === status) {
        const _Error3 = Error;
        const error2 = new Error("Upload is removed from draft");
        arg1(error2);
      }
      self.on("complete", () => {
        arg0("complete");
      });
      self.on("error", () => {
        const error = new Error("File " + arg0.id + " failed to upload");
        arg1(error);
      });
      self.on("progress", (arg0, arg1) => {
        if (null != arg1) {
          arg1(arg0, arg1);
        }
      });
    })));
  };
  fn.next();
  return fn;
}
let closure_2 = importDefault(dependencyMap[0]);
const AbortCodes = arg1(dependencyMap[1]).AbortCodes;
const result = arg1(dependencyMap[3]).fileFinishedImporting("lib/uploader/stageAttachmentFiles.tsx");

export default function stageAttachmentFiles() {
  return _stageAttachmentFiles(...arguments);
};
