// Module ID: 8285
// Function ID: 8286
// Name: ProfileFrameSamplePreview
// Dependencies: [19, 17, 8261, 6629, 21, 4836, 576, 7670, 4531, 7666, 7652, 5976, 5899, 8286, 2]
// Exports: default

// Module 8285 (ProfileFrameSamplePreview)
import nativeDefault from "native" /* 576 */;
import useToken from "useToken" /* 4531 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef5976 from "module_5976" /* 5976 */;
import Constants from "Constants" /* 6629 */;
import ProfileFrameLayerOrder from "ProfileFrameLayerOrder" /* 7652 */;
import ProfileFrameDefault from "ProfileFrame" /* 7666 */;
import scaleProfileFrameDefault from "scaleProfileFrame" /* 7670 */;
import CollectiblesPreviewConstants from "CollectiblesPreviewConstants" /* 8261 */;
import _modDef8286 from "module_8286" /* 8286 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
({ StyleSheet: c3, View: closure_4 } = react_native);
const SAMPLE_PROFILE_ASPECT_RATIO = CollectiblesPreviewConstants.SAMPLE_PROFILE_ASPECT_RATIO;
const UserProfileThemeTypes = Constants.UserProfileThemeTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { profileFrameContainer: { flex: 1 }, profileContainer: obj2, sampleProfile: { width: "100%", aspectRatio: SAMPLE_PROFILE_ASPECT_RATIO } };
obj2 = { flex: 1, overflow: "hidden", borderWidth: 1, borderColor: nativeDefault.colors.BORDER_NORMAL, borderRadius: nativeDefault.radii.xs };
let closure_9 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx");

export default function ProfileFrameSamplePreview(previewWidth) {
  let items;
  let items1;
  let items2;
  let obj13;
  let obj17;
  let obj18;
  let obj4;
  let overflowBottom;
  let overflowHorizontal;
  let overflowTop;
  let previewHeight;
  let profileBackgroundColor;
  let profileFrame;
  let tmp3Result;
  ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
  previewWidth = previewWidth.previewWidth;
  const tmp = closure_9();
  const innerWidth = profileFrame.innerWidth;
  const result = previewWidth * innerWidth / (innerWidth + 2 * profileFrame.overflowHorizontal);
  ({ overflowTop, overflowBottom, overflowHorizontal } = scaleProfileFrameDefault(profileFrame, result));
  scaleProfileFrameDefault(profileFrame, result);
  const obj = useToken;
  const token = obj.useToken(profileBackgroundColor);
  const obj2 = { frame: profileFrame, filterLayer, profileThemeType: UserProfileThemeTypes.PREVIEW, frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.BACK, containerWidth: result, containerHeight: previewHeight };
  const tmp9 = ProfileFrameDefault;
  let tmp12 = metroRequire(tmp9, obj2);
  const xs = nativeDefault.radii.xs;
  const obj3 = { style: { position: "absolute", top: -overflowTop, bottom: -overflowBottom, left: -overflowHorizontal, right: -overflowHorizontal }, maskElement: metroImportDefault(React3, obj4), children: metroRequire(React3, obj13) };
  obj4 = { style: absoluteFill.absoluteFill, children: items };
  items = [, , , , , , , ];
  const obj5 = { style: { position: "absolute", top: 0, left: 0, right: 0, height: overflowTop, backgroundColor: "black" } };
  const tmp13 = _modDef5976;
  items[0] = metroRequire(React3, obj5);
  const obj6 = { style: { position: "absolute", bottom: 0, left: 0, right: 0, height: overflowBottom, backgroundColor: "black" } };
  items[1] = metroRequire(React3, obj6);
  const obj7 = { style: { position: "absolute", top: overflowTop, bottom: overflowBottom, left: 0, width: overflowHorizontal, backgroundColor: "black" } };
  items[2] = metroRequire(React3, obj7);
  const obj8 = { style: { position: "absolute", top: overflowTop, bottom: overflowBottom, right: 0, width: overflowHorizontal, backgroundColor: "black" } };
  items[3] = metroRequire(React3, obj8);
  const obj9 = { style: { position: "absolute", top: overflowTop - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } };
  items[4] = metroRequire(React3, obj9);
  const obj10 = { style: { position: "absolute", top: overflowTop - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } };
  items[5] = metroRequire(React3, obj10);
  const obj11 = { style: { position: "absolute", bottom: overflowBottom - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } };
  items[6] = metroRequire(React3, obj11);
  const obj12 = { style: { position: "absolute", bottom: overflowBottom - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } };
  items[7] = metroRequire(React3, obj12);
  const obj14 = { style: items1, children: items2 };
  items1 = [tmp.profileFrameContainer, { width: result, marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal }];
  obj13 = { style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 }, children: tmp12 };
  const tmp10 = filterLayer;
  const tmp11 = UserProfileThemeTypes;
  const tmp14 = metroImportDefault;
  if (null == profileBackgroundColor) {
    tmp12 = metroRequire(tmp13, obj3);
  }
  items2 = [tmp12, , ];
  const items3 = [tmp.profileContainer, ];
  let tmp16 = null != token;
  if (tmp16) {
    tmp16 = { backgroundColor: token };
    const obj15 = { backgroundColor: token };
  }
  items3[1] = tmp16;
  const obj16 = { style: items3, children: metroRequire(tmp3Result, obj17) };
  obj17 = { source: obj18, style: tmp.sampleProfile, resizeMode: "cover" };
  obj18 = { uri: _modDef8286 };
  tmp3Result = FastImageDefault;
  items2[1] = metroRequire(React3, obj16);
  const obj19 = { frame: profileFrame, filterLayer: tmp10, profileThemeType: tmp11.PREVIEW, frameOrder: ProfileFrameLayerOrder.ProfileFrameLayerOrder.FRONT, containerWidth: result, containerHeight: previewHeight - overflowTop - overflowBottom };
  const tmp3Result2 = ProfileFrameDefault;
  items2[2] = metroRequire(tmp3Result2, obj19);
  return tmp14(React3, obj14);
};
