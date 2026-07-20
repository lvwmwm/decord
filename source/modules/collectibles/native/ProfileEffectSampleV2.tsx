// Module ID: 8204
// Function ID: 64873
// Name: ProfileEffectSample
// Dependencies: []
// Exports: default

// Module 8204 (ProfileEffectSample)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[2]);
({ jsx: closure_3, jsxs: closure_4 } = _module);
const _module1 = require(dependencyMap[3]);
let obj = { profileContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_SUBTLE };
obj.profileBackground = obj;
obj.sampleProfileImage = { aspectRatio: require(dependencyMap[1]).SAMPLE_PROFILE_ASPECT_RATIO };
const obj1 = { _secureFramesTransitionPrepareCount: null, visible: null, hasSpoiler: null, pointerEvents: null, borderColor: importDefault(dependencyMap[4]).colors.BORDER_MUTED };
obj.profileBorder = obj1;
let closure_5 = _module1.createStyles(obj);
const _module2 = require(dependencyMap[8]);
const result = _module2.fileFinishedImporting("modules/collectibles/native/ProfileEffectSampleV2.tsx");

export default function ProfileEffectSample(hideBackground) {
  let flag = hideBackground.hideBackground;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = callback2();
  let obj = {};
  const items = [tmp.profileContainer, ];
  let profileBackground = !flag;
  if (profileBackground) {
    profileBackground = tmp.profileBackground;
  }
  items[1] = profileBackground;
  obj.style = items;
  obj = { style: items1 };
  const items1 = [tmp.sampleProfileImage];
  obj = { uri: importDefault(dependencyMap[6]) };
  obj.source = obj;
  obj.accessible = false;
  obj.resizeMode = "cover";
  const items2 = [callback(importDefault(dependencyMap[5]), obj), , ];
  let tmp5 = !flag;
  if (tmp5) {
    const obj1 = { style: tmp.profileBorder };
    tmp5 = callback(View, obj1);
  }
  items2[1] = tmp5;
  items2[2] = callback(importDefault(dependencyMap[7]), { skuId: hideBackground.item.skuId });
  obj.children = items2;
  return closure_4(View, obj);
};
