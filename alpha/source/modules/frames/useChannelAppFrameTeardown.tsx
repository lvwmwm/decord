// Module ID: 16801
// Function ID: 16802
// Name: useChannelAppFrameTeardown
// Dependencies: [19, 2051, 4515, 9000, 8738, 1085, 558, 576, 504, 9076, 2]

// Module 16801 (useChannelAppFrameTeardown)
import Constants from "Constants" /* 1085 */;
import FramesConstants from "FramesConstants" /* 8738 */;
import getFramesManagerDefault from "getFramesManager" /* 9076 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import FramesStore from "FramesStore" /* 9000 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, id;

const getFrameSurfaceForChannel = FramesConstants.getFrameSurfaceForChannel;
const Permissions = Constants.Permissions;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let stateFromStores;
  let tmp11;
  let tmp12;
  let tmp5;
  let tmp8;
  const tmp = id;
  let tmp2 = stateFromStores;
  let obj = id(stateFromStores[7]);
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
  let closure_1 = tmp5;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[2] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== id) {
    const fn = function _() {
      const channel = ChannelStore.getChannel(id);
      const canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
      return canResult;
    };
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp12 = items1;
    tmp11 = fn;
  } else {
    tmp11 = cResult[4];
    tmp12 = cResult[5];
  }
  const tmpResult = tmp(tmp2[8]);
  stateFromStores = tmpResult.useStateFromStores(tmp8, tmp11, tmp12);
  if (cResult[6] === stateFromStores) {
    let tmp14;
    let tmp15;
    if (cResult[7] === tmp5) {
      tmp14 = cResult[8];
      tmp15 = cResult[9];
    }
    const effect = react.useEffect(tmp14, tmp15);
  }
  const fn2 = function h() {
    if (null != closure_1) {
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const framesForSurface = FramesStore.getFramesForSurface(tmp);
        for (const item10010 of framesForSurface) {
          let obj = getFramesManagerDefault();
          let leaveFrameResult = obj.leaveFrame(item10010.id);
          continue;
        }
      }
    }
  };
  const items2 = [tmp5, stateFromStores];
  cResult[6] = stateFromStores;
  cResult[7] = tmp5;
  cResult[8] = fn2;
  cResult[9] = items2;
  tmp15 = items2;
  tmp14 = fn2;
}) : ((id) => {
  let stateFromStores;
  _require = id;
  id = undefined;
  if (id != null) {
    id = id.id;
  }
  const items = [id];
  const memo = stateFromStores.useMemo(() => {
    let tmp2 = null;
    if (null != id) {
      tmp2 = getFrameSurfaceForChannel(tmp);
    }
    return tmp2;
  }, items);
  let obj = require("get initialized");
  const items1 = [ChannelStore, PermissionStore];
  const items2 = [id];
  stateFromStores = obj.useStateFromStores(items1, () => {
    const channel = ChannelStore.getChannel(id);
    const canResult = null != channel && PermissionStore.can(Permissions.VIEW_CHANNEL, channel);
    return canResult;
  }, items2);
  const items3 = [memo, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    if (null != memo) {
      const tmp2 = stateFromStores;
      if (!tmp2) {
        const framesForSurface = FramesStore.getFramesForSurface(tmp);
        for (const item10010 of framesForSurface) {
          let obj = getFramesManagerDefault();
          let leaveFrameResult = obj.leaveFrame(item10010.id);
          continue;
        }
      }
    }
  }, items3);
});
const result = size.fileFinishedImporting("modules/frames/useChannelAppFrameTeardown.tsx");

export default tmp2;
