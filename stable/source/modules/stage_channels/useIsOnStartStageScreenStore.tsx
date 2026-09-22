// Module ID: 8513
// Function ID: 8514
// Name: useIsOnStartStageScreenStore
// Dependencies: [19, 4275, 2011, 560, 1247, 504, 1965, 8514, 2]
// Exports: setIsOnStartStageScreen, useUpdateIsOnStartStageScreenEffect

// Module 8513 (useIsOnStartStageScreenStore)
import ReactBatchUpdates from "ReactBatchUpdates" /* 1247 */;
import StageChannelPermissions from "StageChannelPermissions" /* 1965 */;
import noop from "module_19" /* 19 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;

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
    tmp3 = !stateFromStores(8514)(id.id);
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
