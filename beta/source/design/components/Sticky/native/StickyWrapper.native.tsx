// Module ID: 10902
// Function ID: 10903
// Name: StickyWrapper
// Dependencies: [19, 17, 21, 1365, 2]
// Exports: StickyWrapper

// Module 10902 (StickyWrapper)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
let c3;
let closure_4;
({ StyleSheet, View: c2 } = react_native);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const wrapper = StyleSheet.create({ wrapper: { height: "100%", width: "100%" }, header: { zIndex: 1 }, androidHeader: { position: "absolute", top: 0, left: 0, right: 0 } });
const result = size.fileFinishedImporting("design/components/Sticky/native/StickyWrapper.native.tsx");

export const StickyWrapper = function StickyWrapper(header) {
  let items;
  let items2;
  header = header.header;
  const obj = { style: items, pointerEvents: header.pointerEvents, children: items2 };
  items = [header.style, wrapper.wrapper];
  let tmp5Result = null;
  const children = header.children;
  const tmp = React3;
  if (null != header) {
    const items1 = [wrapper.header, ];
    let androidHeader;
    const obj2 = utils_PlatformUtils;
    const tmp5 = _false;
    if (obj2.isAndroid()) {
      androidHeader = tmp3.androidHeader;
    }
    const obj3 = { style: items1, children: header };
    items1[1] = androidHeader;
    tmp5Result = tmp5(tmp2, obj3);
  }
  items2 = [tmp5Result, children];
  return tmp(React2, obj);
};
