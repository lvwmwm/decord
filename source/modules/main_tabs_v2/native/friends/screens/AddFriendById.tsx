// Module ID: 12748
// Function ID: 97782
// Name: getDefaultTextState
// Dependencies: []

// Module 12748 (getDefaultTextState)
function getDefaultTextState() {
  const obj = { validatedText: "" };
  const intl = arg1(dependencyMap[7]).intl;
  obj.hint = intl.string(arg1(dependencyMap[7]).t.6p7Mhh);
  return obj;
}
function ErrorMessage(children) {
  const style = [, ];
  ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = callback3());
  return callback2(arg1(dependencyMap[8]).Text, { style, children: children.errorMessage });
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
({ View: closure_5, Keyboard: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
({ PLACEHOLDER_TAG: closure_7, AnalyticEvents: closure_8 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = arg1(dependencyMap[4]));
let obj1 = arg1(dependencyMap[5]);
let obj = {};
obj = { 1387894524: "error", 2069394008: "experiments", -1806614943: "errorcode", -1594138003: "errortext", backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOWER };
obj.container = obj;
obj.textInputContainer = { alignSelf: "stretch" };
obj1 = { color: importDefault(dependencyMap[6]).colors.TEXT_MUTED };
obj.placeholderText = obj1;
const tmp4 = arg1(dependencyMap[4]);
obj.inputAccessoryText = { color: importDefault(dependencyMap[6]).colors.TEXT_SUBTLE };
const obj2 = { color: importDefault(dependencyMap[6]).colors.TEXT_SUBTLE };
obj.redesignInputAccessoryText = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.inputHeaderText = { marginTop: 0 };
const obj3 = { marginBottom: importDefault(dependencyMap[6]).space.PX_8 };
obj.redesignGrow = { flexGrow: 2, minHeight: importDefault(dependencyMap[6]).space.PX_24 };
const obj4 = { flexGrow: 2, minHeight: importDefault(dependencyMap[6]).space.PX_24 };
obj.errorStateText = { color: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400, marginVertical: 4 };
const obj5 = { color: importDefault(dependencyMap[6]).unsafe_rawColors.RED_400, marginVertical: 4 };
obj.friendMessageContainer = { alignSelf: "stretch", marginTop: importDefault(dependencyMap[6]).space.PX_16 };
const obj6 = { alignSelf: "stretch", marginTop: importDefault(dependencyMap[6]).space.PX_16 };
obj.messageLabel = { marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
const obj7 = { marginBottom: importDefault(dependencyMap[6]).space.PX_4 };
obj.messageFooterText = { marginTop: importDefault(dependencyMap[6]).space.PX_4 };
let closure_12 = obj1.createStyles(obj);
let closure_13 = { SUCCESS: 0, [0]: "SUCCESS", ERROR: 1, [1]: "ERROR", LOADING: 2, [2]: "LOADING", NONE: 3, [3]: "NONE" };
let closure_14 = { DISCORD_TAG: "DISCORD_TAG", MESSAGE: "MESSAGE" };
let closure_15 = importAllResult.forwardRef((headerTextStyle, ref) => {
  let autoFocus;
  let headerText;
  let onChangeText;
  let onFocus;
  let onKeyPress;
  let onSelectionChange;
  let onSubmitEditing;
  let textState;
  let validationState;
  ({ validationState, headerText } = headerTextStyle);
  ({ textState, onChangeText, onSelectionChange, onKeyPress, onSubmitEditing, onFocus, autoFocus } = headerTextStyle);
  if (headerText === undefined) {
    const intl = ref(dependencyMap[7]).intl;
    headerText = intl.string(ref(dependencyMap[7]).t.YegTF2).toUpperCase();
    const str = intl.string(ref(dependencyMap[7]).t.YegTF2);
  }
  const tmp3 = callback3();
  let message;
  if (validationState.status === constants.ERROR) {
    if (validationState.field === constants2.DISCORD_TAG) {
      message = validationState.message;
    }
  }
  let obj = { style: tmp3.textInputContainer };
  obj = { "Null": false, "Null": false, alignItems: false };
  const items = [, , ];
  ({ redesignInputAccessoryText: arr[0], inputHeaderText: arr[1] } = tmp3);
  items[2] = headerTextStyle.headerTextStyle;
  obj.style = items;
  obj.children = headerText;
  const items1 = [callback2(ref(dependencyMap[8]).Text, obj), , ];
  obj = { ref, value: textState.validatedText };
  const intl2 = ref(dependencyMap[7]).intl;
  obj.accessibilityLabel = intl2.string(ref(dependencyMap[7]).t.qRaqel);
  let a11yMessage;
  if (validationState.status === constants.ERROR) {
    a11yMessage = validationState.a11yMessage;
  }
  obj.accessibilityHint = a11yMessage;
  const intl3 = ref(dependencyMap[7]).intl;
  obj.placeholder = intl3.string(ref(dependencyMap[7]).t.qRaqel);
  obj.placeholderTextColor = tmp3.placeholderText.color;
  obj.onChange = onChangeText;
  obj.onSelectionChange = onSelectionChange;
  obj.onKeyPress = onKeyPress;
  obj.onSubmitEditing = onSubmitEditing;
  obj.autoCapitalize = "none";
  obj.returnKeyType = "send";
  obj.keyboardType = "twitter";
  obj.autoCorrect = false;
  obj.blurOnSubmit = true;
  obj.maxLength = 37;
  obj.autoFocus = autoFocus;
  obj.onFocus = onFocus;
  let str2;
  if (null != message) {
    str2 = "error";
  }
  obj.status = str2;
  items1[1] = callback2(ref(dependencyMap[9]).TextField, obj);
  let tmp10 = null;
  if (null != message) {
    const obj1 = { errorMessage: message };
    tmp10 = callback2(ErrorMessage, obj1);
  }
  items1[2] = tmp10;
  obj.children = items1;
  return closure_10(closure_5, obj);
});
const obj8 = { marginTop: importDefault(dependencyMap[6]).space.PX_4 };
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let autoFocusInput;
  let headerText;
  let headerTextStyle;
  let onFocus;
  let sourcePage;
  let style;
  ({ headerTextStyle, sourcePage } = arg0);
  ref = sourcePage;
  let callback;
  let React;
  let closure_6;
  let first2;
  let closure_8;
  function handleSubmitEditing() {
    const trimmed = first.validatedText.trim();
    let sourcePage = trimmed;
    const trimmed1 = first2.trim();
    if (trimmed.length <= 0) {
      let obj = { status: constants.ERROR, field: constants2.DISCORD_TAG };
      const intl = sourcePage(closure_2[7]).intl;
      obj.message = intl.string(sourcePage(closure_2[7]).t.mxnceg);
      callback(obj);
    } else {
      let startsWithResult = !trimmed.includes("#");
      if (startsWithResult) {
        startsWithResult = trimmed.startsWith("@");
      }
      let tmp2 = trimmed;
      if (startsWithResult) {
        const substr = trimmed.substring(1);
        sourcePage = substr;
        tmp2 = substr;
      }
      obj = sourcePage(closure_2[11]);
      const validateDiscordTagResult = obj.validateDiscordTag(tmp2);
      if (null != validateDiscordTagResult) {
        obj = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
        callback(obj);
      } else {
        const obj1 = { status: constants.LOADING };
        callback(obj1);
        const obj2 = { discordTag: tmp2 };
        const obj3 = { location: "Search - Add Friend Search" };
        obj2.context = obj3;
        obj2.errorUxConfig = sourcePage(closure_2[12]).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED;
        let tmp9;
        if (trimmed1.length > 0) {
          tmp9 = trimmed1;
        }
        obj2.note = tmp9;
        const obj5 = ref(closure_2[12]);
        ref(closure_2[12]).sendRequest(obj2).then(() => {
          callback(callback3());
          callback2("");
          let obj = { status: constants.SUCCESS };
          const intl = substr(closure_2[7]).intl;
          obj = { discordTag: substr };
          obj.message = intl.format(substr(closure_2[7]).t.Rtl1Ep, obj);
          lib(obj);
          const result = substr(closure_2[13]).presentAddedFriendToast();
          lib.dismiss();
        }, (body) => {
          let note;
          if (null != body) {
            body = body.body;
            if (null != body) {
              note = body.note;
            }
          }
          if (null != note) {
            let obj = { status: constants.ERROR, field: constants2.MESSAGE };
            const intl = substr(closure_2[7]).intl;
            obj.message = intl.string(substr(closure_2[7]).t.ckHwck);
            const intl2 = substr(closure_2[7]).intl;
            obj.a11yMessage = intl2.string(substr(closure_2[7]).t.ckHwck);
            lib(obj);
          } else {
            obj = { status: constants.ERROR, field: constants2.DISCORD_TAG };
            let code;
            if (null != body) {
              const body2 = body.body;
              if (null != body2) {
                code = body2.code;
              }
            }
            let num = -1;
            let num2 = -1;
            if (null != code) {
              num2 = code;
            }
            obj.message = substr(closure_2[11]).humanizeAbortCode(num2, substr);
            obj = substr(closure_2[11]);
            let code1;
            if (null != body) {
              const body3 = body.body;
              if (null != body3) {
                code1 = body3.code;
              }
            }
            if (null != code1) {
              num = code1;
            }
            obj.a11yMessage = obj.humanizeAbortCodeForA11y(num, substr);
            lib(obj);
            const obj4 = substr(closure_2[11]);
            const tmp15 = lib;
          }
        });
        const sendRequestResult = ref(closure_2[12]).sendRequest(obj2);
      }
    }
  }
  ({ style, onFocus, autoFocusInput, headerText } = arg0);
  const tmp = callback3();
  const importDefault = React.useRef(0);
  let closure_2 = React.useRef("");
  const tmp2 = callback(React.useState(() => callback2()), 2);
  const first = tmp2[0];
  callback = first;
  React = tmp2[1];
  let obj = { status: constants.NONE };
  const tmp4 = callback(React.useState(obj), 2);
  const first1 = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = callback(React.useState(""), 2);
  first2 = tmp6[0];
  closure_8 = tmp6[1];
  let obj1 = importDefault(closure_2[10]);
  const enabled = obj1.useConfig({ location: "AddFriendbyId" }).enabled;
  const items = [first1];
  const items1 = [first1];
  callback = React.useCallback((validatedText) => {
    if (validatedText.length <= 0) {
      let obj = callback2();
    } else {
      const arr = first(validatedText.split("#"), 2)[1];
      let str2 = "";
      if (null != arr) {
        let num3 = 0;
        if (null != arr) {
          num3 = arr.length + 1;
        }
        str2 = validatedText + first2.slice(num3);
      }
      obj = { validatedText, hint: str2 };
    }
    closure_4(obj);
    let tmp7 = first1.status === constants.ERROR;
    if (tmp7) {
      tmp7 = first1.field === constants2.DISCORD_TAG;
    }
    if (tmp7) {
      obj = { status: constants.NONE };
      callback(obj);
    }
  }, items);
  const items2 = [sourcePage];
  const callback1 = React.useCallback((str) => {
    lib(str.replace(/\n/g, ""));
    let tmp2 = first1.status === constants.ERROR;
    if (tmp2) {
      tmp2 = first1.field === constants2.MESSAGE;
    }
    if (tmp2) {
      const obj = { status: constants.NONE };
      callback(obj);
    }
  }, items1);
  const effect = React.useEffect(() => {
    let obj = ref(closure_2[14]);
    obj = { friend_add_type: "Id", source_page: sourcePage };
    obj.track(lib.FRIEND_ADD_VIEWED, obj);
  }, items2);
  const items3 = [first1];
  const effect1 = React.useEffect(() => {
    let tmp = first1.status === constants.ERROR;
    if (tmp) {
      tmp = null != first1.a11yMessage;
    }
    if (tmp) {
      const AccessibilityAnnouncer = sourcePage(closure_2[15]).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(first1.a11yMessage);
    }
  }, items3);
  obj = {};
  obj = { style: items4 };
  const items4 = [tmp.container, style];
  obj1 = {
    textState: first,
    onChangeText: callback,
    onSelectionChange(nativeEvent) {
      const start = nativeEvent.nativeEvent.selection.start;
      if (start !== ref.current) {
        ref.current = start;
      }
    },
    onKeyPress(nativeEvent) {
      closure_2.current = nativeEvent.nativeEvent.key;
    },
    onSubmitEditing: handleSubmitEditing,
    onFocus,
    validationState: first1,
    autoFocus: autoFocusInput,
    headerText,
    headerTextStyle,
    ref
  };
  const items5 = [callback2(closure_15, obj1), ];
  if (!enabled) {
    items5[1] = enabled;
    obj.children = items5;
    const items6 = [tmp12(first1, obj), , ];
    const obj2 = { style: tmp.redesignGrow };
    items6[1] = callback2(first1, obj2);
    const obj3 = { size: "lg" };
    const intl3 = ref(closure_2[7]).intl;
    obj3.text = intl3.string(ref(closure_2[7]).t.PMsq/b);
    obj3.disabled = str.trim().length <= 0;
    obj3.onPress = handleSubmitEditing;
    obj3.loading = first1.status === constants.LOADING;
    obj3.grow = false;
    items6[2] = callback2(ref(closure_2[17]).Button, obj3);
    obj.children = items6;
    return tmp12(closure_11, obj);
  } else {
    const obj4 = { style: tmp.friendMessageContainer };
    const obj5 = { "Null": false, "Null": false, alignItems: false };
    const items7 = [, , ];
    ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
    items7[2] = headerTextStyle;
    obj5.style = items7;
    const intl = ref(closure_2[7]).intl;
    obj5.children = intl.string(ref(closure_2[7]).t.Yi6Mpu);
    const items8 = [callback2(ref(closure_2[8]).Text, obj5), , ];
    const obj6 = { value: first2, onSubmitEditing: handleSubmitEditing, onChange: callback1 };
    let str2;
    if (first1.field === constants2.MESSAGE) {
      if (first1.status === constants.ERROR) {
        str2 = "error";
      }
    }
    obj6.status = str2;
    items8[1] = callback2(ref(closure_2[16]).TextArea, obj6);
    if (first1.status !== constants.ERROR) {
      const obj7 = { style: tmp.messageFooterText };
      const intl2 = ref(closure_2[7]).intl;
      obj7.children = intl2.string(ref(closure_2[7]).t.UtfQNw);
      let tmp28 = callback2(ref(closure_2[8]).Text, obj7);
      items8[2] = tmp28;
      obj4.children = items8;
      tmp15(tmp16, obj4);
    }
    const obj8 = { errorMessage: first1.message };
    tmp28 = callback2(ErrorMessage, obj8);
    const tmp15 = closure_10;
    const tmp16 = first1;
    const tmp20 = callback2;
  }
});
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default forwardRefResult;
