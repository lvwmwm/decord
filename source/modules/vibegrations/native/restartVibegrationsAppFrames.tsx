// Module ID: 13254
// Function ID: 13255
// Name: restartVibegrationsAppFrames
// Dependencies: [9510, 9568, 9507, 2]
// Exports: default

// Module 13254 (restartVibegrationsAppFrames)
import _launchFrameOnNativeDefault from "_launchFrameOnNative" /* 9507 */;
import postMessageToWebViewDefault from "postMessageToWebView" /* 9568 */;
import closure_2 from "map" /* 9510 */;

const result = require("set").fileFinishedImporting("modules/vibegrations/native/restartVibegrationsAppFrames.tsx");

export default function restartVibegrationsAppFrames(arg0) {
  importDefault = arg0;
  if (null != arg0) {
    const items = [];
    HermesBuiltin.arraySpread(allFrames.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10003 of found) {
      let tmp2 = importDefault;
      let tmp3 = dependencyMap;
      let obj = postMessageToWebViewDefault;
      let leaveFrameResult = obj.leaveFrame(item10003.id);
      let obj2 = _launchFrameOnNativeDefault;
      obj = { applicationId: null, surface: null };
      obj[0] = arg0;
      obj[1] = item10003.surface;
      let launchFrameResult = obj2.launchFrame(obj);
      let catchPromise = launchFrameResult.catch(() => {

      });
      continue;
    }
  }
};
