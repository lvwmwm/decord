// Module ID: 11345
// Function ID: 11346
// Name: AutomodSubmitFeedbackModal
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 6544, 6795, 1115, 6413, 6938, 1613, 4832, 8053, 1177, 5281, 5016, 11346, 6937, 4527, 6421, 2]
// Exports: default

// Module 11345 (AutomodSubmitFeedbackModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl4 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import AssetRegistryDefault from "AssetRegistry" /* 6413 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import AutomodFeedback from "AutomodFeedback" /* 6938 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment_mod from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, value;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let rect;
function Navbar(onClose) {
  let HeaderActionButton;
  let intl;
  let obj;
  let obj2;
  onClose = onClose.onClose;
  const tmp = closure_10();
  const rect = { top: true, left: true, right: true, style: tmp.header, children: metroImportDefault(View, obj) };
  obj = { style: tmp.closeButtonContainer, children: metroImportDefault(HeaderActionButton, obj2) };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  obj2 = { accessibilityLabel: intl.string(intl4.t.cpT0Cq), onPress: onClose, source: AssetRegistryDefault };
  HeaderActionButton = HeaderActionButton2.HeaderActionButton;
  intl = intl4.intl;
  return metroImportDefault(SafeAreaPaddingView, rect);
}
function SubmitFeedbackScreen(onSubmit) {
  let Button;
  let closure_2;
  let intl;
  let intl2;
  let intl3;
  let items;
  let items1;
  let items2;
  let left;
  let obj8;
  let right;
  ({ feedback: require, onChange: importDefault } = onSubmit);
  onSubmit = onSubmit.onSubmit;
  const tmp = closure_10();
  dependencyMap = tmp;
  let obj = AutomodFeedback;
  const feedbackOptions = obj.generateFeedbackOptions();
  const tmp2 = useSafeAreaInsetsDefault();
  ({ left, right } = tmp2);
  let obj2 = { style: items, children: items1 };
  items = [tmp.container, ];
  let obj3 = { paddingLeft: 16 + left, paddingRight: 16 + right };
  items[1] = obj3;
  const bottom = tmp2.bottom;
  const obj4 = { style: tmp.headerTitle, variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["7bdzNo"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items1 = [closure_7(Text, obj4), , , ];
  const obj5 = { style: tmp.headerSubtitle, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t.Lbpk6m) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items1[1] = closure_7(Text2, obj5);
  const obj6 = {
    style: tmp.formBody,
    children: feedbackOptions.map((value, index) => {
      let obj2;
      let obj3;
      value = value.value;
      require = value;
      const name = value.name;
      const Fragment = React.Fragment;
      const obj = {
        onPress() {
          return importDefault(closure_0);
        },
        trailing: closure_1_7(require("native").RadioIndicator, obj2),
        label: closure_1_7(require("Text/Text").Text, obj3)
      };
      const FormRow = require("Form").FormRow;
      obj2 = { active: require === value, style: closure_2.radioIndicator };
      obj3 = { style: closure_2.formRow, variant: "text-md/semibold", color: "interactive-text-active", children: name };
      const children = [closure_1_7(FormRow, obj), index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {})];
      index < feedbackOptions.length - 1 && closure_1_7(require("Form").FormDivider, {});
      return closure_1_8(Fragment, { children }, value);
    })
  };
  items1[2] = closure_7(View, obj6);
  const obj7 = { style: items2, children: closure_7(Button, obj8) };
  items2 = [tmp.submitButtonContainer, { paddingBottom: bottom + 16, paddingLeft: 16 + left, paddingRight: 16 + right }];
  obj8 = { size: "md", text: intl3.string(intl4.t.Z6DZZ6), onPress: onSubmit };
  Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items1[3] = closure_7(View, obj7);
  return closure_8(View, obj2);
}
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const AnalyticEvents = Constants.AnalyticEvents;
let Fragment = Fragment_mod;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const SUBMIT_FEEDBACK = "SUBMIT_FEEDBACK";
let createStyles = createStyles_mod;
let obj = { container: obj2, header: obj3, headerTitle: { textAlign: "center" }, headerSubtitle: { textAlign: "center", marginTop: 8 }, closeButtonContainer: { marginVertical: 14 }, formBody: obj4, formRow: { paddingVertical: 2 }, radioIndicator: { marginRight: 0 }, submitButtonContainer: rect };
obj2 = { flex: 1, paddingVertical: 0, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flexDirection: "column", height: "100%", paddingTop: 8 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", justifyContent: "flex-end", paddingHorizontal: 16, paddingVertical: 8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { marginTop: 24, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
rect = { position: "absolute", bottom: 0, left: 0, right: 0, paddingVertical: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_automod/native/AutomodSubmitFeedbackModal.tsx");

export default function AutomodSubmitFeedbackModal(onCloseModal) {
  let closure_3;
  let first;
  onCloseModal = onCloseModal.onCloseModal;
  const automodDecision = onCloseModal.automodDecision;
  first = undefined;
  _slicedToArray = undefined;
  const top = automodDecision(first[12])().top;
  [first, _slicedToArray] = react.useState(onCloseModal(first[11]).Feedback.BUG);
  const items = [first, onCloseModal, automodDecision];
  const memo = react.useMemo(() => {
    let closure_1 = first;
    function onChange(arg0) {
      onSubmit(arg0);
    }
    function onSubmit() {
      let channel;
      let messageId;
      const obj = onCloseModal(first[17]);
      const obj2 = { feedback_type: onChange, message_id: feedback.messageId, content: feedback.messageContent, decision_id: feedback.decisionId };
      obj.trackWithMetadata(constants.GUILD_AUTOMOD_FEEDBACK, obj2);
      ({ messageId, channel } = feedback);
      const obj3 = onCloseModal(first[18]);
      obj3.executeAlertAction(messageId, channel, onCloseModal(first[19]).AutomodAlertActionType.SUBMIT_FEEDBACK);
      const obj4 = onCloseModal(first[20]);
      obj4.presentFeedbackSent();
      onClose();
    }
    let obj = {
      ignoreKeyboard: true,
      title: "",
      customNavbar() {
        const obj = { onClose };
        return closure_2_7(closure_2_11, obj);
      },
      headerLeft() {
        return null;
      },
      render() {
        const obj = { feedback, onChange, onSubmit };
        return closure_2_7(closure_2_12, obj);
      }
    };
    return { [closure_2_9]: obj };
  }, items);
  let obj = { screens: memo, initialRouteName: SUBMIT_FEEDBACK, headerStatusBarHeight: top };
  return closure_7(onCloseModal(first[21]).Navigator, obj);
};
