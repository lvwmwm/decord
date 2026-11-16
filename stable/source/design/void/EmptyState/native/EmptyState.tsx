// Module ID: 16348
// Function ID: 16349
// Name: EmptyState
// Dependencies: [19, 17, 21, 5170, 575, 5177, 5874, 5783, 2]
// Exports: default

// Module 16348 (EmptyState)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import shared from "shared" /* 5177 */;
import FastImageDefault from "FastImage" /* 5874 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let closure_6 = { accessible: false, accessibilityRole: "none", accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants" };
let obj = { container: obj2, emptyImage: { flex: 1, maxWidth: 300, maxHeight: 200 }, textGroup: { alignSelf: "stretch", alignItems: "center" }, emptyTitle: { marginTop: 20 }, emptyBody: { textAlign: "center", marginTop: 8 } };
obj2 = { flex: 1, justifyContent: "center", alignItems: "center", paddingHorizontal: 36, paddingBottom: 80, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_7 = createStyles.createStyles(obj);
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
  let tmp20Result;
  let tmp2Result;
  let tmp8Result;
  const tmp = closure_7();
  shared;
  if (null != Illustration.Illustration) {
    Illustration = Illustration.Illustration;
    const obj2 = { resizeMode: "contain", style: items };
    const merged = Object.assign(closure_6);
    items = [tmp.emptyImage, Illustration.imageStyle];
    tmp8Result = React3(Illustration, obj2);
  } else {
    tmp8Result = null;
    const tmp6 = null != Illustration.lightSource && null != Illustration.darkSource;
    if (tmp6) {
      const obj = { resizeMode: "contain", source: tmp2Result.isThemeLight(tmp5) ? Illustration.lightSource : Illustration.darkSource, style: items1 };
      const tmp10 = FastImageDefault;
      const merged1 = Object.assign(closure_6);
      items1 = [tmp.emptyImage, Illustration.imageStyle];
      tmp2Result = shared;
      tmp8Result = React3(tmp10, obj);
    }
  }
  ({ body, title } = Illustration);
  const obj3 = { style: items2, children: items3 };
  items2 = [tmp.container, Illustration.style];
  items3 = [tmp8Result, , ];
  const children = Illustration.children;
  if (null != title) {
    let tmp23 = null;
    const obj4 = { style: tmp.textGroup, accessible: true, children: items5 };
    if (null != title) {
      const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, style: items4, children: title };
      items4 = [tmp.emptyTitle, tmp19];
      tmp23 = React3(tmp2(5783).Text, obj5);
    }
    items5 = [tmp23, ];
    let tmp25 = null;
    if (null != body) {
      const obj6 = { variant: "body-md/medium", color: "text-muted", maxFontSizeMultiplier: 2, style: items6, children: body };
      items6 = [tmp.emptyBody, tmp18];
      tmp25 = React3(tmp2(5783).Text, obj6);
    }
    items5[1] = tmp25;
    tmp20Result = tmp20(tmp21, obj4);
  } else {
    tmp20Result = null;
  }
  items3[1] = tmp20Result;
  items3[2] = children;
  return hasOwnProperty(View, obj3);
};
