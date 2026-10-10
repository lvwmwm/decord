// Module ID: 7484
// Function ID: 7485
// Name: useIsOnStartStageScreenStore
// Dependencies: [19, 4750, 2116, 570, 1272, 558, 576, 504, 2073, 7485, 2]
// Exports: setIsOnStartStageScreen

// Module 7484 (useIsOnStartStageScreenStore)
import react_native from "react-native" /* 1272 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2073 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2116 */;
import module_570 from "module_570" /* 570 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f96383 = () => {
  obj = { isOnStartStageScreen };
  return state.setState(obj);
};
let obj = module_570.create(() => ({ isOnStartStageScreen: true }));
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUpdateIsOnStartStageScreenEffect(id) {
  let closure_2;
  let first;
  let fn2;
  let items3;
  let tmp10;
  let tmp11;
  let tmp6;
  let tmp8;
  _require = id;
  const tmp = _require;
  obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return SelectedChannelStore.getVoiceChannelId() === id.id;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== id) {
    class I {
      constructor() {
        return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id);
      }
    }
    const items2 = [id];
    cResult[4] = id;
    cResult[5] = I;
    cResult[6] = items2;
    tmp11 = items2;
    tmp10 = I;
  } else {
    class I {
      constructor() {
        return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id);
      }
    }
    tmp11 = cResult[6];
  }
  const tmpResult2 = tmp(504);
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp10, tmp11);
  const tmp13 = stateFromStores1 && !stateFromStores(7485)(id.id);
  dependencyMap = tmp13;
  if (cResult[7] === tmp13) {
    class I {
      constructor() {
        return PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id);
      }
    }
    const effect = react.useEffect(fn2, items3);
  }
  fn2 = function _() {
    if (stateFromStores) {
      if (!closure_2) {
        let c0 = false;
        const obj2 = react_native;
        obj2.batchUpdates(f96383);
      }
    } else {
      let closure_0 = tmp;
      obj = react_native;
      obj.batchUpdates(f96383);
    }
  };
  items3 = [stateFromStores, tmp13];
  cResult[7] = tmp13;
  cResult[8] = stateFromStores;
  cResult[9] = fn2;
  cResult[10] = items3;
}) : (function useUpdateIsOnStartStageScreenEffect(id) {
  let closure_2;
  _require = id;
  obj = require("get initialized");
  const items = [SelectedChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === id.id);
  let obj2 = require("get initialized");
  const items1 = [PermissionStore];
  const items2 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id), items2);
  const tmp3 = stateFromStores1 && !stateFromStores(7485)(id.id);
  dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = react.useEffect(() => {
    let state;
    if (stateFromStores) {
      if (!closure_2) {
        let c0 = false;
        const obj2 = react_native;
        obj2.batchUpdates(f96383);
      }
    } else {
      let closure_0 = tmp;
      obj = react_native;
      obj.batchUpdates(f96383);
    }
  }, items3);
});
function setIsOnStartStageScreen(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react-native");
  obj.batchUpdates(f96383);
}
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj;
export { setIsOnStartStageScreen };
export const useUpdateIsOnStartStageScreenEffect = tmp3;
