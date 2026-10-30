// Module ID: 15634
// Function ID: 15635
// Name: AddFriendById
// Dependencies: [32, 19, 17, 1072, 21, 5009, 575, 1114, 5619, 7083, 7487, 7482, 5706, 1253, 5018, 7247, 5629, 2]
// Exports: default

// Module 15634 (AddFriendById)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5018 */;
import Text_Text from "Text/Text" /* 5619 */;
import ToastUtils from "ToastUtils" /* 5706 */;
import TextField2 from "TextField" /* 7083 */;
import FriendsUtils from "FriendsUtils" /* 7487 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let unpackModuleId;
function ErrorMessage(errorMessage) {
  let items;
  errorMessage = errorMessage.errorMessage;
  const obj = { variant: "text-xs/medium", color: "text-feedback-critical", style: items, children: errorMessage };
  items = [, ];
  ({ inputAccessoryText: arr[0], errorStateText: arr[1] } = closure_12());
  closure_12();
  return React4(Text_Text.Text, obj);
}
let react = react_mod;
({ View: hasOwnProperty, Keyboard: metroRequire } = react_native);
({ PLACEHOLDER_TAG: metroImportDefault, AnalyticEvents: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, textInputContainer: { alignSelf: "stretch" }, placeholderText: obj3, inputAccessoryText: obj4, redesignInputAccessoryText: obj5, inputHeaderText: { marginTop: 0 }, redesignGrow: obj6, errorStateText: obj7, friendMessageContainer: obj8, messageLabel: obj9, messageFooterText: obj10 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER, alignItems: "center", justifyContent: "center", paddingHorizontal: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_MUTED };
obj4 = { fontSize: 12, lineHeight: 16, marginVertical: 8, color: nativeDefault.colors.TEXT_SUBTLE };
obj5 = { marginBottom: nativeDefault.space.PX_8 };
obj6 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj7 = { color: nativeDefault.unsafe_rawColors.RED_400, marginVertical: 4 };
obj8 = { alignSelf: "stretch", marginTop: nativeDefault.space.PX_16 };
obj9 = { marginBottom: nativeDefault.space.PX_4 };
obj10 = { marginTop: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj);
const constants2 = { SUCCESS: 0, [0]: "SUCCESS", ERROR: 1, [1]: "ERROR", LOADING: 2, [2]: "LOADING", NONE: 3, [3]: "NONE" };
const constants3 = { DISCORD_TAG: "DISCORD_TAG", MESSAGE: "MESSAGE" };
function AddFriendByIdInput(arg0) {
  let a11yMessage;
  let autoFocus;
  let headerText;
  let headerTextStyle;
  let intl2;
  let intl3;
  let items;
  let items1;
  let onChangeText;
  let onFocus;
  let onKeyPress;
  let onSelectionChange;
  let onSubmitEditing;
  let ref;
  let str2;
  let textState;
  let validationState;
  ({ validationState, headerText } = arg0);
  ({ textState, onChangeText, onSelectionChange, onKeyPress, onSubmitEditing, onFocus, autoFocus } = arg0);
  if (headerText === undefined) {
    const intl = intl4.intl;
    const str = intl.string(intl4.t.YegTF2);
    headerText = str.toUpperCase();
  }
  ({ headerTextStyle, ref } = arg0);
  const tmp3 = closure_12();
  let message;
  const tmp4 = constants2;
  if (validationState.status === constants2.ERROR) {
    if (validationState.field === constants3.DISCORD_TAG) {
      message = validationState.message;
    }
  }
  const obj2 = { style: items, variant: "text-sm/semibold", color: "text-muted", children: headerText };
  items = [, , ];
  const obj = { style: tmp3.textInputContainer, children: items1 };
  ({ redesignInputAccessoryText: arr[0], inputHeaderText: arr[1] } = tmp3);
  items[2] = headerTextStyle;
  items1 = [React4(Text_Text.Text, obj2), , ];
  const obj3 = { ref, value: textState.validatedText, accessibilityLabel: intl2.string(intl4.t.qRaqel), accessibilityHint: a11yMessage, placeholder: intl3.string(intl4.t.qRaqel), placeholderTextColor: tmp3.placeholderText.color, onChange: onChangeText, onSelectionChange, onKeyPress, onSubmitEditing, autoCapitalize: "none", returnKeyType: "send", keyboardType: "twitter", autoCorrect: false, blurOnSubmit: true, maxLength: 37, autoFocus, onFocus, status: str2 };
  const TextField = TextField2.TextField;
  intl2 = intl4.intl;
  a11yMessage = undefined;
  const tmp7 = authStore;
  const tmp8 = hasOwnProperty;
  if (validationState.status === tmp4.ERROR) {
    a11yMessage = validationState.a11yMessage;
  }
  intl3 = tmp10(1114).intl;
  str2 = undefined;
  if (null != message) {
    str2 = "error";
  }
  items1[1] = React4(TextField, obj3);
  let tmp9Result = null;
  if (null != message) {
    const obj4 = { errorMessage: message };
    tmp9Result = tmp9(ErrorMessage, obj4);
  }
  items1[2] = tmp9Result;
  return tmp7(tmp8, obj);
}
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/friends/screens/AddFriendById.tsx");

export default function _default(arg0) {
  let autoFocusInput;
  let closure_2;
  let closure_4;
  let headerText;
  let headerTextStyle;
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items6;
  let items8;
  let onFocus;
  let ref;
  let sourcePage;
  let str2;
  let style;
  ({ headerTextStyle, sourcePage } = arg0);
  let textState;
  react = undefined;
  function handleSubmitEditing() {
    let intl;
    let tmp9;
    const str = first.validatedText;
    let trimmed = str.trim();
    const trimmed1 = first2.trim();
    if (trimmed.length <= 0) {
      let obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: intl.string(sourcePage(closure_2[7]).t.mxnceg) };
      intl = sourcePage(closure_2[7]).intl;
      const tmp22 = closure_6(obj2);
    } else {
      const hasItem = trimmed.includes("#");
      let tmp2 = trimmed;
      const startsWithResult = !hasItem && trimmed.startsWith("@");
      if (startsWithResult) {
        let num = 1;
        const substr = trimmed.substring(1);
        trimmed = substr;
        tmp2 = substr;
      }
      let obj = sourcePage(closure_2[10]);
      const validateDiscordTagResult = obj.validateDiscordTag(tmp2);
      if (null != validateDiscordTagResult) {
        let obj3 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: validateDiscordTagResult };
        closure_6(obj3);
      } else {
        let obj4 = { status: constants.LOADING };
        closure_6(obj4);
        const obj5 = { discordTag: tmp2, context: { location: "Search - Add Friend Search" }, errorUxConfig: sourcePage(closure_2[11]).RelationshipErrorUXConfig.SHOW_ONLY_IF_ACTION_NEEDED, note: tmp9 };
        const sendRequest = ref(closure_2[11]).sendRequest;
        ref(closure_2[11]);
        tmp9 = undefined;
        if (trimmed1.length > 0) {
          tmp9 = trimmed1;
        }
        const sendRequestResult = sendRequest(obj5);
        sendRequestResult.then(() => {
          let intl;
          let intl2;
          let obj3;
          const obj = { validatedText: "", hint: intl.string(intl4.t["6p7Mhh"]) };
          intl = intl4.intl;
          closure_4(obj);
          closure_8("");
          const obj2 = { status: constants.SUCCESS, message: intl2.format(intl4.t.Rtl1Ep, obj3) };
          intl2 = intl4.intl;
          obj3 = { discordTag: trimmed };
          metroRequire(obj2);
          const obj4 = ToastUtils;
          const result = obj4.presentAddedFriendToast();
          metroRequire.dismiss();
        }, (body) => {
          let humanizeAbortCode;
          let humanizeAbortCodeForA11y;
          let intl;
          let intl2;
          let num;
          let num2;
          let obj2;
          let tmp3;
          let note;
          const tmp = closure_6;
          if (body != null) {
            body = body.body;
            if (body != null) {
              note = body.note;
            }
          }
          if (null != note) {
            const obj = { status: constants.ERROR, field: constants2.MESSAGE, message: intl.string(intl4.t.ckHwck), a11yMessage: intl2.string(intl4.t.ckHwck) };
            intl = intl4.intl;
            intl2 = intl4.intl;
            obj2 = obj;
          } else {
            obj2 = { status: constants.ERROR, field: constants2.DISCORD_TAG, message: humanizeAbortCode(num, trimmed), a11yMessage: humanizeAbortCodeForA11y(num2, tmp3) };
            num = undefined;
            humanizeAbortCode = FriendsUtils.humanizeAbortCode;
            FriendsUtils;
            if (body != null) {
              const body2 = body.body;
              if (body2 != null) {
                num = body2.code;
              }
            }
            if (num == null) {
              num = -1;
            }
            num2 = undefined;
            humanizeAbortCodeForA11y = FriendsUtils.humanizeAbortCodeForA11y;
            FriendsUtils;
            tmp3 = trimmed;
            if (body != null) {
              const body3 = body.body;
              if (body3 != null) {
                num2 = body3.code;
              }
            }
            if (num2 == null) {
              num2 = -1;
            }
          }
          tmp(obj2);
        });
      }
    }
  }
  ({ style, onFocus, autoFocusInput, headerText, ref } = arg0);
  let tmp = closure_12();
  ref = react.useRef(0);
  dependencyMap = react.useRef("");
  let tmp2 = textState(react.useState(() => {
    let intl;
    const obj = { validatedText: "", hint: intl.string(sourcePage(closure_2[7]).t["6p7Mhh"]) };
    intl = sourcePage(closure_2[7]).intl;
    return obj;
  }), 2);
  textState = tmp2[0];
  react = tmp2[1];
  let obj = { status: constants2.NONE };
  const tmp4 = constants2;
  const tmp5 = textState(react.useState(obj), 2);
  const first1 = tmp5[0];
  let closure_6 = tmp5[1];
  const tmp7 = textState(react.useState(""), 2);
  const first2 = tmp7[0];
  let closure_8 = tmp7[1];
  const items = [first1];
  const items1 = [first1];
  const callback = react.useCallback((validatedText) => {
    let intl;
    let obj;
    const tmp = closure_4;
    if (validatedText.length <= 0) {
      const obj2 = { validatedText: "", hint: intl.string(intl4.t["6p7Mhh"]) };
      intl = intl4.intl;
      obj = obj2;
    } else {
      const arr = _slicedToArray(validatedText.split("#"), 2)[1];
      let str2 = "";
      if (null != arr) {
        let num2 = 0;
        metroImportDefault = metroImportDefault.slice;
        if (null != arr) {
          num2 = arr.length + 1;
        }
        str2 = validatedText + metroImportDefault(num2);
      }
      obj = { validatedText, hint: str2 };
    }
    tmp(obj);
    let tmp9 = first1.status === constants.ERROR;
    const tmp8 = constants;
    if (tmp9) {
      tmp9 = first1.field === constants2.DISCORD_TAG;
    }
    if (tmp9) {
      const obj3 = { status: tmp8.NONE };
      closure_6(obj3);
    }
  }, items);
  const items2 = [sourcePage];
  const callback1 = react.useCallback((str) => {
    closure_8(str.replace(/\n/g, ""));
    let tmp3 = first1.status === constants.ERROR;
    const tmp2 = constants;
    if (tmp3) {
      tmp3 = first1.field === constants2.MESSAGE;
    }
    if (tmp3) {
      const obj = { status: tmp2.NONE };
      closure_6(obj);
    }
  }, items1);
  const effect = react.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { friend_add_type: "Id", source_page: sourcePage };
    obj.track(metroImportAll.FRIEND_ADD_VIEWED, obj2);
  }, items2);
  const items3 = [first1];
  const effect1 = react.useEffect(() => {
    const tmp2 = first1.status === constants.ERROR && null != tmp.a11yMessage;
    if (tmp2) {
      const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
      AccessibilityAnnouncer.announce(first1.a11yMessage);
    }
  }, items3);
  let str = textState.validatedText;
  const tmp13 = closure_10;
  const tmp15 = first1;
  let obj2 = { style: items4, children: null };
  items4 = [tmp.container, style];
  const tmp16 = closure_9;
  let obj3 = {
    textState,
    onChangeText: callback,
    onSelectionChange: function handleSelectionChange(nativeEvent) {
      const start = nativeEvent.nativeEvent.selection.start;
      if (start !== ref.current) {
        ref.current = start;
      }
    },
    onKeyPress: function handleOnKeyPress(nativeEvent) {
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
  const tmp14 = closure_11;
  const items5 = [, ];
  const length = str.trim().length;
  items5[0] = closure_9(AddFriendByIdInput, obj3);
  let obj4 = { style: tmp.friendMessageContainer, children: null };
  let obj5 = { style: items6, variant: "text-sm/semibold", color: "text-muted", children: intl.string(sourcePage(1114).t.Yi6Mpu) };
  items6 = [, , ];
  ({ messageLabel: arr7[0], inputHeaderText: arr7[1] } = tmp);
  items6[2] = headerTextStyle;
  const Text = sourcePage(5619).Text;
  intl = sourcePage(1114).intl;
  const items7 = [closure_9(Text, obj5), , ];
  const obj6 = { returnKeyType: "done", submitBehavior: "submit", value: first2, maxLength: 120, onSubmitEditing: handleSubmitEditing, onChange: callback1, status: str2 };
  str2 = undefined;
  const TextArea = sourcePage(7247).TextArea;
  const tmp19 = constants3;
  if (first1.field === constants3.MESSAGE) {
    if (first1.status === tmp4.ERROR) {
      str2 = "error";
    }
  }
  items7[1] = tmp16(TextArea, obj6);
  if (first1.status === tmp4.ERROR) {
    let tmp16Result;
    if (first1.field === tmp19.MESSAGE) {
      const obj7 = { errorMessage: first1.message };
      tmp16Result = tmp16(ErrorMessage, obj7);
    }
    const obj8 = { children: items8 };
    items7[2] = tmp16Result;
    obj4.children = items7;
    items5[1] = tmp13(tmp15, obj4);
    obj2.children = items5;
    items8 = [tmp13(tmp15, obj2), , ];
    const obj9 = { style: tmp.redesignGrow };
    items8[1] = tmp16(tmp15, obj9);
    const obj10 = { size: "lg", text: intl3.string(sourcePage(1114).t["PMsq/b"]), disabled: length <= 0, onPress: handleSubmitEditing, loading: first1.status === tmp4.LOADING, grow: false };
    const Button = tmp17(5629).Button;
    intl3 = tmp17(1114).intl;
    items8[2] = tmp16(Button, obj10);
    return tmp13(tmp14, obj8);
  }
  const obj11 = { style: tmp.messageFooterText, variant: "text-xs/medium", color: "text-muted", children: intl2.string(sourcePage(1114).t.UtfQNw) };
  const Text2 = tmp17(5619).Text;
  intl2 = tmp17(1114).intl;
  tmp16Result = tmp16(Text2, obj11);
};
