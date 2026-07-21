// Module ID: 10837
// Function ID: 84097
// Name: computeGlobalSpoilerDisplay
// Dependencies: []
// Exports: useShouldDisplaySpoilerObscurity

// Module 10837 (computeGlobalSpoilerDisplay)
function computeGlobalSpoilerDisplay(RenderSpoilers, stateFromStores) {
  if (constants.ALWAYS === RenderSpoilers) {
    return true;
  } else if (constants.IF_MODERATOR === RenderSpoilers) {
    return stateFromStores;
  } else {
    const ON_CLICK = constants.ON_CLICK;
    return false;
  }
}
let closure_2 = importDefault(dependencyMap[0]);
({ Permissions: closure_3, SpoilerRenderSetting: closure_4 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/computeGlobalSpoilerDisplay.tsx");

export default computeGlobalSpoilerDisplay;
export const useShouldDisplaySpoilerObscurity = function useShouldDisplaySpoilerObscurity(channel) {
  const arg1 = channel;
  const items = [closure_2];
  const stateFromStores = arg1(dependencyMap[2]).useStateFromStores(items, () => closure_2.can(constants.MANAGE_MESSAGES, arg0));
  const RenderSpoilers = arg1(dependencyMap[3]).RenderSpoilers;
  return !computeGlobalSpoilerDisplay(RenderSpoilers.useSetting(), stateFromStores);
};
