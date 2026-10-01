// Module ID: 7537
// Function ID: 7538
// Name: ChangeLogStandardTemplate
// Dependencies: [19, 17, 2112, 1074, 21, 4836, 576, 1177, 563, 7538, 1241, 4525, 1930, 7540, 4823, 6544, 7363, 7543, 1115, 4451, 7545, 7547, 2]
// Exports: changelogRules, getRenderChangelog

// Module 7537 (ChangeLogStandardTemplate)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import _mod1930 from "module_1930" /* 1930 */;
import getLocalizedLinkDefault from "getLocalizedLink" /* 4451 */;
import LinkingDefault from "Linking" /* 4525 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4823 */;
import ChangeLogUtilsDefault from "ChangeLogUtils" /* 7540 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let video;

let Fonts;
let StyleSheet;
let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
const Link = (arg0) => {
  const obj = { changelogId };
  const merged = Object.assign(arg0);
  return closure_2_10(LinkInner, obj);
};
function LHeading(className) {
  let items;
  const f113783 = (item) => {
    let obj;
    if ("marginTop" === item) {
      obj = { marginTop: 10 };
    } else {
      const tmp = c0;
      if (tmp) {
        obj = { color: require[item] };
        const obj2 = { color: require[item] };
      } else {
        obj = { backgroundColor: require[item] };
      }
    }
    return obj;
  };
  const children = className.children;
  let tmp = closure_13();
  let closure_0 = closure_12();
  let obj = { style: tmp.lheading, children: items };
  let c0 = true;
  let combined;
  const LegacyText = native.LegacyText;
  const tmp2 = unpackModuleId;
  if (null != className.className) {
    const parts = str.split(" ");
    const mapped = parts.map(f113783);
    combined = mapped.concat(tmp5);
  }
  items = [authStore(LegacyText, { accessibilityRole: "header", style: combined, children }), ];
  c0 = false;
  let combined1;
  if (null != className.className) {
    const parts1 = str.split(" ");
    const mapped1 = parts1.map(f113783);
    combined1 = mapped1.concat(tmp7);
  }
  items[1] = authStore(React3, { style: combined1 });
  return tmp2(React3, obj);
}
function LinkInner(target) {
  let changelogId;
  let children;
  let className;
  let locale;
  target = target.target;
  ({ changelogId, className, children } = target);
  let obj = target(563);
  const items = [LocaleStore];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  let obj2 = target(7538);
  const changelog = obj2.useChangelog(changelogId, stateFromStores).changelog;
  const obj3 = {
    accessibilityRole: "link",
    style: className,
    onPress() {
      let date;
      const track = AnalyticsUtilsDefault.track;
      const CHANGE_LOG_CTA_CLICKED = constants.CHANGE_LOG_CTA_CLICKED;
      AnalyticsUtilsDefault;
      if (changelog != null) {
        date = tmp4.date;
      }
      if (date == null) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const str = new Date();
        date = str.toString();
      }
      let num;
      if (changelog != null) {
        num = tmp4.revision;
      }
      if (num == null) {
        num = 1;
      }
      const obj = { change_log_id: "" + date + ":" + num, cta_type: "inline_link", target };
      track(CHANGE_LOG_CTA_CLICKED, obj);
      const openURL = tmp(4525).openURL;
      LinkingDefault;
      const obj2 = _mod1930;
      openURL(obj2.sanitizeUrl(target));
    },
    children
  };
  return closure_10(target(1177).LegacyText, obj3);
}
({ View: closure_4, ScrollView: hasOwnProperty, StyleSheet } = react_native);
({ LocalizedLinks: metroImportDefault, SOCIAL_LINKS: metroImportAll, AnalyticEvents: c9, Fonts } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { added: nativeDefault.colors.TEXT_FEEDBACK_POSITIVE, fixed: nativeDefault.colors.TEXT_FEEDBACK_CRITICAL, progress: nativeDefault.colors.TEXT_FEEDBACK_WARNING, improved: nativeDefault.colors.TEXT_BRAND };
let closure_12 = createStyles.createStyleProperties(obj);
createStyles = createStyles_mod;
let obj2 = { flex: { flex: 1 }, container: obj3, footer: obj4, scrollViewContainer: { flex: 1 }, lheading: { marginBottom: 14, flexDirection: "row", alignItems: "center" }, lheadingText: { fontSize: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD }, lheadingLine: { flexGrow: 1, flexShrink: 1, flexBasis: "auto", marginLeft: 10, height: 2 }, bulletPoint: size, listItem: { flexDirection: "row", marginLeft: 4, marginBottom: 8 }, listText: obj5 };
obj3 = { padding: 18, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj4 = { flexDirection: "row", justifyContent: "center", borderTopWidth: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopColor: nativeDefault.colors.BORDER_STRONG, gap: nativeDefault.space.PX_12, paddingHorizontal: 18, paddingVertical: nativeDefault.space.PX_12 };
size = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
let closure_13 = createStyles(obj2);
const memoResult = react.memo((children) => {
  let childrenResult;
  let items;
  children = children.children;
  const tmp = closure_13();
  const obj = { style: tmp.listItem, children: items };
  items = [, ];
  const obj2 = { style: tmp.bulletPoint };
  items[0] = authStore(React3, obj2);
  const obj3 = { style: tmp.listText, children: childrenResult };
  childrenResult = children;
  const tmp2 = unpackModuleId;
  const tmp4 = authStore;
  if (typeof children === "function") {
    const obj4 = { style: tmp.listText };
    childrenResult = children(obj4);
  }
  items[1] = tmp4(React3, obj3);
  return tmp2(React3, obj);
});
const memoResult1 = react.memo((video) => {
  let changeLog;
  let constants2;
  let defaultRules;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let obj5;
  let onScroll;
  ({ changeLog, onScroll } = video);
  video = video.video;
  const tmp = closure_13();
  const items = [onScroll];
  let obj = { style: tmp.flex, children: items2 };
  const obj2 = {
    contentContainerStyle: tmp.container,
    style: tmp.scrollViewContainer,
    onScroll: react.useCallback((nativeEvent) => {
      onScroll(nativeEvent.nativeEvent);
    }, items),
    scrollEventThrottle: 3,
    children: items1
  };
  items1 = [video, ];
  const id = changeLog.id;
  const reactParserFor = MarkupUtilsDefault.reactParserFor;
  MarkupUtilsDefault;
  const obj3 = ChangeLogUtilsDefault;
  const tmp3 = closure_4;
  const tmp4 = closure_5;
  {
    const obj4 = { components: obj5 };
    obj5 = { Link, ListItem, LHeading, Heading: LHeading };
    defaultRules = obj3.getDefaultRules(obj4);
  }
  items1[1] = reactParserFor(defaultRules)(changeLog.body, false);
  items2 = [closure_11(tmp4, obj2), ];
  const obj6 = { bottom: true, style: tmp.footer, children: items3 };
  const SafeAreaPaddingView = onScroll(6544).SafeAreaPaddingView;
  const obj7 = {
    size: "sm",
    variant: "tertiary",
    accessibilityRole: "link",
    icon: closure_10(onScroll(7543).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }),
    accessibilityLabel: intl.string(onScroll(1115).t["/lXfom"]),
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(getLocalizedLinkDefault(constants.TWITTER));
    }
  };
  const IconButton = onScroll(7363).IconButton;
  intl = onScroll(1115).intl;
  items3 = [closure_10(IconButton, obj7), , ];
  const obj8 = {
    size: "sm",
    variant: "tertiary",
    accessibilityRole: "link",
    icon: closure_10(onScroll(7545).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" }),
    accessibilityLabel: intl2.string(onScroll(1115).t["h0or/l"]),
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(constants2.FACEBOOK_URL);
    }
  };
  const IconButton2 = onScroll(7363).IconButton;
  intl2 = onScroll(1115).intl;
  items3[1] = closure_10(IconButton2, obj8);
  const obj9 = {
    size: "sm",
    variant: "tertiary",
    accessibilityRole: "link",
    icon: closure_10(onScroll(7547).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" }),
    accessibilityLabel: intl3.string(onScroll(1115).t["5uVPyf"]),
    onPress() {
      const obj = LinkingDefault;
      obj.openURL(constants2.INSTAGRAM_URL);
    }
  };
  const IconButton3 = onScroll(7363).IconButton;
  intl3 = onScroll(1115).intl;
  items3[2] = closure_10(IconButton3, obj9);
  items2[1] = closure_11(SafeAreaPaddingView, obj6);
  return closure_11(tmp3, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default memoResult1;
export const ListItem = memoResult;
export const changelogRules = function changelogRules(changelogId, arg1) {
  let messageRules;
  let obj3;
  let obj5;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const obj = ChangeLogUtilsDefault;
  if (flag) {
    const obj2 = { components: obj3 };
    let closure_0 = changelogId;
    obj3 = { Link, ListItem, LHeading, Heading: LHeading };
    messageRules = obj.getMessageRules(obj2);
  } else {
    const obj4 = { components: obj5 };
    closure_0 = changelogId;
    obj5 = { Link, ListItem, LHeading, Heading: LHeading };
    messageRules = obj.getDefaultRules(obj4);
  }
  return messageRules;
};
export const getRenderChangelog = function getRenderChangelog(id) {
  let defaultRules;
  let obj3;
  id = id.id;
  const reactParserFor = MarkupUtilsDefault.reactParserFor;
  MarkupUtilsDefault;
  const obj = ChangeLogUtilsDefault;
  {
    const obj2 = { components: obj3 };
    obj3 = { Link, ListItem, LHeading, Heading: LHeading };
    defaultRules = obj.getDefaultRules(obj2);
  }
  return reactParserFor(defaultRules);
};
