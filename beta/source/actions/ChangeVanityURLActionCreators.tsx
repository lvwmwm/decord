// Module ID: 18084
// Function ID: 18085
// Name: ChangeVanityURLActionCreators
// Dependencies: [1078, 577, 1275, 2]

// Module 18084 (ChangeVanityURLActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import Constants from "Constants" /* 1078 */;
import HTTPUtils from "HTTPUtils" /* 1275 */;
import size from "module_2" /* 2 */;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("actions/ChangeVanityURLActionCreators.tsx");

export default {
  openModal(id, vanityURLCode) {
    DispatcherDefault.dispatch({ type: "CHANGE_VANITY_URL_MODAL_OPEN", guildId: id, code: vanityURLCode });
  },
  closeModal() {
    DispatcherDefault.dispatch({ type: "CHANGE_VANITY_URL_MODAL_CLOSE" });
  },
  removeVanityURL(id) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true };
    return HTTP.patch(request).then(() => {
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: null, uses: 0 });
    });
  },
  changeVanityURL(id, vanityURLCode) {
    const self = this;
    DispatcherDefault.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT" });
    const HTTP = self(1275).HTTP;
    const request = { url: Endpoints.GUILD_VANITY_URL(id), body: { code: vanityURLCode }, oldFormErrors: true, rejectWithError: true };
    const obj2 = { code: vanityURLCode };
    return HTTP.patch(request).then((body) => {
      ({ code, uses } = body.body);
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
      self.closeModal();
    }, (body) => {
      DispatcherDefault.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true });
      return body;
    });
  },
  setVanityURL(id, code) {
    const HTTP = HTTPUtils.HTTP;
    const request = { url: Endpoints.GUILD_VANITY_URL(id), body: { code }, oldFormErrors: true, rejectWithError: HTTPUtils.rejectWithMigratedError() };
    const obj = { code };
    return HTTP.patch(request).then((body) => {
      ({ code, uses } = body.body);
      DispatcherDefault.dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
    }, (body) => {
      DispatcherDefault.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true });
      return body;
    });
  }
};
