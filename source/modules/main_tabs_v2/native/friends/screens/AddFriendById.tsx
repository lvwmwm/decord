// Module ID: 12862
// Function ID: 99938
// Name: getDefaultTextState
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 1212, 4126, 5773, 12863, 8927, 8923, 3830, 675, 3843, 7504, 4543, 2]

// Module 12862 (getDefaultTextState)
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function getDefaultTextState() {
  const obj = { validatedText: "" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.hint = intl.string(require(1212) /* getSystemLocale */.t["6p7Mhh"]);
  return obj;
}
function ErrorMessage(errorMessage) {
  const obj = { variant: "text-xs/medium", color: "text-feedback-critical" };
  const items = [, ];
  ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = callback2());
  obj.style = items;
  obj.children = errorMessage.errorMessage;
  return callback(require(4126) /* Text */.Text, obj);
}
({ View: closure_5, Keyboard: closure_6 } = get_ActivityIndicator);
({ PLACEHOLDER_TAG: closure_7, AnalyticEvents: closure_8 } = ME);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
let obj = {};
obj = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
obj.container = obj;
obj.textInputContainer = { alignSelf: "stretch" };
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
obj.placeholderText = _createForOfIteratorHelperLoose;
let obj2 = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
obj.inputAccessoryText = obj2;
obj.redesignInputAccessoryText = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.inputHeaderText = { marginTop: 0 };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.redesignGrow = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj4 = { flexGrow: 2, minHeight: require("_createForOfIteratorHelperLoose").space.PX_24 };
obj.errorStateText = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, marginVertical: 4 };
let obj5 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.RED_400, marginVertical: 4 };
obj.friendMessageContainer = { alignSelf: "stretch", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj6 = { alignSelf: "stretch", marginTop: require("_createForOfIteratorHelperLoose").space.PX_16 };
obj.messageLabel = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj7 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.messageFooterText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
let closure_12 = _createForOfIteratorHelperLoose.createStyles(obj);
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
    const intl = require(1212) /* getSystemLocale */.intl;
    headerText = intl.string(require(1212) /* getSystemLocale */.t.YegTF2).toUpperCase();
    const str = intl.string(require(1212) /* getSystemLocale */.t.YegTF2);
  }
  const tmp3 = callback2();
  let message;
  if (validationState.status === constants.ERROR) {
    if (validationState.field === constants2.DISCORD_TAG) {
      message = validationState.message;
    }
  }
  let obj = { style: tmp3.textInputContainer };
  obj = { style: null, variant: "text-sm/semibold", color: "text-muted" };
  const items = [, , ];
  ({ redesignInputAccessoryText: arr[0], inputHeaderText: arr[1] } = tmp3);
  items[2] = headerTextStyle.headerTextStyle;
  obj.style = items;
  obj.children = headerText;
  const items1 = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { ref, value: textState.validatedText };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl2.string(require(1212) /* getSystemLocale */.t.qRaqel);
  let a11yMessage;
  if (validationState.status === constants.ERROR) {
    a11yMessage = validationState.a11yMessage;
  }
  obj.accessibilityHint = a11yMessage;
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl3.string(require(1212) /* getSystemLocale */.t.qRaqel);
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
  items1[1] = callback(require(5773) /* TextField */.TextField, obj);
  let tmp10 = null;
  if (null != message) {
    const obj1 = { errorMessage: message };
    tmp10 = callback(ErrorMessage, obj1);
  }
  items1[2] = tmp10;
  obj.children = items1;
  return closure_10(closure_5, obj);
});
let obj8 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  let autoFocusInput;
  let headerText;
  let headerTextStyle;
  let onFocus;
  let sourcePage;
  let style;
  ({ headerTextStyle, sourcePage } = arg0);
  let first;
  let importAllResult;
  let closure_6;
  let first2;
  let closure_8;
  function handleSubmitEditing() {
    const trimmed = first.validatedText.trim();
    let substr = trimmed;
    const trimmed1 = first2.trim();
    if (trimmed.length <= 0) {
      let obj = { status: outer1_13.ERROR, field: outer1_14.DISCORD_TAG };
      let intl = sourcePage(1212).intl;
      obj.message = intl.string(sourcePage(1212).t.mxnceg);
      callback(obj);
    } else {
      let startsWithResult = !trimmed.includes("#");
      if (startsWithResult) {
        startsWithResult = trimmed.startsWith("@");
      }
      let tmp2 = trimmed;
      if (startsWithResult) {
        substr = trimmed.substring(1);
        tmp2 = substr;
      }
      obj = sourcePage(8927);
      const validateDiscordTagResult = obj.validateDiscordTag(tmp2);
      if (null != validateDiscordTagResult) {
        obj = { status: outer1_13.ERROR, field: outer1_14.DISCORD_TAG, message: validateDiscordTagResult };
        callback(obj);
      } else {
        const obj1 = { status: outer1_13.LOADING };
        callback(obj1);
        const obj2 = { discordTag: tmp2 };
        const obj3 = { location: "Search - Add Friend Search" };
        obj2.context = obj3;
        obj2.errorUxConfig = sourcePage(8923).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED;
        let tmp9;
        if (trimmed1.length > 0) {
          tmp9 = trimmed1;
        }
        obj2.note = tmp9;
        const obj5 = ref(8923);
        ref(8923).sendRequest(obj2).then(() => {
          outer1_4(outer2_16());
          outer1_8("");
          let obj = { status: outer2_13.SUCCESS };
          const intl = sourcePage(1212).intl;
          obj = { discordTag: substr };
          obj.message = intl.format(sourcePage(1212).t.Rtl1Ep, obj);
          outer1_6(obj);
          const result = sourcePage(3830).presentAddedFriendToast();
          closure_6.dismiss();
        }, (body) => {
          let note;
          if (null != body) {
            body = body.body;
            if (null != body) {
              note = body.note;
            }
          }
          if (null != note) {
            let obj = { status: outer2_13.ERROR, field: outer2_14.MESSAGE };
            const intl = sourcePage(1212).intl;
            obj.message = intl.string(sourcePage(1212).t.ckHwck);
            const intl2 = sourcePage(1212).intl;
            obj.a11yMessage = intl2.string(sourcePage(1212).t.ckHwck);
            outer1_6(obj);
          } else {
            obj = { status: outer2_13.ERROR, field: outer2_14.DISCORD_TAG };
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
            obj.message = sourcePage(8927).humanizeAbortCode(num2, substr);
            obj = sourcePage(8927);
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
            outer1_6(obj);
            const obj4 = sourcePage(8927);
            const tmp15 = outer1_6;
          }
        });
        const sendRequestResult = ref(8923).sendRequest(obj2);
      }
    }
  }
  ({ style, onFocus, autoFocusInput, headerText } = arg0);
  let tmp = callback2();
  const importDefault = importAllResult.useRef(0);
  const dependencyMap = importAllResult.useRef("");
  let tmp2 = first(importAllResult.useState(() => outer1_16()), 2);
  first = tmp2[0];
  importAllResult = tmp2[1];
  let obj = { status: constants.NONE };
  const tmp4 = first(importAllResult.useState(obj), 2);
  const first1 = tmp4[0];
  closure_6 = tmp4[1];
  const tmp6 = first(importAllResult.useState(""), 2);
  first2 = tmp6[0];
  closure_8 = tmp6[1];
  let obj1 = importDefault(12863);
  const enabled = obj1.useConfig({ location: "AddFriendbyId" }).enabled;
  const items = [first1];
  const items1 = [first1];
  const callback = importAllResult.useCallback((validatedText) => {
    if (validatedText.length <= 0) {
      let obj = outer1_16();
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
    let tmp7 = first1.status === outer1_13.ERROR;
    if (tmp7) {
      tmp7 = first1.field === outer1_14.DISCORD_TAG;
    }
    if (tmp7) {
      obj = { status: outer1_13.NONE };
      callback(obj);
    }
  }, items);
  const items2 = [sourcePage];
  const callback1 = importAllResult.useCallback((str) => {
    lib(str.replace(/\n/g, ""));
    let tmp2 = first1.status === outer1_13.ERROR;
    if (tmp2) {
      tmp2 = first1.field === outer1_14.MESSAGE;
    }
    if (tmp2) {
      const obj = { status: outer1_13.NONE };
      callback(obj);
    }
  }, items1);
  const effect = importAllResult.useEffect(() => {
    let obj = ref(675);
    obj = { friend_add_type: "Id", source_page: sourcePage };
    obj.track(lib.FRIEND_ADD_VIEWED, obj);
  }, items2);
  const items3 = [first1];
  const effect1 = importAllResult.useEffect(() => {
    let tmp = first1.status === outer1_13.ERROR;
    if (tmp) {
      tmp = null != first1.a11yMessage;
    }
    if (tmp) {
      const AccessibilityAnnouncer = sourcePage(3843).AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(first1.a11yMessage);
    }
  }, items3);
  obj = {};
  obj = { style: items4 };
  items4 = [tmp.container, style];
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
  const items5 = [callback(closure_15, obj1), ];
  if (!enabled) {
    items5[1] = enabled;
    obj.children = items5;
    const items6 = [tmp12(first1, obj), , ];
    let obj2 = { style: tmp.redesignGrow };
    items6[1] = callback(first1, obj2);
    let obj3 = { size: "lg" };
    const intl3 = sourcePage(1212).intl;
    obj3.text = intl3.string(sourcePage(1212).t["PMsq/b"]);
    obj3.disabled = str.trim().length <= 0;
    obj3.onPress = handleSubmitEditing;
    obj3.loading = first1.status === constants.LOADING;
    obj3.grow = false;
    items6[2] = callback(sourcePage(4543).Button, obj3);
    obj.children = items6;
    return tmp12(closure_11, obj);
  } else {
    let obj4 = { style: tmp.friendMessageContainer };
    let obj5 = { style: null, variant: "text-sm/semibold", color: "text-muted" };
    const items7 = [, , ];
    ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
    items7[2] = headerTextStyle;
    obj5.style = items7;
    let intl = sourcePage(1212).intl;
    obj5.children = intl.string(sourcePage(1212).t.Yi6Mpu);
    const items8 = [callback(sourcePage(4126).Text, obj5), , ];
    const obj6 = { returnKeyType: "done", submitBehavior: "submit", value: first2, maxLength: 120, onSubmitEditing: handleSubmitEditing, onChange: callback1 };
    let str2;
    if (first1.field === constants2.MESSAGE) {
      if (first1.status === constants.ERROR) {
        str2 = "error";
      }
    }
    obj6.status = str2;
    items8[1] = callback(sourcePage(7504).TextArea, obj6);
    if (first1.status !== constants.ERROR) {
      const obj7 = { style: tmp.messageFooterText, variant: "text-xs/medium", color: "text-muted" };
      let intl2 = sourcePage(1212).intl;
      obj7.children = intl2.string(sourcePage(1212).t.UtfQNw);
      let tmp28 = callback(sourcePage(4126).Text, obj7);
      items8[2] = tmp28;
      obj4.children = items8;
      tmp15(tmp16, obj4);
    }
    const obj8 = { errorMessage: first1.message };
    tmp28 = callback(ErrorMessage, obj8);
    tmp15 = closure_10;
    tmp16 = first1;
    const tmp20 = callback;
  }
});
let result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default forwardRefResult;
