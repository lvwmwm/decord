// Module ID: 13701
// Function ID: 103674
// Name: FamilyCenterLinkRowWrapper
// Dependencies: []
// Exports: default

// Module 13701 (FamilyCenterLinkRowWrapper)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { "Null": "<string:2337406978>", "Null": null, "Null": null, "Null": null, paddingBottom: importDefault(dependencyMap[3]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[3]).space.PX_12 };
obj.container = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/parent_tools/native/FamilyCenterLinkWrapper.tsx");

export default function FamilyCenterLinkRowWrapper(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const importDefault = importDefault(dependencyMap[4])().analyticsLocations;
  let tmp2 = null;
  if (undefined !== userId) {
    const obj = {
      style: tmp.container,
      onPress() {
          const obj = { aliceblue: null, antiquewhite: null, aqua: null, userId, sourceAnalyticsLocations: analyticsLocations };
          analyticsLocations(closure_2[6])(obj);
        },
      children: userId.children
    };
    tmp2 = jsx(arg1(dependencyMap[5]).PressableOpacity, obj);
  }
  return tmp2;
};
