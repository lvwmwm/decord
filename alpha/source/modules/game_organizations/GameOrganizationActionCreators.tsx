// Module ID: 16282
// Function ID: 16283
// Name: GameOrganizationActionCreators
// Dependencies: [5, 2140, 1072, 572, 1282, 12275, 6694, 2]
// Exports: fetchGameOrganization, fetchLinkableGameOrganizations

// Module 16282 (GameOrganizationActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationRecord from "ApplicationRecord" /* 2140 */;
import size from "module_2" /* 2 */;

let application, closure_3, gameOrganization;

let obj = function _fetchGameOrganization() {
  obj = _asyncToGenerator(async (guildId) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function(arg0, value) {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c4;
        try {
          let body;
          let game_organization;
          let aPIError;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              body = undefined;
              game_organization = undefined;
              gameOrganization = undefined;
              application = undefined;
              aPIError = undefined;
              if (null != guildId) {
                const obj6 = { type: "GAME_ORGANIZATION_FETCH_START", guildId };
                const obj4 = DispatcherDefault;
                obj4.dispatch(obj6);
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c5 = 2;
                c6 = 1;
                const obj7 = { url: Endpoints.GAME_ORGANIZATION(guildId), rejectWithError: true };
                const obj8 = { value: get(obj7), done: false };
                return obj8;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
            let closure_7 = closure_3;
            const self = this;
            const self2 = this;
            aPIError = new closure_130_0(closure_130_2[6]).APIError(closure_7);
            const obj9 = { type: "GAME_ORGANIZATION_FETCH_FAILURE", guildId, error: aPIError };
            const obj2 = closure_130_1(closure_130_2[3]);
            obj2.dispatch(obj9);
            throw closure_7;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            game_organization = body.game_organization;
            application = body.application;
            const obj10 = closure_130_0(closure_130_2[5]);
            gameOrganization = obj10.gameOrganizationFromServer(game_organization);
            application = closure_130_4.createFromServer(application);
            const obj12 = { type: "GAME_ORGANIZATION_FETCH_SUCCESS", gameOrganization, application };
            const obj11 = closure_130_1(closure_130_2[3]);
            obj11.dispatch(obj12);
            c4 = 0;
          }
          c6 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp26) {
          closure_3 = tmp26;
          if (0 === c4) {
            c6 = 3;
            throw tmp26;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _fetchLinkableGameOrganizations() {
  obj = _asyncToGenerator(async function(arg0, value) {
    let closure_0 = arg0;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_2 = tmp;
            let closure_1 = tmp4;
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: Endpoints.LINKABLE_GAME_ORGANIZATIONS(closure_0), rejectWithError: true };
            const get = HTTP.get;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: get(obj4), done: false };
            return obj5;
          }
        } else if (1 === c5) {
          c4 = 0;
          closure_0 = closure_3;
          const self = this;
          const self2 = this;
          const aPIError = new closure_130_0(closure_130_2[6]).APIError(closure_0);
          throw aPIError;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          const game_organizations = value.body.game_organizations;
          c4 = 0;
          c6 = 3;
          obj = { value: game_organizations.map(closure_130_0(closure_130_2[5]).linkableGameOrganizationFromServer), done: true };
          return obj;
        }
      } catch (tmp21) {
        closure_3 = tmp21;
        if (0 === c4) {
          c6 = 3;
          throw tmp21;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/game_organizations/GameOrganizationActionCreators.tsx");

export function fetchGameOrganization() {
  return obj(...arguments);
}
export function fetchLinkableGameOrganizations() {
  return obj(...arguments);
}
