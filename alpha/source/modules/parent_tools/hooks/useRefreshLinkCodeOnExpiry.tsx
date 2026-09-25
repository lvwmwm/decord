// Module ID: 14389
// Function ID: 14390
// Name: useRefreshLinkCodeOnExpiry
// Dependencies: [19, 6378, 2]
// Exports: default

// Module 14389 (useRefreshLinkCodeOnExpiry)
import useStableCallbackDefault from "useStableCallback" /* 6378 */;
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default function useRefreshLinkCodeOnExpiry(arg0, arg1) {
  closure_0 = arg0;
  const tmp = useStableCallbackDefault(arg1);
  closure_1 = tmp;
  const items = [arg0, tmp];
  const effect = noop.useEffect(() => {
    if (null != timeout) {
      const _Date = Date;
      const diff = tmp - Date.now();
      if (diff <= 0) {
        closure_1();
      } else {
        const _setTimeout = setTimeout;
        timeout = setTimeout(closure_1, diff);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};
