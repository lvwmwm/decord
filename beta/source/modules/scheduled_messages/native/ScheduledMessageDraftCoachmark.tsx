// Module ID: 11925
// Function ID: 11926
// Name: ScheduledMessageDraftCoachmark
// Dependencies: [19, 17, 2042, 21, 4836, 1115, 11702, 10589, 2]
// Exports: default

// Module 11925 (ScheduledMessageDraftCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl3 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import useCoachmark from "useCoachmark" /* 10589 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

function AttachedCoachmark(buttonRef) {
  buttonRef = buttonRef.buttonRef;
  const merged = Object.assign(buttonRef, Object.assign({ buttonRef: 0 }));
  const obj = useCoachmark;
  const coachmark = obj.useCoachmark(buttonRef, merged);
  return null;
}
const Image = react_native.Image;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ image: { width: 100, height: 80 } });
const result = size.fileFinishedImporting("modules/scheduled_messages/native/ScheduledMessageDraftCoachmark.tsx");

export default function ScheduledMessageDraftCoachmark(onDismiss) {
  let buttonRef;
  let isVisible;
  onDismiss = onDismiss.onDismiss;
  ({ buttonRef, isVisible } = onDismiss);
  const tmp = closure_7();
  let closure_1 = tmp;
  const items = [onDismiss, tmp.image];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    const obj = {
      title: intl.string(intl3.t.Pu7sCU),
      description: intl2.format(intl3.t.Juk17F, {}),
      position: "top",
      offsetY: 4,
      visible: true,
      onDismiss() {
        return onDismiss(constants.USER_DISMISS);
      },
      renderImgComponent() {
        return <Image source={closure_1(dependencyMap[6])} style={closure_1_1.image} />;
      }
    };
    intl = intl3.intl;
    intl2 = intl3.intl;
    return obj;
  }, items);
  let tmp3 = null;
  if (isVisible) {
    const merged = Object.assign(memo);
    tmp3 = <AttachedCoachmark buttonRef={buttonRef} />;
  }
  return tmp3;
};
