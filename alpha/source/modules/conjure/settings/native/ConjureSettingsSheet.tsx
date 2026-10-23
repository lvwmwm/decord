// Module ID: 11774
// Function ID: 11775
// Name: ConjureSettingsSheet
// Dependencies: [5, 32, 19, 17, 10697, 10711, 6771, 21, 3830, 4969, 587, 558, 576, 5591, 504, 11775, 11791, 11814, 1128, 7291, 7246, 5975, 11816, 11819, 11821, 5232, 6878, 5242, 7296, 8899, 11823, 9145, 2]

// Module 11774 (ConjureSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3830 from "module_3830" /* 3830 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10697 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 10711 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6771 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4969 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c3, dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let ConjureProjectStore = ConjureProjectStore_mod;
({ canPublishProject: c9, isProjectOwner: c10 } = ConjureProjectStore);
ConjureProjectStore = ConjureProjectStore_mod;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { project: _modDef3830.W0eQfN, app: _modDef3830.lFaJYF, secrets: _modDef3830.vDpCPU, model: _modDef3830.Rs3qc9, linked: _modDef3830.fBEHdq, experimental: _modDef3830["0Pe9uw"] };
let closure_15 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  ({ gap: nativeDefault.space.PX_16, paddingBottom });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjureSettingsSheet(projectId) {
  let closure_2;
  let first;
  let initialTab;
  let isPreview;
  let note;
  let notifyAgent;
  let onSaved;
  let ref;
  let scopeKeys;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp18;
  let tmp19;
  let tmp20;
  let tmp22;
  let tmp23;
  let tmp25;
  let tmp8;
  obj = projectId(576);
  const cResult = obj.c(94);
  projectId = projectId.projectId;
  ({ initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  closure_15(ref(5591)(first).insets.bottom);
  const tmp5 = ref;
  ref = react.useRef(null);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[1] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== projectId) {
    const fn = function w() {
      return ConjureProjectStore.getProject(projectId);
    };
    const items1 = [projectId];
    cResult[2] = projectId;
    cResult[3] = fn;
    cResult[4] = items1;
    tmp11 = items1;
    tmp10 = fn;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult = projectId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp10, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ConjureModelSettingsStore];
    cResult[5] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== projectId) {
    class O {
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
    cResult[7] = O;
    cResult[8] = items3;
    tmp16 = items3;
    tmp15 = O;
  } else {
    class O {
      constructor() {
        const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
        let tierSettings;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    tmp16 = cResult[8];
  }
  const tmpResult3 = projectId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp13, tmp15, tmp16);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
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
    tmp18 = items4;
  } else {
    class O {
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
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
    const items5 = [projectId];
    cResult[10] = projectId;
    cResult[11] = items5;
    cResult[12] = N;
    tmp20 = N;
    tmp19 = items5;
  } else {
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
    tmp20 = cResult[12];
  }
  const tmpResult4 = projectId(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp18, tmp20, tmp19);
  if (cResult[13] !== stateFromStores) {
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
    if (tmp23) {
      class N {
        constructor() {
          return "open" === ConjureConnectionStore.getConnState(projectId);
        }
      }
      tmp23 = closure_10(stateFromStores);
    }
    cResult[13] = stateFromStores;
    cResult[14] = tmp23;
    tmp22 = tmp23;
  } else {
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
  }
  dependencyMap = tmp22;
  if (cResult[15] !== stateFromStores) {
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
    if (tmp25) {
      class N {
        constructor() {
          return "open" === ConjureConnectionStore.getConnState(projectId);
        }
      }
      tmp25 = closure_9(stateFromStores);
    }
    cResult[15] = stateFromStores;
    cResult[16] = tmp25;
  } else {
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
  }
  const tmp5Result = tmp5(11775);
  if (stateFromStores != null) {
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
  }
  if (undefined == null) {
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
      }
    }
  }
  let closure_3 = tmp5Result(projectId, undefined);
  tmp5Result(projectId, undefined);
  if (cResult[17] === isPreview) {
    class N {
      constructor() {
        return "open" === ConjureConnectionStore.getConnState(projectId);
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
  let obj8;
  let onSaved;
  let scopeKeys;
  let tmp30;
  projectId = projectId.projectId;
  let ref;
  let stateFromStores1;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_6;
  let closure_7;
  let isScoped;
  let loaded;
  let closure_10;
  let memo;
  let closure_12;
  let found;
  let closure_14;
  let canSave;
  const tmp = ref;
  let tmp2 = stateFromStores1;
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  obj = react;
  const tmp3 = canSave(ref(stateFromStores1[13])({ includeKeyboardHeight: true }).insets.bottom);
  ref = react.useRef(null);
  const obj2 = projectId(stateFromStores1[14]);
  let items = [memo];
  const items1 = [projectId];
  const stateFromStores = obj2.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj3 = projectId(stateFromStores1[14]);
  const items2 = [isScoped];
  const items3 = [projectId];
  stateFromStores1 = obj3.useStateFromStores(items2, () => {
    const modelSettings = ConjureModelSettingsStore.getModelSettings(projectId);
    let tierSettings;
    if (modelSettings != null) {
      tierSettings = modelSettings.tierSettings;
    }
    return null != tierSettings;
  }, items3);
  let obj4 = projectId(stateFromStores1[14]);
  const items4 = [closure_7];
  const items5 = [projectId];
  let tmp9 = null != stateFromStores;
  const stateFromStores2 = obj4.useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
  if (tmp9) {
    let tmp10 = closure_10;
    tmp9 = closure_10(stateFromStores);
  }
  _asyncToGenerator = tmp9;
  let tmp11 = null != stateFromStores;
  if (tmp11) {
    tmp11 = loaded(stateFromStores);
  }
  _slicedToArray = tmp11;
  let guild_id;
  const tmpResult = tmp(tmp2[15]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmpResultResult = tmpResult(projectId, guild_id);
  react = tmpResultResult;
  const tmp16 = tmp(tmp2[16])({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
  closure_6 = tmp16;
  const tmp17 = tmp(tmp2[17])(projectId, tmp11);
  closure_7 = tmp18;
  isScoped = tmp16.isScoped;
  loaded = tmp16.loaded;
  if (loaded) {
    let tmp19 = tmp16.valueCount > 0 || 0 === tmp16.secretCount;
    loaded = tmp19;
  }
  closure_10 = tmp20;
  const items6 = [tmp11, tmp18, stateFromStores1, tmp9, loaded, tmp20];
  memo = obj.useMemo(() => {
    const items = [];
    const tmp2 = closure_3 || closure_4;
    if (tmp2) {
      items.push("project");
    }
    const tmp4 = loaded;
    if (tmp4) {
      items.push("app");
    }
    const tmp6 = closure_10;
    if (tmp6) {
      items.push("secrets");
    }
    const tmp8 = stateFromStores1;
    if (tmp8) {
      items.push("model");
    }
    const tmp10 = closure_7;
    if (tmp10) {
      items.push("linked");
    }
    if (closure_3) {
      items.push("experimental");
    }
    return items;
  }, items6);
  const tmp21 = _slicedToArray(obj.useState(null), 2);
  let tmp22 = tmp21[1];
  closure_12 = tmp22;
  const items7 = [tmp21[0], initialTab];
  found = items7.find((item) => {
    const hasItem = null != item && memo.includes(item);
    return hasItem;
  });
  if (found == null) {
    found = memo[0];
  }
  closure_14 = tmp24;
  canSave = tmp16.canSave;
  if (!canSave) {
    canSave = !isScoped && tmp9 && tmpResultResult.canSave;
    const tmp25 = !isScoped && tmp9 && tmpResultResult.canSave;
  }
  const items8 = [tmp16, canSave, tmp9, tmpResultResult, tmp9 && tmpResultResult.saving || tmp16.saving, isScoped, found, memo];
  const callback = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_1;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_0;
        let closure_2;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = undefined;
            ref = undefined;
            closure_2 = undefined;
            closure_3 = undefined;
            const tmp45 = canSave;
            if (tmp45) {
              const tmp19 = closure_14;
              if (!tmp19) {
                let validateResult = null;
                if (canSave.canSave) {
                  validateResult = obj2.validate();
                }
                if (null == validateResult) {
                  let submitResult = null;
                  if (!isScoped) {
                    submitResult = null;
                    if (closure_3) {
                      submitResult = closure_5.submit();
                    }
                  }
                  const items = [submitResult, canSave.submit()];
                  c2 = 1;
                  c3 = 1;
                  const obj5 = { value: all(items), done: false };
                  return obj5;
                } else {
                  const tmp22 = isScoped;
                  if (!tmp22) {
                    let str2 = "app";
                    const tmp23 = closure_12;
                    if ("secretFields" === validateResult) {
                      str2 = "secrets";
                    }
                    tmp23(str2);
                  }
                }
              }
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          ref = closure_1_4(closure_0, 2);
          closure_2 = ref[0];
          closure_3 = ref[1];
          if (null == closure_2) {
            const tmp6 = closure_3;
            if (tmp6) {
              const current = closure_129_1.current;
              if (current != null) {
                current.closeActionSheet();
              }
            }
          }
          if (null != closure_2) {
            closure_129_12(closure_2);
          } else {
            let str = "secrets";
            if ("secrets" !== closure_129_13) {
              const tmp42 = closure_129_12;
              if (closure_129_11.includes("app")) {
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
  let obj5 = { ref, startExpanded: true, keyboardShouldPersistTaps: "always", dismissAccessibilityLabel: intl.string(tmp(tmp2[8]).bA4VU5), header: closure_12(BottomSheetTitleHeader, obj6), children: tmp29(tmp30, obj8) };
  const ActionSheet = tmp5(tmp2[28]).ActionSheet;
  intl = tmp5(tmp2[18]).intl;
  BottomSheetTitleHeader = tmp5(tmp2[20]).BottomSheetTitleHeader;
  const intl2 = tmp5(tmp2[18]).intl;
  const string = intl2.string;
  const tmpResult2 = tmp(tmp2[8]);
  obj6 = { title: string(isScoped ? tmpResult2["jZjP+I"] : tmpResult2.I2XSKe), trailing: closure_12(projectId(tmp2[19]).ActionSheetCloseButton, obj7) };
  let tmp27Result = null;
  tmp30 = closure_6;
  obj7 = {
    onPress() {
      const current = ref.current;
      let closeActionSheetResult;
      if (current != null) {
        closeActionSheetResult = current.closeActionSheet();
      }
      return closeActionSheetResult;
    }
  };
  obj8 = { style: tmp3.container, children: items9 };
  if (!isScoped) {
    tmp27Result = null;
    if (memo.length > 1) {
      tmp27Result = null;
      if (null != found) {
        let str = ",";
        const obj9 = { tabs: memo, selected: found, onSelect: tmp22 };
        tmp27Result = tmp27(closure_16, obj9, memo.join(","));
      }
    }
  }
  items9 = [tmp27Result, , , , , , , , ];
  if (isScoped) {
    fields = tmp16.fields;
  } else {
    let str2 = "app";
    fields = null;
  }
  items9[1] = fields;
  let tmp29Result = null;
  if (!isScoped) {
    tmp29Result = null;
    if ("project" === found) {
      const obj10 = { spacing: tmp(tmp2[10]).space.PX_24, children: items10 };
      const Stack = tmp5(tmp2[21]).Stack;
      let fields1 = null;
      if (tmp9) {
        fields1 = tmpResultResult.fields;
      }
      items10 = [fields1, ];
      const obj11 = { projectId, canEdit: tmp11 };
      items10[1] = closure_12(tmp(tmp2[22]), obj11, projectId);
      tmp29Result = tmp29(Stack, obj10);
    }
  }
  items9[2] = tmp29Result;
  let tmp27Result4 = null;
  if (!isScoped) {
    tmp27Result4 = null;
    if ("linked" === found) {
      const obj12 = { linkedApps: tmp17 };
      tmp27Result4 = tmp27(tmp(tmp2[23]), obj12);
    }
  }
  items9[3] = tmp27Result4;
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
      secretFields = tmp16.secretFields;
    }
  }
  items9[5] = secretFields;
  let tmp27Result5 = null;
  if (!isScoped) {
    tmp27Result5 = null;
    if ("model" === found) {
      const obj13 = { projectId };
      tmp27Result5 = tmp27(tmp5(tmp2[24]).ConjureModelSettingsContent, obj13);
    }
  }
  items9[6] = tmp27Result5;
  let tmp40 = null;
  if (!isScoped) {
    tmp40 = null;
    if (null == found) {
      let tmp27Result6;
      if (stateFromStores2) {
        const obj14 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(tmp(tmp2[8]).lJJayk) };
        const Text = tmp5(tmp2[25]).Text;
        intl3 = tmp5(tmp2[18]).intl;
        tmp27Result6 = tmp27(Text, obj14);
      } else {
        tmp27Result6 = tmp27(tmp5(tmp2[26]).ActivityIndicator, {});
      }
      tmp40 = tmp27Result6;
    }
  }
  items9[7] = tmp40;
  const Button = tmp5(tmp2[27]).Button;
  const intl4 = tmp5(tmp2[18]).intl;
  const string2 = intl4.string;
  if (isScoped) {
    A7dQd9 = tmp(tmp2[8]).A7dQd9;
  } else {
    A7dQd9 = tmp5(tmp2[18]).t["R3BPH+"];
  }
  const obj15 = { text: string2(A7dQd9), variant: "primary", loading: tmp9 && tmpResultResult.saving || tmp16.saving, disabled: !canSave, onPress: callback };
  items9[8] = closure_12(Button, obj15);
  return closure_12(ActionSheet, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function SettingsTabStrip(tabs) {
  let index;
  let onSelect;
  let selected;
  let tmp3;
  obj = tabs(576);
  const cResult = obj.c(22);
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
      class I {
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
    class I {
      constructor(arg0) {
        if (null != tabs[arg0]) {
          onSelect(tabs[arg0]);
        }
      }
    }
    cResult[7] = onSelect;
    cResult[8] = tabs;
    cResult[9] = I;
  }
  index = tabs.indexOf(selected);
  cResult[4] = selected;
  cResult[5] = tabs;
  cResult[6] = index;
}) : (function SettingsTabStrip(tabs) {
  let _undefined;
  let c2;
  let selected;
  let tmp11Result;
  let tmp2;
  tabs = tabs.tabs;
  ({ selected, onSelect: importDefault } = tabs);
  dependencyMap = undefined;
  let setActiveIndex;
  const tmp = setActiveIndex(react.useState(0), 2);
  [tmp2, c2] = tmp;
  const items = [tabs];
  const callback = react.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const memo = react.useMemo(() => tabs.map((id) => {
    let intl;
    obj = { id, label: intl.string(closure_1_14[id]), page: null };
    intl = tabs(_undefined[18]).intl;
    return obj;
  }), items);
  const tmp7 = tabs(8899);
  obj = {
    items: memo,
    pageWidth: tmp2,
    defaultIndex: Math.max(0, tabs.indexOf(selected)),
    onSetActiveIndex(arg0) {
      if (null != tabs[arg0]) {
        importDefault(tabs[arg0]);
      }
    }
  };
  const useSegmentedControlState = tmp7.useSegmentedControlState;
  const segmentedControlState = useSegmentedControlState(obj);
  const index = tabs.indexOf(selected);
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items1 = [index, setActiveIndex];
  const effect = react.useEffect(() => {
    if (index >= 0) {
      setActiveIndex(tmp, false);
    }
  }, items1);
  const obj2 = { onLayout: callback, children: tmp11Result };
  const tmp12 = View;
  if (tabs.length > 3) {
    const obj3 = { state: segmentedControlState };
    tmp11Result = tmp11(tmp5(11823).Tabs, obj3);
  } else {
    const obj4 = { state: segmentedControlState };
    tmp11Result = tmp11(tmp5(9145).SegmentedControl, obj4);
  }
  return closure_12(tmp12, obj2);
});
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default tmp4;
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
