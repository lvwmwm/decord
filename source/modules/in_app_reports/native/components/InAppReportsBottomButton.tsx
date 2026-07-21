// Module ID: 12227
// Function ID: 93827
// Name: InAppReportsBottomButton
// Dependencies: []
// Exports: default

// Module 12227 (InAppReportsBottomButton)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = { container: {}, paddingHorizontal: { paddingHorizontal: 16 } };
obj = { 9223372036854775807: null, 0: null, 0: null, -9223372036854775808: -16, backgroundColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE };
obj.divider = obj;
obj.descriptionText = {};
const tmp3 = arg1(dependencyMap[3]);
obj.errorText = { color: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400, fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD };
let closure_6 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[5]).unsafe_rawColors.RED_400, fontFamily: arg1(dependencyMap[2]).Fonts.PRIMARY_SEMIBOLD };
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsBottomButton.tsx");

export default function InAppReportsBottomButton(button) {
  let disabled;
  let hasError;
  let isModeratorReport;
  button = button.button;
  const arg1 = button;
  ({ onPress: closure_1, isModeratorReport } = button);
  ({ disabled, hasError } = button);
  const tmp = callback2();
  if (null == button) {
    return null;
  } else {
    const string3 = arg1(dependencyMap[6]).intl.string;
    if ("submit" === button.type) {
      const intl2 = arg1(dependencyMap[6]).intl;
      const string = intl2.string;
      if (isModeratorReport) {
        let stringResult = string(importDefault(tmp7[7]).ZUyreS);
      } else {
        stringResult = string(tmp6(tmp7[6]).t.G+vU89);
        const intl3 = tmp6(tmp7[6]).intl;
        const formatResult = intl3.format(tmp6(tmp7[6]).t.Q0tSKT, {});
      }
    } else {
      if ("next" === button.type) {
        const intl = arg1(dependencyMap[6]).intl;
        let stringResult1 = intl.string(arg1(dependencyMap[6]).t.PDTjLN);
      } else {
        stringResult1 = tmp33;
        if ("cancel" === button.type) {
          const intl5 = arg1(dependencyMap[6]).intl;
          stringResult1 = intl5.string(arg1(dependencyMap[6]).t.ETE/oC);
        }
      }
      const intl4 = arg1(dependencyMap[6]).intl;
      const string2 = intl4.string;
      if (isModeratorReport) {
        let string2Result = string2(importDefault(tmp14[7]).psKFdJ);
      } else {
        string2Result = string2(arg1(tmp14[6]).t.h6D8Vy);
      }
      let obj = { style: tmp.container };
      obj = { style: tmp.divider };
      const items = [callback(View, obj), ];
      obj = { style: tmp.paddingHorizontal };
      let tmp20 = null;
      if (null != tmp2) {
        const obj1 = { style: tmp.descriptionText, children: tmp2 };
        tmp20 = callback(arg1(dependencyMap[8]).Text, obj1);
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
      items1[1] = callback(arg1(dependencyMap[9]).Button, obj2);
      let tmp27 = null;
      if (hasError) {
        const obj3 = { style: tmp.errorText, children: string2Result };
        tmp27 = callback(arg1(dependencyMap[10]).LegacyText, obj3);
      }
      items1[2] = tmp27;
      obj.children = items1;
      items[1] = closure_5(View, obj);
      obj.children = items;
      return closure_5(View, obj);
    }
  }
};
