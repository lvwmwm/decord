// Module ID: 13634
// Function ID: 13635
// Name: useSidekickLeave
// Dependencies: [19, 6430, 2]
// Exports: useSidekickLeave

// Module 13634 (useSidekickLeave)
import CheckpointNavigation from "CheckpointNavigation" /* 6430 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useSidekickLeave.tsx");

export function useSidekickLeave(route, stateFromStores3, onNextStep, onPreviousStep) {
  let closure_0 = route;
  let closure_1 = stateFromStores3;
  react = onNextStep;
  const ref = react.useRef(true);
  const items = [onNextStep, onPreviousStep, stateFromStores3, route];
  const effect = react.useEffect(() => {
    let timeout;
    if (timeout === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        onPreviousStep();
      } else {
        const tmp3 = stateFromStores3;
        if (tmp3) {
          onNextStep();
        } else {
          const _setTimeout = setTimeout;
          timeout = setTimeout(onNextStep, 1000);
          return () => clearTimeout(closure_0);
        }
      }
    } else {
      ref.current = false;
    }
  }, items);
}
