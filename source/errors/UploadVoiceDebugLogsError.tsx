// Module ID: 4034
// Function ID: 33585
// Name: UploadVoiceDebugLogsError
// Dependencies: []

// Module 4034 (UploadVoiceDebugLogsError)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const obj = { GENERAL: 0, [0]: "GENERAL", NO_FILE: 1, [1]: "NO_FILE", PROGRESS: 2, [2]: "PROGRESS", UPLOAD: 3, [3]: "UPLOAD", READ: 4, [4]: "READ" };
const tmp2 = () => {
  class UploadVoiceDebugLogsError {
    constructor(arg0) {
      tmp = closure_2(this, UploadVoiceDebugLogsError);
      this.code = arg0;
      return;
    }
  }
  const arg1 = UploadVoiceDebugLogsError;
  const items = [
    {
      key: "displayMessage",
      get() {
        const code = this.code;
        if (constants.NO_FILE === code) {
          const intl5 = UploadVoiceDebugLogsError(closure_1[2]).intl;
          return intl5.string(UploadVoiceDebugLogsError(closure_1[2]).t.dDMp2Z);
        } else if (constants.PROGRESS === code) {
          const intl4 = UploadVoiceDebugLogsError(closure_1[2]).intl;
          return intl4.string(UploadVoiceDebugLogsError(closure_1[2]).t.XBxyvo);
        } else if (constants.UPLOAD === code) {
          const intl3 = UploadVoiceDebugLogsError(closure_1[2]).intl;
          return intl3.string(UploadVoiceDebugLogsError(closure_1[2]).t.6b6rwk);
        } else if (constants.READ === code) {
          const intl2 = UploadVoiceDebugLogsError(closure_1[2]).intl;
          return intl2.string(UploadVoiceDebugLogsError(closure_1[2]).t.VUc3ti);
        } else {
          const GENERAL = constants.GENERAL;
          const intl = UploadVoiceDebugLogsError(closure_1[2]).intl;
          return intl.string(UploadVoiceDebugLogsError(closure_1[2]).t.VzHcSm);
        }
      }
    }
  ];
  return callback(UploadVoiceDebugLogsError, items);
}();
const result = arg1(dependencyMap[3]).fileFinishedImporting("errors/UploadVoiceDebugLogsError.tsx");

export default tmp2;
export const UploadErrorCodes = obj;
