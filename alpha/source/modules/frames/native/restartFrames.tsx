// Module ID: 11064
// Function ID: 11065
// Name: restartFrames
// Dependencies: [6966, 6967, 11065, 2]
// Exports: restartAppFrames

// Module 11064 (restartFrames)
import FramesConstants from "FramesConstants" /* 6967 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 11065 */;
import FramesStore from "FramesStore" /* 6966 */;
import size from "module_2" /* 2 */;

function restartFrame(data) {
  const tmp = isLaunched(data) && !data.data.proxyTicketRefreshing;
  if (tmp) {
    const obj = FramesActionCreatorsDefault;
    const refreshProxyTicketResult = obj.refreshProxyTicket(data.id);
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
