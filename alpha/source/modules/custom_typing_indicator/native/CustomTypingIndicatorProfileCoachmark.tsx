// Module ID: 18817
// Function ID: 18818
// Name: CustomTypingIndicatorProfileCoachmark
// Dependencies: [19, 17, 1072, 4855, 21, 5009, 575, 1114, 3867, 7320, 7345, 7557, 9933, 13687, 1392, 13690, 13691, 2]
// Exports: default

// Module 18817 (CustomTypingIndicatorProfileCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import user from "user" /* 1392 */;
import _modDef3867 from "module_3867" /* 3867 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import CustomTypingIndicatorDynamicAssetDefault from "CustomTypingIndicatorDynamicAsset" /* 13687 */;
import _modDef13690 from "module_13690" /* 13690 */;
import _modDef13691 from "module_13691" /* 13691 */;
import react_mod from "react" /* 19 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let obj2;
function CoachmarkPreview() {
  let items;
  const tmp = closure_8();
  ({ name: "Locke", suggestion: user.TypingSuggestion.YAPPING, emojiSize: 16, spacing: 8, emojiGap: 4, textVariant: "text-xs/medium", textColor: "text-subtle", textStyle: tmp.typingText, emojiSource: items });
  CustomTypingIndicatorDynamicAssetDefault;
  items = [_modDef13690, _modDef13691, _modDef13690];
  return <View style={tmp.coachmarkImageContainer}>{null}</View>;
}
let react = react_mod;
const View = react_native.View;
const UserSettingsSections = Constants.UserSettingsSections;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { coachmarkImageContainer: obj2, typingText: { maxWidth: 100 } };
obj2 = { alignItems: "center", justifyContent: "center", paddingTop: nativeDefault.space.PX_10 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/custom_typing_indicator/native/CustomTypingIndicatorProfileCoachmark.tsx");

export default function CustomTypingIndicatorProfileCoachmark(visible) {
  let title;
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  let str = visible.position;
  const targetRef = visible.targetRef;
  if (str === undefined) {
    str = "bottom";
  }
  let intl = visible(str[7]).intl;
  const stringResult = intl.string(markAsDismissed(str[8]).Eq5jIA);
  react = stringResult;
  const intl2 = visible(str[7]).intl;
  const stringResult1 = intl2.string(markAsDismissed(str[8]).lSBp2M);
  const tmp3 = markAsDismissed(str[9]);
  const analyticsLocations = tmp3(markAsDismissed(str[10]).CUSTOM_TYPING_INDICATOR_PROFILE_COACHMARK).analyticsLocations;
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
      buttonLabel: intl.string(_modDef3867["6NP6ic"]),
      buttonVariant: "primary",
      onButtonPress() {
        let obj3;
        const obj2 = { screen: analyticsLocations.TYPING_INDICATOR, params: obj3 };
        obj3 = { analyticsLocations };
        const obj = visible(str[11]);
        obj.openUserSettings(obj2, () => {
          closure_1_1(constants.TAKE_ACTION);
        });
      }
    };
    PX_12 = undefined;
    if ("top" === str) {
      PX_12 = nativeDefault.space.PX_12;
    }
    intl = intl3.intl;
    return obj;
  }, items1);
  let obj = visible(str[12]);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};
