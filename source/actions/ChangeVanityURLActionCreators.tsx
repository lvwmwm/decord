// Module ID: 16199
// Function ID: 125258
// Dependencies: []

// Module 16199
const Endpoints = require(dependencyMap[0]).Endpoints;
const _module = require(dependencyMap[3]);
const result = _module.fileFinishedImporting("actions/ChangeVanityURLActionCreators.tsx");

export default {
  openModal(id, vanityURLCode) {
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "CHANGE_VANITY_URL_MODAL_OPEN", guildId: id, code: vanityURLCode };
    obj.dispatch(obj);
  },
  closeModal() {
    importDefault(dependencyMap[1]).dispatch({ type: "CHANGE_VANITY_URL_MODAL_CLOSE" });
  },
  removeVanityURL(id) {
    const HTTP = require(dependencyMap[2]).HTTP;
    const obj = { url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true };
    return HTTP.patch({ url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true }).then(() => {
      callback(closure_2[1]).dispatch({});
    });
  },
  changeVanityURL(id, vanityURLCode) {
    const require = this;
    let obj = importDefault(dependencyMap[1]);
    obj.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT" });
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { code: vanityURLCode };
    return HTTP.patch(obj).then((body) => {
      let code;
      let uses;
      ({ code, uses } = body.body);
      callback(closure_2[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
      self.closeModal();
    }, (body) => {
      let obj = callback(closure_2[1]);
      obj = { <string:1258292289>: null, <string:4143973444>: null, -1633288188: null, error: body.body };
      obj.dispatch(obj);
      return body;
    });
  },
  setVanityURL(id, code) {
    const HTTP = require(dependencyMap[2]).HTTP;
    let obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true };
    obj = { code, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const obj3 = require(dependencyMap[2]);
    return HTTP.patch(obj).then((body) => {
      let code;
      let uses;
      ({ code, uses } = body.body);
      callback(closure_2[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
    }, (body) => {
      let obj = callback(closure_2[1]);
      obj = { <string:1258292289>: null, <string:4143973444>: null, -1633288188: null, error: body.body };
      obj.dispatch(obj);
      return body;
    });
  }
};
