// Module ID: 10817
// Function ID: 10818
// Name: fetchDeveloperApplications
// Dependencies: [5, 2022, 1085, 584, 1295, 2]
// Exports: fetchDeveloperApplications

// Module 10817 (fetchDeveloperApplications)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1295 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import size from "module_2" /* 2 */;

let c4, c5;

let obj = function _fetchDeveloperApplications() {
  obj = _asyncToGenerator(async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c3;
      let applications;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp;
            closure_0 = undefined;
            applications = undefined;
            c3 = 1;
            const obj10 = DispatcherDefault;
            obj10.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_START" });
            const HTTP = HTTPUtils.HTTP;
            const request = { url: constants.APPLICATIONS_WITH_ASSETS, query: { with_team_applications: true }, oldFormErrors: true, rejectWithError: true };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.get(request), done: false };
            return obj5;
          }
        } else {
          if (1 === c4) {
            c3 = 0;
            const obj2 = closure_129_1(closure_129_2[3]);
            obj2.dispatch({ type: "DEVELOPER_ACTIVITY_SHELF_FETCH_FAIL" });
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = value;
            applications = closure_0.body.applications;
            applications = applications.map((item) => closure_1_4.createFromServer(item));
            const obj7 = { type: "DEVELOPER_ACTIVITY_SHELF_FETCH_SUCCESS", applications, assets: closure_0.body.assets };
            const obj6 = closure_129_1(closure_129_2[3]);
            obj6.dispatch(obj7);
            const obj9 = { type: "APPLICATIONS_FETCH_SUCCESS", applications };
            const obj8 = closure_129_1(closure_129_2[3]);
            obj8.dispatch(obj9);
            c3 = 0;
          }
          c5 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp10) {
        applications = tmp10;
        if (0 === c3) {
          c5 = 3;
          throw tmp10;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/activities/fetchDeveloperApplications.tsx");

export const fetchDeveloperApplications = function fetchDeveloperApplications() {
  return obj(...arguments);
};
