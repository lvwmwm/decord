// Module ID: 16327
// Function ID: 125982
// Name: useTrialActiveUserLimitOptions
// Dependencies: []
// Exports: default

// Module 16327 (useTrialActiveUserLimitOptions)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default function useTrialActiveUserLimitOptions() {
  return React.useMemo(() => {
    const obj = { value: null };
    const intl = callback(closure_1[1]).intl;
    obj.label = intl.string(callback(closure_1[1]).t.zHfL6o);
    const items = [obj, { name: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027161546135037, rawSpec: -0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000007238766809736056 }, {}, {}, {}];
    return items;
  }, []);
};
