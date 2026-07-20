// Module ID: 5495
// Function ID: 46825
// Name: SimpleActionSheet
// Dependencies: [16777237, 33554448, 33554448, 2046820352, 31, 27, 653]

// Module 5495 (SimpleActionSheet)
import ME from "ME";

class SimpleActionSheet {
  constructor(arg0) {
    ({ hideActionSheet: closure_0, header, options } = global);
    tmp = jsxs;
    obj = {};
    tmp3Result = null != header;
    if (tmp3Result) {
      tmp4 = arg1;
      tmp5 = dependencyMap;
      num = 3;
      tmp3 = jsx;
      obj = {};
      ({ icon: obj2.leading, title: obj2.title, subtitle: obj2.subtitle } = header);
      tmp6 = null;
      if (null != header.onClose) {
        tmp7 = jsx;
        tmp8 = arg1;
        tmp9 = dependencyMap;
        num2 = 4;
        obj1 = {};
        obj1.onPress = header.onClose;
        tmp6 = jsx(require("module_31").ActionSheetCloseButton, obj1);
      }
      obj.trailing = tmp6;
      tmp3Result = tmp3(arg1(dependencyMap[3]).BottomSheetTitleHeader, obj);
    }
    items = [, ];
    items[0] = tmp3Result;
    obj2 = { hasIcons: global.hasIcons };
    obj2.children = options.map((arg0, arg1) => {
      let IconComponent;
      let icon;
      let isDestructive;
      let label;
      ({ icon, IconComponent, onPress: closure_0 } = arg0);
      ({ label, isDestructive } = arg0);
      if (null != icon) {
        let obj = { source: icon, IconComponent };
        const tmp = callback2(callback(closure_1[5]).ActionSheetRow.Icon, obj);
      }
      obj = { icon: tmp };
      let str = "default";
      if (isDestructive) {
        str = "danger";
      }
      obj.variant = str;
      obj.label = label;
      obj.onPress = function onPress() {
        callback();
        callback();
      };
      return callback2(callback(closure_1[5]).ActionSheetRow, obj, arg1);
    });
    items[1] = jsx(require("get ActivityIndicator").ActionSheetRow.Group, obj2);
    obj.children = items;
    return tmp(arg1(dependencyMap[2]).ActionSheet, obj);
  }
}
importAll(dependencyMap[0]);
({ jsx: closure_2, jsxs: closure_3 } = arg1(dependencyMap[1]));
const result = ME.fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default SimpleActionSheet;
export { SimpleActionSheet };
