// Module ID: 13681
// Function ID: 13682
// Name: useConjureSharedProjectLaunch
// Dependencies: [5, 32, 19, 12354, 13682, 2]
// Exports: default

// Module 13681 (useConjureSharedProjectLaunch)
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4;

let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let result = size.fileFinishedImporting("modules/conjure/share/useConjureSharedProjectLaunch.tsx");

export default function useConjureSharedProjectLaunch(arg0, install_scope, guildId) {
  let c3;
  let c5;
  let closure_0;
  let closure_4;
  let first;
  let tmp2;
  _require = arg0;
  guildId = guildId.guildId;
  let channelId = guildId.channelId;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let obj = react;
  const tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c3] = tmp;
  [first, _slicedToArray] = react.useState(false);
  let result = null != install_scope && null != channelId;
  if (result) {
    let obj2 = require("conjureSharedProjectHome");
    result = obj2.canLaunchSharedProject(install_scope, guildId);
  }
  react = result;
  const items = [result, arg0, guildId, channelId];
  let obj3 = {
    canLaunch: result,
    launching: tmp2,
    failed: first,
    launch: obj.useCallback(_asyncToGenerator(async (arg0, value) => {
      let closure_2;
      let v0;
      let v2;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === guildId) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const applicationId = tmp;
              const tmp38 = c5;
              if (tmp38) {
                if (null != guildId) {
                  if (null != channelId) {
                    v0(true);
                    v3(false);
                    v0 = 2;
                    const obj4 = { applicationId, guildId: tmp22, channelId: tmp23 };
                    guildId = 3;
                    c4 = 1;
                    const obj5 = { value: guildId(channelId[4])(obj4), done: false };
                    return obj5;
                  }
                }
              }
              c4 = 3;
              return { value: false, done: true };
            }
          } else if (1 === guildId) {
            v0 = 0;
            closure_128_3(false);
            throw channelId;
          } else if (2 === guildId) {
            closure_128_4(true);
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            v0 = 0;
            closure_128_3(false);
            c4 = 3;
            return { value: true, done: true };
          }
        } catch (tmp31) {
          channelId = tmp31;
          if (0 === v0) {
            c4 = 3;
            throw tmp31;
          } else if (1 === tmp33) {
            guildId = 1;
          } else {
            guildId = 2;
          }
        }
      }
    }), items)
  };
  return obj3;
};
