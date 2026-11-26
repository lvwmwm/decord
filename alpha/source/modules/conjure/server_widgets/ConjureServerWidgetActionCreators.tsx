// Module ID: 14994
// Function ID: 14995
// Name: ConjureServerWidgetActionCreators
// Dependencies: [5, 502, 14992, 1071, 572, 1285, 6935, 2]
// Exports: fetchConjureServerProfileWidgets

// Module 14994 (ConjureServerWidgetActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1071 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6935 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConjureServerWidgetStore from "ConjureServerWidgetStore" /* 14992 */;
import size from "module_2" /* 2 */;

let c3, c4;

let obj = function _fetchConjureServerProfileWidgets() {
  let fetchState;
  let id;
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0;
    let obj6;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      let c2;
      try {
        let id2;
        let body;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            id2 = undefined;
            body = undefined;
            if ("loading" !== fetchState.getFetchState()) {
              id2 = id.getId();
              const obj5 = DispatcherDefault;
              obj5.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_START" });
              c2 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: constants.CONJURE_PROJECTS, query: obj6, rejectWithError: true };
              obj6 = { supported_surfaces: ConjureProjectTypes.ConjureSupportedSurface.PROFILE_WIDGET, installed: true };
              const get = HTTP.get;
              c3 = 2;
              c4 = 1;
              const obj7 = { value: get(request), done: false };
              return obj7;
            }
          }
        } else if (1 === tmp4) {
          c2 = 0;
          if (closure_129_4.getId() !== id2) {
            c4 = 3;
            return { value: "HermesInternal", done: "+95" };
          } else {
            const obj4 = closure_129_1(closure_129_2[4]);
            obj4.dispatch({ type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_FAIL" });
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          body = value.body;
          if (closure_129_4.getId() !== id2) {
            c2 = 0;
            c4 = 3;
            return { value: "HermesInternal", done: "+95" };
          } else {
            const obj9 = { type: "CONJURE_SERVER_PROFILE_WIDGETS_FETCH_SUCCESS", projects: body };
            obj = closure_129_1(closure_129_2[4]);
            obj.dispatch(obj9);
            c2 = 0;
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: "+95" };
      } catch (tmp27) {
        if (0 === c2) {
          c4 = 3;
          throw tmp27;
        } else {
          c3 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/conjure/server_widgets/ConjureServerWidgetActionCreators.tsx");

export function fetchConjureServerProfileWidgets() {
  return obj(...arguments);
}
