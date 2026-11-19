// Module ID: 18755
// Function ID: 18756
// Name: useChannelAppFrameTeardown
// Dependencies: [19, 4641, 4724, 6502, 6503, 1072, 504, 6834, 2]
// Exports: default

// Module 18755 (useChannelAppFrameTeardown)
import Constants from "Constants" /* 1072 */;
import FramesConstants from "FramesConstants" /* 6503 */;
import leaveFrame from "leaveFrame" /* 6834 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import PermissionStore from "PermissionStore" /* 4724 */;
import FramesStore from "FramesStore" /* 6502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const getFrameSurfaceForChannel = FramesConstants.getFrameSurfaceForChannel;
const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/frames/useChannelAppFrameTeardown.tsx");

export default function useChannelAppFrameTeardown(id) {
  let memo;
  let stateFromStores;
  _require = id;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [id];
  memo = memo.useMemo(() => {
    let tmp2 = null;
    if (null != id) {
      tmp2 = getFrameSurfaceForChannel(tmp);
    }
    return tmp2;
  }, items);
  let obj = require("get initialized");
  const items1 = [stateFromStores, PermissionStore];
  const items2 = [id];
  stateFromStores = obj.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(id);
    const canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
    return canResult;
  }, items2);
  const items3 = [memo, stateFromStores];
  const effect = memo.useEffect(() => {
    if (null != memo) {
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const framesForSurface = FramesStore.getFramesForSurface(tmp);
        for (const item10010 of framesForSurface) {
          let obj = leaveFrame;
          let leaveFrameResult = obj.leaveFrame(item10010.id);
          continue;
        }
      }
    }
  }, items3);
};
