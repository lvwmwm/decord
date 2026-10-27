// Module ID: 8735
// Function ID: 8736
// Name: UserProfileOverscrollBanner
// Dependencies: [109, 19, 17, 21, 5053, 8736, 558, 576, 8737, 1381, 2]

// Module 8735 (UserProfileOverscrollBanner)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import VisualEffectViewThemedDefault from "VisualEffectViewThemed" /* 8736 */;
import UserProfileBannerDefault from "UserProfileBanner" /* 8737 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5053 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let tmp;
const PlatformUtils = tmp(1381);
let closure_3 = ["bannerAnimatedStyle", "bannerImageAnimatedStyle", "blurAnimatedProps", "showBlur"];
const StyleSheet = react_native.StyleSheet;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const VisualEffectViewThemed = ReanimatedRexport.createAnimatedComponent(VisualEffectViewThemedDefault);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserProfileOverscrollBanner(arg0) {
  let bannerAnimatedStyle;
  let bannerImageAnimatedStyle;
  let blurAnimatedProps;
  let items;
  let showBlur;
  let tmp12;
  let tmp4;
  let tmp5;
  let tmp6;
  let tmp7;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(18);
  if (cResult[0] !== arg0) {
    ({ bannerAnimatedStyle, bannerImageAnimatedStyle, blurAnimatedProps, showBlur } = arg0);
    const tmp11 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = bannerAnimatedStyle;
    cResult[2] = bannerImageAnimatedStyle;
    cResult[3] = tmp11;
    cResult[4] = blurAnimatedProps;
    cResult[5] = showBlur;
    tmp8 = showBlur;
    tmp7 = blurAnimatedProps;
    tmp6 = tmp11;
    tmp5 = bannerImageAnimatedStyle;
    tmp4 = bannerAnimatedStyle;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
  }
  if (cResult[6] !== tmp6) {
    const obj2 = {};
    const tmp15 = UserProfileBannerDefault;
    const merged = Object.assign(tmp6);
    const tmp19 = metroRequire(tmp15, obj2);
    cResult[6] = tmp6;
    cResult[7] = tmp19;
    tmp12 = tmp19;
  } else {
    tmp12 = cResult[7];
  }
  if (cResult[8] === tmp7) {
    let tmp20;
    if (cResult[9] === tmp8) {
      tmp20 = cResult[10];
    }
    if (cResult[11] === tmp5) {
      if (cResult[12] === tmp12) {
        let tmp25;
        if (cResult[13] === tmp20) {
          tmp25 = cResult[14];
        }
        if (cResult[15] === tmp4) {
          let tmp29;
          if (cResult[16] === tmp25) {
            tmp29 = cResult[17];
          }
          return tmp29;
        }
        const obj3 = { style: tmp4, children: tmp25 };
        const tmp32 = metroRequire(ReanimatedRexport.View, obj3);
        cResult[15] = tmp4;
        cResult[16] = tmp25;
        cResult[17] = tmp32;
        tmp29 = tmp32;
      }
    }
    const obj4 = { style: tmp5, children: items };
    items = [tmp12, tmp20];
    const tmp28 = metroImportDefault(ReanimatedRexport.View, obj4);
    cResult[11] = tmp5;
    cResult[12] = tmp12;
    cResult[13] = tmp20;
    cResult[14] = tmp28;
    tmp25 = tmp28;
  }
  const tmpResult = PlatformUtils;
  let tmp21 = tmpResult.isIOS() && tmp8;
  if (tmp21) {
    const obj5 = { animatedProps: tmp7, style: StyleSheet.absoluteFillObject };
    tmp21 = metroRequire(VisualEffectViewThemed, obj5);
  }
  cResult[8] = tmp7;
  cResult[9] = tmp8;
  cResult[10] = tmp21;
  tmp20 = tmp21;
}) : (function UserProfileOverscrollBanner(arg0) {
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
  const View = ReanimatedRexport.View;
  obj2 = { style: bannerImageAnimatedStyle, children: items };
  View2 = ReanimatedRexport.View;
  const obj3 = {};
  const tmp4 = UserProfileBannerDefault;
  const merged1 = Object.assign(merged);
  items = [metroRequire(tmp4, obj3), ];
  const obj4 = PlatformUtils;
  let tmp2Result = obj4.isIOS() && showBlur;
  tmp3 = metroImportDefault;
  if (tmp2Result) {
    const obj5 = { animatedProps: blurAnimatedProps, style: StyleSheet.absoluteFillObject };
    tmp2Result = tmp2(VisualEffectViewThemed, obj5);
  }
  items[1] = tmp2Result;
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileOverscrollBanner.tsx");

export default tmp4;
