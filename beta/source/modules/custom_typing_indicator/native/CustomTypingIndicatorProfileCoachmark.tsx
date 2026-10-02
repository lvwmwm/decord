// Module ID: 16618
// Function ID: 16619
// Name: CustomTypingIndicatorProfileCoachmark
// Dependencies: [19, 17, 1086, 2048, 21, 4837, 588, 558, 576, 1127, 3720, 6801, 9656, 11332, 11333, 11330, 1386, 2]

// Module 16618 (CustomTypingIndicatorProfileCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import intl4 from "intl" /* 1127 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _modDef3720 from "module_3720" /* 3720 */;
import openUserSettings from "openUserSettings" /* 6801 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 11330 */;
import _modDef11332 from "module_11332" /* 11332 */;
import _modDef11333 from "module_11333" /* 11333 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let openUserSettingsResult, position;

let obj2;
let tmp;
const user = tmp(1386);
let react = react_mod;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { coachmarkImageContainer: obj2, typingText: { maxWidth: 100 } };
obj2 = { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 };
let closure_8 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((position) => {
  let first;
  let markAsDismissed;
  let tmp12;
  let tmp13;
  let tmp7;
  let visible;
  let obj = markAsDismissed(576);
  const cResult = obj.c(14);
  ({ visible, markAsDismissed } = position);
  position = position.position;
  let str = "bottom";
  if (undefined !== position) {
    str = position;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1127).intl;
    const stringResult = intl.string(_modDef3720.Eq5jIA);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1127).intl;
    const stringResult1 = intl2.string(_modDef3720.lSBp2M);
    cResult[1] = stringResult1;
    tmp7 = stringResult1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] !== markAsDismissed) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    cResult[2] = markAsDismissed;
    cResult[3] = C;
  } else {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
  }
  let PX_12;
  if ("top" === str) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    PX_12 = nativeDefault.space.PX_12;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    const intl3 = tmp(1127).intl;
    const stringResult2 = intl3.string(_modDef3720["6NP6ic"]);
    cResult[4] = tmp14;
    cResult[5] = stringResult2;
    tmp13 = stringResult2;
    tmp12 = tmp14;
  } else {
    class C {
      constructor() {
        tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
        return;
      }
    }
    tmp13 = cResult[5];
  }
  if (cResult[6] !== markAsDismissed) {
    class T {
      constructor() {
        obj = closure_0(closure_2[11]);
        obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "profile_coachmark" } };
        openUserSettingsResult = obj.openUserSettings(obj1, () => { /* body not rendered: F146004 */ });
        return;
      }
    }
    cResult[6] = markAsDismissed;
    cResult[7] = T;
  } else {
    class T {
      constructor() {
        obj = closure_0(closure_2[11]);
        obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "profile_coachmark" } };
        openUserSettingsResult = obj.openUserSettings(obj1, () => { /* body not rendered: F146004 */ });
        return;
      }
    }
  }
  if (cResult[8] === tmp10) {
    class T {
      constructor() {
        obj = closure_0(closure_2[11]);
        obj1 = { screen: UserSettingsSections.TYPING_INDICATOR, params: { source: "profile_coachmark" } };
        openUserSettingsResult = obj.openUserSettings(obj1, () => { /* body not rendered: F146004 */ });
        return;
      }
    }
  }
  let obj2 = { title: first, description: tmp7, visible, position: str, offsetY: PX_12, onDismiss: tmp10, renderImgComponent: tmp12, buttonLabel: tmp13, buttonVariant: "primary", onButtonPress: tmp17 };
  cResult[8] = tmp10;
  cResult[9] = str;
  cResult[10] = PX_12;
  cResult[11] = tmp17;
  cResult[12] = visible;
  cResult[13] = obj2;
}) : ((visible) => {
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
  const items = [markAsDismissed];
  const onDismiss = react.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items);
  const items1 = [stringResult, stringResult1, visible, str, onDismiss, markAsDismissed];
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
      buttonLabel: intl.string(_modDef3720["6NP6ic"]),
      buttonVariant: "primary",
      onButtonPress() {
        const obj = visible(str[11]);
        const obj2 = { screen: callback.TYPING_INDICATOR, params: { source: "profile_coachmark" } };
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
  let obj = visible(str[12]);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_8();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [_modDef11332, _modDef11333, _modDef11332];
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
}) : (() => {
  let items;
  const tmp = closure_8();
  ({ name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: items });
  CustomTypingIndicatorDynamicAssetDefault;
  items = [_modDef11332, _modDef11333, _modDef11332];
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
});
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default tmp2;
