// Module ID: 5461
// Function ID: 46606
// Name: fetchApplication
// Dependencies: []
// Exports: useApplicationWithLoggedOutContext

// Module 5461 (fetchApplication)
function fetchApplication() {
  return _fetchApplication(...arguments);
}
async function _fetchApplication(arg0, arg1) {
  const fn = function*(applicationId, arg1, signal) {
    let flag = arg1;
    if (flag === undefined) {
      flag = false;
    }
    yield undefined;
    let obj = callback2(closure_2[5]);
    obj = { type: "APPLICATION_FETCH", applicationId };
    obj.dispatch(obj);
    const HTTP = callback(closure_2[6]).HTTP;
    obj = { url: closure_7.APPLICATION_PUBLIC(applicationId), query: obj1, oldFormErrors: true, signal };
    const obj1 = { with_guild: flag };
    obj.rejectWithError = callback(closure_2[6]).rejectWithMigratedError();
    const tmp3 = yield HTTP.get(obj);
    const obj5 = callback(closure_2[6]);
    const obj2 = { backgroundColor: "rgba(0, 0, 0, 0.5)", height: 24, overflow: "flex", application: tmp3.body };
    callback2(closure_2[5]).dispatch(obj2);
    return tmp3.body;
  };
  fn.next();
  return fn;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
const importDefaultResult = importDefault(dependencyMap[3]);
const tmp3 = arg1(dependencyMap[4]);
({ Endpoints: closure_7, NOOP: closure_8 } = tmp3);
let obj = {
  createApplication(arg0) {
    ({ name: closure_0, guildId: closure_1, type: closure_2, teamId: closure_3 } = arg0);
    return callback(async () => {
      const HTTP = callback(closure_2[6]).HTTP;
      let obj = { url: constants.APPLICATIONS, body: obj };
      obj = { name: callback, type: closure_2, guild_id: callback2, team_id: closure_3, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.post(obj).body;
      let tmp = null != callback2;
      if (tmp) {
        tmp = null != closure_2;
      }
      if (tmp) {
        obj = { type: "APPLICATION_FETCH_SUCCESS", application: body };
        callback2(closure_2[5]).dispatch(obj);
        const obj4 = callback2(closure_2[5]);
      }
      return body;
    })();
  },
  getApplicationsForGuild(arg0, arg1) {
    let obj = arg1;
    arg1 = arg0;
    if (arg1 === undefined) {
      obj = {};
    }
    const importDefault = obj.includeTeam;
    obj = Object.create(null);
    obj.includeTeam = 0;
    let closure_2 = Object.assign(obj, obj);
    return callback(async () => {
      const HTTP = callback(closure_2[6]).HTTP;
      let obj = { url: closure_7.GUILD_APPLICATIONS(callback) };
      obj = {};
      const merged = Object.assign(closure_2);
      obj["include_team"] = callback2;
      obj.query = obj;
      obj.rejectWithError = callback(closure_2[6]).rejectWithMigratedError();
      const body = yield HTTP.get(obj).body;
      const obj3 = callback(closure_2[6]);
      callback2(closure_2[5]).dispatch({ type: "APPLICATIONS_FETCH_SUCCESS", applications: body });
      return body;
    })();
  },
  transferApplication(arg0) {
    ({ applicationId: closure_0, teamId: closure_1 } = arg0);
    return callback(async () => {
      const HTTP = callback(closure_2[6]).HTTP;
      let obj = { url: closure_7.APPLICATION_OWNER_TRANSFER(callback), body: obj };
      obj = { team_id: callback2, rejectWithError: callback(closure_2[6]).rejectWithMigratedError() };
      const body = yield HTTP.post(obj).body;
      const obj3 = callback(closure_2[6]);
      callback2(closure_2[5]).dispatch({ type: "APPLICATION_FETCH_SUCCESS", application: body });
      return body;
    })();
  },
  fetchApplications(arg0) {
    let flag = arg1;
    const arg1 = arg0;
    if (arg1 === undefined) {
      flag = true;
    }
    const importDefault = flag;
    return callback(async () => {
      let set;
      let found = set;
      if (!callback) {
        found = set.filter((applicationId) => {
          let isHydratedResult = null != closure_6.getApplication(applicationId);
          if (isHydratedResult) {
            isHydratedResult = closure_6.isHydrated(applicationId);
          }
          let tmp3 = !isHydratedResult;
          if (tmp3) {
            tmp3 = !closure_6.isFetchingApplication(applicationId);
          }
          if (tmp3) {
            tmp3 = !closure_6.didFetchingApplicationFail(applicationId);
          }
          if (tmp3) {
            tmp3 = applicationId.length > 0;
          }
          return tmp3;
        });
      }
      if (found.length > 0) {
        let obj = { type: "APPLICATIONS_FETCH", applicationIds: found };
        callback(closure_2[5]).dispatch(obj);
        const HTTP = set(closure_2[6]).HTTP;
        obj = { url: constants.APPLICATIONS_PUBLIC };
        const _URLSearchParams = URLSearchParams;
        const str3 = new URLSearchParams(found.map((arg0) => {
          const items = [-0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000023534382787558376, arg0];
          return items;
        }));
        obj.query = str3.toString();
        obj.oldFormErrors = true;
        const obj3 = callback(closure_2[5]);
        obj.rejectWithError = set(closure_2[6]).rejectWithMigratedError();
        const tmp25 = yield HTTP.get(obj);
        const body = tmp25.body;
        const _Set = Set;
        set = new Set(body.map((id) => id.id));
        const found1 = found.filter((arg0) => !set.has(arg0));
        obj = callback(closure_2[5]);
        const obj1 = { type: "APPLICATIONS_FETCH_SUCCESS", applications: tmp25.body, unknownApplicationIds: found1, isHydrated: true };
        obj.dispatch(obj1);
        const obj6 = set(closure_2[6]);
      }
    })();
  },
  fetchApplication
};
obj = {
  getQueryId: tmp3.QueryIds.APPLICATIONS,
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
const fetchStore = arg1(dependencyMap[7]).createFetchStore(importDefaultResult, obj);
const obj2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/applications/ApplicationActionCreators.tsx");

export default obj;
export { fetchApplication };
export const useApplication = fetchStore;
export const useApplicationWithLoggedOutContext = function useApplicationWithLoggedOutContext(arg0) {
  const arg1 = arg0;
  let tmp;
  const tmp2 = fetchStore(arg0);
  const data = tmp2.data;
  const importDefault = data;
  const error = tmp2.error;
  const obj = {};
  const items = [closure_4];
  const items1 = [arg0, data];
  obj.app = arg1(dependencyMap[7]).useStateFromStores(items, () => {
    if (null == data) {
      const application = application.getApplication(arg0);
      if (null != application) {
        return closure_5.createFromServer(application);
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
