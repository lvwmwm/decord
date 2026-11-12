// Module ID: 12064
// Function ID: 12065
// Name: UserProfileWidgetGameCommentInput
// Dependencies: [32, 19, 502, 8413, 21, 8480, 7793, 12023, 1113, 7292, 2]
// Exports: default

// Module 12064 (UserProfileWidgetGameCommentInput)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import GameWidgetLimits from "GameWidgetLimits" /* 7292 */;
import TextArea2 from "TextArea" /* 7793 */;
import Constants from "Constants" /* 8413 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8480 */;
import WidgetUtils from "WidgetUtils" /* 12023 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import size from "module_2" /* 2 */;

let react = react_mod;
let closure_5 = Constants.TrackUserProfileEditActions;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameCommentInput.tsx");

export default function UserProfileWidgetGameCommentInput(arg0) {
  let closure_3;
  let comment;
  let first;
  let gameId;
  ({ widgetType: require, gameId: dependencyMap, comment } = arg0);
  let value;
  react = undefined;
  let closure_4;
  closure_5 = undefined;
  let obj = react;
  let str = comment;
  const useState = react.useState;
  if (comment == null) {
    str = "";
  }
  let tmp = value(useState(str), 2);
  value = tmp[0];
  react = tmp3;
  const tmp4 = value(obj.useState(comment), 2);
  const tmp6 = tmp4[1];
  closure_4 = tmp6;
  const first1 = tmp4[0];
  closure_5 = obj.useRef(null);
  if (comment !== first1) {
    tmp6(comment);
    if (comment == null) {
      comment = "";
    }
    tmp[1](comment);
  }
  const effect = obj.useEffect(() => {
    let id;
    let ref;
    return () => {
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
        const obj = { userId: id.getId(), action: ref.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
        const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
        UserProfileAnalyticsUtils;
        ({ widgetType: obj.widgetEdited, gameId: obj.gameId } = current);
        const result = trackUserProfileEditAction(obj);
      }
    };
  }, []);
  const TextArea = TextArea2.TextArea;
  const intl = intl3.intl;
  const intl2 = intl3.intl;
  return <TextArea value={value} onChange={function handleChange(currentValue) {
    const trimmed = currentValue.trim();
    let tmp2;
    if ("" !== trimmed) {
      tmp2 = trimmed;
    }
    closure_3(currentValue);
    closure_4(tmp2);
    if (null != closure_5.current) {
      closure_5.current.currentValue = currentValue;
    }
    const obj = WidgetUtils;
    const result = obj.updatePendingGameComment(require, dependencyMap, tmp2);
  }} onFocus={function handleFocus() {
    const obj = { widgetType: widgetEdited, gameId: dependencyMap, initialValue: currentValue, currentValue };
    closure_5.current = obj;
    const obj2 = UserProfileAnalyticsUtils;
    const obj3 = { userId: AuthenticationStore.getId(), action: closure_5.PRESS_ADD_COMMENTARY, widgetEdited };
    const result = obj2.trackUserProfileEditAction(obj3);
  }} onBlur={function handleBlur() {
    let currentValue;
    let initialValue;
    const current = closure_5.current;
    let tmp2 = null != current;
    const tmp = closure_5;
    if (tmp2) {
      ({ currentValue, initialValue } = current);
      const trimmed = currentValue.trim();
      tmp2 = trimmed !== initialValue.trim();
    }
    if (tmp2) {
      const obj = { userId: AuthenticationStore.getId(), action: closure_5.COMMENTARY_EDITED, widgetEdited: null, gameId: null };
      const trackUserProfileEditAction = UserProfileAnalyticsUtils.trackUserProfileEditAction;
      UserProfileAnalyticsUtils;
      ({ widgetType: obj.widgetEdited, gameId: obj.gameId } = current);
      const result = trackUserProfileEditAction(obj);
    }
    tmp.current = null;
  }} placeholder={intl.string(intl3.t.xKSfBT)} accessibilityLabel={intl2.string(intl3.t.JxKXeT)} maxLength={GameWidgetLimits.USER_WIDGET_GAME_COMMENT_MAX_LENGTH} />;
};
