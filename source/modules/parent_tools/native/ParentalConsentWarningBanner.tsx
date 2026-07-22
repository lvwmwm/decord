// Module ID: 15562
// Function ID: 118731
// Name: StyleSheet
// Dependencies: [270270464, 79429632, 37093376, 83427328, 692387840, 251133952, 1020329984, 693043200, 1020395520, 669843456, 131072, 964231168, 520093696, 721420288, 2852126736, 1291845636, 1711276048, 805306384, 905969680, 33554434, 2063597568, 31]
// Exports: default

// Module 15562 (StyleSheet)
import module_31 from "module_31";

let StyleSheet;
let closure_3 = importAll(dependencyMap[0]);
const tmp2 = arg1(dependencyMap[1]);
({ Pressable: closure_4, StyleSheet } = tmp2);
const View = tmp2.View;
const FamilyCenterSubPages = arg1(dependencyMap[2]).FamilyCenterSubPages;
({ AnalyticEvents: closure_8, UserSettingsSections: closure_9, VerticalGradient: closure_10 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[4]));
let closure_14 = 28 + importDefault(dependencyMap[5]).space.PX_16;
let closure_15 = [null, null];
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { "Null": 131420590, "Null": -1717986767, "Null": -644245095, "Null": 94527, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOWEST };
obj.strip = obj;
const obj1 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj1["flexDirection"] = "row";
obj1["alignItems"] = "center";
obj1["justifyContent"] = "center";
obj1["paddingHorizontal"] = importDefault(dependencyMap[5]).space.PX_12;
obj1["paddingBottom"] = importDefault(dependencyMap[5]).space.PX_16;
obj.pressable = obj1;
const tmp4 = arg1(dependencyMap[4]);
obj.label = { paddingRight: importDefault(dependencyMap[5]).space.PX_8 };
obj.link = { textDecorationLine: "underline" };
let closure_16 = obj.createStyles(obj);
const result = module_31.fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningBanner.tsx");

export default function ParentalConsentWarningBanner(children) {
  let dependencyMap;
  const tmp = callback2();
  const arg1 = tmp;
  const tmp2 = importDefault(dependencyMap[7])();
  let obj = arg1(dependencyMap[8]);
  const parentalConsentWarning = obj.useParentalConsentWarning();
  let obj1 = arg1(dependencyMap[9]);
  const isParentalConsentBannerActive = obj1.useIsParentalConsentBannerActive();
  let obj2 = arg1(dependencyMap[10]);
  const isOnMainSurface = obj2.useIsOnMainSurface();
  let obj3 = arg1(dependencyMap[11]);
  let obj4 = arg1(dependencyMap[12]);
  const token = obj4.useToken(importDefault(dependencyMap[5]).colors.BACKGROUND_FEEDBACK_WARNING);
  const importDefault = token;
  const items = [token];
  let daysRemaining;
  const memo = React.useMemo(() => {
    const items = [token, ];
    const obj = token(tmp9[13])(token);
    items[1] = token(tmp9[13])(token).setAlpha(0).toRgbString();
    return items;
  }, items);
  if (null != parentalConsentWarning) {
    daysRemaining = parentalConsentWarning.daysRemaining;
  }
  let tmp9 = null;
  if (null != daysRemaining) {
    tmp9 = daysRemaining;
  }
  dependencyMap = tmp9;
  let tmp10 = isOnMainSurface;
  if (isOnMainSurface) {
    tmp10 = isParentalConsentBannerActive;
  }
  if (tmp10) {
    tmp10 = !obj3.useGlobalStatusIndicatorState().isVisible;
  }
  if (tmp10) {
    tmp10 = null != tmp9;
  }
  if (tmp10) {
    tmp10 = tmp9 >= 0;
  }
  const items1 = [tmp9];
  const sum = tmp2.top + closure_14;
  const items2 = [tmp.link];
  const callback = React.useCallback(() => {
    let obj = token(tmp9[14]);
    obj = { days_remaining: tmp9 };
    obj.track(constants2.PARENTAL_CONSENT_WARNING_BANNER_TAPPED, obj);
    const tab = token(tmp9[15]).selectTab(constants.REQUESTS);
    const obj3 = token(tmp9[15]);
    obj = { screen: constants3.FAMILY_CENTER };
    tmp(tmp9[16]).openUserSettings(obj);
  }, items1);
  const callback1 = React.useCallback((children) => callback(tmp(tmp9[17]).Text, { style: tmp.link, children }, arg1), items2);
  obj = {};
  obj = {};
  const items3 = [StyleSheet.absoluteFill, ];
  obj1 = {};
  let num2 = 0;
  if (tmp10) {
    num2 = closure_14;
  }
  obj1.marginTop = num2;
  items3[1] = obj1;
  obj.style = items3;
  obj.children = children.children;
  const items4 = [callback(View, obj), ];
  let tmp18 = null;
  if (tmp10) {
    tmp18 = null;
    if (null != tmp9) {
      obj2 = {};
      const items5 = [tmp.strip, ];
      obj3 = { height: sum };
      items5[1] = obj3;
      obj2.style = items5;
      obj2.pointerEvents = "box-none";
      obj4 = { pointerEvents: "none", style: StyleSheet.absoluteFill, colors: memo, locations: closure_15 };
      ({ START: obj11.start, END: obj11.end } = closure_10);
      const items6 = [callback(importDefault(dependencyMap[18]), obj4), ];
      let obj5 = { accessibilityRole: "button" };
      let num4 = 19;
      const intl = arg1(dependencyMap[19]).intl;
      obj5.accessibilityHint = intl.string(importDefault(dependencyMap[20]).O2HKdA);
      obj5.onPress = callback;
      const items7 = [tmp.pressable, ];
      const obj6 = { paddingTop: tmp2.top + 8 };
      items7[1] = obj6;
      obj5.style = items7;
      let obj7 = { 803799044: "FAMILY_CENTER_CONNECTION_PREREQUISITES", 1269170180: "isArray", 711589892: "TOO_MANY_CONNECTIONS", style: tmp.label };
      if (0 === tmp9) {
        const intl3 = arg1(dependencyMap[num4]).intl;
        num4 = intl3.format;
        const obj8 = { connectHook: callback1 };
        let num4Result = num4(importDefault(dependencyMap[20]).Gfqlpa, obj8);
      } else {
        const intl2 = arg1(dependencyMap[num4]).intl;
        const obj9 = { count: tmp9, connectHook: callback1 };
        num4Result = intl2.format(importDefault(dependencyMap[20]).ZBK5mM, obj9);
      }
      obj7.children = num4Result;
      obj7 = tmp21(arg1(dependencyMap[17]).Text, obj7);
      obj5.children = obj7;
      obj5 = tmp21(closure_4, obj5);
      items6[1] = obj5;
      obj2.children = items6;
      closure_12(View, obj2);
      const tmp19 = closure_12;
      const tmp20 = View;
      const tmp27 = closure_4;
    }
  }
  items4[1] = tmp18;
  obj.children = items4;
  return closure_12(closure_13, obj);
};
