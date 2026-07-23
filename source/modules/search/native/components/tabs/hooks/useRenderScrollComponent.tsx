// Module ID: 15376
// Function ID: 117339
// Name: useRenderScrollComponent
// Dependencies: [31, 27, 33, 7588, 15316, 477, 2]
// Exports: useRenderScrollComponent

// Module 15376 (useRenderScrollComponent)
import importAllResult from "result";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_5 = importAllResult.forwardRef((arg0, ref) => {
  let obj = { inActionSheet: false };
  obj = { ref };
  const merged = Object.assign(arg0);
  obj.children = <ScrollView ref={arg1} />;
  return jsx(require(7588) /* _isNativeReflectConstruct */.FastListIosFabricGestureWorkaround, { ref });
});
const result = require("jsxProd").fileFinishedImporting("modules/search/native/components/tabs/hooks/useRenderScrollComponent.tsx");

export const useRenderScrollComponent = function useRenderScrollComponent() {
  context = importAllResult.useContext(context(15316).SwipeForMemberListContext);
  const items = [context];
  return importAllResult.useMemo(() => {
    let tmp;
    if (obj.isIOS()) {
      if (null != context) {
        tmp = outer1_5;
      }
    }
    return tmp;
  }, items);
};
