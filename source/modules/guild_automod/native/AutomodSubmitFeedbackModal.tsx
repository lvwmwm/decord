// Module ID: 11038
// Function ID: 85824
// Name: Navbar
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 5121, 5788, 1212, 7696, 6750, 1557, 4126, 7636, 1273, 4543, 4324, 11039, 6749, 3830, 5517, 2]
// Exports: default

// Module 11038 (Navbar)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import { AnalyticEvents } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_7;
let closure_8;
const require = arg1;
function Navbar(onClose) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { top: true, style: tmp.header };
  obj = { style: tmp.closeButtonContainer };
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.onPress = onClose.onClose;
  obj.source = importDefault(7696);
  obj.children = callback2(require(5788) /* HeaderActionButton */.HeaderActionButton, obj);
  obj.children = callback2(View, obj);
  return callback2(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
}
function SubmitFeedbackScreen(onSubmit) {
  let importDefault;
  let require;
  ({ feedback: require, onChange: importDefault } = onSubmit);
  let dependencyMap;
  function label(children) {
    const obj = { style: _undefined.formRow, variant: "text-md/semibold", color: "interactive-text-active", children };
    return outer1_7(outer1_0(_undefined[13]).Text, obj);
  }
  const tmp = _createForOfIteratorHelperLoose();
  dependencyMap = tmp;
  let obj = require(6750) /* Feedback */;
  const feedbackOptions = obj.generateFeedbackOptions();
  obj = { style: tmp.container };
  obj = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["7bdzNo"]);
  let items = [callback2(require(4126) /* Text */.Text, obj), , , ];
  const obj1 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.Lbpk6m);
  items[1] = callback2(require(4126) /* Text */.Text, obj1);
  items[2] = callback2(View, {
    style: tmp.formBody,
    children: feedbackOptions.map((value) => {
      value = value.value;
      let closure_0 = value;
      let obj = {};
      obj = {
        onPress() {
          return outer1_1(closure_0);
        }
      };
      obj = { active: closure_0 === value, style: _undefined.radioIndicator };
      obj.trailing = outer1_7(outer1_0(_undefined[15]).RadioIndicator, obj);
      obj.label = label(value.name);
      const items = [outer1_7(outer1_0(_undefined[14]).FormRow, obj), ];
      let tmp2 = arg1 < feedbackOptions.length - 1;
      if (tmp2) {
        tmp2 = outer1_7(outer1_0(_undefined[14]).FormDivider, {});
      }
      items[1] = tmp2;
      obj.children = items;
      return outer1_8(label.Fragment, obj, value);
    })
  });
  const obj3 = { style: items1 };
  items1 = [tmp.submitButtonContainer, ];
  const obj2 = {
    style: tmp.formBody,
    children: feedbackOptions.map((value) => {
      value = value.value;
      let closure_0 = value;
      let obj = {};
      obj = {
        onPress() {
          return outer1_1(closure_0);
        }
      };
      obj = { active: closure_0 === value, style: _undefined.radioIndicator };
      obj.trailing = outer1_7(outer1_0(_undefined[15]).RadioIndicator, obj);
      obj.label = label(value.name);
      const items = [outer1_7(outer1_0(_undefined[14]).FormRow, obj), ];
      let tmp2 = arg1 < feedbackOptions.length - 1;
      if (tmp2) {
        tmp2 = outer1_7(outer1_0(_undefined[14]).FormDivider, {});
      }
      items[1] = tmp2;
      obj.children = items;
      return outer1_8(label.Fragment, obj, value);
    })
  };
  items1[1] = { paddingBottom: importDefault(1557)().bottom + 16 };
  const obj5 = { size: "md" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl3.string(require(1212) /* getSystemLocale */.t.Z6DZZ6);
  obj5.onPress = onSubmit.onSubmit;
  obj3.children = callback2(require(4543) /* Button */.Button, obj5);
  items[3] = callback2(View, obj3);
  obj.children = items;
  return callback3(View, obj);
}
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, paddingHorizontal: 16, paddingVertical: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "row", justifyContent: "flex-end", paddingVertical: 8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.header = obj1;
_createForOfIteratorHelperLoose.headerTitle = { textAlign: "center" };
_createForOfIteratorHelperLoose.headerSubtitle = { textAlign: "center", marginTop: 8 };
_createForOfIteratorHelperLoose.closeButtonContainer = { marginVertical: 14 };
_createForOfIteratorHelperLoose.formBody = { marginTop: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.formRow = { paddingVertical: 2 };
_createForOfIteratorHelperLoose.radioIndicator = { marginRight: 0 };
let obj3 = { position: "absolute", bottom: 0, left: 0, right: 0, paddingHorizontal: 16, paddingVertical: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.submitButtonContainer = obj3;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginTop: 24, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

export default function AutomodSubmitFeedbackModal(onCloseModal) {
  onCloseModal = onCloseModal.onCloseModal;
  const automodDecision = onCloseModal.automodDecision;
  const tmp = callback(React.useState(onCloseModal(first[11]).Feedback.BUG), 2);
  first = tmp[0];
  callback = tmp[1];
  const items = [first, onCloseModal, automodDecision];
  const screens = React.useMemo(() => (function getScreens(arg0) {
    let closure_0;
    let closure_1;
    let closure_2;
    let _slicedToArray;
    ({ onCloseModal: closure_0, feedback: closure_1, onChange: closure_2, onSubmit: _slicedToArray } = arg0);
    const obj = {
      ignoreKeyboard: true,
      title: "",
      customNavbar() {
        return outer3_7(outer3_10, { onClose: closure_0 });
      },
      headerLeft() {
        return null;
      },
      render() {
        return outer3_7(outer3_11, { feedback: closure_1, onChange: closure_2, onSubmit: _slicedToArray });
      }
    };
    return { ["SUBMIT_FEEDBACK"]: obj };
  })({
    onCloseModal,
    feedback: first,
    onChange(arg0) {
      outer1_3(arg0);
    },
    onSubmit() {
      let channel;
      let messageId;
      let obj = onCloseModal(first[17]);
      obj = { feedback_type: outer1_2, message_id: outer1_1.messageId, content: outer1_1.messageContent, decision_id: outer1_1.decisionId };
      obj.trackWithMetadata(outer2_6.GUILD_AUTOMOD_FEEDBACK, obj);
      ({ messageId, channel } = outer1_1);
      onCloseModal(first[18]).executeAlertAction(messageId, channel, onCloseModal(first[19]).AutomodAlertActionType.SUBMIT_FEEDBACK);
      const obj3 = onCloseModal(first[18]);
      onCloseModal(first[20]).presentFeedbackSent();
      outer1_0();
    }
  }), items);
  return callback2(onCloseModal(first[21]).Navigator, { screens, initialRouteName: "SUBMIT_FEEDBACK", headerStatusBarHeight: automodDecision(first[12])().top });
};
