// Module ID: 14478
// Function ID: 14479
// Name: LibraryApplicationStatisticsStore
// Dependencies: [1072, 504, 572, 2]

// Module 14478 (LibraryApplicationStatisticsStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

let closure_1;

const Distributors = Constants.Distributors;
let c2 = null;
let c3 = false;
const Store = get_initializedDefault.Store;
class LibraryApplicationStatisticsStore extends Store {
  getGameDuration(item) {
    let num = 0;
    if (null != closure_1[item]) {
      num = tmp.total_duration;
    }
    return num;
  }
  getLastPlayedDateTime(item) {
    let time = null;
    if (null != closure_1[item]) {
      const _Date = Date;
      const self = this;
      const self2 = this;
      const date = new Date(closure_1[item].last_played_at);
      time = date.getTime();
    }
    return time;
  }
  hasApplicationStatistic(arg0) {
    return null != closure_1[arg0];
  }
  getCurrentUserStatisticsForApplication(arg0) {
    return closure_1[arg0];
  }
  getQuickSwitcherScoreForApplication(arg0) {
    let num = 0;
    if (null != closure_1[arg0]) {
      const _Date = Date;
      const _Date2 = Date;
      const self = this;
      const self2 = this;
      const timestamp = Date.now();
      const _Math = Math;
      const date = new Date(closure_1[arg0].last_played_at);
      const rounded = Math.floor((timestamp - date.getTime()) / 86400000);
      const _Math2 = Math;
      const rounded1 = Math.floor(1000 * tmp.total_duration / 3600000);
      let num6 = 50;
      if (0 !== rounded) {
        if (rounded < 1) {
          if (rounded < 2) {
            if (rounded < 4) {
              num6 = 0;
              if (rounded >= 7) {
                num6 = 10;
              }
            } else {
              num6 = 20;
            }
          } else {
            num6 = 30;
          }
        } else {
          num6 = 40;
        }
      }
      if (0 === rounded1) {
        num = num6;
      } else {
        if (rounded1 >= 1) {
          if (rounded1 < 12) {
            num = num6 + 10;
          }
        }
        if (rounded1 >= 12) {
          if (rounded1 < 168) {
            num = num6 + 20;
          }
        }
        if (rounded1 >= 168) {
          if (rounded1 < 720) {
            num = num6 + 40;
          }
        }
        num = num6;
        if (rounded1 >= 720) {
          num = num6 + 50;
        }
      }
    }
    return num;
  }
}
const prototype = LibraryApplicationStatisticsStore.prototype;
Object.defineProperty(prototype, "applicationStatistics", {
  get: function applicationStatistics() {
    return closure_1;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastFetched", {
  get: function lastFetched() {
    return c2;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasFetchFailed", {
  get: function hasFetchFailed() {
    return c3;
  },
  set: undefined
});
LibraryApplicationStatisticsStore.displayName = "LibraryApplicationStatisticsStore";
const obj = {
  USER_ACTIVITY_STATISTICS_FETCH_SUCCESS: function handleCurrentUserStatisticFetch(statistics) {
    statistics = statistics.statistics;
    const item = statistics.forEach((application_id) => {
      closure_1_1[application_id.application_id] = application_id;
    });
    c2 = Date.now();
    c3 = false;
  },
  USER_ACTIVITY_STATISTICS_FETCH_FAIL: function handleCurrentUserStatisticFetchFail() {
    c3 = true;
  },
  ACTIVITY_UPDATE_START: function handleActivityUpdate(distributor) {
    let applicationId;
    let duration;
    let total_discord_sku_duration;
    let total_duration;
    ({ duration, applicationId } = distributor);
    distributor = distributor.distributor;
    let num = 0;
    let num2 = 0;
    const date = new Date();
    const toISOStringResult = date.toISOString();
    if (null != closure_1[applicationId]) {
      ({ total_discord_sku_duration, total_duration } = closure_1[applicationId]);
      if (total_discord_sku_duration == null) {
        total_discord_sku_duration = 0;
      }
      num = total_discord_sku_duration;
      num2 = total_duration;
    }
    let sum1 = num;
    const sum = num2 + duration;
    if (distributor === Distributors.DISCORD) {
      sum1 = num + duration;
    }
    closure_1[applicationId] = { application_id: applicationId, total_duration: sum, last_played_at: toISOStringResult, total_discord_sku_duration: sum1 };
  },
  LOGOUT: function resetStore() {
    closure_1 = {};
    c2 = null;
    c3 = false;
  }
};
const libraryApplicationStatisticsStore = new LibraryApplicationStatisticsStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/game_library/LibraryApplicationStatisticsStore.tsx");

export default libraryApplicationStatisticsStore;
