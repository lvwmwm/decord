// Module ID: 15586
// Function ID: 118960
// Dependencies: []

// Module 15586
let closure_3 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function FramePanelContainer() {
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  let tmp = null;
  if (obj.useStateFromStores(items, () => null != connectedFrame.getConnectedFrame())) {
    obj = { children: jsx(importDefault(dependencyMap[5]), {}) };
    tmp = jsx(importDefault(dependencyMap[4]), obj);
    const tmp5 = importDefault(dependencyMap[4]);
  }
  return tmp;
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/frames/panel/native/FramePanelContainer.tsx");

export default memoResult;
