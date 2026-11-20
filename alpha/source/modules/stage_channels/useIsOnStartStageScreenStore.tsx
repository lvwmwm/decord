// Module ID: 6379
// Function ID: 6380
// Name: useIsOnStartStageScreenStore
// Dependencies: [19, 4726, 4697, 560, 1262, 504, 4651, 6380, 2]
// Exports: setIsOnStartStageScreen, useUpdateIsOnStartStageScreenEffect

// Module 6379 (useIsOnStartStageScreenStore)
import react_native from "react-native" /* 1262 */;
import StageChannelPermissions from "StageChannelPermissions" /* 4651 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4726 */;
import SelectedChannelStore from "SelectedChannelStore" /* 4697 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f88686 = () => {
  obj = { isOnStartStageScreen };
  return state.setState(obj);
};
let obj = module_560.create(() => ({ isOnStartStageScreen: true }));
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj;
export function setIsOnStartStageScreen(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react-native");
  obj.batchUpdates(f88686);
}
export function useUpdateIsOnStartStageScreenEffect(id) {
  let closure_2;
  _require = id;
  obj = require("get initialized");
  const items = [SelectedChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === id.id);
  let obj2 = require("get initialized");
  const items1 = [PermissionStore];
  const items2 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id), items2);
  const tmp3 = stateFromStores1 && !stateFromStores(6380)(id.id);
  dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = react.useEffect(() => {
    let state;
    if (stateFromStores) {
      if (!closure_2) {
        let c0 = false;
        const obj2 = react_native;
        obj2.batchUpdates(f88686);
      }
    } else {
      let closure_0 = tmp;
      obj = react_native;
      obj.batchUpdates(f88686);
    }
  }, items3);
}
