// Module ID: 8689
// Function ID: 68849
// Name: filterLayer
// Dependencies: []
// Exports: default

// Module 8689 (filterLayer)
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
obj = { 822280274: 10, -1437179314: 10, 1661206353: "premium_tier_0_yearly", borderColor: importDefault(dependencyMap[6]).colors.BORDER_NORMAL, borderRadius: importDefault(dependencyMap[6]).radii.xs };
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
  const obj3 = { "Bool(true)": "%MapPrototype%", "Bool(true)": "isArray", "Bool(true)": "isArrayBuffer", "Bool(true)": "GUILD_INCIDENT_ALERT_MODE_DISABLED", "Bool(true)": "MultipleChoicePrompt", "Bool(true)": "isArray", height: overflowTop };
  const obj1 = { position: "absolute", top: -overflowTop, bottom: -overflowBottom, left: -overflowHorizontal, right: -overflowHorizontal };
  const tmp5 = importDefault(dependencyMap[9]);
  const items = [callback(closure_4, { style: obj3 }), , , , , , , ];
  const obj4 = { onTapGiftIntentPrimaryCta: "%MapPrototype%", onTapGiftIntentSecondaryCta: "isArray", onTapAvatar: "isArrayBuffer", onTapSticker: "GUILD_INCIDENT_ALERT_MODE_DISABLED", onLongPressSticker: "MultipleChoicePrompt", soundboardSounds: "isArray", height: overflowBottom };
  items[1] = callback(closure_4, { style: obj4 });
  items[2] = callback(closure_4, { style: { top: overflowTop, bottom: overflowBottom, width: overflowHorizontal } });
  const obj5 = { alignItems: "xs", justifyContent: "mobile-text-heading-primary", display: null, flexDirection: "heading-md/extrabold", justifyContent: 1.75, alignItems: "header", top: overflowTop, bottom: overflowBottom, width: overflowHorizontal };
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
