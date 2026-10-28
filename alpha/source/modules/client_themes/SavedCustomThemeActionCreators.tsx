// Module ID: 16894
// Function ID: 16895
// Name: SavedCustomThemeActionCreators
// Dependencies: [5239, 1084, 584, 1294, 2]
// Exports: fetchUserCustomThemes

// Module 16894 (SavedCustomThemeActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1084 */;
import HTTPUtils from "HTTPUtils" /* 1294 */;
import SavedCustomThemeStore from "SavedCustomThemeStore" /* 5239 */;
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
