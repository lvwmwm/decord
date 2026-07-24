// Module ID: 12373
// Function ID: 96258
// Name: InAppReportsBottomButton
// Dependencies: [31, 27, 482, 33, 4130, 689, 1212, 2298, 4126, 4543, 1273, 2]
// Exports: default

// Module 12373 (InAppReportsBottomButton)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 0, alignSelf: "stretch", paddingBottom: 12 }, paddingHorizontal: { paddingHorizontal: 16 } };
_createForOfIteratorHelperLoose = { height: 1, alignSelf: "stretch", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, marginBottom: 16 };
_createForOfIteratorHelperLoose.divider = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.descriptionText = { lineHeight: 16, textAlign: "center", marginBottom: 12 };
let obj1 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, fontSize: 12, lineHeight: 16, fontFamily: require("sum").Fonts.PRIMARY_SEMIBOLD, textAlign: "center", marginTop: 12 };
_createForOfIteratorHelperLoose.errorText = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("sum").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBottomButton.tsx");

export default function InAppReportsBottomButton(button) {
  let disabled;
  let hasError;
  let importDefault;
  let isModeratorReport;
  button = button.button;
  ({ onPress: importDefault, isModeratorReport } = button);
  ({ disabled, hasError } = button);
  const tmp = _createForOfIteratorHelperLoose();
  if (null == button) {
    return null;
  } else {
    const string3 = button(1212).intl.string;
    if ("submit" === button.type) {
      const intl2 = button(1212).intl;
      const string = intl2.string;
      if (isModeratorReport) {
        let stringResult = string(importDefault(2298).ZUyreS);
      } else {
        stringResult = string(tmp6(1212).t["G+vU89"]);
        const intl3 = tmp6(1212).intl;
        const formatResult = intl3.format(tmp6(1212).t.Q0tSKT, {});
      }
    } else {
      if ("next" === button.type) {
        const intl = button(1212).intl;
        let stringResult1 = intl.string(button(1212).t.PDTjLN);
      } else {
        stringResult1 = tmp33;
        if ("cancel" === button.type) {
          const intl5 = button(1212).intl;
          stringResult1 = intl5.string(button(1212).t["ETE/oC"]);
        }
      }
      const intl4 = button(1212).intl;
      const string2 = intl4.string;
      if (isModeratorReport) {
        let string2Result = string2(importDefault(2298).psKFdJ);
      } else {
        string2Result = string2(button(1212).t.h6D8Vy);
      }
      let obj = { style: tmp.container };
      obj = { style: tmp.divider };
      const items = [callback(View, obj), ];
      obj = { style: tmp.paddingHorizontal };
      let tmp20 = null;
      if (null != tmp2) {
        const obj1 = { style: tmp.descriptionText, variant: "text-xs/medium", color: "text-default", children: tmp2 };
        tmp20 = callback(button(4126).Text, obj1);
      }
      const items1 = [tmp20, , ];
      const obj2 = {
        disabled,
        onPress() {
              return callback(button);
            },
        text: stringResult1,
        variant: str2
      };
      items1[1] = callback(button(4543).Button, obj2);
      let tmp27 = null;
      if (hasError) {
        const obj3 = { style: tmp.errorText, children: string2Result };
        tmp27 = callback(button(1273).LegacyText, obj3);
      }
      items1[2] = tmp27;
      obj.children = items1;
      items[1] = closure_5(View, obj);
      obj.children = items;
      return closure_5(View, obj);
    }
  }
};
