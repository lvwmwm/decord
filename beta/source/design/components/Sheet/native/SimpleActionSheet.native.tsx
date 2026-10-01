// Module ID: 6617
// Function ID: 6618
// Name: SimpleActionSheet
// Dependencies: [19, 21, 6618, 6570, 6619, 6620, 2]

// Module 6617 (SimpleActionSheet)
import ActionSheet2 from "ActionSheet" /* 6618 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c2;
let c3;
let tmp2;
const BottomSheetTitleHeader2 = tmp2(6570);
const ActionSheetCloseButton = tmp2(6619);
const ActionSheetRow2 = tmp2(6620);
class SimpleActionSheet {
  constructor(hasIcons) {
    let header;
    let items;
    let options;
    let tmp5Result;
    ({ hideActionSheet: require, header, options } = hasIcons);
    hasIcons = hasIcons.hasIcons;
    let tmp = closure_3;
    let tmp5Result2 = null != header;
    const ActionSheet = ActionSheet2.ActionSheet;
    if (tmp5Result2) {
      let tmp5 = closure_2;
      let obj = { leading: null, title: null, subtitle: null, trailing: tmp5Result };
      ({ icon: obj.leading, title: obj.title, subtitle: obj.subtitle } = header);
      tmp5Result = null;
      const BottomSheetTitleHeader = BottomSheetTitleHeader2.BottomSheetTitleHeader;
      if (null != header.onClose) {
        let obj2 = { onPress: header.onClose };
        tmp5Result = tmp5(ActionSheetCloseButton.ActionSheetCloseButton, obj2);
      }
      tmp5Result2 = tmp5(BottomSheetTitleHeader, obj);
    }
    const obj3 = { children: items };
    items = [tmp5Result2, ];
    const obj4 = {
      hasIcons,
      children: options.map((item, index) => {
        let IconComponent;
        let closure_0;
        let icon;
        let isDestructive;
        let label;
        let str;
        let tmp;
        ({ icon, IconComponent, onPress: closure_0 } = item);
        ({ label, isDestructive } = item);
        if (null != icon) {
          const obj = { source: icon, IconComponent };
          tmp = closure_1_2(ActionSheetRow2.ActionSheetRow.Icon, obj);
        }
        const obj2 = {
          icon: tmp,
          variant: str,
          label,
          onPress() {
            require();
            closure_0();
          }
        };
        str = "default";
        const ActionSheetRow = ActionSheetRow2.ActionSheetRow;
        const tmp5 = closure_1_2;
        if (isDestructive) {
          str = "danger";
        }
        return tmp5(ActionSheetRow, obj2, index);
      })
    };
    const Group = ActionSheetRow2.ActionSheetRow.Group;
    items[1] = closure_2(Group, obj4);
    return tmp(ActionSheet, obj3);
  }
}
({ jsx: c2, jsxs: c3 } = Fragment);
const result = size.fileFinishedImporting("design/components/Sheet/native/SimpleActionSheet.native.tsx");

export default SimpleActionSheet;
export { SimpleActionSheet };
