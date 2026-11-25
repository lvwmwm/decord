// Module ID: 12776
// Function ID: 12777
// Name: useSidekickLeave
// Dependencies: [19, 6338, 2]
// Exports: useSidekickLeave

// Module 12776 (useSidekickLeave)
import CheckpointNavigation from "CheckpointNavigation" /* 6338 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useSidekickLeave.tsx");

export function useSidekickLeave(route, stateFromStores2, onNextStep, onPreviousStep) {
  let closure_0 = route;
  let closure_1 = stateFromStores2;
  react = onNextStep;
  const ref = react.useRef(true);
  const items = [onNextStep, onPreviousStep, stateFromStores2, route];
  const effect = react.useEffect(() => {
    let timeout;
    if (timeout === CheckpointNavigation.CheckpointRoute.SIDEKICK_LEAVE) {
      if (ref.current) {
        onPreviousStep();
      } else {
        const tmp3 = stateFromStores2;
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
