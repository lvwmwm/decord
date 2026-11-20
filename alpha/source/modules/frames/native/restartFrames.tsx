// Module ID: 14240
// Function ID: 14241
// Name: restartFrames
// Dependencies: [6504, 6505, 10502, 2]
// Exports: restartAppFrames

// Module 14240 (restartFrames)
import FramesConstants from "FramesConstants" /* 6505 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10502 */;
import FramesStore from "FramesStore" /* 6504 */;
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
