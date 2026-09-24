// Module ID: 17294
// Function ID: 17295
// Name: RegionActionCreators
// Dependencies: [1078, 1275, 577, 2]

// Module 17294 (RegionActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    _require = id;
    const HTTP = require("HTTPUtils").HTTP;
    value = HTTP.get({ url: Endpoints.REGIONS(id), retries: 1, oldFormErrors: true, rejectWithError: true });
    value.then((body) => DispatcherDefault.dispatch({ type: "LOAD_REGIONS", regions: body.body, guildId }), () => DispatcherDefault.dispatch({ type: "LOAD_REGIONS", regions: [], guildId }));
  },
  changeCallRegion(id, region) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.CALL(id), body: { region }, oldFormErrors: true, rejectWithError: true };
    HTTP.patch(request);
  }
};
