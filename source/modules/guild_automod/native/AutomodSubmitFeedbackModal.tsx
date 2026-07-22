// Module ID: 11001
// Function ID: 85585
// Name: Navbar
// Dependencies: []
// Exports: default

// Module 11001 (Navbar)
function Navbar(onClose) {
  const tmp = callback4();
  let obj = { top: true, style: tmp.header };
  obj = { style: tmp.closeButtonContainer };
  obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[9]).t.cpT0Cq);
  obj.onPress = onClose.onClose;
  obj.source = importDefault(dependencyMap[10]);
  obj.children = callback2(arg1(dependencyMap[8]).HeaderActionButton, obj);
  obj.children = callback2(View, obj);
  return callback2(arg1(dependencyMap[7]).SafeAreaPaddingView, obj);
}
function SubmitFeedbackScreen(onSubmit) {
  ({ feedback: closure_0, onChange: closure_1 } = onSubmit);
  let dependencyMap;
  function label(children) {
    const obj = { "Null": "isArray", "Null": "isArray", alignItems: "isArray", style: tmp.formRow, children };
    return callback2(callback(tmp[13]).Text, obj);
  }
  const tmp = callback4();
  dependencyMap = tmp;
  let obj = arg1(dependencyMap[11]);
  const feedbackOptions = obj.generateFeedbackOptions();
  let closure_3 = feedbackOptions;
  obj = { style: tmp.container };
  obj = { style: tmp.headerTitle };
  const intl = arg1(dependencyMap[9]).intl;
  obj.children = intl.string(arg1(dependencyMap[9]).t.7bdzNo);
  const items = [callback2(arg1(dependencyMap[13]).Text, obj), , , ];
  const obj1 = { style: tmp.headerSubtitle };
  const intl2 = arg1(dependencyMap[9]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[9]).t.Lbpk6m);
  items[1] = callback2(arg1(dependencyMap[13]).Text, obj1);
  items[2] = callback2(View, {
    style: tmp.formBody,
    children: feedbackOptions.map((value) => {
      value = value.value;
      let obj = {};
      obj = {
        onPress() {
          return callback(value);
        }
      };
      obj = { active: value === value, style: tmp.radioIndicator };
      obj.trailing = callback2(value(closure_8[15]).RadioIndicator, obj);
      obj.label = label(value.name);
      const items = [callback2(value(closure_8[14]).FormRow, obj), ];
      let tmp2 = arg1 < feedbackOptions.length - 1;
      if (tmp2) {
        tmp2 = callback2(value(tmp[14]).FormDivider, {});
      }
      items[1] = tmp2;
      obj.children = items;
      return closure_8(label.Fragment, obj, value);
    })
  });
  const obj3 = { style: items1 };
  const items1 = [tmp.submitButtonContainer, ];
  const obj2 = {
    style: tmp.formBody,
    children: feedbackOptions.map((value) => {
      value = value.value;
      let obj = {};
      obj = {
        onPress() {
          return callback(value);
        }
      };
      obj = { active: value === value, style: tmp.radioIndicator };
      obj.trailing = callback2(value(closure_8[15]).RadioIndicator, obj);
      obj.label = label(value.name);
      const items = [callback2(value(closure_8[14]).FormRow, obj), ];
      let tmp2 = arg1 < feedbackOptions.length - 1;
      if (tmp2) {
        tmp2 = callback2(value(tmp[14]).FormDivider, {});
      }
      items[1] = tmp2;
      obj.children = items;
      return closure_8(label.Fragment, obj, value);
    })
  };
  items1[1] = { paddingBottom: importDefault(dependencyMap[12])().bottom + 16 };
  const obj5 = { size: "md" };
  const intl3 = arg1(dependencyMap[9]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[9]).t.Z6DZZ6);
  obj5.onPress = onSubmit.onSubmit;
  obj3.children = callback2(arg1(dependencyMap[16]).Button, obj5);
  items[3] = callback2(View, obj3);
  obj.children = items;
  return callback3(View, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const AnalyticEvents = arg1(dependencyMap[3]).AnalyticEvents;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Null": "absolute", "Null": 2, "Null": 10, "Null": -12, "Null": 3, "Null": 31, "Null": 16, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.header = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.headerTitle = { textAlign: "center" };
obj.headerSubtitle = {};
obj.closeButtonContainer = { marginVertical: 14 };
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
obj.formBody = { marginTop: 24, borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.formRow = { paddingVertical: 2 };
obj.radioIndicator = { marginRight: 0 };
const obj2 = { marginTop: 24, borderRadius: importDefault(dependencyMap[6]).radii.sm, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.submitButtonContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
let closure_9 = obj.createStyles(obj);
const obj3 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

export default function AutomodSubmitFeedbackModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const arg1 = onCloseModal;
  const automodDecision = onCloseModal.automodDecision;
  const importDefault = automodDecision;
  const tmp = callback(React.useState(arg1(dependencyMap[11]).Feedback.BUG), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const callback = tmp[1];
  const items = [first, onCloseModal, automodDecision];
  const screens = React.useMemo(() => function getScreens(arg0) {
    ({ onCloseModal: closure_0, feedback: closure_1, onChange: closure_2, onSubmit: closure_3 } = arg0);
    const obj = {
      "Bool(false)": "<string:498401282>",
      "Bool(false)": "<string:4132503554>",
      customNavbar() {
        return callback(closure_10, { onClose: closure_0 });
      },
      headerLeft() {
        return null;
      },
      render() {
        return callback(closure_11, { feedback: closure_1, onChange: closure_2, onSubmit: closure_3 });
      }
    };
    return { ["SUBMIT_FEEDBACK"]: obj };
  }({
    onCloseModal,
    feedback: first,
    onChange(arg0) {
      callback2(arg0);
    },
    onSubmit() {
      let channel;
      let messageId;
      let obj = callback(closure_2[17]);
      obj = { feedback_type: closure_2, message_id: closure_1.messageId, content: closure_1.messageContent, decision_id: closure_1.decisionId };
      obj.trackWithMetadata(constants.GUILD_AUTOMOD_FEEDBACK, obj);
      ({ messageId, channel } = closure_1);
      callback(closure_2[18]).executeAlertAction(messageId, channel, callback(closure_2[19]).AutomodAlertActionType.SUBMIT_FEEDBACK);
      const obj3 = callback(closure_2[18]);
      callback(closure_2[20]).presentFeedbackSent();
      callback();
    }
  }), items);
  return callback2(arg1(dependencyMap[21]).Navigator, { screens, initialRouteName: "SUBMIT_FEEDBACK", headerStatusBarHeight: importDefault(dependencyMap[12])().top });
};
