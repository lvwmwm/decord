// Module ID: 12519
// Function ID: 12520
// Name: ConjureAppBuildRequestProjectsSheet
// Dependencies: [32, 19, 21, 5003, 587, 558, 576, 1633, 7280, 6932, 7019, 5301, 7330, 2]

// Module 12519 (ConjureAppBuildRequestProjectsSheet)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import BottomSheetModal from "BottomSheetModal" /* 5301 */;
import TableRowGroup2 from "TableRowGroup" /* 7019 */;
import ActionSheet2 from "ActionSheet" /* 7330 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5003 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles((arg0) => {
  const obj = { scrollContent: { paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 } };
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 + arg0 });
  return obj;
});
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureAppBuildRequestProjectsSheet(onChange) {
  let closure_3;
  let closure_4;
  let first;
  let maxSelected;
  let projects;
  let title;
  let tmp = maxSelected;
  let obj = maxSelected(first[6]);
  const cResult = obj.c(26);
  ({ title, projects, maxSelected } = onChange);
  onChange = onChange.onChange;
  const initialIds = onChange.initialIds;
  const bottom = onChange(first[7])().bottom;
  const tmp4 = closure_6(bottom);
  [first, _slicedToArray] = react.useState(initialIds);
  if (cResult[0] === maxSelected) {
    if (cResult[1] === onChange) {
      let tmp7;
      let tmp8;
      let tmp11;
      let tmp12;
      if (cResult[2] === first) {
        tmp7 = cResult[3];
      }
      react = tmp7;
      if (cResult[4] !== title) {
        cResult[4] = title;
        const tmp10 = jsx(tmp(first[8]).BottomSheetTitleHeader, { title });
        class T {
          constructor(label) {
            let serverName;
            let tmp3;
            const obj = {
              label: label.name,
              subLabel: serverName,
              checked: first.includes(label.projectId),
              disabled: tmp3,
              onPress() {
                return closure_4(label.projectId);
              }
            };
            serverName = label.serverName;
            const TableCheckboxRow = maxSelected(first[9]).TableCheckboxRow;
            const hasItem = first.includes(label.projectId);
            tmp3 = !hasItem;
            const arr = first;
            const tmp = jsx;
            if (tmp3) {
              tmp3 = arr.length >= label;
            }
            return tmp(TableCheckboxRow, obj, label.projectId);
          }
        }
        tmp8 = tmp10;
      } else {
        tmp8 = cResult[5];
      }
      const scrollContent = tmp4.scrollContent;
      if (cResult[6] !== bottom) {
        const obj3 = { bottom };
        cResult[6] = bottom;
        cResult[7] = obj3;
        tmp11 = obj3;
      } else {
        tmp11 = cResult[7];
      }
      if (cResult[8] === maxSelected) {
        if (cResult[9] === projects) {
          if (cResult[10] === first) {
            let tmp15;
            if (cResult[11] === tmp7) {
              tmp12 = cResult[12];
            }
            if (cResult[17] !== tmp12) {
              cResult[17] = tmp12;
              const tmp17 = jsx(tmp(first[10]).TableRowGroup, { hasIcons: false, children: tmp12 });
              class T {
                constructor(label) {
                  let serverName;
                  let tmp3;
                  const obj = {
                    label: label.name,
                    subLabel: serverName,
                    checked: first.includes(label.projectId),
                    disabled: tmp3,
                    onPress() {
                      return closure_4(label.projectId);
                    }
                  };
                  serverName = label.serverName;
                  const TableCheckboxRow = maxSelected(first[9]).TableCheckboxRow;
                  const hasItem = first.includes(label.projectId);
                  tmp3 = !hasItem;
                  const arr = first;
                  const tmp = jsx;
                  if (tmp3) {
                    tmp3 = arr.length >= label;
                  }
                  return tmp(TableCheckboxRow, obj, label.projectId);
                }
              }
              tmp15 = tmp17;
            } else {
              tmp15 = cResult[18];
            }
            if (cResult[19] === tmp4.scrollContent) {
              if (cResult[20] === tmp11) {
                let tmp18;
                if (cResult[21] === tmp15) {
                  tmp18 = cResult[22];
                }
                if (cResult[23] === tmp8) {
                  let tmp21;
                  if (cResult[24] === tmp18) {
                    tmp21 = cResult[25];
                  }
                  return tmp21;
                }
                const tmp23 = jsx(tmp(first[12]).ActionSheet, { scrollable: true, header: tmp8, children: tmp18 });
                class T {
                  constructor(label) {
                    let serverName;
                    let tmp3;
                    const obj = {
                      label: label.name,
                      subLabel: serverName,
                      checked: first.includes(label.projectId),
                      disabled: tmp3,
                      onPress() {
                        return closure_4(label.projectId);
                      }
                    };
                    serverName = label.serverName;
                    const TableCheckboxRow = maxSelected(first[9]).TableCheckboxRow;
                    const hasItem = first.includes(label.projectId);
                    tmp3 = !hasItem;
                    const arr = first;
                    const tmp = jsx;
                    if (tmp3) {
                      tmp3 = arr.length >= label;
                    }
                    return tmp(TableCheckboxRow, obj, label.projectId);
                  }
                }
                cResult[23] = tmp8;
                cResult[24] = tmp18;
                cResult[25] = tmp23;
                tmp21 = tmp23;
              }
            }
            class T {
              constructor(label) {
                let serverName;
                let tmp3;
                const obj = {
                  label: label.name,
                  subLabel: serverName,
                  checked: first.includes(label.projectId),
                  disabled: tmp3,
                  onPress() {
                    return closure_4(label.projectId);
                  }
                };
                serverName = label.serverName;
                const TableCheckboxRow = maxSelected(first[9]).TableCheckboxRow;
                const hasItem = first.includes(label.projectId);
                tmp3 = !hasItem;
                const arr = first;
                const tmp = jsx;
                if (tmp3) {
                  tmp3 = arr.length >= label;
                }
                return tmp(TableCheckboxRow, obj, label.projectId);
              }
            }
            const tmp20 = jsx(tmp(first[11]).BottomSheetScrollView, { contentContainerStyle: scrollContent, scrollIndicatorInsets: tmp11, children: null });
            cResult[19] = tmp4.scrollContent;
            cResult[20] = tmp11;
            cResult[21] = tmp15;
            cResult[22] = tmp20;
            tmp18 = tmp20;
          }
        }
      }
      if (cResult[13] === maxSelected) {
        if (cResult[14] === first) {
          let tmp13;
          if (cResult[15] === tmp7) {
            tmp13 = cResult[16];
          }
          const mapped = projects.map(tmp13);
          cResult[8] = maxSelected;
          cResult[9] = projects;
          class T {
            constructor(label) {
              let serverName;
              let tmp3;
              const obj = {
                label: label.name,
                subLabel: serverName,
                checked: first.includes(label.projectId),
                disabled: tmp3,
                onPress() {
                  return closure_4(label.projectId);
                }
              };
              serverName = label.serverName;
              const TableCheckboxRow = maxSelected(first[9]).TableCheckboxRow;
              const hasItem = first.includes(label.projectId);
              tmp3 = !hasItem;
              const arr = first;
              const tmp = jsx;
              if (tmp3) {
                tmp3 = arr.length >= label;
              }
              return tmp(TableCheckboxRow, obj, label.projectId);
            }
          }
          cResult[11] = tmp7;
          cResult[12] = mapped;
          tmp12 = mapped;
        }
      }
      class T {
        constructor(label) {
          let serverName;
          let tmp3;
          const obj = {
            label: label.name,
            subLabel: serverName,
            checked: first.includes(label.projectId),
            disabled: tmp3,
            onPress() {
              return closure_4(label.projectId);
            }
          };
          serverName = label.serverName;
          const TableCheckboxRow = maxSelected(first[9]).TableCheckboxRow;
          const hasItem = first.includes(label.projectId);
          tmp3 = !hasItem;
          const arr = first;
          const tmp = jsx;
          if (tmp3) {
            tmp3 = arr.length >= label;
          }
          return tmp(TableCheckboxRow, obj, label.projectId);
        }
      }
      cResult[13] = maxSelected;
      cResult[14] = first;
      cResult[15] = tmp7;
      cResult[16] = T;
      tmp13 = T;
    }
  }
  function toggle(arg0) {
    let found;
    let closure_0 = arg0;
    if (first.includes(arg0)) {
      found = arr.filter((item) => item !== closure_0);
    } else {
      const items = [];
      items[HermesBuiltin.arraySpread(items, first, 0)] = arg0;
      found = items.slice(0, maxSelected);
    }
    closure_3(found);
    onChange(found);
  }
  cResult[0] = maxSelected;
  cResult[1] = onChange;
  cResult[2] = first;
  cResult[3] = toggle;
  tmp7 = toggle;
}) : (function ConjureAppBuildRequestProjectsSheet(arg0) {
  let _undefined;
  let c2;
  let c3;
  let initialIds;
  let projects;
  let title;
  ({ projects, maxSelected: require, onChange: importDefault } = arg0);
  dependencyMap = undefined;
  _slicedToArray = undefined;
  ({ title, initialIds } = arg0);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let tmp = closure_6(bottom);
  [c2, c3] = _slicedToArray(react.useState(initialIds), 2);
  const tmp2 = _slicedToArray(react.useState(initialIds), 2);
  const ActionSheet = ActionSheet2.ActionSheet;
  const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  ({
    hasIcons: false,
    children: projects.map((label) => {
      let serverName;
      let tmp3;
      const obj = {
        label: label.name,
        subLabel: serverName,
        checked: _undefined.includes(label.projectId),
        disabled: tmp3,
        onPress() {
          let found;
          const projectId = label.projectId;
          if (c2.includes(projectId)) {
            found = arr.filter((item) => item !== projectId);
          } else {
            const items = [];
            items[HermesBuiltin.arraySpread(items, c2, 0)] = projectId;
            found = items.slice(0, require);
          }
          c3(found);
          importDefault(found);
        }
      };
      serverName = label.serverName;
      const TableCheckboxRow = require("TableCheckboxRow").TableCheckboxRow;
      const arr = _undefined;
      const hasItem = _undefined.includes(label.projectId);
      tmp3 = !hasItem;
      const tmp = jsx;
      if (tmp3) {
        tmp3 = arr.length >= label;
      }
      return tmp(TableCheckboxRow, obj, label.projectId);
    })
  });
  const TableRowGroup = TableRowGroup2.TableRowGroup;
  return <ActionSheet scrollable header={null}>{null}</ActionSheet>;
});
const result = size.fileFinishedImporting("modules/conjure/app_build_request/native/ConjureAppBuildRequestProjectsSheet.tsx");

export default tmp2;
