// Module ID: 10563
// Function ID: 82500
// Name: isDiscordVisible
// Dependencies: []
// Exports: default

// Module 10563 (isDiscordVisible)
let closure_2 = importDefault(dependencyMap[0]);
const AppStates = arg1(dependencyMap[1]).AppStates;
const result = arg1(dependencyMap[3]).fileFinishedImporting("lib/WindowVisibilityUtils.native.tsx");

export default function isDiscordVisible() {
  const tmp = state.getState() === AppStates.BACKGROUND;
  let isInPipModeResult = !tmp;
  if (tmp) {
    isInPipModeResult = obj.isInPipMode();
  }
  return isInPipModeResult;
};
