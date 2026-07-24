// Module ID: 16386
// Function ID: 127889
// Dependencies: [653, 686, 507, 2]

// Module 16386
import { Endpoints } from "ME";

const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/ChangeVanityURLActionCreators.tsx");

export default {
  openModal(id, vanityURLCode) {
    let obj = importDefault(686);
    obj = { type: "CHANGE_VANITY_URL_MODAL_OPEN", guildId: id, code: vanityURLCode };
    obj.dispatch(obj);
  },
  closeModal() {
    importDefault(686).dispatch({ type: "CHANGE_VANITY_URL_MODAL_CLOSE" });
  },
  removeVanityURL(id) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    const obj = { url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true };
    return HTTP.patch({ url: Endpoints.GUILD_VANITY_URL(id), body: { code: null }, oldFormErrors: true, rejectWithError: true }).then(() => {
      outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code: null, uses: 0 });
    });
  },
  changeVanityURL(id, vanityURLCode) {
    const self = this;
    let obj = importDefault(686);
    obj.dispatch({ type: "CHANGE_VANITY_URL_MODAL_SUBMIT" });
    const HTTP = self(507).HTTP;
    obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true, rejectWithError: true };
    obj = { code: vanityURLCode };
    return HTTP.patch(obj).then((body) => {
      let code;
      let uses;
      ({ code, uses } = body.body);
      outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
      self.closeModal();
    }, (body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj);
      return body;
    });
  },
  setVanityURL(id, code) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.GUILD_VANITY_URL(id), body: obj, oldFormErrors: true };
    obj = { code, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj3 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.patch(obj).then((body) => {
      let code;
      let uses;
      ({ code, uses } = body.body);
      outer1_1(outer1_2[1]).dispatch({ type: "GUILD_SETTINGS_SET_VANITY_URL", code, uses });
    }, (body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "CHANGE_VANITY_URL_MODAL_SUBMIT_FAILURE", error: body.body, hasError: true };
      obj.dispatch(obj);
      return body;
    });
  }
};
