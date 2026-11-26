// Module ID: 12838
// Function ID: 12839
// Name: CheckpointCharacterDataBinding
// Dependencies: [6767, 6442, 12839, 12672, 2]
// Exports: getCheckpointCharacterDataBinding, getCheckpointCharacterOutfitImageProperty

// Module 12838 (CheckpointCharacterDataBinding)
import CheckpointNavigation from "CheckpointNavigation" /* 6767 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 12672 */;
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits" /* 12839 */;
import size from "module_2" /* 2 */;

let items = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
const mapped = items.map((item) => "outfit" + item + "Image");
let closure_4 = { [CheckpointNavigation.CheckpointCharacterStage.IDLE]: 0, [CheckpointNavigation.CheckpointCharacterStage.INTRODUCTION]: 1, [CheckpointNavigation.CheckpointCharacterStage.FACE]: 2, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: 3, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: 4, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: 5, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: 6, [CheckpointNavigation.CheckpointCharacterStage.AURA]: 7, [CheckpointNavigation.CheckpointCharacterStage.ASSEMBLED]: 8, [CheckpointNavigation.CheckpointCharacterStage.FINALIZE]: 8, [CheckpointNavigation.CheckpointCharacterStage.EXIT]: 9, [CheckpointNavigation.CheckpointCharacterStage.SUMMARY]: 8 };
let obj = { Desktop: { gradientTopOpacity: 0, gradientTopPosition: 0, gradientBottomOpacity: 0, gradientBottomPosition: 0, gradientLeftOpacity: 100, gradientLeftPosition: 100, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobilePortrait: { gradientTopOpacity: 100, gradientTopPosition: 45, gradientBottomOpacity: 100, gradientBottomPosition: 75, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobileLandscape: { gradientTopOpacity: 100, gradientTopPosition: 50, gradientBottomOpacity: 100, gradientBottomPosition: 30, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 100, gradientRightPosition: 100 } };
let obj2 = { gradientTopPosition: 25, gradientBottomPosition: 90 };
let merged = Object.assign(obj.MobilePortrait);
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterDataBinding.tsx");

export const CHECKPOINT_CHARACTER_OUTFIT_IMAGE_PROPERTIES = mapped;
export function getCheckpointCharacterOutfitImageProperty(outfitID) {
  let tmp = null;
  if (outfitID > 0) {
    tmp = mapped[outfitID - 1];
  }
  return tmp;
}
export function getCheckpointCharacterDataBinding(compactAssets) {
  let aura;
  let base;
  let closure_2;
  let face;
  let hat;
  let isHidden;
  let layout;
  let outfit;
  let shoes;
  let stage;
  let textureScale;
  let traits;
  let wearable;
  ({ stage, layout, textureScale } = compactAssets);
  let flag = compactAssets.compactAssets;
  ({ isHidden, traits } = compactAssets);
  if (flag === undefined) {
    flag = false;
  }
  const tmp2 = flag;
  obj = textureScale(flag[1]);
  const characterFromTraits = obj.getCharacterFromTraits(traits);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = textureScale(flag[2]).CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
  items = tmp4;
  obj2 = {};
  const item = items.forEach((item) => {
    let CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    let riveId;
    const NumberResult = Number(item);
    if (closure_2 != null) {
      riveId = tmp2.riveId;
    }
    if (NumberResult === riveId) {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = tmp2.texture;
    } else {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = CheckpointCharacterRiveTraits.CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    }
    const combined = "outfit" + item + "Image";
    obj = CheckpointCharacterTextureUtils;
    obj2[combined] = obj.getCheckpointCharacterTextureUrl(CHECKPOINT_CHARACTER_BLANK_TEXTURE.name, textureScale, flag);
  });
  const obj3 = { device: layout, chapterID: null, faceID: null, shoesID: null, headwearID: null, wearableID: null, outfitID: null, auraImage: null, baseColorImage: null };
  if (isHidden) {
    let tmp6;
    if (stage === textureScale(tmp2[0]).CheckpointCharacterStage.FACE) {
      tmp6 = closure_4[tmp(undefined, tmp2[0]).CheckpointCharacterStage.IDLE];
    }
    obj3.chapterID = tmp6;
    obj3.faceID = face;
    obj3.shoesID = shoes;
    obj3.headwearID = textureScale(tmp2[2]).CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat];
    obj3.wearableID = textureScale(tmp2[2]).CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable];
    let num;
    if (tmp4 != null) {
      num = tmp4.riveId;
    }
    if (num == null) {
      num = 0;
    }
    obj3.outfitID = num;
    const tmpResult = textureScale(tmp2[3]);
    obj3.auraImage = tmpResult.getCheckpointCharacterTextureUrl(textureScale(tmp2[2]).CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].name, textureScale, flag);
    const tmpResult2 = textureScale(tmp2[3]);
    obj3.baseColorImage = tmpResult2.getCheckpointCharacterTextureUrl(textureScale(tmp2[2]).CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].name, textureScale, flag);
    if ("MobilePortrait" === layout) {
      let tmp10;
      if (stage === textureScale(tmp2[0]).CheckpointCharacterStage.INTRODUCTION) {
        tmp10 = obj2;
      }
      const merged = Object.assign(tmp10);
      const merged1 = Object.assign(obj2);
      return obj3;
    }
    tmp10 = obj[layout];
  }
  tmp6 = closure_4[stage];
}
