// Module ID: 16403
// Function ID: 16404
// Name: GameOrganizationActionCreators
// Dependencies: [5, 2143, 1072, 572, 1285, 12370, 6757, 2]
// Exports: fetchGameOrganization, fetchLinkableGameOrganizations

// Module 16403 (GameOrganizationActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1285 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationRecord from "ApplicationRecord" /* 2143 */;
import size from "module_2" /* 2 */;

let application, closure_3, closure_4, displayNoun, gameOrganization;

let obj = function _fetchGameOrganization() {
  obj = _asyncToGenerator(async (guildId) => {
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async function(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
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
        let c5;
        try {
          let body;
          let game_organization;
          let application_config;
          let aPIError;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              game_organization = undefined;
              application_config = undefined;
              gameOrganization = undefined;
              application = undefined;
              aPIError = undefined;
              if (null != guildId) {
                const obj6 = { type: "GAME_ORGANIZATION_FETCH_START", guildId };
                const obj4 = DispatcherDefault;
                obj4.dispatch(obj6);
                c5 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c6 = 2;
                c7 = 1;
                const obj7 = { url: Endpoints.GAME_ORGANIZATION(guildId), rejectWithError: true };
                const obj8 = { value: get(obj7), done: false };
                return obj8;
              }
            }
          } else if (1 === c6) {
            c5 = 0;
            let closure_8 = closure_4;
            const self = this;
            const self2 = this;
            aPIError = new closure_131_0(closure_131_2[6]).APIError(closure_8);
            const obj9 = { type: "GAME_ORGANIZATION_FETCH_FAILURE", guildId, error: aPIError };
            const obj2 = closure_131_1(closure_131_2[3]);
            obj2.dispatch(obj9);
            throw closure_8;
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            c7 = 3;
            return { value, done: true };
          } else {
            body = value.body;
            game_organization = body.game_organization;
            application = body.application;
            application_config = body.application_config;
            const obj10 = closure_131_0(closure_131_2[5]);
            gameOrganization = obj10.gameOrganizationFromServer(game_organization);
            application = closure_131_4.createFromServer(application);
            let display_noun;
            const obj11 = { type: "GAME_ORGANIZATION_FETCH_SUCCESS", gameOrganization, application, displayNoun };
            const dispatch = closure_131_1(closure_131_2[3]).dispatch;
            closure_131_1(closure_131_2[3]);
            if (application_config != null) {
              display_noun = application_config.display_noun;
            }
            displayNoun = display_noun;
            if (display_noun == null) {
              displayNoun = null;
            }
            dispatch(obj11);
            c5 = 0;
          }
          c7 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp29) {
          closure_4 = tmp29;
          if (0 === c5) {
            c7 = 3;
            throw tmp29;
          } else {
            c6 = 1;
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
