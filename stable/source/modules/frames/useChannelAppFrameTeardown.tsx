// Module ID: 19073
// Function ID: 19074
// Name: useChannelAppFrameTeardown
// Dependencies: [19, 5019, 5102, 6934, 6935, 1072, 504, 11047, 2]
// Exports: default

// Module 19073 (useChannelAppFrameTeardown)
import Constants from "Constants" /* 1072 */;
import FramesConstants from "FramesConstants" /* 6935 */;
import leaveFrame from "leaveFrame" /* 11047 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import PermissionStore from "PermissionStore" /* 5102 */;
import FramesStore from "FramesStore" /* 6934 */;
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
