// Module ID: 11307
// Function ID: 87960
// Name: UnsavedChangesAlertModal
// Dependencies: []
// Exports: default

// Module 11307 (UnsavedChangesAlertModal)
function UnsavedChangesAlertModal(onConfirm) {
  let obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.title = intl.string(arg1(dependencyMap[8]).t.HMrgcp);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.content = intl2.string(arg1(dependencyMap[8]).t.Wxa/j8);
  obj = {};
  obj = {};
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.text = intl3.string(arg1(dependencyMap[8]).t.TzJA4g);
  obj.onPress = onConfirm.onConfirm;
  const items = [callback(arg1(dependencyMap[7]).AlertActionButton, obj, "confirm"), ];
  const obj1 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[8]).intl;
  obj1.text = intl4.string(arg1(dependencyMap[8]).t.2BR5R2);
  items[1] = callback(arg1(dependencyMap[7]).AlertActionButton, obj1, "back");
  obj.children = items;
  obj.actions = callback2(closure_10, obj);
  return callback(arg1(dependencyMap[7]).AlertModal, obj);
}
function AddAnswerButton(onPress) {
  const tmp = callback3();
  let obj = { source: importDefault(dependencyMap[11]), size: arg1(dependencyMap[10]).Icon.Sizes.LARGE, color: tmp.addAnswerIcon.color };
  obj = { onPress: onPress.onPress, style: tmp.addAnswerButtonDefault, accessibilityRole: "button" };
  const intl = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl.string(arg1(dependencyMap[8]).t.B2Uvme);
  const items = [callback(arg1(dependencyMap[10]).Icon, obj), ];
  obj = {};
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.children = intl2.string(arg1(dependencyMap[8]).t.B2Uvme);
  items[1] = callback(arg1(dependencyMap[12]).Text, obj);
  obj.children = items;
  return callback2(closure_4, obj);
}
function PollDurationSelectionRow(selectedDuration) {
  selectedDuration = selectedDuration.selectedDuration;
  const arg1 = selectedDuration;
  const importDefault = selectedDuration.onChange;
  const tmp = importDefault(dependencyMap[13])()[selectedDuration];
  const obj = {};
  const intl = arg1(dependencyMap[8]).intl;
  obj.label = intl.string(arg1(dependencyMap[8]).t.bGHzxb);
  const intl2 = arg1(dependencyMap[8]).intl;
  obj.accessibilityLabel = "" + intl2.string(arg1(dependencyMap[8]).t.bGHzxb) + " " + tmp;
  const intl3 = arg1(dependencyMap[8]).intl;
  obj.accessibilityHint = intl3.string(arg1(dependencyMap[8]).t.A4PJ1o);
  obj.onPress = function onPress() {
    let obj = selectedDuration(paths[18]);
    obj.dismissKeyboard();
    obj = { selectedDuration, onChange };
    onChange(paths[14]).openLazy(selectedDuration(paths[16])(paths[15], paths.paths), closure_8, obj);
  };
  obj.trailing = callback(arg1(dependencyMap[12]).Text, { children: tmp });
  obj.arrow = true;
  return callback(arg1(dependencyMap[17]).TableRow, obj);
}
const importAllResult = importAll(dependencyMap[0]);
({ TouchableOpacity: closure_4, View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[1]));
const tmp2 = arg1(dependencyMap[1]);
({ MAX_POLL_QUESTION_LENGTH: closure_7, POLL_CREATION_DURATION_ACTION_SHEET_KEY: closure_8 } = arg1(dependencyMap[2]));
const tmp3 = arg1(dependencyMap[2]);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = arg1(dependencyMap[3]));
let obj1 = arg1(dependencyMap[4]);
let obj = { viewPadding: { paddingHorizontal: 18 }, scrollContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, flex: 1 };
obj.safeAreaContainer = obj;
obj.header = {};
obj.actionButton = {};
obj.postButton = { justifyContent: "flex-end" };
obj.title = {};
obj.label = { fontSize: 14 };
obj.answerInputsContainer = {};
obj1 = {};
const tmp4 = arg1(dependencyMap[3]);
let num = 8;
if (obj6.isAndroid()) {
  num = 10;
}
obj1.paddingVertical = num;
obj1.backgroundColor = importDefault(dependencyMap[5]).colors.MESSAGE_BACKGROUND_HOVER;
obj1.borderRadius = importDefault(dependencyMap[5]).radii.lg;
obj.addAnswerButtonDefault = obj1;
const obj6 = arg1(dependencyMap[6]);
obj.addAnswerIcon = { color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
const obj2 = { color: importDefault(dependencyMap[5]).colors.TEXT_MUTED };
obj.pollConfigSection = { borderTopWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_12 = obj1.createStyles(obj);
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
  const intl = ref(dependencyMap[8]).intl;
  obj.label = intl.string(ref(dependencyMap[8]).t.WBiKnI);
  const intl2 = ref(dependencyMap[8]).intl;
  obj.accessibilityLabel = intl2.string(ref(dependencyMap[8]).t.WBiKnI);
  let formatToPlainStringResult;
  if (tmp) {
    const intl3 = ref(dependencyMap[8]).intl;
    obj = { errorMessage: error };
    formatToPlainStringResult = intl3.formatToPlainString(ref(dependencyMap[8]).t.jnq5Ho, obj);
  }
  obj.accessibilityHint = formatToPlainStringResult;
  const intl4 = ref(dependencyMap[8]).intl;
  obj.placeholder = intl4.string(ref(dependencyMap[8]).t./uQqJW);
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
  return closure_9(ref(dependencyMap[9]).TextInput, obj);
});
const obj3 = { borderTopWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.INTERACTIVE_BACKGROUND_HOVER };
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/polls/native/PollCreation.tsx");

