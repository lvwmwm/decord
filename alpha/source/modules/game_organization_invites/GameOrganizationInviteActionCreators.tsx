// Module ID: 18789
// Function ID: 18790
// Name: GameOrganizationInviteActionCreators
// Dependencies: [5, 1087, 584, 1297, 6360, 2]

// Module 18789 (GameOrganizationInviteActionCreators)
import Constants from "Constants" /* 1087 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c2, c4, c5, closure_2;

const Endpoints = Constants.Endpoints;
let obj = {
  resolveGameOrganizationInvite(arg0) {
    let closure_0 = arg0;
    return (async function(arg0, value) {
      let closure_1;
      let obj13;
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
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          let body;
          let tmp;
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
              const code = tmp4;
              body = undefined;
              tmp = undefined;
              const obj16 = tmp(closure_2[2]);
              if (obj16.isDispatching()) {
                c4 = 1;
                c5 = 1;
                const obj5 = { value: Promise.resolve(), done: false };
                return obj5;
              } else {
                const obj6 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE", code };
                const obj9 = tmp(closure_2[2]);
                obj9.dispatch(obj6);
                c3 = 1;
                const HTTP = code(closure_2[3]).HTTP;
                const obj7 = { url: c4.GAME_ORGANIZATION_INVITE(code), rejectWithError: true };
                const get = HTTP.get;
                c4 = 3;
                c5 = 1;
                const obj8 = { value: get(obj7), done: false };
                return obj8;
              }
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              c5 = 3;
              const obj11 = { value: c5.resolveGameOrganizationInvite(closure_129_0), done: true };
              return obj11;
            }
          } else if (2 === c4) {
            c3 = 0;
            const self = this;
            const self2 = this;
            const tmp19 = new tmp(closure_2[4])(closure_2);
            tmp = tmp19;
            const obj12 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_FAILURE", code: closure_129_0, error: obj13 };
            obj13 = { code: tmp.code, message: tmp.message };
            const obj4 = tmp(closure_2[2]);
            obj4.dispatch(obj12);
            throw closure_2;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            body = value.body;
            const obj15 = { type: "GAME_ORGANIZATION_INVITE_RESOLVE_SUCCESS", code: closure_129_0, invite: body };
            obj = tmp(closure_2[2]);
            obj.dispatch(obj15);
            c3 = 0;
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp39) {
          closure_2 = tmp39;
          if (0 === c3) {
            c5 = 3;
            throw tmp39;
          } else {
            c4 = 2;
          }
        }
      }
    })();
  },
  fetchInvitableGameOrganizations(arg0) {
    let closure_0 = arg0;
    return (async (arg0, value) => {
      let closure_1;
      let obj4;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let body;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const guild_ids = tmp4;
              body = undefined;
              const HTTP = guild_ids(c2[3]).HTTP;
              const request = { url: constants.GAME_ORGANIZATIONS_INVITABLE, query: obj4, rejectWithError: true };
              obj4 = { guild_ids };
              c2 = 1;
              c3 = 1;
              const obj5 = { value: HTTP.get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value.body;
            const obj7 = { type: "INVITABLE_GAME_ORGANIZATIONS_FETCH_SUCCESS", guildIds: closure_129_0, gameOrganizations: body };
            obj = tmp(c2[2]);
            obj.dispatch(obj7);
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp12) {
          c3 = 3;
          throw tmp12;
        }
      }
    })();
  }
};
const result = size.fileFinishedImporting("modules/game_organization_invites/GameOrganizationInviteActionCreators.tsx");

export default obj;
