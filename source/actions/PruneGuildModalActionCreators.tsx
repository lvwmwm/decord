// Module ID: 15350
// Function ID: 117031
// Dependencies: [5, 653, 507, 2]

// Module 15350
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/PruneGuildModalActionCreators.tsx");

export default {
  updateEstimate(arg0) {
    let num = arg1;
    let closure_0 = arg0;
    if (arg1 === undefined) {
      num = 7;
    }
    const callback = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  updateEstimateV2(id, first) {
    let num = first;
    let closure_0 = id;
    if (first === undefined) {
      num = 7;
    }
    const callback = arg2;
    // CreateGeneratorClosureLongIndex (0x67)
    return callback(tmp)();
  },
  prune(arg0, days, include_roles) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.GUILD_PRUNE(arg0), body: obj, oldFormErrors: true };
    obj = { days, compute_prune_count: false, include_roles, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    return HTTP.post(obj);
  }
};
