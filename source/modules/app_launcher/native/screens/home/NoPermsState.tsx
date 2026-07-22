// Module ID: 11223
// Function ID: 87397
// Name: EmptyState
// Dependencies: []
// Exports: default

// Module 11223 (EmptyState)
importAll(dependencyMap[0]);
({ View: closure_3, Image: closure_4 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[4]).radii.lg };
obj.container = obj;
obj.textContainer = { flexShrink: 1 };
obj.image = { "Null": 3434895488224188400000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, "Null": 0.00000000000000000000000000000000000000000000000000000000000004133748112172252 };
let closure_7 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/app_launcher/native/screens/home/NoPermsState.tsx");

export default function EmptyState() {
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  if (obj.isThemeLight(importDefault(dependencyMap[6])())) {
    let tmp4 = tmp3[7];
  } else {
    tmp4 = tmp3[8];
  }
  let obj1 = arg1(dependencyMap[9]);
  const logAppLauncherEmptyStateView = obj1.useLogAppLauncherEmptyStateView(arg1(dependencyMap[10]).AppLauncherEmptyStateType.HOME_NO_PERMISSIONS);
  obj = { style: tmp.container };
  obj = { style: tmp.image, resizeMode: "contain", source: importDefault(tmp4) };
  const items = [callback(closure_4, obj), ];
  obj1 = { style: tmp.textContainer };
  const intl = arg1(dependencyMap[12]).intl;
  obj1.children = intl.string(arg1(dependencyMap[12]).t.uDnXXj);
  items[1] = callback(arg1(dependencyMap[11]).Text, obj1);
  obj.children = items;
  return callback2(closure_3, obj);
};
