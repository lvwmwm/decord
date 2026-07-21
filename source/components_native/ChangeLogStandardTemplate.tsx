// Module ID: 7760
// Function ID: 61611
// Name: LHeading
// Dependencies: []

// Module 7760 (LHeading)
function LHeading(className) {
  const arg1 = className.className;
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
          if (arg1) {
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
  const items = [callback(arg1(dependencyMap[7]).LegacyText, obj), ];
  obj = { style: getStyles(tmp.lheadingLine, false) };
  items[1] = callback(closure_4, obj);
  obj.children = items;
  return callback2(closure_4, obj);
}
function LinkInner(target) {
  let changelogId;
  let children;
  let className;
  const arg1 = target.target;
  ({ changelogId, className, children } = target);
  let obj = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  const importDefault = arg1(dependencyMap[9]).useChangelog(changelogId, stateFromStores).changelog;
  obj = {
    accessibilityRole: "link",
    style: className,
    onPress() {
      let obj = changelog(closure_2[10]);
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
      obj.track(constants.CHANGE_LOG_CTA_CLICKED, obj);
      const obj3 = changelog(closure_2[11]);
      obj3.openURL(target(closure_2[12]).sanitizeUrl(target));
    },
    children
  };
  return callback(arg1(dependencyMap[7]).LegacyText, obj);
}
function getLinkComponent(changelogId) {
  const arg1 = changelogId;
  return (arg0) => {
    const obj = {};
    const merged = Object.assign(arg0);
    obj["changelogId"] = arg0;
    return callback(closure_16, obj);
  };
}
function changelogRules(changelogId, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  let obj = importDefault(dependencyMap[13]);
  if (flag) {
    obj = {};
    obj = { Link: getLinkComponent(changelogId), ListItem: memoResult, LHeading, Heading: LHeading };
    obj.components = obj;
    let messageRules = obj.getMessageRules(obj);
  } else {
    const obj1 = {};
    const obj2 = { Link: getLinkComponent(changelogId), ListItem: memoResult, LHeading, Heading: LHeading };
    obj1.components = obj2;
    messageRules = obj.getDefaultRules(obj1);
  }
  return messageRules;
}
function getRenderChangelog(changeLog) {
  return importDefault(dependencyMap[14]).reactParserFor(changelogRules(changeLog.id));
}
const importAllResult = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ View: closure_4, ScrollView: closure_5 } = tmp2);
let closure_6 = importDefault(dependencyMap[2]);
const tmp3 = arg1(dependencyMap[3]);
({ LocalizedLinks: closure_7, SOCIAL_LINKS: closure_8, AnalyticEvents: closure_9 } = tmp3);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[4]));
let obj = { added: importDefault(dependencyMap[5]).unsafe_rawColors.GREEN_360, fixed: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400, progress: importDefault(dependencyMap[5]).unsafe_rawColors.YELLOW_300, improved: importDefault(dependencyMap[5]).unsafe_rawColors.BRAND_500 };
let obj2 = arg1(dependencyMap[6]);
obj = { flex: { flex: 1 } };
const tmp4 = arg1(dependencyMap[4]);
obj.container = { padding: 18, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj2 = { "Bool(false)": 7, "Bool(false)": 370, borderTopWidth: tmp2.StyleSheet.hairlineWidth, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_SURFACE_HIGH, borderTopColor: importDefault(dependencyMap[5]).colors.BORDER_STRONG, gap: importDefault(dependencyMap[5]).space.PX_12, paddingHorizontal: 18, paddingVertical: importDefault(dependencyMap[5]).space.PX_12 };
obj.footer = obj2;
obj.scrollViewContainer = { flex: 1 };
obj.lheading = { diversity: null, accessible: "\u{1FAF6}\u{1F3FF}", status: true };
obj.lheadingText = { fontSize: 16, fontFamily: tmp3.Fonts.PRIMARY_SEMIBOLD };
obj.lheadingLine = {};
const obj1 = { padding: 18, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
const obj3 = { fontSize: 16, fontFamily: tmp3.Fonts.PRIMARY_SEMIBOLD };
obj.bulletPoint = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
obj.listItem = {};
const obj4 = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_MOD_STRONG };
obj.listText = { color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT };
let closure_13 = obj2.createStyles(obj);
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
const obj5 = { color: importDefault(dependencyMap[5]).colors.TEXT_DEFAULT };
const memoResult1 = importAllResult.memo((video) => {
  let changeLog;
  let onScroll;
  ({ changeLog, onScroll } = video);
  const arg1 = onScroll;
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
  const obj1 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, icon: callback(arg1(dependencyMap[17]).XNeutralIcon, { accessibilityRole: true, "": true }) };
  const intl = arg1(dependencyMap[18]).intl;
  obj1.accessibilityLabel = intl.string(arg1(dependencyMap[18]).t./lXfom);
  obj1.onPress = function onPress() {
    callback(closure_2[11]).openURL(callback(closure_2[19])(constants.TWITTER));
  };
  const items3 = [callback(arg1(dependencyMap[16]).IconButton, obj1), , ];
  const obj2 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, icon: callback(arg1(dependencyMap[20]).FacebookNeutralIcon, { accessibilityRole: true, "": true }) };
  const intl2 = arg1(dependencyMap[18]).intl;
  obj2.accessibilityLabel = intl2.string(arg1(dependencyMap[18]).t.h0or/l);
  obj2.onPress = function onPress() {
    callback(closure_2[11]).openURL(constants2.FACEBOOK_URL);
  };
  items3[1] = callback(arg1(dependencyMap[16]).IconButton, obj2);
  const obj3 = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null, icon: callback(arg1(dependencyMap[21]).InstagramNeutralIcon, { accessibilityRole: true, "": true }) };
  const intl3 = arg1(dependencyMap[18]).intl;
  obj3.accessibilityLabel = intl3.string(arg1(dependencyMap[18]).t.5uVPyf);
  obj3.onPress = function onPress() {
    callback(closure_2[11]).openURL(constants2.INSTAGRAM_URL);
  };
  items3[2] = callback(arg1(dependencyMap[16]).IconButton, obj3);
  obj.children = items3;
  items2[1] = callback2(arg1(dependencyMap[15]).SafeAreaPaddingView, obj);
  obj.children = items2;
  return callback2(closure_4, obj);
});
const result = arg1(dependencyMap[22]).fileFinishedImporting("components_native/ChangeLogStandardTemplate.tsx");

export default memoResult1;
export const ListItem = memoResult;
export { changelogRules };
export { getRenderChangelog };
