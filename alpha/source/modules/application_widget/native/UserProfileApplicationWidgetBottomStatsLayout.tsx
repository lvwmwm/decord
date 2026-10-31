// Module ID: 12208
// Function ID: 12209
// Name: UserProfileApplicationWidgetBottomStatsLayout
// Dependencies: [19, 17, 21, 5014, 575, 12117, 12203, 5624, 12204, 2]
// Exports: default

// Module 12208 (UserProfileApplicationWidgetBottomStatsLayout)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _mod12117 from "module_12117" /* 12117 */;
import UserProfileApplicationWidgetFieldUtils from "UserProfileApplicationWidgetFieldUtils" /* 12203 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let createStyles = createStyles_mod;
let obj = { statsGrid: obj2, stat: obj3 };
obj2 = { flexDirection: "row", flexWrap: "wrap", rowGap: nativeDefault.space.PX_16, columnGap: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { width: "47%", gap: nativeDefault.space.PX_4 };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/application_widget/native/UserProfileApplicationWidgetBottomStatsLayout.tsx");

export default function UserProfileApplicationWidgetBottomStatsLayout(arg0) {
  let components;
  ({ bottomConfig: require, resolveFieldValue: dependencyMap, numberFormat: View } = arg0);
  let tmp = closure_5();
  const stat = tmp;
  let items = [1, 2, 3, 4, 5, 6];
  const mapped = items.map((item) => {
    const resolveStatComponentValues = _mod12117.resolveStatComponentValues;
    _mod12117;
    return resolveStatComponentValues(require.components["stat_" + item], dependencyMap, View, UserProfileApplicationWidgetFieldUtils.formatDurationNarrow, true);
  });
  let obj = {
    style: tmp.statsGrid,
    children: mapped.map((value, index) => {
      let items;
      let tmp = null != value;
      if (tmp) {
        let tmp5Result;
        const obj = { style: stat.stat, children: items };
        const obj2 = { field: value.value, variant: "text-sm/medium", color: "text-default", skeletonWidthChars: 8 };
        items = [_false(UserProfileApplicationWidgetFieldUtils.FieldText, obj2), ];
        const tmp2 = React3;
        const tmp3 = View;
        if ("value" === value.label.status) {
          const obj3 = { variant: "text-xs/normal", color: "text-muted", children: value.label.text };
          tmp5Result = tmp5(tmp6(5624).Text, obj3);
        } else {
          tmp5Result = null;
          if ("skeleton" === value.label.status) {
            tmp5Result = tmp5(tmp6(12204).TextSkeleton, { variant: "text-xs/normal", widthChars: 6 });
          }
        }
        items[1] = tmp5Result;
        tmp = tmp2(tmp3, obj, index);
      }
      return tmp;
    })
  };
  return stat(View, obj);
};
