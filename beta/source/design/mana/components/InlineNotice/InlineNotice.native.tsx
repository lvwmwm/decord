// Module ID: 8025
// Function ID: 8026
// Name: InlineNotice
// Dependencies: [19, 17, 21, 7086, 575, 2075, 8026, 5735, 7340, 5625, 5014, 5624, 5642, 1113, 5084, 1376, 5023, 5634, 8028, 7054, 2]
// Exports: InlineNotice

// Module 8025 (InlineNotice)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1376 */;
import _modDef2075 from "module_2075" /* 2075 */;
import Text_Text from "Text/Text" /* 5624 */;
import TextVariants from "TextVariants" /* 5625 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import CircleErrorIcon from "CircleErrorIcon" /* 7086 */;
import CircleCheckIcon from "CircleCheckIcon" /* 7340 */;
import WarningIcon from "WarningIcon" /* 8026 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj7;
let obj8;
let tmp;
const AccessibilityAnnouncer2 = tmp(5023);
function NoticeMessageList(color) {
  let closure_2;
  let items;
  let items1;
  let variant;
  ({ items, variant } = color);
  color = color.color;
  const intro = color.intro;
  const tmp = closure_10();
  dependencyMap = tmp;
  obj = { style: tmp.stack, children: items1 };
  items1 = [closure_5(variant(5624).Text, { variant, color, children: intro }), ];
  let obj2 = {
    accessibilityRole: "list",
    style: tmp.stack,
    children: items.map((children, index) => {
      let items;
      obj = { style: closure_2.listItem, children: items };
      items = [, ];
      const obj2 = { variant, color, accessibilityElementsHidden: true, importantForAccessibility: "no", children: "\u2022" };
      items[0] = hasOwnProperty(Text_Text.Text, obj2);
      const obj3 = { variant, color, style: closure_2.listItemText, children };
      items[1] = hasOwnProperty(Text_Text.Text, obj3);
      return metroRequire(View, obj, index);
    })
  };
  items1[1] = closure_5(View, obj2);
  return closure_6(View, obj);
}
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { critical: obj2, warning: obj3, info: obj4, success: obj5 };
obj2 = { Icon: CircleErrorIcon.CircleErrorIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_CRITICAL, background: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, border: nativeDefault.colors.INLINENOTICE_BORDER_CRITICAL, typeLabel: _modDef2075.uKMqrF };
obj3 = { Icon: WarningIcon.WarningIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_WARNING, background: nativeDefault.colors.BACKGROUND_FEEDBACK_WARNING, border: nativeDefault.colors.INLINENOTICE_BORDER_WARNING, typeLabel: _modDef2075["7vL/d/"] };
obj4 = { Icon: CircleInformationIcon.CircleInformationIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_INFO, background: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO, border: nativeDefault.colors.INLINENOTICE_BORDER_INFO, typeLabel: _modDef2075.BReS7U };
obj5 = { Icon: CircleCheckIcon.CircleCheckIcon, iconColor: nativeDefault.colors.ICON_FEEDBACK_POSITIVE, background: nativeDefault.colors.BACKGROUND_FEEDBACK_POSITIVE, border: nativeDefault.colors.INLINENOTICE_BORDER_POSITIVE, typeLabel: _modDef2075["1MXXPf"] };
const TextVariantsFlat = TextVariants.TextVariantsFlat;
let found = TextVariantsFlat.find((name) => "experimental/body-sm/normal" === name.name);
let lineHeight;
if (found != null) {
  lineHeight = found.lineHeight;
}
let createStyles = createStyles_mod;
let closure_9 = createStyles.createStyles((arg0, height) => {
  let obj4;
  obj = { container: { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, backgroundColor: obj[arg0].background, borderColor: obj[arg0].border }, iconAndText: { flexDirection: "row", gap: nativeDefault.space.PX_8, flex: 1 }, iconContainer: obj4, contents: { flex: 1, gap: nativeDefault.space.PX_12 }, copy: { gap: nativeDefault.space.PX_4 }, cta: { alignSelf: "flex-start" } };
  ({ flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, borderWidth: 1, backgroundColor: obj[arg0].background, borderColor: obj[arg0].border });
  obj4 = { height, justifyContent: "center" };
  ({ flexDirection: "row", gap: nativeDefault.space.PX_8, flex: 1 });
  ({ flex: 1, gap: nativeDefault.space.PX_12 });
  ({ gap: nativeDefault.space.PX_4 });
  return obj;
});
createStyles = createStyles_mod;
let obj6 = { stack: obj7, listItem: obj8, listItemText: { flex: 1 } };
obj7 = { gap: nativeDefault.space.PX_4 };
createStyles = createStyles.createStyles;
obj8 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj6);
let result = size.fileFinishedImporting("design/mana/components/InlineNotice/InlineNotice.native.tsx");

export function InlineNotice(hidden) {
  let Icon;
  let XSmallIcon;
  let action;
  let iconColor;
  let intl2;
  let items3;
  let items4;
  let items5;
  let items6;
  let message;
  let messageList;
  let obj13;
  let obj15;
  let obj6;
  let onDismiss;
  let role;
  let title;
  let type;
  let typeLabel;
  ({ type, title, message, messageList, onDismiss, action, role } = hidden);
  hidden = hidden.hidden;
  let joined;
  obj = role(joined[12]);
  let result;
  const tmp4 = closure_9;
  if (null != lineHeight) {
    result = lineHeight * obj.useFontScale();
  }
  const tmp4Result = tmp4(type, result);
  ({ Icon, iconColor, typeLabel } = obj[type]);
  const intl = tmp2(tmp3[13]).intl;
  const stringResult = intl.string(typeLabel);
  const items = [stringResult, , ];
  const tmp2Result = role(joined[14]);
  items[1] = tmp2Result.getNodeText(title);
  const tmp2Result2 = role(joined[14]);
  items[2] = tmp2Result2.getNodeText(message);
  let items1 = messageList;
  if (messageList == null) {
    items1 = [];
  }
  HermesBuiltin.arraySpread(items, items1.map(role(joined[14]).getNodeText), 3);
  const found = items.filter((item) => null != item && "" !== item);
  joined = found.join(", ");
  const items2 = [role, hidden, joined];
  const effect = react.useEffect(() => {
    obj = utils_PlatformUtils;
    let isIOSResult = obj.isIOS();
    if (isIOSResult) {
      isIOSResult = "none" !== role;
    }
    if (isIOSResult) {
      isIOSResult = !hidden;
    }
    if (isIOSResult) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      let str2 = "assertive";
      const announce = AccessibilityAnnouncer.announce;
      const tmp6 = joined;
      if ("status" === role) {
        str2 = "polite";
      }
      announce(tmp6, str2);
    }
  }, items2);
  let tmp12Result = null;
  if (!hidden) {
    let obj3;
    let tmp17Result4;
    const obj2 = { style: tmp4Result.container, children: items6 };
    if ("alert" === role) {
      obj3 = { accessibilityRole: "alert", accessibilityLiveRegion: "assertive" };
    } else {
      let str2 = "status";
      if ("status" === role) {
        obj3 = { accessibilityLiveRegion: "polite" };
      } else if ("none" === role) {
        obj3 = {};
      }
    }
    const merged = Object.assign(obj3);
    const obj4 = { style: tmp4Result.iconAndText, children: items3 };
    const obj5 = { style: tmp4Result.iconContainer, children: closure_5(Icon, obj6) };
    obj6 = { size: "xs", color: iconColor, accessibilityLabel: stringResult };
    items3 = [closure_5(View, obj5), ];
    let tmp17Result = null;
    const obj7 = { style: tmp4Result.contents, children: items5 };
    const obj8 = { style: tmp4Result.copy, children: items4 };
    if (null != title) {
      const obj9 = { variant: "experimental/body-sm/semibold", color: "text-strong", children: title };
      tmp17Result = tmp17(tmp2(tmp3[11]).Text, obj9);
    }
    items4 = [tmp17Result, ];
    if (null != messageList) {
      const obj10 = { intro: message, items: messageList, variant: "experimental/body-sm/normal", color: "text-strong" };
      tmp17Result4 = tmp17(NoticeMessageList, obj10);
    } else {
      const obj11 = { variant: "experimental/body-sm/normal", color: "text-strong", children: message };
      tmp17Result4 = tmp17(tmp2(tmp3[11]).Text, obj11);
    }
    items4[1] = tmp17Result4;
    items5 = [closure_6(View, obj8), ];
    let tmp17Result5 = null;
    if (null != action) {
      const obj12 = { style: tmp4Result.cta, children: closure_5(role(joined[17]).Button, obj13) };
      obj13 = { variant: "secondary", size: "sm", text: null, onPress: null, loading: null };
      ({ text: obj16.text, onPress: obj16.onPress, loading: obj16.loading } = action);
      tmp17Result5 = tmp17(tmp13, obj12);
    }
    items5[1] = tmp17Result5;
    items3[1] = closure_6(View, obj7);
    items6 = [closure_6(View, obj4), ];
    let tmp17Result6 = null;
    if (null != onDismiss) {
      const obj14 = { variant: "icon-only", size: "sm", icon: closure_5(XSmallIcon, obj15), accessibilityLabel: intl2.string(role(joined[13]).t.WAI6xu), onPress: onDismiss };
      const IconButton = tmp2(tmp3[18]).IconButton;
      obj15 = { color: hidden(joined[4]).colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
      XSmallIcon = tmp2(tmp3[19]).XSmallIcon;
      intl2 = tmp2(tmp3[13]).intl;
      tmp17Result6 = tmp17(IconButton, obj14);
    }
    items6[1] = tmp17Result6;
    tmp12Result = tmp12(tmp13, obj2);
  }
  return tmp12Result;
}