export default function PollCreation(channel) {
  let allowMultiSelect;
  let canAddMoreAnswers;
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
  const arg1 = channel;
  const onCancel = channel.onCancel;
  const importDefault = onCancel;
  let closure_2;
  let closure_16;
  function handleCancelClose() {
    callback3();
    channel(closure_2[22]).closeCreatePollModal();
    const AccessibilityAnnouncer = channel(closure_2[25]).AccessibilityAnnouncer;
    const intl = channel(closure_2[8]).intl;
    AccessibilityAnnouncer.announce(intl.string(channel(closure_2[8]).t.+G3oRq));
  }
  let obj = { type: arg1(closure_2[20]).ImpressionTypes.VIEW, name: arg1(closure_2[20]).ImpressionNames.POLL_EDITOR_VIEWED };
  importDefault(closure_2[19])(obj);
  const items = [onCancel];
  const effect = importAllResult.useEffect(() => () => {
    let current = ref.current;
    if (!current) {
      current = null == callback;
    }
    if (!current) {
      callback();
    }
  }, items);
  const tmp4 = callback3();
  const insets = importDefault(closure_2[21])({ includeKeyboardHeight: true }).insets;
  closure_2 = importAllResult.useRef(false);
  const callback = importAllResult.useCallback(() => {
    closure_2.current = true;
    let obj = channel(closure_2[22]);
    obj.closeCreatePollModal();
    obj = { key: "POLL_CREATED_SUCCESS", IconComponent: channel(closure_2[24]).PollsIcon };
    const intl = channel(closure_2[8]).intl;
    obj.content = intl.string(channel(closure_2[8]).t.OPsckI);
    onCancel(closure_2[23]).open(obj);
  }, []);
  const callback1 = importAllResult.useCallback((indexToRemove) => {
    const AccessibilityAnnouncer = channel(closure_2[25]).AccessibilityAnnouncer;
    const intl = channel(closure_2[8]).intl;
    AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(closure_2[8]).t.BByGU4, { number: indexToRemove.indexToRemove + 1 }));
  }, []);
  const tmp7 = importDefault(closure_2[26])(channel, callback, callback1);
  const answers = tmp7.answers;
  ({ question: closure_4, allowMultiSelect } = tmp7);
  ({ setAllowMultiSelect: closure_6, canAddMoreAnswers, canRemoveMoreAnswers: closure_7, handleAnswerTextChange: closure_8, handleEmojiSelect: closure_9, handleAddAnswer } = tmp7);
  ({ handleRemoveAnswer: closure_11, handleRemoveAnswerImage: closure_12, fieldErrors } = tmp7);
  let closure_13 = fieldErrors;
  ({ createPollError, shouldFocusOnInvalidField } = tmp7);
  const UnsavedChangesAlertModal = shouldFocusOnInvalidField;
  const setShouldFocusOnInvalidField = tmp7.setShouldFocusOnInvalidField;
  const AddAnswerButton = setShouldFocusOnInvalidField;
  ({ handleQuestionChange, handleSubmitPoll, duration, setDuration, submitting } = tmp7);
  let obj1 = arg1(closure_2[27]);
  closure_16 = obj1.useTrackPollCreationEvents(answers, allowMultiSelect).trackPollCreationCancelled;
  let obj2 = arg1(closure_2[28]);
  obj2.useNavigatorBackPressHandler(() => {
    let obj = channel(closure_2[29]);
    if (obj.isPollCreationEmpty(closure_4, answers)) {
      callback3();
      const AccessibilityAnnouncer = channel(closure_2[25]).AccessibilityAnnouncer;
      const intl = channel(closure_2[8]).intl;
      AccessibilityAnnouncer.announce(intl.string(channel(closure_2[8]).t.+G3oRq));
      let flag = false;
    } else {
      obj = { onConfirm: handleCancelClose };
      channel(closure_2[30]).openAlert("poll-creation-unsaved-changes", callback2(shouldFocusOnInvalidField, obj));
      flag = true;
      const obj2 = channel(closure_2[30]);
    }
    return flag;
  });
  obj = {
    onAddAnswer() {
      handleAddAnswer();
    }
  };
  let obj4 = importDefault(closure_2[31])(obj);
  const items1 = [fieldErrors, obj4, setShouldFocusOnInvalidField, shouldFocusOnInvalidField];
  const effect1 = importAllResult.useEffect(() => {
    const keys = Object.keys(fieldErrors);
    if (keys.length > 0) {
      const intl = channel(closure_2[8]).intl;
      const obj = { numOfErrors: keys.length };
      const AccessibilityAnnouncer = channel(closure_2[25]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(intl.formatToPlainString(channel(closure_2[8]).t.w8e4qF, obj));
      if (shouldFocusOnInvalidField) {
        obj4.focus(keys[0]);
        setShouldFocusOnInvalidField(false);
      }
      const formatToPlainStringResult = intl.formatToPlainString(channel(closure_2[8]).t.w8e4qF, obj);
    }
  }, items1);
  obj = { style: items2 };
  const items2 = [tmp4.safeAreaContainer, { paddingTop: insets.top, paddingBottom: insets.bottom }];
  obj1 = {};
  obj2 = { style: tmp4.header };
  const obj3 = {};
  const intl = arg1(closure_2[8]).intl;
  obj3.accessibilityLabel = intl.string(arg1(closure_2[8]).t.ETE/oC);
  obj3.onPress = function onPress() {
    let obj = channel(closure_2[29]);
    if (obj.isPollCreationEmpty(closure_4, answers)) {
      handleCancelClose();
    } else {
      obj = { onConfirm: handleCancelClose };
      channel(closure_2[30]).openAlert("poll-creation-unsaved-changes", callback2(shouldFocusOnInvalidField, obj));
      const obj2 = channel(closure_2[30]);
    }
  };
  obj3.source = importDefault(closure_2[33]);
  obj3.style = tmp4.actionButton;
  const items3 = [callback(arg1(closure_2[32]).HeaderActionButton, obj3), , ];
  obj4 = { alignItems: "cry", justifyContent: "cry", backgroundColor: "cry", style: tmp4.title };
  const intl2 = arg1(closure_2[8]).intl;
  obj4.children = intl2.string(arg1(closure_2[8]).t.Flr51u);
  items3[1] = callback(arg1(closure_2[12]).Text, obj4);
  const obj5 = {};
  const intl3 = arg1(closure_2[8]).intl;
  obj5.text = intl3.string(arg1(closure_2[8]).t.JOj8Zk);
  const items4 = [, ];
  ({ actionButton: arr6[0], postButton: arr6[1] } = tmp4);
  obj5.style = items4;
  obj5.disabled = submitting;
  obj5.onPress = handleSubmitPoll;
  items3[2] = callback(arg1(closure_2[32]).HeaderActionButton, obj5);
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
    tmp17Result = callback(importDefault(closure_2[34]), obj7);
    const tmp17 = callback;
    const tmp20 = importDefault(closure_2[34]);
  }
  const items6 = [tmp17Result, , ];
  const obj8 = { ref: obj4.refWithKey("question"), onChange: handleQuestionChange, onSubmitEditing: obj4.focusNext };
  let question;
  if (null != fieldErrors) {
    question = fieldErrors.question;
  }
  obj8.error = question;
  items6[1] = callback(closure_13, obj8);
  const obj9 = { style: tmp4.answerInputsContainer };
  const obj10 = {};
  const intl4 = arg1(closure_2[8]).intl;
  obj10.text = intl4.string(arg1(closure_2[8]).t.oMBfeS);
  obj10.color = "text-subtle";
  obj10.style = tmp4.label;
  const items7 = [
    callback(arg1(closure_2[35]).FormLabel, obj10),
    answers.map((localCreationAnswerId, index) => {
      const obj = { inputRef: obj4.refWithKey("answer-" + localCreationAnswerId.localCreationAnswerId), answer: localCreationAnswerId, index, channelId: channel.id, onSubmitEditing: obj4.focusNext, onAnswerTextChange: closure_8, onAnswerEmojiSelect: closure_9, onRemoveAnswer: closure_11, onRemoveAnswerImage: closure_12, canRemoveAnswer: closure_7 };
      let tmp3;
      if (null != fieldErrors) {
        const _HermesInternal = HermesInternal;
        tmp3 = fieldErrors["answer-" + localCreationAnswerId.localCreationAnswerId];
      }
      obj.error = tmp3;
      return closure_9(onCancel(closure_2[36]), obj, localCreationAnswerId.localCreationAnswerId);
    }),

  ];
  if (canAddMoreAnswers) {
    const obj11 = { onPress: handleAddAnswer };
    canAddMoreAnswers = callback(AddAnswerButton, obj11);
  }
  items7[2] = canAddMoreAnswers;
  obj9.children = items7;
  items6[2] = callback2(allowMultiSelect, obj9);
  obj6.children = items6;
  items5[1] = callback2(closure_6, obj6);
  const obj12 = { style: tmp4.pollConfigSection };
  const items8 = [callback(closure_16, { selectedDuration: duration, onChange: setDuration }), ];
  const obj13 = {};
  const intl5 = arg1(closure_2[8]).intl;
  obj13.label = intl5.string(arg1(closure_2[8]).t.Ux+iQU);
  obj13.checked = allowMultiSelect;
  obj13.onPress = function onPress() {
    return callback(!allowMultiSelect);
  };
  items8[1] = callback(arg1(closure_2[37]).TableCheckboxRow, obj13);
  obj12.children = items8;
  items5[2] = callback2(allowMultiSelect, obj12);
  obj1.children = items5;
  obj.children = callback2(handleAddAnswer, obj1);
  return callback(allowMultiSelect, obj);
};
