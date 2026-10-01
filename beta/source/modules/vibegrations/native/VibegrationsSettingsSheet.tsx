// Module ID: 16260
// Function ID: 16261
// Name: VibegrationsSettingsSheet
// Dependencies: [5, 32, 19, 17, 12642, 8495, 21, 3715, 4836, 576, 6402, 504, 16261, 16263, 4800, 6618, 1115, 6570, 16264, 4832, 5889, 5281, 9083, 12111, 9084, 2]
// Exports: default

// Module 16260 (VibegrationsSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import _modDef3715 from "module_3715" /* 3715 */;
import VibegrationsProjectStore2 from "VibegrationsProjectStore" /* 8495 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12642 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const VibegrationsProjectStore = VibegrationsProjectStore2;
let c3, closure_2, closure_3, dependencyMap;

let c10;
let unpackModuleId;
function SettingsTabStrip(tabs) {
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
    intl = tabs(_undefined[16]).intl;
    return obj;
  }), items);
  const tmp7 = tabs(9083);
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
    tmp9Result = tmp9(tmp5(12111).Tabs, obj3);
  } else {
    const obj4 = { state: segmentedControlState };
    tmp9Result = tmp9(tmp5(9084).SegmentedControl, obj4);
  }
  return closure_10(tmp10, obj2);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
let isProjectOwner = VibegrationsProjectStore2.isProjectOwner;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const VibegrationsSettingsSheet_str = "VibegrationsSettingsSheet";
let obj = { project: _modDef3715.wo1EUp, app: _modDef3715["8drwHu"], secrets: _modDef3715.iD7xfZ, model: _modDef3715.aMTBSX };
let closure_14 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom } };
  ({ gap: nativeDefault.space.PX_16, paddingBottom });
  return obj;
});
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsSettingsSheet.tsx");

export default function VibegrationsSettingsSheet(projectId) {
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
  let tmp3 = closure_14(stateFromStores1(6402)({ includeKeyboardHeight: true }).insets.bottom);
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
  const tmpResult = tmp(16261);
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = guildId;
  }
  const tmpResultResult = tmpResult(projectId, guild_id);
  _asyncToGenerator = tmpResultResult;
  const tmp13 = tmp(16263)({ projectId, scopeKeys, note, notifyAgent, isPreview });
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
        return { value: "HermesInternal", done: null };
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
              obj = stateFromStores1(c2[14]);
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
        return { value: "HermesInternal", done: null };
      } catch (tmp26) {
        c3 = 3;
        throw tmp26;
      }
    }
  }), items8);
  let obj5 = { startExpanded: true, dismissAccessibilityLabel: intl.string(tmp(3715).Wzi4Jd), header: tmp22(BottomSheetTitleHeader, obj6), children: tmp24(tmp25, obj7) };
  const ActionSheet = tmp4(6618).ActionSheet;
  intl = tmp4(1115).intl;
  BottomSheetTitleHeader = tmp4(6570).BottomSheetTitleHeader;
  const intl2 = tmp4(1115).intl;
  const string = intl2.string;
  const tmpResult2 = tmp(3715);
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
        tmp22Result = tmp22(SettingsTabStrip, obj8, memo.join(","));
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
      tmp22Result3 = tmp22(tmp4(16264).VibegrationsModelSettingsContent, obj9);
    }
  }
  items9[4] = tmp22Result3;
  let tmp32 = null;
  if (!isScoped) {
    tmp32 = null;
    if (null == found) {
      let tmp22Result4;
      if (stateFromStores2) {
        const obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl3.string(tmp(3715).URnN4B) };
        const Text = tmp4(4832).Text;
        intl3 = tmp4(1115).intl;
        tmp22Result4 = tmp22(Text, obj10);
      } else {
        tmp22Result4 = tmp22(tmp4(5889).ActivityIndicator, {});
      }
      tmp32 = tmp22Result4;
    }
  }
  items9[5] = tmp32;
  const Button = tmp4(5281).Button;
  const intl4 = tmp4(1115).intl;
  const string2 = intl4.string;
  if (isScoped) {
    Tuz9vw = tmp(3715).Tuz9vw;
  } else {
    Tuz9vw = tmp4(1115).t["R3BPH+"];
  }
  const obj11 = { text: string2(Tuz9vw), variant: "primary", loading: tmpResultResult.saving || tmp13.saving, disabled: !canSave, onPress: callback };
  items9[6] = found(Button, obj11);
  return found(ActionSheet, obj5);
};
export const VIBEGRATIONS_SETTINGS_SHEET_KEY = "VibegrationsSettingsSheet";
