// Module ID: 16726
// Function ID: 16727
// Name: useRefreshLinkCodeOnExpiry
// Dependencies: [19, 7125, 2]
// Exports: default

// Module 16726 (useRefreshLinkCodeOnExpiry)
import useStableCallbackDefault from "useStableCallback" /* 7125 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default function useRefreshLinkCodeOnExpiry(arg0, arg1) {
  let closure_0 = arg0;
  const tmp = useStableCallbackDefault(arg1);
  let closure_1 = tmp;
  const items = [arg0, tmp];
  const effect = react.useEffect(() => {
    let timeout;
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
