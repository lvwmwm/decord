// Module ID: 1558
// Function ID: 17599
// Dependencies: []

// Module 1558
let obj = { safeAreaInsets: require(dependencyMap[0]).INITIAL_SAFE_AREA_INSETS };
const _module = require(dependencyMap[1]);
obj = _module.create(() => {
  const byAppEntry = { main: obj, share: obj };
  return { byAppEntry };
});
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/safe_area/SafeAreaStore.native.tsx");

export default obj;
