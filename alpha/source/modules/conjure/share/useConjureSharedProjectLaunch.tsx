// Module ID: 12377
// Function ID: 12378
// Name: useConjureSharedProjectLaunch
// Dependencies: [5, 32, 19, 4914, 504, 11998, 12372, 2]
// Exports: default

// Module 12377 (useConjureSharedProjectLaunch)
import conjureSharedProjectHome from "conjureSharedProjectHome" /* 11998 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, _undefined, c1;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectLaunch.tsx");

export default function useConjureSharedProjectLaunch(arg0, arg1, guildId) {
  let c4;
  let closure_0;
  let closure_5;
  let first;
  let tmp2;
  _require = arg0;
  let closure_1 = arg1;
  guildId = guildId.guildId;
  const channelId = guildId.channelId;
  _slicedToArray = undefined;
  react = undefined;
  let stateFromStores;
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c4] = tmp;
  [first, react] = react.useState(false);
  let obj = require("get initialized");
  const items = [stateFromStores];
  const items1 = [arg1, channelId];
  stateFromStores = obj.useStateFromStores(items, () => {
    let result = null != closure_1;
    const tmp = closure_1;
    if (result) {
      result = null != channelId;
    }
    if (result) {
      const obj = conjureSharedProjectHome;
      result = obj.canLaunchSharedProject(tmp);
    }
    return result;
  }, items1);
  const items2 = [stateFromStores, arg0, guildId, channelId];
  let obj2 = {
    canLaunch: stateFromStores,
    launching: tmp2,
    failed: first,
    launch: react.useCallback(channelId(function*(arg0, value) {
      let closure_2;
      let v2;
      let v3;
      if (_undefined === 2) {
        _undefined = 3;
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
        let c3;
        try {
          _undefined = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              _undefined = 3;
              throw value;
            } else if (arg0 === 2) {
              _undefined = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const applicationId = tmp;
              const tmp38 = stateFromStores;
              if (tmp38) {
                if (null != channelId) {
                  _undefined(true);
                  closure_5(false);
                  c3 = 2;
                  const obj4 = { applicationId, guildId, channelId: tmp22 };
                  c1 = 3;
                  _undefined = 1;
                  const obj5 = { value: c1(guildId[6])(obj4), done: false };
                  return obj5;
                }
              }
              _undefined = 3;
              return { value: false, done: true };
            }
          } else if (1 === c1) {
            c3 = 0;
            closure_128_4(false);
            throw guildId;
          } else if (2 === c1) {
            closure_128_5(true);
            c3 = 0;
            closure_128_4(false);
            _undefined = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            _undefined = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_128_4(false);
            _undefined = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_128_4(false);
            _undefined = 3;
            return { value: true, done: true };
          }
        } catch (tmp31) {
          guildId = tmp31;
          if (0 === c3) {
            _undefined = 3;
            throw tmp31;
          } else if (1 === tmp33) {
            c1 = 1;
          } else {
            c1 = 2;
          }
        }
      }
    }), items2)
  };
  return obj2;
};
