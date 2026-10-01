// Module ID: 11320
// Function ID: 11321
// Name: GuildDisableCommunication
// Dependencies: [5, 32, 19, 17, 2110, 1074, 21, 1115, 4836, 576, 6402, 10608, 5298, 1241, 11321, 4528, 4988, 8810, 4832, 5997, 6000, 6506, 5281, 2]

// Module 11320 (GuildDisableCommunication)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl6 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import useMountEffectDefault from "useMountEffect" /* 5298 */;
import TableRadioGroup2 from "TableRadioGroup" /* 5997 */;
import TableRadioRow2 from "TableRadioRow" /* 6000 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6402 */;
import TextArea2 from "TextArea" /* 6506 */;
import useSafeAreaAvoidingInputsDefault from "useSafeAreaAvoidingInputs" /* 10608 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildDisableCommunicationConstants from "GuildDisableCommunicationConstants" /* 2110 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2;

let DisableCommunicationDuration;
let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroRequire, ScrollView: metroImportDefault } = react_native);
({ DisableCommunicationDuration, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: metroImportAll, SET_COMMUNICATION_DISABLED_MODAL_NAME: c9 } = GuildDisableCommunicationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: unpackModuleId, Fragment: closure_12, jsxs: map1 } = Fragment);
let obj = {
  value: DisableCommunicationDuration.DURATION_60_SEC,
  getLabel() {
    const intl = intl6.intl;
    return intl.formatToPlainString(intl6.t.iruf5E, { minutes: 1 });
  }
};
let items = [
  obj,
  {
    value: DisableCommunicationDuration.DURATION_5_MIN,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.iruf5E, { minutes: 5 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_10_MIN,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.iruf5E, { minutes: 10 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_HOUR,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.LnvrA3, { hours: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_DAY,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.jzH70Z, { days: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_WEEK,
    getLabel() {
      const intl = intl6.intl;
      return intl.formatToPlainString(intl6.t.iVZYyl, { weeks: 1 });
    }
  }
];
let createStyles = createStyles_mod;
let obj2 = { container: obj3, reasonTextArea: obj4, buttonContainer: obj5 };
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj4 = { marginVertical: nativeDefault.space.PX_16 };
obj5 = { marginBottom: nativeDefault.space.PX_16 };
let closure_15 = createStyles(obj2);
const memoResult = react.memo(function GuildDisableCommunication(arg0) {
  let Button;
  let _undefined;
  let c3;
  let c4;
  let closure_5;
  let guild_id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items1;
  let obj11;
  let obj3;
  let obj4;
  let obj6;
  let obj7;
  ({ user: require, guildId: importDefault, onClose: dependencyMap } = arg0);
  c3 = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let obj = function _handleSubmitButtonPressed() {
    let id;
    let ref;
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_1;
      let obj7;
      let user;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
              const obj4 = tmp3(c2[14]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj4.setCommunicationDisabledDuration(guild_id, id.id, closure_1_14[closure_2_3].value, ref.current), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const open = tmp3(c2[15]).open;
            const tmp26 = tmp3(c2[15]);
            const intl = user(c2[7]).intl;
            const formatToPlainString = intl.formatToPlainString;
            const O9C3Nt = user(c2[7]).t.O9C3Nt;
            const obj8 = tmp3(c2[16]);
            const name = obj8.getName(closure_129_1, null, closure_129_0);
            user = name;
            if (name == null) {
              user = "";
            }
            obj = { key: "GUILD_COMMUNICATION_DISABLED_SUCCESS", content: formatToPlainString(O9C3Nt, obj7), icon: tmp3(c2[17]) };
            obj7 = { user };
            open(obj);
            closure_129_2();
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp19) {
          c3 = 3;
          throw tmp19;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_15();
  const tmp2 = _slicedToArray(react.useState(0), 2);
  [c3, c4] = tmp2;
  react = react.useRef("");
  const ref = react.useRef(null);
  const ref1 = react.useRef(null);
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  obj = { insets, inputs: items, scrollViewRef: ref };
  items = [{ ref: ref1, offset: { type: "toBottom" } }];
  useSafeAreaAvoidingInputsDefault(obj);
  useMountEffectDefault(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type, guild_id: importDefault, other_user_id: require.id };
    obj.track(AnalyticEvents.OPEN_MODAL, obj2);
  });
  let obj2 = { style: tmp.container, ref, contentContainerStyle: obj3, children: closure_13(closure_12, obj4) };
  obj3 = { paddingHorizontal: nativeDefault.space.PX_12, paddingBottom: insets.bottom };
  obj4 = { children: items1 };
  let obj5 = { style: obj6, variant: "heading-md/semibold", children: intl.format(intl6.t.Ns83GT, obj7) };
  obj6 = { marginVertical: nativeDefault.space.PX_16 };
  const Text = Text_Text.Text;
  intl = intl6.intl;
  obj7 = { helpdeskArticle };
  items1 = [closure_11(Text, obj5), , , ];
  let obj8 = {
    title: intl2.string(intl6.t["9XsExm"]),
    defaultValue: 0,
    onChange(arg0) {
      _undefined(arg0);
    },
    hasIcons: false,
    children: items.map((getLabel, value) => {
      obj = { value, label: getLabel.getLabel() };
      const TableRadioRow = TableRadioRow2.TableRadioRow;
      return closure_1_11(TableRadioRow, obj, value);
    })
  };
  const TableRadioGroup = TableRadioGroup2.TableRadioGroup;
  intl2 = intl6.intl;
  items1[1] = closure_11(TableRadioGroup, obj8);
  const obj9 = {
    ref: ref1,
    containerStyle: tmp.reasonTextArea,
    placeholder: intl3.string(intl6.t.GakiH1),
    label: intl4.string(intl6.t.ewHW15),
    maxLength: 512,
    onChange(current) {
      closure_5.current = current;
    }
  };
  const TextArea = TextArea2.TextArea;
  intl3 = intl6.intl;
  intl4 = intl6.intl;
  items1[2] = closure_11(TextArea, obj9);
  const obj10 = { style: tmp.buttonContainer, children: closure_11(Button, obj11) };
  obj11 = {
    variant: "primary",
    text: intl5.string(intl6.t.MlPTIi),
    onPress: function handleSubmitButtonPressed() {
      return obj(...arguments);
    }
  };
  Button = components_Button_Button.Button;
  intl5 = intl6.intl;
  items1[3] = closure_11(obj, obj10);
  return closure_11(closure_7, obj2);
});
const result = size.fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunication.tsx");

export default memoResult;
