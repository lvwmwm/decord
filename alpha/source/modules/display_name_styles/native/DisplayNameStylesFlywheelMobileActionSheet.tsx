// Module ID: 19025
// Function ID: 19026
// Name: DisplayNameStylesFlywheelMobileActionSheet
// Dependencies: [19, 17, 1383, 1072, 4860, 21, 5028, 5021, 5253, 7148, 504, 2047, 16456, 1113, 2932, 5044, 4847, 16537, 7563, 7207, 5272, 7292, 5595, 19026, 1375, 5717, 19030, 9504, 5624, 5634, 5014, 575, 2]
// Exports: default

// Module 19025 (DisplayNameStylesFlywheelMobileActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import openUserSettings from "openUserSettings" /* 7563 */;
import openPremiumTryItOutModal from "openPremiumTryItOutModal" /* 16537 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
  let obj12;
  let obj16;
  let str2;
  let stringResult;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let enabled2;
  let obj = enabled2;
  const ref = enabled2.useRef(null);
  let tmp2 = markAsDismissed;
  const enabled = enabled2.useContext(markAsDismissed(5028).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj2 = markAsDismissed(5021);
  const isThemeDarkResult = obj2.isThemeDark(ref(5253)());
  const tmp6 = closure_11();
  let obj3 = markAsDismissed(7148);
  const typeConsolidationTextTransform = obj3.useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  let obj4 = markAsDismissed(504);
  const items = [UserStore];
  const stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj5 = ref(2047);
  let result = obj5.canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const obj6 = markAsDismissed(16456);
  enabled2 = obj6.useTryItOutMobileRefreshConfig("DisplayNameStylesFlywheelMobileActionSheet").enabled;
  const intl = markAsDismissed(1113).intl;
  const string = intl.string;
  const tmp10 = ref(2932);
  if (result) {
    stringResult = string(tmp10.TyUdka);
  } else {
    stringResult = string(tmp10.dluV0R);
  }
  const items1 = [result, enabled2, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    if (!c2) {
      const tmp2 = enabled2;
      if (tmp2) {
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        let obj = DismissibleContentUnsafeUtils;
        let obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
        let result = obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
        const obj3 = openPremiumTryItOutModal;
        const result1 = obj3.openPremiumTryItOutModal("display-name-styles");
      }
    }
    const tmp15 = c2 ? metroRequire.PROFILE_CUSTOMIZATION : metroRequire.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
    const obj4 = openUserSettings;
    obj4.openUserSettings({ screen: tmp15 }, () => {
      let obj = markAsDismissed(c2[19]);
      obj.runAfterInteractions(() => {
        let obj = markAsDismissed(closure_2_2[18]);
        let obj2 = { screen: constants.DISPLAY_NAME_STYLES };
        obj.openUserSettings(obj2, () => {
          closure_1_0(constants.TAKE_ACTION);
          const obj = closure_2_0(closure_2_2[15]);
          const obj2 = { dismissAction: constants.INDIRECT_ACTION };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_2_0(closure_2_2[16]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
        });
      });
    });
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  let tmp15 = closure_9;
  const callback2 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj7 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: tmp15(SafeAreaPaddingView, obj16) };
  BottomSheet = tmp2(5272).BottomSheet;
  const obj8 = { style: tmp6.content, children: items4 };
  SafeAreaPaddingView = tmp2(7292).SafeAreaPaddingView;
  items4 = [, , , , ];
  const obj9 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
  items4[0] = closure_9(tmp2(5595).ActionSheetHeaderBar, obj9);
  const obj10 = { style: tmp6.imageContainer, children: items5 };
  items5 = [enabled && tmp15(tmp2(19026).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" }), ];
  let tmp19 = !enabled;
  enabled && tmp15(tmp2(19026).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  if (tmp19) {
    let tmp15Result;
    const tmp2Result = tmp2(1375);
    if (tmp2Result.isIOS()) {
      const obj11 = { source: obj12, style: tmp6.image, resizeMode: "contain", enableAnimation: !enabled };
      obj12 = { uri: ref(19030) };
      const tmp4Result = ref(5717);
      tmp15Result = tmp15(tmp4Result, obj11);
    } else {
      const obj13 = { url: ref(19030), style: tmp6.image, autoplay: true };
      const APNGPlayer = tmp2(9504).APNGPlayer;
      tmp15Result = tmp15(APNGPlayer, obj13);
    }
    tmp19 = tmp15Result;
  }
  items5[1] = tmp19;
  items4[1] = closure_10(View, obj10);
  const obj14 = { variant: "display-md", style: items6, color: str2, children: intl2.string(ref(2932).Uzms61) };
  items6 = [tmp6.title, typeConsolidationTextTransform];
  let str = "text-overlay-dark";
  str2 = "text-overlay-dark";
  const Text = tmp2(5624).Text;
  if (isThemeDarkResult) {
    str2 = "text-overlay-light";
  }
  intl2 = tmp2(1113).intl;
  items4[2] = tmp15(Text, obj14);
  const obj15 = { variant: "text-lg/medium", style: tmp6.subtitle, color: str, children: stringResult };
  const Text2 = tmp2(5624).Text;
  if (isThemeDarkResult) {
    str = "text-overlay-light";
  }
  obj16 = { bottom: true, children: closure_10(View, obj8) };
  items4[3] = tmp15(Text2, obj15);
  const obj17 = { style: tmp6.actions, children: items7 };
  const obj18 = { text: intl3.string(tmp2(1113).t["4P5I8V"]), variant: "primary", size: "lg", onPress: callback };
  const Button = tmp2(5634).Button;
  intl3 = tmp2(1113).intl;
  items7 = [tmp15(Button, obj18), ];
  const obj19 = { text: intl4.string(tmp2(1113).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
  const Button2 = tmp2(5634).Button;
  intl4 = tmp2(1113).intl;
  items7[1] = tmp15(Button2, obj19);
  items4[4] = closure_10(View, obj17);
  return tmp15(BottomSheet, obj7);
};
