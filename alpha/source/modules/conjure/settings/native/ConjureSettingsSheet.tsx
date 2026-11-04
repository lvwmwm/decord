// Module ID: 12324
// Function ID: 12325
// Name: ConjureSettingsSheet
// Dependencies: [5, 32, 19, 17, 11028, 11043, 6979, 21, 3995, 5141, 575, 504, 12325, 12335, 12358, 7502, 1113, 7457, 7503, 6162, 12360, 12363, 12365, 5761, 7095, 5768, 9125, 12371, 9359, 2]
// Exports: default

// Module 12324 (ConjureSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef3995 from "module_3995" /* 3995 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 11028 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 11043 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6979 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let c3, closure_3, dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let obj3;
function SettingsTabStrip(tabs) {
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
    intl = tabs(_undefined[16]).intl;
    return obj;
  }), items);
  const tmp7 = tabs(9125);
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
    tmp11Result = tmp11(tmp5(12371).Tabs, obj3);
  } else {
    const obj4 = { state: segmentedControlState };
    tmp11Result = tmp11(tmp5(9359).SegmentedControl, obj4);
  }
  return closure_12(tmp12, obj2);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let ConjureProjectStore = ConjureProjectStore_mod;
({ canPublishProject: c9, isProjectOwner: c10 } = ConjureProjectStore);
ConjureProjectStore = ConjureProjectStore_mod;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { project: _modDef3995.W0eQfN, app: _modDef3995.lFaJYF, secrets: _modDef3995.vDpCPU, model: _modDef3995.Rs3qc9, linked: _modDef3995.fBEHdq, experimental: _modDef3995["0Pe9uw"] };
let obj2 = { container: obj3 };
obj3 = { gap: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj2);
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default function ConjureSettingsSheet(projectId) {
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
  let obj7;
  let obj8;
  let obj9;
  let onSaved;
  let scopeKeys;
  let tmp30;
  let tmp31;
  projectId = projectId.projectId;
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
  ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
  obj = react;
  const tmp = canSave();
  let ref = react.useRef(null);
  const tmp3 = projectId;
  let tmp4 = stateFromStores1;
  const obj2 = projectId(stateFromStores1[11]);
  let items = [memo];
  const items1 = [projectId];
  const stateFromStores = obj2.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
  let obj3 = projectId(stateFromStores1[11]);
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
  let obj4 = projectId(stateFromStores1[11]);
  const items4 = [closure_7];
  const items5 = [projectId];
  let tmp8 = null != stateFromStores;
  const stateFromStores2 = obj4.useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
  if (tmp8) {
    tmp8 = closure_10(stateFromStores);
  }
  _asyncToGenerator = tmp8;
  let tmp10 = null != stateFromStores && loaded(stateFromStores);
  _slicedToArray = tmp10;
  let guild_id;
  const tmp13 = ref(tmp4[12]);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  let obj5 = { readOnly: !tmp8 };
  const tmp13Result = tmp13(projectId, guild_id, obj5);
  react = tmp13Result;
  const tmp16 = ref(tmp4[13])({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
  closure_6 = tmp16;
  const tmp17 = ref(tmp4[14])(projectId, tmp10);
  closure_7 = tmp18;
  isScoped = tmp16.isScoped;
  loaded = tmp16.loaded;
  if (loaded) {
    let tmp19 = tmp16.valueCount > 0 || 0 === tmp16.secretCount;
    loaded = tmp19;
  }
  closure_10 = tmp20;
  const items6 = [tmp10, tmp18, stateFromStores1, tmp8, loaded, tmp20];
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
  let hasItem = tmp8 || isScoped;
  if (!hasItem) {
    let str = "app";
    hasItem = memo.includes("app");
  }
  if (!hasItem) {
    let str2 = "secrets";
    hasItem = memo.includes("secrets");
  }
  canSave = tmp16.canSave;
  if (!canSave) {
    canSave = !isScoped && tmp8 && tmp13Result.canSave;
    const tmp26 = !isScoped && tmp8 && tmp13Result.canSave;
  }
  const items8 = [tmp16, canSave, tmp8, tmp13Result, tmp8 && tmp13Result.saving || tmp16.saving, isScoped, found, memo];
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
        return { value: "HermesInternal", done: null };
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
        return { value: "HermesInternal", done: null };
      } catch (tmp30) {
        c3 = 3;
        throw tmp30;
      }
    }
  }), items8);
  const obj6 = { ref, startExpanded: true, keyboardShouldPersistTaps: "always", dismissAccessibilityLabel: intl.string(ref(tmp4[8]).bA4VU5), header: closure_12(BottomSheetTitleHeader, obj7), children: tmp30(tmp31, obj9) };
  const ActionSheet = tmp3(tmp4[15]).ActionSheet;
  intl = tmp3(tmp4[16]).intl;
  BottomSheetTitleHeader = tmp3(tmp4[17]).BottomSheetTitleHeader;
  const intl2 = tmp3(tmp4[16]).intl;
  const string = intl2.string;
  const tmp12Result = ref(tmp4[8]);
  obj7 = { title: string(isScoped ? tmp12Result["jZjP+I"] : tmp12Result.I2XSKe), trailing: closure_12(tmp3(tmp4[18]).ActionSheetCloseButton, obj8) };
  tmp30 = found;
  let tmp28Result = null;
  obj8 = {
    onPress() {
      const current = ref.current;
      let closeActionSheetResult;
      if (current != null) {
        closeActionSheetResult = current.closeActionSheet();
      }
      return closeActionSheetResult;
    }
  };
  obj9 = { style: tmp.container, children: items9 };
  tmp31 = closure_6;
  if (!isScoped) {
    tmp28Result = null;
    if (memo.length > 1) {
      tmp28Result = null;
      if (null != found) {
        const obj10 = { tabs: memo, selected: found, onSelect: tmp22 };
        tmp28Result = tmp28(SettingsTabStrip, obj10, memo.join(","));
      }
    }
  }
  items9 = [tmp28Result, , , , , , , , ];
  if (isScoped) {
    fields = tmp16.fields;
  } else {
    fields = null;
  }
  items9[1] = fields;
  let tmp30Result = null;
  if (!isScoped) {
    tmp30Result = null;
    if ("project" === found) {
      const obj11 = { spacing: ref(tmp4[10]).space.PX_24, children: items10 };
      const Stack = tmp3(tmp4[19]).Stack;
      items10 = [tmp13Result.fields, ];
      const obj12 = { projectId, canEdit: tmp10 };
      items10[1] = closure_12(ref(tmp4[20]), obj12, projectId);
      tmp30Result = tmp30(Stack, obj11);
    }
  }
  items9[2] = tmp30Result;
  let tmp28Result5 = null;
  if (!isScoped) {
    tmp28Result5 = null;
    if ("linked" === found) {
      const obj13 = { linkedApps: tmp17 };
      tmp28Result5 = tmp28(tmp12(tmp4[21]), obj13);
    }
  }
  items9[3] = tmp28Result5;
  let experimentalFields = null;
  if (!isScoped) {
    experimentalFields = null;
    if ("experimental" === found) {
      experimentalFields = tmp13Result.experimentalFields;
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
  let tmp28Result6 = null;
  if (!isScoped) {
    tmp28Result6 = null;
    if ("model" === found) {
      const obj14 = { projectId };
      tmp28Result6 = tmp28(tmp3(tmp4[22]).ConjureModelSettingsContent, obj14);
    }
  }
  items9[6] = tmp28Result6;
  let tmp40 = null;
  if (!isScoped) {
    tmp40 = null;
    if (null == found) {
      let tmp28Result7;
      if (stateFromStores2) {
        const obj15 = { variant: "body-sm/normal", color: "text-muted", children: intl3.string(ref(tmp4[8]).lJJayk) };
        const Text = tmp3(tmp4[23]).Text;
        intl3 = tmp3(tmp4[16]).intl;
        tmp28Result7 = tmp28(Text, obj15);
      } else {
        tmp28Result7 = tmp28(tmp3(tmp4[24]).ActivityIndicator, {});
      }
      tmp40 = tmp28Result7;
    }
  }
  items9[7] = tmp40;
  let tmp28Result8 = null;
  if (hasItem) {
    let A7dQd9;
    const Button = tmp3(tmp4[25]).Button;
    const intl4 = tmp3(tmp4[16]).intl;
    const string2 = intl4.string;
    if (isScoped) {
      A7dQd9 = tmp12(tmp4[8]).A7dQd9;
    } else {
      A7dQd9 = tmp3(tmp4[16]).t["R3BPH+"];
    }
    const obj16 = { text: string2(A7dQd9), variant: "primary", loading: tmp8 && tmp13Result.saving || tmp16.saving, disabled: !canSave, onPress: callback };
    tmp28Result8 = tmp28(Button, obj16);
  }
  items9[8] = tmp28Result8;
  return closure_12(ActionSheet, obj6);
};
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
