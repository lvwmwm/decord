// Module ID: 12342
// Function ID: 96004
// Name: MultiSelect
// Dependencies: [31, 27, 33, 4130, 689, 5503, 9094, 2]
// Exports: default

// Module 12342 (MultiSelect)
import "result";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

export default function MultiSelect(arg0) {
  let dependencyMap;
  let element;
  let require;
  ({ element, onPress: require, state: dependencyMap } = arg0);
  if (null != element) {
    if ("checkbox" === element.type) {
      const data = element.data;
      let obj = { style: tmp.container };
      obj = {
        hasIcons: false,
        children: data.map((arg0) => {
              let tmp;
              let tmp2;
              let tmp3;
              [tmp, tmp2, tmp3] = arg0;
              return outer1_3(outer1_0(outer1_1[6]).TableCheckboxRow, {
                label: tmp2,
                subLabel: tmp3,
                onPress() {
                  return outer1_0(closure_0, closure_1);
                },
                checked: tmp in closure_1
              }, tmp);
            })
      };
      obj.children = jsx(require(5503) /* TableRowGroupTitle */.TableRowGroup, {
        hasIcons: false,
        children: data.map((arg0) => {
              let tmp;
              let tmp2;
              let tmp3;
              [tmp, tmp2, tmp3] = arg0;
              return outer1_3(outer1_0(outer1_1[6]).TableCheckboxRow, {
                label: tmp2,
                subLabel: tmp3,
                onPress() {
                  return outer1_0(closure_0, closure_1);
                },
                checked: tmp in closure_1
              }, tmp);
            })
      });
      return <View hasIcons={false}>{data.map((arg0) => {
        let tmp;
        let tmp2;
        let tmp3;
        [tmp, tmp2, tmp3] = arg0;
        return outer1_3(outer1_0(outer1_1[6]).TableCheckboxRow, {
          label: tmp2,
          subLabel: tmp3,
          onPress() {
            return outer1_0(closure_0, closure_1);
          },
          checked: tmp in closure_1
        }, tmp);
      })}</View>;
    }
  }
  return null;
};
