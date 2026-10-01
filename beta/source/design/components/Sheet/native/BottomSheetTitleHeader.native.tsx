// Module ID: 6570
// Function ID: 6571
// Name: BottomSheetTitleHeader
// Dependencies: [32, 19, 17, 21, 4836, 576, 1479, 4531, 4832, 5937, 2]
// Exports: BottomSheetTitleHeader

// Module 6570 (BottomSheetTitleHeader)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useToken from "useToken" /* 4531 */;
import Text_Text from "Text/Text" /* 4832 */;
import HeaderDebugOverlayDefault from "HeaderDebugOverlay" /* 5937 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
function RedesignBottomSheetTitleHeaderBase(subtitle) {
  let items;
  let obj2;
  let tmp4;
  subtitle = subtitle.subtitle;
  const title = subtitle.title;
  const tmp = closure_8();
  const obj = { style: tmp.container, children: tmp4(View, obj2) };
  obj2 = { style: tmp.titles, children: items };
  items = [metroRequire(Title, { lineClamp: 2, children: title }), ];
  let tmp2Result = null;
  tmp4 = metroImportDefault;
  if (null != subtitle) {
    const obj3 = { children: subtitle };
    tmp2Result = tmp2(Subtitle, obj3);
  }
  items[1] = tmp2Result;
  return metroRequire(View, obj);
}
function RedesignBottomSheetTitleHeaderStacked(subtitle) {
  let items;
  let items1;
  let items2;
  let items3;
  let leading;
  let title;
  let trailing;
  subtitle = subtitle.subtitle;
  ({ title, leading, trailing } = subtitle);
  const tmp = closure_8();
  const tmp2 = closure_10();
  const obj = { style: items, children: items2 };
  items = [tmp.container, tmp2.container];
  const obj2 = { style: tmp2.accessories, children: items1 };
  items1 = [, ];
  const obj3 = { style: tmp2.item, children: leading };
  items1[0] = metroRequire(View, obj3);
  const obj4 = { style: tmp2.item, children: trailing };
  items1[1] = metroRequire(View, obj4);
  items2 = [metroImportDefault(View, obj2), ];
  const obj5 = { style: tmp.titles, children: items3 };
  items3 = [metroRequire(Title, { children: title }), ];
  let tmp5Result = null;
  const tmp5 = metroRequire;
  if (null != subtitle) {
    const obj6 = { children: subtitle };
    tmp5Result = tmp5(Subtitle, obj6);
  }
  items3[1] = tmp5Result;
  items2[1] = metroImportDefault(View, obj5);
  return metroImportDefault(View, obj);
}
function RedesignBottomSheetTitleHeaderComplex(subtitle) {
  let c0;
  let items;
  let items1;
  let items2;
  let items3;
  let leading;
  let onTitleTextLayout;
  let title;
  let tmp5;
  let trailing;
  subtitle = subtitle.subtitle;
  c0 = undefined;
  ({ title, leading, trailing, onTitleTextLayout } = subtitle);
  const tmp = closure_8();
  const tmp2 = closure_12();
  let width = useWindowDimensionsDefault().width;
  const obj = useToken;
  const diff = width - 2 * obj.useToken(nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL);
  [tmp5, c0] = react.useState(undefined);
  _slicedToArray(react.useState(undefined), 2);
  const callback = react.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    _undefined((arg0) => {
      let num = arg0;
      const _Math = Math;
      if (arg0 == null) {
        num = 0;
      }
      return max(num, width);
    });
  }, []);
  const obj2 = { style: tmp.container, children: items };
  items = [, , , , ];
  const obj3 = { style: { width: tmp5 } };
  items[0] = metroRequire(View, obj3);
  const obj4 = { style: tmp.titles, children: items1 };
  items1 = [metroRequire(Title, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title }), ];
  let tmp9Result = null;
  if (null != subtitle) {
    const obj5 = { children: subtitle };
    tmp9Result = tmp9(Subtitle, obj5);
  }
  const result = diff / 4;
  items1[1] = tmp9Result;
  items[1] = metroImportDefault(View, obj4);
  const obj6 = { style: { width: tmp5 } };
  items[2] = metroRequire(View, obj6);
  const obj7 = { onLayout: callback, style: items2, children: leading };
  items2 = [, , ];
  ({ accessory: arr3[0], leading: arr3[1] } = tmp2);
  items2[2] = { maxWidth: result };
  items[3] = metroRequire(View, obj7);
  const obj8 = { onLayout: callback, style: items3, children: trailing };
  items3 = [, , ];
  ({ accessory: arr4[0], trailing: arr4[1] } = tmp2);
  items3[2] = { maxWidth: result };
  items[4] = metroRequire(View, obj8);
  return metroImportDefault(View, obj2);
}
function Title(arg0) {
  const obj = { variant: "redesign/heading-18/semibold", color: "mobile-text-heading-primary", accessibilityRole: "header", style: closure_8().title };
  const Text = Text_Text.Text;
  const merged = Object.assign(arg0);
  return metroRequire(Text, obj);
}
function Subtitle(children) {
  children = children.children;
  const obj = { variant: "text-sm/medium", color: "text-muted", style: closure_8().subtitle, textBreakStrategy: "balanced", lineBreakStrategyIOS: "push-out", children };
  return metroRequire(Text_Text.Text, obj);
}
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let closure_8 = createStyles.createStyles(() => {
  const obj = { container: { paddingHorizontal: nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL, flexDirection: "row", gap: 4, position: "relative" }, titles: { flexGrow: 1, flexShrink: 1, gap: 2 }, subtitle: { textAlign: "center" }, title: { textAlign: "center" } };
  ({ paddingHorizontal: nativeDefault.modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL, flexDirection: "row", gap: 4, position: "relative" });
  return obj;
});
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles(() => ({ container: { flexDirection: "column" }, accessories: { flexDirection: "row", justifyContent: "space-between" }, item: { flexShrink: 0 } }));
createStyles = createStyles_mod;
let closure_12 = createStyles.createStyles(() => {
  const obj = { accessory: { position: "absolute", top: 0, bottom: 0, flexShrink: 0, flexDirection: "row", flexGrow: 1 }, leading: { left: nativeDefault.space.PX_16, justifyContent: "flex-start" }, trailing: { right: nativeDefault.space.PX_16, justifyContent: "flex-end" } };
  ({ left: nativeDefault.space.PX_16, justifyContent: "flex-start" });
  ({ right: nativeDefault.space.PX_16, justifyContent: "flex-end" });
  return obj;
});
let result = size.fileFinishedImporting("design/components/Sheet/native/BottomSheetTitleHeader.native.tsx");

export const BottomSheetTitleHeader = function BottomSheetTitleHeader(arg0) {
  let closure_0;
  let first;
  let items;
  let leading;
  let tmp5;
  let trailing;
  ({ leading, trailing } = arg0);
  [first, closure_0] = react.useState(false);
  const tmp3 = HeaderDebugOverlayDefault("sheet");
  if (null != leading) {
    let tmp6Result;
    if (false !== leading) {
      let tmp16 = tmp5;
      if (null != tmp3) {
        const obj2 = { style: { position: "relative" }, children: items };
        items = [tmp5, tmp3];
        tmp16 = metroImportDefault(View, obj2);
      }
      return tmp16;
    }
    if (first) {
      const obj3 = {};
      const merged = Object.assign(arg0);
      tmp6Result = tmp6(RedesignBottomSheetTitleHeaderStacked, obj3);
    } else {
      const obj4 = {
        onTitleTextLayout(nativeEvent) {
              closure_0(nativeEvent.nativeEvent.lines.length > 2);
            }
      };
      const merged1 = Object.assign(arg0);
      tmp6Result = tmp6(RedesignBottomSheetTitleHeaderComplex, obj4);
    }
    tmp5 = tmp6Result;
  }
  const obj = {};
  const merged2 = Object.assign(arg0);
  tmp5 = metroRequire(RedesignBottomSheetTitleHeaderBase, obj);
};
