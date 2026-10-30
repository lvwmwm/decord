// Module ID: 15131
// Function ID: 15132
// Name: InAppReportsMultiSelect
// Dependencies: [19, 17, 21, 5009, 575, 7054, 6968, 2]
// Exports: default

// Module 15131 (InAppReportsMultiSelect)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6968 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { container: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
let closure_4 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

export default function MultiSelect(arg0) {
  let element;
  ({ element, onPress: require, state: dependencyMap } = arg0);
  if (null != element) {
    if ("checkbox" === element.type) {
      const data = element.data;
      const tmp2 = jsx;
      const tmp3 = View;
      ({
        hasIcons: false,
        children: data.map((item) => {
              let tmp;
              let tmp2;
              let tmp3;
              [tmp, tmp2, tmp3] = item;
              return jsx(TableCheckboxRow.TableCheckboxRow, {
                label: tmp2,
                subLabel: tmp3,
                onPress() {
                  return require(closure_1_0, closure_1_1);
                },
                checked: tmp in dependencyMap
              }, tmp);
            })
      });
      const TableRowGroup = TableRowGroup2.TableRowGroup;
      return <View style={tmp.container}>{null}</View>;
    }
  }
  return null;
};
