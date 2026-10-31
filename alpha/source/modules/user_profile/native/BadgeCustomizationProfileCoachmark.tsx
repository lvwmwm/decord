// Module ID: 18869
// Function ID: 18870
// Name: BadgeCustomizationProfileCoachmark
// Dependencies: [32, 19, 1383, 4860, 575, 1491, 1625, 9624, 504, 2047, 5028, 1113, 5088, 9954, 2]
// Exports: default

// Module 18869 (BadgeCustomizationProfileCoachmark)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import BadgesCoachmarkRive from "BadgesCoachmarkRive" /* 5088 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const PX_64 = nativeDefault.space.PX_64;
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default function BadgeCustomizationProfileCoachmark(markAsDismissed) {
  let c2;
  let rect2;
  let targetRef;
  let visible;
  ({ targetRef, visible } = markAsDismissed);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const onTryItOut = markAsDismissed.onTryItOut;
  let reducedMotion;
  let str2;
  let tmp = visible;
  const tmp2 = onTryItOut;
  let obj = visible(onTryItOut[8]);
  const items = [str2];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = markAsDismissed(onTryItOut[9]);
    return obj.canUsePremiumProfileCustomization(str2.getCurrentUser());
  });
  let obj2 = reducedMotion;
  reducedMotion = reducedMotion.useContext(visible(onTryItOut[10]).AccessibilityPreferencesContext).reducedMotion;
  c2 = undefined;
  const height = markAsDismissed(onTryItOut[5])().height;
  let rect = markAsDismissed(onTryItOut[6])();
  [rect2, c2] = stateFromStores(reducedMotion.useState(null), 2);
  const items1 = [targetRef, visible, height];
  stateFromStores(reducedMotion.useState(null), 2);
  const effect = reducedMotion.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      const current = targetRef.current;
      if (current != null) {
        current.measureInWindow((arg0, top, arg2, arg3) => {
          if (0 !== arg3) {
            const rect = { top, bottom: top + arg3 };
            closure_1_2(rect);
          }
        });
      }
    }
  }, items1);
  let str = "bottom";
  str2 = "bottom";
  if (null != rect2) {
    const tmpResult = tmp(tmp2[7]);
    if (height - tmpResult.getFloatingNavBottomMargin(rect.bottom) - PX_64 - rect2.bottom < rect2.top - rect.top) {
      str = "top";
    }
    str2 = str;
  }
  const items2 = [stateFromStores, visible, str2, markAsDismissed, onTryItOut, reducedMotion.enabled];
  const memo = obj2.useMemo(() => {
    let intl;
    let intl3;
    let obj2;
    let obj3;
    let obj4;
    let string;
    let t;
    const obj = {
      title: intl.string(intl4.t["9JoKQb"]),
      description: string(stateFromStores ? t.p82vky : t.IDh31t),
      visible,
      position: str2,
      gradientColor: "blue",
      graphic: obj2,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      },
      buttonLabel: intl3.string(tmp(1113).t["4P5I8V"]),
      buttonVariant: "primary",
      onButtonPress() {
        markAsDismissed(constants.TAKE_ACTION);
        onTryItOut();
      }
    };
    intl = intl4.intl;
    const intl2 = intl4.intl;
    string = intl2.string;
    t = intl4.t;
    obj2 = { type: "rive", rive: BadgesCoachmarkRive.BadgesCoachmarkRive, aspectRatio: "16/9", riveProps: obj3 };
    obj3 = { dataBinding: obj4 };
    obj4 = { on: visible, reducedMotion: reducedMotion.enabled };
    intl3 = tmp(1113).intl;
    return obj;
  }, items2);
  const tmpResult2 = tmp(tmp2[13]);
  const coachmark = tmpResult2.useCoachmark(targetRef, memo);
  return null;
};
