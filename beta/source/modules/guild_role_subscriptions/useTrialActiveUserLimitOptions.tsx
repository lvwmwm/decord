// Module ID: 17577
// Function ID: 17578
// Name: useTrialActiveUserLimitOptions
// Dependencies: [19, 1115, 2]
// Exports: default

// Module 17577 (useTrialActiveUserLimitOptions)
import intl2 from "intl" /* 1115 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/guild_role_subscriptions/useTrialActiveUserLimitOptions.tsx");

export default function useTrialActiveUserLimitOptions() {
  return react.useMemo(() => {
    let intl;
    const obj = { value: null, label: intl.string(intl2.t.zHfL6o) };
    intl = intl2.intl;
    const items = [obj, { value: 10, label: "10" }, { value: 25, label: "25" }, { value: 50, label: "50" }, { value: 100, label: "100" }];
    return items;
  }, []);
};
