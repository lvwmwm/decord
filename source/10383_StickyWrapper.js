// Module ID: 10383
// Function ID: 80062
// Name: StickyWrapper
// Dependencies: []
// Exports: StickyWrapper

// Module 10383 (StickyWrapper)
let StyleSheet;
importAll(dependencyMap[0]);
({ StyleSheet, View: closure_2 } = arg1(dependencyMap[1]));
const tmp3 = arg1(dependencyMap[1]);
({ jsx: closure_3, jsxs: closure_4 } = arg1(dependencyMap[2]));
const styles = StyleSheet.create({ wrapper: { <string:1140607356>: 30271555, <string:1751293292>: 22092032 }, header: { zIndex: 1 }, androidHeader: {} });
const tmp4 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("design/components/Sticky/native/StickyWrapper.native.tsx");

export const StickyWrapper = function StickyWrapper(header) {
  header = header.header;
  let obj = { style: items, pointerEvents: header.pointerEvents };
  const items = [header.style, closure_5.wrapper];
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
    const obj3 = arg1(dependencyMap[3]);
    const tmp4 = closure_3;
    const tmp5 = closure_2;
  }
  const items2 = [tmp4Result, header.children];
  obj.children = items2;
  return closure_4(closure_2, obj);
};
