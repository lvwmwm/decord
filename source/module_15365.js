// Module ID: 15365
// Function ID: 117154
// Dependencies: []

// Module 15365
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("actions/RegionActionCreators.tsx");

export default {
  fetchRegions(id) {
    const require = id;
    const HTTP = require(dependencyMap[1]).HTTP;
    const value = HTTP.get({ url: Endpoints.REGIONS(id) });
    value.then((body) => {
      let obj = callback(closure_2[2]);
      obj = { type: "LOAD_REGIONS", regions: body.body, guildId: body };
      return obj.dispatch(obj);
    }, () => {
      let obj = callback(closure_2[2]);
      obj = { type: "LOAD_REGIONS", regions: [], guildId: arg0 };
      return obj.dispatch(obj);
    });
  },
  changeCallRegion(arg0, region) {
    const HTTP = require(dependencyMap[1]).HTTP;
    let obj = { url: Endpoints.CALL(arg0), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { region };
    HTTP.patch(obj);
  }
};
