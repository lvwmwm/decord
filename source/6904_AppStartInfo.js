// Module ID: 6904
// Function ID: 55005
// Name: AppStartInfo
// Dependencies: []

// Module 6904 (AppStartInfo)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = {};
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/tti_analytics/native/AppStartInfo.android.tsx");

export const AppStartInfo = {
  getAppUIViewed() {
    const mainActivityCreationTime = importDefault(dependencyMap[2]).getMainActivityCreationTime();
    let tmp2 = null != mainActivityCreationTime;
    if (tmp2) {
      let flag = !tmp4;
      if (!closure_4[mainActivityCreationTime]) {
        closure_4[mainActivityCreationTime] = true;
        flag = false;
      }
      tmp2 = flag;
    }
    return tmp2;
  },
  getAppStartInfo() {
    return callback(async () => {
      let obj = callback(closure_1[3]);
      const tmp = yield obj.getAppStartedTimestamp();
      if (tmp <= 0) {
        const _Error = Error;
        const error = new Error("NativeTTIManager.getAppStartedTimestamp() returned an invalid timestamp. That's unexpected!");
        throw error;
      } else {
        const items = [callback(closure_1[3]).getAppStartType(), , ];
        const obj5 = callback(closure_1[3]);
        items[1] = callback(closure_1[3]).getLaunchScenario();
        const obj6 = callback(closure_1[3]);
        items[2] = callback(closure_1[3]).getAppFirstVisibleTimestamp();
        const tmp3 = callback2(yield Promise.all(items), 3);
        obj = {};
        [obj2.app_start_type, obj2.app_launch_scenario] = tmp3;
        const obj7 = callback(closure_1[3]);
        const mainActivityCreationTime = callback(closure_1[2]).getMainActivityCreationTime();
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
