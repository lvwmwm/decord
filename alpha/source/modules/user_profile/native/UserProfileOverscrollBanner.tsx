// Module ID: 8891
// Function ID: 8892
// Name: UserProfileOverscrollBanner
// Dependencies: [19, 17, 21, 1652, 8892, 8893, 1377, 2]
// Exports: default

// Module 8891 (UserProfileOverscrollBanner)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 8892 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8893 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import module_1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const StyleSheet = react_native.StyleSheet;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const VisualEffectViewThemed = module_1652.createAnimatedComponent(VisualEffectViewThemedDefault);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  let View2;
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let items;
  let obj2;
  let showBlur;
  let tmp3;
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur } = arg0);
  const merged = Object.assign(arg0, Object.assign({ bannerAnimatedStyle: 0, bannerImageAnimatedStyle: 0, blurAnimatedProps: 0, showBlur: 0 }));
  const obj = { style: bannerAnimatedStyle, children: tmp3(View2, obj2) };
  const View = module_1652.View;
  obj2 = { style: bannerImageAnimatedStyle, children: items };
  View2 = module_1652.View;
  const obj3 = {};
  const tmp4 = UserProfileBannerDefault;
  const merged1 = Object.assign(merged);
  items = [React3(tmp4, obj3), ];
  const obj4 = PlatformUtils;
  let tmp2Result = obj4.isIOS() && showBlur;
  tmp3 = hasOwnProperty;
  if (tmp2Result) {
    const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp2Result = tmp2(VisualEffectViewThemed, obj5);
  }
  items[1] = tmp2Result;
  return React3(View, obj);
};
