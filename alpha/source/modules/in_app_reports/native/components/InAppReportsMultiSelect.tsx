// Module ID: 13550
// Function ID: 13551
// Name: InAppReportsMultiSelect
// Dependencies: [32, 19, 17, 21, 5092, 587, 558, 576, 6176, 6264, 2]

// Module 13550 (InAppReportsMultiSelect)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6176 */;
import TableRowGroup2 from "TableRowGroup" /* 6264 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 };
let closure_5 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function MultiSelect(state) {
  let element;
  let onPress;
  let tmp = onPress;
  const obj = onPress(state[7]);
  const cResult = obj.c(12);
  ({ element, onPress } = state);
  const tmp2 = state;
  state = state.state;
  const tmp4 = closure_5();
  if (null != element) {
    if ("checkbox" === element.type) {
      let tmp5;
      const data = element.data;
      if (cResult[0] === data) {
        if (cResult[1] === onPress) {
          let tmp8;
          if (cResult[2] === state) {
            tmp5 = cResult[3];
          }
          if (cResult[7] !== tmp5) {
            const tmp10 = jsx(tmp(tmp2[9]).TableRowGroup, { hasIcons: false, children: tmp5 });
            cResult[7] = tmp5;
            cResult[8] = tmp10;
            tmp8 = tmp10;
          } else {
            tmp8 = cResult[8];
          }
          if (cResult[9] === tmp4.container) {
            let tmp11;
            if (cResult[10] === tmp8) {
              tmp11 = cResult[11];
            }
            return tmp11;
          }
          const tmp14 = <View style={tmp15}>{tmp8}</View>;
          cResult[9] = tmp4.container;
          cResult[10] = tmp8;
          cResult[11] = tmp14;
          tmp11 = tmp14;
        }
      }
      if (cResult[4] === onPress) {
        let tmp6;
        if (cResult[5] === state) {
          tmp6 = cResult[6];
        }
        const mapped = data.map(tmp6);
        cResult[0] = data;
        cResult[1] = onPress;
        cResult[2] = state;
        cResult[3] = mapped;
        tmp5 = mapped;
      }
      const fn = function v(arg0) {
        const tmp = _slicedToArray(arg0, 3);
        const first = tmp[0];
        let closure_1 = tmp3;
        return jsx(onPress(state[8]).TableCheckboxRow, {
          label: tmp[1],
          subLabel: tmp[2],
          onPress() {
            return onPress(first, closure_1);
          },
          checked: first in closure_1
        }, first);
      };
      cResult[4] = onPress;
      cResult[5] = state;
      cResult[6] = fn;
      tmp6 = fn;
    }
  }
  return null;
}) : (function MultiSelect(arg0) {
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
});
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsMultiSelect.tsx");

export default tmp3;
