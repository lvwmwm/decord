// Module ID: 10848
// Function ID: 10849
// Name: fetchShelf
// Dependencies: [5, 5440, 2022, 2064, 1085, 1388, 584, 5938, 1273, 2]
// Exports: fetchShelf

// Module 10848 (fetchShelf)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 5440 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2064 */;
import size from "module_2" /* 2 */;

let c8, c9, closure_4;

function handleFetchDone(arg0, fn, guildId) {
  guildId = guildId.guildId;
  let tmp = guildId === arg0;
  if (!tmp) {
    tmp = null == guildId && null == arg0;
  }
  if (tmp) {
    fn();
  }
}
let obj = function _fetchShelf() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let c0;
    let force;
    let obj11;
    let obj12;
    let closure_0 = arg0;
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c7;
      try {
        let guildId;
        let applications;
        let c4;
        let c5;
        let promise;
        let promise2;
        let obj9;
        let closure_9;
        let activityConfigs;
        let applications2;
        let assets;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_5 = tmp;
            const application = tmp4;
            guildId = undefined;
            force = undefined;
            ({ guildId: c0, force } = closure_0);
            if (force === undefined) {
              force = false;
            }
            applications = undefined;
            c4 = undefined;
            c5 = undefined;
            promise = undefined;
            promise2 = undefined;
            obj9 = undefined;
            closure_9 = undefined;
            activityConfigs = undefined;
            applications2 = undefined;
            assets = undefined;
            c8 = 1;
            c9 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              activityConfigs = closure_133_6.getShelfActivities(guildId);
              const mapped = activityConfigs.map((application_id) => application.getApplication(application_id.application_id));
              applications = mapped.filter(closure_133_0(closure_133_2[5]).isNotNullish);
              const tmp115 = force;
              if (!tmp115) {
                if (!closure_133_6.shouldFetchShelf(guildId)) {
                  const shelfFetchStatus = closure_133_6.getShelfFetchStatus(guildId);
                  let isFetching;
                  if (shelfFetchStatus != null) {
                    isFetching = shelfFetchStatus.isFetching;
                  }
                  if (isFetching) {
                    const self = this;
                    const self2 = this;
                    promise = new Promise((cache) => {
                      closure_4 = c8.bind(null, closure_1_0, cache);
                      obj = closure_1(activityConfigs[6]);
                      const subscription = obj.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", closure_4);
                    });
                    const self3 = this;
                    const self4 = this;
                    promise2 = new Promise((cache) => {
                      closure_5 = c8.bind(null, closure_1_0, cache);
                      obj = closure_1(activityConfigs[6]);
                      const subscription = obj.subscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", closure_5);
                    });
                    const items = [promise, promise2];
                    c8 = 3;
                    c9 = 1;
                    const obj6 = { value: Promise.race(items), done: false };
                    return obj6;
                  }
                }
              }
              c7 = 1;
              const obj7 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF", guildId };
              const obj17 = closure_133_1(closure_133_2[6]);
              obj17.dispatch(obj7);
              let tmp75;
              if (undefined !== guildId) {
                if ("" !== guildId) {
                  obj9 = { guild_id: guildId };
                  tmp75 = obj9;
                }
              }
              obj9 = tmp75;
              const request = { url: closure_133_7.ACTIVITY_SHELF, query: obj9, trackedActionData: obj11, retries: 0, oldFormErrors: true, rejectWithError: true };
              obj11 = { event: closure_133_0(closure_133_2[8]).NetworkActionNames.EMBEDDED_ACTIVITIES_FETCH_SHELF, properties: obj12 };
              const get = closure_133_1(closure_133_2[7]).get;
              const tmp83 = closure_133_1(closure_133_2[7]);
              obj12 = { guild_id: guildId };
              c8 = 4;
              c9 = 1;
              const obj13 = { value: get(request), done: false };
              return obj13;
            }
          } else if (2 === c8) {
            c7 = 0;
            const obj14 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", guildId };
            const obj10 = closure_133_1(closure_133_2[6]);
            obj10.dispatch(obj14);
            const obj15 = { activityConfigs, applications };
            c9 = 3;
            const obj16 = { value: obj15, done: true };
            return obj16;
          } else if (3 === c8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c9 = 3;
              const obj18 = { value, done: true };
              return obj18;
            } else {
              if (null != c4) {
                const obj8 = closure_133_1(closure_133_2[6]);
                obj8.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", c4);
                c4 = undefined;
              }
              if (null != c5) {
                const obj27 = closure_133_1(closure_133_2[6]);
                obj27.unsubscribe("EMBEDDED_ACTIVITY_FETCH_SHELF_FAIL", c5);
                c5 = undefined;
              }
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 0;
            c9 = 3;
            const obj19 = { value, done: true };
            return obj19;
          } else {
            closure_9 = value;
            const activities = closure_9.body.activities;
            let closure_1 = activities;
            if (activities == null) {
              closure_1 = [];
            }
            applications = closure_9.body.applications;
            activityConfigs = applications;
            if (applications == null) {
              activityConfigs = [];
            }
            applications2 = activityConfigs;
            assets = closure_9.body.assets;
            applications = assets;
            if (assets == null) {
              applications = {};
            }
            assets = applications;
            obj = closure_133_1(closure_133_2[6]);
            const obj20 = { type: "EMBEDDED_ACTIVITY_FETCH_SHELF_SUCCESS", guildId, activities: activityConfigs, applications: applications2, assets };
            obj.dispatch(obj20);
            if (applications2.length > 0) {
              const obj21 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: applications2 };
              const obj3 = closure_133_1(closure_133_2[6]);
              obj3.dispatch(obj21);
            }
            const obj22 = { activityConfigs, applications: applications2.map((item) => closure_5.createFromServer(item)) };
            c7 = 0;
            c9 = 3;
            const obj23 = { value: obj22, done: true };
            return obj23;
          }
          const obj24 = { activityConfigs, applications };
          c9 = 3;
          const obj25 = { value: obj24, done: true };
          return obj25;
        }
      } catch (tmp90) {
        let closure_6 = tmp90;
        if (0 === c7) {
          c9 = 3;
          throw tmp90;
        } else {
          c8 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/activities/fetchShelf.tsx");

export const fetchShelf = function fetchShelf() {
  return obj(...arguments);
};
