// Module ID: 19431
// Function ID: 19432
// Name: DisplayNameStylesFlywheelMobileActionSheet
// Dependencies: [19, 17, 1385, 1072, 4988, 21, 5156, 5149, 5371, 504, 2171, 16809, 1113, 3056, 5172, 4975, 16890, 7638, 7273, 5390, 7358, 5725, 19432, 1377, 5844, 19436, 9594, 5753, 5760, 5142, 575, 2]
// Exports: default

// Module 19431 (DisplayNameStylesFlywheelMobileActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import dismissible_content from "dismissible_content" /* 4975 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4988 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5172 */;
import openUserSettings from "openUserSettings" /* 7638 */;
import openPremiumTryItOutModal from "openPremiumTryItOutModal" /* 16890 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5142 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ UserSettingsSections: metroRequire, Fonts: metroImportDefault } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, imageContainer: size, image: { width: "100%", height: "100%" }, title: { textAlign: "center", fontFamily: metroImportDefault.GINTO_NORD_EXTRA_BOLD, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 }, subtitle: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 }, actions: { gap: nativeDefault.space.PX_12, width: "100%" } };
  ({ alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  size = { width: "100%", height: 162, alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_24 };
  ({ textAlign: "center", fontFamily: metroImportDefault.GINTO_NORD_EXTRA_BOLD, marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 });
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
  let obj11;
  let obj15;
  let str2;
  let stringResult;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let enabled2;
  let obj = enabled2;
  const ref = enabled2.useRef(null);
  let tmp2 = markAsDismissed;
  const enabled = enabled2.useContext(markAsDismissed(5156).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj2 = markAsDismissed(5149);
  const isThemeDarkResult = obj2.isThemeDark(ref(5371)());
  const tmp6 = closure_11();
  let obj3 = markAsDismissed(504);
  const items = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = ref(2171);
  let result = obj4.canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const obj5 = markAsDismissed(16809);
  enabled2 = obj5.useTryItOutMobileRefreshConfig("DisplayNameStylesFlywheelMobileActionSheet").enabled;
  const intl = markAsDismissed(1113).intl;
  const string = intl.string;
  const tmp9 = ref(3056);
  if (result) {
    stringResult = string(tmp9.TyUdka);
  } else {
    stringResult = string(tmp9.dluV0R);
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
      let obj = markAsDismissed(c2[18]);
      obj.runAfterInteractions(() => {
        let obj = markAsDismissed(closure_2_2[17]);
        let obj2 = { screen: constants.DISPLAY_NAME_STYLES };
        obj.openUserSettings(obj2, () => {
          closure_1_0(constants.TAKE_ACTION);
          const obj = closure_2_0(closure_2_2[14]);
          const obj2 = { dismissAction: constants.INDIRECT_ACTION };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_2_0(closure_2_2[15]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
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
  const BottomSheet = tmp2(5390).BottomSheet;
  let tmp15 = closure_10;
  const obj7 = { style: tmp6.content, children: items4 };
  SafeAreaPaddingView = tmp2(7358).SafeAreaPaddingView;
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
  items4[0] = closure_9(tmp2(5725).ActionSheetHeaderBar, obj8);
  const obj9 = { style: tmp6.imageContainer, children: items5 };
  items5 = [enabled && tmp14(tmp2(19432).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" }), ];
  let tmp18 = !enabled;
  enabled && closure_9(tmp2(19432).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  if (tmp18) {
    let tmp14Result;
    const tmp2Result = tmp2(1377);
    if (tmp2Result.isIOS()) {
      const obj10 = { source: obj11, style: tmp6.image, resizeMode: "contain", enableAnimation: !enabled };
      obj11 = { uri: ref(19436) };
      const tmp4Result = ref(5844);
      tmp14Result = tmp14(tmp4Result, obj10);
    } else {
      const obj12 = { url: ref(19436), style: tmp6.image, autoplay: true };
      const APNGPlayer = tmp2(9594).APNGPlayer;
      tmp14Result = tmp14(APNGPlayer, obj12);
    }
    tmp18 = tmp14Result;
  }
  items5[1] = tmp18;
  items4[1] = tmp15(View, obj9);
  let str = "text-overlay-dark";
  const obj13 = { variant: "display-md", style: tmp6.title, color: str2, children: intl2.string(ref(3056).Uzms61) };
  str2 = "text-overlay-dark";
  const Text = tmp2(5753).Text;
  if (isThemeDarkResult) {
    str2 = "text-overlay-light";
  }
  intl2 = tmp2(1113).intl;
  items4[2] = closure_9(Text, obj13);
  const obj14 = { variant: "body-lg/medium", style: tmp6.subtitle, color: str, children: stringResult };
  const Text2 = tmp2(5753).Text;
  if (isThemeDarkResult) {
    str = "text-overlay-light";
  }
  obj15 = { bottom: true, children: tmp15(View, obj7) };
  items4[3] = closure_9(Text2, obj14);
  const obj16 = { style: tmp6.actions, children: items6 };
  const obj17 = { text: intl3.string(tmp2(1113).t["4P5I8V"]), variant: "primary", size: "lg", onPress: callback };
  const Button = tmp2(5760).Button;
  intl3 = tmp2(1113).intl;
  items6 = [tmp14(Button, obj17), ];
  const obj18 = { text: intl4.string(tmp2(1113).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
  const Button2 = tmp2(5760).Button;
  intl4 = tmp2(1113).intl;
  items6[1] = closure_9(Button2, obj18);
  items4[4] = tmp15(View, obj16);
  return closure_9(BottomSheet, obj6);
};
