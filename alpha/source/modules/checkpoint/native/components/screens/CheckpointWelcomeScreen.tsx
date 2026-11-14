// Module ID: 14484
// Function ID: 14485
// Name: CheckpointWelcomeScreen
// Dependencies: [17, 1388, 6377, 21, 575, 5306, 1496, 504, 5372, 1113, 3285, 14485, 14270, 14486, 14497, 3317, 14498, 2]
// Exports: default

// Module 14484 (CheckpointWelcomeScreen)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _modDef3285 from "module_3285" /* 3285 */;
import _modDef3317 from "module_3317" /* 3317 */;
import UserUtils from "UserUtils" /* 5372 */;
import CheckpointScreen from "CheckpointScreen" /* 14270 */;
import useIsCheckpointWideDefault from "useIsCheckpointWide" /* 14485 */;
import CheckpointNavigationControls from "CheckpointNavigationControls" /* 14486 */;
import TextWritingAnimation from "TextWritingAnimation" /* 14497 */;
import CheckpointKnickKnacksDefault from "CheckpointKnickKnacks" /* 14498 */;
import UserStore from "UserStore" /* 1388 */;
import CheckpointConstants from "CheckpointConstants" /* 6377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

const CheckpointScreenDefault = CheckpointScreen;
const TextWritingAnimationDefault = TextWritingAnimation;

let CHECKPOINT_CONTROL_SIZE;
let CHECKPOINT_NAV_HEIGHT;
let CHECKPOINT_WIDE_HOME_START_GAP;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ CHECKPOINT_CONTROL_SIZE, CHECKPOINT_NAV_HEIGHT, CHECKPOINT_WIDE_HOME_START_GAP } = CheckpointConstants);
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let c7 = 100;
const PX_16 = nativeDefault.space.PX_16;
let closure_9 = 18 + CHECKPOINT_WIDE_HOME_START_GAP + CHECKPOINT_CONTROL_SIZE;
let createStyles = createStyles_mod;
let obj = { container: { width: "100%", flexGrow: 1 }, title: { transformOrigin: "left", width: 340 }, oneLineTitle: { alignSelf: "stretch" }, titleText: { textTransform: "uppercase", fontSize: 72, lineHeight: 72, letterSpacing: -2.88 }, subtitle: obj2, content: { flex: 1, justifyContent: "center" }, knickKnacks: obj3, wideContent: { flexGrow: 1, justifyContent: "center", alignItems: "center", paddingTop: CHECKPOINT_NAV_HEIGHT }, wideTitle: obj4, wideTitleText: { textAlign: "center" }, wideSubtitle: obj5, wideSubtitleText: { textAlign: "center" } };
obj2 = { maxWidth: 327, marginTop: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
obj4 = { alignSelf: "stretch", marginVertical: -nativeDefault.space.PX_8 };
obj5 = { maxWidth: 558, marginTop: nativeDefault.space.PX_12 };
let closure_10 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx");

export default function CheckpointWelcomeScreen() {
  let currentUser;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let num;
  let obj11;
  let obj15;
  let obj17;
  let obj4;
  let obj8;
  let tmp15;
  const tmp = closure_10();
  const bound = Math.min(useWindowDimensionsDefault().width / 392, 1);
  const items = [UserStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = UserUtils;
  const name = obj2.useName(stateFromStores);
  const intl = intl4.intl;
  const stringResult = intl.string(_modDef3285["CdU/PF"]);
  let str = "Check\u200Bpoint";
  if ("Checkpoint" !== stringResult) {
    str = stringResult;
  }
  const tmp9 = useIsCheckpointWideDefault();
  const tmp5Result = CheckpointScreen;
  const tmp10 = tmp5Result.useCheckpointScreenFrame().width >= 500;
  const tmp5Result2 = CheckpointNavigationControls;
  const sum = PX_16 + Math.max(tmp5Result2.useCheckpointHomeControlsHeight(), closure_9);
  const tmp2Result = CheckpointScreenDefault;
  if (tmp9) {
    const obj3 = { centered: true, children: metroRequire(View, obj4) };
    obj4 = { style: items1, children: items3 };
    items1 = [tmp.wideContent, ];
    const obj5 = { paddingBottom: sum };
    items1[1] = obj5;
    const obj6 = { isStepHeading: true, style: tmp.wideTitle, textStyle: items2, text: str, accessibilityLabel: stringResult, delay, variant: "display-lg", lineClamp: 1, adjustsFontSizeToFit: true };
    items2 = [, ];
    ({ titleText: arr7[0], wideTitleText: arr7[1] } = tmp);
    items3 = [hasOwnProperty(TextWritingAnimationDefault, obj6), ];
    ({ wideSubtitle: obj19.style, wideSubtitleText: obj19.textStyle } = tmp);
    const obj7 = { style: null, textStyle: null, text: intl3.formatToPlainString(_modDef3317.xhZ23b, obj8), delay: delay + TextWritingAnimation.DURATION, variant: "heading-xl/medium" };
    const tmp2Result4 = TextWritingAnimationDefault;
    intl3 = tmp5(1113).intl;
    obj8 = { username: name };
    items3[1] = hasOwnProperty(tmp2Result4, obj7);
    obj15 = obj3;
  } else {
    let oneLineTitle;
    const obj9 = { style: items4, children: tmp15(View, obj11) };
    items4 = [tmp.container, ];
    const obj10 = { paddingBottom: sum };
    items4[1] = obj10;
    obj11 = { style: tmp.content, children: items6 };
    tmp15 = metroRequire;
    const tmp2Result5 = TextWritingAnimationDefault;
    if (tmp10) {
      oneLineTitle = tmp.oneLineTitle;
    } else {
      oneLineTitle = [tmp.title, ];
      const obj12 = { transform: items5 };
      items5 = [{ scale: bound }];
      const obj13 = { scale: bound };
      oneLineTitle[1] = obj12;
    }
    const obj14 = { isStepHeading: true, style: oneLineTitle, textStyle: tmp.titleText, text: str, accessibilityLabel: stringResult, delay, variant: "display-lg", lineClamp: num, adjustsFontSizeToFit: tmp10 };
    num = undefined;
    const tmp17 = delay;
    if (tmp10) {
      num = 1;
    }
    obj15 = { children: hasOwnProperty(View, obj9) };
    items6 = [hasOwnProperty(tmp2Result5, obj14), , ];
    const obj16 = { style: tmp.subtitle, text: intl2.formatToPlainString(_modDef3317.xhZ23b, obj17), delay: tmp17 + TextWritingAnimation.DURATION, variant: "heading-xl/medium" };
    const tmp2Result6 = TextWritingAnimationDefault;
    intl2 = tmp5(1113).intl;
    obj17 = { username: name };
    items6[1] = hasOwnProperty(tmp2Result6, obj16);
    const obj18 = { style: tmp.knickKnacks };
    items6[2] = hasOwnProperty(CheckpointKnickKnacksDefault, obj18);
  }
  return hasOwnProperty(tmp2Result, obj15);
};
