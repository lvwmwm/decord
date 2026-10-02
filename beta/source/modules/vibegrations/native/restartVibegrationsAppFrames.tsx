// Module ID: 12448
// Function ID: 12449
// Name: restartVibegrationsAppFrames
// Dependencies: [8496, 8746, 8755, 2]
// Exports: default

// Module 12448 (restartVibegrationsAppFrames)
import FramesNativeManagerDefault from "FramesNativeManager" /* 8746 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8755 */;
import FramesStore from "FramesStore" /* 8496 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/vibegrations/native/restartVibegrationsAppFrames.tsx");

export default function restartVibegrationsAppFrames(applicationId) {
  let closure_0 = applicationId;
  if (null != applicationId) {
    const items = [];
    HermesBuiltin.arraySpread(items, FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10006 of found) {
      let tmp3 = item10006;
      let surface = item10006.surface;
      let mainFrame = FramesStore.getMainFrame();
      let id1;
      if (mainFrame != null) {
        id1 = mainFrame.id;
      }
      let id = tmp3.id;
      let tmp8 = importDefault;
      let obj = FramesNativeManagerDefault;
      let leaveFrameResult = obj.leaveFrame(tmp3.id);
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId, surface };
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      if (id1 !== id) {
        let tmp8Result = tmp8(8755);
        let demoteMainFrameResult = tmp8Result.demoteMainFrame(tmp3.id);
      }
      continue;
    }
  }
};
