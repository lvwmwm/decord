// Module ID: 9473
// Function ID: 9474
// Name: ProfileEffectSampleV2
// Dependencies: [17, 9472, 21, 5009, 575, 5712, 9474, 9475, 2]
// Exports: default

// Module 9473 (ProfileEffectSampleV2)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5712 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 9472 */;
import _modDef9474 from "module_9474" /* 9474 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let size;
let tmp5;
const ProfileEffectDefault = tmp5(9475);
const View = react_native.View;
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { profileContainer: { position: "absolute", display: "flex", height: "100%", width: "100%" }, profileBackground: obj2, sampleProfileImage: { aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO }, profileBorder: size };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
createStyles = createStyles.createStyles;
size = { position: "absolute", height: "100%", width: "100%", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED };
let closure_5 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default function ProfileEffectSample(hideBackground) {
  let items1;
  let obj3;
  let flag = hideBackground.hideBackground;
  const item = hideBackground.item;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_5();
  const items = [tmp.profileContainer, ];
  let profileBackground = !flag;
  const tmp2 = React3;
  if (!flag) {
    profileBackground = tmp.profileBackground;
  }
  const obj = { style: items, children: items1 };
  items[1] = profileBackground;
  const obj2 = { style: tmp.sampleProfileImage, source: obj3, accessible: false, resizeMode: "cover" };
  obj3 = { uri: _modDef9474 };
  const tmp7 = FastImageDefault;
  items1 = [_false(tmp7, obj2), , ];
  let tmp4Result = !flag;
  if (tmp4Result) {
    const obj4 = { style: tmp.profileBorder };
    tmp4Result = tmp4(tmp3, obj4);
  }
  items1[1] = tmp4Result;
  const obj5 = { skuId: item.skuId, bannerAdjustment: 0, useThumbnail: true };
  items1[2] = _false(ProfileEffectDefault, obj5);
  return tmp2(View, obj);
};
