// Module ID: 10878
// Function ID: 10879
// Name: restartFrames
// Dependencies: [6833, 6834, 10879, 10880, 2]
// Exports: restartAppFrames

// Module 10878 (restartFrames)
import FramesConstants from "FramesConstants" /* 6834 */;
import leaveFrame from "leaveFrame" /* 10879 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10880 */;
import FramesStore from "FramesStore" /* 6833 */;
import size from "module_2" /* 2 */;

function restartFrame(item10016) {
  let launch;
  const tmp = isLaunched;
  if (isLaunched(item10016)) {
    launch = item10016.data.launch;
  }
  let invite;
  if (tmp(item10016)) {
    invite = item10016.data.invite;
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
  const obj3 = { applicationId: item10016.applicationId, surface: item10016.surface, launch, invite };
  const launchFrameResult = obj2.launchFrame(obj3);
  launchFrameResult.catch(() => {

  });
  if (id1 !== id) {
    const tmp8Result = FramesActionCreatorsDefault;
    tmp8Result.demoteMainFrame(item10016.id);
  }
}
const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/native/restartFrames.tsx");

export { restartFrame };
export function restartAppFrames(application_id) {
  let closure_0 = application_id;
  if (null != application_id) {
    const items = [];
    HermesBuiltin.arraySpread(items, FramesStore.getAllFrames(), 0);
    const found = items.filter((applicationId) => applicationId.applicationId === closure_0);
    for (const item10016 of found) {
      let tmp9 = restartFrame(item10016);
      continue;
    }
  }
}
