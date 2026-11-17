// Module ID: 14412
// Function ID: 14413
// Name: useConjureStartPublish
// Dependencies: [19, 14403, 2]
// Exports: default

// Module 14412 (useConjureStartPublish)
import useConjurePublishAction from "useConjurePublishAction" /* 14403 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/publish/useConjureStartPublish.tsx");

export default function useConjureStartPublish(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let context = arg2;
  const useContext = react.useContext;
  const obj = react;
  if (arg2 == null) {
    context = useContext(useConjurePublishAction.ConjurePublishActionContext);
  }
  const items = [arg0, arg1, context];
  return obj.useCallback((arg0) => {
    const disabled = null == closure_0 || null == closure_1 || null == context || closure_1.disabled;
    if (!disabled) {
      closure_1.run(arg0);
    }
  }, items);
};
