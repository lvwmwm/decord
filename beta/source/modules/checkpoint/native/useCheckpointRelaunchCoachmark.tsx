// Module ID: 17955
// Function ID: 17956
// Name: useCheckpointRelaunchCoachmark
// Dependencies: [5, 19, 4759, 1112, 3440, 4746, 12500, 17956, 2]
// Exports: useCheckpointRelaunchCoachmarkProps

// Module 17955 (useCheckpointRelaunchCoachmark)
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import useIsCheckpointRelaunchCoachmarkEligible from "useIsCheckpointRelaunchCoachmarkEligible" /* 17956 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c1, c2, closure_0;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/checkpoint/native/useCheckpointRelaunchCoachmark.tsx");
const useIsCheckpointRelaunchCoachmarkEligible_export = useIsCheckpointRelaunchCoachmarkEligible.useIsCheckpointRelaunchCoachmarkEligible;

export { useIsCheckpointRelaunchCoachmarkEligible_export as useIsCheckpointRelaunchCoachmarkEligible };
export function useCheckpointRelaunchCoachmarkProps(visibleContent) {
  visibleContent = visibleContent.visibleContent;
  const markAsDismissed = visibleContent.markAsDismissed;
  const items = [markAsDismissed, visibleContent];
  return react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj = {
      title: intl.string(markAsDismissed(dependencyMap[4]).gY1STb),
      description: intl2.string(markAsDismissed(dependencyMap[4])["Vlu+rH"]),
      position: "top",
      visible: closure_0 === visibleContent(dependencyMap[5]).DismissibleContent.BUILD_A_BEAR_RELAUNCH_COACHMARK,
      onDismiss() {
        return markAsDismissed(constants.USER_DISMISS);
      },
      buttonLabel: intl3.string(markAsDismissed(dependencyMap[4]).e3fPDg),
      buttonVariant: "primary",
      onButtonPress() {
        return closure_0(...arguments);
      }
    };
    intl = visibleContent(dependencyMap[3]).intl;
    intl2 = visibleContent(dependencyMap[3]).intl;
    intl3 = visibleContent(dependencyMap[3]).intl;
    closure_0 = _asyncToGenerator(async (arg0, value) => {
      let obj2;
      let v1;
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              c1 = 1;
              c2 = 1;
              const obj5 = { value: obj2.openCheckpoint(tmp3(dependencyMap[7]).CHECKPOINT_RELAUNCH_COACHMARK_SOURCE), done: false };
              obj2 = tmp3(dependencyMap[6]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              c1(constants.TAKE_ACTION);
            }
            c2 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp10) {
          c2 = 3;
          throw tmp10;
        }
      }
    });
    return obj;
  }, items);
}
