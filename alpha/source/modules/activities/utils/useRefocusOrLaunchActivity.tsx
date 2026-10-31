// Module ID: 14675
// Function ID: 14676
// Name: useRefocusOrLaunchActivity
// Dependencies: [5, 19, 6846, 4862, 6847, 6881, 504, 10928, 11697, 11692, 2]
// Exports: default

// Module 14675 (useRefocusOrLaunchActivity)
import FramesConstants from "FramesConstants" /* 6847 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import FramesStore from "FramesStore" /* 6846 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import size from "module_2" /* 2 */;

let c4;

const FrameLayoutModes = FramesConstants.FrameLayoutModes;
let result = size.fileFinishedImporting("modules/activities/utils/useRefocusOrLaunchActivity.tsx");

export default function useRefocusOrLaunchActivity(applicationId) {
  applicationId = applicationId.applicationId;
  let analyticsLocations = applicationId.analyticsLocations;
  let runBeforeLaunchAttempt = applicationId.runBeforeLaunchAttempt;
  const runAfterLaunchAttempt = applicationId.runAfterLaunchAttempt;
  let stateFromStores1;
  let obj = applicationId(runBeforeLaunchAttempt[5]);
  const data = obj.useApplication(applicationId).data;
  let obj2 = applicationId(runBeforeLaunchAttempt[6]);
  const items = [stateFromStores1];
  const stateFromStores = obj2.useStateFromStores(items, () => stateFromStores1.getCurrentEmbeddedActivity());
  let obj3 = applicationId(runBeforeLaunchAttempt[6]);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
                    const obj5 = analyticsLocations(runBeforeLaunchAttempt[7]);
                    const result = obj5.updateFrameLayoutMode(obj6);
                  }
                }
                if (tmp7) {
                  const _location = tmp32.location;
                  let guild_id = null;
                  const tmp15 = analyticsLocations(runBeforeLaunchAttempt[8]);
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
                  const obj2 = analyticsLocations(runBeforeLaunchAttempt[9]);
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
        return { value: "HermesInternal", done: "HermesInternal" };
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
};
