// Module ID: 14447
// Function ID: 14448
// Name: LibraryApplicationStatisticsActionCreators
// Dependencies: [5, 14446, 1071, 1088, 1284, 572, 2]
// Exports: fetchActivityStatistics

// Module 14447 (LibraryApplicationStatisticsActionCreators)
import Constants from "Constants" /* 1071 */;
import DurationsDefault from "Durations" /* 1088 */;
import HTTPUtils from "HTTPUtils" /* 1284 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import LibraryApplicationStatisticsStore from "LibraryApplicationStatisticsStore" /* 14446 */;
import size from "module_2" /* 2 */;

let c4, c5, closure_2, lastFetched;

let obj = function _fetchActivityStatistics() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj7;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        let body;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            value = tmp;
            body = undefined;
            lastFetched = lastFetched.lastFetched;
            if (null != lastFetched) {
              const _Date = Date;
            }
            c3 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: constants.USER_ACTIVITY_STATISTICS, oldFormErrors: true, rejectWithError: obj7.rejectWithMigratedError() };
            const get = HTTP.get;
            obj7 = HTTPUtils;
            c4 = 2;
            c5 = 1;
            const obj6 = { value: get(obj5), done: false };
            return obj6;
          }
        } else if (1 === c4) {
          c3 = 0;
          value = closure_2;
          const obj4 = closure_129_1(closure_129_2[5]);
          obj4.dispatch({ type: "USER_ACTIVITY_STATISTICS_FETCH_FAIL" });
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body = value;
          const obj10 = { type: "USER_ACTIVITY_STATISTICS_FETCH_SUCCESS", statistics: body.body };
          obj = closure_129_1(closure_129_2[5]);
          obj.dispatch(obj10);
          c3 = 0;
        }
        c5 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp23) {
        closure_2 = tmp23;
        if (0 === c3) {
          c5 = 3;
          throw tmp23;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let closure_6 = 6 * DurationsDefault.Millis.HOUR;
const result = size.fileFinishedImporting("actions/LibraryApplicationStatisticsActionCreators.tsx");

export function fetchActivityStatistics() {
  return obj(...arguments);
}
