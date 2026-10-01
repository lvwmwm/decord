// Module ID: 12480
// Function ID: 12481
// Name: InAppReportsBottomButton
// Dependencies: [19, 17, 1085, 21, 4836, 576, 1115, 2619, 4832, 5281, 1177, 2]
// Exports: default

// Module 12480 (InAppReportsBottomButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl6 from "intl" /* 1115 */;
import _modDef2619 from "module_2619" /* 2619 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 0, alignSelf: "stretch", paddingBottom: 12 }, paddingHorizontal: { paddingHorizontal: 16 }, divider: obj2, descriptionText: { lineHeight: 16, textAlign: "center", marginBottom: 12 }, errorText: obj3 };
obj2 = { height: 1, alignSelf: "stretch", backgroundColor: nativeDefault.colors.BORDER_SUBTLE, marginBottom: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.unsafe_rawColors.RED_400, fontSize: 12, lineHeight: 16, fontFamily: Fonts.PRIMARY_SEMIBOLD, textAlign: "center", marginTop: 12 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBottomButton.tsx");

export default function InAppReportsBottomButton(button) {
  let closure_129_1;
  let disabled;
  let hasError;
  let isModeratorReport;
  let items;
  let items1;
  button = button.button;
  ({ onPress: closure_129_1, isModeratorReport } = button);
  ({ disabled, hasError } = button);
  const tmp = closure_6();
  if (null == button) {
    return null;
  } else {
    let str2;
    let stringResult2;
    let string2Result;
    const string3 = intl6.intl.string;
    if ("submit" === button.type) {
      let stringResult;
      const intl2 = tmp15(1115).intl;
      const string = intl2.string;
      if (isModeratorReport) {
        stringResult = string(_modDef2619.ZUyreS);
      } else {
        const stringResult1 = string(intl6.t["G+vU89"]);
        const intl3 = tmp15(1115).intl;
        stringResult = stringResult1;
        intl3.format(intl6.t.Q0tSKT, {});
      }
      str2 = "destructive";
      stringResult2 = stringResult;
    } else if ("next" === button.type) {
      const intl = tmp15(1115).intl;
      stringResult2 = intl.string(tmp15(1115).t.PDTjLN);
    } else {
      stringResult2 = tmp17;
      if ("cancel" === button.type) {
        const intl5 = tmp15(1115).intl;
        stringResult2 = intl5.string(tmp15(1115).t["ETE/oC"]);
        str2 = "secondary";
      }
    }
    const intl4 = tmp15(1115).intl;
    const string2 = intl4.string;
    if (isModeratorReport) {
      string2Result = string2(_modDef2619.psKFdJ);
    } else {
      string2Result = string2(tmp15(1115).t.h6D8Vy);
    }
    const obj = { style: tmp.container, children: items };
    const obj2 = { style: tmp.divider };
    items = [React3(View, obj2), ];
    let tmp12Result = null;
    const obj3 = { style: tmp.paddingHorizontal, children: items1 };
    if (null != tmp3) {
      const obj4 = { style: tmp.descriptionText, variant: "text-xs/medium", color: "text-default", children: tmp3 };
      tmp12Result = tmp12(tmp15(4832).Text, obj4);
    }
    items1 = [tmp12Result, , ];
    const obj5 = {
      disabled,
      onPress() {
          return closure_1_1(button);
        },
      text: stringResult2,
      variant: str2
    };
    items1[1] = React3(components_Button_Button.Button, obj5);
    let tmp12Result2 = null;
    if (hasError) {
      const obj6 = { style: tmp.errorText, children: string2Result };
      tmp12Result2 = tmp12(tmp15(1177).LegacyText, obj6);
    }
    items1[2] = tmp12Result2;
    items[1] = hasOwnProperty(View, obj3);
    return hasOwnProperty(View, obj);
  }
};
