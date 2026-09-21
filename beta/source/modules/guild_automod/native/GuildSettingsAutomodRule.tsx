// Module ID: 17959
// Function ID: 17960
// Name: GuildSettingsAutomodRule
// Dependencies: [5, 19, 17943, 17945, 11993, 21, 4758, 580, 558, 568, 1488, 17304, 2023, 17946, 5116, 1119, 5839, 7621, 11998, 4457, 4659, 7436, 4754, 6846, 7446, 17960, 17971, 17974, 5903, 5822, 5186, 8876, 7286, 2]

// Module 17959 (GuildSettingsAutomodRule)
import nativeDefault from "native" /* 580 */;
import ToastUtils from "ToastUtils" /* 4457 */;
import NavigatorHeader from "NavigatorHeader" /* 5839 */;
import ClipboardUtils from "ClipboardUtils" /* 7436 */;
import AutomodRuleUtils from "AutomodRuleUtils" /* 17946 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const useAutomodRulesList = fn(17943).useAutomodRulesList;
const GuildSettingsAutomodRuleStore = fn(17945);
({ useAutomodEditingRuleActions: metroRequire, useAutomodEditingRuleState: closure_7 } = GuildSettingsAutomodRuleStore);
const MAX_RULE_NAME_LENGTH = fn(11993).MAX_RULE_NAME_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
let c12 = "automod-delete-rule";
let c13 = "automod-unsaved-changes";
const createStyles = fn(4758);
let obj2 = { stack: { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING } };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/native/GuildSettingsAutomodRule.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = require("c").c(75);
  guildId = guildId.guildId;
  _require = guildId;
  ({ triggerType, contentContainerStyle } = guildId);
  hasChanges();
  let obj = require("c");
  const tmp = _require;
  const tmp2 = updateRule;
  const navigation = require("useNavigation").useNavigation();
  const tmp6 = hasChanges(guildId);
  ({ rulesByTriggerType, updateRule } = tmp6);
  const removeRule = tmp6.removeRule;
  const tmp7 = isLoading();
  const editingRule = tmp7.editingRule;
  hasChanges = tmp7.hasChanges;
  const setEditingRule = tmp7.setEditingRule;
  const tmp8 = setEditingRule();
  isLoading = tmp8.isLoading;
  const errorMessage = tmp8.errorMessage;
  const saveEditingRule = tmp8.saveEditingRule;
  const cancelEditingRule = tmp8.cancelEditingRule;
  let obj2 = require("useNavigation");
  const isUndeletableMentionSpamRule = require("guild_automod/PermissionUtils").useIsUndeletableMentionSpamRule(guildId, triggerType);
  const DeveloperMode = require("UserSettings").DeveloperMode;
  const setting = DeveloperMode.useSetting();
  if (cResult[0] !== rulesByTriggerType) {
    const rulesFromTriggerTypeMap = tmp(tmp2[13]).getRulesFromTriggerTypeMap(rulesByTriggerType);
    cResult[0] = rulesByTriggerType;
    cResult[1] = rulesFromTriggerTypeMap;
    let tmp11 = rulesFromTriggerTypeMap;
    const tmpResult = tmp(tmp2[13]);
  } else {
    tmp11 = cResult[1];
  }
  ref = editingRule.useRef(null);
  if (cResult[2] !== errorMessage) {
    class Y {
      constructor() {
        if (null != errorMessage) {
          tmp = closure_13;
          current = closure_13.current;
          if (current != null) {
            scrollToResult = current.scrollTo({ y: 0, animated: true });
          }
        }
        return;
      }
    }
    const items = [errorMessage];
    cResult[2] = errorMessage;
    cResult[3] = Y;
    cResult[4] = items;
    let tmp15 = items;
    const tmp14 = Y;
  } else {
    class Y {
      constructor() {
        if (null != errorMessage) {
          tmp = closure_13;
          current = closure_13.current;
          if (current != null) {
            scrollToResult = current.scrollTo({ y: 0, animated: true });
          }
        }
        return;
      }
    }
    tmp15 = cResult[4];
  }
  const effect = obj5.useEffect(tmp14, tmp15);
  if (cResult[5] !== cancelEditingRule) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
    const items1 = [cancelEditingRule];
    cResult[5] = cancelEditingRule;
    cResult[6] = G;
    cResult[7] = items1;
    let tmp18 = items1;
    const tmp17 = G;
  } else {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
    tmp18 = cResult[7];
  }
  const effect1 = obj5.useEffect(tmp17, tmp18);
  if (cResult[8] !== editingRule) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
    if (tmp21) {
      class G {
        constructor() {
          return cancelEditingRule;
        }
      }
      tmp21 = !obj6.isBackendPersistedRule(editingRule);
    }
    cResult[8] = editingRule;
    cResult[9] = tmp21;
  } else {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  if (!hasChanges) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  if (cResult[10] === tmp11) {
    class G {
      constructor() {
        return cancelEditingRule;
      }
    }
  }
  _require = removeRule(function*(arg0, value) {
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
        c3 = 2;
        if (0 === v1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            v1 = 1;
            c3 = 1;
            const obj4 = { value: saveEditingRule(key), done: false };
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
          closure_128_0 = value;
          if (null != closure_128_0) {
            v1(closure_128_0);
            if (tmp5.isFocused()) {
              tmp5.pop();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  });
  let fn = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  cResult[10] = tmp11;
  cResult[11] = navigation;
  cResult[12] = saveEditingRule;
  cResult[13] = updateRule;
  cResult[14] = fn;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const triggerType = guildId.triggerType;
  let rulesByTriggerType;
  let editingRule;
  let setEditingRule;
  ref = undefined;
  closure_15 = undefined;
  let callback;
  let name;
  let callback1;
  const tmp = ref();
  const navigation = guildId(rulesByTriggerType[10]).useNavigation();
  const tmp5 = editingRule(guildId);
  rulesByTriggerType = tmp5.rulesByTriggerType;
  const updateRule = tmp5.updateRule;
  const removeRule = tmp5.removeRule;
  const tmp6 = setEditingRule();
  editingRule = tmp6.editingRule;
  const hasChanges = tmp6.hasChanges;
  setEditingRule = tmp6.setEditingRule;
  const tmp7 = hasChanges();
  const isLoading = tmp7.isLoading;
  const errorMessage = tmp7.errorMessage;
  const saveEditingRule = tmp7.saveEditingRule;
  const cancelEditingRule = tmp7.cancelEditingRule;
  let obj = guildId(rulesByTriggerType[10]);
  guildId(rulesByTriggerType[11]).useIsUndeletableMentionSpamRule(guildId, triggerType);
  const DeveloperMode = guildId(rulesByTriggerType[12]).DeveloperMode;
  const setting = DeveloperMode.useSetting();
  const items = [rulesByTriggerType];
  const memo = removeRule.useMemo(() => AutomodRuleUtils.getRulesFromTriggerTypeMap(rulesByTriggerType), items);
  ref = removeRule.useRef(null);
  const items1 = [errorMessage];
  const effect = removeRule.useEffect(() => {
    if (null != errorMessage) {
      const current = ref.current;
      if (current != null) {
        current.scrollTo({ y: 0, animated: true });
      }
    }
  }, items1);
  const items2 = [cancelEditingRule];
  const effect1 = removeRule.useEffect(() => cancelEditingRule, items2);
  let tmp13 = null != editingRule;
  if (tmp13) {
    tmp13 = !tmp2(tmp3[13]).isBackendPersistedRule(editingRule);
    const tmp2Result = tmp2(tmp3[13]);
  }
  let tmp14 = hasChanges;
  if (!hasChanges) {
    tmp14 = tmp13;
  }
  closure_15 = tmp14;
  const items3 = [saveEditingRule, memo, updateRule, navigation];
  callback = obj3.useCallback(updateRule(function*(arg0, value) {
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
            closure_1 = tmp5;
            closure_0 = tmp2;
            closure_128_0 = undefined;
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
          closure_128_0 = value;
          if (null != closure_128_0) {
            closure_129_3(closure_128_0);
            if (closure_129_1.isFocused()) {
              closure_129_1.pop();
            }
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c3 = tmp;
        throw tmp20;
      }
    }
  }), items3);
  name = undefined;
  if (editingRule != null) {
    name = editingRule.name;
  }
  const items4 = [hasChanges, name];
  callback1 = obj3.useCallback(() => {
    if (hasChanges) {
      let _Promise1 = new _Promise((arg0) => {
        closure_0 = arg0;
        c1 = false;
        const obj2 = { key: memo, title: null, content: null, confirmText: null, onConfirm: null, onCancel: null, onCloseCallback: null };
        const intl = guildId(rulesByTriggerType[15]).intl;
        obj2.title = intl.string(guildId(rulesByTriggerType[15]).t.kknTmH);
        const intl2 = guildId(rulesByTriggerType[15]).intl;
        obj2.content = intl2.format(guildId(rulesByTriggerType[15]).t["ff/gx7"], { ruleName });
        const intl3 = guildId(rulesByTriggerType[15]).intl;
        obj2.confirmText = intl3.string(guildId(rulesByTriggerType[15]).t["cY+Oob"]);
        obj2.onConfirm = function onConfirm() {
          if (!c1) {
            c1 = true;
            closure_0(true);
          }
        };
        obj2.onCancel = function onCancel() {
          if (!c1) {
            c1 = true;
            closure_0(false);
          }
        };
        obj2.onCloseCallback = function onCloseCallback() {
          if (!c1) {
            c1 = true;
            closure_0(false);
          }
        };
        guildId(rulesByTriggerType[14]).showConfirmModal(obj2);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items4);
  const items5 = [navigation, isLoading, tmp14, callback, callback1, name];
  const effect2 = obj3.useEffect(() => {
    if (isLoading) {
      let fn = () => null;
    } else {
      fn = NavigatorHeader.getHeaderConditionalBackButton(callback1);
    }
    const obj2 = { headerLeft: fn, headerRight: null, headerTitle: null };
    if (isLoading) {
      let fn2 = () => errorMessage(guildId(rulesByTriggerType[16]).HeaderSubmittingIndicator, {});
    } else if (closure_15) {
      fn2 = () => {
        const obj = { onPress, text: null };
        const intl = guildId(rulesByTriggerType[15]).intl;
        obj.text = intl.string(guildId(rulesByTriggerType[15]).t["R3BPH+"]);
        return errorMessage(guildId(rulesByTriggerType[17]).HeaderActionButton, obj);
      };
    }
    obj2.headerRight = fn2;
    obj2.headerTitle = function headerTitle() {
      let str = name;
      if (name == null) {
        str = "";
      }
      const obj = { title: str, subtitle: null };
      const intl = tmp2(tmp3[15]).intl;
      obj.subtitle = intl.string(guildId(rulesByTriggerType[15]).t.uRelgx);
      return errorMessage(guildId(rulesByTriggerType[16]).NavigatorHeader, obj);
    };
    navigation.setOptions(obj2);
  }, items5);
  let tmp26Result2 = null;
  if (null != editingRule) {
    tmp26Result2 = null;
    if (editingRule.triggerType === triggerType) {
      let obj4 = { ref, contentContainerStyle: guildId.contentContainerStyle, children: null };
      let obj5 = { style: tmp.stack, spacing: navigation(tmp3[7]).space.PX_24, children: null };
      let tmp28Result = null != errorMessage;
      if (tmp28Result) {
        let obj6 = { variant: "text-sm/normal", color: "text-feedback-critical", accessibilityLiveRegion: "polite", children: errorMessage };
        tmp28Result = tmp28(tmp2(tmp3[22]).Text, obj6);
      }
      const items6 = [tmp28Result, , , , , , ];
      const result = tmp2(tmp3[13]).isRuleApplicationFilter(editingRule);
      let tmp28Result3 = !result;
      if (!result) {
        const obj7 = { label: null, placeholder: null, maxLength: null, value: null, onChange: null };
        let intl = tmp2(tmp3[15]).intl;
        obj7.label = intl.string(tmp2(tmp3[15]).t.WVAHxF);
        let intl2 = tmp2(tmp3[15]).intl;
        obj7.placeholder = intl2.string(tmp2(tmp3[15]).t["5AO43K"]);
        obj7.maxLength = isLoading;
        obj7.value = editingRule.name;
        obj7.onChange = function onChange(name) {
          const obj = {};
          const merged = Object.assign(editingRule);
          obj.name = name;
          if (!isLoading) {
            setEditingRule(obj, true);
          }
        };
        tmp28Result3 = tmp28(tmp2(tmp3[23]).TextInput, obj7);
      }
      function handleChangeRule(GUILD_AUTOMOD_RULE) {
        if (!isLoading) {
          setEditingRule(GUILD_AUTOMOD_RULE, true);
        }
      }
      items6[1] = tmp28Result3;
      const obj8 = { label: null, value: null, onValueChange: null, start: true, end: true };
      let intl3 = tmp2(tmp3[15]).intl;
      obj8.label = intl3.string(tmp2(tmp3[15]).t.WrleYK);
      obj8.value = editingRule.enabled;
      obj8.onValueChange = function onValueChange(enabled) {
        const obj = {};
        const merged = Object.assign(editingRule);
        obj.enabled = enabled;
        if (!isLoading) {
          setEditingRule(obj, true);
        }
      };
      items6[2] = errorMessage(tmp2(tmp3[24]).TableSwitchRow, obj8);
      const obj9 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[3] = errorMessage(navigation(tmp3[25]), obj9);
      const obj10 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[4] = errorMessage(navigation(tmp3[26]), obj10);
      const obj11 = { rule: editingRule, onChangeRule: handleChangeRule };
      items6[5] = errorMessage(navigation(tmp3[27]), obj11);
      let tmp26Result = !tmp13;
      if (!tmp13) {
        const obj12 = { variant: "danger", label: null, onPress: null, disabled: null };
        let intl4 = tmp2(tmp3[15]).intl;
        obj12.label = intl4.string(tmp2(tmp3[15]).t["92m/01"]);
        obj12.onPress = function onPress() {
          if (null != editingRule) {
            const id = tmp.id;
            const showConfirmModal = guildId(rulesByTriggerType[14]).showConfirmModal;
            const obj2 = { key, title: null, content: null, confirmText: null, onConfirm: null };
            const intl5 = guildId(rulesByTriggerType[15]).intl;
            const string = intl5.string;
            const t = guildId(rulesByTriggerType[15]).t;
            if (key) {
              obj2.title = string(t.MmpqMC);
              const intl3 = guildId(rulesByTriggerType[15]).intl;
              obj2.content = intl3.string(guildId(rulesByTriggerType[15]).t.XMdBLw);
              const intl4 = guildId(rulesByTriggerType[15]).intl;
              obj2.confirmText = intl4.string(guildId(rulesByTriggerType[15]).t.BddRzS);
              obj2.onConfirm = function onConfirm() {

              };
              showConfirmModal(obj2);
            } else {
              obj2.title = string(t.Hy8XgL);
              let intl = guildId(rulesByTriggerType[15]).intl;
              let obj = { ruleName: tmp.name };
              obj2.content = intl.format(guildId(rulesByTriggerType[15]).t.hO7PgW, obj);
              const intl2 = guildId(rulesByTriggerType[15]).intl;
              obj2.confirmText = intl2.string(guildId(rulesByTriggerType[15]).t["cY+Oob"]);
              closure_0 = updateRule(function*(arg0, value) {
                if (c6 === 2) {
                  c6 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp6 === 3) {
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
                    c6 = 2;
                    if (0 === c5) {
                      if (arg0 === 1) {
                        c6 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c6 = 3;
                        const obj5 = { value, done: true };
                        return obj5;
                      } else {
                        closure_2 = tmp3;
                        closure_1 = tmp7;
                        let v0 = 1;
                        c5 = 2;
                        c6 = 1;
                        const obj6 = { value: closure_0(11998).deleteAutomodRule(id, closure_0), done: false };
                        return obj6;
                      }
                    } else if (1 === tmp7) {
                      v0 = 0;
                      closure_129_0 = closure_3;
                      const aPIError = new closure_0(4659).APIError(closure_129_0);
                      const anyErrorMessage = aPIError.getAnyErrorMessage();
                      closure_0 = anyErrorMessage;
                      if (anyErrorMessage == null) {
                        const intl = closure_0(1119).intl;
                        closure_0 = intl.string(closure_0(1119).t.fEptJP);
                      }
                      closure_0(4457).presentError(closure_0);
                      throw closure_129_0;
                    } else if (arg0 === 1) {
                      c6 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      v0 = 0;
                      c6 = 3;
                      const obj = { value, done: true };
                      return obj;
                    } else {
                      v0 = 0;
                      v0(closure_130_1, closure_0);
                      closure_1.pop();
                      c6 = 3;
                      return { value: "IconComponent", done: null };
                    }
                  } catch (tmp41) {
                    closure_3 = tmp41;
                    if (tmp4 === v0) {
                      c6 = tmp2;
                      throw tmp41;
                    } else {
                      c5 = tmp;
                    }
                  }
                }
              });
              obj2.onConfirm = function() {
                const self = this;
                const apply = closure_0.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              };
              showConfirmModal(obj2);
            }
            const tmp24 = guildId(rulesByTriggerType[14]);
          }
        };
        obj12.disabled = isLoading;
        const items7 = [tmp28(tmp2(tmp3[29]).TableRow, obj12), ];
        let tmp28Result4 = setting;
        if (setting) {
          const obj13 = { label: null, onPress: null };
          let intl5 = tmp2(tmp3[15]).intl;
          obj13.label = intl5.string(tmp2(tmp3[15]).t.F64hjn);
          obj13.onPress = function onPress() {
            if (null != editingRule) {
              ClipboardUtils.copy(tmp.id);
              ToastUtils.presentIdCopied();
            }
          };
          tmp28Result4 = tmp28(tmp2(tmp3[29]).TableRow, obj13);
        }
        const obj14 = { hasIcons: false, children: null };
        items7[1] = tmp28Result4;
        obj14.children = items7;
        tmp26Result = tmp26(tmp2(tmp3[28]).TableRowGroup, obj14);
      }
      const obj15 = { children: null };
      items6[6] = tmp26Result;
      obj5.children = items6;
      obj4.children = saveEditingRule(tmp2(tmp3[30]).Stack, obj5);
      const items8 = [errorMessage(tmp2(tmp3[31]).Form, obj4), errorMessage(tmp2(tmp3[32]).NavScrim, {})];
      obj15.children = items8;
      tmp26Result2 = tmp26(cancelEditingRule, obj15);
      const tmp2Result2 = tmp2(tmp3[13]);
    }
  }
  return tmp26Result2;
});
