// Module ID: 10186
// Function ID: 10187
// Name: lurkGuildFromRoute
// Dependencies: [5, 502, 4885, 6902, 5063, 2]
// Exports: default

// Module 10186 (lurkGuildFromRoute)
import RouteUtils from "RouteUtils" /* 5063 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 6902 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildStore from "GuildStore" /* 4885 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4;

let obj = function _lurk() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      let c5;
      try {
        let flag;
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_3 = tmp;
            c5 = 2;
            const obj6 = GuildActionCreatorsDefault;
            flag = obj6.joinGuild(closure_0, { lurker: true, autoNavigate: false });
            c6 = 3;
            c7 = 1;
            const obj5 = { value: flag, done: false };
            return obj5;
          }
        } else if (1 === c6) {
          c5 = 0;
          flag = closure_131_6.delete(closure_1);
          throw closure_4;
        } else if (2 === c6) {
          c5 = 0;
          closure_131_6.delete(closure_1);
          c7 = 3;
          return { value: false, done: true };
        } else {
          if (3 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              closure_131_6.delete(closure_1);
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              flag = true !== value.body.show_verification_form;
              if (flag) {
                const obj3 = closure_131_0(closure_131_2[3]);
                flag = obj3.waitForGuild(closure_0);
                c6 = 4;
                c7 = 1;
                const obj8 = { value: flag, done: false };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else {
            flag = true;
            if (arg0 === 2) {
              c5 = 0;
              closure_131_6.delete(closure_1);
              c7 = 3;
              obj = { value, done: true };
              return obj;
            }
          }
          c5 = 0;
          closure_131_6.delete(closure_1);
          c7 = 3;
          const obj9 = { value: flag, done: true };
          return obj9;
        }
      } catch (tmp40) {
        closure_4 = tmp40;
        if (0 === c5) {
          c7 = 3;
          throw tmp40;
        } else if (1 === tmp42) {
          c6 = 1;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const map = new Map();
let result = size.fileFinishedImporting("modules/lurker_mode/lurkGuildFromRoute.tsx");

export default function lurkGuildFromRoute(guildId) {
  function lurk() {
    return obj(...arguments);
  }
  if (null != GuildStore.getGuild(guildId)) {
    return Promise.resolve(true);
  } else {
    const sessionId = AuthenticationStore.getSessionId();
    const obj2 = RouteUtils;
    if (obj2.isValidGuildId(guildId)) {
      if (null != sessionId) {
        const _HermesInternal = HermesInternal;
        const combined = "" + sessionId + ":" + guildId;
        obj = map;
        let value = map.get(combined);
        if (null == value) {
          const tmp4 = lurk(guildId, combined);
          const result = obj.set(combined, tmp4);
          value = tmp4;
        }
        return value;
      }
    }
    return Promise.resolve(false);
  }
};
