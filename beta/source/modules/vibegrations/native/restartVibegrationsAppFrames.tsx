// Module ID: 13222
// Function ID: 13223
// Name: restartVibegrationsAppFrames
// Dependencies: [9343, 9590, 9599, 2]
// Exports: default

// Module 13222 (restartVibegrationsAppFrames)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9590 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9599 */;
import FramesStore from "FramesStore" /* 9343 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/restartVibegrationsAppFrames.tsx");

export default function restartVibegrationsAppFrames(applicationId) {
  closure_0 = applicationId;
  if (null != applicationId) {
    const items = [];
    HermesBuiltin.arraySpread(FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10006 of found) {
      let tmp2 = item10006;
      let surface = item10006.surface;
      let mainFrame = FramesStore.getMainFrame();
      let id;
      if (mainFrame != null) {
        id = mainFrame.id;
      }
      let tmp7 = importDefault;
      let obj = FramesNativeManagerDefault;
      let leaveFrameResult = obj.leaveFrame(tmp2.id);
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId: arg0, surface: null };
      obj3.surface = surface;
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      if (id !== tmp2.id) {
        let tmp7Result = tmp7(9599);
        let demoteMainFrameResult = tmp7Result.demoteMainFrame(tmp2.id);
      }
      continue;
    }
  }
};
