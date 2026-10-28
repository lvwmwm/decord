// Module ID: 13028
// Function ID: 13029
// Name: CheckpointCharacterDataBinding
// Dependencies: [6399, 6074, 13029, 2]
// Exports: getCheckpointCharacterDataBinding

// Module 13028 (CheckpointCharacterDataBinding)
import CheckpointNavigation from "CheckpointNavigation" /* 6399 */;
import CheckpointCharacterRiveTraits from "CheckpointCharacterRiveTraits" /* 13029 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_2 = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14"];
let closure_3 = { [CheckpointNavigation.CheckpointCharacterStage.IDLE]: 0, [CheckpointNavigation.CheckpointCharacterStage.INTRODUCTION]: 1, [CheckpointNavigation.CheckpointCharacterStage.FACE]: 2, [CheckpointNavigation.CheckpointCharacterStage.OUTFIT]: 3, [CheckpointNavigation.CheckpointCharacterStage.HEADWEAR]: 4, [CheckpointNavigation.CheckpointCharacterStage.SHOES]: 5, [CheckpointNavigation.CheckpointCharacterStage.WEARABLE]: 6, [CheckpointNavigation.CheckpointCharacterStage.AURA]: 7, [CheckpointNavigation.CheckpointCharacterStage.ASSEMBLED]: 8, [CheckpointNavigation.CheckpointCharacterStage.FINALIZE]: 8, [CheckpointNavigation.CheckpointCharacterStage.SUMMARY]: 8 };
let closure_4 = { MobilePortrait: { gradientTopOpacity: 100, gradientTopPosition: 40, gradientBottomOpacity: 100, gradientBottomPosition: 90, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 0, gradientRightPosition: 0 }, MobileLandscape: { gradientTopOpacity: 100, gradientTopPosition: 10, gradientBottomOpacity: 100, gradientBottomPosition: 10, gradientLeftOpacity: 0, gradientLeftPosition: 0, gradientRightOpacity: 100, gradientRightPosition: 90 } };
const result = size.fileFinishedImporting("modules/checkpoint/character/CheckpointCharacterDataBinding.tsx");

export const getCheckpointCharacterDataBinding = function getCheckpointCharacterDataBinding(stage, stateFromStores, MobileLandscape) {
  let aura;
  let base;
  let closure_0;
  let face;
  let hat;
  let num;
  let num3;
  let obj2;
  let outfit;
  let shoes;
  let wearable;
  const tmp2 = obj2;
  const obj = require("CheckpointCharacterTraits");
  const characterFromTraits = obj.getCharacterFromTraits(stateFromStores);
  ({ base, shoes, outfit, face, hat, wearable, aura } = characterFromTraits);
  const tmp4 = require("CheckpointCharacterRiveTraits").CHECKPOINT_OUTFIT_OPTION_TO_RIVE_OUTFIT[outfit];
  _require = tmp4;
  obj2 = {};
  const item = closure_2.forEach((item) => {
    let CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    let riveId;
    const NumberResult = Number(item);
    if (closure_0 != null) {
      riveId = tmp2.riveId;
    }
    if (NumberResult === riveId) {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = tmp2.texture;
    } else {
      CHECKPOINT_CHARACTER_BLANK_TEXTURE = CheckpointCharacterRiveTraits.CHECKPOINT_CHARACTER_BLANK_TEXTURE;
    }
    obj2["outfit" + item + "Image"] = CHECKPOINT_CHARACTER_BLANK_TEXTURE.url;
  });
  const obj3 = { device: MobileLandscape, mobileLift: num, chapterID: closure_3[stage], faceID: face, shoesID: shoes, headwearID: require("CheckpointCharacterRiveTraits").CHECKPOINT_HAT_OPTION_TO_HEADWEAR_RIVE_ID[hat], wearableID: require("CheckpointCharacterRiveTraits").CHECKPOINT_WEARABLE_OPTION_TO_WEARABLE_RIVE_ID[wearable], outfitID: num3, auraImage: require("CheckpointCharacterRiveTraits").CHECKPOINT_AURA_OPTION_TO_AURA_RIVE_TEXTURE[aura].url, baseColorImage: require("CheckpointCharacterRiveTraits").CHECKPOINT_BASE_OPTION_TO_BASE_RIVE_TEXTURE[base].url };
  num = 0;
  if ("MobilePortrait" === MobileLandscape) {
    let num2 = 30;
    if (stage === require("CheckpointNavigation").CheckpointCharacterStage.FINALIZE) {
      num2 = 100;
    }
    num = num2;
  }
  num3 = undefined;
  if (tmp4 != null) {
    num3 = tmp4.riveId;
  }
  if (num3 == null) {
    num3 = 0;
  }
  const merged = Object.assign(closure_4[MobileLandscape]);
  const merged1 = Object.assign(obj2);
  return obj3;
};
