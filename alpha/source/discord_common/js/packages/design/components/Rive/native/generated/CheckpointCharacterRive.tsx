// Module ID: 5152
// Function ID: 5153
// Name: CheckpointCharacterRive
// Dependencies: [109, 19, 21, 5084, 5153, 5141, 2]
// Exports: CheckpointCharacterRive

// Module 5152 (CheckpointCharacterRive)
import Fragment from "Fragment" /* 21 */;
import BaseRive2 from "BaseRive" /* 5084 */;
import RiveErrorBoundary2 from "RiveErrorBoundary" /* 5141 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function CheckpointCharacterRiveInner(ref) {
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
  const dataBinding = ref.dataBinding;
  const onDataBindingChange = ref.onDataBindingChange;
  const items = [str, dataBinding, onDataBindingChange];
  const tmp = _objectWithoutProperties(ref, onDataBindingChange);
  const callback = react.useCallback((arg0) => {
    let tmp2 = null;
    if (null != closure_8[str]) {
      const merged = Object.assign(arg0);
      tmp2 = <tmp dataBinding={dataBinding} onDataBindingChange={onDataBindingChange} />;
    }
    return tmp2;
  }, items);
  const BaseRive = str(dataBinding[3]).BaseRive;
  let merged = Object.assign(tmp);
  return <BaseRive ref={ref} src={str(dataBinding[4])} artboard={str} artboardProperties={artboardProperties} artboardViewModelInstances={artboardViewModelInstances} defaultViewModelInstance={str2} stateMachine={stateMachine} renderDataBinding={callback} />;
}
let closure_2 = ["ref", "fallback", "artboard", "stateMachine", "defaultViewModelInstance", "dataBinding", "onDataBindingChange"];
const jsx = Fragment.jsx;
const artboardProperties = { AB_Master: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_12_Spooked: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Environment: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Character: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_01_Chill: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Aura: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_15_Awkward: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_14_Possessed: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_13_FreeFall: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_11_Spellbound: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_10_Sus: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_09_Rage: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_07_Anxious: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_06_Confused: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_05_Smitten: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_04_LockedIn: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_03_Bored: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_08_Sparkle: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" }, AB_Face_02_CryBaby: { device: "enum", chapterID: "number", mobileLift: "number", faceID: "number", outfitID: "number", outfit01Image: "image", outfit02Image: "image", outfit03Image: "image", outfit04Image: "image", outfit05Image: "image", outfit06Image: "image", outfit07Image: "image", outfit08Image: "image", outfit09Image: "image", outfit10Image: "image", outfit11Image: "image", outfit12Image: "image", outfit13Image: "image", outfit14Image: "image", headwearID: "number", shoesID: "number", wearableID: "number", auraImage: "image", baseColorImage: "image", stateChange: "trigger", faceStateChange: "trigger", wearableChange: "trigger", cursorX: "number", cursorY: "number", gradientBottomOpacity: "number", gradientBottomPosition: "number", gradientLeftOpacity: "number", gradientLeftPosition: "number", gradientRightOpacity: "number", gradientRightPosition: "number", gradientTopOpacity: "number", gradientTopPosition: "number", reducedMotion: "boolean" } };
const artboardViewModelInstances = { AB_Master: ["Base"], AB_Face_12_Spooked: ["Base"], AB_Environment: ["Base"], AB_Character: ["Base"], AB_Face_01_Chill: ["Base"], AB_Aura: ["Base"], AB_Face_15_Awkward: ["Base"], AB_Face_14_Possessed: ["Base"], AB_Face_13_FreeFall: ["Base"], AB_Face_11_Spellbound: ["Base"], AB_Face_10_Sus: ["Base"], AB_Face_09_Rage: ["Base"], AB_Face_07_Anxious: ["Base"], AB_Face_06_Confused: ["Base"], AB_Face_05_Smitten: ["Base"], AB_Face_04_LockedIn: ["Base"], AB_Face_03_Bored: ["Base"], AB_Face_08_Sparkle: ["Base"], AB_Face_02_CryBaby: ["Base"] };
let closure_8 = {
  AB_Master: function ABMasterBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_12_Spooked: function ABFace12SpookedBindings(arg0) {
    let dataBinding;
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
  },
  AB_Environment: function ABEnvironmentBindings(arg0) {
    let dataBinding;
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
  },
  AB_Character: function ABCharacterBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_01_Chill: function ABFace01ChillBindings(arg0) {
    let dataBinding;
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
  },
  AB_Aura: function ABAuraBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_15_Awkward: function ABFace15AwkwardBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_14_Possessed: function ABFace14PossessedBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_13_FreeFall: function ABFace13FreeFallBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_11_Spellbound: function ABFace11SpellboundBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_10_Sus: function ABFace10SusBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_09_Rage: function ABFace09RageBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_07_Anxious: function ABFace07AnxiousBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_06_Confused: function ABFace06ConfusedBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_05_Smitten: function ABFace05SmittenBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_04_LockedIn: function ABFace04LockedInBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_03_Bored: function ABFace03BoredBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_08_Sparkle: function ABFace08SparkleBindings(arg0) {
    let dataBinding;
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
  },
  AB_Face_02_CryBaby: function ABFace02CryBabyBindings(arg0) {
    let dataBinding;
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
  }
};
const result = size.fileFinishedImporting("../discord_common/js/packages/design/components/Rive/native/generated/CheckpointCharacterRive.tsx");

export const CheckpointCharacterRive = function CheckpointCharacterRiveWithBoundary(fallback) {
  const RiveErrorBoundary = RiveErrorBoundary2.RiveErrorBoundary;
  const merged = Object.assign(fallback);
  return <RiveErrorBoundary fallback={arg0.fallback}>{null}</RiveErrorBoundary>;
};
