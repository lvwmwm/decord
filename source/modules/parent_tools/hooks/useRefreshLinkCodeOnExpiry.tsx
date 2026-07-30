// Module ID: 13903
// Function ID: 13904
// Name: useRefreshLinkCodeOnExpiry
// Dependencies: [19, 8252, 2]
// Exports: default

// Module 13903 (useRefreshLinkCodeOnExpiry)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default function useRefreshLinkCodeOnExpiry(arg0, arg1) {
  const importDefault = arg0;
  const tmp = importDefault(8252)(arg1);
  const dependencyMap = tmp;
  const items = [arg0, tmp];
  const effect = React.useEffect(() => {
    if (null != timeout) {
      const _Date = Date;
      const diff = tmp - Date.now();
      if (diff <= 0) {
        tmp();
      } else {
        const _setTimeout = setTimeout;
        timeout = setTimeout(tmp, diff);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};
