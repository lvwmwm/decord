// Module ID: 11271
// Function ID: 11272
// Name: SafetyWarningBanner
// Dependencies: [19, 17, 21, 5014, 575, 6540, 6545, 11269, 1113, 1187, 11272, 5717, 11273, 5624, 5634, 2]

// Module 11271 (SafetyWarningBanner)
import nativeDefault from "native" /* 575 */;
import SafetyWarningUtils from "SafetyWarningUtils" /* 11269 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
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
    let tmp3;
    channelId = channelId.channelId;
    const warningId = channelId.warningId;
    const senderId = channelId.senderId;
    const warningType = channelId.warningType;
    const onDismiss = channelId.onDismiss;
    const buttons = channelId.buttons;
    ({ header, description } = channelId);
    let tmp = closure_8();
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
      children: closure_6(Icon, obj3)
    };
    intl = channelId(senderId[8]).intl;
    obj3 = { style: tmp.closeButtonIcon, source: warningId(senderId[10]), size: channelId(senderId[9]).IconSizes.MEDIUM };
    Icon = channelId(senderId[9]).Icon;
    items1 = [closure_6(onDismiss, obj2), , ];
    const obj4 = { style: tmp.contentContainer, children: items2 };
    const obj5 = { style: tmp.safetyShieldIconContainer, children: closure_6(tmp3, obj6) };
    obj6 = { style: tmp.safetyShieldIcon, source: warningId(senderId[12]), resizeMode: "contain" };
    tmp3 = warningId(senderId[11]);
    items2 = [closure_6(closure_5, obj5), ];
    const obj7 = { style: tmp.textContainer, children: items3 };
    items3 = [, ];
    const obj8 = { style: tmp.text, variant: "heading-md/semibold", children: header };
    items3[0] = closure_6(channelId(senderId[13]).Text, obj8);
    const obj9 = { style: tmp.text, variant: "heading-sm/normal", children: description };
    items3[1] = closure_6(channelId(senderId[13]).Text, obj9);
    items2[1] = closure_7(closure_5, obj7);
    items1[1] = closure_7(closure_5, obj4);
    const obj10 = {
      style: tmp.buttonsContainer,
      children: buttons.map((text, index) => {
        let str = text.variant;
        const Button = channelId(senderId[14]).Button;
        const tmp = closure_1_6;
        if (str == null) {
          str = "primary";
        }
        const obj = { size: "md", variant: str, text: text.text, accessibilityLabel: text.text, onPress: text.onpress, grow: true };
        return tmp(Button, obj, index);
      })
    };
    items1[2] = closure_6(closure_5, obj10);
    return closure_7(closure_5, obj);
  }
}
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
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
const metroImportAll = createStyles(obj);
const result = size.fileFinishedImporting("modules/self_mod/shared/native/SafetyWarningBanner.tsx");

export default SafetyWarningBanner;
export { SafetyWarningBanner };
