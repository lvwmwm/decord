// Module ID: 16758
// Function ID: 16759
// Name: DisplayNameStylesFlywheelMobileActionSheet
// Dependencies: [19, 17, 1372, 1074, 2042, 21, 4550, 4685, 4767, 6400, 504, 4488, 1115, 2877, 6800, 6459, 4654, 2029, 6571, 6544, 6575, 16759, 1364, 5899, 16761, 8271, 4832, 5281, 4836, 576, 2]
// Exports: default

// Module 16758 (DisplayNameStylesFlywheelMobileActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import openUserSettings from "openUserSettings" /* 6800 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let BottomSheet, dependencyMap;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ UserSettingsSections: metroRequire, Fonts: metroImportDefault } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, imageContainer: size, image: { width: "100%", height: "100%" }, title: { textAlign: "center", fontFamily: metroImportDefault.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 }, subtitle: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 }, actions: { gap: nativeDefault.space.PX_12, width: "100%" } };
  ({ alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  size = { width: "100%", height: 162, alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_24 };
  ({ textAlign: "center", fontFamily: metroImportDefault.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 });
  ({ textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 });
  ({ gap: nativeDefault.space.PX_12, width: "100%" });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx");

export default function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  let SafeAreaPaddingView;
  let c2;
  let currentUser;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj11;
  let obj15;
  let str2;
  let stringResult;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let obj = react;
  const ref = react.useRef(null);
  let tmp2 = markAsDismissed;
  const enabled = react.useContext(markAsDismissed(4550).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj2 = markAsDismissed(4685);
  const isThemeDarkResult = obj2.isThemeDark(ref(4767)());
  const tmp6 = closure_11();
  const obj3 = markAsDismissed(6400);
  const typeConsolidationTextTransform = obj3.useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  const items = [UserStore];
  const obj4 = markAsDismissed(504);
  const stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj5 = ref(4488);
  let result = obj5.canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const intl = markAsDismissed(1115).intl;
  const string = intl.string;
  const tmp10 = ref(2877);
  if (result) {
    stringResult = string(tmp10.TyUdka);
  } else {
    stringResult = string(tmp10.dluV0R);
  }
  const items1 = [result, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    const tmp2 = c2 ? metroRequire.PROFILE_CUSTOMIZATION : metroRequire.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
    let obj = openUserSettings;
    obj.openUserSettings({ screen: tmp2 }, () => {
      let obj = markAsDismissed(c2[15]);
      obj.runAfterInteractions(() => {
        let obj = markAsDismissed(closure_2_2[14]);
        let obj2 = { screen: constants.DISPLAY_NAME_STYLES };
        obj.openUserSettings(obj2, () => {
          closure_1_0(constants.TAKE_ACTION);
          const obj = closure_2_0(closure_2_2[16]);
          const obj2 = { dismissAction: constants.INDIRECT_ACTION };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_2_0(closure_2_2[17]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
        });
      });
    });
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const callback2 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj6 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: closure_9(SafeAreaPaddingView, obj15) };
  BottomSheet = tmp2(6571).BottomSheet;
  const obj7 = { style: tmp6.content, children: items4 };
  SafeAreaPaddingView = tmp2(6544).SafeAreaPaddingView;
  items4 = [, , , , ];
  const obj8 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  items4[0] = closure_9(tmp2(6575).ActionSheetHeaderBar, obj8);
  const obj9 = { style: tmp6.imageContainer, children: items5 };
  items5 = [enabled && closure_9(tmp2(16759).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" }), ];
  let tmp19 = !enabled;
  enabled && closure_9(tmp2(16759).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  if (tmp19) {
    let tmp15Result;
    const tmp2Result = tmp2(1364);
    if (tmp2Result.isIOS()) {
      const obj10 = { source: obj11, style: tmp6.image, resizeMode: "contain", enableAnimation: !enabled };
      obj11 = { uri: ref(16761) };
      const tmp4Result = ref(5899);
      tmp15Result = tmp15(tmp4Result, obj10);
    } else {
      const obj12 = { url: ref(16761), style: tmp6.image, autoplay: true };
      const APNGPlayer = tmp2(8271).APNGPlayer;
      tmp15Result = tmp15(APNGPlayer, obj12);
    }
    tmp19 = tmp15Result;
  }
  items5[1] = tmp19;
  items4[1] = closure_10(View, obj9);
  const obj13 = { variant: "display-md", style: items6, color: str2, children: intl2.string(ref(2877).Uzms61) };
  items6 = [tmp6.title, typeConsolidationTextTransform];
  let str = "text-overlay-dark";
  str2 = "text-overlay-dark";
  const Text = tmp2(4832).Text;
  if (isThemeDarkResult) {
    str2 = "text-overlay-light";
  }
  intl2 = tmp2(1115).intl;
  items4[2] = closure_9(Text, obj13);
  const obj14 = { variant: "text-lg/medium", style: tmp6.subtitle, color: str, children: stringResult };
  const Text2 = tmp2(4832).Text;
  if (isThemeDarkResult) {
    str = "text-overlay-light";
  }
  obj15 = { bottom: true, children: closure_10(View, obj7) };
  items4[3] = closure_9(Text2, obj14);
  const obj16 = { style: tmp6.actions, children: items7 };
  const obj17 = { text: intl3.string(tmp2(1115).t["4P5I8V"]), variant: "primary", size: "lg", onPress: callback };
  const Button = tmp2(5281).Button;
  intl3 = tmp2(1115).intl;
  items7 = [closure_9(Button, obj17), ];
  const obj18 = { text: intl4.string(tmp2(1115).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
  const Button2 = tmp2(5281).Button;
  intl4 = tmp2(1115).intl;
  items7[1] = closure_9(Button2, obj18);
  items4[4] = closure_10(View, obj16);
  return closure_9(BottomSheet, obj6);
};
