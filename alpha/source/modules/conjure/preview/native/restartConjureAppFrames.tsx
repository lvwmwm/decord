// Module ID: 8977
// Function ID: 8978
// Name: restartConjureAppFrames
// Dependencies: [8703, 8978, 8986, 2]
// Exports: default

// Module 8977 (restartConjureAppFrames)
import FramesNativeManagerDefault from "FramesNativeManager" /* 8978 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8986 */;
import FramesStore from "FramesStore" /* 8703 */;
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
        let tmp8Result = tmp8(8986);
        let demoteMainFrameResult = tmp8Result.demoteMainFrame(tmp3.id);
      }
      continue;
    }
  }
};
