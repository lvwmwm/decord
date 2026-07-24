// Module ID: 11347
// Function ID: 88275
// Name: UnsavedChangesAlertModal
// Dependencies: [31, 27, 7070, 33, 4130, 689, 477, 4475, 1212, 7574, 1273, 11348, 4126, 11349, 4098, 11350, 1934, 5165, 3989, 8604, 480, 5160, 11346, 3831, 9689, 3843, 11351, 11356, 5093, 7002, 4472, 11357, 5788, 5120, 11358, 7636, 11360, 9132, 2]
// Exports: default

// Module 11347 (UnsavedChangesAlertModal)
import importAllResult from "FocusHelperState";
import get_ActivityIndicator from "useTrackPollCreationEvents";
import POLL_ATTACHMENT_FOLDER from "POLL_ATTACHMENT_FOLDER";
import jsxProd from "registerAsset";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";
import set from "POLL_ATTACHMENT_FOLDER";

let closure_10;
let closure_11;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function UnsavedChangesAlertModal(onConfirm) {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t.HMrgcp);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.content = intl2.string(require(1212) /* getSystemLocale */.t["Wxa/j8"]);
  obj = {};
  obj = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.text = intl3.string(require(1212) /* getSystemLocale */.t.TzJA4g);
  obj.onPress = onConfirm.onConfirm;
  const items = [callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj1.text = intl4.string(require(1212) /* getSystemLocale */.t["2BR5R2"]);
  items[1] = callback(require(4475) /* getAlertModalItemKey */.AlertActionButton, obj1, "back");
  obj.children = items;
  obj.actions = callback2(closure_10, obj);
  return callback(require(4475) /* getAlertModalItemKey */.AlertModal, obj);
}
function AddAnswerButton(onPress) {
  const tmp = callback3();
  let obj = { source: importDefault(11348), size: require(1273) /* Button */.Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color };
  obj = { onPress: onPress.onPress, style: tmp.addAnswerButtonDefault, accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.B2Uvme);
  const items = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { variant: "text-md/medium", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t.B2Uvme);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(closure_4, obj);
}
function PollDurationSelectionRow(selectedDuration) {
  selectedDuration = selectedDuration.selectedDuration;
  const onChange = selectedDuration.onChange;
  const tmp = onChange(11349)()[selectedDuration];
  let obj = {};
  const intl = selectedDuration(1212).intl;
  obj.label = intl.string(selectedDuration(1212).t.bGHzxb);
  const intl2 = selectedDuration(1212).intl;
  obj.accessibilityLabel = "" + intl2.string(selectedDuration(1212).t.bGHzxb) + " " + tmp;
  const intl3 = selectedDuration(1212).intl;
  obj.accessibilityHint = intl3.string(selectedDuration(1212).t.A4PJ1o);
  obj.onPress = function onPress() {
    let obj = selectedDuration(outer1_2[18]);
    obj.dismissKeyboard();
    obj = { selectedDuration, onChange };
    onChange(outer1_2[14]).openLazy(selectedDuration(outer1_2[16])(outer1_2[15], outer1_2.paths), outer1_8, obj);
  };
  obj = { variant: "text-md/normal", color: "text-muted", children: tmp };
  obj.trailing = callback(selectedDuration(4126).Text, obj);
  obj.arrow = true;
  return callback(selectedDuration(5165).TableRow, obj);
}
({ TouchableOpacity: closure_4, View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ MAX_POLL_QUESTION_LENGTH: closure_7, POLL_CREATION_DURATION_ACTION_SHEET_KEY: closure_8 } = POLL_ATTACHMENT_FOLDER);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
let obj = { viewPadding: { paddingHorizontal: 18 }, scrollContainer: { paddingVertical: 20, gap: 16 } };
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.safeAreaContainer = obj;
obj.header = { flexDirection: "row", paddingHorizontal: 18, paddingVertical: 10 };
obj.actionButton = { flex: 0, justifyContent: "flex-start", minWidth: 48, paddingHorizontal: 0, marginHorizontal: 0 };
obj.postButton = { justifyContent: "flex-end" };
obj.title = { textAlign: "center", flexGrow: 1 };
obj.label = { fontSize: 14 };
obj.answerInputsContainer = { marginVertical: 20, rowGap: 16 };
_createForOfIteratorHelperLoose = { paddingVertical: null, paddingLeft: 14, marginRight: 30, display: "flex", flexDirection: "row", gap: 16, alignItems: "center", justifyContent: "flex-start" };
let num = 8;
if (set.isAndroid()) {
  num = 10;
}
_createForOfIteratorHelperLoose.paddingVertical = num;
_createForOfIteratorHelperLoose.backgroundColor = require("_createForOfIteratorHelperLoose").colors.MESSAGE_BACKGROUND_HOVER;
_createForOfIteratorHelperLoose.borderRadius = require("_createForOfIteratorHelperLoose").radii.lg;
obj.addAnswerButtonDefault = _createForOfIteratorHelperLoose;
obj.addAnswerIcon = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
obj.pollConfigSection = { borderTopWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
let closure_13 = importAllResult.forwardRef((error, ref) => {
  let onChange;
  let onSubmitEditing;
  error = error.error;
  let tmp = null != error;
  ({ onChange, onSubmitEditing } = error);
  if (tmp) {
    tmp = error.length > 0;
  }
  let obj = { ref, textAlignVertical: "center" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.label = intl.string(require(1212) /* getSystemLocale */.t.WBiKnI);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.WBiKnI);
  let formatToPlainStringResult;
  if (tmp) {
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(require(1212) /* getSystemLocale */.t.jnq5Ho, obj);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl4.string(require(1212) /* getSystemLocale */.t["/uQqJW"]);
  obj.onChange = onChange;
  obj.isClearable = true;
  let str = "default";
  if (tmp) {
    str = "error";
  }
  obj.status = str;
  obj.errorMessage = error;
  obj.maxLength = closure_7;
  obj.returnKeyType = "next";
  obj.blurOnSubmit = false;
  obj.onSubmitEditing = onSubmitEditing;
  obj.textContentType = "none";
  obj.autoFocus = true;
  obj.autoCorrect = true;
  return closure_9(require(7574) /* TextInput */.TextInput, obj);
});
const result = set.fileFinishedImporting("modules/polls/native/PollCreation.tsx");

export default function PollCreation(channel) {
  let allowMultiSelect;
  let canAddMoreAnswers;
  let closure_11;
  let closure_12;
  let closure_4;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let createPollError;
  let duration;
  let fieldErrors;
  let handleAddAnswer;
  let handleQuestionChange;
  let handleSubmitPoll;
  let setDuration;
  let shouldFocusOnInvalidField;
  let submitting;
  channel = channel.channel;
  const onCancel = channel.onCancel;
  let dependencyMap;
  let closure_16;
  function handleCancelClose() {
    callback2();
    channel(11346).closeCreatePollModal();
    const AccessibilityAnnouncer = channel(3843).AccessibilityAnnouncer;
    const intl = channel(1212).intl;
    AccessibilityAnnouncer.announce(intl.string(channel(1212).t["+G3oRq"]));
  }
  let obj = { type: channel(480).ImpressionTypes.VIEW, name: channel(480).ImpressionNames.POLL_EDITOR_VIEWED };
  onCancel(8604)(obj);
  const items = [onCancel];
  const effect = answers.useEffect(() => () => {
    let current = outer1_2.current;
    if (!current) {
      current = null == outer1_1;
    }
    if (!current) {
      outer1_1();
    }
  }, items);
  const tmp4 = callback3();
  const insets = onCancel(5160)({ includeKeyboardHeight: true }).insets;
  dependencyMap = answers.useRef(false);
  const callback = answers.useCallback(() => {
    dependencyMap.current = true;
    let obj = channel(11346);
    obj.closeCreatePollModal();
    obj = { key: "POLL_CREATED_SUCCESS", IconComponent: channel(9689).PollsIcon };
    const intl = channel(1212).intl;
    obj.content = intl.string(channel(1212).t.OPsckI);
    onCancel(3831).open(obj);
  }, []);
  const callback1 = answers.useCallback((indexToRemove) => {
    const AccessibilityAnnouncer = channel(3843).AccessibilityAnnouncer;
    const intl = channel(1212).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1212).t.BByGU4, { number: indexToRemove.indexToRemove + 1 }));
  }, []);
  const tmp7 = onCancel(11351)(channel, callback, callback1);
  answers = tmp7.answers;
  ({ question: closure_4, allowMultiSelect } = tmp7);
  ({ setAllowMultiSelect: closure_6, canAddMoreAnswers, canRemoveMoreAnswers: closure_7, handleAnswerTextChange: closure_8, handleEmojiSelect: closure_9, handleAddAnswer } = tmp7);
  ({ handleRemoveAnswer: closure_11, handleRemoveAnswerImage: closure_12, fieldErrors } = tmp7);
  ({ createPollError, shouldFocusOnInvalidField } = tmp7);
  const setShouldFocusOnInvalidField = tmp7.setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration, submitting } = tmp7);
  let obj1 = channel(11356);
  closure_16 = obj1.useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  let obj2 = channel(5093);
  obj2.useNavigatorBackPressHandler(() => {
    let obj = channel(7002);
    if (obj.isPollCreationEmpty(closure_4, answers)) {
      callback2();
      const AccessibilityAnnouncer = channel(3843).AccessibilityAnnouncer;
      const intl = channel(1212).intl;
      AccessibilityAnnouncer.announce(intl.string(channel(1212).t["+G3oRq"]));
      let flag = false;
    } else {
      obj = { onConfirm: handleCancelClose };
      channel(4472).openAlert("poll-creation-unsaved-changes", outer1_9(shouldFocusOnInvalidField, obj));
      flag = true;
      const obj2 = channel(4472);
    }
    return flag;
  });
  obj = {
    onAddAnswer(arg0) {
      handleAddAnswer();
    }
  };
  let obj4 = onCancel(11357)(obj);
  const items1 = [fieldErrors, obj4, setShouldFocusOnInvalidField, shouldFocusOnInvalidField];
  const effect1 = answers.useEffect(() => {
    const keys = Object.keys(fieldErrors);
    if (keys.length > 0) {
      const intl = channel(1212).intl;
      const obj = { numOfErrors: keys.length };
      const AccessibilityAnnouncer = channel(3843).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(1212).t.w8e4qF, obj));
      if (shouldFocusOnInvalidField) {
        obj4.focus(keys[0]);
        setShouldFocusOnInvalidField(false);
      }
      const formatToPlainStringResult = intl.formatToPlainString(channel(1212).t.w8e4qF, obj);
    }
  }, items1);
  obj = { style: items2 };
  items2 = [tmp4.safeAreaContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj1 = {};
  obj2 = { style: tmp4.header };
  const obj3 = {};
  let intl = channel(1212).intl;
  obj3.accessibilityLabel = intl.string(channel(1212).t["ETE/oC"]);
  obj3.onPress = function onPress() {
    let obj = channel(7002);
    if (obj.isPollCreationEmpty(closure_4, answers)) {
      handleCancelClose();
    } else {
      obj = { onConfirm: handleCancelClose };
      channel(4472).openAlert("poll-creation-unsaved-changes", outer1_9(shouldFocusOnInvalidField, obj));
      const obj2 = channel(4472);
    }
  };
  obj3.source = onCancel(5120);
  obj3.style = tmp4.actionButton;
  const items3 = [callback(channel(5788).HeaderActionButton, obj3), , ];
  obj4 = { accessibilityRole: "header", variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", style: tmp4.title };
  const intl2 = channel(1212).intl;
  obj4.children = intl2.string(channel(1212).t.Flr51u);
  items3[1] = callback(channel(4126).Text, obj4);
  const obj5 = {};
  const intl3 = channel(1212).intl;
  obj5.text = intl3.string(channel(1212).t.JOj8Zk);
  const items4 = [, ];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp4);
  obj5.style = items4;
  obj5.disabled = submitting;
  obj5.onPress = handleSubmitPoll;
  items3[2] = callback(channel(5788).HeaderActionButton, obj5);
  obj2.children = items3;
  const items5 = [callback2(allowMultiSelect, obj2), , ];
  const obj6 = { style: tmp4.viewPadding, contentContainerStyle: tmp4.scrollContainer, keyboardShouldPersistTaps: "handled" };
  let tmp17Result = null != createPollError;
  if (tmp17Result) {
    const obj7 = {};
    let anyErrorMessage;
    if (null != createPollError) {
      anyErrorMessage = createPollError.getAnyErrorMessage();
    }
    obj7.children = anyErrorMessage;
    tmp17Result = callback(onCancel(11358), obj7);
    const tmp17 = callback;
    const tmp20 = onCancel(11358);
  }
  const items6 = [tmp17Result, , ];
  const obj8 = { ref: obj4.refWithKey("question"), onChange: handleQuestionChange, onSubmitEditing: obj4.focusNext };
  let question;
  if (null != fieldErrors) {
    question = fieldErrors.question;
  }
  obj8.error = question;
  items6[1] = callback(fieldErrors, obj8);
  const obj9 = { style: tmp4.answerInputsContainer };
  const obj10 = {};
  const intl4 = channel(1212).intl;
  obj10.text = intl4.string(channel(1212).t.oMBfeS);
  obj10.color = "text-subtle";
  obj10.style = tmp4.label;
  const items7 = [
    callback(channel(7636).FormLabel, obj10),
    answers.map((localCreationAnswerId, index) => {
      const obj = { inputRef: obj4.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId), answer: localCreationAnswerId, index, channelId: channel.id, onSubmitEditing: obj4.focusNext, onAnswerTextChange: closure_8, onAnswerEmojiSelect: closure_9, onRemoveAnswer: closure_11, onRemoveAnswerImage: closure_12, canRemoveAnswer: closure_7 };
      let tmp3;
      if (null != fieldErrors) {
        const _HermesInternal = HermesInternal;
        tmp3 = fieldErrors["answer-" + localCreationAnswerId.localCreationAnswerId];
      }
      obj.error = tmp3;
      return outer1_9(onCancel(11360), obj, localCreationAnswerId.localCreationAnswerId);
    }),

  ];
  if (canAddMoreAnswers) {
    const obj11 = { onPress: handleAddAnswer };
    canAddMoreAnswers = callback(setShouldFocusOnInvalidField, obj11);
  }
  items7[2] = canAddMoreAnswers;
  obj9.children = items7;
  items6[2] = callback2(allowMultiSelect, obj9);
  obj6.children = items6;
  items5[1] = callback2(closure_6, obj6);
  const obj12 = { style: tmp4.pollConfigSection };
  const items8 = [callback(closure_16, { selectedDuration: duration, onChange: setDuration }), ];
  const obj13 = {};
  const intl5 = channel(1212).intl;
  obj13.label = intl5.string(channel(1212).t["Ux+iQU"]);
  obj13.checked = allowMultiSelect;
  obj13.onPress = function onPress() {
    return callback(!allowMultiSelect);
  };
  items8[1] = callback(channel(9132).TableCheckboxRow, obj13);
  obj12.children = items8;
  items5[2] = callback2(allowMultiSelect, obj12);
  obj1.children = items5;
  obj.children = callback2(handleAddAnswer, obj1);
  return callback(allowMultiSelect, obj);
};
