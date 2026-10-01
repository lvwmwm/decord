// Module ID: 12450
// Function ID: 12451
// Name: restartVibegrationsAppFrames
// Dependencies: [8499, 8751, 8760, 2]
// Exports: default

// Module 12450 (restartVibegrationsAppFrames)
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import FramesStore from "FramesStore" /* 8499 */;
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
        let tmp8Result = tmp8(8760);
        let demoteMainFrameResult = tmp8Result.demoteMainFrame(tmp3.id);
      }
      continue;
    }
  }
};
