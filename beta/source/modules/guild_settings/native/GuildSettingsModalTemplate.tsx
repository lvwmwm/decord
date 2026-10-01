// Module ID: 17451
// Function ID: 17452
// Name: GuildSettingsModalTemplate
// Dependencies: [5, 32, 19, 17, 21, 4836, 576, 17452, 8053, 4832, 1115, 6460, 1485, 5209, 11270, 4735, 5936, 6795, 5279, 6024, 6506, 5281, 6461, 5919, 4792, 6034, 17453, 6610, 4527, 6025, 8370, 4779, 2]
// Exports: default

// Module 17451 (GuildSettingsModalTemplate)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl9 from "intl" /* 1115 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import CopyIcon2 from "CopyIcon" /* 4779 */;
import Text_Text from "Text/Text" /* 4832 */;
import AlertModal from "AlertModal" /* 5209 */;
import Stack_Stack from "Stack/Stack" /* 5279 */;
import Card_Card from "Card/Card" /* 5919 */;
import Input2 from "Input" /* 6025 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import native from "native" /* 8370 */;
import guild_templates_GuildTemplateActionCreatorsDefault from "guild_templates/GuildTemplateActionCreators" /* 11270 */;
import GuildTemplateSettingsUtils from "GuildTemplateSettingsUtils" /* 17452 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2, navigation;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
function TemplateForm(guildId) {
  let Stack;
  let _undefined;
  let _undefined2;
  let _undefined3;
  let c10;
  let closure_6;
  let closure_9;
  let first;
  let first1;
  let firstFieldErrorMessage1;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let items4;
  let items5;
  let items6;
  let obj3;
  let obj5;
  let str;
  let str2;
  let str5;
  let tmp12;
  let tmp16;
  let tmp29Result;
  let tmp6;
  let tmp8;
  guildId = guildId.guildId;
  const guildTemplate = guildId.guildTemplate;
  navigation = undefined;
  _slicedToArray = undefined;
  first = undefined;
  closure_6 = undefined;
  first1 = undefined;
  closure_9 = undefined;
  c10 = undefined;
  str = undefined;
  str2 = undefined;
  let closure_13;
  let onDeleted;
  let callback1;
  let memo;
  let obj = function _handleCreate() {
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      let obj2;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              _undefined2(null);
              _undefined3(true);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj2.createGuildTemplate(guildId, str, str2), done: false };
              obj2 = tmp(closure_2[14]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[15]).APIError(closure_0);
              closure_129_7(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_14();
              c3 = 0;
            }
            closure_129_10(false);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp31) {
          closure_2 = tmp31;
          if (0 === c3) {
            c5 = 3;
            throw tmp31;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  const contentContainerStyle = guildId.contentContainerStyle;
  let tmp = c10();
  const tmp2 = guildId;
  let tmp3 = navigation;
  obj = guildId(navigation[12]);
  navigation = obj.useNavigation();
  let obj2 = first;
  const tmp5 = _slicedToArray(first.useState(null), 2);
  [str, tmp6] = tmp5;
  let c3 = tmp6;
  [str2, tmp8] = _slicedToArray(first.useState(null), 2);
  const tmp7 = _slicedToArray(first.useState(null), 2);
  _slicedToArray = tmp8;
  [first, closure_6] = first.useState(false);
  [obj3, tmp12] = _slicedToArray(first.useState(null), 2);
  let c7 = tmp12;
  const tmp11 = _slicedToArray(first.useState(null), 2);
  [first1, closure_9] = first.useState(false);
  [tmp16, c10] = _slicedToArray(first.useState(false), 2);
  const tmp15 = _slicedToArray(first.useState(false), 2);
  if (str == null) {
    let name;
    if (guildTemplate != null) {
      name = guildTemplate.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  if (str2 == null) {
    let description;
    if (guildTemplate != null) {
      description = guildTemplate.description;
    }
    str2 = description;
  }
  if (str2 == null) {
    str2 = "";
  }
  let tmp19 = null != guildTemplate;
  if (tmp19) {
    tmp19 = str.trim() !== guildTemplate.name || str2.trim() !== guildTemplate.description;
    const tmp20 = str.trim() !== guildTemplate.name || str2.trim() !== guildTemplate.description;
  }
  closure_13 = tmp19;
  onDeleted = obj2.useCallback(() => {
    _undefined(null);
    _undefined2(null);
  }, []);
  const items = [tmp19];
  callback1 = obj2.useCallback(function() {
    let _Promise1;
    if (closure_13) {
      const self = this;
      const self2 = this;
      _Promise1 = new _Promise((arg0) => {
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let closure_0 = arg0;
        obj = {
          key: "guild-template-unsaved-changes",
          title: intl.string(guildId(navigation[10]).t.pvRCSu),
          content: intl2.string(guildId(navigation[10]).t.DRi46S),
          confirmText: intl3.string(guildId(navigation[10]).t["6GQDFu"]),
          cancelText: intl4.string(guildId(navigation[10]).t.DmDzZB),
          onConfirm() {
            return closure_0(true);
          },
          onCloseCallback() {
            return closure_0(false);
          }
        };
        const showConfirmModal = guildId(navigation[13]).showConfirmModal;
        guildId(navigation[13]);
        intl = guildId(navigation[10]).intl;
        intl2 = guildId(navigation[10]).intl;
        intl3 = guildId(navigation[10]).intl;
        intl4 = guildId(navigation[10]).intl;
        showConfirmModal(obj);
      });
    } else {
      _Promise1 = _Promise.resolve(true);
    }
    return _Promise1;
  }, items);
  const items1 = [str];
  memo = obj2.useMemo(() => {
    obj = GuildTemplateSettingsUtils;
    return obj.isGuildTemplateNameValid(str);
  }, items1);
  const items2 = [str.length, first, memo];
  let memo1 = obj2.useMemo(() => {
    const tmp = first;
    if (!tmp) {
      if (str.length >= 1) {
        const tmp3 = memo;
        if (!tmp3) {
          const intl = intl9.intl;
          return intl.string(intl9.t.IHAlh1);
        }
      }
    }
  }, items2);
  const items3 = [onDeleted, str2, guildId, guildTemplate, callback1, tmp19, str, memo, navigation, first1];
  const effect = obj2.useEffect(() => {
    let fn;
    let fn2;
    function handleSave() {
      return obj(...arguments);
    }
    obj = function _handleSave() {
      obj = _asyncToGenerator(async function(arg0, value) {
        if (c5 === 2) {
          c5 = 3;
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
          let c3;
          try {
            let closure_0;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = tmp4;
                if (null != closure_1) {
                  closure_1_7(null);
                  closure_1_9(true);
                  c3 = 1;
                  const obj2 = closure_2_1(navigation[14]);
                  c4 = 2;
                  c5 = 1;
                  const obj5 = { value: obj2.updateGuildTemplate(closure_0, tmp39.code, closure_1_11, closure_1_12), done: false };
                  return obj5;
                }
              }
            } else {
              if (1 === c4) {
                c3 = 0;
                closure_0 = closure_2;
                const self = this;
                const self2 = this;
                const aPIError = new handleSave(navigation[15]).APIError(closure_0);
                closure_1_7(aPIError);
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else {
                closure_1_14();
                c3 = 0;
              }
              closure_1_9(false);
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } catch (tmp32) {
            closure_2 = tmp32;
            if (0 === c3) {
              c5 = 3;
              throw tmp32;
            } else {
              c4 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = navigation;
    const setOptions = navigation.setOptions;
    if (first1) {
      fn = () => null;
    } else {
      const tmp3 = guildId;
      const tmp4 = navigation;
      obj = guildId(navigation[16]);
      fn = obj.getHeaderConditionalBackButton(callback1);
    }
    let obj2 = { headerLeft: fn, headerRight: fn2 };
    if (first1) {
      fn2 = () => _undefined2(handleSave(navigation[16]).HeaderSubmittingIndicator, {});
    } else {
      const tmp6 = closure_13;
      if (tmp6) {
        fn2 = () => {
          let intl;
          obj = { onPress: handleSave, text: intl.string(intl9.t["R3BPH+"]), disabled: !memo };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl9.intl;
          return metroImportDefault(HeaderActionButton, obj);
        };
      }
    }
    setOptions(obj2);
  }, items3);
  let tmp29Result2 = null != obj3 && null == obj3.getFirstFieldErrorMessage("name") && null == obj3.getFirstFieldErrorMessage("description");
  let obj4 = { style: tmp.container, contentContainerStyle: items4, children: tmp27(Stack, obj5) };
  items4 = [tmp.containerContent, contentContainerStyle];
  const Form = tmp2(tmp3[8]).Form;
  obj5 = { spacing: guildTemplate(tmp3[6]).space.PX_24, children: items5 };
  Stack = tmp2(tmp3[18]).Stack;
  const obj6 = { variant: "text-sm/normal", color: "text-subtle", children: str5.trim() };
  const Text = tmp2(tmp3[9]).Text;
  let intl = tmp2(tmp3[10]).intl;
  str5 = intl.string(tmp2(tmp3[10]).t.c0m8bK);
  items5 = [c7(Text, obj6), c7(str2, {}), , , , ];
  const obj7 = {
    label: intl2.string(tmp2(tmp3[10]).t.z1a9R1),
    required: true,
    value: str,
    onChange: tmp6,
    placeholder: intl3.string(tmp2(tmp3[10]).t.bMlpvk),
    maxLength: 100,
    onFocus() {
      return closure_6(true);
    },
    onBlur() {
      return closure_6(false);
    },
    errorMessage: memo1
  };
  const TextInput = tmp2(tmp3[19]).TextInput;
  intl2 = tmp2(tmp3[10]).intl;
  intl3 = tmp2(tmp3[10]).intl;
  const tmp28 = closure_9;
  if (memo1 == null) {
    let firstFieldErrorMessage;
    if (obj3 != null) {
      firstFieldErrorMessage = obj3.getFirstFieldErrorMessage("name");
    }
    memo1 = firstFieldErrorMessage;
  }
  items5[2] = c7(TextInput, obj7);
  const obj8 = { label: intl4.string(tmp2(tmp3[10]).t.GxirWa), value: str2, onChange: tmp8, placeholder: intl5.string(tmp2(tmp3[10]).t.n1FBXh), maxLength: 120, errorMessage: firstFieldErrorMessage1 };
  const TextArea = tmp2(tmp3[20]).TextArea;
  intl4 = tmp2(tmp3[10]).intl;
  intl5 = tmp2(tmp3[10]).intl;
  firstFieldErrorMessage1 = undefined;
  if (obj3 != null) {
    firstFieldErrorMessage1 = obj3.getFirstFieldErrorMessage("description");
  }
  items5[3] = c7(TextArea, obj8);
  if (null != guildTemplate) {
    const obj9 = { guildId, guildTemplate, onError: tmp12, onDeleted };
    tmp29Result = tmp29(onDeleted, obj9);
  } else {
    const obj10 = {
      variant: "primary",
      text: intl6.string(tmp2(tmp3[10]).t.Wxdi8A),
      loading: tmp16,
      disabled: !memo,
      onPress: function handleCreate() {
          return obj(...arguments);
        }
    };
    const Button = tmp2(tmp3[21]).Button;
    intl6 = tmp2(tmp3[10]).intl;
    tmp29Result = tmp29(Button, obj10);
  }
  items5[4] = tmp29Result;
  if (tmp29Result2) {
    const obj11 = { variant: "text-sm/normal", color: "text-feedback-critical", children: obj3.getAnyErrorMessage() };
    const Text2 = tmp2(tmp3[9]).Text;
    tmp29Result2 = tmp29(Text2, obj11);
  }
  const obj12 = { children: items6 };
  items5[5] = tmp29Result2;
  items6 = [tmp29(Form, obj4), tmp29(tmp2(tmp3[22]).NavScrim, {})];
  return first1(tmp28, obj12);
}
function CopyRow(copies) {
  let CircleXIcon;
  let ICON_FEEDBACK_CRITICAL;
  let items;
  let tmp10;
  let tmp4;
  copies = copies.copies;
  const label = copies.label;
  const tmp = closure_10();
  if (copies) {
    CircleXIcon = tmp2(4792).CircleCheckIcon;
    tmp4 = tmp2;
  } else {
    CircleXIcon = tmp2(6034).CircleXIcon;
    tmp4 = tmp2;
  }
  const obj = { style: tmp.copyRow, children: items };
  const colors = nativeDefault.colors;
  const tmp6 = metroImportAll;
  const tmp7 = View;
  if (copies) {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_POSITIVE;
    tmp10 = tmp9;
  } else {
    ICON_FEEDBACK_CRITICAL = colors.ICON_FEEDBACK_CRITICAL;
    tmp10 = tmp9;
  }
  items = [, ];
  const obj2 = { size: "sm", color: ICON_FEEDBACK_CRITICAL, secondaryColor: tmp10(576).colors.WHITE };
  items[0] = metroImportDefault(CircleXIcon, obj2);
  items[1] = metroImportDefault(tmp4(4832).Text, { variant: "text-sm/normal", children: label });
  return tmp6(tmp7, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flex: 1 }, containerContent: obj2, copyRow: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let closure_10 = createStyles(obj);
let closure_12 = react.memo(function DescriptionBox() {
  let Stack;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items;
  let items1;
  let items2;
  let obj2;
  const obj = { children: metroImportAll(Stack, obj2) };
  const Card = Card_Card.Card;
  obj2 = { spacing: nativeDefault.space.PX_16, children: items1 };
  Stack = Stack_Stack.Stack;
  const obj3 = { spacing: nativeDefault.space.PX_12, children: items };
  const Stack2 = Stack_Stack.Stack;
  const obj4 = { variant: "eyebrow", children: intl.string(intl9.t["f8u+VO"]) };
  const Heading = Text_Text.Heading;
  intl = intl9.intl;
  items = [metroImportDefault(Heading, obj4), , , ];
  const obj5 = { copies: true, label: intl2.string(intl9.t.K2tn16) };
  intl2 = intl9.intl;
  items[1] = metroImportDefault(CopyRow, obj5);
  const obj6 = { copies: true, label: intl3.string(intl9.t.om5gNq) };
  intl3 = intl9.intl;
  items[2] = metroImportDefault(CopyRow, obj6);
  const obj7 = { copies: true, label: intl4.string(intl9.t["/VNqdD"]) };
  intl4 = intl9.intl;
  items[3] = metroImportDefault(CopyRow, obj7);
  items1 = [metroImportAll(Stack2, obj3), ];
  const obj8 = { spacing: nativeDefault.space.PX_12, children: items2 };
  const Stack3 = Stack_Stack.Stack;
  const obj9 = { variant: "eyebrow", children: intl5.string(intl9.t["8zhJEr"]) };
  const Heading2 = Text_Text.Heading;
  intl5 = intl9.intl;
  items2 = [metroImportDefault(Heading2, obj9), , , ];
  const obj10 = { copies: false, label: intl6.string(intl9.t.WOKI6t) };
  intl6 = intl9.intl;
  items2[1] = metroImportDefault(CopyRow, obj10);
  const obj11 = { copies: false, label: intl7.string(intl9.t.ddhDJH) };
  intl7 = intl9.intl;
  items2[2] = metroImportDefault(CopyRow, obj11);
  const obj12 = { copies: false, label: intl8.string(intl9.t["6Q/DHk"]) };
  intl8 = intl9.intl;
  items2[3] = metroImportDefault(CopyRow, obj12);
  items1[1] = metroImportAll(Stack3, obj8);
  return metroImportDefault(Card, obj);
});
let closure_14 = react.memo(function TemplateControls(arg0) {
  let InputButton;
  let closure_4;
  let closure_5;
  let date;
  let first;
  let format;
  let guildTemplate;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items;
  let items1;
  let obj10;
  let obj3;
  let v0AVum;
  ({ guildId: require, guildTemplate } = arg0);
  ({ onError: dependencyMap, onDeleted: _asyncToGenerator } = arg0);
  _slicedToArray = undefined;
  react = undefined;
  let obj = function _handleSync() {
    let code;
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      let obj2;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              dependencyMap(null);
              closure_2_4(true);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj2.syncGuildTemplate(require, code.code), done: false };
              obj2 = tmp(closure_2[14]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[15]).APIError(closure_0);
              closure_129_2(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              c3 = 0;
            }
            closure_129_4(false);
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp27) {
          closure_2 = tmp27;
          if (0 === c3) {
            c5 = 3;
            throw tmp27;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  function handleDelete() {
    return obj(...arguments);
  }
  obj = function _handleDelete() {
    let code;
    obj = _asyncToGenerator(async function(arg0, value) {
      let closure_1;
      let obj2;
      if (c5 === 2) {
        c5 = 3;
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
        let c3;
        try {
          let closure_0;
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_0 = tmp4;
              dependencyMap(null);
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: obj2.deleteGuildTemplate(require, code.code), done: false };
              obj2 = tmp(closure_2[14]);
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              closure_0 = closure_2;
              const self = this;
              const self2 = this;
              const aPIError = new closure_0(closure_2[15]).APIError(closure_0);
              closure_129_2(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_129_3();
              c3 = 0;
            }
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp25) {
          closure_2 = tmp25;
          if (0 === c3) {
            c5 = 3;
            throw tmp25;
          } else {
            c4 = 1;
          }
        }
      }
    });
    return obj(...arguments);
  };
  [first, _slicedToArray] = react.useState(false);
  const tmp3 = dependencyMap;
  const tmp4 = guildTemplate(17453)(guildTemplate.code);
  react = tmp4;
  obj = { spacing: guildTemplate(576).space.PX_12, children: items };
  const Stack = Stack_Stack.Stack;
  let obj2 = { label: intl.string(intl9.t.zGGcLw), children: handleDelete(InputButton, obj3) };
  const Input = Input2.Input;
  intl = intl9.intl;
  obj3 = {
    text: tmp4,
    value: tmp4,
    icon: handleDelete(CopyIcon2.CopyIcon, {}),
    iconPosition: "end",
    onPress: function handleCopyLink() {
      obj = ClipboardUtils;
      obj.copy(closure_5);
      const obj2 = ToastUtils;
      obj2.presentLinkCopied();
    },
    accessibilityLabel: intl2.string(intl9.t.zGGcLw),
    accessibilityHint: intl3.string(intl9.t.WqhZss)
  };
  InputButton = native.InputButton;
  intl2 = intl9.intl;
  intl3 = intl9.intl;
  items = [handleDelete(Input, obj2), , , , ];
  let isDirty = guildTemplate.isDirty;
  if (isDirty) {
    let obj4 = { children: items1 };
    let obj5 = { variant: "text-sm/normal", color: "text-feedback-warning", children: intl4.string(tmp6(1115).t.aWsjtD) };
    const Text = tmp6(4832).Text;
    intl4 = tmp6(1115).intl;
    items1 = [tmp7(Text, obj5), ];
    const obj6 = {
      variant: "primary",
      text: intl5.string(intl9.t["Nw+0Y/"]),
      loading: first,
      onPress: function handleSync() {
          return obj(...arguments);
        }
    };
    const Button = tmp6(5281).Button;
    intl5 = tmp6(1115).intl;
    items1[1] = handleDelete(Button, obj6);
    isDirty = tmp5(closure_9, obj4);
  }
  items[1] = isDirty;
  const obj7 = {
    variant: "critical-secondary",
    text: intl6.string(intl9.t["cN/RFD"]),
    onPress: function confirmDelete() {
      let intl;
      let intl2;
      let intl3;
      obj = { key: "delete-guild-template", title: intl.string(intl9.t["cN/RFD"]), content: intl2.string(intl9.t["apCQv/"]), confirmText: intl3.string(intl9.t["cN/RFD"]), onConfirm: handleDelete };
      const showConfirmModal = AlertModal.showConfirmModal;
      AlertModal;
      intl = intl9.intl;
      intl2 = intl9.intl;
      intl3 = intl9.intl;
      showConfirmModal(obj);
    }
  };
  const Button2 = tmp6(5281).Button;
  intl6 = tmp6(1115).intl;
  items[2] = handleDelete(Button2, obj7);
  const obj8 = {
    variant: "secondary",
    text: intl7.string(intl9.t.YI3iV6),
    onPress() {
      obj = guild_templates_GuildTemplateActionCreatorsDefault;
      return obj.showModal(guildTemplate.code, false);
    }
  };
  const Button3 = tmp6(5281).Button;
  intl7 = tmp6(1115).intl;
  items[3] = handleDelete(Button3, obj8);
  let isDirty2 = guildTemplate.isDirty;
  if (isDirty2) {
    const obj9 = { variant: "text-sm/normal", color: "text-muted", children: format(v0AVum, obj10) };
    const Text2 = tmp6(4832).Text;
    const intl8 = tmp6(1115).intl;
    format = intl8.format;
    const _Date = Date;
    let self = this;
    let self2 = this;
    obj10 = { timestamp: date };
    v0AVum = tmp6(1115).t.v0AVum;
    date = new Date(guildTemplate.updatedAt);
    isDirty2 = tmp7(Text2, obj9);
  }
  items[4] = isDirty2;
  return obj(Stack, obj);
});
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsModalTemplate.tsx");

export default function GuildSettingsModalTemplate(arg0) {
  let Text;
  let contentContainerStyle;
  let guildId;
  let intl;
  let items;
  let items1;
  let obj3;
  let obj6;
  let tmp11;
  ({ guildId, contentContainerStyle } = arg0);
  const tmp = closure_10();
  const obj = GuildTemplateSettingsUtils;
  const canViewAllChannels = obj.useCanViewAllChannels(guildId);
  let tmp6 = null;
  const useGuildTemplate = GuildTemplateSettingsUtils.useGuildTemplate;
  GuildTemplateSettingsUtils;
  if (canViewAllChannels) {
    tmp6 = guildId;
  }
  const guildTemplate = useGuildTemplate(tmp6);
  const loadError = guildTemplate.loadError;
  if (canViewAllChannels) {
    let tmp12Result;
    if (null != loadError) {
      const obj2 = { style: tmp.container, contentContainerStyle: items, children: metroImportDefault(Text_Text.Text, obj3) };
      items = [tmp.containerContent, contentContainerStyle];
      const Form2 = tmp2(8053).Form;
      obj3 = { variant: "text-sm/normal", color: "text-feedback-critical", children: loadError.message };
      tmp12Result = metroImportDefault(Form2, obj2);
    } else if (tmp8) {
      tmp12Result = tmp12(tmp2(6460).SceneLoadingIndicator, {});
    } else {
      const obj4 = { guildId, guildTemplate: tmp9, contentContainerStyle };
      tmp12Result = tmp12(TemplateForm, obj4);
    }
    tmp11 = tmp12Result;
  } else {
    const obj5 = { style: tmp.container, contentContainerStyle: items1, children: metroImportDefault(Text, obj6) };
    items1 = [tmp.containerContent, contentContainerStyle];
    const Form = tmp2(8053).Form;
    obj6 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(intl9.t.f0IPAG) };
    Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    tmp11 = metroImportDefault(Form, obj5);
  }
  return tmp11;
};
