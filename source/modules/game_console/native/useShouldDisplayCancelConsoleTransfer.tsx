// Module ID: 15735
// Function ID: 120355
// Name: shouldDisplayCancel
// Dependencies: []
// Exports: default

// Module 15735 (shouldDisplayCancel)
function shouldDisplayCancel(startedAt) {
  let tmp = null != startedAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - startedAt.startedAt > 6000;
  }
  return tmp;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx");

export default function useShouldDisplayCancelConsoleTransfer(arg0) {
  const callback = arg0;
  const tmp = callback(React.useState(() => callback2(arg0)), 2);
  const React = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    const tmp = callback2(startedAt);
    callback(tmp);
    if (null != startedAt) {
      if (!tmp) {
        const _setTimeout = setTimeout;
        const _Date = Date;
        const startedAt = setTimeout(() => callback(callback2(closure_0)), 6000 - (Date.now() - startedAt.startedAt));
        return () => {
          clearTimeout(closure_0);
        };
      }
    }
  }, items);
  return tmp[0];
};
