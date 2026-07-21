// Module ID: 13657
// Function ID: 103448
// Name: useRefreshLinkCodeOnExpiry
// Dependencies: []
// Exports: default

// Module 13657 (useRefreshLinkCodeOnExpiry)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/parent_tools/hooks/useRefreshLinkCodeOnExpiry.tsx");

export default function useRefreshLinkCodeOnExpiry(arg0, arg1) {
  const importDefault = arg0;
  const tmp = importDefault(dependencyMap[1])(arg1);
  const dependencyMap = tmp;
  const items = [arg0, tmp];
  const effect = React.useEffect(() => {
    if (null != timeout) {
      const _Date = Date;
      const diff = timeout - Date.now();
      if (diff <= 0) {
        tmp();
      } else {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(tmp, diff);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};
