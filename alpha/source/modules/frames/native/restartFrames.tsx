// Module ID: 14289
// Function ID: 14290
// Name: restartFrames
// Dependencies: [6531, 6532, 10582, 2]
// Exports: restartAppFrames

// Module 14289 (restartFrames)
import FramesConstants from "FramesConstants" /* 6532 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10582 */;
import FramesStore from "FramesStore" /* 6531 */;
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
