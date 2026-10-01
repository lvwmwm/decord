// Module ID: 9022
// Function ID: 9023
// Name: useGuildEmbeddedApplications
// Dependencies: [5, 19, 5063, 1074, 504, 1091, 1370, 6584, 2]
// Exports: useGuildEmbeddedApplications

// Module 9022 (useGuildEmbeddedApplications)
import Constants from "Constants" /* 1074 */;
import DurationsDefault from "Durations" /* 1091 */;
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6584 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import get_initialized from "get initialized" /* 504 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let application, c3, c4, status;

const QueryIds = Constants.QueryIds;
let obj = {
  getQueryId: QueryIds.GUILD_EMBEDDED_APPLICATIONS,
  failureStaleAfter: DurationsDefault.Seconds.MINUTE,
  get(arg0, arg1) {
    let tmp2 = ApplicationStore;
    const getGuildEmbeddedApplications = ApplicationStore.getGuildEmbeddedApplications;
    const guildEmbeddedApplications = getGuildEmbeddedApplications(arg1, arg0);
    let found = null;
    if (null != guildEmbeddedApplications) {
      const mapped = guildEmbeddedApplications.map((status) => {
        status = status.status;
        application = application.getApplication(status.applicationId);
        let tmp2 = null;
        if (null != application) {
          tmp2 = { application, status };
          const obj = { application, status };
        }
        return tmp2;
      });
      found = mapped.filter(require("GlobalUtils").isNotNullish);
    }
    return found;
  },
  load: function() {
    return closure_3(...arguments);
  }
};
const createFetchStore = get_initialized.createFetchStore;
let closure_3 = _asyncToGenerator(async (arg0, value, arg2) => {
  let closure_0;
  let closure_2;
  let obj2;
  let closure_1 = value;
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp2 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null != closure_1) {
          c4 = 1;
          c3 = 1;
          const obj5 = { value: obj2.getEmbeddedApplicationsForGuild(tmp5, tmp4, tmp6), done: false };
          obj2 = ApplicationActionCreatorsDefault;
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c3 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp10) {
      c3 = 3;
      throw tmp10;
    }
  }
});
let closure_6 = createFetchStore(ApplicationStore, obj);
const result = size.fileFinishedImporting("modules/applications/useGuildEmbeddedApplications.tsx");

export const useGuildEmbeddedApplications = function useGuildEmbeddedApplications(APP_CHANNEL, guildId, channelId) {
  let tmp = closure_6(APP_CHANNEL, guildId, channelId);
  const data = tmp.data;
  const error = tmp.error;
  const isLoading = tmp.isLoading;
  const refetch = tmp.refetch;
  let closure_4 = react.useRef(false);
  const items = [data, isLoading, error, refetch];
  const effect = react.useEffect(() => {
    if (null != data) {
      ref.current = true;
    } else {
      let current = ref.current;
      const tmp = ref;
      if (current) {
        current = !isLoading;
      }
      if (current) {
        current = null == error;
      }
      if (current) {
        tmp.current = false;
        refetch();
      }
    }
  }, items);
  return tmp;
};
