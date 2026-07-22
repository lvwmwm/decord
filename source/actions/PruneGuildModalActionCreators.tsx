// Module ID: 15187
// Function ID: 114539
// Dependencies: []

// Module 15187
let closure_2 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[3]).fileFinishedImporting("actions/PruneGuildModalActionCreators.tsx");

export default {
  updateEstimate(arg0) {
    let num = arg1;
    const arg1 = arg0;
    if (arg1 === undefined) {
      num = 7;
    }
    const dependencyMap = num;
    const callback = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateEstimateV2(id, first) {
    let num = first;
    first = id;
    if (first === undefined) {
      num = 7;
    }
    const dependencyMap = num;
    const callback = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  prune(arg0, days, include_roles) {
    const HTTP = days(dependencyMap[2]).HTTP;
    let obj = { url: Endpoints.GUILD_PRUNE(arg0), body: obj, oldFormErrors: true };
    obj = { days, compute_prune_count: false, include_roles, rejectWithError: days(dependencyMap[2]).rejectWithMigratedError() };
    return HTTP.post(obj);
  }
};
