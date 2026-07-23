// Module ID: 16444
// Function ID: 128156
// Name: useTrialActiveUserLimitOptions
// Dependencies: [31, 1212, 2]
// Exports: default

// Module 16444 (useTrialActiveUserLimitOptions)
import result from "result";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default function useTrialActiveUserLimitOptions() {
  return React.useMemo(() => {
    const obj = { value: null };
    const intl = outer1_0(outer1_1[1]).intl;
    obj.label = intl.string(outer1_0(outer1_1[1]).t.zHfL6o);
    const items = [obj, { value: 10, label: "10" }, { value: 25, label: "25" }, { value: 50, label: "50" }, { value: 100, label: "100" }];
    return items;
  }, []);
};
