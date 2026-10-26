// Module ID: 14131
// Function ID: 14132
// Name: useRefocusOrLaunchActivity
// Dependencies: [5, 19, 6775, 4822, 6776, 558, 576, 6809, 504, 10767, 11364, 11360, 2]

// Module 14131 (useRefocusOrLaunchActivity)
import FramesConstants from "FramesConstants" /* 6776 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6775 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c4;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useRefocusOrLaunchActivity(applicationId) {
  let runBeforeLaunchAttempt;
  let stateFromStores1;
  let tmp4;
  let tmp5;
  let tmp8;
  let tmp9;
  const tmp = applicationId;
  let obj = applicationId(runBeforeLaunchAttempt[6]);
  const cResult = obj.c(12);
  applicationId = applicationId.applicationId;
  let analyticsLocations = applicationId.analyticsLocations;
  runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let obj2 = applicationId(runBeforeLaunchAttempt[7]);
  const data = obj2.useApplication(applicationId).data;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [stateFromStores1];
    const fn = function s() {
      return stateFromStores1.getCurrentEmbeddedActivity();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(runBeforeLaunchAttempt[8]);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stateFromStores];
    class F {
      constructor() {
        return stateFromStores.getMainFrame();
      }
    }
    cResult[2] = items1;
    cResult[3] = F;
    tmp9 = F;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult2 = tmp(runBeforeLaunchAttempt[8]);
  stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp9);
  if (cResult[4] === analyticsLocations) {
    if (cResult[5] === data) {
      if (cResult[6] === applicationId) {
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === stateFromStores1) {
            if (cResult[9] === runAfterLaunchAttempt) {
              let tmp12;
              if (cResult[10] === runBeforeLaunchAttempt) {
                tmp12 = cResult[11];
              }
              return tmp12;
            }
          }
        }
      }
    }
  }
  let closure_0 = runAfterLaunchAttempt(function*(arg0, value) {
    let closure_0;
    let closure_2;
    let obj2;
    let v0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === analyticsLocations) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            applicationId = tmp;
            if (null != applicationId) {
              if (null != c4) {
                const tmp7 = null != stateFromStores && tmp32.applicationId === tmp30;
                if (null != stateFromStores1) {
                  if (stateFromStores1.applicationId === applicationId) {
                    const obj6 = { frameId: stateFromStores1.id, layoutMode: constants.FOCUSED };
                    const obj5 = analyticsLocations(runBeforeLaunchAttempt[9]);
                    const result = obj5.updateFrameLayoutMode(obj6);
                  }
                }
                if (tmp7) {
                  const _location = tmp32.location;
                  let guild_id = null;
                  const tmp15 = analyticsLocations(runBeforeLaunchAttempt[10]);
                  if ("guild_id" in _location) {
                    guild_id = _location.guild_id;
                  }
                  tmp15(guild_id, _location);
                } else {
                  if (tmp22 != null) {
                    tmp22();
                  }
                  c3 = 1;
                  const obj7 = { applicationId, analyticsLocations };
                  analyticsLocations = 2;
                  c4 = 1;
                  const obj8 = { value: obj2.launch(obj7), done: false };
                  obj2 = analyticsLocations(runBeforeLaunchAttempt[11]);
                  return obj8;
                }
              }
            }
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          if (c3 != null) {
            c3();
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: "+352" };
      } catch (tmp22) {
        if (0 === c3) {
          c4 = 3;
          throw tmp22;
        } else {
          analyticsLocations = 1;
        }
      }
    }
  });
  function t5() {
    return applicationId(...arguments);
  }
  cResult[4] = analyticsLocations;
  cResult[5] = data;
  cResult[6] = applicationId;
  cResult[7] = stateFromStores;
  cResult[8] = stateFromStores1;
  cResult[9] = runAfterLaunchAttempt;
  cResult[10] = runBeforeLaunchAttempt;
  cResult[11] = t5;
  tmp12 = t5;
}) : (function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  let analyticsLocations = applicationId.analyticsLocations;
  let runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let stateFromStores1;
  let obj = applicationId(runBeforeLaunchAttempt[7]);
  const data = obj.useApplication(applicationId).data;
  let obj2 = applicationId(runBeforeLaunchAttempt[8]);
  const items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getCurrentEmbeddedActivity());
  let obj3 = applicationId(runBeforeLaunchAttempt[8]);
  const items1 = [stateFromStores];
  stateFromStores1 = obj3.useStateFromStores(items1, () => stateFromStores.getMainFrame());
  const items2 = [analyticsLocations, data, applicationId, stateFromStores, stateFromStores1, runAfterLaunchAttempt, runBeforeLaunchAttempt];
  return data.useCallback(runAfterLaunchAttempt(function*(arg0, value) {
    let closure_2;
    let v1;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === analyticsLocations) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_0 = tmp;
            if (null != applicationId) {
              if (null != data) {
                const tmp7 = null != stateFromStores && tmp32.applicationId === tmp30;
                if (null != stateFromStores1) {
                  if (stateFromStores1.applicationId === applicationId) {
                    const obj6 = { frameId: stateFromStores1.id, layoutMode: constants.FOCUSED };
                    const obj5 = analyticsLocations(runBeforeLaunchAttempt[9]);
                    const result = obj5.updateFrameLayoutMode(obj6);
                  }
                }
                if (tmp7) {
                  const _location = tmp32.location;
                  let guild_id = null;
                  const tmp15 = analyticsLocations(runBeforeLaunchAttempt[10]);
                  if ("guild_id" in _location) {
                    guild_id = _location.guild_id;
                  }
                  tmp15(guild_id, _location);
                } else {
                  if (runBeforeLaunchAttempt != null) {
                    runBeforeLaunchAttempt();
                  }
                  c3 = 1;
                  const obj7 = { applicationId, analyticsLocations };
                  const obj2 = analyticsLocations(runBeforeLaunchAttempt[11]);
                  analyticsLocations = 2;
                  c4 = 1;
                  const obj8 = { value: obj2.launch(obj7), done: false };
                  return obj8;
                }
              }
            }
          }
        } else {
          if (1 === tmp4) {
            c3 = 0;
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          if (closure_128_3 != null) {
            closure_128_3();
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: "+352" };
      } catch (tmp22) {
        runBeforeLaunchAttempt = tmp22;
        if (0 === c3) {
          c4 = 3;
          throw tmp22;
        } else {
          analyticsLocations = 1;
        }
      }
    }
  }), items2);
});
let result = size.fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default tmp2;
