// Module ID: 17303
// Function ID: 17304
// Name: useChannelAppFrameTeardown
// Dependencies: [19, 2065, 4750, 10807, 10802, 1085, 558, 576, 504, 10821, 2]

// Module 17303 (useChannelAppFrameTeardown)
import Constants from "Constants" /* 1085 */;
import FramesConstants from "FramesConstants" /* 10802 */;
import leaveFrame from "leaveFrame" /* 10821 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import FramesStore from "FramesStore" /* 10807 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const getFrameSurfaceForChannel = FramesConstants.getFrameSurfaceForChannel;
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelAppFrameTeardown(id) {
  let closure_1;
  let fn;
  let items2;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp8;
  const tmp = id;
  let tmp2 = dependencyMap;
  let obj = id(576);
  const cResult = obj.c(10);
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  if (cResult[0] !== id) {
    let tmp6 = null;
    if (null != id) {
      let tmp7 = getFrameSurfaceForChannel;
      tmp6 = getFrameSurfaceForChannel(id);
    }
    cResult[0] = id;
    cResult[1] = tmp6;
    tmp5 = tmp6;
  } else {
    tmp5 = cResult[1];
  }
  dependencyMap = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== id) {
    class C {
      constructor() {
        const channel = ChannelStore.getChannel(id);
        const canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
        return canResult;
      }
    }
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = C;
    cResult[5] = items1;
    tmp12 = items1;
    tmp11 = C;
  } else {
    class C {
      constructor() {
        const channel = ChannelStore.getChannel(id);
        const canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
        return canResult;
      }
    }
    tmp12 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp11, tmp12);
  if (cResult[6] === stateFromStores) {
    class C {
      constructor() {
        const channel = ChannelStore.getChannel(id);
        const canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
        return canResult;
      }
    }
    const effect = stateFromStores.useEffect(fn, items2);
  }
  fn = function _() {
    if (null != closure_1) {
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
  };
  items2 = [tmp5, stateFromStores];
  cResult[6] = stateFromStores;
  cResult[7] = tmp5;
  cResult[8] = fn;
  cResult[9] = items2;
}) : (function useChannelAppFrameTeardown(id) {
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
});
const result = size.fileFinishedImporting("modules/frames/useChannelAppFrameTeardown.tsx");

export default tmp2;
