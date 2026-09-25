// Module ID: 7835
// Function ID: 7836
// Name: useIsOnStartStageScreenStore
// Dependencies: [19, 4466, 2098, 560, 1248, 504, 2052, 7836, 2]
// Exports: setIsOnStartStageScreen, useUpdateIsOnStartStageScreenEffect

// Module 7835 (useIsOnStartStageScreenStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1248 */;
import StageChannelPermissions from "StageChannelPermissions" /* 2052 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4466 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2098 */;

const require = globalThis.__r;

require = fn;
const module_560 = fn(560);
const obj3 = module_560.create(() => ({ isOnStartStageScreen: true }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj3;
export const setIsOnStartStageScreen = function setIsOnStartStageScreen(arg0) {
  _require = arg0;
  require("ReactBatchUpdates").batchUpdates(() => state.setState({ isOnStartStageScreen }));
};
export const useUpdateIsOnStartStageScreenEffect = function useUpdateIsOnStartStageScreenEffect(id) {
  _require = id;
  const items = [SelectedChannelStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => SelectedChannelStore.getVoiceChannelId() === id.id);
  let obj = require("initialize");
  const items1 = [PermissionStore];
  const items2 = [id];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => PermissionStore.can(StageChannelPermissions.MODERATE_STAGE_CHANNEL_PERMISSIONS, closure_0), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !stateFromStores(7836)(id.id);
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
};
