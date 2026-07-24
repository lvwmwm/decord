// Module ID: 7859
// Function ID: 61985
// Name: LHeading
// Dependencies: [31, 27, 1921, 653, 33, 689, 4130, 1273, 624, 7860, 675, 3827, 3829, 7862, 4120, 5121, 7533, 7864, 1212, 3742, 7866, 7868, 2]

// Module 7859 (LHeading)
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function LHeading(className) {
  className = className.className;
  function getStyles(lheadingLine, arg1) {
    const className = arg1;
    if (null != className) {
      const parts = className.split(" ");
      const mapped = parts.map((arg0) => {
        if ("marginTop" === arg0) {
          let obj = { marginTop: 10 };
          let tmp4 = obj;
        } else {
          obj = {};
          if (closure_0) {
            obj.color = tmp3;
            tmp4 = obj;
          } else {
            obj.backgroundColor = tmp3;
            tmp4 = obj;
          }
        }
        return tmp4;
      });
      return mapped.concat(lheadingLine);
    }
  }
  const tmp = callback3();
  let obj = { style: tmp.lheading };
  obj = { accessibilityRole: "header", style: getStyles(tmp.lheadingText, true), children: className.children };
  const items = [callback(className(1273).LegacyText, obj), ];
  obj = { style: getStyles(tmp.lheadingLine, false) };
  items[1] = callback(closure_4, obj);
  obj.children = items;
  return callback2(closure_4, obj);
}
function LinkInner(target) {
  let changelogId;
  let children;
  let className;
  target = target.target;
  ({ changelogId, className, children } = target);
  let obj = target(624);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.locale);
  const changelog = target(7860).useChangelog(changelogId, stateFromStores).changelog;
  obj = {
    accessibilityRole: "link",
    style: className,
    onPress() {
      let obj = changelog(outer1_2[10]);
      obj = {};
      let date;
      if (null != changelog) {
        date = changelog.date;
      }
      if (null == date) {
        const _Date = Date;
        const str = new Date();
        date = str.toString();
      }
      let revision;
      if (null != changelog) {
        revision = changelog.revision;
      }
      let num = 1;
      if (null != revision) {
        num = revision;
      }
      obj.change_log_id = "" + date + ":" + num;
      obj.cta_type = "inline_link";
      obj.target = target;
      obj.track(outer1_9.CHANGE_LOG_CTA_CLICKED, obj);
      const obj3 = changelog(outer1_2[11]);
      obj3.openURL(target(outer1_2[12]).sanitizeUrl(target));
    },
    children
  };
  return callback(target(1273).LegacyText, obj);
}
function getLinkComponent(changelogId) {
  let closure_0 = changelogId;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["changelogId"] = closure_0;
    return outer1_10(outer1_16, obj);
  };
}
function changelogRules(changelogId, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(7862);
  if (flag) {
    obj = {};
    obj = { Link: getLinkComponent(changelogId), ListItem: closure_14, LHeading, Heading: LHeading };
    obj.components = obj;
    let messageRules = obj.getMessageRules(obj);
  } else {
    const obj1 = {};
    const obj2 = { Link: getLinkComponent(changelogId), ListItem: closure_14, LHeading, Heading: LHeading };
    obj1.components = obj2;
    messageRules = obj.getDefaultRules(obj1);
  }
  return messageRules;
}
function getRenderChangelog(changeLog) {
  return importDefault(4120).reactParserFor(changelogRules(changeLog.id));
}
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ LocalizedLinks: closure_7, SOCIAL_LINKS: closure_8, AnalyticEvents: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { added: require("_createForOfIteratorHelperLoose").unsafe_rawColors.GREEN_360, fixed: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, progress: require("_createForOfIteratorHelperLoose").unsafe_rawColors.YELLOW_300, improved: require("_createForOfIteratorHelperLoose").unsafe_rawColors.BRAND_500 };
obj = { flex: { flex: 1 }, container: { padding: 18, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW } };
_createForOfIteratorHelperLoose = { flexDirection: "row", justifyContent: "center", borderTopWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, borderTopColor: require("_createForOfIteratorHelperLoose").colors.BORDER_STRONG, gap: require("_createForOfIteratorHelperLoose").space.PX_12, paddingHorizontal: 18, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_12 };
obj.footer = _createForOfIteratorHelperLoose;
obj.scrollViewContainer = { flex: 1 };
obj.lheading = { marginBottom: 14, flexDirection: "row", alignItems: "center" };
obj.lheadingText = { fontSize: 16, fontFamily: ME.Fonts.PRIMARY_SEMIBOLD };
obj.lheadingLine = { flexGrow: 1, flexShrink: 1, flexBasis: "auto", marginLeft: 10, height: 2 };
const obj4 = { width: 7, height: 7, borderRadius: 3.5, marginRight: 13, marginTop: 7, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_STRONG };
obj.bulletPoint = obj4;
obj.listItem = { flexDirection: "row", marginLeft: 4, marginBottom: 8 };
const obj5 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, fontSize: 14, lineHeight: 18, flex: 1 };
obj.listText = obj5;
let closure_13 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo((children) => {
  children = children.children;
  const tmp = callback3();
  let obj = { style: tmp.listItem };
  obj = { style: tmp.bulletPoint };
  const items = [callback(closure_4, obj), ];
  obj = { style: tmp.listText };
  let childrenResult = children;
  if ("function" === typeof children) {
    const obj1 = { style: tmp.listText };
    childrenResult = children(obj1);
  }
  obj.children = childrenResult;
  items[1] = callback(closure_4, obj);
  obj.children = items;
  return closure_11(closure_4, obj);
});
let obj1 = { padding: 18, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj3 = { fontSize: 16, fontFamily: ME.Fonts.PRIMARY_SEMIBOLD };
const memoResult1 = importAllResult.memo((video) => {
  let changeLog;
  let onScroll;
  ({ changeLog, onScroll } = video);
  const tmp = callback3();
  const items = [onScroll];
  let obj = { style: tmp.flex };
  obj = {
    contentContainerStyle: tmp.container,
    style: tmp.scrollViewContainer,
    onScroll: importAllResult.useCallback((nativeEvent) => {
      onScroll(nativeEvent.nativeEvent);
    }, items),
    scrollEventThrottle: 3
  };
  const items1 = [video.video, getRenderChangelog(changeLog)(changeLog.body, false)];
  obj.children = items1;
  const items2 = [callback2(closure_5, obj), ];
  obj = { bottom: true, style: tmp.footer };
  const obj1 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: callback(onScroll(7864).XNeutralIcon, { size: "sm", color: "interactive-icon-default" }) };
  const intl = onScroll(1212).intl;
  obj1.accessibilityLabel = intl.string(onScroll(1212).t["/lXfom"]);
  obj1.onPress = function onPress() {
    outer1_1(outer1_2[11]).openURL(outer1_1(outer1_2[19])(outer1_7.TWITTER));
  };
  const items3 = [callback(onScroll(7533).IconButton, obj1), , ];
  const obj2 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: callback(onScroll(7866).FacebookNeutralIcon, { size: "sm", color: "interactive-icon-default" }) };
  const intl2 = onScroll(1212).intl;
  obj2.accessibilityLabel = intl2.string(onScroll(1212).t["h0or/l"]);
  obj2.onPress = function onPress() {
    outer1_1(outer1_2[11]).openURL(outer1_8.FACEBOOK_URL);
  };
  items3[1] = callback(onScroll(7533).IconButton, obj2);
  const obj3 = { size: "sm", variant: "tertiary", accessibilityRole: "link", icon: callback(onScroll(7868).InstagramNeutralIcon, { size: "sm", color: "interactive-icon-default" }) };
  const intl3 = onScroll(1212).intl;
  obj3.accessibilityLabel = intl3.string(onScroll(1212).t["5uVPyf"]);
  obj3.onPress = function onPress() {
    outer1_1(outer1_2[11]).openURL(outer1_8.INSTAGRAM_URL);
  };
  items3[2] = callback(onScroll(7533).IconButton, obj3);
  obj.children = items3;
  items2[1] = callback2(onScroll(5121).SafeAreaPaddingView, obj);
  obj.children = items2;
  return callback2(closure_4, obj);
});
const result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default memoResult1;
export const ListItem = memoResult;
export { changelogRules };
export { getRenderChangelog };
