// Module ID: 15666
// Function ID: 120779
// Name: DisplayNameStylesFlywheelMobileActionSheet
// Dependencies: [31, 27, 1849, 653, 1345, 33, 3849, 3976, 4066, 566, 3776, 1212, 2556, 5796, 5582, 3946, 1334, 5187, 5121, 5446, 5807, 477, 5085, 15667, 8043, 1273, 4126, 4543, 4130, 689, 2]
// Exports: default

// Module 15666 (DisplayNameStylesFlywheelMobileActionSheet)
import result from "result";
import { View } from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
({ UserSettingsSections: closure_6, Fonts: closure_7 } = ME);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
let closure_11 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { alignItems: "center", paddingHorizontal: importDefault(689).space.PX_16 };
  obj.content = obj;
  obj = { width: "100%", height: 162, alignItems: "center", justifyContent: "center", marginVertical: importDefault(689).space.PX_24 };
  obj.imageContainer = obj;
  obj.image = { width: "100%", height: "100%" };
  obj.betaTag = { marginLeft: 0 };
  const obj1 = { textAlign: "center", fontFamily: constants.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: importDefault(689).space.PX_12, marginBottom: importDefault(689).space.PX_16, paddingTop: importDefault(689).space.PX_12 };
  obj.title = obj1;
  obj.subtitle = { textAlign: "center", marginTop: importDefault(689).space.PX_12, marginBottom: importDefault(689).space.PX_32 };
  const obj2 = { textAlign: "center", marginTop: importDefault(689).space.PX_12, marginBottom: importDefault(689).space.PX_32 };
  obj.actions = { gap: importDefault(689).space.PX_12, width: "100%" };
  return obj;
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx");

export default function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = React.useRef(null);
  let enabled = React.useContext(markAsDismissed(3849).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj = markAsDismissed(3976);
  const isThemeDarkResult = obj.isThemeDark(ref(4066)());
  const tmp3 = callback3();
  let obj1 = markAsDismissed(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_5.getCurrentUser());
  let obj2 = ref(3776);
  let result = obj2.canUsePremiumProfileCustomization(stateFromStores);
  const dependencyMap = result;
  const intl = markAsDismissed(1212).intl;
  const string = intl.string;
  const tmp6 = ref(2556);
  if (result) {
    let stringResult = string(tmp6.TyUdka);
  } else {
    stringResult = string(tmp6.dluV0R);
  }
  const items1 = [result, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = React.useCallback(() => {
    markAsDismissed(result[13]).openUserSettings({ screen: closure_2 ? outer1_6.PROFILE_CUSTOMIZATION : outer1_6.PROFILE_CUSTOMIZATION_TRY_IT_OUT }, () => {
      markAsDismissed(result[14]).runAfterInteractions(() => {
        let obj = markAsDismissed(result[13]);
        obj = { screen: outer3_6.DISPLAY_NAME_STYLES };
        obj.openUserSettings(obj, () => {
          outer3_0(outer4_8.TAKE_ACTION);
          let obj = markAsDismissed(result[15]);
          obj = { dismissAction: outer4_8.INDIRECT_ACTION };
          result = obj.UNSAFE_markDismissibleContentAsDismissed(markAsDismissed(result[16]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj);
        });
      });
    });
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = React.useCallback(() => {
    markAsDismissed(outer1_8.USER_DISMISS);
  }, items2);
  const callback2 = React.useCallback(() => {
    markAsDismissed(outer1_8.USER_DISMISS);
  }, items3);
  obj = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true };
  obj = { bottom: true };
  obj1 = { style: tmp3.content };
  obj2 = {
    onPress() {
      const current = ref.current;
      if (null != current) {
        current.closeActionSheet();
      }
      markAsDismissed(outer1_8.USER_DISMISS);
    }
  };
  const items4 = [callback(markAsDismissed(5446).ActionSheetHeaderBar, obj2), , , , , ];
  const obj3 = { style: tmp3.imageContainer };
  let tmp14 = enabled;
  if (enabled) {
    const obj4 = { resizeMode: "contain" };
    tmp14 = callback(markAsDismissed(5807).DisplayNameStylesV2AbstractUI, obj4);
  }
  const items5 = [tmp14, ];
  if (!!enabled) {
    items5[1] = tmp18;
    obj3.children = items5;
    items4[1] = tmp12(tmp13, obj3);
    const obj5 = { style: tmp3.betaTag };
    items4[2] = callback(markAsDismissed(1273).BetaTag, obj5);
    const obj6 = { variant: "display-md", style: tmp3.title };
    let str4 = "text-overlay-dark";
    let str5 = "text-overlay-dark";
    if (isThemeDarkResult) {
      str5 = "text-overlay-light";
    }
    obj6.color = str5;
    const intl2 = markAsDismissed(1212).intl;
    obj6.children = intl2.string(ref(2556).Uzms61);
    items4[3] = callback(markAsDismissed(4126).Text, obj6);
    const obj7 = { variant: "text-lg/medium", style: tmp3.subtitle };
    if (isThemeDarkResult) {
      str4 = "text-overlay-light";
    }
    obj7.color = str4;
    obj7.children = stringResult;
    items4[4] = callback(markAsDismissed(4126).Text, obj7);
    const obj8 = { style: tmp3.actions };
    let obj9 = { text: null, variant: "primary", size: "lg" };
    const intl3 = markAsDismissed(1212).intl;
    obj9.text = intl3.string(markAsDismissed(1212).t["4P5I8V"]);
    obj9.onPress = callback;
    const items6 = [callback(markAsDismissed(4543).Button, obj9), ];
    const obj10 = { text: null, variant: "secondary", size: "lg" };
    const intl4 = markAsDismissed(1212).intl;
    obj10.text = intl4.string(markAsDismissed(1212).t.TulDPl);
    obj10.onPress = callback1;
    items6[1] = callback(markAsDismissed(4543).Button, obj10);
    obj8.children = items6;
    items4[5] = callback2(View, obj8);
    obj1.children = items4;
    obj.children = tmp12(tmp13, obj1);
    obj.children = tmp11(markAsDismissed(5121).SafeAreaPaddingView, obj);
    return tmp11(markAsDismissed(5187).BottomSheet, obj);
  } else {
    obj9 = markAsDismissed(477);
    if (obj9.isIOS()) {
      const obj11 = {};
      const obj12 = { uri: ref(15667) };
      obj11.source = obj12;
      obj11.style = tmp3.image;
      obj11.resizeMode = "contain";
      enabled = !enabled;
      obj11.enableAnimation = enabled;
      let tmp21Result = tmp21(ref(5085), obj11);
      const tmp28 = ref(5085);
    } else {
      const obj13 = { url: ref(15667), style: tmp3.image, autoplay: true };
      tmp21Result = tmp21(markAsDismissed(8043).APNGPlayer, obj13);
    }
  }
};
