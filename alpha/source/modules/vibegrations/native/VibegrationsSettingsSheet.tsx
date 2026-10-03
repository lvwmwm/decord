// Module ID: 16568
// Function ID: 16569
// Name: VibegrationsSettingsSheet
// Dependencies: [5, 32, 19, 17, 12904, 8699, 21, 3723, 4890, 587, 558, 576, 6471, 504, 16569, 16571, 4854, 1126, 6644, 16572, 4886, 5968, 5594, 6701, 9282, 12282, 9283, 2]

// Module 16568 (VibegrationsSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import _modDef3723 from "module_3723" /* 3723 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import VibegrationsProjectStore2 from "VibegrationsProjectStore" /* 8699 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const VibegrationsProjectStore = VibegrationsProjectStore2;
let c3, closure_2, closure_3, dependencyMap, importDefault, projectId, tabs;

let c10;
let tmp5;
let unpackModuleId;
const useVibegrationsProjectSettingsFormDefault = tmp5(16569);
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let isProjectOwner = VibegrationsProjectStore2.isProjectOwner;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const VibegrationsSettingsSheet = "VibegrationsSettingsSheet";
let obj = { project: _modDef3723.wo1EUp, app: _modDef3723["8drwHu"], secrets: _modDef3723.iD7xfZ, model: _modDef3723.aMTBSX };
let closure_14 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  ({ gap: nativeDefault.space.PX_16, paddingBottom });
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((projectId) => {
  let closure_1;
  let first;
  let initialTab;
  let isPreview;
  let note;
  let notifyAgent;
  let scopeKeys;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp18;
  let tmp7;
  let tmp9;
  obj = projectId(576);
  const cResult = obj.c(74);
  projectId = projectId.projectId;
  ({ initialTab, scopeKeys, note, notifyAgent, isPreview } = projectId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  closure_14(useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom);
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [VibegrationsProjectStore];
    cResult[1] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== projectId) {
    class E {
      constructor() {
        return closure_8.getProject(projectId);
      }
    }
    const items1 = [projectId];
    cResult[2] = projectId;
    cResult[3] = E;
    cResult[4] = items1;
    tmp10 = items1;
    tmp9 = E;
  } else {
    class E {
      constructor() {
        return closure_8.getProject(projectId);
      }
    }
    tmp10 = cResult[4];
  }
  const tmpResult = projectId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp9, tmp10);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class E {
      constructor() {
        return closure_8.getProject(projectId);
      }
    }
    const items2 = [VibegrationsConnectionStore];
    cResult[5] = items2;
    tmp12 = items2;
  } else {
    class E {
      constructor() {
        return closure_8.getProject(projectId);
      }
    }
  }
  if (cResult[6] !== projectId) {
    class K {
      constructor() {
        modelSettings = closure_7.getModelSettings(projectId);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    const items3 = [projectId];
    cResult[6] = projectId;
    cResult[7] = K;
    cResult[8] = items3;
    tmp14 = items3;
    tmp13 = K;
  } else {
    class K {
      constructor() {
        modelSettings = closure_7.getModelSettings(projectId);
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
    class K {
      constructor() {
        modelSettings = closure_7.getModelSettings(projectId);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
    const items4 = [VibegrationsConnectionStore];
    cResult[9] = items4;
    tmp16 = items4;
  } else {
    class K {
      constructor() {
        modelSettings = closure_7.getModelSettings(projectId);
        tierSettings = undefined;
        if (modelSettings != null) {
          tierSettings = modelSettings.tierSettings;
        }
        return null != tierSettings;
      }
    }
  }
  if (cResult[10] !== projectId) {
    class O {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
    const items5 = [projectId];
    cResult[10] = projectId;
    cResult[11] = items5;
    cResult[12] = O;
    tmp18 = O;
    tmp17 = items5;
  } else {
    class O {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
    tmp18 = cResult[12];
  }
  const tmpResult4 = projectId(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(tmp16, tmp18, tmp17);
  if (cResult[13] !== stateFromStores) {
    class O {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
    let tmp21 = null != stateFromStores;
    if (tmp21) {
      class O {
        constructor() {
          return "open" === closure_7.getConnState(projectId);
        }
      }
      tmp21 = isProjectOwner(stateFromStores);
    }
    cResult[13] = stateFromStores;
    cResult[14] = tmp21;
  } else {
    class O {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
  }
  const tmp5Result = useVibegrationsProjectSettingsFormDefault;
  if (stateFromStores != null) {
    class O {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
  }
  if (undefined == null) {
    class O {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
      }
    }
  }
  importDefault = tmp5Result(projectId, undefined);
  tmp5Result(projectId, undefined);
  if (cResult[15] === isPreview) {
    class O {
      constructor() {
        return "open" === closure_7.getConnState(projectId);
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
}) : ((projectId) => {
  let BottomSheetTitleHeader;
  let Tuz9vw;
  let closure_4;
  let closure_9;
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
  isProjectOwner = undefined;
  let found;
  let closure_11;
  let canSave;
  let tmp = stateFromStores1;
  const tmp2 = dependencyMap;
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, isPreview } = projectId);
  const tmp4 = projectId;
  let tmp3 = closure_14(stateFromStores1(6471)({ includeKeyboardHeight: true }).insets.bottom);
  obj = projectId(504);
  let items = [memo];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => VibegrationsProjectStore.getProject(projectId), items1);
  let obj2 = projectId(504);
  const items2 = [closure_7];
  const items3 = [projectId];
  stateFromStores1 = obj2.useStateFromStores(items2, () => {
    const modelSettings = VibegrationsConnectionStore.getModelSettings(projectId);
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
  const stateFromStores2 = obj3.useStateFromStores(items4, () => "open" === VibegrationsConnectionStore.getConnState(projectId), items5);
  if (tmp8) {
    tmp8 = isProjectOwner(stateFromStores);
  }
  dependencyMap = tmp8;
  let guild_id;
  const tmpResult = tmp(16569);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmpResultResult = tmpResult(projectId, guild_id);
  _asyncToGenerator = tmpResultResult;
  const tmp13 = tmp(16571)({ projectId, scopeKeys, note, notifyAgent, isPreview });
  _slicedToArray = tmp13;
  isScoped = tmp13.isScoped;
  loaded = tmp13.loaded;
  if (loaded) {
    loaded = tmp13.valueCount > 0 || 0 === tmp13.secretCount;
  }
  closure_7 = tmp15;
  let obj4 = isScoped;
  const items6 = [stateFromStores1, tmp8, loaded, tmp15];
  memo = isScoped.useMemo(() => {
    const items = [];
    const tmp = closure_2;
    if (tmp) {
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
    return items;
  }, items6);
  const tmp16 = _slicedToArray(isScoped.useState(null), 2);
  isProjectOwner = tmp17;
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
    let tmp20 = !isScoped && tmpResultResult.canSave;
    canSave = tmp20;
  }
  const items8 = [tmp13, canSave, tmpResultResult, tmpResultResult.saving || tmp13.saving, isScoped, found, memo];
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
        return { value: "IconComponent", done: "IconComponent" };
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
            const tmp39 = canSave;
            if (tmp39) {
              const tmp20 = closure_11;
              if (!tmp20) {
                let submitResult = isScoped;
                if (!submitResult) {
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
          const tmp36 = closure_2;
          if (tmp36) {
            const tmp7 = closure_3;
            if (tmp7) {
              obj = stateFromStores1(c2[16]);
              obj.hideActionSheet(closure_1_12);
            }
          }
          if (closure_2) {
            let str2 = "secrets";
            if ("secrets" !== closure_129_10) {
              const tmp37 = closure_129_9;
              if (closure_129_8.includes("app")) {
                str2 = "app";
              }
              tmp37(str2);
            }
          } else {
            closure_129_9("project");
          }
        }
        c3 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp26) {
        c3 = 3;
        throw tmp26;
      }
    }
  }), items8);
  let obj5 = { startExpanded: true, dismissAccessibilityLabel: intl.string(tmp(3723).Wzi4Jd), header: tmp22(BottomSheetTitleHeader, obj6), children: tmp24(tmp25, obj7) };
  const ActionSheet = tmp4(6701).ActionSheet;
  intl = tmp4(1126).intl;
  BottomSheetTitleHeader = tmp4(6644).BottomSheetTitleHeader;
  const intl2 = tmp4(1126).intl;
  const string = intl2.string;
  const tmpResult2 = tmp(3723);
  let tmp22Result = null;
  obj6 = { title: string(isScoped ? tmpResult2.wgDhiQ : tmpResult2.cWmjzs) };
  obj7 = { style: tmp3.container, children: items9 };
  tmp24 = closure_11;
  tmp25 = loaded;
  if (!isScoped) {
    tmp22Result = null;
    if (memo.length > 1) {
      tmp22Result = null;
      if (null != found) {
        const obj8 = { tabs: memo, selected: found, onSelect: tmp16[1] };
        tmp22Result = tmp22(closure_15, obj8, memo.join(","));
      }
    }
  }
  items9 = [tmp22Result, , , , , , ];
  if (isScoped) {
    fields = tmp13.fields;
  } else {
    let str2 = "app";
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
  let secretFields = null;
  if (!isScoped) {
    secretFields = null;
    if ("secrets" === found) {
      secretFields = tmp13.secretFields;
    }
  }
  items9[3] = secretFields;
  let tmp22Result3 = null;
  if (!isScoped) {
    tmp22Result3 = null;
    if ("model" === found) {
      const obj9 = { projectId };
      tmp22Result3 = tmp22(tmp4(16572).VibegrationsModelSettingsContent, obj9);
    }
  }
  items9[4] = tmp22Result3;
  let tmp32 = null;
  if (!isScoped) {
    tmp32 = null;
    if (null == found) {
      let tmp22Result4;
      if (stateFromStores2) {
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(tmp(3723).URnN4B) };
        const Text = tmp4(4886).Text;
        intl3 = tmp4(1126).intl;
        tmp22Result4 = tmp22(Text, obj10);
      } else {
        tmp22Result4 = tmp22(tmp4(5968).ActivityIndicator, {});
      }
      tmp32 = tmp22Result4;
    }
  }
  items9[5] = tmp32;
  const Button = tmp4(5594).Button;
  const intl4 = tmp4(1126).intl;
  const string2 = intl4.string;
  if (isScoped) {
    Tuz9vw = tmp(3723).Tuz9vw;
  } else {
    Tuz9vw = tmp4(1126).t["R3BPH+"];
  }
  const obj11 = { text: string2(Tuz9vw), variant: "primary", loading: tmpResultResult.saving || tmp13.saving, disabled: !canSave, onPress: callback };
  items9[6] = found(Button, obj11);
  return found(ActionSheet, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((tabs) => {
  let first;
  let onSelect;
  let selected;
  let tmp17Result;
  let tmp5;
  let tmp7;
  obj = tabs(576);
  const cResult = obj.c(18);
  tabs = tabs.tabs;
  ({ selected, onSelect } = tabs);
  [tmp5, dependencyMap] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      dependencyMap(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tabs) {
    let tmp8;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function x(id) {
        let intl;
        obj = { id, label: intl.string(closure_1_13[id]), page: null };
        intl = tabs(dependencyMap[17]).intl;
        return obj;
      };
      cResult[3] = fn2;
      tmp8 = fn2;
    } else {
      tmp8 = cResult[3];
    }
    const mapped = tabs.map(tmp8);
    cResult[1] = tabs;
    cResult[2] = mapped;
    tmp7 = mapped;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[4] === selected) {
    let tmp10;
    if (cResult[5] === tabs) {
      tmp10 = cResult[6];
    }
    const _Math = Math;
    const bound = Math.max(0, tmp10);
    if (cResult[7] === onSelect) {
      let tmp13;
      if (cResult[8] === tabs) {
        tmp13 = cResult[9];
      }
      if (cResult[10] === tmp7) {
        if (cResult[11] === tmp5) {
          if (cResult[12] === bound) {
            let tmp14;
            if (cResult[13] === tmp13) {
              tmp14 = cResult[14];
            }
            const tmpResult = tabs(9282);
            const segmentedControlState = tmpResult.useSegmentedControlState(tmp14);
            if (cResult[15] === segmentedControlState) {
              let tmp16;
              if (cResult[16] === tabs.length) {
                tmp16 = cResult[17];
              }
              return tmp16;
            }
            class P {
              constructor(arg0) {
                if (null != tabs[arg0]) {
                  onSelect(tabs[arg0]);
                }
              }
            }
            const obj2 = { onLayout: first, children: tmp17Result };
            const tmp18 = View;
            if (tabs.length > 3) {
              const obj3 = { state: segmentedControlState };
              tmp17Result = tmp17(tmp(12282).Tabs, obj3);
            } else {
              const obj4 = { state: segmentedControlState };
              tmp17Result = tmp17(tmp(9283).SegmentedControl, obj4);
            }
            const tmp17Result2 = tmp17(tmp18, obj2);
            cResult[15] = segmentedControlState;
            cResult[16] = tabs.length;
            cResult[17] = tmp17Result2;
            tmp16 = tmp17Result2;
          }
        }
      }
      const obj5 = { items: tmp7, pageWidth: null, defaultIndex: bound, onSetActiveIndex: tmp13 };
      class P {
        constructor(arg0) {
          if (null != tabs[arg0]) {
            onSelect(tabs[arg0]);
          }
        }
      }
      cResult[10] = tmp7;
      cResult[11] = tmp5;
      cResult[12] = bound;
      cResult[13] = tmp13;
      cResult[14] = obj5;
      tmp14 = obj5;
    }
    class P {
      constructor(arg0) {
        if (null != tabs[arg0]) {
          onSelect(tabs[arg0]);
        }
      }
    }
    cResult[7] = onSelect;
    cResult[8] = tabs;
    cResult[9] = P;
    tmp13 = P;
  }
  const index = tabs.indexOf(selected);
  cResult[4] = selected;
  cResult[5] = tabs;
  cResult[6] = index;
  tmp10 = index;
}) : ((tabs) => {
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
    obj = { id, label: intl.string(closure_1_13[id]), page: null };
    intl = tabs(_undefined[17]).intl;
    return obj;
  }), items);
  const tmp7 = tabs(9282);
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
    tmp9Result = tmp9(tmp5(12282).Tabs, obj3);
  } else {
    const obj4 = { state: segmentedControlState };
    tmp9Result = tmp9(tmp5(9283).SegmentedControl, obj4);
  }
  return closure_10(tmp10, obj2);
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsSheet.tsx");

export default tmp3;
export const VIBEGRATIONS_SETTINGS_SHEET_KEY = "VibegrationsSettingsSheet";
