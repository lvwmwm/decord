// Module ID: 4036
// Function ID: 33596
// Name: UploadVoiceDebugLogsError
// Dependencies: [6, 7, 1212, 2]

// Module 4036 (UploadVoiceDebugLogsError)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
const obj = { GENERAL: 0, [0]: "GENERAL", NO_FILE: 1, [1]: "NO_FILE", PROGRESS: 2, [2]: "PROGRESS", UPLOAD: 3, [3]: "UPLOAD", READ: 4, [4]: "READ" };
const tmp2 = (() => {
  class UploadVoiceDebugLogsError {
    constructor(arg0) {
      tmp = outer1_2(this, UploadVoiceDebugLogsError);
      this.code = arg0;
      return;
    }
  }
  const items = [
    {
      key: "displayMessage",
      get() {
        const code = this.code;
        if (outer1_4.NO_FILE === code) {
          const intl5 = UploadVoiceDebugLogsError(outer1_1[2]).intl;
          return intl5.string(UploadVoiceDebugLogsError(outer1_1[2]).t.dDMp2Z);
        } else if (outer1_4.PROGRESS === code) {
          const intl4 = UploadVoiceDebugLogsError(outer1_1[2]).intl;
          return intl4.string(UploadVoiceDebugLogsError(outer1_1[2]).t.XBxyvo);
        } else if (outer1_4.UPLOAD === code) {
          const intl3 = UploadVoiceDebugLogsError(outer1_1[2]).intl;
          return intl3.string(UploadVoiceDebugLogsError(outer1_1[2]).t["6b6rwk"]);
        } else if (outer1_4.READ === code) {
          const intl2 = UploadVoiceDebugLogsError(outer1_1[2]).intl;
          return intl2.string(UploadVoiceDebugLogsError(outer1_1[2]).t.VUc3ti);
        } else {
          const GENERAL = outer1_4.GENERAL;
          const intl = UploadVoiceDebugLogsError(outer1_1[2]).intl;
          return intl.string(UploadVoiceDebugLogsError(outer1_1[2]).t.VzHcSm);
        }
      }
    }
  ];
  return callback(UploadVoiceDebugLogsError, items);
})();
const result = require("getSystemLocale").fileFinishedImporting("errors/UploadVoiceDebugLogsError.tsx");

export default tmp2;
export const UploadErrorCodes = obj;
