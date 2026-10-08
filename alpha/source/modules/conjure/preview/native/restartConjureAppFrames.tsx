// Module ID: 12376
// Function ID: 12377
// Name: restartConjureAppFrames
// Dependencies: [10612, 11150, 10618, 2]
// Exports: default

// Module 12376 (restartConjureAppFrames)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10618 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 11150 */;
import FramesStore from "FramesStore" /* 10612 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/preview/native/restartConjureAppFrames.tsx");

export default function restartConjureAppFrames(applicationId) {
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
        let tmp8Result = tmp8(10618);
        let demoteMainFrameResult = tmp8Result.demoteMainFrame(tmp3.id);
      }
      continue;
    }
  }
};
