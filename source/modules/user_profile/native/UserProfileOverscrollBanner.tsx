// Module ID: 8503
// Function ID: 67857
// Name: UserProfileOverscrollBanner
// Dependencies: []
// Exports: default

// Module 8503 (UserProfileOverscrollBanner)
importAll(dependencyMap[0]);
const StyleSheet = arg1(dependencyMap[1]).StyleSheet;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]).createAnimatedComponent(importDefault(dependencyMap[4]));
const importDefaultResult = importDefault(dependencyMap[3]);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let privateBanner;
  let showBlur;
  let obj = { "Null": null, "Null": null, "Null": null, "Null": null, "Null": null };
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  obj = { style: bannerAnimatedStyle };
  const items = [privateBanner, ];
  obj = { style: bannerImageAnimatedStyle };
  const merged1 = Object.assign(merged);
  const items1 = [callback(importDefault(dependencyMap[5]), {}), ];
  const obj1 = {};
  const tmp4 = importDefault(dependencyMap[5]);
  let tmp6 = arg1(dependencyMap[6]).isIOS() && showBlur;
  if (tmp6) {
    const obj2 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp6 = callback(closure_6, obj2);
  }
  items1[1] = tmp6;
  obj.children = items1;
  items[1] = closure_5(importDefault(dependencyMap[3]).View, obj);
  obj.children = items;
  return closure_5(importDefault(dependencyMap[3]).View, obj);
};
