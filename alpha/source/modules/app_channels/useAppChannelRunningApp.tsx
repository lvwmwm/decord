// Module ID: 14330
// Function ID: 14331
// Name: useAppChannelRunningApp
// Dependencies: [6833, 1084, 6834, 558, 576, 504, 14331, 1125, 2]

// Module 14330 (useAppChannelRunningApp)
import Constants from "Constants" /* 1084 */;
import FramesStore from "FramesStore" /* 6833 */;
import FramesConstants from "FramesConstants" /* 6834 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
const ChannelTypes = Constants.ChannelTypes;
({ asLaunched: hasOwnProperty, getFrameSurfaceForChannel: metroRequire } = FramesConstants);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAppChannelRunningApp(arg0) {
  let audible;
  let first;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp6;
  let tmp7;
  let type;
  let userMuted;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(15);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [FramesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      let tmp2 = null;
      if (type.type === ChannelTypes.GUILD_APP) {
        tmp2 = metroRequire(tmp);
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
  const tmp9 = stateFromStores(14331)(stateFromStores);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [FramesStore];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== stateFromStores) {
    class F {
      constructor() {
        let userMuted;
        const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
        let data;
        if (tmp != null) {
          data = tmp.data;
        }
        let audible;
        if (data != null) {
          audible = data.audible;
        }
        const obj = { audible: true === audible, userMuted: true === userMuted };
        userMuted = undefined;
        if (data != null) {
          userMuted = data.userMuted;
        }
        return obj;
      }
    }
    const items3 = [stateFromStores];
    cResult[5] = stateFromStores;
    cResult[6] = F;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = F;
  } else {
    class F {
      constructor() {
        let userMuted;
        const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
        let data;
        if (tmp != null) {
          data = tmp.data;
        }
        let audible;
        if (data != null) {
          audible = data.audible;
        }
        const obj = { audible: true === audible, userMuted: true === userMuted };
        userMuted = undefined;
        if (data != null) {
          userMuted = data.userMuted;
        }
        return obj;
      }
    }
    tmp13 = cResult[7];
  }
  const tmpResult2 = tmp(504);
  const stateFromStoresObject = tmpResult2.useStateFromStoresObject(tmp10, tmp12, tmp13);
  ({ audible, userMuted } = stateFromStoresObject);
  if (cResult[8] !== tmp9) {
    let stringResult;
    class F {
      constructor() {
        let userMuted;
        const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
        let data;
        if (tmp != null) {
          data = tmp.data;
        }
        let audible;
        if (data != null) {
          audible = data.audible;
        }
        const obj = { audible: true === audible, userMuted: true === userMuted };
        userMuted = undefined;
        if (data != null) {
          userMuted = data.userMuted;
        }
        return obj;
      }
    }
    if (tmp9) {
      class F {
        constructor() {
          let userMuted;
          const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
          let data;
          if (tmp != null) {
            data = tmp.data;
          }
          let audible;
          if (data != null) {
            audible = data.audible;
          }
          const obj = { audible: true === audible, userMuted: true === userMuted };
          userMuted = undefined;
          if (data != null) {
            userMuted = data.userMuted;
          }
          return obj;
        }
      }
      stringResult = obj4.string(tmp(1125).t["1yCkJY"]);
    }
    cResult[8] = tmp9;
    cResult[9] = stringResult;
  } else {
    class F {
      constructor() {
        let userMuted;
        const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
        let data;
        if (tmp != null) {
          data = tmp.data;
        }
        let audible;
        if (data != null) {
          audible = data.audible;
        }
        const obj = { audible: true === audible, userMuted: true === userMuted };
        userMuted = undefined;
        if (data != null) {
          userMuted = data.userMuted;
        }
        return obj;
      }
    }
  }
  if (cResult[10] === audible) {
    class F {
      constructor() {
        let userMuted;
        const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
        let data;
        if (tmp != null) {
          data = tmp.data;
        }
        let audible;
        if (data != null) {
          audible = data.audible;
        }
        const obj = { audible: true === audible, userMuted: true === userMuted };
        userMuted = undefined;
        if (data != null) {
          userMuted = data.userMuted;
        }
        return obj;
      }
    }
  }
  const obj2 = { frameId: stateFromStores, runningLabel: tmp15, audible, userMuted };
  cResult[10] = audible;
  cResult[11] = stateFromStores;
  cResult[12] = tmp15;
  cResult[13] = userMuted;
  cResult[14] = obj2;
}) : (function useAppChannelRunningApp(arg0) {
  let audible;
  let stringResult;
  let type;
  let userMuted;
  _require = arg0;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [FramesStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp2 = null;
    if (type.type === ChannelTypes.GUILD_APP) {
      tmp2 = metroRequire(tmp);
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
  let tmp4 = stateFromStores(14331)(stateFromStores);
  const items2 = [FramesStore];
  const items3 = [stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(items2, () => {
    let userMuted;
    const tmp = hasOwnProperty(FramesStore.getFrame(stateFromStores));
    let data;
    if (tmp != null) {
      data = tmp.data;
    }
    let audible;
    if (data != null) {
      audible = data.audible;
    }
    const obj = { audible: true === audible, userMuted: true === userMuted };
    userMuted = undefined;
    if (data != null) {
      userMuted = data.userMuted;
    }
    return obj;
  }, items3);
  const obj3 = { frameId: stateFromStores, runningLabel: stringResult, audible, userMuted };
  stringResult = null;
  ({ audible, userMuted } = stateFromStoresObject);
  if (tmp4) {
    const intl = tmp(1125).intl;
    stringResult = intl.string(tmp(1125).t["1yCkJY"]);
  }
  return obj3;
});
const result = size.fileFinishedImporting("modules/app_channels/useAppChannelRunningApp.tsx");

export default tmp3;
