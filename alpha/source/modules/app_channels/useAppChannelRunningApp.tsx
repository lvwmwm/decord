// Module ID: 13766
// Function ID: 13767
// Name: useAppChannelRunningApp
// Dependencies: [6754, 1087, 6755, 558, 576, 504, 13767, 1128, 2]

// Module 13766 (useAppChannelRunningApp)
import Constants from "Constants" /* 1087 */;
import FramesConstants from "FramesConstants" /* 6755 */;
import useFrameRunsInBackgroundDefault from "useFrameRunsInBackground" /* 13767 */;
import FramesStore from "FramesStore" /* 6754 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const ChannelTypes = Constants.ChannelTypes;
const getFrameSurfaceForChannel = FramesConstants.getFrameSurfaceForChannel;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelRunningApp(arg0) {
  let first;
  let tmp10;
  let tmp6;
  let tmp7;
  let type;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      let tmp2 = null;
      if (type.type === ChannelTypes.GUILD_APP) {
        tmp2 = getFrameSurfaceForChannel(tmp);
      }
      let tmp4;
      if (null != tmp2) {
        const first = FramesStore.getFramesForSurface(tmp2)[0];
        let id;
        if (first != null) {
          id = first.id;
        }
        tmp4 = id;
      }
      if (tmp4 == null) {
        tmp4 = null;
      }
      return tmp4;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  const tmp9 = useFrameRunsInBackgroundDefault(stateFromStores);
  if (cResult[4] !== tmp9) {
    let stringResult = null;
    if (tmp9) {
      const intl = tmp(1128).intl;
      stringResult = intl.string(tmp(1128).t["1yCkJY"]);
    }
    cResult[4] = tmp9;
    cResult[5] = stringResult;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] === stateFromStores) {
    let tmp12;
    if (cResult[7] === tmp10) {
      tmp12 = cResult[8];
    }
    return tmp12;
  }
  const obj2 = { frameId: stateFromStores, runningLabel: tmp10 };
  cResult[6] = stateFromStores;
  cResult[7] = tmp10;
  cResult[8] = obj2;
  tmp12 = obj2;
}) : (function useAppChannelRunningApp(arg0) {
  let stringResult;
  let type;
  _require = arg0;
  const tmp = _require;
  let tmp2 = dependencyMap;
  const items = [FramesStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (type.type === ChannelTypes.GUILD_APP) {
      tmp2 = getFrameSurfaceForChannel(tmp);
    }
    let tmp4;
    if (null != tmp2) {
      const first = FramesStore.getFramesForSurface(tmp2)[0];
      let id;
      if (first != null) {
        id = first.id;
      }
      tmp4 = id;
    }
    if (tmp4 == null) {
      tmp4 = null;
    }
    return tmp4;
  }, items1);
  const obj2 = { frameId: stateFromStores, runningLabel: stringResult };
  stringResult = null;
  if (useFrameRunsInBackgroundDefault(stateFromStores)) {
    const intl = tmp(1128).intl;
    stringResult = intl.string(tmp(1128).t["1yCkJY"]);
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelRunningApp.tsx");

export default tmp2;
