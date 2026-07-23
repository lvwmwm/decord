// Module ID: 5186
// Function ID: 45022
// Name: RedesignBottomSheetTitleHeaderBase
// Dependencies: [57, 31, 27, 33, 4130, 689, 1450, 3834, 1324, 4126, 5088, 2]
// Exports: BottomSheetTitleHeader

// Module 5186 (RedesignBottomSheetTitleHeaderBase)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
function RedesignBottomSheetTitleHeaderBase(children) {
  const subtitle = children.subtitle;
  const tmp = callback4();
  let obj = { style: tmp.container };
  obj = { style: tmp.titles };
  const items = [callback2(Title, { lineClamp: 2, children: children.title }), ];
  let tmp6 = null;
  if (null != subtitle) {
    obj = { children: subtitle };
    tmp6 = callback2(Subtitle, obj);
  }
  items[1] = tmp6;
  obj.children = items;
  obj.children = closure_7(View, obj);
  return callback2(View, obj);
}
function RedesignBottomSheetTitleHeaderStacked(subtitle) {
  let leading;
  let title;
  let trailing;
  subtitle = subtitle.subtitle;
  ({ title, leading, trailing } = subtitle);
  const tmp = callback4();
  const tmp2 = callback5();
  let obj = { style: items };
  items = [tmp.container, tmp2.container];
  obj = { style: tmp2.accessories };
  obj = { style: tmp2.item, children: leading };
  const items1 = [callback2(View, obj), callback2(View, { style: tmp2.item, children: trailing })];
  obj.children = items1;
  const items2 = [callback3(View, obj), ];
  const obj2 = { style: tmp.titles };
  const items3 = [callback2(Title, { children: title }), ];
  let tmp7 = null;
  if (null != subtitle) {
    const obj3 = { children: subtitle };
    tmp7 = callback2(Subtitle, obj3);
  }
  items3[1] = tmp7;
  obj2.children = items3;
  items2[1] = callback3(View, obj2);
  obj.children = items2;
  return callback3(View, obj);
}
function RedesignBottomSheetTitleHeaderComplex(subtitle) {
  let leading;
  let onTitleTextLayout;
  let title;
  let trailing;
  subtitle = subtitle.subtitle;
  ({ title, leading, trailing, onTitleTextLayout } = subtitle);
  const tmp = callback4();
  const tmp2 = callback6();
  let obj = _require(3834);
  const result = (importDefault(1450)().width - 2 * obj.useToken(importDefault(689).modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL)) / 4;
  const tmp4 = callback(React.useState(undefined), 2);
  const first = tmp4[0];
  _require = tmp4[1];
  callback = React.useCallback((nativeEvent) => {
    const width = nativeEvent.nativeEvent.layout.width;
    width((arg0) => {
      let num = 0;
      if (null != arg0) {
        num = arg0;
      }
      return Math.max(num, width);
    });
  }, []);
  obj = { style: tmp.container };
  const items = [callback2(View, { style: { width: first } }), , , , ];
  obj = { style: tmp.titles };
  const items1 = [callback2(Title, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title }), ];
  let tmp11 = null;
  if (null != subtitle) {
    const obj1 = { children: subtitle };
    tmp11 = callback2(Subtitle, obj1);
  }
  items1[1] = tmp11;
  obj.children = items1;
  items[1] = closure_7(View, obj);
  items[2] = callback2(View, { style: { width: first } });
  const items2 = [, , ];
  ({ accessory: arr3[0], leading: arr3[1] } = tmp2);
  items2[2] = { maxWidth: result };
  items[3] = callback2(View, { onLayout: callback, style: items2, children: leading });
  const items3 = [, , ];
  ({ accessory: arr4[0], trailing: arr4[1] } = tmp2);
  items3[2] = { maxWidth: result };
  items[4] = callback2(View, { onLayout: callback, style: items3, children: trailing });
  obj.children = items;
  return closure_7(View, obj);
}
function Title(arg0) {
  let str = "redesign/heading-18/bold";
  if (importDefault(1324)("BottomSheetTitleHeader")) {
    str = "redesign/heading-18/semibold";
  }
  const obj = { variant: str, color: "mobile-text-heading-primary", accessibilityRole: "header", style: callback4().title };
  const merged = Object.assign(arg0);
  return callback2(require(4126) /* Text */.Text, obj);
}
function Subtitle(children) {
  const tmp2 = importDefault(1324)("BottomSheetTitleHeader");
  let str = "text-default";
  if (tmp2) {
    str = "text-muted";
  }
  let str2 = "text-xs/medium";
  if (tmp2) {
    str2 = "text-sm/medium";
  }
  const obj = { variant: str2, color: str, lineClamp: 1, style: callback4().subtitle, children: children.children };
  return callback2(require(4126) /* Text */.Text, obj);
}
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = {};
  obj = { paddingHorizontal: importDefault(689).modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL, flexDirection: "row", gap: 4, position: "relative" };
  obj.container = obj;
  obj.titles = { flexGrow: 1, flexShrink: 1, gap: 2 };
  obj.subtitle = { textAlign: "center" };
  obj.title = { textAlign: "center" };
  return obj;
});
let closure_9 = _createForOfIteratorHelperLoose.createStyles(() => ({ container: { flexDirection: "column" }, accessories: { flexDirection: "row", justifyContent: "space-between" }, item: { flexShrink: 0 } }));
let closure_10 = _createForOfIteratorHelperLoose.createStyles(() => {
  let obj = { accessory: { position: "absolute", top: 0, bottom: 0, flexShrink: 0, flexDirection: "row", flexGrow: 1 } };
  obj = { left: importDefault(689).space.PX_16, justifyContent: "flex-start" };
  obj.leading = obj;
  obj = { right: importDefault(689).space.PX_16, justifyContent: "flex-end" };
  obj.trailing = obj;
  return obj;
});
let result = require("get ActivityIndicator").fileFinishedImporting("design/components/Sheet/native/BottomSheetTitleHeader.native.tsx");

export const BottomSheetTitleHeader = function BottomSheetTitleHeader(arg0) {
  let leading;
  let trailing;
  let merged = arg0;
  ({ leading, trailing } = arg0);
  const tmp2 = callback(React.useState(false), 2);
  let closure_0 = tmp2[1];
  const tmp3 = importDefault(5088)("sheet");
  if (null != leading) {
    if (tmp2[0]) {
      let obj = {};
      merged = Object.assign(merged);
      let tmp6Result = tmp6(RedesignBottomSheetTitleHeaderStacked, obj);
    } else {
      obj = {};
      const merged1 = Object.assign(merged);
      obj["onTitleTextLayout"] = function onTitleTextLayout(nativeEvent) {
        callback(nativeEvent.nativeEvent.lines.length > 2);
      };
      tmp6Result = tmp6(RedesignBottomSheetTitleHeaderComplex, obj);
    }
  }
  obj = {};
  const merged2 = Object.assign(merged);
  const tmp5 = callback2(RedesignBottomSheetTitleHeaderBase, obj);
  let tmp16 = tmp5;
  if (null != tmp3) {
    const obj1 = {};
    const obj2 = { position: "relative" };
    obj1.style = obj2;
    const items = [tmp5, tmp3];
    obj1.children = items;
    tmp16 = callback3(View, obj1);
  }
  return tmp16;
};
