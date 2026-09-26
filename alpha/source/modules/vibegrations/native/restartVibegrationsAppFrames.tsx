// Module ID: 12450
// Function ID: 12451
// Name: restartVibegrationsAppFrames
// Dependencies: [8499, 8751, 8760, 2]
// Exports: default

// Module 12450 (restartVibegrationsAppFrames)
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import FramesStore from "FramesStore" /* 8499 */;

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
        let tmp7Result = tmp7(8760);
        let demoteMainFrameResult = tmp7Result.demoteMainFrame(tmp2.id);
      }
      continue;
    }
  }
};
