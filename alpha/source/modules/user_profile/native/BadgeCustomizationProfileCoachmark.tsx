// Module ID: 19128
// Function ID: 19129
// Name: BadgeCustomizationProfileCoachmark
// Dependencies: [19, 1387, 4889, 504, 2174, 5057, 19129, 1112, 5111, 9568, 2]
// Exports: default

// Module 19128 (BadgeCustomizationProfileCoachmark)
import intl4 from "intl" /* 1112 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4889 */;
import BadgesCoachmarkRive from "BadgesCoachmarkRive" /* 5111 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1387 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/user_profile/native/BadgeCustomizationProfileCoachmark.tsx");

export default function BadgeCustomizationProfileCoachmark(markAsDismissed) {
  let targetRef;
  let visible;
  ({ targetRef, visible } = markAsDismissed);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const onTryItOut = markAsDismissed.onTryItOut;
  let reducedMotion;
  let obj = visible(onTryItOut[3]);
  const items = [reducedMotion];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const obj = markAsDismissed(onTryItOut[4]);
    return obj.canUsePremiumProfileCustomization(reducedMotion.getCurrentUser());
  });
  reducedMotion = stateFromStores.useContext(visible(onTryItOut[5]).AccessibilityPreferencesContext).reducedMotion;
  const tmp2 = markAsDismissed(onTryItOut[6])(targetRef, visible);
  const position = tmp2;
  const items1 = [stateFromStores, visible, tmp2, markAsDismissed, onTryItOut, reducedMotion.enabled];
  const memo = stateFromStores.useMemo(() => {
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
      position,
      gradientColor: "blue",
      graphic: obj2,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      },
      buttonLabel: intl3.string(tmp(1112).t["4P5I8V"]),
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
    intl3 = tmp(1112).intl;
    return obj;
  }, items1);
  let obj2 = visible(onTryItOut[9]);
  const coachmark = obj2.useCoachmark(targetRef, memo);
  return null;
};
