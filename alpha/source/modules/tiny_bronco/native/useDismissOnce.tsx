// Module ID: 16566
// Function ID: 16567
// Name: useDismissOnce
// Dependencies: [19, 4855, 2]
// Exports: useDismissOnce

// Module 16566 (useDismissOnce)
import DismissibleContentConstants from "DismissibleContentConstants" /* 4855 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let react = react_mod;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const result = size.fileFinishedImporting("modules/tiny_bronco/native/useDismissOnce.tsx");

export function useDismissOnce(markAsDismissed) {
  let current;
  react = markAsDismissed;
  const ref = react.useRef(false);
  const ref2 = react.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = react.useEffect(() => {
    ref2.current = current;
  }, items);
  const callback = react.useCallback((AUTO_DISMISS) => {
    if (!ref.current) {
      tmp.current = true;
      ref2.current(AUTO_DISMISS);
    }
  }, []);
  const items1 = [callback];
  const effect1 = react.useEffect(() => () => callback(constants.AUTO_DISMISS), items1);
  return callback;
}
