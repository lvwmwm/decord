// Module ID: 17081
// Function ID: 17082
// Name: ConjureSettingsSheet
// Dependencies: [5, 32, 19, 17, 13218, 13227, 10652, 21, 3849, 5092, 587, 558, 576, 6665, 504, 17082, 17094, 5056, 1126, 6839, 17099, 5088, 6154, 5379, 6899, 8525, 12359, 8774, 2]

// Module 17081 (ConjureSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3849 from "module_3849" /* 3849 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6665 */;
import ConjureProjectStore2 from "ConjureProjectStore" /* 10652 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13218 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 13227 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ConjureProjectStore = ConjureProjectStore2;
let c3, closure_2, closure_3, dependencyMap, importDefault;

let closure_12;
let tmp5;
let unpackModuleId;
const useConjureProjectSettingsFormDefault = tmp5(17082);
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const isProjectOwner = ConjureProjectStore2.isProjectOwner;
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
const ConjureSettingsSheet_str = "ConjureSettingsSheet";
let obj = { project: _modDef3849.W0eQfN, app: _modDef3849.lFaJYF, secrets: _modDef3849.vDpCPU, model: _modDef3849.Rs3qc9, experimental: _modDef3849["0Pe9uw"] };
let closure_15 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  ({ gap: nativeDefault.space.PX_16, paddingBottom });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsSheet(projectId) {
  let closure_1;
  let first;
  let initialTab;
  let isPreview;
  let note;
  let notifyAgent;
  let scopeKeys;
  let tmp10;
  let tmp12;
  let tmp14;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp19;
  let tmp7;
  let tmp9;
  obj = projectId(576);
  const cResult = obj.c(75);
  projectId = projectId.projectId;
  ({ initialTab, scopeKeys, note, notifyAgent, isPreview } = projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  closure_15(useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== projectId) {
    const fn = function w() {
      return ConjureProjectStore.getProject(projectId);
    };
    const items1 = [projectId];
    cResult[2] = projectId;
    cResult[3] = fn;
    cResult[4] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[3];
    tmp10 = cResult[4];
  }
  const tmpResult = projectId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureModelSettingsStore];
    cResult[5] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== projectId) {
    class J {
      constructor() {
        const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
        let tierSettings;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    const items3 = [projectId];
    cResult[6] = projectId;
    cResult[7] = J;
    cResult[8] = items3;
    tmp15 = items3;
    tmp14 = J;
  } else {
    class J {
      constructor() {
        const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
        let tierSettings;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    tmp15 = cResult[8];
  }
  const tmpResult3 = projectId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp14, tmp15);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class J {
      constructor() {
        const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
        let tierSettings;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    const items4 = [ConjureConnectionStore];
    cResult[9] = items4;
    tmp17 = items4;
  } else {
    class J {
      constructor() {
        const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
        let tierSettings;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
  }
  if (cResult[10] !== projectId) {
    class U {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
    const items5 = [projectId];
    cResult[10] = projectId;
    cResult[11] = items5;
    cResult[12] = U;
    tmp19 = U;
    tmp18 = items5;
  } else {
    class U {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
    tmp19 = cResult[12];
  }
  const tmpResult4 = projectId(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp17, tmp19, tmp18);
  if (cResult[13] !== stateFromStores) {
    class U {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
    let tmp22 = null != stateFromStores;
    if (tmp22) {
      class U {
        constructor() {
          return "open" === ConjureConnectionStore.getConnState(projectId);
        }
      }
      tmp22 = isProjectOwner(stateFromStores);
    }
    cResult[13] = stateFromStores;
    cResult[14] = tmp22;
  } else {
    class U {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
  }
  const tmp5Result = useConjureProjectSettingsFormDefault;
  if (stateFromStores != null) {
    class U {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
  }
  if (undefined == null) {
    class U {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
  }
  importDefault = tmp5Result(projectId, undefined);
  tmp5Result(projectId, undefined);
  if (cResult[15] === isPreview) {
    class U {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
  }
  const obj3 = { projectId, scopeKeys, note, notifyAgent, isPreview };
  cResult[15] = isPreview;
  cResult[16] = note;
  cResult[17] = notifyAgent;
  cResult[18] = projectId;
  cResult[19] = scopeKeys;
  cResult[20] = obj3;
}) : (function ConjureSettingsSheet(projectId) {
  let A7dQd9;
  let BottomSheetTitleHeader;
  let closure_4;
  let fields;
  let guildId;
  let initialTab;
  let intl;
  let intl3;
  let isPreview;
  let items9;
  let note;
  let notifyAgent;
  let obj6;
  let obj7;
  let scopeKeys;
  let tmp24;
  let tmp25;
  projectId = projectId.projectId;
  let stateFromStores1;
  dependencyMap = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  let isScoped;
  let loaded;
  let closure_7;
  let memo;
  let closure_9;
  let found;
  let closure_11;
  let canSave;
  const tmp = stateFromStores1;
  const tmp2 = dependencyMap;
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, isPreview } = projectId);
  const tmp4 = projectId;
  let tmp3 = closure_15(stateFromStores1(6665)({ includeKeyboardHeight: true }).insets.bottom);
  obj = projectId(504);
  let items = [closure_9];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj2 = projectId(504);
  const items2 = [memo];
  const items3 = [projectId];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items3);
  let obj3 = projectId(504);
  const items4 = [closure_7];
  const items5 = [projectId];
  let tmp8 = null != stateFromStores;
  const stateFromStores2 = obj3.useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
  if (tmp8) {
    tmp8 = found(stateFromStores);
  }
  dependencyMap = tmp8;
  let guild_id;
  const tmpResult = tmp(17082);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmpResultResult = tmpResult(projectId, guild_id);
  _asyncToGenerator = tmpResultResult;
  const tmp13 = tmp(17094)({ projectId, scopeKeys, note, notifyAgent, isPreview });
  _slicedToArray = tmp13;
  isScoped = tmp13.isScoped;
  loaded = tmp13.loaded;
  if (loaded) {
    loaded = tmp13.valueCount > 0 || 0 === tmp13.secretCount;
    const tmp14 = tmp13.valueCount > 0 || 0 === tmp13.secretCount;
  }
  closure_7 = tmp15;
  let obj4 = isScoped;
  const items6 = [stateFromStores1, tmp8, loaded, tmp15];
  memo = isScoped.useMemo(() => {
    const items = [];
    if (closure_2) {
      items.push("project");
    }
    const tmp3 = loaded;
    if (tmp3) {
      items.push("app");
    }
    const tmp5 = closure_7;
    if (tmp5) {
      items.push("secrets");
    }
    const tmp7 = stateFromStores1;
    if (tmp7) {
      items.push("model");
    }
    if (closure_2) {
      items.push("experimental");
    }
    return items;
  }, items6);
  const tmp16 = _slicedToArray(isScoped.useState(null), 2);
  closure_9 = tmp17;
  const items7 = [tmp16[0], initialTab];
  found = items7.find((item) => {
    const hasItem = null != item && memo.includes(item);
    return hasItem;
  });
  if (found == null) {
    found = memo[0];
  }
  closure_11 = tmp19;
  canSave = tmp13.canSave;
  if (!canSave) {
    canSave = !isScoped && tmpResultResult.canSave;
    const tmp20 = !isScoped && tmpResultResult.canSave;
  }
  const items8 = [tmp13, canSave, tmpResultResult, tmp19, isScoped, found, memo];
  const callback = obj4.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = undefined;
            stateFromStores1 = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            const tmp43 = canSave;
            if (tmp43) {
              const tmp23 = closure_11;
              if (!tmp23) {
                let submitResult = null;
                if (!isScoped) {
                  submitResult = closure_3.submit();
                }
                const items = [submitResult, closure_4.submit()];
                c2 = 1;
                c3 = 1;
                const obj4 = { value: all(items), done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = value;
          stateFromStores1 = closure_1_4(closure_0, 2);
          closure_2 = stateFromStores1[0];
          closure_3 = stateFromStores1[1];
          if (null == closure_2) {
            const tmp7 = closure_3;
            if (tmp7) {
              obj = stateFromStores1(c2[17]);
              obj.hideActionSheet(ConjureSettingsSheet_str);
            }
          }
          if (null != closure_2) {
            closure_129_9(closure_2);
          } else {
            let str = "secrets";
            if ("secrets" !== closure_129_10) {
              const tmp41 = closure_129_9;
              if (closure_129_8.includes("app")) {
                str = "app";
              }
              tmp41(str);
            }
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp29) {
        c3 = 3;
        throw tmp29;
      }
    }
  }), items8);
  let obj5 = { startExpanded: true, dismissAccessibilityLabel: intl.string(tmp(3849).bA4VU5), header: closure_11(BottomSheetTitleHeader, obj6), children: tmp24(tmp25, obj7) };
  const ActionSheet = tmp4(6899).ActionSheet;
  intl = tmp4(1126).intl;
  BottomSheetTitleHeader = tmp4(6839).BottomSheetTitleHeader;
  const intl2 = tmp4(1126).intl;
  const string = intl2.string;
  const tmpResult2 = tmp(3849);
  let tmp22Result = null;
  obj6 = { title: string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe) };
  obj7 = { style: tmp3.container, children: items9 };
  tmp24 = canSave;
  tmp25 = loaded;
  if (!isScoped) {
    tmp22Result = null;
    if (memo.length > 1) {
      tmp22Result = null;
      if (null != found) {
        let str = ",";
        const obj8 = { tabs: memo, selected: found, onSelect: tmp16[1] };
        tmp22Result = tmp22(closure_16, obj8, memo.join(","));
      }
    }
  }
  items9 = [tmp22Result, , , , , , , ];
  if (isScoped) {
    fields = tmp13.fields;
  } else {
    fields = null;
  }
  items9[1] = fields;
  let fields1 = null;
  if (!isScoped) {
    fields1 = null;
    if ("project" === found) {
      fields1 = tmpResultResult.fields;
    }
  }
  items9[2] = fields1;
  let experimentalFields = null;
  if (!isScoped) {
    experimentalFields = null;
    if ("experimental" === found) {
      experimentalFields = tmpResultResult.experimentalFields;
    }
  }
  items9[3] = experimentalFields;
  let secretFields = null;
  if (!isScoped) {
    secretFields = null;
    if ("secrets" === found) {
      secretFields = tmp13.secretFields;
    }
  }
  items9[4] = secretFields;
  let tmp22Result3 = null;
  if (!isScoped) {
    tmp22Result3 = null;
    if ("model" === found) {
      const obj9 = { projectId };
      tmp22Result3 = tmp22(tmp4(17099).ConjureModelSettingsContent, obj9);
    }
  }
  items9[5] = tmp22Result3;
  let tmp33 = null;
  if (!isScoped) {
    tmp33 = null;
    if (null == found) {
      let tmp22Result4;
      if (stateFromStores2) {
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(tmp(3849).lJJayk) };
        const Text = tmp4(5088).Text;
        intl3 = tmp4(1126).intl;
        tmp22Result4 = tmp22(Text, obj10);
      } else {
        tmp22Result4 = tmp22(tmp4(6154).ActivityIndicator, {});
      }
      tmp33 = tmp22Result4;
    }
  }
  items9[6] = tmp33;
  const Button = tmp4(5379).Button;
  const intl4 = tmp4(1126).intl;
  const string2 = intl4.string;
  if (isScoped) {
    A7dQd9 = tmp(3849).A7dQd9;
  } else {
    A7dQd9 = tmp4(1126).t["R3BPH+"];
  }
  const obj11 = { text: string2(A7dQd9), variant: "primary", loading: tmpResultResult.saving || tmp13.saving, disabled: !canSave, onPress: callback };
  items9[7] = closure_11(Button, obj11);
  return closure_11(ActionSheet, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsTabStrip(tabs) {
  let index;
  let onSelect;
  let selected;
  let tmp3;
  obj = tabs(576);
  const cResult = obj.c(18);
  tabs = tabs.tabs;
  ({ selected, onSelect } = tabs);
  [tmp3, dependencyMap] = _slicedToArray(react.useState(0), 2);
  const tmp2 = _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      dependencyMap(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tabs) {
    let tmp6;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(id) {
          let intl;
          obj = { id, label: intl.string(closure_1_14[id]), page: null };
          intl = tabs(dependencyMap[18]).intl;
          return obj;
        }
      }
      cResult[3] = C;
      tmp6 = C;
    } else {
      class C {
        constructor(id) {
          let intl;
          obj = { id, label: intl.string(closure_1_14[id]), page: null };
          intl = tabs(dependencyMap[18]).intl;
          return obj;
        }
      }
    }
    const mapped = tabs.map(tmp6);
    cResult[1] = tabs;
    cResult[2] = mapped;
  } else {
    class C {
      constructor(id) {
        let intl;
        obj = { id, label: intl.string(closure_1_14[id]), page: null };
        intl = tabs(dependencyMap[18]).intl;
        return obj;
      }
    }
  }
  if (cResult[4] === selected) {
    class C {
      constructor(id) {
        let intl;
        obj = { id, label: intl.string(closure_1_14[id]), page: null };
        intl = tabs(dependencyMap[18]).intl;
        return obj;
      }
    }
    const _Math = Math;
    const bound = Math.max(0, index);
    if (cResult[7] === onSelect) {
      class C {
        constructor(id) {
          let intl;
          obj = { id, label: intl.string(closure_1_14[id]), page: null };
          intl = tabs(dependencyMap[18]).intl;
          return obj;
        }
      }
      if (cResult[10] === tmp5) {
        class C {
          constructor(id) {
            let intl;
            obj = { id, label: intl.string(closure_1_14[id]), page: null };
            intl = tabs(dependencyMap[18]).intl;
            return obj;
          }
        }
      }
      const obj2 = { items: tmp5, pageWidth: null, defaultIndex: bound, onSetActiveIndex: tmp10 };
      class A {
        constructor(arg0) {
          if (null != tabs[arg0]) {
            onSelect(tabs[arg0]);
          }
        }
      }
      cResult[10] = tmp5;
      cResult[11] = tmp3;
      cResult[12] = bound;
      cResult[13] = tmp10;
      cResult[14] = obj2;
    }
    class A {
      constructor(arg0) {
        if (null != tabs[arg0]) {
          onSelect(tabs[arg0]);
        }
      }
    }
    cResult[7] = onSelect;
    cResult[8] = tabs;
    cResult[9] = A;
  }
  index = tabs.indexOf(selected);
  cResult[4] = selected;
  cResult[5] = tabs;
  cResult[6] = index;
}) : (function SettingsTabStrip(tabs) {
  let _undefined;
  let c2;
  let tmp2;
  let tmp9Result;
  tabs = tabs.tabs;
  const onSelect = tabs.onSelect;
  dependencyMap = undefined;
  const selected = tabs.selected;
  [tmp2, c2] = _slicedToArray(react.useState(0), 2);
  const items = [tabs];
  const tmp = _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = react.useMemo(() => tabs.map((id) => {
    let intl;
    obj = { id, label: intl.string(closure_1_14[id]), page: null };
    intl = tabs(_undefined[18]).intl;
    return obj;
  }), items);
  const tmp7 = tabs(8525);
  obj = {
    items: memo,
    pageWidth: tmp2,
    defaultIndex: Math.max(0, tabs.indexOf(selected)),
    onSetActiveIndex(arg0) {
      if (null != tabs[arg0]) {
        onSelect(tabs[arg0]);
      }
    }
  };
  const useSegmentedControlState = tmp7.useSegmentedControlState;
  const segmentedControlState = useSegmentedControlState(obj);
  const obj2 = { onLayout: callback, children: tmp9Result };
  const tmp10 = View;
  if (tabs.length > 3) {
    const obj3 = { state: segmentedControlState };
    tmp9Result = tmp9(tmp5(12359).Tabs, obj3);
  } else {
    const obj4 = { state: segmentedControlState };
    tmp9Result = tmp9(tmp5(8774).SegmentedControl, obj4);
  }
  return closure_11(tmp10, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default tmp3;
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
