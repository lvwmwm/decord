// Module ID: 13986
// Function ID: 13987
// Name: ScheduledMessageDraftCoachmark
// Dependencies: [19, 4860, 21, 1113, 13987, 9954, 2]
// Exports: default

// Module 13986 (ScheduledMessageDraftCoachmark)
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import useCoachmark from "useCoachmark" /* 9954 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function AttachedCoachmark(buttonRef) {
  buttonRef = buttonRef.buttonRef;
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(buttonRef, merged);
  return null;
}
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default function ScheduledMessageDraftCoachmark(onDismiss) {
  let buttonRef;
  let isVisible;
  onDismiss = onDismiss.onDismiss;
  const items = [onDismiss];
  ({ buttonRef, isVisible } = onDismiss);
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.ZT58S4),
      description: intl2.format(intl3.t.Juk17F, {}),
      position: "top",
      offsetY: 4,
      visible: true,
      onDismiss() {
        return onDismiss(constants.USER_DISMISS);
      },
      renderImgComponent() {
        return closure_1_4(onDismiss(closure_1_1[4]).ScheduleMessageSpotIllustration, { width: 120, height: 80, accessible: false });
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items);
  let tmp2 = null;
  if (isVisible) {
    const merged = Object.assign(memo);
    tmp2 = <AttachedCoachmark buttonRef={buttonRef} />;
  }
  return tmp2;
};
