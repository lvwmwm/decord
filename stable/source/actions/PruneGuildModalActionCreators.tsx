// Module ID: 16533
// Function ID: 16534
// Name: PruneGuildModalActionCreators
// Dependencies: [5, 1085, 1282, 2]

// Module 16533 (PruneGuildModalActionCreators)
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c1;

let _asyncToGenerator = _asyncToGenerator_mod;
const Endpoints = Constants.Endpoints;
let obj = {
  updateEstimate(arg0) {
    let closure_2;
    let num;
    let closure_0 = arg0;
    _asyncToGenerator = arg2;
    return (async () => {
      let obj4;
      let obj8;
      let v3;
      const HTTP = c0(c1[2]).HTTP;
      const request = { url: Endpoints.GUILD_PRUNE(closure_0), query: obj4, oldFormErrors: true, rejectWithError: obj8.rejectWithMigratedError() };
      const get = HTTP.get;
      obj4 = { days: 2, include_roles };
      obj8 = c0(c1[2]);
      await get(request);
      return arg1.body.pruned;
    })();
  },
  updateEstimateV2(id, arg1) {
    let closure_2;
    let num;
    _asyncToGenerator = arg2;
    return (async (arg0, value) => {
      let obj4;
      let obj7;
      let v3;
      if (id === 2) {
        id = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
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
          id = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              id = 3;
              throw value;
            } else if (arg0 === 2) {
              id = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              const HTTP = id(c1[2]).HTTP;
              const request = { url: Endpoints.GUILD_PRUNE_V2(closure_0), query: obj4, oldFormErrors: true, rejectWithError: obj7.rejectWithMigratedError() };
              const get = HTTP.get;
              obj4 = { days: 2, include_roles };
              obj7 = id(c1[2]);
              c1 = 1;
              id = 1;
              const obj5 = { value: get(request), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            id = 3;
            throw value;
          } else if (arg0 === 2) {
            id = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            id = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp4) {
          id = 3;
          throw tmp4;
        }
      }
    })();
  },
  prune(arg0, days, include_roles) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_PRUNE(arg0), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { days, compute_prune_count: false, include_roles };
    obj3 = HTTPUtils;
    return post(request);
  }
};
const result = size.fileFinishedImporting("actions/PruneGuildModalActionCreators.tsx");

export default obj;
