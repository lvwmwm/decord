// Module ID: 13427
// Function ID: 101933
// Dependencies: []

// Module 13427
const NodeType = arg1(dependencyMap[1]).NodeType;
const jsx = arg1(dependencyMap[2]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function SettingLayout(node) {
  node = node.node;
  const type = node.type;
  if (NodeType.LIST === type) {
    let obj = { node };
    return jsx(arg1(dependencyMap[3]).SettingsList, obj);
  } else if (NodeType.SEGMENTED_CONTROL === type) {
    obj = { node };
    return jsx(importDefault(dependencyMap[4]), obj);
  }
});
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/settings/native/renderer/SettingLayout.tsx");

export default memoResult;
