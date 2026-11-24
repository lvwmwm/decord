// Module ID: 13896
// Function ID: 13897
// Name: restartFrames
// Dependencies: [6810, 6811, 9855, 2]
// Exports: restartAppFrames

// Module 13896 (restartFrames)
import FramesConstants from "FramesConstants" /* 6811 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9855 */;
import FramesStore from "FramesStore" /* 6810 */;
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
