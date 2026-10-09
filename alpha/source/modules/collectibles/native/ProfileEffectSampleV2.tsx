// Module ID: 8983
// Function ID: 8984
// Name: ProfileEffectSampleV2
// Dependencies: [17, 8982, 21, 5091, 587, 558, 576, 8984, 6163, 8985, 2]

// Module 8983 (ProfileEffectSampleV2)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import FastImageDefault from "FastImage" /* 6163 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8982 */;
import _modDef8984 from "module_8984" /* 8984 */;
import ProfileEffectDefault from "ProfileEffect" /* 8985 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" }, profileBackground: obj2, sampleProfileImage: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO }, profileBorder: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
size = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_6 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileEffectSample(arg0) {
  let hideBackground;
  let item;
  let items;
  const obj = react;
  const cResult = obj.c(16);
  ({ item, hideBackground } = arg0);
  const tmp4 = closure_6();
  if (cResult[0] === tmp4.profileContainer) {
    let tmp6;
    let tmp8;
    let tmp10;
    if (cResult[1] === (!(undefined !== hideBackground && hideBackground) && tmp4.profileBackground)) {
      tmp6 = cResult[2];
    }
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { uri: _modDef8984 };
      cResult[3] = obj2;
      tmp8 = obj2;
    } else {
      tmp8 = cResult[3];
    }
    if (cResult[4] !== tmp4.sampleProfileImage) {
      const obj3 = { style: tmp4.sampleProfileImage, source: tmp8, accessible: false, resizeMode: "cover" };
      const tmp13 = React3(FastImageDefault, obj3);
      cResult[4] = tmp4.sampleProfileImage;
      cResult[5] = tmp13;
      tmp10 = tmp13;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === (undefined !== hideBackground && hideBackground)) {
      let tmp14;
      let tmp18;
      if (cResult[7] === tmp4.profileBorder) {
        tmp14 = cResult[8];
      }
      if (cResult[9] !== item.skuId) {
        const obj4 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
        const tmp21 = React3(ProfileEffectDefault, obj4);
        cResult[9] = item.skuId;
        cResult[10] = tmp21;
        tmp18 = tmp21;
      } else {
        tmp18 = cResult[10];
      }
      if (cResult[11] === tmp6) {
        if (cResult[12] === tmp10) {
          if (cResult[13] === tmp14) {
            let tmp22;
            if (cResult[14] === tmp18) {
              tmp22 = cResult[15];
            }
            return tmp22;
          }
        }
      }
      const obj5 = { style: tmp6, children: items };
      items = [tmp10, tmp14, tmp18];
      const tmp25 = hasOwnProperty(View, obj5);
      cResult[11] = tmp6;
      cResult[12] = tmp10;
      cResult[13] = tmp14;
      cResult[14] = tmp18;
      cResult[15] = tmp25;
      tmp22 = tmp25;
    }
    let tmp15 = !tmp3;
    if (tmp15) {
      const obj6 = { style: tmp4.profileBorder };
      tmp15 = React3(View, obj6);
    }
    cResult[6] = undefined !== hideBackground && hideBackground;
    cResult[7] = tmp4.profileBorder;
    cResult[8] = tmp15;
    tmp14 = tmp15;
  }
  const items1 = [tmp4.profileContainer, !(undefined !== hideBackground && hideBackground) && tmp4.profileBackground];
  cResult[0] = tmp4.profileContainer;
  cResult[1] = !(undefined !== hideBackground && hideBackground) && tmp4.profileBackground;
  cResult[2] = items1;
  tmp6 = items1;
}) : (function ProfileEffectSample(hideBackground) {
  let items1;
  let obj3;
  let flag = hideBackground.hideBackground;
  const item = hideBackground.item;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_6();
  const items = [tmp.profileContainer, ];
  let profileBackground = !flag;
  const tmp2 = hasOwnProperty;
  if (!flag) {
    profileBackground = tmp.profileBackground;
  }
  const obj = { style: items, children: items1 };
  items[1] = profileBackground;
  const obj2 = { style: tmp.sampleProfileImage, source: obj3, accessible: false, resizeMode: "cover" };
  obj3 = { uri: _modDef8984 };
  const tmp7 = FastImageDefault;
  items1 = [React3(tmp7, obj2), , ];
  let tmp4Result = !flag;
  if (tmp4Result) {
    const obj4 = { style: tmp.profileBorder };
    tmp4Result = tmp4(tmp3, obj4);
  }
  items1[1] = tmp4Result;
  const obj5 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
  items1[2] = React3(ProfileEffectDefault, obj5);
  return tmp2(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default tmp4;
