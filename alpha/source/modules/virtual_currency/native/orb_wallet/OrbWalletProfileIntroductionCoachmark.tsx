// Module ID: 19457
// Function ID: 19458
// Name: OrbWalletProfileIntroductionCoachmark
// Dependencies: [19, 5089, 1113, 19458, 9500, 2]
// Exports: default

// Module 19457 (OrbWalletProfileIntroductionCoachmark)
import intl4 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 5089 */;
import _modDef19458 from "module_19458" /* 19458 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/virtual_currency/native/orb_wallet/OrbWalletProfileIntroductionCoachmark.tsx");

export default function OrbWalletProfileIntroductionCoachmark(visible) {
  visible = visible.visible;
  const markAsDismissed = visible.markAsDismissed;
  const onSeeChallenges = visible.onSeeChallenges;
  const items = [visible, markAsDismissed, onSeeChallenges];
  const targetRef = visible.targetRef;
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj2;
    const obj = {
      title: intl.string(intl4.t["Q+dH5r"]),
      description: intl2.string(intl4.t.YKJw4W),
      visible,
      position: "top",
      graphic: obj2,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      },
      buttonLabel: intl3.string(intl4.t.dcOuei),
      buttonVariant: "primary",
      onButtonPress() {
        markAsDismissed(constants.TAKE_ACTION);
        onSeeChallenges();
      }
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    obj2 = { type: "image", src: { uri: _modDef19458 }, aspectRatio: "16/9" };
    ({ uri: _modDef19458 });
    intl3 = intl4.intl;
    return obj;
  }, items);
  let obj = visible(onSeeChallenges[4]);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};
