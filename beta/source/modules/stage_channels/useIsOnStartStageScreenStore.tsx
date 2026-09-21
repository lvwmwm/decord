// Module ID: 8671
// Function ID: 8672
// Name: useIsOnStartStageScreenStore
// Dependencies: [19, 4399, 2099, 562, 1252, 558, 568, 504, 2053, 8672, 2]
// Exports: setIsOnStartStageScreen

// Module 8671 (useIsOnStartStageScreenStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1252 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2053 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4399 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;

const require = globalThis.__r;

require = fn;
const module_562 = fn(562);
const obj4 = module_562.create(() => ({ isOnStartStageScreen: true }));
const ReactCompilerGating = fn(558);
function setIsOnStartStageScreen(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isOnStartStageScreen }));
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj4;
export { setIsOnStartStageScreen };
export const useUpdateIsOnStartStageScreenEffect = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  _require = id;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    const fn = function o() {
      return SelectedChannelStore.getVoiceChannelId() === id.id;
    };
    cResult[1] = id.id;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PermissionStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== id) {
    class O {
      constructor() {
        return closure_4.can(closure_0(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0);
      }
    }
    const items2 = [id];
    cResult[4] = id;
    cResult[5] = O;
    cResult[6] = items2;
    let tmp11 = items2;
    const tmp10 = O;
  } else {
    class O {
      constructor() {
        return closure_4.can(closure_0(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0);
      }
    }
    tmp11 = cResult[6];
  }
  const tmpResult = require("initialize");
  stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp10, tmp11);
  if (stateFromStores1) {
    class O {
      constructor() {
        return closure_4.can(closure_0(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0);
      }
    }
  }
  stateFromStores1 = tmp13;
  if (cResult[7] === stateFromStores1) {
    class O {
      constructor() {
        return closure_4.can(closure_0(closure_2[8]).MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0);
      }
    }
    const effect = noop.useEffect(fn2, items3);
  }
  fn2 = function l() {
    if (stateFromStores) {
      if (!tmp) {
        closure_0 = false;
        ReactBatchUpdates.batchUpdates(() => state.setState({ isOnStartStageScreen }));
      }
    } else {
      closure_0 = tmp;
      ReactBatchUpdates.batchUpdates(() => state.setState({ isOnStartStageScreen }));
    }
  };
  items3 = [stateFromStores, stateFromStores1];
  cResult[7] = stateFromStores1;
  cResult[8] = stateFromStores;
  cResult[9] = fn2;
  cResult[10] = items3;
}) : ((id) => {
  _require = id;
  const items = [SelectedChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === id.id);
  let obj = require("initialize");
  const items1 = [PermissionStore];
  const items2 = [id];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !stateFromStores(8672)(id.id);
  }
  dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = noop.useEffect(() => {
    if (stateFromStores) {
      if (!tmp) {
        let isOnStartStageScreen = false;
        ReactBatchUpdates.batchUpdates(() => state.setState({ isOnStartStageScreen }));
      }
    } else {
      isOnStartStageScreen = tmp;
      ReactBatchUpdates.batchUpdates(() => state.setState({ isOnStartStageScreen }));
    }
  }, items3);
});
