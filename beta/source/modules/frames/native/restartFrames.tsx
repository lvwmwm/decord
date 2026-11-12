// Module ID: 11092
// Function ID: 11093
// Name: restartFrames
// Dependencies: [6934, 6935, 11093, 2]
// Exports: restartAppFrames

// Module 11092 (restartFrames)
import FramesConstants from "FramesConstants" /* 6935 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11093 */;
import FramesStore from "FramesStore" /* 6934 */;
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
