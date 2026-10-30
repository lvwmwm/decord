// Module ID: 11308
// Function ID: 11309
// Name: PinotMemberNoticeBar
// Dependencies: [19, 17, 1072, 21, 5009, 575, 5619, 1114, 3157, 5704, 2062, 6974, 7048, 2]
// Exports: PinotMemberNoticeBar

// Module 11308 (PinotMemberNoticeBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import _modDef3157 from "module_3157" /* 3157 */;
import Text_Text from "Text/Text" /* 5619 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const hitSlop = { top: 8, bottom: 8, left: 8, right: 8 };
let createStyles = createStyles_mod;
let obj = { underlay: obj2, bar: obj3, text: { flex: 1 }, link: { textDecorationLine: "underline" } };
obj2 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, borderTopWidth: 1, borderBottomWidth: 1, borderTopColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, borderBottomColor: nativeDefault.colors.BORDER_FEEDBACK_INFO, backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_INFO };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeBar.tsx");

export function PinotMemberNoticeBar(onDismiss) {
  let intl;
  let intl2;
  let items;
  let link;
  let obj2;
  let obj4;
  onDismiss = onDismiss.onDismiss;
  const tmp = closure_8();
  _require = tmp;
  let obj = { style: tmp.underlay, children: closure_6(View, obj2) };
  obj2 = { style: tmp.bar, children: items };
  const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp.text, children: intl.format(_modDef3157.Jry6Gr, obj4) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  obj4 = {
    learnMoreHook(children, arg1) {
      let obj = {
        variant: "text-sm/normal",
        color: "text-default",
        style: link.link,
        accessibilityRole: "link",
        onPress() {
          const openURL = closure_1_1(closure_1_2[9]).openURL;
          closure_1_1(closure_1_2[9]);
          const obj = closure_1_1(closure_1_2[10]);
          return openURL(obj.getArticleURL(constants.SERVER_WEB_PAGES));
        },
        children
      };
      return hasOwnProperty(Text_Text.Text, obj, arg1);
    }
  };
  items = [closure_5(Text, obj3), ];
  const obj5 = { accessibilityRole: "button", accessibilityLabel: intl2.string(require("intl").t.WAI6xu), hitSlop, onPress: onDismiss, children: closure_5(require("XSmallIcon").XSmallIcon, { size: "sm", color: "icon-muted" }) };
  const PressableOpacity = require("Pressables").PressableOpacity;
  intl2 = require("intl").intl;
  items[1] = closure_5(PressableOpacity, obj5);
  return closure_5(View, obj);
}
