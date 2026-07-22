// Module ID: 15346
// Function ID: 116839
// Name: FriendRequestsSettingsScreen
// Dependencies: []
// Exports: default

// Module 15346 (FriendRequestsSettingsScreen)
importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
({ jsx: closure_3, Fragment: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWER, flex: 1, paddingTop: importDefault(dependencyMap[4]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/FriendRequestsSettingsScreen.tsx");

export default function FriendRequestsSettingsScreen() {
  let obj = {};
  const items = [callback(importDefault(dependencyMap[5]), { absolute: true }), ];
  obj = { style: callback3().container, children: callback(importDefault(dependencyMap[6]), {}) };
  items[1] = callback(ScrollView, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
