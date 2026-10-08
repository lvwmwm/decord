// Module ID: 15688
// Function ID: 15689
// Name: DevToolsBuildOverrideScreen
// Dependencies: [32, 19, 17, 10460, 21, 5090, 587, 9041, 15689, 558, 576, 6656, 11395, 504, 6267, 6184, 5043, 6872, 4765, 15055, 5047, 6264, 6265, 6283, 1387, 5375, 5373, 2]

// Module 15688 (DevToolsBuildOverrideScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import GlobalUtils from "GlobalUtils" /* 1387 */;
import ToastUtils from "ToastUtils" /* 4765 */;
import ClipboardUtils from "ClipboardUtils" /* 6872 */;
import TagIcon from "TagIcon" /* 9041 */;
import build_overrides_BuildOverrideUtils from "build_overrides/BuildOverrideUtils" /* 11395 */;
import HashmarkIcon from "HashmarkIcon" /* 15689 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import BuildOverrideStore from "BuildOverrideStore" /* 10460 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const jsxs = Fragment.jsxs;
let createStyles = createStyles_mod;
let obj = { content: obj2, contentContainer: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_16 };
let closure_9 = createStyles(obj);
let items = [{ label: "Branch Name", value: "branch", icon: jsx(TagIcon.TagIcon, {}) }, ];
const obj4 = { label: "Branch Name", value: "branch", icon: jsx(TagIcon.TagIcon, {}) };
let obj5 = { label: "Commit SHA", value: "id", icon: jsx(HashmarkIcon.HashmarkIcon, {}) };
items[1] = obj5;
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsBuildOverride() {
  let closure_2;
  let currentBuildOverride;
  let first;
  let first1;
  let stateFromStores;
  let tmp10;
  let tmp13;
  let tmp6;
  let tmp7;
  let tmp = stateFromStores;
  let obj = stateFromStores(576);
  const cResult = obj.c(47);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const insets = first1(6656)(first).insets;
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    items = [BuildOverrideStore];
    class C {
      constructor() {
        const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
        let tmp;
        if (overrides != null) {
          tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
        }
        return tmp;
      }
    }
    cResult[1] = items;
    cResult[2] = C;
    tmp7 = C;
    tmp6 = items;
  } else {
    tmp6 = cResult[1];
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { type: "branch", id: "" };
    cResult[3] = obj3;
    class C {
      constructor() {
        const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
        let tmp;
        if (overrides != null) {
          tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
        }
        return tmp;
      }
    }
  } else {
    tmp10 = cResult[3];
  }
  [first1, dependencyMap] = react.useState(tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    function getLabel(arg0) {
      let closure_0 = arg0;
      const found = items.find((value) => value.value === type.type);
      let label;
      if (found != null) {
        label = found.label;
      }
      return label;
    }
    cResult[4] = getLabel;
    class C {
      constructor() {
        const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
        let tmp;
        if (overrides != null) {
          tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
        }
        return tmp;
      }
    }
  } else {
    tmp13 = cResult[4];
  }
  const sum = tmp4.contentContainer.padding + insets.bottom;
  if (cResult[5] === tmp4.contentContainer) {
    let tmp24;
    if (cResult[8] !== stateFromStores) {
      let tmp18 = null;
      if (null != stateFromStores) {
        class C {
          constructor() {
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let tmp;
            if (overrides != null) {
              tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
            }
            return tmp;
          }
        }
        const TableRow = tmp(6184).TableRow;
        const items1 = [
          <TableRow icon={null} label={tmp13(stateFromStores)} subLabel={stateFromStores.id} onPress={function onPress() {
                  const obj = ClipboardUtils;
                  obj.copy(stateFromStores.id);
                  const obj2 = ToastUtils;
                  const result = obj2.presentCopiedToClipboard();
                }} />,
  ,

        ];
        const TableRow2 = tmp(6184).TableRow;
        items1[1] = <TableRow2 icon={null} label="Refresh Override" onPress={tmp(11395).refreshBuildOverride} arrow />;
        const TableRow3 = tmp(6184).TableRow;
        items1[2] = <TableRow3 icon={null} label="Clear Override" variant="danger" onPress={tmp(11395).clearBuildOverride} arrow />;
        tmp18 = <tmp20 title="Current Override" hasIcons>{items1}</tmp20>;
      }
      class C {
        constructor() {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let tmp;
          if (overrides != null) {
            tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
          }
          return tmp;
        }
      }
      cResult[9] = tmp18;
    }
    class C {
      constructor() {
        const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
        let tmp;
        if (overrides != null) {
          tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
        }
        return tmp;
      }
    }
    let str = "";
    if (null != stateFromStores) {
      str = "New";
    }
    const _Symbol = Symbol;
    let type = first1.type;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(type) {
          const obj = { type, id: "" };
          closure_2(obj);
        }
      }
      cResult[10] = P;
      class C {
        constructor() {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let tmp;
          if (overrides != null) {
            tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
          }
          return tmp;
        }
      }
    } else {
      class P {
        constructor(type) {
          const obj = { type, id: "" };
          closure_2(obj);
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor(type) {
          const obj = { type, id: "" };
          closure_2(obj);
        }
      }
      const mapped = items.map((value) => {
        let icon;
        let label;
        value = value.value;
        ({ icon, label } = value);
        return jsx(stateFromStores(closure_2[21]).TableRadioRow, { value, label, icon }, value);
      });
      class C {
        constructor() {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let tmp;
          if (overrides != null) {
            tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
          }
          return tmp;
        }
      }
      tmp24 = mapped;
    } else {
      class P {
        constructor(type) {
          const obj = { type, id: "" };
          closure_2(obj);
        }
      }
    }
    const text = `${str} Override Type`;
    if (cResult[12] === first1.type) {
      class P {
        constructor(type) {
          const obj = { type, id: "" };
          closure_2(obj);
        }
      }
      if (cResult[15] !== first1) {
        class P {
          constructor(type) {
            const obj = { type, id: "" };
            closure_2(obj);
          }
        }
        cResult[15] = first1;
        class C {
          constructor() {
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let tmp;
            if (overrides != null) {
              tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
            }
            return tmp;
          }
        }
        cResult[16] = tmp31;
      } else {
        class P {
          constructor(type) {
            const obj = { type, id: "" };
            closure_2(obj);
          }
        }
      }
      if (cResult[17] !== first1.type) {
        class P {
          constructor(type) {
            const obj = { type, id: "" };
            closure_2(obj);
          }
        }
        let found = items.find((value) => value.value === first1.type);
        class C {
          constructor() {
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let tmp;
            if (overrides != null) {
              tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
            }
            return tmp;
          }
        }
        cResult[17] = first1.type;
        cResult[18] = undefined;
      } else {
        class P {
          constructor(type) {
            const obj = { type, id: "" };
            closure_2(obj);
          }
        }
      }
      class C {
        constructor() {
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let tmp;
          if (overrides != null) {
            tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
          }
          return tmp;
        }
      }
      const _HermesInternal = HermesInternal;
      const combined = "Enter " + tmp35;
      if (cResult[21] !== first1) {
        class H {
          constructor(id) {
            const obj = { id };
            const merged = Object.assign(first1);
            closure_2(obj);
          }
        }
        cResult[21] = first1;
        class C {
          constructor() {
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let tmp;
            if (overrides != null) {
              tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
            }
            return tmp;
          }
        }
        cResult[22] = H;
      } else {
        class H {
          constructor(id) {
            const obj = { id };
            const merged = Object.assign(first1);
            closure_2(obj);
          }
        }
      }
      if (cResult[23] === combined) {
        class H {
          constructor(id) {
            const obj = { id };
            const merged = Object.assign(first1);
            closure_2(obj);
          }
        }
        if (cResult[26] === tmp32) {
          class H {
            constructor(id) {
              const obj = { id };
              const merged = Object.assign(first1);
              closure_2(obj);
            }
          }
          if (cResult[29] === tmp30) {
            class H {
              constructor(id) {
                const obj = { id };
                const merged = Object.assign(first1);
                closure_2(obj);
              }
            }
            if (cResult[32] === first1.id) {
              class H {
                constructor(id) {
                  const obj = { id };
                  const merged = Object.assign(first1);
                  closure_2(obj);
                }
              }
              class M {
                constructor() {
                  const type = first1.type;
                  if ("branch" === type) {
                    const obj3 = build_overrides_BuildOverrideUtils;
                    const result = obj3.setBuildOverrideForBranch(tmp.id);
                  } else if ("id" === type) {
                    const obj2 = build_overrides_BuildOverrideUtils;
                    const result1 = obj2.setBuildOverrideForId(tmp.id);
                  } else {
                    const obj = GlobalUtils;
                    obj.assertNever(first1.type);
                  }
                }
              }
              class C {
                constructor() {
                  const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                  let tmp;
                  if (overrides != null) {
                    tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                  }
                  return tmp;
                }
              }
              cResult[35] = "" === tmp47;
              cResult[36] = tmp48;
              cResult[37] = jsx(tmp(5375).Button, { text: "Apply Build Override", disabled: "" === tmp47, onPress: tmp48 });
              const tmp51 = jsx(tmp(5375).Button, { text: "Apply Build Override", disabled: "" === tmp47, onPress: tmp48 });
            }
            class M {
              constructor() {
                const type = first1.type;
                if ("branch" === type) {
                  const obj3 = build_overrides_BuildOverrideUtils;
                  const result = obj3.setBuildOverrideForBranch(tmp.id);
                } else if ("id" === type) {
                  const obj2 = build_overrides_BuildOverrideUtils;
                  const result1 = obj2.setBuildOverrideForId(tmp.id);
                } else {
                  const obj = GlobalUtils;
                  obj.assertNever(first1.type);
                }
              }
            }
            class C {
              constructor() {
                const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
                let tmp;
                if (overrides != null) {
                  tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
                }
                return tmp;
              }
            }
            cResult[32] = first1.id;
            cResult[33] = first1.type;
            cResult[34] = M;
          }
          class C {
            constructor() {
              const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
              let tmp;
              if (overrides != null) {
                tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
              }
              return tmp;
            }
          }
          tmp45[0] = tmp30;
          tmp45[2] = tmp41;
          cResult[29] = tmp30;
          cResult[30] = tmp41;
          cResult[31] = jsx(tmp(6267).TableRowGroup, tmp45);
          const tmp46 = jsx(tmp(6267).TableRowGroup, tmp45);
        }
        class C {
          constructor() {
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let tmp;
            if (overrides != null) {
              tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
            }
            return tmp;
          }
        }
        tmp42[0] = tmp32;
        tmp42[1] = tmp38;
        cResult[26] = tmp32;
        cResult[27] = tmp38;
        cResult[28] = jsx(tmp(6184).TableRow, tmp42);
        const tmp43 = jsx(tmp(6184).TableRow, tmp42);
      }
      cResult[23] = combined;
      cResult[24] = tmp37;
      cResult[25] = jsx(tmp(6283).TextInput, { size: "md", placeholder: combined, onChange: tmp37, autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true });
      const tmp40 = jsx(tmp(6283).TextInput, { size: "md", placeholder: combined, onChange: tmp37, autoCapitalize: "none", autoCorrect: false, autoComplete: "off", clearable: true });
    }
    cResult[12] = first1.type;
    cResult[13] = text;
    cResult[14] = jsx(tmp(6265).TableRadioGroup, { title: text, defaultValue: type, onChange: tmp23, hasIcons: true, children: tmp24 });
    const tmp29 = jsx(tmp(6265).TableRadioGroup, { title: text, defaultValue: type, onChange: tmp23, hasIcons: true, children: tmp24 });
  }
  const obj11 = { paddingBottom: sum };
  let merged = Object.assign(tmp4.contentContainer);
  cResult[5] = tmp4.contentContainer;
  cResult[6] = sum;
  cResult[7] = obj11;
}) : (function UserSettingsBuildOverride() {
  let closure_2;
  let currentBuildOverride;
  let first;
  let items1;
  let stateFromStores;
  const f146378 = (value) => value.value === first.type;
  let tmp = closure_9();
  const insets = first(6656)({ includeKeyboardHeight: true }).insets;
  let obj = stateFromStores(504);
  items = [BuildOverrideStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
    let tmp;
    if (overrides != null) {
      tmp = overrides[stateFromStores(undefined, closure_2[12]).DEVICE_FIELD];
    }
    return tmp;
  });
  [first, dependencyMap] = react.useState({ type: "branch", id: "" });
  let obj3 = { paddingBottom: tmp.contentContainer.padding + insets.bottom };
  let merged = Object.assign(tmp.contentContainer);
  let tmp10Result = null;
  const Stack = stateFromStores(5373).Stack;
  if (null != stateFromStores) {
    const TableRowGroup = tmp3(6267).TableRowGroup;
    const TableRow = tmp3(6184).TableRow;
    const found = items.find(f146378);
    let label;
    if (found != null) {
      label = found.label;
    }
    const obj5 = { title: "Current Override", hasIcons: true, children: items1 };
    items1 = [
      <TableRow icon={null} label={label} subLabel={stateFromStores.id} onPress={function onPress() {
          const obj = ClipboardUtils;
          obj.copy(stateFromStores.id);
          const obj2 = ToastUtils;
          const result = obj2.presentCopiedToClipboard();
        }} />,
  ,

    ];
    const TableRow2 = tmp3(6184).TableRow;
    items1[1] = <TableRow2 icon={null} label="Refresh Override" onPress={stateFromStores(11395).refreshBuildOverride} arrow />;
    const TableRow3 = tmp3(6184).TableRow;
    items1[2] = <TableRow3 icon={null} label="Clear Override" variant="danger" onPress={stateFromStores(11395).clearBuildOverride} arrow />;
    tmp10Result = tmp10(TableRowGroup, obj5);
  }
  const items2 = [tmp10Result, , , ];
  let str = "";
  const TableRadioGroup = tmp3(6265).TableRadioGroup;
  if (null != stateFromStores) {
    str = "New";
  }
  items2[1] = <TableRadioGroup title={`${str} Override Type`} defaultValue={first.type} onChange={function onChange(type) {
    const obj = { type, id: "" };
    closure_2(obj);
  }} hasIcons>{items.map((value) => {
    let icon;
    let label;
    value = value.value;
    ({ icon, label } = value);
    return jsx(stateFromStores(closure_2[21]).TableRadioRow, { value, label, icon }, value);
  })}</TableRadioGroup>;
  const TableRowGroup2 = tmp3(6267).TableRowGroup;
  const found1 = items.find(f146378);
  let label1;
  if (found1 != null) {
    label1 = found1.label;
  }
  const TableRow4 = tmp3(6184).TableRow;
  const found2 = arr4.find((value) => value.value === first.type);
  let icon;
  if (found2 != null) {
    icon = found2.icon;
  }
  const TextInput = tmp3(6283).TextInput;
  const found3 = arr4.find(f146378);
  let label2;
  if (found3 != null) {
    label2 = found3.label;
  }
  ({
    size: "md",
    placeholder: "Enter " + label2,
    onChange(id) {
      const obj = { id };
      const merged = Object.assign(first);
      closure_2(obj);
    },
    autoCapitalize: "none",
    autoCorrect: false,
    autoComplete: "off",
    clearable: true
  });
  items2[2] = <TableRowGroup2 title={label1} hasIcons>{null}</TableRowGroup2>;
  items2[3] = jsx(stateFromStores(5375).Button, {
    text: "Apply Build Override",
    disabled: "" === first.id,
    onPress() {
      const type = first.type;
      if ("branch" === type) {
        const obj3 = build_overrides_BuildOverrideUtils;
        const result = obj3.setBuildOverrideForBranch(tmp.id);
      } else if ("id" === type) {
        const obj2 = build_overrides_BuildOverrideUtils;
        const result1 = obj2.setBuildOverrideForId(tmp.id);
      } else {
        const obj = GlobalUtils;
        obj.assertNever(first.type);
      }
    }
  });
  return <tmp8 style={tmp.content} contentContainerStyle={obj3}>{null}</tmp8>;
}));
let result = size.fileFinishedImporting("modules/devtools/native/components/screens/DevToolsBuildOverrideScreen.tsx");

export default memoResult;
