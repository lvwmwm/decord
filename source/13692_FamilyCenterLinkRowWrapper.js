// Module ID: 13692
// Function ID: 103629
// Name: FamilyCenterLinkRowWrapper
// Dependencies: []
// Exports: default

// Module 13692 (FamilyCenterLinkRowWrapper)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { paddingBottom: importDefault(dependencyMap[3]).space.PX_12, paddingHorizontal: importDefault(dependencyMap[3]).space.PX_12 };
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
          const obj = { <string:3635438540>: null, <string:475179606>: null, <string:1682276847>: null, userId, sourceAnalyticsLocations: analyticsLocations };
          analyticsLocations(closure_2[6])(obj);
        },
      children: userId.children
    };
    tmp2 = jsx(arg1(dependencyMap[5]).PressableOpacity, obj);
  }
  return tmp2;
};
