// Module ID: 15607
// Function ID: 119070
// Dependencies: []

// Module 15607
const importAllResult = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const memoResult = importAllResult.memo(() => {
  let mode;
  let wrapperDimensions;
  const context = importAllResult.useContext(importDefault(dependencyMap[2]));
  ({ mode, wrapperDimensions } = context);
  return jsx(arg1(dependencyMap[3]).BaseActivityPanelSystemUIManager, { mode, isWindowLandscape: wrapperDimensions.isWindowLandscape });
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/frames/panel/native/FramePanelSystemUIManager.tsx");

export default memoResult;
