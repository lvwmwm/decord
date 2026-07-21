// Module ID: 16311
// Function ID: 125879
// Name: useTrialActiveUserLimitOptions
// Dependencies: []
// Exports: default

// Module 16311 (useTrialActiveUserLimitOptions)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default function useTrialActiveUserLimitOptions() {
  return React.useMemo(() => {
    const obj = { value: null };
    const intl = callback(closure_1[1]).intl;
    obj.label = intl.string(callback(closure_1[1]).t.zHfL6o);
    const items = [obj, {}, {}, {}, {}];
    return items;
  }, []);
};
