// Module ID: 5499
// Function ID: 46906
// Name: SimpleActionSheet
// Dependencies: [31, 33, 5500, 5186, 5501, 5502, 2]

// Module 5499 (SimpleActionSheet)
import "result";
import jsxProd from "jsxProd";

let closure_2;
let closure_3;
const require = arg1;
class SimpleActionSheet {
  constructor(arg0) {
    ({ hideActionSheet, header, options } = global);
    tmp = jsxs;
    obj = {};
    tmp3Result = null != header;
    if (tmp3Result) {
      tmp4 = hideActionSheet;
      tmp5 = closure_1;
      num = 3;
      tmp3 = jsx;
      obj = {};
      ({ icon: obj2.leading, title: obj2.title, subtitle: obj2.subtitle } = header);
      tmp6 = null;
      if (null != header.onClose) {
        tmp7 = jsx;
        tmp8 = hideActionSheet;
        tmp9 = closure_1;
        num2 = 4;
        obj1 = {};
        obj1.onPress = header.onClose;
        tmp6 = jsx(require("ActionSheetCloseButton").ActionSheetCloseButton, obj1);
      }
      obj.trailing = tmp6;
      tmp3Result = tmp3(require("RedesignBottomSheetTitleHeaderBase").BottomSheetTitleHeader, obj);
    }
    items = [, ];
    items[0] = tmp3Result;
    obj2 = { hasIcons: global.hasIcons };
    obj2.children = options.map((arg0, arg1) => {
      let IconComponent;
      let closure_0;
      let icon;
      let isDestructive;
      let label;
      ({ icon, IconComponent, onPress: closure_0 } = arg0);
      ({ label, isDestructive } = arg0);
      if (null != icon) {
        let obj = { source: icon, IconComponent };
        const tmp = outer1_2(outer1_0(outer1_1[5]).ActionSheetRow.Icon, obj);
      }
      obj = { icon: tmp };
      let str = "default";
      if (isDestructive) {
        str = "danger";
      }
      obj.variant = str;
      obj.label = label;
      obj.onPress = function onPress() {
        outer1_0();
        callback();
      };
      return outer1_2(outer1_0(outer1_1[5]).ActionSheetRow, obj, arg1);
    });
    items[1] = jsx(require("ActionSheetRowIcon").ActionSheetRow.Group, obj2);
    obj.children = items;
    return tmp(require("ActionSheet").ActionSheet, obj);
  }
}
({ jsx: closure_2, jsxs: closure_3 } = jsxProd);
const result = require("ActionSheet").fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default SimpleActionSheet;
export { SimpleActionSheet };
