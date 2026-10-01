// Module ID: 7843
// Function ID: 7844
// Name: useIsOnStartStageScreenStore
// Dependencies: [19, 4469, 2099, 560, 1248, 504, 2053, 7844, 2]
// Exports: setIsOnStartStageScreen, useUpdateIsOnStartStageScreenEffect

// Module 7843 (useIsOnStartStageScreenStore)
import react_native from "react-native" /* 1248 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2053 */;
import react from "react" /* 19 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f85221 = () => {
  obj = { isOnStartStageScreen };
  return state.setState(obj);
};
let obj = module_560.create(() => ({ isOnStartStageScreen: true }));
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj;
export const setIsOnStartStageScreen = function setIsOnStartStageScreen(arg0) {
  let closure_0;
  _require = arg0;
  obj = require("react-native");
  obj.batchUpdates(f85221);
};
export const useUpdateIsOnStartStageScreenEffect = function useUpdateIsOnStartStageScreenEffect(id) {
  let closure_2;
  _require = id;
  obj = require("get initialized");
  const items = [SelectedChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === id.id);
  let obj2 = require("get initialized");
  const items1 = [PermissionStore];
  const items2 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, id), items2);
  const tmp3 = stateFromStores1 && !stateFromStores(7844)(id.id);
  dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = react.useEffect(() => {
    let state;
    if (stateFromStores) {
      if (!closure_2) {
        let c0 = false;
        const obj2 = react_native;
        obj2.batchUpdates(f85221);
      }
    } else {
      let closure_0 = tmp;
      obj = react_native;
      obj.batchUpdates(f85221);
    }
  }, items3);
};
