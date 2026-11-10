// Module ID: 10926
// Function ID: 10927
// Name: restartFrames
// Dependencies: [6846, 6847, 10927, 2]
// Exports: restartAppFrames

// Module 10926 (restartFrames)
import FramesConstants from "FramesConstants" /* 6847 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 10927 */;
import FramesStore from "FramesStore" /* 6846 */;
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
