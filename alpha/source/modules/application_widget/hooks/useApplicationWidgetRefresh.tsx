// Module ID: 12215
// Function ID: 12216
// Name: useApplicationWidgetRefresh
// Dependencies: [32, 19, 12216, 12217, 2]
// Exports: default

// Module 12215 (useApplicationWidgetRefresh)
import refreshApplicationWidget from "refreshApplicationWidget" /* 12216 */;
import presentApplicationWidgetRefreshOutcomeDefault from "presentApplicationWidgetRefreshOutcome" /* 12217 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let result = size.fileFinishedImporting("modules/application_widget/hooks/useApplicationWidgetRefresh.tsx");

export default function useApplicationWidgetRefresh(arg0) {
  let closure_2;
  let closure_3;
  let pending;
  let closure_0 = arg0;
  [pending, closure_2] = react.useState(false);
  _slicedToArray = react.useRef(true);
  const effect = react.useEffect(() => {
    closure_3.current = true;
    return () => {
      closure_1_3.current = false;
    };
  }, []);
  const items = [arg0, pending];
  let obj = {
    pending,
    refresh: react.useCallback(() => {
      let ref;
      let tmp = first;
      if (!tmp) {
        tmp = null == closure_0;
      }
      if (!tmp) {
        closure_2(true);
        const obj = refreshApplicationWidget;
        const result = obj.refreshApplicationWidget(closure_0);
        const nextPromise = result.then(presentApplicationWidgetRefreshOutcomeDefault);
        nextPromise.finally(() => {
          if (ref.current) {
            closure_1_2(false);
          }
        });
      }
    }, items)
  };
  return obj;
};
