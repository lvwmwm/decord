// Module ID: 14799
// Function ID: 14800
// Name: SavedCustomThemeActionCreators
// Dependencies: [4767, 1086, 585, 1283, 2]
// Exports: fetchUserCustomThemes

// Module 14799 (SavedCustomThemeActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 4767 */;
import size from "module_2" /* 2 */;

let body;

const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/client_themes/SavedCustomThemeActionCreators.tsx");

export const fetchUserCustomThemes = function fetchUserCustomThemes() {
  if (!SavedCustomThemeStore.isFetching()) {
    let obj = DispatcherDefault;
    obj.dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_START" });
    const HTTP = HTTPUtils.HTTP;
    let obj2 = { url: Endpoints.USERS_ME_CUSTOM_THEMES, oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj2);
    const nextPromise = value.then((body) => {
      body = body.body;
      let custom_themes;
      const dispatch = DispatcherDefault.dispatch;
      DispatcherDefault;
      if (body != null) {
        custom_themes = body.custom_themes;
      }
      if (custom_themes == null) {
        custom_themes = [];
      }
      dispatch({ type: "SAVED_CUSTOM_THEMES_FETCH_SUCCESS", themes: custom_themes });
    });
    nextPromise.catch((error) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error };
      obj.dispatch(obj2);
    });
  }
};
