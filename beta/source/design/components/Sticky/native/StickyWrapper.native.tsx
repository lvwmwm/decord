// Module ID: 11652
// Function ID: 11653
// Name: StickyWrapper
// Dependencies: [19, 17, 21, 1365, 2]
// Exports: StickyWrapper

// Module 11652 (StickyWrapper)
import utils_PlatformUtils from "utils/PlatformUtils" /* 1365 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c2 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const wrapper = StyleSheet.create({ wrapper: { height: "100%", width: "100%" }, header: { zIndex: 1 }, androidHeader: { position: "absolute", top: 0, left: 0, right: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sticky/native/StickyWrapper.native.tsx");

export const StickyWrapper = function StickyWrapper(header) {
  header = header.header;
  const obj = { style: null, pointerEvents: header.pointerEvents, children: null };
  const items = [header.style, wrapper.wrapper];
  obj.style = items;
  let tmp5Result = null;
  if (null != header) {
    const items1 = [tmp3.header, ];
    let androidHeader;
    if (obj2.isAndroid()) {
      androidHeader = tmp3.androidHeader;
    }
    const obj3 = { style: null, children: null };
    items1[1] = androidHeader;
    obj3.style = items1;
    obj3.children = header;
    tmp5Result = React3(tmp2, obj3);
    obj2 = utils_PlatformUtils;
  }
  const items2 = [tmp5Result, header.children];
  obj.children = items2;
  return React4(React2, obj);
};
