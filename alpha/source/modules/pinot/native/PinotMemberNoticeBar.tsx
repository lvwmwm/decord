// Module ID: 11082
// Function ID: 11083
// Name: PinotMemberNoticeBar
// Dependencies: [19, 17, 1084, 21, 5005, 587, 558, 576, 1125, 3156, 5271, 5698, 2065, 6991, 6968, 2]

// Module 11082 (PinotMemberNoticeBar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1084 */;
import _modDef3156 from "module_3156" /* 3156 */;
import Text_Text from "Text/Text" /* 5271 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5005 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function PinotMemberNoticeBar(onDismiss) {
  let bar;
  let items;
  let link;
  let text;
  let tmp5;
  let underlay;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(16);
  onDismiss = onDismiss.onDismiss;
  const tmp4 = closure_8();
  _require = tmp4;
  ({ underlay, bar, text } = tmp4);
  if (cResult[0] !== tmp4.link) {
    const intl = tmp(1125).intl;
    const obj2 = {
      learnMoreHook(children, arg1) {
          let obj = {
            variant: "text-sm/normal",
            color: "text-default",
            style: link.link,
            accessibilityRole: "link",
            onPress() {
              const openURL = closure_1_1(closure_1_2[11]).openURL;
              closure_1_1(closure_1_2[11]);
              const obj = closure_1_1(closure_1_2[12]);
              return openURL(obj.getArticleURL(constants.SERVER_WEB_PAGES));
            },
            children
          };
          return hasOwnProperty(Text_Text.Text, obj, arg1);
        }
    };
    const formatResult = intl.format(_modDef3156.Jry6Gr, obj2);
    cResult[0] = tmp4.link;
    cResult[1] = formatResult;
    tmp5 = formatResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.text) {
    let tmp8;
    let tmp11;
    let tmp13;
    let tmp16;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1125).intl;
      const stringResult = intl2.string(tmp(1125).t.WAI6xu);
      cResult[5] = stringResult;
      tmp11 = stringResult;
    } else {
      tmp11 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp15 = closure_5(tmp(6991).XSmallIcon, { size: "sm", color: "icon-muted" });
      cResult[6] = tmp15;
      tmp13 = tmp15;
    } else {
      tmp13 = cResult[6];
    }
    if (cResult[7] !== onDismiss) {
      const obj3 = { accessibilityRole: "button", accessibilityLabel: tmp11, hitSlop, onPress: onDismiss, children: tmp13 };
      const tmp19 = closure_5(tmp(6968).PressableOpacity, obj3);
      cResult[7] = onDismiss;
      cResult[8] = tmp19;
      tmp16 = tmp19;
    } else {
      tmp16 = cResult[8];
    }
    if (cResult[9] === tmp4.bar) {
      if (cResult[10] === tmp8) {
        let tmp20;
        if (cResult[11] === tmp16) {
          tmp20 = cResult[12];
        }
        if (cResult[13] === tmp4.underlay) {
          let tmp24;
          if (cResult[14] === tmp20) {
            tmp24 = cResult[15];
          }
          return tmp24;
        }
        const obj4 = { style: underlay, children: tmp20 };
        const tmp27 = closure_5(View, obj4);
        cResult[13] = tmp4.underlay;
        cResult[14] = tmp20;
        cResult[15] = tmp27;
        tmp24 = tmp27;
      }
    }
    const obj5 = { style: bar, children: items };
    items = [tmp8, tmp16];
    const tmp23 = closure_6(View, obj5);
    cResult[9] = tmp4.bar;
    cResult[10] = tmp8;
    cResult[11] = tmp16;
    cResult[12] = tmp23;
    tmp20 = tmp23;
  }
  const tmp9 = closure_5(tmp(5271).Text, { variant: "text-sm/normal", color: "text-default", style: text, children: tmp5 });
  cResult[2] = tmp4.text;
  cResult[3] = tmp5;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : (function PinotMemberNoticeBar(onDismiss) {
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
  const obj3 = { variant: "text-sm/normal", color: "text-default", style: tmp.text, children: intl.format(_modDef3156.Jry6Gr, obj4) };
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
          const openURL = closure_1_1(closure_1_2[11]).openURL;
          closure_1_1(closure_1_2[11]);
          const obj = closure_1_1(closure_1_2[12]);
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
});
const result = size.fileFinishedImporting("modules/pinot/native/PinotMemberNoticeBar.tsx");

export const PinotMemberNoticeBar = tmp5;
