// Module ID: 6913
// Function ID: 55080
// Name: AppStartInfo
// Dependencies: [57, 5, 6914, 3988, 2]

// Module 6913 (AppStartInfo)
import _slicedToArray from "_slicedToArray";
import asyncGeneratorStep from "asyncGeneratorStep";

let closure_4 = {};
const result = require("enforcing").fileFinishedImporting("modules/tti_analytics/native/AppStartInfo.android.tsx");

export const AppStartInfo = {
  getAppUIViewed() {
    const mainActivityCreationTime = importDefault(6914).getMainActivityCreationTime();
    let tmp2 = null != mainActivityCreationTime;
    if (tmp2) {
      let flag = !tmp4;
      if (!table[mainActivityCreationTime]) {
        table[mainActivityCreationTime] = true;
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  getAppStartInfo() {
    return callback(async () => {
      let obj = outer2_0(outer2_1[3]);
      const tmp = yield obj.getAppStartedTimestamp();
      if (tmp <= 0) {
        const _Error = Error;
        const error = new Error("NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!");
        throw error;
      } else {
        const items = [outer2_0(outer2_1[3]).getAppStartType(), , ];
        const obj5 = outer2_0(outer2_1[3]);
        items[1] = outer2_0(outer2_1[3]).getLaunchScenario();
        const obj6 = outer2_0(outer2_1[3]);
        items[2] = outer2_0(outer2_1[3]).getAppFirstVisibleTimestamp();
        const tmp3 = outer2_2(yield Promise.all(items), 3);
        obj = {};
        [obj2.app_start_type, obj2.app_launch_scenario] = tmp3;
        const obj7 = outer2_0(outer2_1[3]);
        const mainActivityCreationTime = outer2_0(outer2_1[2]).getMainActivityCreationTime();
        if (null != mainActivityCreationTime) {
          obj.android_time_creation_to_create_main_activity = mainActivityCreationTime - tmp;
        }
        obj = { appCreatedTime: tmp, appFirstVisibleTime: tmp3[2] };
        obj.extraProperties = obj;
        return obj;
      }
    })();
  }
};
