// Module ID: 11055
// Function ID: 11056
// Name: restartFrames
// Dependencies: [6723, 6724, 11056, 11057, 2]
// Exports: restartAppFrames

// Module 11055 (restartFrames)
import FramesConstants from "FramesConstants" /* 6724 */;
import leaveFrame from "leaveFrame" /* 11056 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11057 */;
import FramesStore from "FramesStore" /* 6723 */;
import size from "module_2" /* 2 */;

function restartFrame(item10016) {
  let launch;
  if (isLaunched(item10016)) {
    launch = item10016.data.launch;
  }
  const mainFrame = FramesStore.getMainFrame();
  let id1;
  if (mainFrame != null) {
    id1 = mainFrame.id;
  }
  const id = item10016.id;
  const obj = leaveFrame;
  obj.leaveFrame(item10016.id);
  const obj2 = FramesActionCreatorsDefault;
  const obj3 = { applicationId: item10016.applicationId, surface: item10016.surface, launch };
  const launchFrameResult = obj2.launchFrame(obj3);
  launchFrameResult.catch(() => {

  });
  if (id1 !== id) {
    const tmp6Result = FramesActionCreatorsDefault;
    tmp6Result.demoteMainFrame(item10016.id);
  }
}
const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/native/restartFrames.tsx");

export { restartFrame };
export const restartAppFrames = function restartAppFrames(c0) {
  let closure_0 = c0;
  if (null != c0) {
    const items = [];
    HermesBuiltin.arraySpread(items, FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10016 of found) {
      let tmp9 = restartFrame(item10016);
      continue;
    }
  }
};
