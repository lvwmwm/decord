// Module ID: 14203
// Function ID: 109222
// Name: fetchUserCustomThemes
// Dependencies: [4064, 653, 686, 507, 2]
// Exports: fetchUserCustomThemes

// Module 14203 (fetchUserCustomThemes)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";

const require = arg1;
const result = require("dispatcher").fileFinishedImporting("modules/client_themes/SavedCustomThemeActionCreators.tsx");

export const fetchUserCustomThemes = function fetchUserCustomThemes() {
  if (!fetching.isFetching()) {
    let obj = importDefault(686);
    obj = { type: "SAVED_CUSTOM_THEMES_FETCH_START" };
    obj.dispatch(obj);
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: Endpoints.USERS_ME_CUSTOM_THEMES, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS" };
      body = body.body;
      let custom_themes;
      if (null != body) {
        custom_themes = body.custom_themes;
      }
      if (null == custom_themes) {
        custom_themes = [];
      }
      obj.themes = custom_themes;
      obj.dispatch(obj);
    }).catch((error) => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error };
      obj.dispatch(obj);
    });
    const nextPromise = value.then((body) => {
      let obj = outer1_1(outer1_2[2]);
      obj = { type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS" };
      body = body.body;
      let custom_themes;
      if (null != body) {
        custom_themes = body.custom_themes;
      }
      if (null == custom_themes) {
        custom_themes = [];
      }
      obj.themes = custom_themes;
      obj.dispatch(obj);
    });
  }
};
