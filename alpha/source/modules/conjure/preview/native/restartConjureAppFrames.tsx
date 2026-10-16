// Module ID: 10962
// Function ID: 10963
// Name: restartConjureAppFrames
// Dependencies: [10950, 10934, 10963, 10964, 2]
// Exports: default

// Module 10962 (restartConjureAppFrames)
import FramesConstants from "FramesConstants" /* 10934 */;
import leaveFrame from "leaveFrame" /* 10963 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10964 */;
import FramesStore from "FramesStore" /* 10950 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/conjure/preview/native/restartConjureAppFrames.tsx");

export default function restartConjureAppFrames(applicationId) {
  let closure_0 = applicationId;
  if (null != applicationId) {
    const items = [];
    HermesBuiltin.arraySpread(items, FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10007 of found) {
      let tmp3 = item10007;
      let surface = item10007.surface;
      let launch;
      if (isLaunched(item10007)) {
        launch = tmp3.data.launch;
      }
      let tmp7 = launch;
      let mainFrame = FramesStore.getMainFrame();
      let id1;
      if (mainFrame != null) {
        id1 = mainFrame.id;
      }
      let id = tmp3.id;
      let obj = leaveFrame;
      let leaveFrameResult = obj.leaveFrame(tmp3.id);
      let tmp15 = importDefault;
      let obj2 = FramesActionCreatorsDefault;
      let obj3 = { applicationId, surface, launch: tmp7 };
      let launchFrameResult = obj2.launchFrame(obj3);
      let catchPromise = launchFrameResult.catch(() => {

      });
      if (id1 !== id) {
        let tmp15Result = tmp15(10964);
        let demoteMainFrameResult = tmp15Result.demoteMainFrame(tmp3.id);
      }
      continue;
    }
  }
};
