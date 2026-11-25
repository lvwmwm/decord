// Module ID: 19071
// Function ID: 19072
// Name: OrbWalletProfileIntroductionCoachmark
// Dependencies: [19, 4858, 1112, 19072, 9526, 2]
// Exports: default

// Module 19071 (OrbWalletProfileIntroductionCoachmark)
import intl4 from "intl" /* 1112 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4858 */;
import _modDef19072 from "module_19072" /* 19072 */;
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
    obj2 = { type: "image", src: { uri: _modDef19072 }, aspectRatio: "16/9" };
    ({ uri: _modDef19072 });
    intl3 = intl4.intl;
    return obj;
  }, items);
  let obj = visible(onSeeChallenges[4]);
  const coachmark = obj.useCoachmark(targetRef, memo);
  return null;
};
