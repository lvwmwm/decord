// Module ID: 16050
// Function ID: 123299
// Dependencies: []

// Module 16050
let importDefaultResult = importDefault(dependencyMap[0]);
importDefaultResult = new importDefaultResult(() => {
  let obj = importDefault(dependencyMap[1]);
  obj = {};
  const intl = arg1(dependencyMap[2]).intl;
  obj.title = intl.string(arg1(dependencyMap[2]).t.bAhz9l);
  const intl2 = arg1(dependencyMap[2]).intl;
  obj.body = intl2.string(arg1(dependencyMap[2]).t.7KjxW3);
  obj.isDismissable = false;
  obj.onConfirm = importDefault(dependencyMap[3]);
  return obj.show(obj);
});
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/urgent_system_dm/native/UrgentSystemDMManager.tsx");

export default importDefaultResult;
