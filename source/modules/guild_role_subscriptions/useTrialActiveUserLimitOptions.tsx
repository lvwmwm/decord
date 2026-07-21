// Module ID: 16319
// Function ID: 125940
// Name: useTrialActiveUserLimitOptions
// Dependencies: []
// Exports: default

// Module 16319 (useTrialActiveUserLimitOptions)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default function useTrialActiveUserLimitOptions() {
  return React.useMemo(() => {
    const obj = { value: null };
    const intl = callback(closure_1[1]).intl;
    obj.label = intl.string(callback(closure_1[1]).t.zHfL6o);
    const items = [obj, { name: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000027161546135037, padding: 330264437082544560000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 }, {}, { name: 179458, padding: 104165 }, { name: "<string:570426015>", padding: "<string:3405775312>" }];
    return items;
  }, []);
};
