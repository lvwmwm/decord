// Module ID: 11720
// Function ID: 11721
// Name: useVideoStreamError
// Dependencies: [502, 11721, 5763, 504, 5942, 2]
// Exports: default, useVideoStreamErrorContext

// Module 11720 (useVideoStreamError)
import Constants from "Constants" /* 5763 */;
import AVError from "AVError" /* 5942 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import AVErrorStore from "AVErrorStore" /* 11721 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const MediaEngineContextTypes = Constants.MediaEngineContextTypes;
const result = size.fileFinishedImporting("modules/errors/hooks/useVideoStreamError.tsx");

export default function useVideoStreamError(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const obj = require("get initialized");
  let items = [AVErrorStore, AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    if (AuthenticationStore.getId() === closure_1) {
      let activeErrorsOfType;
      if (closure_0 === MediaEngineContextTypes.STREAM) {
        activeErrorsOfType = AVErrorStore.getActiveErrorsOfType(AVError.AVError.SCREENSHARE_OS_ERROR);
      } else {
        activeErrorsOfType = [];
      }
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, activeErrorsOfType, 0);
      const arraySpreadResult5 = HermesBuiltin.arraySpread(items, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT), arraySpreadResult);
      HermesBuiltin.arraySpread(items, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM), arraySpreadResult5);
      let tmp9 = items;
    } else {
      const items1 = [];
      const arraySpreadResult7 = HermesBuiltin.arraySpread(items1, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      HermesBuiltin.arraySpread(items1, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult7);
      tmp9 = items1;
    }
    for (const item10067 of tmp9) {
      if (item10067.mediaContext === closure_0) {
        if (tmp25.userId === closure_1) {
          obj.return();
          return item10067;
        }
      }
      continue;
    }
  });
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  return type;
};
export function useVideoStreamErrorContext(arg0, arg1) {
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  const items = [AVErrorStore, AuthenticationStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    if (AuthenticationStore.getId() === closure_1) {
      let activeErrorsOfType;
      if (closure_0 === MediaEngineContextTypes.STREAM) {
        activeErrorsOfType = AVErrorStore.getActiveErrorsOfType(AVError.AVError.SCREENSHARE_OS_ERROR);
      } else {
        activeErrorsOfType = [];
      }
      const items = [];
      const arraySpreadResult = HermesBuiltin.arraySpread(items, activeErrorsOfType, 0);
      const arraySpreadResult5 = HermesBuiltin.arraySpread(items, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT), arraySpreadResult);
      HermesBuiltin.arraySpread(items, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM), arraySpreadResult5);
      let tmp9 = items;
    } else {
      const items1 = [];
      const arraySpreadResult7 = HermesBuiltin.arraySpread(items1, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT), 0);
      HermesBuiltin.arraySpread(items1, AVErrorStore.getActiveErrorsOfType(AVError.AVError.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM), arraySpreadResult7);
      tmp9 = items1;
    }
    for (const item10067 of tmp9) {
      if (item10067.mediaContext === closure_0) {
        if (tmp25.userId === closure_1) {
          obj.return();
          return item10067;
        }
      }
      continue;
    }
  });
}
