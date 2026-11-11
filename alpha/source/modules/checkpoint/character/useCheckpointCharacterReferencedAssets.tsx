// Module ID: 14367
// Function ID: 14368
// Name: useCheckpointCharacterReferencedAssets
// Dependencies: [19, 1357, 14200, 14199, 14366, 14368, 2]
// Exports: useCheckpointCharacterReferencedAssets

// Module 14367 (useCheckpointCharacterReferencedAssets)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1357 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 14199 */;
import CheckpointCharacterTextureAssets from "CheckpointCharacterTextureAssets" /* 14200 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let set = new Set([1]);
const keys = Object.keys(CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET);
let closure_4 = keys.map((name) => {
  let combined;
  let obj2;
  const obj = { name, role: obj2.getCheckpointCharacterTextureRole(name), swapKey: combined };
  combined = name;
  obj2 = CheckpointCharacterTextureUtils;
  const obj3 = utils_PlatformUtils;
  if (obj3.isIOS()) {
    const _HermesInternal = HermesInternal;
    combined = "" + name + "-" + CheckpointCharacterTextureAssets.CHECKPOINT_CHARACTER_TEXTURE_NAME_TO_ASSET[name].riveId;
  }
  return obj;
});
const result = size.fileFinishedImporting("modules/checkpoint/character/useCheckpointCharacterReferencedAssets.tsx");

export function useCheckpointCharacterReferencedAssets(arg0) {
  let requestedDataBinding;
  let textureScale;
  let visibleDataBinding;
  const f108136 = () => {
    const obj = { faceID: faceID2, headwearID: headwearID2, shoesID: shoesID2, wearableID: wearableID2 };
    let closure_2 = device2;
    set = new Set();
    const item = closure_2_4.forEach((item) => {
      let name;
      let role;
      ({ name, role } = item);
      const type = role.type;
      if (faceID2(chapterID2[3]).CheckpointCharacterTextureType.SLOT !== type) {
        if (faceID2(chapterID2[3]).CheckpointCharacterTextureType.TRAIT === type) {
          if (obj[role.path] === role.riveId) {
            set.add(name);
          }
        } else if (faceID2(chapterID2[3]).CheckpointCharacterTextureType.LAYOUT === type) {
          const layouts = role.layouts;
          if (layouts.includes(closure_2)) {
            set.add(name);
          }
        } else if (faceID2(chapterID2[3]).CheckpointCharacterTextureType.ALWAYS === type) {
          const hasItem = "tex_wireframe_spritesheet" !== name || set.has(closure_1);
          if (hasItem) {
            set.add(name);
          }
        }
      }
    });
    return set;
  };
  ({ visibleDataBinding, requestedDataBinding, textureScale } = arg0);
  let checkpointCharacterLoadedTextureNames;
  const faceID = visibleDataBinding.faceID;
  const headwearID = visibleDataBinding.headwearID;
  const shoesID = visibleDataBinding.shoesID;
  const wearableID = visibleDataBinding.wearableID;
  const chapterID = visibleDataBinding.chapterID;
  const device = visibleDataBinding.device;
  const items = [faceID, headwearID, shoesID, wearableID, chapterID, device];
  const faceID2 = requestedDataBinding.faceID;
  const headwearID2 = requestedDataBinding.headwearID;
  const shoesID2 = requestedDataBinding.shoesID;
  const wearableID2 = requestedDataBinding.wearableID;
  let chapterID2 = requestedDataBinding.chapterID;
  const device2 = requestedDataBinding.device;
  const items1 = [faceID2, headwearID2, shoesID2, wearableID2, chapterID2, device2];
  const memo = react.useMemo(f108136, items);
  const memo1 = react.useMemo(f108136, items1);
  let obj = textureScale(checkpointCharacterLoadedTextureNames[5]);
  checkpointCharacterLoadedTextureNames = obj.useCheckpointCharacterLoadedTextureNames({ visibleTextureNames: memo, requestedTextureNames: memo1 });
  const items2 = [checkpointCharacterLoadedTextureNames, textureScale];
  return react.useMemo(() => {
    let closure_0 = checkpointCharacterLoadedTextureNames;
    let closure_1 = textureScale;
    let obj = {};
    const item = closure_4.forEach((name) => {
      let url;
      name = name.name;
      const swapKey = name.swapKey;
      if (set.has(name)) {
        const tmpResult = checkpointCharacterLoadedTextureNames(textureScale[3]);
        url = tmpResult.getCheckpointCharacterTextureUrl(name, closure_1);
      } else {
        url = tmp(tmp2[4]).CHECKPOINT_CHARACTER_BLANK_TEXTURE.url;
      }
      obj = { source: { uri: url } };
      obj[swapKey] = obj;
    });
    return obj;
  }, items2);
}
