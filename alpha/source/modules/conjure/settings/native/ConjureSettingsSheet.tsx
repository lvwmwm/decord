// Module ID: 11743
// Function ID: 11744
// Name: ConjureSettingsSheet
// Dependencies: [5, 32, 19, 17, 10668, 10682, 6759, 21, 3830, 4969, 587, 558, 576, 5579, 504, 11744, 11760, 11783, 5196, 1128, 7232, 5964, 11785, 11788, 11790, 5220, 6866, 5230, 7282, 8869, 11792, 9115, 2]

// Module 11743 (ConjureSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5579 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10668 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10682 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6759 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3, closure_3, dependencyMap, importDefault;

let c10;
let c9;
let closure_12;
let map1;
let tmp5;
const useConjureProjectSettingsFormDefault = tmp5(11744);
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let ConjureProjectStore = ConjureProjectStore_mod;
({ canPublishProject: c9, isProjectOwner: c10 } = ConjureProjectStore);
ConjureProjectStore = ConjureProjectStore_mod;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const ConjureSettingsSheet_str = "ConjureSettingsSheet";
let obj = { project: _modDef3830.W0eQfN, app: _modDef3830.lFaJYF, secrets: _modDef3830.vDpCPU, model: _modDef3830.Rs3qc9, linked: _modDef3830.fBEHdq, experimental: _modDef3830["0Pe9uw"] };
let closure_16 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  ({ gap: nativeDefault.space.PX_16, paddingBottom });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsSheet(projectId) {
  let closure_1;
  let closure_2;
  let first;
  let initialTab;
  let isPreview;
  let note;
  let notifyAgent;
  let onSaved;
  let scopeKeys;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp7;
  let tmp9;
  obj = projectId(576);
  const cResult = obj.c(93);
  projectId = projectId.projectId;
  ({ initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  closure_16(useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== projectId) {
    class K {
      constructor() {
        return closure_11.getProject(projectId);
      }
    }
    const items1 = [projectId];
    cResult[2] = projectId;
    cResult[3] = K;
    cResult[4] = items1;
    tmp10 = items1;
    tmp9 = K;
  } else {
    class K {
      constructor() {
        return closure_11.getProject(projectId);
      }
    }
    tmp10 = cResult[4];
  }
  const tmpResult = projectId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        return closure_11.getProject(projectId);
      }
    }
    const items2 = [ConjureModelSettingsStore];
    cResult[5] = items2;
    tmp12 = items2;
  } else {
    class K {
      constructor() {
        return closure_11.getProject(projectId);
      }
    }
  }
  if (cResult[6] !== projectId) {
    class R {
      constructor() {
        modelSettings = closure_8.getModelSettings(projectId);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    const items3 = [projectId];
    cResult[6] = projectId;
    cResult[7] = R;
    cResult[8] = items3;
    tmp14 = items3;
    tmp13 = R;
  } else {
    class R {
      constructor() {
        modelSettings = closure_8.getModelSettings(projectId);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    tmp14 = cResult[8];
  }
  const tmpResult3 = projectId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp13, tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class R {
      constructor() {
        modelSettings = closure_8.getModelSettings(projectId);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    const items4 = [ConjureConnectionStore];
    cResult[9] = items4;
    tmp16 = items4;
  } else {
    class R {
      constructor() {
        modelSettings = closure_8.getModelSettings(projectId);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
  }
  if (cResult[10] !== projectId) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
    const items5 = [projectId];
    cResult[10] = projectId;
    cResult[11] = items5;
    cResult[12] = N;
    tmp18 = N;
    tmp17 = items5;
  } else {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
    tmp18 = cResult[12];
  }
  const tmpResult4 = projectId(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp16, tmp18, tmp17);
  if (cResult[13] !== stateFromStores) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
    let tmp21 = null != stateFromStores;
    if (tmp21) {
      class N {
        constructor() {
          return "open" === closure_7.getConnState(projectId);
        }
      }
      tmp21 = closure_10(stateFromStores);
    }
    cResult[13] = stateFromStores;
    cResult[14] = tmp21;
    tmp20 = tmp21;
  } else {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
  }
  importDefault = tmp20;
  if (cResult[15] !== stateFromStores) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
    let tmp23 = null != stateFromStores;
    if (tmp23) {
      class N {
        constructor() {
          return "open" === closure_7.getConnState(projectId);
        }
      }
      tmp23 = closure_9(stateFromStores);
    }
    cResult[15] = stateFromStores;
    cResult[16] = tmp23;
  } else {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
  }
  const tmp5Result = useConjureProjectSettingsFormDefault;
  if (stateFromStores != null) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
  }
  if (undefined == null) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
  }
  dependencyMap = tmp5Result(projectId, undefined);
  tmp5Result(projectId, undefined);
  if (cResult[17] === isPreview) {
    class N {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
  }
  const obj3 = { projectId, scopeKeys, note, notifyAgent, onSaved, isPreview };
  cResult[17] = isPreview;
  cResult[18] = note;
  cResult[19] = notifyAgent;
  cResult[20] = onSaved;
  cResult[21] = projectId;
  cResult[22] = scopeKeys;
  cResult[23] = obj3;
}) : (function ConjureSettingsSheet(projectId) {
  let A7dQd9;
  let BottomSheetTitleHeader;
  let closure_4;
  let closure_5;
  let fields;
  let guildId;
  let initialTab;
  let intl;
  let intl3;
  let isPreview;
  let items10;
  let items9;
  let note;
  let notifyAgent;
  let obj6;
  let obj7;
  let onSaved;
  let scopeKeys;
  let tmp29;
  projectId = projectId.projectId;
  let stateFromStores1;
  dependencyMap = undefined;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_6;
  let isScoped;
  let loaded;
  let closure_9;
  let memo;
  let closure_11;
  let found;
  let closure_13;
  let canSave;
  const tmp = stateFromStores1;
  let tmp2 = dependencyMap;
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  let tmp4 = projectId;
  const tmp3 = closure_16(stateFromStores1(5579)({ includeKeyboardHeight: true }).insets.bottom);
  obj = projectId(504);
  let items = [closure_11];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj2 = projectId(504);
  const items2 = [loaded];
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
  const items4 = [isScoped];
  const items5 = [projectId];
  let tmp8 = null != stateFromStores;
  const stateFromStores2 = obj3.useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
  if (tmp8) {
    tmp8 = memo(stateFromStores);
  }
  dependencyMap = tmp8;
  let tmp10 = null != stateFromStores;
  if (tmp10) {
    tmp10 = closure_9(stateFromStores);
  }
  _asyncToGenerator = tmp10;
  let guild_id;
  const tmpResult = tmp(11744);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmpResultResult = tmpResult(projectId, guild_id);
  _slicedToArray = tmpResultResult;
  const tmp15 = tmp(11760)({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
  react = tmp15;
  const tmp16 = tmp(11783)(projectId, tmp10);
  closure_6 = tmp17;
  isScoped = tmp15.isScoped;
  loaded = tmp15.loaded;
  if (loaded) {
    loaded = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
    const tmp18 = tmp15.valueCount > 0 || 0 === tmp15.secretCount;
  }
  closure_9 = tmp19;
  let obj4 = react;
  const items6 = [tmp10, tmp17, stateFromStores1, tmp8, loaded, tmp19];
  memo = react.useMemo(() => {
    const items = [];
    const tmp2 = closure_2 || closure_3;
    if (tmp2) {
      items.push("project");
    }
    const tmp4 = loaded;
    if (tmp4) {
      items.push("app");
    }
    const tmp6 = closure_9;
    if (tmp6) {
      items.push("secrets");
    }
    const tmp8 = stateFromStores1;
    if (tmp8) {
      items.push("model");
    }
    const tmp10 = closure_6;
    if (tmp10) {
      items.push("linked");
    }
    if (closure_2) {
      items.push("experimental");
    }
    return items;
  }, items6);
  const tmp20 = _slicedToArray(react.useState(null), 2);
  closure_11 = tmp21;
  const items7 = [tmp20[0], initialTab];
  found = items7.find((item) => {
    const hasItem = null != item && memo.includes(item);
    return hasItem;
  });
  if (found == null) {
    found = memo[0];
  }
  let tmp23 = tmp8 && tmpResultResult.saving || tmp15.saving;
  closure_13 = tmp23;
  canSave = tmp15.canSave;
  if (!canSave) {
    canSave = !isScoped && tmp8 && tmpResultResult.canSave;
    const tmp24 = !isScoped && tmp8 && tmpResultResult.canSave;
  }
  const items8 = [tmp15, canSave, tmp8, tmpResultResult, tmp23, isScoped, found, memo];
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
            const tmp44 = canSave;
            if (tmp44) {
              const tmp23 = closure_13;
              if (!tmp23) {
                let submitResult = null;
                if (!isScoped) {
                  submitResult = null;
                  if (closure_2) {
                    submitResult = closure_4.submit();
                  }
                }
                const items = [submitResult, closure_5.submit()];
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
              obj = stateFromStores1(c2[18]);
              obj.hideActionSheet(closure_1_14);
            }
          }
          if (null != closure_2) {
            closure_129_11(closure_2);
          } else {
            let str = "secrets";
            if ("secrets" !== closure_129_12) {
              const tmp42 = closure_129_11;
              if (closure_129_10.includes("app")) {
                str = "app";
              }
              tmp42(str);
            }
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp30) {
        c3 = 3;
        throw tmp30;
      }
    }
  }), items8);
  let obj5 = { startExpanded: true, dismissAccessibilityLabel: intl.string(tmp(3830).bA4VU5), header: found(BottomSheetTitleHeader, obj6), children: tmp28(tmp29, obj7) };
  const ActionSheet = tmp4(7282).ActionSheet;
  intl = tmp4(1128).intl;
  BottomSheetTitleHeader = tmp4(7232).BottomSheetTitleHeader;
  const intl2 = tmp4(1128).intl;
  const string = intl2.string;
  const tmpResult2 = tmp(3830);
  let tmp26Result = null;
  obj6 = { title: string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe) };
  obj7 = { style: tmp3.container, children: items9 };
  tmp29 = closure_6;
  if (!isScoped) {
    tmp26Result = null;
    if (memo.length > 1) {
      tmp26Result = null;
      if (null != found) {
        let str = ",";
        const obj8 = { tabs: memo, selected: found, onSelect: tmp20[1] };
        tmp26Result = tmp26(closure_17, obj8, memo.join(","));
      }
    }
  }
  items9 = [tmp26Result, , , , , , , , ];
  if (isScoped) {
    fields = tmp15.fields;
  } else {
    fields = null;
  }
  items9[1] = fields;
  let tmp28Result = null;
  if (!isScoped) {
    tmp28Result = null;
    if ("project" === found) {
      const obj9 = { spacing: tmp(587).space.PX_24, children: items10 };
      const Stack = tmp4(5964).Stack;
      let fields1 = null;
      if (tmp8) {
        fields1 = tmpResultResult.fields;
      }
      items10 = [fields1, ];
      const obj10 = { projectId, canEdit: tmp10 };
      items10[1] = found(tmp(11785), obj10, projectId);
      tmp28Result = tmp28(Stack, obj9);
    }
  }
  items9[2] = tmp28Result;
  let tmp26Result4 = null;
  if (!isScoped) {
    tmp26Result4 = null;
    if ("linked" === found) {
      const obj11 = { linkedApps: tmp16 };
      tmp26Result4 = tmp26(tmp(11788), obj11);
    }
  }
  items9[3] = tmp26Result4;
  let experimentalFields = null;
  if (!isScoped) {
    experimentalFields = null;
    if ("experimental" === found) {
      experimentalFields = tmpResultResult.experimentalFields;
    }
  }
  items9[4] = experimentalFields;
  let secretFields = null;
  if (!isScoped) {
    secretFields = null;
    if ("secrets" === found) {
      secretFields = tmp15.secretFields;
    }
  }
  items9[5] = secretFields;
  let tmp26Result5 = null;
  if (!isScoped) {
    tmp26Result5 = null;
    if ("model" === found) {
      const obj12 = { projectId };
      tmp26Result5 = tmp26(tmp4(11790).ConjureModelSettingsContent, obj12);
    }
  }
  items9[6] = tmp26Result5;
  let tmp39 = null;
  if (!isScoped) {
    tmp39 = null;
    if (null == found) {
      let tmp26Result6;
      if (stateFromStores2) {
        const obj13 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(tmp(3830).lJJayk) };
        const Text = tmp4(5220).Text;
        intl3 = tmp4(1128).intl;
        tmp26Result6 = tmp26(Text, obj13);
      } else {
        tmp26Result6 = tmp26(tmp4(6866).ActivityIndicator, {});
      }
      tmp39 = tmp26Result6;
    }
  }
  items9[7] = tmp39;
  const Button = tmp4(5230).Button;
  const intl4 = tmp4(1128).intl;
  const string2 = intl4.string;
  if (isScoped) {
    A7dQd9 = tmp(3830).A7dQd9;
  } else {
    A7dQd9 = tmp4(1128).t["R3BPH+"];
  }
  const obj14 = { text: string2(A7dQd9), variant: "primary", loading: tmp23, disabled: !canSave, onPress: callback };
  items9[8] = found(Button, obj14);
  return found(ActionSheet, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsTabStrip(tabs) {
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
          obj = { id, label: intl.string(closure_1_15[id]), page: null };
          intl = tabs(dependencyMap[19]).intl;
          return obj;
        }
      }
      cResult[3] = C;
      tmp6 = C;
    } else {
      class C {
        constructor(id) {
          let intl;
          obj = { id, label: intl.string(closure_1_15[id]), page: null };
          intl = tabs(dependencyMap[19]).intl;
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
        obj = { id, label: intl.string(closure_1_15[id]), page: null };
        intl = tabs(dependencyMap[19]).intl;
        return obj;
      }
    }
  }
  if (cResult[4] === selected) {
    class C {
      constructor(id) {
        let intl;
        obj = { id, label: intl.string(closure_1_15[id]), page: null };
        intl = tabs(dependencyMap[19]).intl;
        return obj;
      }
    }
    const _Math = Math;
    const bound = Math.max(0, index);
    if (cResult[7] === onSelect) {
      class C {
        constructor(id) {
          let intl;
          obj = { id, label: intl.string(closure_1_15[id]), page: null };
          intl = tabs(dependencyMap[19]).intl;
          return obj;
        }
      }
      if (cResult[10] === tmp5) {
        class C {
          constructor(id) {
            let intl;
            obj = { id, label: intl.string(closure_1_15[id]), page: null };
            intl = tabs(dependencyMap[19]).intl;
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
    obj = { id, label: intl.string(closure_1_15[id]), page: null };
    intl = tabs(_undefined[19]).intl;
    return obj;
  }), items);
  const tmp7 = tabs(8869);
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
    tmp9Result = tmp9(tmp5(11792).Tabs, obj3);
  } else {
    const obj4 = { state: segmentedControlState };
    tmp9Result = tmp9(tmp5(9115).SegmentedControl, obj4);
  }
  return closure_12(tmp10, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default tmp4;
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
