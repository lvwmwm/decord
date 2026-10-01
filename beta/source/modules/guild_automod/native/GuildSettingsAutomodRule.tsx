// Module ID: 17322
// Function ID: 17323
// Name: GuildSettingsAutomodRule
// Dependencies: [5, 32, 19, 17306, 17308, 11341, 21, 4836, 576, 1485, 16655, 2021, 17309, 5209, 1115, 5936, 6795, 8053, 5279, 4832, 6024, 6621, 17323, 17334, 17337, 5999, 5917, 11346, 4527, 4735, 6610, 6461, 2]
// Exports: default

// Module 17322 (GuildSettingsAutomodRule)
import nativeDefault from "native" /* 576 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import NavigatorHeader2 from "NavigatorHeader" /* 5936 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import Constants from "Constants" /* 11341 */;
import AutomodStore from "AutomodStore" /* 17306 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17309 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildSettingsAutomodRuleStore from "GuildSettingsAutomodRuleStore" /* 17308 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2, c3, c5, c6, closure_3, navigation;

let c10;
let closure_12;
let metroImportAll;
let metroImportDefault;
let obj2;
let unpackModuleId;
const useAutomodRulesList = AutomodStore.useAutomodRulesList;
({ useAutomodEditingRuleActions: metroImportDefault, useAutomodEditingRuleState: metroImportAll } = GuildSettingsAutomodRuleStore);
const MAX_RULE_NAME_LENGTH = Constants.MAX_RULE_NAME_LENGTH;
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
let c13 = "automod-delete-rule";
let obj = { stack: obj2 };
obj2 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_14 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_automod/native/GuildSettingsAutomodRule.tsx");

export default function GuildSettingsAutomodRule(guildId) {
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items6;
  let items8;
  let obj5;
  guildId = guildId.guildId;
  const triggerType = guildId.triggerType;
  let rulesByTriggerType;
  let hasChanges;
  let isLoading;
  let ref;
  let closure_16;
  let callback;
  let name;
  let callback1;
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp2 = guildId;
  let tmp3 = rulesByTriggerType;
  let tmp = ref();
  let obj = guildId(rulesByTriggerType[9]);
  navigation = obj.useNavigation();
  const tmp5 = hasChanges(guildId);
  rulesByTriggerType = tmp5.rulesByTriggerType;
  const updateRule = tmp5.updateRule;
  const removeRule = tmp5.removeRule;
  const tmp6 = isLoading();
  const editingRule = tmp6.editingRule;
  hasChanges = tmp6.hasChanges;
  const setEditingRule = tmp6.setEditingRule;
  const tmp7 = setEditingRule();
  isLoading = tmp7.isLoading;
  const errorMessage = tmp7.errorMessage;
  const saveEditingRule = tmp7.saveEditingRule;
  const cancelEditingRule = tmp7.cancelEditingRule;
  let obj2 = guildId(rulesByTriggerType[10]);
  closure_12 = obj2.useIsUndeletableMentionSpamRule(guildId, triggerType);
  const DeveloperMode = guildId(rulesByTriggerType[11]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  let obj3 = editingRule;
  const items = [rulesByTriggerType];
  const memo = editingRule.useMemo(() => {
    const obj = AutomodRuleUtils;
    return obj.getRulesFromTriggerTypeMap(rulesByTriggerType);
  }, items);
  ref = editingRule.useRef(null);
  const items1 = [errorMessage];
  const effect = editingRule.useEffect(() => {
    if (null != errorMessage) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: true });
      }
    }
  }, items1);
  const items2 = [cancelEditingRule];
  const effect1 = editingRule.useEffect(() => cancelEditingRule, items2);
  const tmp13 = removeRule(editingRule.useState(false), 2);
  let closure_15 = tmp13[1];
  let tmp15 = null != editingRule;
  const first = tmp13[0];
  if (tmp15) {
    const tmp2Result = tmp2(tmp3[12]);
    tmp15 = !tmp2Result.isBackendPersistedRule(editingRule);
  }
  const tmp16 = (hasChanges || tmp15) && !first;
  closure_16 = tmp16;
  const items3 = [saveEditingRule, memo, updateRule, navigation];
  callback = obj3.useCallback(updateRule(function*(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
            let closure_1 = tmp4;
            closure_0 = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: saveEditingRule(memo), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_0 = value;
          if (null != closure_0) {
            closure_129_3(closure_0);
            if (closure_129_1.isFocused()) {
              closure_129_1.pop();
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp19) {
        c3 = 3;
        throw tmp19;
      }
    }
  }), items3);
  name = undefined;
  if (editingRule != null) {
    name = editingRule.name;
  }
  const items4 = [hasChanges, name];
  callback1 = obj3.useCallback(function() {
    let _Promise1;
    let ruleName;
    if (hasChanges) {
      const self = this;
      const self2 = this;
      _Promise1 = new _Promise((arg0) => {
        let intl;
        let intl2;
        let intl3;
        let obj2;
        let closure_0 = arg0;
        const obj = {
          key: "automod-unsaved-changes",
          title: intl.string(guildId(rulesByTriggerType[14]).t.kknTmH),
          content: intl2.format(guildId(rulesByTriggerType[14]).t["ff/gx7"], obj2),
          confirmText: intl3.string(guildId(rulesByTriggerType[14]).t["cY+Oob"]),
          onConfirm() {
            return closure_0(true);
          },
          onCloseCallback() {
            return closure_0(false);
          }
        };
        const showConfirmModal = guildId(rulesByTriggerType[13]).showConfirmModal;
        guildId(rulesByTriggerType[13]);
        intl = guildId(rulesByTriggerType[14]).intl;
        intl2 = guildId(rulesByTriggerType[14]).intl;
        obj2 = { ruleName };
        intl3 = guildId(rulesByTriggerType[14]).intl;
        showConfirmModal(obj);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items4);
  const items5 = [navigation, isLoading, tmp16, callback, callback1, name];
  const effect2 = obj3.useEffect(() => {
    let fn;
    let fn2;
    let onPress;
    let tmp = navigation;
    const setOptions = navigation.setOptions;
    const tmp2 = isLoading;
    if (tmp2) {
      fn = () => null;
    } else {
      const tmp3 = require;
      let obj = NavigatorHeader2;
      fn = obj.getHeaderConditionalBackButton(callback1);
    }
    const obj2 = {
      headerLeft: fn,
      headerRight: fn2,
      headerTitle() {
        let intl;
        let str = name;
        const NavigatorHeader = guildId(rulesByTriggerType[15]).NavigatorHeader;
        const tmp = saveEditingRule;
        if (name == null) {
          str = "";
        }
        const obj = { title: str, subtitle: intl.string(guildId(rulesByTriggerType[14]).t.uRelgx) };
        intl = tmp2(tmp3[14]).intl;
        return tmp(NavigatorHeader, obj);
      }
    };
    if (tmp2) {
      fn2 = () => saveEditingRule(guildId(rulesByTriggerType[15]).HeaderSubmittingIndicator, {});
    } else if (closure_16) {
      fn2 = () => {
        let intl;
        const obj = { onPress, text: intl.string(guildId(rulesByTriggerType[14]).t["R3BPH+"]) };
        const HeaderActionButton = guildId(rulesByTriggerType[16]).HeaderActionButton;
        intl = guildId(rulesByTriggerType[14]).intl;
        return saveEditingRule(HeaderActionButton, obj);
      };
    }
    setOptions(obj2);
  }, items5);
  let tmp28Result2 = null;
  if (null != editingRule) {
    tmp28Result2 = null;
    if (editingRule.triggerType === triggerType) {
      const tmp28 = cancelEditingRule;
      const tmp29 = closure_12;
      let obj4 = { ref, contentContainerStyle, children: tmp28(Stack, obj5) };
      const Form = tmp2(tmp3[17]).Form;
      obj5 = { style: tmp.stack, spacing: navigation(tmp3[8]).space.PX_24, children: items6 };
      Stack = tmp2(tmp3[18]).Stack;
      let tmp30Result = null != errorMessage;
      if (tmp30Result) {
        const obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: errorMessage };
        tmp30Result = tmp30(tmp2(tmp3[19]).Text, obj6);
      }
      items6 = [tmp30Result, , , , , , ];
      const tmp2Result2 = tmp2(tmp3[12]);
      const result = tmp2Result2.isRuleApplicationFilter(editingRule);
      let tmp30Result3 = !result;
      if (tmp30Result3) {
        const obj7 = {
          label: intl.string(tmp2(tmp3[14]).t.WVAHxF),
          placeholder: intl2.string(tmp2(tmp3[14]).t["5AO43K"]),
          maxLength: errorMessage,
          value: editingRule.name,
          onChange(name) {
                  const obj = { name };
                  const merged = Object.assign(editingRule);
                  const tmp2 = isLoading;
                  if (!tmp2) {
                    setEditingRule(obj, true);
                  }
                }
        };
        const TextInput = tmp2(tmp3[20]).TextInput;
        intl = tmp2(tmp3[14]).intl;
        intl2 = tmp2(tmp3[14]).intl;
        tmp30Result3 = tmp30(TextInput, obj7);
      }
      function handleChangeRule(id) {
        const tmp = isLoading;
        if (!tmp) {
          setEditingRule(id, true);
        }
      }
      items6[1] = tmp30Result3;
      const obj8 = {
        label: intl3.string(tmp2(tmp3[14]).t.WrleYK),
        value: editingRule.enabled,
        onValueChange(enabled) {
              const obj = { enabled };
              const merged = Object.assign(editingRule);
              const tmp2 = isLoading;
              if (!tmp2) {
                setEditingRule(obj, true);
              }
            },
        start: true,
        end: true
      };
      const TableSwitchRow = tmp2(tmp3[21]).TableSwitchRow;
      intl3 = tmp2(tmp3[14]).intl;
      items6[2] = saveEditingRule(TableSwitchRow, obj8);
      const obj9 = {
        rule: editingRule,
        onChangeRule: handleChangeRule,
        onValidityChange(arg0) {
              return closure_15(!arg0);
            }
      };
      items6[3] = saveEditingRule(navigation(tmp3[22]), obj9);
      const obj10 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[4] = saveEditingRule(navigation(tmp3[23]), obj10);
      const obj11 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[5] = saveEditingRule(navigation(tmp3[24]), obj11);
      let tmp28Result = !tmp15;
      if (tmp28Result) {
        const TableRowGroup = tmp2(tmp3[25]).TableRowGroup;
        const obj12 = {
          variant: "danger",
          label: intl4.string(tmp2(tmp3[14]).t["92m/01"]),
          onPress() {
                  const tmp = editingRule;
                  if (null != editingRule) {
                    const id = tmp.id;
                    name = tmp.name;
                    const showConfirmModal = guildId(rulesByTriggerType[13]).showConfirmModal;
                    let obj2 = { key: memo, title: null, content: null, confirmText: null, onConfirm: null };
                    const tmp24 = guildId(rulesByTriggerType[13]);
                    const intl5 = guildId(rulesByTriggerType[14]).intl;
                    const string = intl5.string;
                    const t = guildId(rulesByTriggerType[14]).t;
                    if (closure_12) {
                      obj2.title = string(t.MmpqMC);
                      const intl3 = guildId(rulesByTriggerType[14]).intl;
                      obj2.content = intl3.string(guildId(rulesByTriggerType[14]).t.XMdBLw);
                      const intl4 = guildId(rulesByTriggerType[14]).intl;
                      let tmp18 = guildId;
                      obj2.confirmText = intl4.string(guildId(rulesByTriggerType[14]).t.BddRzS);
                      obj2.onConfirm = function onConfirm() {

                      };
                      showConfirmModal(obj2);
                    } else {
                      obj2.title = string(t.Hy8XgL);
                      const tmp3 = rulesByTriggerType;
                      let intl = guildId(rulesByTriggerType[14]).intl;
                      const tmp4 = guildId;
                      let obj = { ruleName: name };
                      obj2.content = intl.format(guildId(rulesByTriggerType[14]).t.hO7PgW, obj);
                      const intl2 = guildId(rulesByTriggerType[14]).intl;
                      obj2.confirmText = intl2.string(guildId(rulesByTriggerType[14]).t["cY+Oob"]);
                      let closure_0 = updateRule(function*(arg0, value) {
                        let obj3;
                        let v0;
                        if (c6 === 2) {
                          c6 = 3;
                          throw new TypeError("Generator functions may not be called on executing generators");
                        } else if (tmp3 === 3) {
                          if (arg0 === 1) {
                            throw value;
                          } else if (arg0 === 2) {
                            const obj2 = { value, done: true };
                            return obj2;
                          } else {
                            return { value: "HermesInternal", done: null };
                          }
                        } else {
                          let c4;
                          try {
                            let closure_1;
                            c6 = 2;
                            if (0 === c5) {
                              if (arg0 === 1) {
                                c6 = 3;
                                throw value;
                              } else if (arg0 === 2) {
                                c6 = 3;
                                const obj4 = { value, done: true };
                                return obj4;
                              } else {
                                let closure_2 = tmp;
                                closure_1 = tmp4;
                                c4 = 1;
                                c5 = 2;
                                c6 = 1;
                                const obj5 = { value: obj3.deleteAutomodRule(id, closure_0), done: false };
                                obj3 = closure_0(rulesByTriggerType[27]);
                                return obj5;
                              }
                            } else if (1 === c5) {
                              c4 = 0;
                              closure_0 = closure_3;
                              const presentError = closure_0(rulesByTriggerType[28]).presentError;
                              const self = this;
                              const self2 = this;
                              const tmp18 = closure_0(rulesByTriggerType[28]);
                              const aPIError = new closure_0(rulesByTriggerType[29]).APIError(closure_0);
                              const anyErrorMessage = aPIError.getAnyErrorMessage();
                              closure_0 = anyErrorMessage;
                              if (anyErrorMessage == null) {
                                const intl = closure_0(rulesByTriggerType[14]).intl;
                                closure_0 = intl.string(closure_0(rulesByTriggerType[14]).t.fEptJP);
                              }
                              presentError(closure_0);
                              throw closure_0;
                            } else if (arg0 === 1) {
                              c6 = 3;
                              throw value;
                            } else if (arg0 === 2) {
                              c4 = 0;
                              c6 = 3;
                              const obj = { value, done: true };
                              return obj;
                            } else {
                              c4 = 0;
                              c4(closure_130_1, closure_0);
                              closure_1.pop();
                              c6 = 3;
                              return { value: "HermesInternal", done: null };
                            }
                          } catch (tmp37) {
                            closure_3 = tmp37;
                            if (0 === c4) {
                              c6 = 3;
                              throw tmp37;
                            } else {
                              c5 = 1;
                            }
                          }
                        }
                      });
                      obj2.onConfirm = function() {
                        return closure_0(...arguments);
                      };
                      showConfirmModal(obj2);
                    }
                  }
                },
          disabled: isLoading
        };
        const TableRow = tmp2(tmp3[26]).TableRow;
        intl4 = tmp2(tmp3[14]).intl;
        const items7 = [tmp30(TableRow, obj12), ];
        let tmp30Result4 = setting;
        if (tmp30Result4) {
          const obj13 = {
            label: intl5.string(tmp2(tmp3[14]).t.F64hjn),
            onPress() {
                      if (null != editingRule) {
                        const obj = ClipboardUtils;
                        obj.copy(tmp.id);
                        const obj2 = ToastUtils;
                        obj2.presentIdCopied();
                      }
                    }
          };
          const TableRow2 = tmp2(tmp3[26]).TableRow;
          intl5 = tmp2(tmp3[14]).intl;
          tmp30Result4 = tmp30(TableRow2, obj13);
        }
        const obj14 = { hasIcons: false, children: items7 };
        items7[1] = tmp30Result4;
        tmp28Result = tmp28(TableRowGroup, obj14);
      }
      const obj15 = { children: items8 };
      items6[6] = tmp28Result;
      items8 = [tmp30(Form, obj4), tmp30(tmp2(tmp3[31]).NavScrim, {})];
      tmp28Result2 = tmp28(tmp29, obj15);
    }
  }
  return tmp28Result2;
};
