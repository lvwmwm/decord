// Module ID: 17275
// Function ID: 17276
// Name: CustomTypingIndicatorProfileCoachmark
// Dependencies: [19, 17, 1085, 2060, 21, 5090, 587, 558, 576, 1126, 3829, 6841, 6865, 7084, 9375, 11666, 11667, 11665, 1397, 2]

// Module 17275 (CustomTypingIndicatorProfileCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl4 from "intl" /* 1126 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2060 */;
import _modDef3829 from "module_3829" /* 3829 */;
import openUserSettings from "openUserSettings" /* 7084 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 11665 */;
import _modDef11666 from "module_11666" /* 11666 */;
import _modDef11667 from "module_11667" /* 11667 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const user = tmp(1397);
let react = react_mod;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { coachmarkImageContainer: obj2, typingText: { maxWidth: 100 } };
obj2 = { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function CustomTypingIndicatorProfileCoachmark(position) {
  let analyticsLocations;
  let first;
  let markAsDismissed;
  let tmp14;
  let tmp15;
  let tmp7;
  let visible;
  let obj = markAsDismissed(576);
  const cResult = obj.c(15);
  ({ visible, markAsDismissed } = position);
  position = position.position;
  let str = "bottom";
  if (undefined !== position) {
    str = position;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(analyticsLocations(3829).Eq5jIA);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(analyticsLocations(3829).lSBp2M);
    cResult[1] = stringResult1;
    tmp7 = stringResult1;
  } else {
    tmp7 = cResult[1];
  }
  const tmp10 = analyticsLocations;
  const tmp11 = analyticsLocations(6841);
  analyticsLocations = tmp11(analyticsLocations(6865).CUSTOM_TYPING_INDICATOR_PROFILE_COACHMARK).analyticsLocations;
  if (cResult[2] !== markAsDismissed) {
    class P {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    cResult[2] = markAsDismissed;
    cResult[3] = P;
  } else {
    class P {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if ("top" === str) {
    class P {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    const intl3 = tmp(1126).intl;
    const stringResult2 = intl3.string(tmp10(3829)["6NP6ic"]);
    cResult[4] = tmp16;
    cResult[5] = stringResult2;
    tmp15 = stringResult2;
    tmp14 = tmp16;
  } else {
    class P {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    tmp15 = cResult[5];
  }
  if (cResult[6] === analyticsLocations) {
    class P {
      constructor() {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }
    if (cResult[9] === tmp12) {
      class P {
        constructor() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    let obj2 = { title: first, description: tmp7, visible, position: str, offsetY: tmp13, onDismiss: tmp12, renderImgComponent: tmp14, buttonLabel: tmp15, buttonVariant: "primary", onButtonPress: tmp18 };
    cResult[9] = tmp12;
    cResult[10] = str;
    cResult[11] = tmp13;
    cResult[12] = tmp18;
    cResult[13] = visible;
    cResult[14] = obj2;
  }
  const fn = function x() {
    let obj3;
    const obj2 = { screen: UserSettingsSections.TYPING_INDICATOR, params: obj3 };
    obj3 = { analyticsLocations };
    const obj = openUserSettings;
    obj.openUserSettings(obj2, () => {
      markAsDismissed(constants.TAKE_ACTION);
    });
  };
  cResult[6] = analyticsLocations;
  cResult[7] = markAsDismissed;
  cResult[8] = fn;
}) : (function CustomTypingIndicatorProfileCoachmark(visible) {
  let title;
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  let str = visible.position;
  const targetRef = visible.targetRef;
  if (str === undefined) {
    str = "bottom";
  }
  let intl = visible(str[9]).intl;
  const stringResult = intl.string(markAsDismissed(str[10]).Eq5jIA);
  react = stringResult;
  const intl2 = visible(str[9]).intl;
  const stringResult1 = intl2.string(markAsDismissed(str[10]).lSBp2M);
  const tmp3 = markAsDismissed(str[11]);
  const analyticsLocations = tmp3(markAsDismissed(str[12]).CUSTOM_TYPING_INDICATOR_PROFILE_COACHMARK).analyticsLocations;
  const items = [markAsDismissed];
  const onDismiss = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [stringResult, stringResult1, visible, str, onDismiss, markAsDismissed, analyticsLocations];
  const memo = react.useMemo(() => {
    let PX_12;
    let intl;
    let obj = {
      title,
      description: stringResult1,
      visible,
      position: str,
      offsetY: PX_12,
      onDismiss,
      renderImgComponent() {
        return closure_1_7(closure_1_9, {});
      },
      buttonLabel: intl.string(_modDef3829["6NP6ic"]),
      buttonVariant: "primary",
      onButtonPress() {
        let obj3;
        const obj2 = { screen: analyticsLocations.TYPING_INDICATOR, params: obj3 };
        obj3 = { analyticsLocations };
        const obj = visible(str[13]);
        obj.openUserSettings(obj2, () => {
          closure_1_1(constants.TAKE_ACTION);
        });
      }
    };
    PX_12 = undefined;
    if ("top" === str) {
      PX_12 = nativeDefault.space.PX_12;
    }
    intl = intl4.intl;
    return obj;
  }, items1);
  let obj = visible(str[14]);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function CoachmarkPreview() {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [_modDef11666, _modDef11667, _modDef11666];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.typingText) {
    CustomTypingIndicatorDynamicAssetDefault;
    const tmp11 = <tmp10 name="Locke" suggestion={user.TypingSuggestion.YAPPING} emojiSize={16} spacing={8} emojiGap={4} textVariant="text-xs/medium" textColor="text-subtle" textStyle={tmp4.typingText} emojiSource={first} />;
    cResult[1] = tmp4.typingText;
    cResult[2] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.coachmarkImageContainer) {
    let tmp12;
    if (cResult[4] === tmp7) {
      tmp12 = cResult[5];
    }
    return tmp12;
  }
  const tmp13 = <View style={tmp4.coachmarkImageContainer}>{tmp7}</View>;
  cResult[3] = tmp4.coachmarkImageContainer;
  cResult[4] = tmp7;
  cResult[5] = tmp13;
  tmp12 = tmp13;
}) : (function CoachmarkPreview() {
  let items;
  const tmp = closure_8();
  ({ name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: items });
  CustomTypingIndicatorDynamicAssetDefault;
  items = [_modDef11666, _modDef11667, _modDef11666];
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default tmp2;
