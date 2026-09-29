// Module ID: 14426
// Function ID: 14427
// Name: EmptyState
// Dependencies: [19, 17, 21, 4788, 576, 4639, 4784, 2]
// Exports: default

// Module 14426 (EmptyState)
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4639 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, Image: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { textTransform: "none" };
let closure_7 = { accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
const createStyles = fn(4788);
let obj2 = { container: { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER }, emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 }, textGroup: { alignSelf: "stretch", alignItems: "center" }, emptyTitle: { marginTop: 20, textTransform: "uppercase" }, emptyBody: { textAlign: "center", marginTop: 8 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  const tmp = closure_8();
  const themeContext = shared.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  if (true === hasItem) {
    const tmp6 = closure_6;
  }
  shared;
  if (null != Illustration.Illustration) {
    const obj2 = {};
    const merged = Object.assign(closure_7);
    obj2.resizeMode = "contain";
    const items = [tmp.emptyImage, Illustration.imageStyle];
    obj2.style = items;
    let tmp11Result = React4(Illustration.Illustration, obj2);
  } else {
    tmp11Result = null;
    if (tmp9) {
      const obj3 = {};
      const merged1 = Object.assign(closure_7);
      obj3.resizeMode = "contain";
      obj3.source = tmp2(4639).isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource;
      const items1 = [tmp.emptyImage, Illustration.imageStyle];
      obj3.style = items1;
      tmp11Result = React4(React3, obj3);
      const tmp2Result2 = tmp2(4639);
    }
    tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
  }
  ({ body, title } = Illustration);
  const obj4 = { style: null, children: null };
  const items2 = [tmp.container, Illustration.style];
  obj4.style = items2;
  const items3 = [tmp11Result, , ];
  if (null != title) {
    const obj5 = { style: tmp.textGroup, accessible: true, children: null };
    let tmp25 = null;
    if (null != title) {
      const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: null, children: null };
      const items4 = [tmp.emptyTitle, tmp21, tmp6];
      obj6.style = items4;
      obj6.children = title;
      tmp25 = React4(tmp2(4784).Text, obj6);
    }
    const items5 = [tmp25, ];
    let tmp27 = null;
    if (null != body) {
      const obj7 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: null, children: null };
      const items6 = [tmp.emptyBody, tmp20];
      obj7.style = items6;
      obj7.children = body;
      tmp27 = React4(tmp2(4784).Text, obj7);
    }
    items5[1] = tmp27;
    obj5.children = items5;
    let tmp22Result = tmp22(tmp23, obj5);
  } else {
    tmp22Result = null;
  }
  items3[1] = tmp22Result;
  items3[2] = Illustration.children;
  obj4.children = items3;
  return hasOwnProperty(React2, obj4);
};
