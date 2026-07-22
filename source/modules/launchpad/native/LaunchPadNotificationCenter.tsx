// Module ID: 15561
// Function ID: 118729
// Dependencies: []

// Module 15561
const jsx = arg1(dependencyMap[1]).jsx;
const importAllResult = importAll(dependencyMap[0]);
let closure_3 = arg1(dependencyMap[2]).createStyles({ wrapper: { height: "100%" } });
const obj2 = arg1(dependencyMap[2]);
const memoResult = importAllResult.memo(function NotificationsContent() {
  const tmp = callback();
  return jsx(importDefault(dependencyMap[3]), { style: callback().wrapper, nestedInLaunchPad: true });
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/launchpad/native/LaunchPadNotificationCenter.tsx");

export default memoResult;
