// Module ID: 16979
// Function ID: 16980
// Name: ConjureTemplateWizardSheet
// Dependencies: [5, 32, 19, 17, 2086, 4709, 12948, 13164, 21, 5091, 587, 16980, 11396, 8200, 504, 16982, 11369, 11382, 5055, 5087, 6160, 6892, 6835, 1126, 3827, 6267, 6266, 6770, 5376, 2]
// Exports: default

// Module 16979 (ConjureTemplateWizardSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import Text_Text from "Text/Text" /* 5087 */;
import TableRadioRow from "TableRadioRow" /* 6266 */;
import GroupIcon from "GroupIcon" /* 8200 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11369 */;
import ConjureCreateErrors from "ConjureCreateErrors" /* 11382 */;
import HammerIcon from "HammerIcon" /* 11396 */;
import ChatShieldIcon from "ChatShieldIcon" /* 16980 */;
import ConjureTemplateWizard from "ConjureTemplateWizard" /* 16982 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import ConjureChatStore from "ConjureChatStore" /* 12948 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 13164 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5091 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2;

let c10;
let closure_12;
let closure_14;
let closure_15;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
({ ensureConnection: c10, sendUserMessage: unpackModuleId, stageModelSettings: closure_12 } = ConjureConnectionStore);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = Fragment);
const VibegrationsTemplateWizardSheet = "VibegrationsTemplateWizardSheet";
let createStyles = createStyles_mod;
let obj = { content: obj2, loading: obj3, pointCard: obj4, pointIcon: obj5, point: obj6, actions: obj7, action: { flex: 1 } };
obj2 = { gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { alignItems: "center", paddingVertical: nativeDefault.space.PX_24 };
obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_12, padding: nativeDefault.space.PX_12, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj5 = { marginTop: nativeDefault.space.PX_4 / 2 };
obj6 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj7 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_17 = createStyles(obj);
let obj8 = { shield: ChatShieldIcon.ChatShieldIcon, hammer: HammerIcon.HammerIcon, group: GroupIcon.GroupIcon };
let result = size.fileFinishedImporting("modules/conjure/templates/native/ConjureTemplateWizardSheet.tsx");

export default function ConjureTemplateWizardSheet(template) {
  let Button;
  let Button2;
  let _undefined;
  let _undefined2;
  let c15;
  let c6;
  let closure_10;
  let closure_12;
  let closure_14;
  let closure_4;
  let closure_8;
  let first;
  let first2;
  let first3;
  let first4;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items7;
  let items8;
  let items9;
  let name;
  let obj22;
  let obj25;
  let onCreated;
  let tmp16;
  let tmp32;
  let tmp36Result3;
  let tmp5;
  let tmp52;
  template = template.template;
  const guildId = template.guildId;
  ({ modelSettings: dependencyMap, onCreated } = template);
  c6 = undefined;
  first = undefined;
  closure_8 = undefined;
  first2 = undefined;
  closure_10 = undefined;
  first3 = undefined;
  closure_12 = undefined;
  first4 = undefined;
  closure_14 = undefined;
  c15 = undefined;
  let ref2;
  let num;
  let closure_23;
  let tmp = ref2();
  _slicedToArray = tmp;
  let tmp2 = template;
  let tmp3 = dependencyMap;
  let obj = template(504);
  let items = [first, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = template(dependencyMap[15]);
    return obj.conjureTemplateWizardGuilds(first.getGuildsArray(), "VibegrationsTemplateWizardSheet");
  });
  let obj2 = stateFromStores;
  const tmp4 = _slicedToArray(stateFromStores.useState(0), 2);
  [tmp5, c6] = tmp4;
  [first, closure_8] = stateFromStores.useState(() => {
    let id;
    const tmp = stateFromStores;
    if (stateFromStores.some((id) => id.id === guildId)) {
      id = guildId;
    } else {
      first = tmp[0];
      id = undefined;
      if (first != null) {
        id = first.id;
      }
      if (id == null) {
        id = null;
      }
    }
    return id;
  });
  const first1 = _slicedToArray(stateFromStores.useState(() => {
    const obj = ConjureTemplateWizard;
    return obj.conjureWizardServerStep(guildId, stateFromStores);
  }), 1)[0];
  [first2, closure_10] = stateFromStores.useState(null);
  [first3, closure_12] = stateFromStores.useState([]);
  [first4, closure_14] = stateFromStores.useState(false);
  [tmp16, c15] = _slicedToArray(stateFromStores.useState(null), 2);
  const tmp15 = _slicedToArray(stateFromStores.useState(null), 2);
  const ref = stateFromStores.useRef(null);
  ref2 = stateFromStores.useRef(null);
  const ref3 = stateFromStores.useRef(false);
  const effect = stateFromStores.useEffect(() => {
    let tmp;
    if (null != first) {
      let c0 = false;
      let obj = template(dependencyMap[16]);
      let obj2 = { guild_id: tmp, install_scope: "guild" };
      const project = obj.createProject(obj2);
      const nextPromise = project.then((current) => {
        ref.current = current;
        ref2.current = current;
        const tmp = c0;
        if (tmp) {
          const obj2 = ConjureActionCreators;
          const deleteProjectResult = obj2.deleteProject(current);
          deleteProjectResult.catch(() => {

          });
        } else {
          authStore(current);
          authStore2(current, dependencyMap);
          const obj = ConjureTemplateWizard;
          unpackModuleId(current, obj.conjureTemplateStartMessage(template.name));
          c10(current);
        }
      });
      nextPromise.catch((error) => {
        const tmp = c0;
        if (!tmp) {
          const obj = ConjureCreateErrors;
          c15(obj.getConjureCreateErrorMessage(error));
        }
      });
      return () => {
        c0 = true;
      };
    }
  }, []);
  let obj3 = template(504);
  let items1 = [first2];
  const items2 = [first2];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => {
    let latestConjureIntakeResult = null;
    if (null != first2) {
      const obj = ConjureTemplateWizard;
      latestConjureIntakeResult = obj.latestConjureIntake(ConjureChatStore.getMessages(tmp));
    }
    return latestConjureIntakeResult;
  }, items2);
  let obj4 = template(504);
  const items3 = [first2];
  const items4 = [first2];
  const tmp19 = obj4.useStateFromStores(items3, () => {
    const tmp2 = null != first2 && null != ConjureChatStore.getFinishedAt(tmp);
    return tmp2;
  }, items4) && null == stateFromStores1;
  let closure_19 = tmp19;
  const items5 = [guildId, onCreated, first2, tmp19];
  const effect1 = obj2.useEffect(() => {
    const tmp = closure_19 && null != first2;
    if (tmp) {
      ref3.current = true;
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(VibegrationsTemplateWizardSheet);
      let current = ref2.current;
      const tmp10 = first2;
      const tmp9 = onCreated;
      if (current == null) {
        current = guildId;
      }
      tmp9(tmp10, current);
    }
  }, items5);
  const tmp2Result = tmp2(16982);
  const conjureWizardIntroResult = tmp2Result.conjureWizardIntro(stateFromStores1);
  const tmp2Result6 = tmp2(16982);
  const result = tmp2Result6.conjureWizardServerCopy(stateFromStores1);
  const tmp2Result7 = tmp2(16982);
  const result1 = tmp2Result7.conjureWizardQuestions(stateFromStores1);
  const tmp2Result8 = tmp2(16982);
  const result2 = tmp2Result8.conjureTemplateWizardSteps(result1, first1);
  const tmp24 = result2[Math.min(Math, tmp5, result2.length - 1)];
  const length = result2.length;
  let tmp25;
  if (typeof tmp24 === "object") {
    tmp25 = result1[tmp24.index];
  }
  num = 0;
  if (typeof tmp24 === "object") {
    num = tmp24.index;
  }
  let str = first3[num];
  if (str == null) {
    str = "";
  }
  let optional;
  if (tmp25 != null) {
    optional = tmp25.optional;
  }
  const tmp27 = true === optional && "" === str.trim();
  const callback = obj2.useCallback(() => {
    const current = ref3.current || null == ref.current;
    if (!current) {
      const obj = ConjureActionCreators;
      const deleteProjectResult = obj.deleteProject(ref.current);
      deleteProjectResult.catch(() => {

      });
    }
  }, []);
  const callback1 = obj2.useCallback(() => {
    const obj = guildId(dependencyMap[18]);
    obj.hideActionSheet(ref);
  }, []);
  const items6 = [first3, onCreated, first, first2, result1, first4, template.id];
  closure_23 = obj2.useCallback(onCreated(function*(arg0, value) {
    let closure_0;
    let closure_1;
    let obj7;
    let tmp;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            template = undefined;
            const tmp67 = first4;
            if (!tmp67) {
              if (null != first2) {
                if (null != preview_guild_id) {
                  const obj12 = template(closure_2[15]);
                  if (obj12.isConjureWizardComplete(result1, first3)) {
                    closure_14(true);
                    _undefined2(null);
                    c3 = 1;
                    if (preview_guild_id !== ref.current) {
                      obj8 = { guild_id: preview_guild_id, preview_guild_id };
                      c4 = 2;
                      c5 = 1;
                      const obj9 = { value: obj7.setGuildHints(first2, obj8), done: false };
                      obj7 = template(closure_2[16]);
                      return obj9;
                    } else {
                      const obj10 = { templateId: closure_129_0.id };
                      const obj4 = template(closure_2[15]);
                      first3(closure_129_9, obj4.formatConjureWizardAnswers(closure_129_20, closure_129_11), undefined, obj10);
                      closure_129_18.current = true;
                      const obj6 = tmp(closure_2[18]);
                      obj6.hideActionSheet(closure_1_16);
                      closure_129_3(closure_129_9, closure_129_7);
                      c3 = 0;
                    }
                  }
                }
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          tmp = closure_2;
          const obj3 = template(closure_2[17]);
          closure_129_15(obj3.getConjureCreateErrorMessage(tmp));
          closure_129_14(false);
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          template = value;
          if (!template.ok) {
            const ConjureCreateError = template(closure_2[17]).ConjureCreateError;
            const self = this;
            const self2 = this;
            const obj = template(closure_2[17]);
            const conjureCreateError = new ConjureCreateError(obj.classifyCreateFailure(template), template.status);
            throw conjureCreateError;
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp60) {
        closure_2 = tmp60;
        if (0 === c3) {
          c5 = 3;
          throw tmp60;
        } else {
          c4 = 1;
        }
      }
    }
  }), items6);
  if ("about" === tmp24) {
    name = template.name;
  } else if ("server" === tmp24) {
    name = result.title;
  } else {
    name = undefined;
    if (tmp25 != null) {
      name = tmp25.title;
    }
    if (name == null) {
      name = template.name;
    }
  }
  if (null != tmp16) {
    let obj5 = { variant: "text-sm/normal", color: "text-feedback-critical", children: tmp16 };
    tmp36Result3 = first4(tmp2(5087).Text, obj5);
    tmp32 = first4;
  } else {
    tmp32 = first4;
    let obj6 = { style: tmp.loading, children: first4(tmp2(6160).ActivityIndicator, {}) };
    tmp36Result3 = first4(c6, obj6);
  }
  let obj7 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: callback, header: tmp32(tmp2(6835).BottomSheetTitleHeader, { title: name }), children: tmp36(tmp37, obj8) };
  const ActionSheet = tmp2(6892).ActionSheet;
  obj8 = { style: tmp.content, children: items8 };
  let tmp38 = null;
  if ("about" === tmp24) {
    let tmp36Result = tmp36Result3;
    if (null != conjureWizardIntroResult) {
      let obj9 = { children: items7 };
      let obj10 = { variant: "text-md/medium", color: "text-default", children: conjureWizardIntroResult.lead };
      items7 = [tmp32(tmp2(5087).Text, obj10), ];
      const points = conjureWizardIntroResult.points;
      items7[1] = points.map((children, index) => {
        let items;
        let items1;
        const obj = { style: closure_4.pointCard, children: items };
        items = [, ];
        const obj2 = { size: "sm", color: nativeDefault.colors.ICON_DEFAULT, style: closure_4.pointIcon };
        items[0] = map1(obj8[children.icon], obj2);
        const obj3 = { style: closure_4.point, children: items1 };
        items1 = [, ];
        const obj4 = { variant: "text-md/normal", color: "text-default", children: children.title };
        items1[0] = map1(Text_Text.Text, obj4);
        let tmp3Result = null;
        const tmp3 = map1;
        if (null != children.subtext) {
          tmp3Result = null;
          if ("" !== children.subtext) {
            const obj5 = { variant: "text-sm/normal", color: "text-muted", children: children.subtext };
            tmp3Result = tmp3(Text_Text.Text, obj5);
          }
        }
        items1[1] = tmp3Result;
        items[1] = authStore3(View, obj3);
        return authStore3(View, obj, index);
      });
      tmp36Result = tmp36(c15, obj9);
    }
    tmp38 = tmp36Result;
  }
  items8 = [tmp38, , , ];
  let tmp41 = "server" === tmp24;
  let tmp42 = null;
  if (tmp41) {
    let tmp36Result2;
    if (0 === stateFromStores.length) {
      let obj11 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(guildId(3827)["6ys5dn"]) };
      const Text = tmp2(5087).Text;
      intl2 = tmp2(1126).intl;
      tmp36Result2 = tmp32(Text, obj11);
    } else {
      let str4 = first;
      const TableRadioGroup = tmp2(6267).TableRadioGroup;
      const tmp53 = c15;
      if (first == null) {
        str4 = "";
      }
      let obj12 = { children: items9 };
      const obj13 = {
        hasIcons: false,
        value: str4,
        onChange(arg0) {
              return closure_8(arg0);
            },
        accessibilityLabel: intl.string(guildId(3827).lHT5Dp),
        children: stateFromStores.map((label) => {
              const obj = { label: label.name, value: label.id, disabled: first4 };
              return map1(TableRadioRow.TableRadioRow, obj, label.id);
            })
      };
      intl = tmp2(1126).intl;
      items9 = [tmp32(TableRadioGroup, obj13), ];
      const obj14 = { variant: "text-sm/normal", color: "text-muted", children: result.hint };
      items9[1] = tmp32(tmp2(5087).Text, obj14);
      tmp36Result2 = tmp36(tmp53, obj12);
    }
    tmp42 = tmp36Result2;
  }
  items8[1] = tmp42;
  let tmp46 = null;
  if (typeof tmp24 === "object") {
    if (null != tmp25) {
      const obj15 = { style: tmp.point, children: items10 };
      const obj16 = {
        placeholder: tmp25.placeholder,
        autoComplete: "off",
        autoFocus: true,
        value: str,
        onChange(arg0) {
              let closure_0 = arg0;
              closure_12((arg0) => {
                const items = [...arg0, closure_0];
                return items;
              });
              _undefined2(null);
            },
        disabled: first4
      };
      items10 = [tmp32(tmp2(6770).TextArea, obj16), , ];
      let tmp32Result4 = null;
      if (null != tmp25.hint) {
        const obj17 = { variant: "text-sm/normal", color: "text-muted", children: tmp25.hint };
        tmp32Result4 = tmp32(tmp2(5087).Text, obj17);
      }
      items10[1] = tmp32Result4;
      let tmp32Result5 = null;
      if (null != tmp16) {
        const obj18 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp16 };
        tmp32Result5 = tmp32(tmp2(5087).Text, obj18);
      }
      items10[2] = tmp32Result5;
      tmp36Result3 = tmp36(tmp37, obj15, tmp25.id);
    }
    tmp46 = tmp36Result3;
  }
  items8[2] = tmp46;
  const obj19 = { style: tmp.actions, children: items11 };
  const obj20 = { style: tmp.action, children: tmp32(Button, obj22) };
  Button = tmp2(5376).Button;
  if (0 === tmp5) {
    const obj21 = { variant: "secondary", text: intl4.string(tmp2(1126).t["ETE/oC"]), disabled: first4, onPress: callback1 };
    intl4 = tmp2(1126).intl;
    obj22 = obj21;
  } else {
    obj22 = {
      variant: "secondary",
      text: intl3.string(tmp2(1126).t["13/7kX"]),
      disabled: first4,
      onPress() {
          return _undefined((arg0) => Math.max(0, arg0 - 1));
        }
    };
    intl3 = tmp2(1126).intl;
  }
  items11 = [tmp32(tmp37, obj20), ];
  let tmp32Result6 = null;
  if ("none" !== first1) {
    const obj23 = { style: tmp.action, children: tmp32(Button2, obj25) };
    Button2 = tmp2(5376).Button;
    if (tmp5 === length - 1) {
      const obj24 = {
        variant: "primary",
        text: intl5.string(guildId(3827)["5iv8MF"]),
        disabled: tmp52,
        loading: first4,
        onPress() {
              const promise = closure_23();
              promise.catch(() => {

              });
            }
      };
      intl5 = tmp2(1126).intl;
      tmp52 = null == first2 || null == first;
      if (!tmp52) {
        const tmp2Result9 = tmp2(16982);
        tmp52 = !tmp2Result9.isConjureWizardComplete(result1, first3);
      }
      obj25 = obj24;
    } else {
      const intl6 = tmp2(1126).intl;
      const string = intl6.string;
      const t = tmp2(1126).t;
      obj25 = {
        variant: "primary",
        text: string(tmp27 ? t["5Wxrcd"] : t.PDTjLN),
        disabled: tmp41,
        onPress() {
              return _undefined((arg0) => Math.min(length - 1, arg0 + 1));
            }
      };
      if (tmp41) {
        tmp41 = null == first;
      }
      if (!tmp41) {
        let tmp50 = typeof tmp24 === "object";
        if (typeof tmp24 === "object") {
          const tmp2Result10 = tmp2(16982);
          tmp50 = !tmp2Result10.canLeaveConjureWizardQuestion(tmp25, str);
        }
        tmp41 = tmp50;
      }
    }
    tmp32Result6 = tmp32(tmp37, obj23);
  }
  items11[1] = tmp32Result6;
  items8[3] = closure_14(c6, obj19);
  return tmp32(ActionSheet, obj7);
};
export const CONJURE_TEMPLATE_WIZARD_SHEET_KEY = "VibegrationsTemplateWizardSheet";
