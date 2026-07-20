// Module ID: 10970
// Function ID: 85409
// Name: items
// Dependencies: []

// Module 10970 (items)
let DisableCommunicationDuration;
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const importAllResult = importAll(dependencyMap[2]);
({ View: closure_6, ScrollView: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ DisableCommunicationDuration, GUILD_COMMUNICATION_DISABLED_RESOURCE_LINK: closure_8, SET_COMMUNICATION_DISABLED_MODAL_NAME: closure_9 } = arg1(dependencyMap[4]));
const AnalyticEvents = arg1(dependencyMap[5]).AnalyticEvents;
const tmp3 = arg1(dependencyMap[4]);
({ jsx: closure_11, Fragment: closure_12, jsxs: closure_13 } = arg1(dependencyMap[6]));
let obj = {
  value: DisableCommunicationDuration.DURATION_60_SEC,
  getLabel() {
    const intl = arg1(dependencyMap[7]).intl;
    return intl.formatToPlainString(arg1(dependencyMap[7]).t.iruf5E, { minutes: 1 });
  }
};
const items = [
  obj,
  {
    value: DisableCommunicationDuration.DURATION_5_MIN,
    getLabel() {
      const intl = arg1(dependencyMap[7]).intl;
      return intl.formatToPlainString(arg1(dependencyMap[7]).t.iruf5E, { minutes: 5 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_10_MIN,
    getLabel() {
      const intl = arg1(dependencyMap[7]).intl;
      return intl.formatToPlainString(arg1(dependencyMap[7]).t.iruf5E, { minutes: 10 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_HOUR,
    getLabel() {
      const intl = arg1(dependencyMap[7]).intl;
      return intl.formatToPlainString(arg1(dependencyMap[7]).t.LnvrA3, { hours: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_DAY,
    getLabel() {
      const intl = arg1(dependencyMap[7]).intl;
      return intl.formatToPlainString(arg1(dependencyMap[7]).t.jzH70Z, { days: 1 });
    }
  },
  {
    value: DisableCommunicationDuration.DURATION_1_WEEK,
    getLabel() {
      const intl = arg1(dependencyMap[7]).intl;
      return intl.formatToPlainString(arg1(dependencyMap[7]).t.iVZYyl, { weeks: 1 });
    }
  }
];
let obj2 = arg1(dependencyMap[8]);
obj = {};
const tmp4 = arg1(dependencyMap[6]);
obj.container = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj2 = { marginVertical: importDefault(dependencyMap[9]).space.PX_16 };
obj.reasonTextArea = obj2;
const obj1 = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW };
obj.buttonContainer = { marginBottom: importDefault(dependencyMap[9]).space.PX_16 };
let closure_15 = obj2.createStyles(obj);
const obj3 = { marginBottom: importDefault(dependencyMap[9]).space.PX_16 };
const memoResult = importAllResult.memo(function GuildDisableCommunication(arg0) {
  ({ user: closure_0, guildId: closure_1, onClose: closure_2 } = arg0);
  let closure_3;
  let React;
  function _handleSubmitButtonPressed() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = callback2(tmp);
    const _handleSubmitButtonPressed = obj;
    return obj(...arguments);
  }
  const tmp = callback4();
  const tmp2 = callback(React.useState(0), 2);
  closure_3 = tmp2[0];
  const callback = tmp2[1];
  React = React.useRef("");
  const ref = React.useRef(null);
  const ref1 = React.useRef(null);
  const insets = importDefault(dependencyMap[10])({ includeKeyboardHeight: true }).insets;
  const items = [{ ref: ref1, offset: { type: "toBottom" } }];
  importDefault(dependencyMap[11])({ insets, inputs: items, scrollViewRef: ref });
  importDefault(dependencyMap[12])(() => {
    let obj = callback(closure_2[13]);
    obj = { type: closure_9, guild_id: callback, other_user_id: lib.id };
    obj.track(constants.OPEN_MODAL, obj);
  });
  let obj = { style: tmp.container, ref };
  obj = { paddingHorizontal: importDefault(dependencyMap[9]).space.PX_12, paddingBottom: insets.bottom };
  obj.contentContainerStyle = obj;
  obj = {};
  const obj1 = {};
  const obj2 = { marginVertical: importDefault(dependencyMap[9]).space.PX_16 };
  obj1.style = obj2;
  obj1.variant = "heading-md/semibold";
  const intl = arg1(dependencyMap[7]).intl;
  obj1.children = intl.format(arg1(dependencyMap[7]).t.Ns83GT, { helpdeskArticle: closure_8 });
  const items1 = [callback2(arg1(dependencyMap[18]).TextWithIOSLinkWorkaround, obj1), , , ];
  const obj4 = {};
  const intl2 = arg1(dependencyMap[7]).intl;
  obj4.title = intl2.string(arg1(dependencyMap[7]).t.9XsExm);
  obj4.defaultValue = 0;
  obj4.onChange = function onChange(arg0) {
    callback3(arg0);
  };
  obj4.hasIcons = false;
  obj4.children = items.map((getLabel, value) => {
    const obj = { value, label: getLabel.getLabel() };
    return callback4(lib(closure_2[20]).TableRadioRow, obj, value);
  });
  items1[1] = callback2(arg1(dependencyMap[19]).TableRadioGroup, obj4);
  const obj5 = { ref: ref1, containerStyle: tmp.reasonTextArea };
  const intl3 = arg1(dependencyMap[7]).intl;
  obj5.placeholder = intl3.string(arg1(dependencyMap[7]).t.GakiH1);
  const intl4 = arg1(dependencyMap[7]).intl;
  obj5.label = intl4.string(arg1(dependencyMap[7]).t.ewHW15);
  obj5.maxLength = 512;
  obj5.onChange = function onChange(current) {
    closure_5.current = current;
  };
  items1[2] = callback2(arg1(dependencyMap[21]).TextArea, obj5);
  const obj6 = { style: tmp.buttonContainer };
  const obj7 = { variant: "primary" };
  const intl5 = arg1(dependencyMap[7]).intl;
  obj7.text = intl5.string(arg1(dependencyMap[7]).t.MlPTIi);
  obj7.onPress = function handleSubmitButtonPressed() {
    return _handleSubmitButtonPressed(...arguments);
  };
  obj6.children = callback2(arg1(dependencyMap[22]).Button, obj7);
  items1[3] = callback2(_handleSubmitButtonPressed, obj6);
  obj.children = items1;
  obj.children = callback3(closure_12, obj);
  return callback2(closure_7, obj);
});
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/guild_communication_disabled/native/GuildDisableCommunication.tsx");

export default memoResult;
