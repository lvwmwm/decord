// Module ID: 14202
// Function ID: 14203
// Name: useRefreshLinkCodeOnExpiry
// Dependencies: [19, 8562, 2]
// Exports: default

// Module 14202 (useRefreshLinkCodeOnExpiry)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default function useRefreshLinkCodeOnExpiry(arg0, arg1) {
  const importDefault = arg0;
  const tmp = importDefault(8562)(arg1);
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
