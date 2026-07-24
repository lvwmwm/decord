// Module ID: 8738
// Function ID: 69119
// Name: filterLayer
// Dependencies: [31, 27, 8244, 5510, 33, 4130, 689, 8299, 3834, 8300, 8291, 5109, 5085, 8739, 2]
// Exports: default

// Module 8738 (filterLayer)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
const require = arg1;
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { profileFrameContainer: { flex: 1 } };
_createForOfIteratorHelperLoose = { flex: 1, overflow: "hidden", borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_NORMAL, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.profileContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sampleProfile = { width: "100%", aspectRatio: require("SAMPLE_PROFILE_ASPECT_RATIO").SAMPLE_PROFILE_ASPECT_RATIO };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("SAMPLE_PROFILE_ASPECT_RATIO").fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx");

export default function ProfileFrameSamplePreview(previewWidth) {
  let overflowBottom;
  let overflowHorizontal;
  let overflowTop;
  let previewHeight;
  let profileBackgroundColor;
  let profileFrame;
  ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
  const tmp = _createForOfIteratorHelperLoose();
  const innerWidth = profileFrame.innerWidth;
  const result = previewWidth.previewWidth * innerWidth / (innerWidth + 2 * profileFrame.overflowHorizontal);
  ({ overflowTop, overflowBottom, overflowHorizontal } = importDefault(8299)(profileFrame, result));
  let obj = require(3834) /* map */;
  const token = obj.useToken(profileBackgroundColor);
  obj = { frame: profileFrame, filterLayer, profileThemeType: UserProfileThemeTypes.PREVIEW };
  const tmp3 = importDefault(8299)(profileFrame, result);
  obj.frameOrder = require(8291) /* ProfileFrameLayerOrder */.ProfileFrameLayerOrder.BACK;
  obj.containerWidth = result;
  obj.containerHeight = previewHeight;
  let tmp6 = callback(importDefault(8300), obj);
  const xs = importDefault(689).radii.xs;
  obj = { style: obj1 };
  const obj2 = { style: absoluteFill.absoluteFill };
  const obj3 = { position: "absolute", top: 0, left: 0, right: 0, height: overflowTop, backgroundColor: "black" };
  obj1 = { position: "absolute", top: -overflowTop, bottom: -overflowBottom, left: -overflowHorizontal, right: -overflowHorizontal };
  const tmp5 = importDefault(8300);
  const items = [callback(closure_4, { style: obj3 }), , , , , , , ];
  const obj4 = { position: "absolute", bottom: 0, left: 0, right: 0, height: overflowBottom, backgroundColor: "black" };
  items[1] = callback(closure_4, { style: obj4 });
  const obj5 = { position: "absolute", top: overflowTop, bottom: overflowBottom, left: 0, width: overflowHorizontal, backgroundColor: "black" };
  items[2] = callback(closure_4, { style: obj5 });
  const obj6 = { position: "absolute", top: overflowTop, bottom: overflowBottom, right: 0, width: overflowHorizontal, backgroundColor: "black" };
  items[3] = callback(closure_4, { style: obj6 });
  items[4] = callback(closure_4, { style: { position: "absolute", top: overflowTop - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } });
  items[5] = callback(closure_4, { style: { position: "absolute", top: overflowTop - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } });
  items[6] = callback(closure_4, { style: { position: "absolute", bottom: overflowBottom - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } });
  items[7] = callback(closure_4, { style: { position: "absolute", bottom: overflowBottom - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } });
  obj2.children = items;
  obj.maskElement = callback2(closure_4, obj2);
  const obj11 = { style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 }, children: tmp6 };
  obj.children = callback(closure_4, obj11);
  const obj12 = { style: items1 };
  items1 = [tmp.profileFrameContainer, { width: result, marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal }];
  if (null == profileBackgroundColor) {
    tmp6 = callback(tmp7, obj);
  }
  const items2 = [tmp6, , ];
  const obj13 = {};
  const items3 = [tmp.profileContainer, ];
  let tmp12 = null != token;
  if (tmp12) {
    const obj14 = { backgroundColor: token };
    tmp12 = obj14;
  }
  items3[1] = tmp12;
  obj13.style = items3;
  const obj15 = {};
  const obj16 = {};
  const obj10 = { position: "absolute", bottom: overflowBottom - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" };
  const obj7 = { position: "absolute", top: overflowTop - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" };
  const obj8 = { position: "absolute", top: overflowTop - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" };
  const obj9 = { position: "absolute", bottom: overflowBottom - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" };
  const tmp10 = callback;
  const tmp11 = closure_4;
  tmp7 = importDefault(5109);
  const tmp8 = callback2;
  const tmp9 = closure_4;
  obj16.uri = importDefault(8739);
  obj15.source = obj16;
  obj15.style = tmp.sampleProfile;
  obj15.resizeMode = "cover";
  obj13.children = callback(importDefault(5085), obj15);
  items2[1] = tmp10(tmp11, obj13);
  const obj17 = { frame: profileFrame, filterLayer, profileThemeType: UserProfileThemeTypes.PREVIEW };
  const tmp13 = importDefault(5085);
  obj17.frameOrder = require(8291) /* ProfileFrameLayerOrder */.ProfileFrameLayerOrder.FRONT;
  obj17.containerWidth = result;
  obj17.containerHeight = previewHeight - overflowTop - overflowBottom;
  items2[2] = callback(importDefault(8300), obj17);
  obj12.children = items2;
  return tmp8(tmp9, obj12);
};
