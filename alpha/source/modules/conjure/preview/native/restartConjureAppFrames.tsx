// Module ID: 11381
// Function ID: 11382
// Name: restartConjureAppFrames
// Dependencies: [10772, 10811, 10769, 2]
// Exports: default

// Module 11381 (restartConjureAppFrames)
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10769 */;
import leaveFrame from "leaveFrame" /* 10811 */;
import FramesStore from "FramesStore" /* 10772 */;
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
      let obj = leaveFrame;
      let leaveFrameResult = obj.leaveFrame(tmp3.id);
      let tmp11 = importDefault;
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId, surface };
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      if (id1 !== id) {
        let tmp11Result = tmp11(10769);
        let demoteMainFrameResult = tmp11Result.demoteMainFrame(tmp3.id);
      }
      continue;
    }
  }
};
