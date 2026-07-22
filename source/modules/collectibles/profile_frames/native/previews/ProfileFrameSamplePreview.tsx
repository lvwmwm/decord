// Module ID: 8690
// Function ID: 68861
// Name: filterLayer
// Dependencies: []
// Exports: default

// Module 8690 (filterLayer)
function filterLayer(responsive) {
  return true !== responsive.responsive;
}
importAll(dependencyMap[0]);
({ StyleSheet: closure_3, View: closure_4 } = arg1(dependencyMap[1]));
const UserProfileThemeTypes = arg1(dependencyMap[3]).UserProfileThemeTypes;
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = { profileFrameContainer: { flex: 1 } };
obj = { borderColor: importDefault(dependencyMap[6]).colors.BORDER_NORMAL, borderRadius: importDefault(dependencyMap[6]).radii.xs };
obj.profileContainer = obj;
obj.sampleProfile = { width: "100%", aspectRatio: arg1(dependencyMap[2]).SAMPLE_PROFILE_ASPECT_RATIO };
let closure_8 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/collectibles/profile_frames/native/previews/ProfileFrameSamplePreview.tsx");

export default function ProfileFrameSamplePreview(previewWidth) {
  let overflowBottom;
  let overflowHorizontal;
  let overflowTop;
  let previewHeight;
  let profileBackgroundColor;
  let profileFrame;
  ({ profileFrame, previewHeight, profileBackgroundColor } = previewWidth);
  const tmp = callback3();
  const innerWidth = profileFrame.innerWidth;
  const result = previewWidth.previewWidth * innerWidth / (innerWidth + 2 * profileFrame.overflowHorizontal);
  ({ overflowTop, overflowBottom, overflowHorizontal } = importDefault(dependencyMap[7])(profileFrame, result));
  let obj = arg1(dependencyMap[8]);
  const token = obj.useToken(profileBackgroundColor);
  obj = { frame: profileFrame, filterLayer, profileThemeType: UserProfileThemeTypes.PREVIEW };
  const tmp3 = importDefault(dependencyMap[7])(profileFrame, result);
  obj.frameOrder = arg1(dependencyMap[10]).ProfileFrameLayerOrder.BACK;
  obj.containerWidth = result;
  obj.containerHeight = previewHeight;
  let tmp6 = callback(importDefault(dependencyMap[9]), obj);
  const xs = importDefault(dependencyMap[6]).radii.xs;
  obj = { style: obj1 };
  const obj2 = { style: absoluteFill.absoluteFill };
  const obj3 = { "Bool(false)": "HideMutedChannelsOption", "Bool(false)": "<string:1359020032>", "Bool(false)": "<string:7515243>", "Bool(false)": "<string:50331648>", "Bool(false)": "<string:1358954496>", "Bool(false)": "<string:1296106743>", height: overflowTop };
  const obj1 = { position: "absolute", top: -overflowTop, bottom: -overflowBottom, left: -overflowHorizontal, right: -overflowHorizontal };
  const tmp5 = importDefault(dependencyMap[9]);
  const items = [callback(closure_4, { style: obj3 }), callback(closure_4, { style: { height: overflowBottom } }), , , , , , ];
  const obj4 = { "Null": "xs", "Null": "mobile-text-heading-primary", "Null": null, "Null": "heading-md/extrabold", "Null": 1.75, 9223372036854775807: "header", top: overflowTop, bottom: overflowBottom, width: overflowHorizontal };
  items[2] = callback(closure_4, { style: obj4 });
  const obj5 = { 0: "xs", 9223372036854775807: "mobile-text-heading-primary", -9223372036854775808: null, 0: "heading-md/extrabold", -9223372036854775808: 1.75, -9223372036854775808: "header", top: overflowTop, bottom: overflowBottom, width: overflowHorizontal };
  items[3] = callback(closure_4, { style: obj5 });
  items[4] = callback(closure_4, { style: { position: "absolute", top: overflowTop - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } });
  items[5] = callback(closure_4, { style: { position: "absolute", top: overflowTop - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } });
  items[6] = callback(closure_4, { style: { position: "absolute", bottom: overflowBottom - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } });
  items[7] = callback(closure_4, { style: { position: "absolute", bottom: overflowBottom - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" } });
  obj2.children = items;
  obj.maskElement = callback2(closure_4, obj2);
  const obj10 = { style: { marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal, flex: 1 }, children: tmp6 };
  obj.children = callback(closure_4, obj10);
  const obj11 = { style: items1 };
  const items1 = [tmp.profileFrameContainer, { width: result, marginTop: overflowTop, marginBottom: overflowBottom, marginHorizontal: overflowHorizontal }];
  if (null == profileBackgroundColor) {
    tmp6 = callback(tmp7, obj);
  }
  const items2 = [tmp6, , ];
  const obj12 = {};
  const items3 = [tmp.profileContainer, ];
  let tmp12 = null != token;
  if (tmp12) {
    const obj13 = { backgroundColor: token };
    tmp12 = obj13;
  }
  items3[1] = tmp12;
  obj12.style = items3;
  const obj14 = {};
  const obj15 = {};
  const obj6 = { position: "absolute", top: overflowTop - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" };
  const obj7 = { position: "absolute", top: overflowTop - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" };
  const obj8 = { position: "absolute", bottom: overflowBottom - xs, left: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" };
  const obj9 = { position: "absolute", bottom: overflowBottom - xs, right: overflowHorizontal - xs, width: 2 * xs, height: 2 * xs, borderRadius: xs, backgroundColor: "black" };
  const tmp10 = callback;
  const tmp11 = closure_4;
  const tmp7 = importDefault(dependencyMap[11]);
  const tmp8 = callback2;
  const tmp9 = closure_4;
  obj15.uri = importDefault(dependencyMap[13]);
  obj14.source = obj15;
  obj14.style = tmp.sampleProfile;
  obj14.resizeMode = "cover";
  obj12.children = callback(importDefault(dependencyMap[12]), obj14);
  items2[1] = tmp10(tmp11, obj12);
  const obj16 = { frame: profileFrame, filterLayer, profileThemeType: UserProfileThemeTypes.PREVIEW };
  const tmp13 = importDefault(dependencyMap[12]);
  obj16.frameOrder = arg1(dependencyMap[10]).ProfileFrameLayerOrder.FRONT;
  obj16.containerWidth = result;
  obj16.containerHeight = previewHeight - overflowTop - overflowBottom;
  items2[2] = callback(importDefault(dependencyMap[9]), obj16);
  obj11.children = items2;
  return tmp8(tmp9, obj11);
};
