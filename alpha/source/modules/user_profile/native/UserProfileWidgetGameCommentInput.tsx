// Module ID: 14589
// Function ID: 14590
// Name: UserProfileWidgetGameCommentInput
// Dependencies: [32, 19, 502, 6137, 21, 6382, 14590, 7440, 14570, 1112, 6173, 2]
// Exports: default

// Module 14589 (UserProfileWidgetGameCommentInput)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 6137 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 6382 */;
import WidgetUtils from "WidgetUtils" /* 14570 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_6 = Constants.TrackUserProfileEditActions;
let jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCommentInput.tsx");

export default function UserProfileWidgetGameCommentInput(arg0) {
  let _undefined;
  let c7;
  let c8;
  let closure_3;
  let closure_4;
  let comment;
  let first;
  let first1;
  let gameId;
  let ref2;
  let tmp3;
  let tmp6;
  let value;
  ({ widgetType: require, gameId: importDefault, comment } = arg0);
  value = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let ref;
  jsx = undefined;
  c8 = undefined;
  let obj = react;
  let str = comment;
  const useState = react.useState;
  if (comment == null) {
    str = "";
  }
  [value, tmp3] = useState(str);
  _slicedToArray = tmp3;
  [first1, tmp6] = obj.useState(comment);
  react = tmp6;
  obj.useRef(null);
  ref = obj.useRef(null);
  const context = obj.useContext(require("react"));
  ({ focusedInputRef: c7, onInputFocus: c8 } = context);
  if (comment !== first1) {
    tmp6(comment);
    if (comment == null) {
      comment = "";
    }
    tmp3(comment);
  }
  const effect = obj.useEffect(() => () => {
    let currentValue;
    let initialValue;
    const current = ref.current;
    let tmp = null != current;
    if (tmp) {
      ({ currentValue, initialValue } = current);
      const trimmed = currentValue.trim();
      tmp = trimmed !== initialValue.trim();
    }
    if (tmp) {
      const obj = { userId: ref.getId(), action: ref.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
      const trackUserProfileEditAction = require("UserProfileAnalyticsUtils").trackUserProfileEditAction;
      require("UserProfileAnalyticsUtils");
      ({ widgetType: obj.widgetEdited, gameId: obj.gameId } = current);
      const result = trackUserProfileEditAction(obj);
    }
  }, []);
  const TextArea = require("TextArea").TextArea;
  const intl = require("intl").intl;
  const intl2 = require("intl").intl;
  return <TextArea ref={ref} value={value} onChange={function handleChange(currentValue) {
    const trimmed = currentValue.trim();
    let tmp2;
    if ("" !== trimmed) {
      tmp2 = trimmed;
    }
    closure_3(currentValue);
    closure_4(tmp2);
    if (null != ref.current) {
      ref.current.currentValue = currentValue;
    }
    const obj = WidgetUtils;
    const result = obj.updatePendingGameComment(require, importDefault, tmp2);
  }} onFocus={function handleFocus() {
    c7.current = ref.current;
    _undefined();
    const obj = { widgetType: widgetEdited, gameId: importDefault, initialValue: currentValue, currentValue };
    closure_5.current = obj;
    const obj2 = UserProfileAnalyticsUtils;
    const obj3 = { userId: AuthenticationStore.getId(), action: ref2.PRESS_ADD_COMMENTARY, widgetEdited };
    const result = obj2.trackUserProfileEditAction(obj3);
  }} onBlur={function handleBlur() {
    let currentValue;
    let initialValue;
    const current = ref.current;
    let tmp2 = null != current;
    const tmp = ref;
    if (tmp2) {
      ({ currentValue, initialValue } = current);
      const trimmed = currentValue.trim();
      tmp2 = trimmed !== initialValue.trim();
    }
    if (tmp2) {
      const obj = { userId: AuthenticationStore.getId(), action: ref2.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
      const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
      UserProfileAnalyticsUtils;
      ({ widgetType: obj.widgetEdited, gameId: obj.gameId } = current);
      const result = trackUserProfileEditAction(obj);
    }
    tmp.current = null;
  }} placeholder={intl.string(require("intl").t.xKSfBT)} accessibilityLabel={intl2.string(require("intl").t.JxKXeT)} maxLength={require("GameWidgetLimits").USER_WIDGET_GAME_COMMENT_MAX_LENGTH} />;
};
