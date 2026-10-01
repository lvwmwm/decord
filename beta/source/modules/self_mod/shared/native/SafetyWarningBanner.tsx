// Module ID: 10914
// Function ID: 10915
// Name: SafetyWarningBanner
// Dependencies: [19, 17, 21, 4836, 576, 5179, 5184, 10912, 1115, 1177, 10915, 10916, 4832, 5281, 2]

// Module 10914 (SafetyWarningBanner)
import nativeDefault from "native" /* 576 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 10912 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
class SafetyWarningBanner {
  constructor(channelId) {
    let Icon;
    let description;
    let header;
    let intl;
    let items1;
    let items2;
    let items3;
    let obj3;
    let obj6;
    channelId = channelId.channelId;
    const warningId = channelId.warningId;
    const senderId = channelId.senderId;
    const warningType = channelId.warningType;
    const onDismiss = channelId.onDismiss;
    const buttons = channelId.buttons;
    ({ header, description } = channelId);
    let tmp = closure_9();
    const effect = warningType.useEffect(() => {
      const obj = warningId(senderId[5]);
      const obj2 = { name: channelId(senderId[6]).MetricEvents.SAFETY_WARNING_VIEW };
      obj.increment(obj2);
    }, []);
    const items = [onDismiss, channelId, warningId, senderId, warningType];
    let obj = { style: tmp.container, children: items1 };
    let obj2 = {
      style: tmp.closeButton,
      onPress: warningType.useCallback(() => {
        if (onDismiss != null) {
          tmp();
        }
        const obj = SafetyWarningUtils;
        const obj2 = { channelId, warningId, senderId, warningType, cta: SafetyWarningUtils.CtaEventTypes.USER_BANNER_DISMISS };
        obj.trackCtaEvent(obj2);
      }, items),
      accessibilityLabel: intl.string(channelId(senderId[8]).t["1UatJ0"]),
      children: closure_7(Icon, obj3)
    };
    intl = channelId(senderId[8]).intl;
    obj3 = { style: tmp.closeButtonIcon, source: warningId(senderId[10]), size: channelId(senderId[9]).IconSizes.MEDIUM };
    Icon = channelId(senderId[9]).Icon;
    items1 = [closure_7(closure_5, obj2), , ];
    const obj4 = { style: tmp.contentContainer, children: items2 };
    const obj5 = { style: tmp.safetyShieldIconContainer, children: closure_7(onDismiss, obj6) };
    obj6 = { style: tmp.safetyShieldIcon, source: warningId(senderId[11]), resizeMode: "contain" };
    items2 = [closure_7(closure_6, obj5), ];
    const obj7 = { style: tmp.textContainer, children: items3 };
    items3 = [, ];
    const obj8 = { style: tmp.text, variant: "heading-md/semibold", children: header };
    items3[0] = closure_7(channelId(senderId[12]).Text, obj8);
    const obj9 = { style: tmp.text, variant: "heading-sm/normal", children: description };
    items3[1] = closure_7(channelId(senderId[12]).Text, obj9);
    items2[1] = closure_8(closure_6, obj7);
    items1[1] = closure_8(closure_6, obj4);
    const obj10 = {
      style: tmp.buttonsContainer,
      children: buttons.map((text, index) => {
        let str = text.variant;
        const Button = channelId(senderId[13]).Button;
        const tmp = closure_1_7;
        if (str == null) {
          str = "primary";
        }
        const obj = { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true };
        return tmp(Button, obj, index);
      })
    };
    items1[2] = closure_7(closure_6, obj10);
    return closure_8(closure_6, obj);
  }
}
({ Image: closure_4, Pressable: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, contentContainer: { flexDirection: "row", alignItems: "center" }, safetyShieldIconContainer: { width: 42, height: 50 }, safetyShieldIcon: { flex: 1, width: "auto", height: "auto" }, textContainer: obj3, text: obj4, closeButton: rect, closeButtonIcon: obj5, buttonsContainer: obj6 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj3 = { flex: 1, marginLeft: nativeDefault.space.PX_16, marginRight: nativeDefault.space.PX_40 };
obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_16, zIndex: 1 };
obj5 = { tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj6 = { flexDirection: "row", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
const React4 = createStyles(obj);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default SafetyWarningBanner;
export { SafetyWarningBanner };
