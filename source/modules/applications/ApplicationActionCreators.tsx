// Module ID: 5463
// Function ID: 46680
// Name: fetchApplication
// Dependencies: [5, 5464, 4153, 4167, 653, 686, 507, 566, 2]
// Exports: useApplicationWithLoggedOutContext

// Module 5463 (fetchApplication)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _callSuper from "_callSuper";
import importDefaultResult from "_isNativeReflectConstruct";
import ME from "ME";
import initialize from "initialize";

let closure_7;
let closure_8;
const require = arg1;
function fetchApplication() {
  return _fetchApplication(...arguments);
}
async function _fetchApplication(arg0, arg1) {
  let iter = (function*(applicationId, arg1, signal) {
    let flag = arg1;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    let obj = outer2_1(outer2_2[5]);
    obj = { type: "APPLICATION_FETCH", applicationId };
    obj.dispatch(obj);
    const HTTP = outer2_0(outer2_2[6]).HTTP;
    obj = { url: outer2_7.APPLICATION_PUBLIC(applicationId), query: obj1, oldFormErrors: true, signal };
    obj1 = { with_guild: flag };
    obj.rejectWithError = outer2_0(outer2_2[6]).rejectWithMigratedError();
    const tmp3 = yield HTTP.get(obj);
    const obj5 = outer2_0(outer2_2[6]);
    const obj2 = { type: "APPLICATION_FETCH_SUCCESS", application: tmp3.body, isHydrated: true };
    outer2_1(outer2_2[5]).dispatch(obj2);
    return tmp3.body;
  })();
  iter.next();
  return iter;
}
({ Endpoints: closure_7, NOOP: closure_8 } = ME);
let obj = {
  createApplication(arg0) {
    let dispatcher;
    let dependencyMap;
    let importDefault;
    let require;
    ({ name: require, guildId: importDefault, type: dependencyMap, teamId: dispatcher } = arg0);
    return callback(async () => {
      const HTTP = outer2_0(outer2_2[6]).HTTP;
      obj = { url: outer2_7.APPLICATIONS, body: obj };
      obj = { name: outer1_0, type: outer1_2, guild_id: outer1_1, team_id: outer1_3, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.post(obj).body;
      let tmp = null != outer1_1;
      if (tmp) {
        tmp = null != outer1_2;
      }
      if (tmp) {
        obj = { type: "APPLICATION_FETCH_SUCCESS", application: body };
        outer2_1(outer2_2[5]).dispatch(obj);
        const obj4 = outer2_1(outer2_2[5]);
      }
      return body;
    })();
  },
  getApplicationsForGuild(arg0, arg1) {
    let obj = arg1;
    let closure_0 = arg0;
    if (arg1 === undefined) {
      obj = {};
    }
    const includeTeam = obj.includeTeam;
    obj = Object.create(null);
    obj.includeTeam = 0;
    let closure_2 = Object.assign(obj, obj);
    return callback(async () => {
      const HTTP = callback(507).HTTP;
      let obj = { url: outer2_7.GUILD_APPLICATIONS(outer1_0) };
      obj = {};
      const merged = Object.assign(outer1_2);
      obj["include_team"] = outer1_1;
      obj.query = obj;
      obj.rejectWithError = callback(507).rejectWithMigratedError();
      const body = yield HTTP.get(obj).body;
      const obj3 = callback(507);
      includeTeam(686).dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: body });
      return body;
    })();
  },
  transferApplication(arg0) {
    let importDefault;
    let require;
    ({ applicationId: require, teamId: importDefault } = arg0);
    return callback(async () => {
      const HTTP = outer2_0(outer2_2[6]).HTTP;
      obj = { url: outer2_7.APPLICATION_OWNER_TRANSFER(outer1_0), body: obj };
      obj = { team_id: outer1_1, rejectWithError: outer2_0(outer2_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.post(obj).body;
      const obj3 = outer2_0(outer2_2[6]);
      outer2_1(outer2_2[5]).dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: body });
      return body;
    })();
  },
  fetchApplications(arg0) {
    let flag = arg1;
    let closure_0 = arg0;
    if (arg1 === undefined) {
      flag = true;
    }
    return callback(async () => {
      let set;
      let found = outer1_0;
      if (!outer1_1) {
        found = outer1_0.filter((applicationId) => {
          let isHydratedResult = null != outer3_6.getApplication(applicationId);
          if (isHydratedResult) {
            isHydratedResult = outer3_6.isHydrated(applicationId);
          }
          let tmp3 = !isHydratedResult;
          if (tmp3) {
            tmp3 = !outer3_6.isFetchingApplication(applicationId);
          }
          if (tmp3) {
            tmp3 = !outer3_6.didFetchingApplicationFail(applicationId);
          }
          if (tmp3) {
            tmp3 = applicationId.length > 0;
          }
          return tmp3;
        });
      }
      if (found.length > 0) {
        let obj = { type: "APPLICATIONS_FETCH", applicationIds: found };
        flag(outer2_2[5]).dispatch(obj);
        const HTTP = callback(outer2_2[6]).HTTP;
        obj = { url: outer2_7.APPLICATIONS_PUBLIC };
        const _URLSearchParams = URLSearchParams;
        const str3 = new URLSearchParams(found.map((arg0) => {
          const items = ["application_ids", arg0];
          return items;
        }));
        obj.query = str3.toString();
        obj.oldFormErrors = true;
        const obj3 = flag(outer2_2[5]);
        obj.rejectWithError = callback(outer2_2[6]).rejectWithMigratedError();
        const tmp25 = yield HTTP.get(obj);
        const body = tmp25.body;
        const _Set = Set;
        set = new Set(body.map((id) => id.id));
        const found1 = found.filter((arg0) => !set.has(arg0));
        obj = flag(outer2_2[5]);
        const obj1 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: tmp25.body, unknownApplicationIds: found1, isHydrated: true };
        obj.dispatch(obj1);
        const obj6 = callback(outer2_2[6]);
      }
    })();
  },
  fetchApplication
};
obj = {
  getQueryId: ME.QueryIds.APPLICATIONS,
  get(applicationId) {
    let tmp = null;
    if (null != applicationId) {
      tmp = null;
      if (importDefaultResult.isHydrated(applicationId)) {
        const application = importDefaultResult.getApplication(applicationId);
        tmp = null;
        if (null != application) {
          tmp = application;
        }
      }
    }
    return tmp;
  },
  load(arg0) {
    if (null != arg0) {
      let nextPromise = fetchApplication(arg0, false).then(closure_8);
      const promise = fetchApplication(arg0, false);
    } else {
      nextPromise = Promise.resolve();
    }
    return nextPromise;
  },
  getIsLoading(arg0) {
    let result = null != arg0;
    if (result) {
      result = importDefaultResult.isFetchingApplication(arg0);
    }
    return result;
  }
};
const fetchStore = initialize.createFetchStore(importDefaultResult, obj);
let result = require("_callSuper").fileFinishedImporting("modules/applications/ApplicationActionCreators.tsx");

export default obj;
export { fetchApplication };
export const useApplication = fetchStore;
export const useApplicationWithLoggedOutContext = function useApplicationWithLoggedOutContext(arg0) {
  const _require = arg0;
  let tmp;
  const tmp2 = fetchStore(arg0);
  const data = tmp2.data;
  const error = tmp2.error;
  const obj = {};
  const items = [_isNativeReflectConstruct];
  const items1 = [arg0, data];
  obj.app = _require(566).useStateFromStores(items, () => {
    if (null == data) {
      const application = outer1_4.getApplication(closure_0);
      if (null != application) {
        return outer1_5.createFromServer(application);
      }
    }
    return data;
  }, items1);
  obj.isLoading = tmp2.isLoading;
  if (null != error) {
    tmp = error;
  }
  obj.error = tmp;
  return obj;
};
