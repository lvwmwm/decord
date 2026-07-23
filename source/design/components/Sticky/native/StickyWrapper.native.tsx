// Module ID: 10400
// Function ID: 80159
// Name: StickyWrapper
// Dependencies: [31, 27, 33, 478, 2]
// Exports: StickyWrapper

// Module 10400 (StickyWrapper)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let StyleSheet;
let closure_2;
let closure_3;
let closure_4;
const require = arg1;
({ StyleSheet, View: closure_2 } = get_ActivityIndicator);
({ jsx: closure_3, jsxs: closure_4 } = jsxProd);
const styles = StyleSheet.create({ wrapper: { height: "100%", width: "100%" }, header: { zIndex: 1 }, androidHeader: { position: "absolute", top: 0, left: 0, right: 0 } });
const result = require("jsxProd").fileFinishedImporting("design/components/Sticky/native/StickyWrapper.native.tsx");

export const StickyWrapper = function StickyWrapper(header) {
  header = header.header;
  let obj = { style: items, pointerEvents: header.pointerEvents };
  items = [header.style, closure_5.wrapper];
  let tmp4Result = null;
  if (null != header) {
    obj = {};
    const items1 = [closure_5.header, ];
    let androidHeader;
    if (obj3.isAndroid()) {
      androidHeader = closure_5.androidHeader;
    }
    items1[1] = androidHeader;
    obj.style = items1;
    obj.children = header;
    tmp4Result = closure_3(closure_2, obj);
    obj3 = require(478) /* isWindows */;
    const tmp4 = closure_3;
    const tmp5 = closure_2;
  }
  const items2 = [tmp4Result, header.children];
  obj.children = items2;
  return closure_4(closure_2, obj);
};
