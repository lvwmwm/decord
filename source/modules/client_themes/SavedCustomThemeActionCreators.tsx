// Module ID: 14039
// Function ID: 106743
// Name: fetchUserCustomThemes
// Dependencies: []
// Exports: fetchUserCustomThemes

// Module 14039 (fetchUserCustomThemes)
let closure_3 = importDefault(dependencyMap[0]);
const Endpoints = arg1(dependencyMap[1]).Endpoints;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/client_themes/SavedCustomThemeActionCreators.tsx");

export const fetchUserCustomThemes = function fetchUserCustomThemes() {
  if (!fetching.isFetching()) {
    let obj = importDefault(dependencyMap[2]);
    obj = { type: "SAVED_CUSTOM_THEMES_FETCH_START" };
    obj.dispatch(obj);
    const HTTP = arg1(dependencyMap[3]).HTTP;
    obj = { y: null, isArray: null, accessible: null, url: Endpoints.USERS_ME_CUSTOM_THEMES };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = callback(closure_2[2]);
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
      let obj = callback(closure_2[2]);
      obj = { type: "SAVED_CUSTOM_THEMES_FETCH_FAILURE", error };
      obj.dispatch(obj);
    });
    const nextPromise = value.then((body) => {
      let obj = callback(closure_2[2]);
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
