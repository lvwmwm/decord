// Module ID: 18885
// Function ID: 18886
// Name: RegionActionCreators
// Dependencies: [1072, 1282, 572, 2]

// Module 18885 (RegionActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import Constants from "Constants" /* 1072 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const Endpoints = Constants.Endpoints;
let obj = {
  fetchRegions(id) {
    let guildId;
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "LOAD_REGIONS", regions: body.body, guildId };
      return obj.dispatch(obj2);
    }, () => {
      const obj = DispatcherDefault;
      const obj2 = { type: "LOAD_REGIONS", regions: [], guildId };
      return obj.dispatch(obj2);
    });
  },
  changeCallRegion(arg0, region) {
    let obj;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CALL(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { region };
    HTTP.patch(request);
  }
};
const result = size.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default obj;
