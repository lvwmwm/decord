// Module ID: 5449
// Function ID: 46566
// Name: RedesignBottomSheetTitleHeaderBase
// Dependencies: []
// Exports: BottomSheetTitleHeader

// Module 5449 (RedesignBottomSheetTitleHeaderBase)
function RedesignBottomSheetTitleHeaderBase(children) {
  const subtitle = children.subtitle;
  const tmp = callback5();
  let obj = { style: tmp.container };
  obj = { style: tmp.titles };
  const items = [callback3(Title, { lineClamp: 2, children: children.title }), ];
  let tmp6 = null;
  if (null != subtitle) {
    obj = { children: subtitle };
    tmp6 = callback3(Subtitle, obj);
  }
  items[1] = tmp6;
  obj.children = items;
  obj.children = closure_7(View, obj);
  return callback3(View, obj);
}
function RedesignBottomSheetTitleHeaderStacked(subtitle) {
  let leading;
  let title;
  let trailing;
  subtitle = subtitle.subtitle;
  ({ title, leading, trailing } = subtitle);
  const tmp = callback5();
  const tmp2 = callback6();
  let obj = { style: items };
  const items = [tmp.container, tmp2.container];
  obj = { style: tmp2.accessories };
  obj = { style: tmp2.item, children: leading };
  const items1 = [callback3(View, obj), callback3(View, { style: tmp2.item, children: trailing })];
  obj.children = items1;
  const items2 = [callback4(View, obj), ];
  const obj2 = { style: tmp.titles };
  const items3 = [callback3(Title, { children: title }), ];
  let tmp7 = null;
  if (null != subtitle) {
    const obj3 = { children: subtitle };
    tmp7 = callback3(Subtitle, obj3);
  }
  items3[1] = tmp7;
  obj2.children = items3;
  items2[1] = callback4(View, obj2);
  obj.children = items2;
  return callback4(View, obj);
}
function RedesignBottomSheetTitleHeaderComplex(subtitle) {
  let leading;
  let onTitleTextLayout;
  let title;
  let trailing;
  subtitle = subtitle.subtitle;
  ({ title, leading, trailing, onTitleTextLayout } = subtitle);
  const tmp = callback5();
  const tmp2 = callback7();
  let obj = callback(dependencyMap[7]);
  const result = (importDefault(dependencyMap[6])().width - 2 * obj.useToken(importDefault(dependencyMap[5]).modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL)) / 4;
  const tmp4 = callback2(React.useState(undefined), 2);
  const first = tmp4[0];
  let callback = tmp4[1];
  callback = React.useCallback((nativeEvent) => {
    const callback = nativeEvent.nativeEvent.layout.width;
    callback((arg0) => {
      let num = 0;
      if (null != arg0) {
        num = arg0;
      }
      return Math.max(num, width);
    });
  }, []);
  obj = { style: tmp.container };
  const items = [callback3(View, { style: { width: first } }), , , , ];
  obj = { style: tmp.titles };
  const items1 = [callback3(Title, { onTextLayout: onTitleTextLayout, lineClamp: 3, children: title }), ];
  let tmp11 = null;
  if (null != subtitle) {
    const obj1 = { children: subtitle };
    tmp11 = callback3(Subtitle, obj1);
  }
  items1[1] = tmp11;
  obj.children = items1;
  items[1] = closure_7(View, obj);
  items[2] = callback3(View, { style: { width: first } });
  const items2 = [, , ];
  ({ accessory: arr3[0], leading: arr3[1] } = tmp2);
  items2[2] = { maxWidth: result };
  items[3] = callback3(View, { onLayout: callback, style: items2, children: leading });
  const items3 = [, , ];
  ({ accessory: arr4[0], trailing: arr4[1] } = tmp2);
  items3[2] = { maxWidth: result };
  items[4] = callback3(View, { onLayout: callback, style: items3, children: trailing });
  obj.children = items;
  return closure_7(View, obj);
}
function Title(arg0) {
  let str = "redesign/heading-18/bold";
  if (importDefault(dependencyMap[8])("BottomSheetTitleHeader")) {
    str = "redesign/heading-18/semibold";
  }
  const obj = { variant: str, style: callback5().title };
  const merged = Object.assign(arg0);
  return callback3(arg1(dependencyMap[9]).Text, obj);
}
function Subtitle(children) {
  const tmp2 = importDefault(dependencyMap[8])("BottomSheetTitleHeader");
  let str = "text-default";
  if (tmp2) {
    str = "text-muted";
  }
  let str2 = "text-xs/medium";
  if (tmp2) {
    str2 = "text-sm/medium";
  }
  const obj = { variant: str2, color: str, lineClamp: 1, style: callback5().subtitle, children: children.children };
  return callback3(arg1(dependencyMap[9]).Text, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
let closure_8 = arg1(dependencyMap[4]).createStyles(() => {
  let obj = {};
  obj = { display: 80, flexDirection: 80, alignItems: null, borderBottomColor: "900d6a1aeefc6f4c571ad9d81203dc5c", paddingHorizontal: importDefault(dependencyMap[5]).modules.mobile.SHEET_HEADER_PADDING_HORIZONTAL };
  obj.container = obj;
  obj.titles = {};
  obj.subtitle = { textAlign: "center" };
  obj.title = { textAlign: "center" };
  return obj;
});
const obj = arg1(dependencyMap[4]);
let closure_9 = arg1(dependencyMap[4]).createStyles(() => ({ container: { flexDirection: "column" }, accessories: { "Bool(false)": false, "Bool(false)": 0 }, item: { flexShrink: 0 } }));
const obj2 = arg1(dependencyMap[4]);
let closure_10 = arg1(dependencyMap[4]).createStyles(() => {
  let obj = { accessory: {} };
  obj = { left: importDefault(dependencyMap[5]).space.PX_16, justifyContent: "flex-start" };
  obj.leading = obj;
  obj = { right: importDefault(dependencyMap[5]).space.PX_16, justifyContent: "flex-end" };
  obj.trailing = obj;
  return obj;
});
const obj3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("design/components/Sheet/native/BottomSheetTitleHeader.native.tsx");

export const BottomSheetTitleHeader = function BottomSheetTitleHeader(arg0) {
  let leading;
  let trailing;
  let merged = arg0;
  ({ leading, trailing } = arg0);
  const tmp2 = callback2(React.useState(false), 2);
  let closure_0 = tmp2[1];
  const tmp3 = importDefault(dependencyMap[10])("sheet");
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
  const tmp5 = callback3(RedesignBottomSheetTitleHeaderBase, obj);
  let tmp16 = tmp5;
  if (null != tmp3) {
    const obj1 = {};
    const obj2 = { position: "relative" };
    obj1.style = obj2;
    const items = [tmp5, tmp3];
    obj1.children = items;
    tmp16 = callback4(View, obj1);
  }
  return tmp16;
};
