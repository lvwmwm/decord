// Module ID: 13615
// Function ID: 13616
// Name: CheckpointCharacterDataBinding
// Dependencies: [6435, 6111, 13613, 13612, 2]
// Exports: getCheckpointCharacterDataBinding

// Module 13615 (CheckpointCharacterDataBinding)
import CheckpointNavigation from "CheckpointNavigation" /* 6435 */;
import CheckpointCharacterTextureUtils from "CheckpointCharacterTextureUtils" /* 13612 */;
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits" /* 13613 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let closure_2 = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
let closure_3 = { [CheckpointNavigation.CheckpointCharacterStage.IDLE]: 0, [CheckpointNavigation.CheckpointCharacterStage.INTRODUCTION]: 1, [CheckpointNavigation.CheckpointCharacterStage.FACE]: 2, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: 3, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: 4, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: 5, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: 6, [CheckpointNavigation.CheckpointCharacterStage.AURA]: 7, [CheckpointNavigation.CheckpointCharacterStage.ASSEMBLED]: 8, [CheckpointNavigation.CheckpointCharacterStage.FINALIZE]: 8, [CheckpointNavigation.CheckpointCharacterStage.SUMMARY]: 8 };
let obj = { MobilePortrait: { gradientTopOpacity: 100, gradientTopPosition: 45, gradientBottomOpacity: 100, gradientBottomPosition: 75, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobileLandscape: { gradientTopOpacity: 100, gradientTopPosition: 50, gradientBottomOpacity: 100, gradientBottomPosition: 30, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 100, gradientRightPosition: 100 } };
let obj2 = { gradientTopPosition: 55, gradientBottomPosition: 90 };
let merged = Object.assign(obj.MobilePortrait);
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterDataBinding.tsx");

export function getCheckpointCharacterDataBinding(traits) {
  let aura;
  let base;
  let characterBottomInset;
  let closure_1;
  let face;
  let hat;
  let layout;
  let num;
  let num5;
  let outfit;
  let shoes;
  let stage;
  let stageHeight;
  let textureScale;
  let tmpResult;
  let tmpResult2;
  let wearable;
  ({ stage, layout, characterBottomInset, stageHeight, textureScale } = traits);
  dependencyMap = undefined;
  const tmp2 = dependencyMap;
  traits = traits.traits;
  obj = textureScale(6111);
  const characterFromTraits = obj.getCharacterFromTraits(traits);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = textureScale(13613).CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
  dependencyMap = tmp4;
  obj2 = {};
  const item = obj2.forEach((item) => {
    let CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    let riveId;
    const NumberResult = Number(item);
    if (closure_1 != null) {
      riveId = tmp2.riveId;
    }
    if (NumberResult === riveId) {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = tmp2.texture;
    } else {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = CheckpointCharacterRiveTraits.CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    }
    const combined = "outfit" + item + "Image";
    obj = CheckpointCharacterTextureUtils;
    obj2[combined] = obj.getCheckpointCharacterTextureUrl(CHECKPOINT_CHARACTER_BLANK_TEXTURE.name, textureScale);
  });
  const obj3 = { device: layout, mobileLift: num, chapterID: closure_3[stage], faceID: face, shoesID: shoes, headwearID: textureScale(13613).CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat], wearableID: textureScale(13613).CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable], outfitID: num5, auraImage: tmpResult.getCheckpointCharacterTextureUrl(textureScale(13613).CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].name, textureScale), baseColorImage: tmpResult2.getCheckpointCharacterTextureUrl(textureScale(13613).CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].name, textureScale) };
  num = 0;
  if ("MobilePortrait" === layout) {
    let num2 = 30;
    if (null != characterBottomInset) {
      const _Math = Math;
      num2 = Math.round((0.75 * stageHeight - (stageHeight - characterBottomInset)) / stageHeight * 1080);
    }
    num = num2;
  }
  num5 = undefined;
  if (tmp4 != null) {
    num5 = tmp4.riveId;
  }
  if (num5 == null) {
    num5 = 0;
  }
  tmpResult = textureScale(13612);
  tmpResult2 = textureScale(13612);
  if ("MobilePortrait" === layout) {
    let tmp8;
    if (stage === textureScale(6435).CheckpointCharacterStage.INTRODUCTION) {
      tmp8 = obj2;
    }
    const merged = Object.assign(tmp8);
    const merged1 = Object.assign(obj2);
    return obj3;
  }
  tmp8 = obj[layout];
}
