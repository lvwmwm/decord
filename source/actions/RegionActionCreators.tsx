// Module ID: 15547
// Function ID: 119756
// Dependencies: [653, 507, 686, 2]

// Module 15547
import { Endpoints } from "ME";

const result = require("dispatcher").fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    const _require = id;
    const HTTP = _require(507).HTTP;
    let obj = { url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "LOAD_REGIONS", regions: body.body, guildId: closure_0 };
      return obj.dispatch(obj);
    }, () => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "LOAD_REGIONS", regions: [], guildId: closure_0 };
      return obj.dispatch(obj);
    });
  },
  changeCallRegion(arg0, region) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.CALL(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { region };
    HTTP.patch(obj);
  }
};
