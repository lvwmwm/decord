// Module ID: 19809
// Function ID: 19810
// Name: DisplayNameStylesFlywheelMobileActionSheet
// Dependencies: [19, 17, 1388, 1072, 5152, 21, 5320, 5313, 5547, 504, 2174, 17088, 1113, 3125, 5348, 5139, 17171, 8604, 7587, 5566, 7415, 5901, 19810, 6020, 19814, 5929, 5936, 5306, 575, 2]
// Exports: default

// Module 19809 (DisplayNameStylesFlywheelMobileActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import dismissible_content from "dismissible_content" /* 5139 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5152 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5348 */;
import openUserSettings from "openUserSettings" /* 8604 */;
import openPremiumTryItOutModal from "openPremiumTryItOutModal" /* 17171 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
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
  let obj14;
  let str2;
  let stringResult;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let enabled2;
  let obj = enabled2;
  const ref = enabled2.useRef(null);
  let tmp2 = markAsDismissed;
  const enabled = enabled2.useContext(markAsDismissed(5320).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj2 = markAsDismissed(5313);
  const isThemeDarkResult = obj2.isThemeDark(ref(5547)());
  const tmp6 = closure_11();
  let obj3 = markAsDismissed(504);
  const items = [UserStore];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = ref(2174);
  let result = obj4.canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const obj5 = markAsDismissed(17088);
  enabled2 = obj5.useTryItOutMobileRefreshConfig("DisplayNameStylesFlywheelMobileActionSheet").enabled;
  const intl = markAsDismissed(1113).intl;
  const string = intl.string;
  const tmp9 = ref(3125);
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
  const obj6 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: closure_9(SafeAreaPaddingView, obj14) };
  const BottomSheet = tmp2(5566).BottomSheet;
  let tmp15 = closure_10;
  const obj7 = { style: tmp6.content, children: items4 };
  SafeAreaPaddingView = tmp2(7415).SafeAreaPaddingView;
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
  items4[0] = closure_9(tmp2(5901).ActionSheetHeaderBar, obj8);
  const obj9 = { style: tmp6.imageContainer, children: items5 };
  items5 = [enabled && tmp14(tmp2(19810).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" }), ];
  let tmp14Result = !enabled;
  enabled && closure_9(tmp2(19810).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  if (tmp14Result) {
    const obj10 = { source: obj11, style: tmp6.image, resizeMode: "contain" };
    obj11 = { uri: ref(19814) };
    const tmp4Result = ref(6020);
    tmp14Result = tmp14(tmp4Result, obj10);
  }
  items5[1] = tmp14Result;
  items4[1] = tmp15(View, obj9);
  let str = "text-overlay-dark";
  const obj12 = { variant: "display-md", style: tmp6.title, color: str2, children: intl2.string(ref(3125).Uzms61) };
  str2 = "text-overlay-dark";
  const Text = tmp2(5929).Text;
  if (isThemeDarkResult) {
    str2 = "text-overlay-light";
  }
  intl2 = tmp2(1113).intl;
  items4[2] = closure_9(Text, obj12);
  const obj13 = { variant: "body-lg/medium", style: tmp6.subtitle, color: str, children: stringResult };
  const Text2 = tmp2(5929).Text;
  if (isThemeDarkResult) {
    str = "text-overlay-light";
  }
  obj14 = { bottom: true, children: tmp15(View, obj7) };
  items4[3] = closure_9(Text2, obj13);
  const obj15 = { style: tmp6.actions, children: items6 };
  const obj16 = { text: intl3.string(tmp2(1113).t["4P5I8V"]), variant: "primary", size: "lg", onPress: callback };
  const Button = tmp2(5936).Button;
  intl3 = tmp2(1113).intl;
  items6 = [tmp14(Button, obj16), ];
  const obj17 = { text: intl4.string(tmp2(1113).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
  const Button2 = tmp2(5936).Button;
  intl4 = tmp2(1113).intl;
  items6[1] = closure_9(Button2, obj17);
  items4[4] = tmp15(View, obj15);
  return closure_9(BottomSheet, obj6);
};
