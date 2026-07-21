// Module ID: 7474
// Function ID: 59994
// Name: setIsOnStartStageScreen
// Dependencies: []
// Exports: useUpdateIsOnStartStageScreenEffect

// Module 7474 (setIsOnStartStageScreen)
function setIsOnStartStageScreen(arg0) {
  const arg1 = arg0;
  arg1(dependencyMap[4]).batchUpdates(() => state.setState({ isOnStartStageScreen: arg0 }));
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let obj = arg1(dependencyMap[3]);
obj = obj.create(() => ({ isOnStartStageScreen: true }));
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/stage_channels/useIsOnStartStageScreenStore.tsx");

export default obj;
export { setIsOnStartStageScreen };
export const useUpdateIsOnStartStageScreenEffect = function useUpdateIsOnStartStageScreenEffect(id) {
  const arg1 = id;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => voiceChannelId.getVoiceChannelId() === arg0.id);
  const importDefault = stateFromStores;
  const obj = arg1(dependencyMap[5]);
  const items1 = [closure_4];
  const items2 = [id];
  const stateFromStores1 = arg1(dependencyMap[5]).useStateFromStores(items1, () => closure_4.can(arg0(tmp3[6]).MODERATE_STAGE_CHANNEL_PERMISSIONS, arg0), items2);
  let tmp3 = stateFromStores1;
  if (stateFromStores1) {
    tmp3 = !importDefault(dependencyMap[7])(id.id);
  }
  const dependencyMap = tmp3;
  const items3 = [stateFromStores, tmp3];
  const effect = React.useEffect(() => {
    if (stateFromStores) {
      if (!tmp3) {
        callback(false);
      }
    } else {
      const tmp3 = callback(tmp3);
    }
  }, items3);
};
