// Module ID: 12269
// Function ID: 94096
// Name: useScheduledForcedUpdate
// Dependencies: []
// Exports: default

// Module 12269 (useScheduledForcedUpdate)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/premium/hooks/useScheduledForcedUpdate.tsx");

export default function useScheduledForcedUpdate(delay) {
  delay = delay.delay;
  const arg1 = delay;
  let flag = delay.disable;
  if (flag === undefined) {
    flag = false;
  }
  const dependencyMap = flag;
  let React;
  const forceUpdate = arg1(dependencyMap[1]).useForceUpdate();
  React = forceUpdate;
  const items = [delay, flag, forceUpdate];
  const effect = React.useEffect(() => {
    if (timeout > 0) {
      if (!flag) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          callback();
        }, timeout);
        return () => clearTimeout(closure_0);
      }
    }
  }, items);
};
