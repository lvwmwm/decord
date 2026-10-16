// Module ID: 11543
// Function ID: 11544
// Name: ConjureTemplateWizardSheet
// Dependencies: [5, 32, 19, 17, 2090, 4809, 10899, 10898, 21, 5154, 587, 11544, 11546, 8443, 504, 11548, 10919, 10922, 11550, 5118, 5150, 6380, 7122, 7064, 1128, 3865, 6487, 6486, 6998, 5442, 2]
// Exports: default

// Module 11543 (ConjureTemplateWizardSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5118 */;
import Text_Text from "Text/Text" /* 5150 */;
import TableRadioRow from "TableRadioRow" /* 6486 */;
import GroupIcon from "GroupIcon" /* 8443 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10919 */;
import ConjureCreateErrors from "ConjureCreateErrors" /* 10922 */;
import ChatShieldIcon from "ChatShieldIcon" /* 11544 */;
import HammerIcon from "HammerIcon" /* 11546 */;
import ConjureTemplateWizard from "ConjureTemplateWizard" /* 11548 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2090 */;
import PermissionStore from "PermissionStore" /* 4809 */;
import ConjureChatStore from "ConjureChatStore" /* 10899 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10898 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5154 */;
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
const ConjureTemplateWizardSheet_str = "ConjureTemplateWizardSheet";
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
  let _undefined22;
  let c11;
  let c16;
  let c6;
  let closure_10;
  let closure_13;
  let closure_15;
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
  let obj21;
  let obj24;
  let obj7;
  let onCreated;
  let tmp12;
  let tmp18;
  let tmp40;
  let tmp44Result3;
  let tmp5;
  let tmp57;
  template = template.template;
  const guildId = template.guildId;
  ({ modelSettings: dependencyMap, onCreated } = template);
  c6 = undefined;
  first = undefined;
  closure_8 = undefined;
  first2 = undefined;
  closure_10 = undefined;
  c11 = undefined;
  first3 = undefined;
  closure_13 = undefined;
  first4 = undefined;
  closure_15 = undefined;
  c16 = undefined;
  let ref;
  let stateFromStores2;
  let result1;
  let length;
  let num;
  let closure_24;
  let tmp = ref();
  _slicedToArray = tmp;
  let tmp2 = template;
  let tmp3 = dependencyMap;
  let obj = template(504);
  let items = [first, closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = template(dependencyMap[15]);
    return obj.conjureTemplateWizardGuilds(first.getGuildsArray(), "ConjureTemplateWizardSheet");
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
  [tmp12, c11] = _slicedToArray(stateFromStores.useState(null), 2);
  const tmp11 = _slicedToArray(stateFromStores.useState(null), 2);
  [first3, closure_13] = stateFromStores.useState([]);
  [first4, closure_15] = stateFromStores.useState(false);
  [tmp18, c16] = _slicedToArray(stateFromStores.useState(null), 2);
  const tmp17 = _slicedToArray(stateFromStores.useState(null), 2);
  ref = stateFromStores.useRef(null);
  const ref2 = stateFromStores.useRef(null);
  const ref3 = stateFromStores.useRef(false);
  const effect = stateFromStores.useEffect(() => {
    let current;
    let id;
    let tmp;
    if (null != first) {
      let c0 = false;
      let obj = template(dependencyMap[16]);
      let obj2 = { guild_id: tmp, install_scope: "guild" };
      const project = obj.createProject(obj2);
      const nextPromise = project.then((current) => {
        let closure_0 = current;
        ref.current = current;
        ref2.current = current;
        let tmp = closure_0;
        if (tmp) {
          const obj3 = template(dependencyMap[16]);
          const deleteProjectResult = obj3.deleteProject(current);
          deleteProjectResult.catch(() => {

          });
        } else {
          const obj = { templateId: id.id };
          closure_10(current, obj);
          first3(current, closure_1_2);
          const obj2 = template(dependencyMap[15]);
          const result = obj2.startConjureTemplateWizard(current, id);
          return result.then((result) => {
            const tmp = c0;
            if (!tmp) {
              c11(result);
              closure_10(current);
            }
          });
        }
      });
      nextPromise.catch((error) => {
        const tmp = c0;
        if (!tmp) {
          const obj = ConjureCreateErrors;
          c16(obj.getConjureCreateErrorMessage(error));
        }
      });
      return () => {
        let c0 = true;
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
  let tmp22 = tmp12;
  const tmp20 = first2;
  if (tmp12 == null) {
    tmp22 = stateFromStores1;
  }
  const items3 = [tmp20];
  const items4 = [first2];
  const tmp2Result = tmp2(504);
  stateFromStores2 = tmp2Result.useStateFromStores(items3, () => {
    const tmp2 = null != first2 && null != ConjureChatStore.getFinishedAt(tmp);
    return tmp2;
  }, items4);
  let tmp26 = null == tmp12;
  let id = template.id;
  const tmp25 = guildId(11550);
  if (tmp26) {
    tmp26 = null != stateFromStores1;
  }
  tmp25(first2, id, tmp26);
  if (stateFromStores2) {
    stateFromStores2 = null == tmp22;
  }
  const items5 = [guildId, onCreated, first2, stateFromStores2];
  const effect1 = obj2.useEffect(() => {
    const tmp = stateFromStores2 && null != first2;
    if (tmp) {
      ref3.current = true;
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(ConjureTemplateWizardSheet_str);
      let current = ref2.current;
      const tmp10 = first2;
      const tmp9 = onCreated;
      if (current == null) {
        current = guildId;
      }
      tmp9(tmp10, current);
    }
  }, items5);
  const tmp2Result7 = tmp2(11548);
  const conjureWizardIntroResult = tmp2Result7.conjureWizardIntro(tmp22);
  const tmp2Result8 = tmp2(11548);
  let result = tmp2Result8.conjureWizardServerCopy(tmp22);
  const tmp2Result9 = tmp2(11548);
  result1 = tmp2Result9.conjureWizardQuestions(tmp22);
  const tmp2Result10 = tmp2(11548);
  const result2 = tmp2Result10.conjureTemplateWizardSteps(result1, first1);
  const tmp32 = result2[Math.min(Math, tmp5, result2.length - 1)];
  length = result2.length;
  let tmp33;
  if (typeof tmp32 === "object") {
    tmp33 = result1[tmp32.index];
  }
  num = 0;
  if (typeof tmp32 === "object") {
    num = tmp32.index;
  }
  let str = first3[num];
  if (str == null) {
    str = "";
  }
  let optional;
  if (tmp33 != null) {
    optional = tmp33.optional;
  }
  const tmp35 = true === optional && "" === str.trim();
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
    const obj = guildId(dependencyMap[19]);
    obj.hideActionSheet(c16);
  }, []);
  const items6 = [first3, onCreated, first, first2, result1, first4, template.id];
  closure_24 = obj2.useCallback(onCreated(function*(arg0, value) {
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
                    closure_15(true);
                    _undefined22(null);
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
                      _undefined2(closure_129_9, obj4.formatConjureWizardAnswers(closure_129_21, closure_129_12), undefined, obj10);
                      closure_129_19.current = true;
                      const obj6 = tmp(closure_2[19]);
                      obj6.hideActionSheet(_undefined2);
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
          closure_129_16(obj3.getConjureCreateErrorMessage(tmp));
          closure_129_15(false);
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
  if ("about" === tmp32) {
    name = template.name;
  } else if ("server" === tmp32) {
    name = result.title;
  } else {
    name = undefined;
    if (tmp33 != null) {
      name = tmp33.title;
    }
    if (name == null) {
      name = template.name;
    }
  }
  if (null != tmp18) {
    let obj4 = { variant: "text-sm/normal", color: "text-feedback-critical", children: tmp18 };
    tmp44Result3 = closure_13(tmp2(5150).Text, obj4);
    tmp40 = closure_13;
  } else {
    tmp40 = closure_13;
    let obj5 = { style: tmp.loading, children: closure_13(tmp2(6380).ActivityIndicator, {}) };
    tmp44Result3 = closure_13(c6, obj5);
  }
  let obj6 = { startExpanded: true, keyboardShouldPersistTaps: "handled", onDismiss: callback, header: tmp40(tmp2(7064).BottomSheetTitleHeader, { title: name }), children: tmp44(tmp45, obj7) };
  const ActionSheet = tmp2(7122).ActionSheet;
  obj7 = { style: tmp.content, children: items8 };
  let tmp46 = null;
  if ("about" === tmp32) {
    let tmp44Result = tmp44Result3;
    if (null != conjureWizardIntroResult) {
      obj8 = { children: items7 };
      let obj9 = { variant: "text-md/medium", color: "text-default", children: conjureWizardIntroResult.lead };
      items7 = [tmp40(tmp2(5150).Text, obj9), ];
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
        items[1] = syncedClientThemes(View, obj3);
        return syncedClientThemes(View, obj, index);
      });
      tmp44Result = tmp44(closure_15, obj8);
    }
    tmp46 = tmp44Result;
  }
  items8 = [tmp46, , , ];
  let tmp49 = "server" === tmp32;
  let tmp50 = null;
  if (tmp49) {
    let tmp44Result2;
    if (0 === stateFromStores.length) {
      let obj10 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(tmp24(3865)["6ys5dn"]) };
      const Text = tmp2(5150).Text;
      intl2 = tmp2(1128).intl;
      tmp44Result2 = tmp40(Text, obj10);
    } else {
      let str4 = first;
      const TableRadioGroup = tmp2(6487).TableRadioGroup;
      const tmp58 = closure_15;
      if (first == null) {
        str4 = "";
      }
      let obj11 = { children: items9 };
      let obj12 = {
        hasIcons: false,
        value: str4,
        onChange(arg0) {
              return closure_8(arg0);
            },
        accessibilityLabel: intl.string(tmp24(3865).lHT5Dp),
        children: stateFromStores.map((label) => {
              const obj = { label: label.name, value: label.id, disabled: first4 };
              return map1(TableRadioRow.TableRadioRow, obj, label.id);
            })
      };
      intl = tmp2(1128).intl;
      items9 = [tmp40(TableRadioGroup, obj12), ];
      const obj13 = { variant: "text-sm/normal", color: "text-muted", children: result.hint };
      items9[1] = tmp40(tmp2(5150).Text, obj13);
      tmp44Result2 = tmp44(tmp58, obj11);
    }
    tmp50 = tmp44Result2;
  }
  items8[1] = tmp50;
  let tmp52 = null;
  if (typeof tmp32 === "object") {
    if (null != tmp33) {
      const obj14 = { style: tmp.point, children: items10 };
      const obj15 = {
        placeholder: tmp33.placeholder,
        autoComplete: "off",
        autoFocus: true,
        value: str,
        onChange(arg0) {
              let closure_0 = arg0;
              closure_13((arg0) => {
                const items = [...arg0, closure_0];
                return items;
              });
              _undefined2(null);
            },
        disabled: first4
      };
      items10 = [tmp40(tmp2(6998).TextArea, obj15), , ];
      let tmp40Result4 = null;
      if (null != tmp33.hint) {
        const obj16 = { variant: "text-sm/normal", color: "text-muted", children: tmp33.hint };
        tmp40Result4 = tmp40(tmp2(5150).Text, obj16);
      }
      items10[1] = tmp40Result4;
      let tmp40Result5 = null;
      if (null != tmp18) {
        const obj17 = { variant: "text-xs/normal", color: "text-feedback-critical", children: tmp18 };
        tmp40Result5 = tmp40(tmp2(5150).Text, obj17);
      }
      items10[2] = tmp40Result5;
      tmp44Result3 = tmp44(tmp45, obj14, tmp33.id);
    }
    tmp52 = tmp44Result3;
  }
  items8[2] = tmp52;
  const obj18 = { style: tmp.actions, children: items11 };
  const obj19 = { style: tmp.action, children: tmp40(Button, obj21) };
  Button = tmp2(5442).Button;
  if (0 === tmp5) {
    const obj20 = { variant: "secondary", text: intl4.string(tmp2(1128).t["ETE/oC"]), disabled: first4, onPress: callback1 };
    intl4 = tmp2(1128).intl;
    obj21 = obj20;
  } else {
    obj21 = {
      variant: "secondary",
      text: intl3.string(tmp2(1128).t["13/7kX"]),
      disabled: first4,
      onPress() {
          return _undefined((arg0) => Math.max(0, arg0 - 1));
        }
    };
    intl3 = tmp2(1128).intl;
  }
  items11 = [tmp40(tmp45, obj19), ];
  let tmp40Result6 = null;
  if ("none" !== first1) {
    const obj22 = { style: tmp.action, children: tmp40(Button2, obj24) };
    Button2 = tmp2(5442).Button;
    if (tmp5 === length - 1) {
      const obj23 = {
        variant: "primary",
        text: intl5.string(guildId(3865)["5iv8MF"]),
        disabled: tmp57,
        loading: first4,
        onPress() {
              const promise = closure_24();
              promise.catch(() => {

              });
            }
      };
      intl5 = tmp2(1128).intl;
      tmp57 = null == first2 || null == first;
      if (!tmp57) {
        const tmp2Result11 = tmp2(11548);
        tmp57 = !tmp2Result11.isConjureWizardComplete(result1, first3);
      }
      obj24 = obj23;
    } else {
      const intl6 = tmp2(1128).intl;
      const string = intl6.string;
      const t = tmp2(1128).t;
      obj24 = {
        variant: "primary",
        text: string(tmp35 ? t["5Wxrcd"] : t.PDTjLN),
        disabled: tmp49,
        onPress() {
              return _undefined((arg0) => Math.min(length - 1, arg0 + 1));
            }
      };
      if (tmp49) {
        tmp49 = null == first;
      }
      if (!tmp49) {
        let tmp56 = typeof tmp32 === "object";
        if (typeof tmp32 === "object") {
          const tmp2Result12 = tmp2(11548);
          tmp56 = !tmp2Result12.canLeaveConjureWizardQuestion(tmp33, str);
        }
        tmp49 = tmp56;
      }
    }
    tmp40Result6 = tmp40(tmp45, obj22);
  }
  items11[1] = tmp40Result6;
  items8[3] = first4(c6, obj18);
  return tmp40(ActionSheet, obj6);
};
export const CONJURE_TEMPLATE_WIZARD_SHEET_KEY = "ConjureTemplateWizardSheet";
