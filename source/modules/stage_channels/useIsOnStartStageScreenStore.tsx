// Module ID: 7479
// Function ID: 60039
// Name: setIsOnStartStageScreen
// Dependencies: [31, 3758, 1906, 621, 682, 566, 1356, 7480, 2]
// Exports: useUpdateIsOnStartStageScreenEffect

// Module 7479 (setIsOnStartStageScreen)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import keys from "keys";

const require = arg1;
function setIsOnStartStageScreen(arg0) {
  const _require = arg0;
  _require(682).batchUpdates(() => outer1_6.setState({ isOnStartStageScreen: closure_0 }));
}
keys = keys.create(() => ({ isOnStartStageScreen: true }));
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default keys;
export { setIsOnStartStageScreen };
export const useUpdateIsOnStartStageScreenEffect = function useUpdateIsOnStartStageScreenEffect(id) {
  const _require = id;
  const items = [closure_5];
  const stateFromStores = _require(566).useStateFromStores(items, () => outer1_5.getVoiceChannelId() === id.id);
  const obj = _require(566);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [id];
  const stateFromStores1 = _require(566).useStateFromStores(items1, () => outer1_4.can(id(tmp3[6]).MODERATE_STAGE_CHANNEL_PERMISSIONS, id), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !stateFromStores(7480)(id.id);
  }
  const dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!closure_2) {
        outer1_7(false);
      }
    } else {
      outer1_7(closure_2);
    }
  }, items3);
};
