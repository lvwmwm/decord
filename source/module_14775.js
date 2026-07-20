// Module ID: 14775
// Function ID: 111382
// Dependencies: []

// Module 14775
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
const memoResult = importAll(dependencyMap[0]).memo(function MessagesItemPlaceholder(arg0) {
  let height;
  let row;
  ({ row, height } = arg0);
  return jsx(importDefault(dependencyMap[2]), { row, height });
});
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/items/MessagesItemPlaceholder.tsx");

export default memoResult;
