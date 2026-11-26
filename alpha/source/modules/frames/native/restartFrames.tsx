// Module ID: 14071
// Function ID: 14072
// Name: restartFrames
// Dependencies: [6936, 6937, 9996, 2]
// Exports: restartAppFrames

// Module 14071 (restartFrames)
import FramesConstants from "FramesConstants" /* 6937 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9996 */;
import FramesStore from "FramesStore" /* 6936 */;
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
