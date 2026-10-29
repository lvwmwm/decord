// Module ID: 5146
// Function ID: 5147
// Name: CheckpointCharacterRive
// Dependencies: [109, 19, 21, 558, 5080, 576, 5147, 5135, 2]

// Module 5146 (CheckpointCharacterRive)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import BaseRive2 from "BaseRive" /* 5080 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import "ReactCompilerGating";
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dataBinding, dependencyMap, tmp3, tmp5;

let tmp;
const RiveErrorBoundary2 = tmp(5135);
let closure_2 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
let closure_3 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { AB_Master: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_12_Spooked: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Environment: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Character: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_01_Chill: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Aura: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_15_Awkward: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_14_Possessed: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_13_FreeFall: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_11_Spellbound: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_10_Sus: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_09_Rage: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_07_Anxious: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_06_Confused: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_05_Smitten: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_04_LockedIn: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_03_Bored: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_08_Sparkle: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_02_CryBaby: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" } };
const artboardViewModelInstances = { AB_Master: ["Base"], AB_Face_12_Spooked: ["Base"], AB_Environment: ["Base"], AB_Character: ["Base"], AB_Face_01_Chill: ["Base"], AB_Aura: ["Base"], AB_Face_15_Awkward: ["Base"], AB_Face_14_Possessed: ["Base"], AB_Face_13_FreeFall: ["Base"], AB_Face_11_Spellbound: ["Base"], AB_Face_10_Sus: ["Base"], AB_Face_09_Rage: ["Base"], AB_Face_07_Anxious: ["Base"], AB_Face_06_Confused: ["Base"], AB_Face_05_Smitten: ["Base"], AB_Face_04_LockedIn: ["Base"], AB_Face_03_Bored: ["Base"], AB_Face_08_Sparkle: ["Base"], AB_Face_02_CryBaby: ["Base"] };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj = {
  AB_Master: ReactCompilerGating.isReactCompilerEnabled() ? (function ABMasterBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABMasterBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_12_Spooked: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace12SpookedBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace12SpookedBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Environment: ReactCompilerGating.isReactCompilerEnabled() ? (function ABEnvironmentBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABEnvironmentBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Character: ReactCompilerGating.isReactCompilerEnabled() ? (function ABCharacterBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABCharacterBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_01_Chill: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace01ChillBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace01ChillBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Aura: ReactCompilerGating.isReactCompilerEnabled() ? (function ABAuraBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABAuraBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_15_Awkward: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace15AwkwardBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace15AwkwardBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_14_Possessed: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace14PossessedBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace14PossessedBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_13_FreeFall: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace13FreeFallBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace13FreeFallBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_11_Spellbound: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace11SpellboundBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace11SpellboundBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_10_Sus: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace10SusBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace10SusBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_09_Rage: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace09RageBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace09RageBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_07_Anxious: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace07AnxiousBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace07AnxiousBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_06_Confused: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace06ConfusedBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace06ConfusedBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_05_Smitten: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace05SmittenBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace05SmittenBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_04_LockedIn: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace04LockedInBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace04LockedInBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_03_Bored: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace03BoredBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace03BoredBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_08_Sparkle: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace08SparkleBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace08SparkleBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }),
  AB_Face_02_CryBaby: ReactCompilerGating.isReactCompilerEnabled() ? (function ABFace02CryBabyBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  }) : (function ABFace02CryBabyBindings(arg0) {
    let instance;
    let onDataBindingChange;
    let playIfNeeded;
    let reducedMotionEnabled;
    ({ instance, reducedMotionEnabled, dataBinding, onDataBindingChange, playIfNeeded } = arg0);
    let device;
    const useEnumBinding = BaseRive2.useEnumBinding;
    BaseRive2;
    if (dataBinding != null) {
      device = dataBinding.device;
    }
    let device1;
    if (onDataBindingChange != null) {
      device1 = onDataBindingChange.device;
    }
    const enumBinding = useEnumBinding("device", instance, device, device1, playIfNeeded);
    let chapterID;
    const useNumberBinding = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      chapterID = dataBinding.chapterID;
    }
    let chapterID1;
    if (onDataBindingChange != null) {
      chapterID1 = onDataBindingChange.chapterID;
    }
    const numberBinding = useNumberBinding("chapterID", instance, chapterID, chapterID1, playIfNeeded);
    let mobileLift;
    const useNumberBinding2 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      mobileLift = dataBinding.mobileLift;
    }
    let mobileLift1;
    if (onDataBindingChange != null) {
      mobileLift1 = onDataBindingChange.mobileLift;
    }
    const numberBinding2 = useNumberBinding2("mobileLift", instance, mobileLift, mobileLift1, playIfNeeded);
    let faceID;
    const useNumberBinding3 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceID = dataBinding.faceID;
    }
    let faceID1;
    if (onDataBindingChange != null) {
      faceID1 = onDataBindingChange.faceID;
    }
    const numberBinding3 = useNumberBinding3("faceID", instance, faceID, faceID1, playIfNeeded);
    let outfitID;
    const useNumberBinding4 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfitID = dataBinding.outfitID;
    }
    let outfitID1;
    if (onDataBindingChange != null) {
      outfitID1 = onDataBindingChange.outfitID;
    }
    const numberBinding4 = useNumberBinding4("outfitID", instance, outfitID, outfitID1, playIfNeeded);
    let outfit01Image;
    const useImageBinding = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit01Image = dataBinding.outfit01Image;
    }
    let outfit01Image1;
    if (onDataBindingChange != null) {
      outfit01Image1 = onDataBindingChange.outfit01Image;
    }
    const imageBinding = useImageBinding("outfit01Image", instance, outfit01Image, outfit01Image1, playIfNeeded);
    let outfit02Image;
    const useImageBinding2 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit02Image = dataBinding.outfit02Image;
    }
    let outfit02Image1;
    if (onDataBindingChange != null) {
      outfit02Image1 = onDataBindingChange.outfit02Image;
    }
    const imageBinding2 = useImageBinding2("outfit02Image", instance, outfit02Image, outfit02Image1, playIfNeeded);
    let outfit03Image;
    const useImageBinding3 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit03Image = dataBinding.outfit03Image;
    }
    let outfit03Image1;
    if (onDataBindingChange != null) {
      outfit03Image1 = onDataBindingChange.outfit03Image;
    }
    const imageBinding3 = useImageBinding3("outfit03Image", instance, outfit03Image, outfit03Image1, playIfNeeded);
    let outfit04Image;
    const useImageBinding4 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit04Image = dataBinding.outfit04Image;
    }
    let outfit04Image1;
    if (onDataBindingChange != null) {
      outfit04Image1 = onDataBindingChange.outfit04Image;
    }
    const imageBinding4 = useImageBinding4("outfit04Image", instance, outfit04Image, outfit04Image1, playIfNeeded);
    let outfit05Image;
    const useImageBinding5 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit05Image = dataBinding.outfit05Image;
    }
    let outfit05Image1;
    if (onDataBindingChange != null) {
      outfit05Image1 = onDataBindingChange.outfit05Image;
    }
    const imageBinding5 = useImageBinding5("outfit05Image", instance, outfit05Image, outfit05Image1, playIfNeeded);
    let outfit06Image;
    const useImageBinding6 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit06Image = dataBinding.outfit06Image;
    }
    let outfit06Image1;
    if (onDataBindingChange != null) {
      outfit06Image1 = onDataBindingChange.outfit06Image;
    }
    const imageBinding6 = useImageBinding6("outfit06Image", instance, outfit06Image, outfit06Image1, playIfNeeded);
    let outfit07Image;
    const useImageBinding7 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit07Image = dataBinding.outfit07Image;
    }
    let outfit07Image1;
    if (onDataBindingChange != null) {
      outfit07Image1 = onDataBindingChange.outfit07Image;
    }
    const imageBinding7 = useImageBinding7("outfit07Image", instance, outfit07Image, outfit07Image1, playIfNeeded);
    let outfit08Image;
    const useImageBinding8 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit08Image = dataBinding.outfit08Image;
    }
    let outfit08Image1;
    if (onDataBindingChange != null) {
      outfit08Image1 = onDataBindingChange.outfit08Image;
    }
    const imageBinding8 = useImageBinding8("outfit08Image", instance, outfit08Image, outfit08Image1, playIfNeeded);
    let outfit09Image;
    const useImageBinding9 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit09Image = dataBinding.outfit09Image;
    }
    let outfit09Image1;
    if (onDataBindingChange != null) {
      outfit09Image1 = onDataBindingChange.outfit09Image;
    }
    const imageBinding9 = useImageBinding9("outfit09Image", instance, outfit09Image, outfit09Image1, playIfNeeded);
    let outfit10Image;
    const useImageBinding10 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit10Image = dataBinding.outfit10Image;
    }
    let outfit10Image1;
    if (onDataBindingChange != null) {
      outfit10Image1 = onDataBindingChange.outfit10Image;
    }
    const imageBinding10 = useImageBinding10("outfit10Image", instance, outfit10Image, outfit10Image1, playIfNeeded);
    let outfit11Image;
    const useImageBinding11 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit11Image = dataBinding.outfit11Image;
    }
    let outfit11Image1;
    if (onDataBindingChange != null) {
      outfit11Image1 = onDataBindingChange.outfit11Image;
    }
    const imageBinding11 = useImageBinding11("outfit11Image", instance, outfit11Image, outfit11Image1, playIfNeeded);
    let outfit12Image;
    const useImageBinding12 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit12Image = dataBinding.outfit12Image;
    }
    let outfit12Image1;
    if (onDataBindingChange != null) {
      outfit12Image1 = onDataBindingChange.outfit12Image;
    }
    const imageBinding12 = useImageBinding12("outfit12Image", instance, outfit12Image, outfit12Image1, playIfNeeded);
    let outfit13Image;
    const useImageBinding13 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit13Image = dataBinding.outfit13Image;
    }
    let outfit13Image1;
    if (onDataBindingChange != null) {
      outfit13Image1 = onDataBindingChange.outfit13Image;
    }
    const imageBinding13 = useImageBinding13("outfit13Image", instance, outfit13Image, outfit13Image1, playIfNeeded);
    let outfit14Image;
    const useImageBinding14 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      outfit14Image = dataBinding.outfit14Image;
    }
    let outfit14Image1;
    if (onDataBindingChange != null) {
      outfit14Image1 = onDataBindingChange.outfit14Image;
    }
    const imageBinding14 = useImageBinding14("outfit14Image", instance, outfit14Image, outfit14Image1, playIfNeeded);
    let headwearID;
    const useNumberBinding5 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      headwearID = dataBinding.headwearID;
    }
    let headwearID1;
    if (onDataBindingChange != null) {
      headwearID1 = onDataBindingChange.headwearID;
    }
    const numberBinding5 = useNumberBinding5("headwearID", instance, headwearID, headwearID1, playIfNeeded);
    let shoesID;
    const useNumberBinding6 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      shoesID = dataBinding.shoesID;
    }
    let shoesID1;
    if (onDataBindingChange != null) {
      shoesID1 = onDataBindingChange.shoesID;
    }
    const numberBinding6 = useNumberBinding6("shoesID", instance, shoesID, shoesID1, playIfNeeded);
    let wearableID;
    const useNumberBinding7 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableID = dataBinding.wearableID;
    }
    let wearableID1;
    if (onDataBindingChange != null) {
      wearableID1 = onDataBindingChange.wearableID;
    }
    const numberBinding7 = useNumberBinding7("wearableID", instance, wearableID, wearableID1, playIfNeeded);
    let auraImage;
    const useImageBinding15 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      auraImage = dataBinding.auraImage;
    }
    let auraImage1;
    if (onDataBindingChange != null) {
      auraImage1 = onDataBindingChange.auraImage;
    }
    const imageBinding15 = useImageBinding15("auraImage", instance, auraImage, auraImage1, playIfNeeded);
    let baseColorImage;
    const useImageBinding16 = BaseRive2.useImageBinding;
    BaseRive2;
    if (dataBinding != null) {
      baseColorImage = dataBinding.baseColorImage;
    }
    let baseColorImage1;
    if (onDataBindingChange != null) {
      baseColorImage1 = onDataBindingChange.baseColorImage;
    }
    const imageBinding16 = useImageBinding16("baseColorImage", instance, baseColorImage, baseColorImage1, playIfNeeded);
    let stateChange;
    const useTriggerBinding = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      stateChange = dataBinding.stateChange;
    }
    let stateChange1;
    if (onDataBindingChange != null) {
      stateChange1 = onDataBindingChange.stateChange;
    }
    const triggerBinding = useTriggerBinding("stateChange", instance, stateChange, stateChange1, playIfNeeded);
    let faceStateChange;
    const useTriggerBinding2 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      faceStateChange = dataBinding.faceStateChange;
    }
    let faceStateChange1;
    if (onDataBindingChange != null) {
      faceStateChange1 = onDataBindingChange.faceStateChange;
    }
    const triggerBinding2 = useTriggerBinding2("faceStateChange", instance, faceStateChange, faceStateChange1, playIfNeeded);
    let wearableChange;
    const useTriggerBinding3 = BaseRive2.useTriggerBinding;
    BaseRive2;
    if (dataBinding != null) {
      wearableChange = dataBinding.wearableChange;
    }
    let wearableChange1;
    if (onDataBindingChange != null) {
      wearableChange1 = onDataBindingChange.wearableChange;
    }
    const triggerBinding3 = useTriggerBinding3("wearableChange", instance, wearableChange, wearableChange1, playIfNeeded);
    let cursorX;
    const useNumberBinding8 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorX = dataBinding.cursorX;
    }
    let cursorX1;
    if (onDataBindingChange != null) {
      cursorX1 = onDataBindingChange.cursorX;
    }
    const numberBinding8 = useNumberBinding8("cursorX", instance, cursorX, cursorX1, playIfNeeded);
    let cursorY;
    const useNumberBinding9 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      cursorY = dataBinding.cursorY;
    }
    let cursorY1;
    if (onDataBindingChange != null) {
      cursorY1 = onDataBindingChange.cursorY;
    }
    const numberBinding9 = useNumberBinding9("cursorY", instance, cursorY, cursorY1, playIfNeeded);
    let prop;
    const useNumberBinding10 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop = dataBinding.gradientBottomOpacity;
    }
    let prop1;
    if (onDataBindingChange != null) {
      prop1 = onDataBindingChange.gradientBottomOpacity;
    }
    const numberBinding10 = useNumberBinding10("gradientBottomOpacity", instance, prop, prop1, playIfNeeded);
    let prop2;
    const useNumberBinding11 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop2 = dataBinding.gradientBottomPosition;
    }
    let prop3;
    if (onDataBindingChange != null) {
      prop3 = onDataBindingChange.gradientBottomPosition;
    }
    const numberBinding11 = useNumberBinding11("gradientBottomPosition", instance, prop2, prop3, playIfNeeded);
    let gradientLeftOpacity;
    const useNumberBinding12 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftOpacity = dataBinding.gradientLeftOpacity;
    }
    let gradientLeftOpacity1;
    if (onDataBindingChange != null) {
      gradientLeftOpacity1 = onDataBindingChange.gradientLeftOpacity;
    }
    const numberBinding12 = useNumberBinding12("gradientLeftOpacity", instance, gradientLeftOpacity, gradientLeftOpacity1, playIfNeeded);
    let gradientLeftPosition;
    const useNumberBinding13 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientLeftPosition = dataBinding.gradientLeftPosition;
    }
    let gradientLeftPosition1;
    if (onDataBindingChange != null) {
      gradientLeftPosition1 = onDataBindingChange.gradientLeftPosition;
    }
    const numberBinding13 = useNumberBinding13("gradientLeftPosition", instance, gradientLeftPosition, gradientLeftPosition1, playIfNeeded);
    let gradientRightOpacity;
    const useNumberBinding14 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientRightOpacity = dataBinding.gradientRightOpacity;
    }
    let gradientRightOpacity1;
    if (onDataBindingChange != null) {
      gradientRightOpacity1 = onDataBindingChange.gradientRightOpacity;
    }
    const numberBinding14 = useNumberBinding14("gradientRightOpacity", instance, gradientRightOpacity, gradientRightOpacity1, playIfNeeded);
    let prop4;
    const useNumberBinding15 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      prop4 = dataBinding.gradientRightPosition;
    }
    let prop5;
    if (onDataBindingChange != null) {
      prop5 = onDataBindingChange.gradientRightPosition;
    }
    const numberBinding15 = useNumberBinding15("gradientRightPosition", instance, prop4, prop5, playIfNeeded);
    let gradientTopOpacity;
    const useNumberBinding16 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopOpacity = dataBinding.gradientTopOpacity;
    }
    let gradientTopOpacity1;
    if (onDataBindingChange != null) {
      gradientTopOpacity1 = onDataBindingChange.gradientTopOpacity;
    }
    const numberBinding16 = useNumberBinding16("gradientTopOpacity", instance, gradientTopOpacity, gradientTopOpacity1, playIfNeeded);
    let gradientTopPosition;
    const useNumberBinding17 = BaseRive2.useNumberBinding;
    BaseRive2;
    if (dataBinding != null) {
      gradientTopPosition = dataBinding.gradientTopPosition;
    }
    let gradientTopPosition1;
    if (onDataBindingChange != null) {
      gradientTopPosition1 = onDataBindingChange.gradientTopPosition;
    }
    const numberBinding17 = useNumberBinding17("gradientTopPosition", instance, gradientTopPosition, gradientTopPosition1, playIfNeeded);
    const tmpResult72 = BaseRive2;
    const booleanBinding = tmpResult72.useBooleanBinding("reducedMotion", instance, reducedMotionEnabled, undefined, playIfNeeded);
    return null;
  })
};
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterRiveInner(arg0) {
  let _require;
  let artboard;
  let defaultViewModelInstance;
  let fallback;
  let onDataBindingChange;
  let ref;
  let stateMachine;
  let str;
  let tmp10;
  let tmp6;
  let tmp7;
  let tmp8;
  let tmp9;
  let tmp2 = dependencyMap;
  obj = require("react");
  const cResult = obj.c(19);
  if (cResult[0] !== arg0) {
    ({ ref, fallback, artboard, stateMachine, defaultViewModelInstance, dataBinding, onDataBindingChange } = arg0);
    const tmp13 = _objectWithoutProperties(arg0, str);
    _require = dataBinding;
    dependencyMap = onDataBindingChange;
    cResult[0] = arg0;
    class R {
      constructor(arg0) {
        tmp = closure_9[closure_2];
        tmp2 = null;
        if (null != tmp) {
          tmp3 = arg0;
          tmp4 = jsx;
          obj = {};
          tmp5 = obj;
          merged = Object.assign(arg0);
          tmp7 = closure_0;
          obj.dataBinding = closure_0;
          tmp8 = closure_1;
          obj.onDataBindingChange = closure_1;
          tmp2 = jsx(tmp, obj);
        }
        return tmp2;
      }
    }
    cResult[1] = dataBinding;
    cResult[2] = onDataBindingChange;
    cResult[3] = ref;
    cResult[4] = tmp13;
    cResult[5] = stateMachine;
    cResult[6] = artboard;
    cResult[7] = defaultViewModelInstance;
    tmp10 = defaultViewModelInstance;
    tmp9 = artboard;
    tmp8 = stateMachine;
    tmp7 = tmp13;
    tmp6 = ref;
  } else {
    _require = cResult[1];
    dependencyMap = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
  }
  str = "AB_Master";
  if (undefined !== tmp9) {
    str = tmp9;
  }
  let str2 = "Base";
  if (undefined !== tmp10) {
    str2 = tmp10;
  }
  if (cResult[8] === str) {
    if (cResult[9] === tmp4) {
      let tmp14;
      if (cResult[10] === tmp5) {
        tmp14 = cResult[11];
      }
      if (cResult[12] === str) {
        if (cResult[13] === str2) {
          if (cResult[14] === tmp6) {
            if (cResult[15] === tmp14) {
              if (cResult[16] === tmp7) {
                let tmp15;
                if (cResult[17] === tmp8) {
                  tmp15 = cResult[18];
                }
                return tmp15;
              }
            }
          }
        }
      }
      const BaseRive = tmp(5080).BaseRive;
      class R {
        constructor(arg0) {
          tmp = closure_9[closure_2];
          tmp2 = null;
          if (null != tmp) {
            tmp3 = arg0;
            tmp4 = jsx;
            obj = {};
            tmp5 = obj;
            merged = Object.assign(arg0);
            tmp7 = closure_0;
            obj.dataBinding = closure_0;
            tmp8 = closure_1;
            obj.onDataBindingChange = closure_1;
            tmp2 = jsx(tmp, obj);
          }
          return tmp2;
        }
      }
      let merged = Object.assign(tmp7);
      const tmp22 = <BaseRive ref={tmp6} src={require("AssetRegistry")} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={tmp8} renderDataBinding={null} />;
      cResult[12] = str;
      cResult[13] = str2;
      cResult[14] = tmp6;
      cResult[15] = tmp14;
      cResult[16] = tmp7;
      cResult[17] = tmp8;
      cResult[18] = tmp22;
      tmp15 = tmp22;
    }
  }
  class R {
    constructor(arg0) {
      tmp = closure_9[closure_2];
      tmp2 = null;
      if (null != tmp) {
        tmp3 = arg0;
        tmp4 = jsx;
        obj = {};
        tmp5 = obj;
        merged = Object.assign(arg0);
        tmp7 = closure_0;
        obj.dataBinding = closure_0;
        tmp8 = closure_1;
        obj.onDataBindingChange = closure_1;
        tmp2 = jsx(tmp, obj);
      }
      return tmp2;
    }
  }
  cResult[8] = str;
  cResult[9] = tmp4;
  cResult[10] = tmp5;
  cResult[11] = R;
  tmp14 = R;
}) : (function CheckpointCharacterRiveInner(ref) {
  let artboard;
  let fallback;
  ({ fallback, artboard } = ref);
  let str = "AB_Master";
  ref = ref.ref;
  if (undefined !== artboard) {
    str = artboard;
  }
  const defaultViewModelInstance = ref.defaultViewModelInstance;
  let str2 = "Base";
  const stateMachine = ref.stateMachine;
  if (undefined !== defaultViewModelInstance) {
    str2 = defaultViewModelInstance;
  }
  dataBinding = ref.dataBinding;
  const onDataBindingChange = ref.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(ref, closure_3);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != obj[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(dataBinding[4]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={ref} src={str(dataBinding[6])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CheckpointCharacterRiveWithBoundary(fallback) {
  let tmp4;
  obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== fallback) {
    const merged = Object.assign(fallback);
    const tmp10 = <closure_10 />;
    cResult[0] = fallback;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === fallback.fallback) {
    let tmp11;
    if (cResult[3] === tmp4) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = jsx(RiveErrorBoundary2.RiveErrorBoundary, { fallback: fallback.fallback, children: tmp4 });
  cResult[2] = fallback.fallback;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : (function CheckpointCharacterRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
});
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCharacterRive.tsx");

export const CheckpointCharacterRive = tmp2;
