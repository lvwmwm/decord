// Module ID: 13668
// Function ID: 13669
// Name: EmptyState
// Dependencies: [19, 17, 21, 4836, 576, 4685, 4832, 2]
// Exports: default

// Module 13668 (EmptyState)
import nativeDefault from "native" /* 576 */;
import shared from "shared" /* 4685 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
let closure_4;
let hasOwnProperty;
let obj2;
({ View: c2, Image: c3 } = react_native);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = { textTransform: "none" };
let closure_7 = { accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
let obj = { container: obj2, emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 }, textGroup: { alignSelf: "stretch", alignItems: "center" }, emptyTitle: { marginTop: 20, textTransform: "uppercase" }, emptyBody: { textAlign: "center", marginTop: 8 } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("design/void/EmptyState/native/EmptyState.tsx");

export default function EmptyState(Illustration) {
  let body;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let title;
  let tmp11Result;
  let tmp22Result;
  let tmp2Result2;
  let tmp6;
  const tmp = closure_8();
  const obj = shared;
  const themeContext = obj.useThemeContext();
  let hasItem;
  if (themeContext != null) {
    const enabledExperiments = themeContext.enabledExperiments;
    if (enabledExperiments != null) {
      hasItem = enabledExperiments.includes("mana-type-consolidation");
    }
  }
  if (true === hasItem) {
    tmp6 = closure_6;
  }
  shared;
  if (null != Illustration.Illustration) {
    Illustration = Illustration.Illustration;
    const obj2 = { resizeMode: "contain", style: items };
    const merged = Object.assign(closure_7);
    items = [tmp.emptyImage, Illustration.imageStyle];
    tmp11Result = React3(Illustration, obj2);
  } else {
    tmp11Result = null;
    const tmp9 = null != Illustration.lightSource && null != Illustration.darkSource;
    if (tmp9) {
      const obj3 = { resizeMode: "contain", source: tmp2Result2.isThemeLight(tmp8) ? Illustration.lightSource : Illustration.darkSource, style: items1 };
      const merged1 = Object.assign(closure_7);
      items1 = [tmp.emptyImage, Illustration.imageStyle];
      tmp2Result2 = shared;
      tmp11Result = React3(_false, obj3);
    }
  }
  ({ body, title } = Illustration);
  const obj4 = { style: items2, children: items3 };
  items2 = [tmp.container, Illustration.style];
  items3 = [tmp11Result, , ];
  const children = Illustration.children;
  if (null != title) {
    let tmp25 = null;
    const obj5 = { style: tmp.textGroup, accessible: true, children: items5 };
    if (null != title) {
      const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: items4, children: title };
      items4 = [tmp.emptyTitle, tmp21, tmp6];
      tmp25 = React3(tmp2(4832).Text, obj6);
    }
    items5 = [tmp25, ];
    let tmp27 = null;
    if (null != body) {
      const obj7 = { variant: "text-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: items6, children: body };
      items6 = [tmp.emptyBody, tmp20];
      tmp27 = React3(tmp2(4832).Text, obj7);
    }
    items5[1] = tmp27;
    tmp22Result = tmp22(tmp23, obj5);
  } else {
    tmp22Result = null;
  }
  items3[1] = tmp22Result;
  items3[2] = children;
  return hasOwnProperty(React2, obj4);
};
