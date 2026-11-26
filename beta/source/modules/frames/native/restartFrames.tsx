// Module ID: 14373
// Function ID: 14374
// Name: restartFrames
// Dependencies: [6623, 6624, 10627, 2]
// Exports: restartAppFrames

// Module 14373 (restartFrames)
import FramesConstants from "FramesConstants" /* 6624 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10627 */;
import FramesStore from "FramesStore" /* 6623 */;
import size from "module_2" /* 2 */;

function restartFrame(frame) {
  const tmp = isLaunched(frame) && !frame.data.proxyTicketRefreshing;
  if (tmp) {
    const obj = FramesActionCreatorsDefault;
    const refreshProxyTicketResult = obj.refreshProxyTicket(frame.id);
    refreshProxyTicketResult.catch(() => {

    });
  }
}
const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/frames/native/restartFrames.tsx");

export { restartFrame };
export function restartAppFrames(application_id) {
  if (null != application_id) {
    const allFrames = FramesStore.getAllFrames();
    for (const item10010 of allFrames) {
      if (item10010.applicationId === application_id) {
        let tmp8 = restartFrame(tmp5);
      }
      continue;
    }
  }
}
