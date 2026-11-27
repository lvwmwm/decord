// Module ID: 18505
// Function ID: 18506
// Name: ConjureSettingsSheet
// Dependencies: [5, 32, 19, 17, 7693, 7703, 6934, 21, 4245, 5043, 575, 5257, 8487, 504, 18506, 18526, 18553, 5641, 1112, 7546, 7507, 18531, 7547, 5634, 7480, 6115, 18555, 18558, 18565, 7047, 8617, 13619, 8618, 2]

// Module 18505 (ConjureSettingsSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4245 from "module_4245" /* 4245 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import ConjureModelSettingsStore from "ConjureModelSettingsStore" /* 7703 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6934 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const ActionSheetActionCreatorsDefault = ActionSheetActionCreators;
let c2, c3, closure_3;

let c10;
let c9;
let closure_12;
let map1;
function openLinkedAppSettings(projectId) {
  let obj3;
  obj = ActionSheetActionCreatorsDefault;
  obj.hideActionSheet(ConjureSettingsSheet_str);
  const obj2 = { content: authStore2(ConjureSettingsSheet, obj3, projectId), key: ConjureSettingsSheet_str };
  const showActionSheet = ActionSheetActionCreators.showActionSheet;
  obj3 = { projectId, initialTab: "linked" };
  ActionSheetActionCreators;
  showActionSheet(obj2);
}
class ConjureSettingsSheet {
  constructor(projectId) {
    let A7dQd9;
    let BottomSheetTitleHeader;
    let closure_4;
    let closure_5;
    let conjureSetupTitleResult;
    let fields;
    let formatToPlainStringResult;
    let guildId;
    let initialTab;
    let intl2;
    let intl5;
    let isPreview;
    let items10;
    let items11;
    let items9;
    let note;
    let notifyAgent;
    let obj14;
    let obj8;
    let obj9;
    let onLayout;
    let onSaved;
    let ref;
    let scopeKeys;
    let tmp38Result;
    let tmp42;
    projectId = projectId.projectId;
    let ref1;
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
    const tmp = ref1;
    let tmp2 = stateFromStores1;
    ({ guildId, initialTab, scopeKeys, note, notifyAgent, onSaved, isPreview } = projectId);
    const tmp3 = ref1(stateFromStores1[12])();
    const height = tmp3.height;
    let num = 0;
    ({ ref, onLayout } = tmp3);
    let tmp4 = closure_16;
    if (undefined !== height) {
      num = height;
    }
    const tmp4Result = tmp4(num);
    obj = react;
    ref1 = react.useRef(null);
    const obj2 = projectId(tmp2[13]);
    let items = [memo];
    const items1 = [projectId];
    const stateFromStores = obj2.useStateFromStores(items, () => ConjureProjectStore.getProject(projectId), items1);
    let obj3 = projectId(tmp2[13]);
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
    let obj4 = projectId(tmp2[13]);
    const items4 = [closure_7];
    const items5 = [projectId];
    let tmp11 = null != stateFromStores;
    const stateFromStores2 = obj4.useStateFromStores(items4, () => "open" === ConjureConnectionStore.getConnState(projectId), items5);
    if (tmp11) {
      tmp11 = closure_10(stateFromStores);
    }
    _asyncToGenerator = tmp11;
    let tmp13 = null != stateFromStores;
    if (tmp13) {
      tmp13 = loaded(stateFromStores);
    }
    _slicedToArray = tmp13;
    let guild_id;
    const tmpResult = tmp(tmp2[14]);
    if (stateFromStores != null) {
      guild_id = stateFromStores.guild_id;
    }
    if (guild_id == null) {
      guild_id = guildId;
    }
    let obj5 = { readOnly: !tmp11 };
    const tmpResultResult = tmpResult(projectId, guild_id, obj5);
    react = tmpResultResult;
    const tmp18 = tmp(tmp2[15])({ projectId, scopeKeys, note, notifyAgent, onSaved, isPreview });
    closure_6 = tmp18;
    let tmp19 = tmp(tmp2[16])(projectId, tmp13);
    closure_7 = tmp20;
    isScoped = tmp18.isScoped;
    loaded = tmp18.loaded;
    if (loaded) {
      loaded = tmp18.valueCount > 0 || 0 === tmp18.secretCount;
    }
    closure_10 = tmp22;
    const items6 = [tmp13, tmp20, stateFromStores1, tmp11, loaded, tmp22];
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
    let tmp23 = _slicedToArray(obj.useState(null), 2);
    let tmp24 = tmp23[1];
    closure_12 = tmp24;
    const items7 = [tmp23[0], initialTab];
    found = items7.find((item) => {
      const hasItem = null != item && memo.includes(item);
      return hasItem;
    });
    if (found == null) {
      found = memo[0];
    }
    closure_14 = tmp26;
    let hasItem = tmp11 || isScoped;
    if (!hasItem) {
      let str = "app";
      hasItem = memo.includes("app");
    }
    if (!hasItem) {
      let str2 = "secrets";
      hasItem = memo.includes("secrets");
    }
    canSave = tmp18.canSave;
    if (!canSave) {
      canSave = !isScoped && tmp11 && tmpResultResult.canSave;
    }
    const items8 = [tmp18, canSave, tmp11, tmpResultResult, tmp26, isScoped, found, memo];
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
              ref1 = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              const tmp46 = canSave;
              if (tmp46) {
                const tmp19 = closure_14;
                if (!tmp19) {
                  let validateResult = null;
                  if (canSave.canSave) {
                    validateResult = null;
                    if (!isScoped) {
                      validateResult = obj2.validate();
                    }
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
                    const tmp23 = isScoped;
                    if (!tmp23) {
                      let str2 = "app";
                      const tmp24 = closure_12;
                      if ("secretFields" === validateResult) {
                        str2 = "secrets";
                      }
                      tmp24(str2);
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
            ref1 = closure_1_4(closure_0, 2);
            closure_2 = ref1[0];
            closure_3 = ref1[1];
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
                const tmp43 = closure_129_12;
                if (closure_129_11.includes("app")) {
                  str = "app";
                }
                tmp43(str);
              }
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp31) {
          c3 = 3;
          throw tmp31;
        }
      }
    }), items8);
    const Button = tmp7(tmp2[17]).Button;
    const intl = tmp7(tmp2[18]).intl;
    const string = intl.string;
    if (isScoped) {
      A7dQd9 = tmp(tmp2[8]).A7dQd9;
    } else {
      A7dQd9 = tmp7(tmp2[18]).t["R3BPH+"];
    }
    const obj6 = { text: string(A7dQd9), variant: "primary", loading: tmp11 && tmpResultResult.saving || tmp18.saving, disabled: !canSave, onPress: callback };
    const tmp30Result = closure_12(Button, obj6);
    const obj7 = { ref: ref1, startExpanded: true, keyboardShouldPersistTaps: "always", dismissAccessibilityLabel: intl2.string(tmp(tmp2[8]).bA4VU5), header: closure_12(BottomSheetTitleHeader, obj8), footer: tmp38Result, children: tmp41(tmp42, obj14) };
    const ActionSheet = tmp7(tmp2[19]).ActionSheet;
    intl2 = tmp7(tmp2[18]).intl;
    BottomSheetTitleHeader = tmp7(tmp2[20]).BottomSheetTitleHeader;
    if (isScoped) {
      let name;
      const conjureSetupTitle = tmp7(tmp2[21]).conjureSetupTitle;
      projectId(tmp2[21]);
      if (stateFromStores != null) {
        name = stateFromStores.name;
      }
      conjureSetupTitleResult = conjureSetupTitle(name);
    } else {
      const intl3 = tmp7(tmp2[18]).intl;
      conjureSetupTitleResult = intl3.string(tmp(tmp2[8]).I2XSKe);
    }
    obj8 = { title: conjureSetupTitleResult, subtitle: formatToPlainStringResult, trailing: closure_12(projectId(tmp2[22]).ActionSheetCloseButton, obj9) };
    formatToPlainStringResult = undefined;
    if (null != tmp18.progress) {
      const intl4 = tmp7(tmp2[18]).intl;
      formatToPlainStringResult = intl4.formatToPlainString(tmp(tmp2[8]).hoevP8, tmp18.progress);
    }
    tmp38Result = undefined;
    obj9 = {
      onPress() {
        const current = ref1.current;
        let closeActionSheetResult;
        if (current != null) {
          closeActionSheetResult = current.closeActionSheet();
        }
        return closeActionSheetResult;
      }
    };
    if (isScoped) {
      let tmp30Result6 = null;
      const obj10 = { style: tmp4Result.footer, ref, onLayout, children: items9 };
      const tmp38 = found;
      const tmp39 = closure_6;
      if (null != tmp18.status) {
        let str3 = "text-muted";
        const Text = tmp7(tmp2[23]).Text;
        if (tmp18.statusIsError) {
          str3 = "text-feedback-critical";
        }
        ({ status: obj11.accessibilityLabel, status: obj11.children } = tmp18);
        const obj12 = { variant: "body-xs/normal", color: str3, lineClamp: projectId(tmp2[21]).SETUP_STATUS_MAX_LINES, accessibilityLabel: null, accessibilityLiveRegion: "polite", children: null };
        tmp30Result6 = tmp30(Text, obj12);
      }
      items9 = [tmp30Result6, ];
      const obj13 = { bottom: true, children: tmp30Result };
      items9[1] = closure_12(projectId(tmp2[24]).SafeAreaPaddingView, obj13);
      tmp38Result = tmp38(tmp39, obj10);
    }
    let tmp30Result7 = null;
    obj14 = { style: tmp4Result.container, children: items10 };
    tmp42 = closure_6;
    if (!isScoped) {
      tmp30Result7 = null;
      if (memo.length > 1) {
        tmp30Result7 = null;
        if (null != found) {
          const obj15 = { tabs: memo, selected: found, onSelect: tmp24 };
          tmp30Result7 = tmp30(SettingsTabStrip, obj15, memo.join(","));
        }
      }
    }
    items10 = [tmp30Result7, , , , , , , , ];
    if (isScoped) {
      fields = tmp18.fields;
    } else {
      fields = null;
    }
    items10[1] = fields;
    let tmp41Result = null;
    if (!isScoped) {
      tmp41Result = null;
      if ("project" === found) {
        const obj16 = { spacing: tmp(tmp2[10]).space.PX_24, children: items11 };
        const Stack = tmp7(tmp2[25]).Stack;
        items11 = [tmpResultResult.fields, ];
        const obj17 = { projectId, canEdit: tmp13 };
        items11[1] = closure_12(tmp(tmp2[26]), obj17, projectId);
        tmp41Result = tmp41(Stack, obj16);
      }
    }
    items10[2] = tmp41Result;
    let tmp30Result8 = null;
    if (!isScoped) {
      tmp30Result8 = null;
      if ("linked" === found) {
        const obj18 = { linkedApps: tmp19, onOpenSettings: openLinkedAppSettings };
        tmp30Result8 = tmp30(tmp(tmp2[27]), obj18);
      }
    }
    items10[3] = tmp30Result8;
    let experimentalFields = null;
    if (!isScoped) {
      experimentalFields = null;
      if ("experimental" === found) {
        experimentalFields = tmpResultResult.experimentalFields;
      }
    }
    items10[4] = experimentalFields;
    let secretFields = null;
    if (!isScoped) {
      secretFields = null;
      if ("secrets" === found) {
        secretFields = tmp18.secretFields;
      }
    }
    items10[5] = secretFields;
    let tmp30Result9 = null;
    if (!isScoped) {
      tmp30Result9 = null;
      if ("model" === found) {
        const obj19 = { projectId };
        tmp30Result9 = tmp30(tmp7(tmp2[28]).ConjureModelSettingsContent, obj19);
      }
    }
    items10[6] = tmp30Result9;
    let tmp52 = null;
    if (!isScoped) {
      tmp52 = null;
      if (null == found) {
        let tmp30Result10;
        if (stateFromStores2) {
          const obj34 = { variant: "body-sm/normal", color: "text-muted", children: intl5.string(tmp(tmp2[8]).lJJayk) };
          const Text2 = tmp7(tmp2[23]).Text;
          intl5 = tmp7(tmp2[18]).intl;
          tmp30Result10 = tmp30(Text2, obj34);
        } else {
          tmp30Result10 = tmp30(tmp7(tmp2[29]).ActivityIndicator, {});
        }
        tmp52 = tmp30Result10;
      }
    }
    items10[7] = tmp52;
    let tmp54 = null;
    if (!isScoped) {
      tmp54 = null;
      if (hasItem) {
        if ("linked" !== found) {
          tmp54 = tmp30Result;
        } else {
          tmp54 = null;
        }
      }
    }
    items10[8] = tmp54;
    return closure_12(ActionSheet, obj7);
  }
}
function SettingsTabStrip(tabs) {
  let onLayout;
  let ref;
  let selected;
  let tmp9Result;
  tabs = tabs.tabs;
  ({ selected, onSelect: importDefault } = tabs);
  let index;
  let setActiveIndex;
  const tmp = index;
  const tmp2 = require("useMeasuredLayout")();
  const width = tmp2.width;
  let num = 0;
  ({ ref, onLayout } = tmp2);
  if (undefined !== width) {
    num = width;
  }
  const items = [tabs];
  const memo = react.useMemo(() => tabs.map((id) => {
    let intl;
    obj = { id, label: intl.string(closure_1_15[id]), page: null };
    intl = tabs(index[18]).intl;
    return obj;
  }), items);
  const tmp5 = tabs(tmp[30]);
  obj = {
    items: memo,
    pageWidth: num,
    defaultIndex: Math.max(0, tabs.indexOf(selected)),
    onSetActiveIndex(arg0) {
      if (null != tabs[arg0]) {
        importDefault(tabs[arg0]);
      }
    }
  };
  const useSegmentedControlState = tmp5.useSegmentedControlState;
  const segmentedControlState = useSegmentedControlState(obj);
  index = tabs.indexOf(selected);
  setActiveIndex = segmentedControlState.setActiveIndex;
  const items1 = [index, setActiveIndex];
  const effect = react.useEffect(() => {
    if (index >= 0) {
      setActiveIndex(tmp, false);
    }
  }, items1);
  const obj2 = { ref, onLayout, children: tmp9Result };
  const tmp10 = View;
  if (tabs.length > 3) {
    const obj3 = { state: segmentedControlState };
    tmp9Result = tmp9(tmp4(tmp[31]).Tabs, obj3);
  } else {
    const obj4 = { state: segmentedControlState };
    tmp9Result = tmp9(tmp4(tmp[32]).SegmentedControl, obj4);
  }
  return closure_12(tmp10, obj2);
}
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let ConjureProjectStore = ConjureProjectStore_mod;
({ canPublishProject: c9, isProjectOwner: c10 } = ConjureProjectStore);
ConjureProjectStore = ConjureProjectStore_mod;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const ConjureSettingsSheet_str = "ConjureSettingsSheet";
let obj = { project: _modDef4245.W0eQfN, app: _modDef4245.lFaJYF, secrets: _modDef4245.vDpCPU, model: _modDef4245.Rs3qc9, linked: _modDef4245.fBEHdq, experimental: _modDef4245["0Pe9uw"] };
let closure_16 = createStyles.createStyles((paddingBottom) => {
  obj = { container: { gap: nativeDefault.space.PX_16, paddingBottom }, footer: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 } };
  ({ gap: nativeDefault.space.PX_16, paddingBottom });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 });
  return obj;
});
const result = size.fileFinishedImporting("modules/conjure/settings/native/ConjureSettingsSheet.tsx");

export default ConjureSettingsSheet;
export const CONJURE_SETTINGS_SHEET_KEY = "ConjureSettingsSheet";
