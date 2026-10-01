// Module ID: 7690
// Function ID: 7691
// Name: UserProfileOverscrollBanner
// Dependencies: [19, 17, 21, 4566, 7691, 7692, 1364, 2]
// Exports: default

// Module 7690 (UserProfileOverscrollBanner)
import react_native from "react-native" /* 17 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 7691 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 7692 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4566 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const StyleSheet = react_native.StyleSheet;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default function UserProfileOverscrollBanner(arg0) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let items;
  let items1;
  let privateBanner;
  let showBlur;
  ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur, privateBanner } = arg0);
  const merged = Object.assign(arg0, Object.assign({ bannerAnimatedStyle: 0, bannerImageAnimatedStyle: 0, blurAnimatedProps: 0, showBlur: 0, privateBanner: 0 }));
  const obj = { style: bannerAnimatedStyle, children: items };
  items = [privateBanner, ];
  const View = ReanimatedRexport.View;
  const obj2 = { style: bannerImageAnimatedStyle, children: items1 };
  const View2 = ReanimatedRexport.View;
  const obj3 = {};
  const tmp4 = UserProfileBannerDefault;
  const merged1 = Object.assign(merged);
  items1 = [React3(tmp4, obj3), ];
  const obj4 = PlatformUtils;
  let tmp3Result = obj4.isIOS() && showBlur;
  const tmp3 = React3;
  if (tmp3Result) {
    const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp3Result = tmp3(VisualEffectViewThemed, obj5);
  }
  items1[1] = tmp3Result;
  items[1] = hasOwnProperty(View2, obj2);
  return hasOwnProperty(View, obj);
};
