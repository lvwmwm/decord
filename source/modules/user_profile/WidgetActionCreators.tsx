// Module ID: 6851
// Function ID: 54214
// Dependencies: []

// Module 6851
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/user_profile/WidgetActionCreators.tsx");

export default {
  setPendingWidgets(items) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "WIDGET_PENDING_SET", widgets: items };
    obj.dispatch(obj);
  },
  savePendingWidgets(arg0) {
    const arg1 = arg0;
    return callback(async () => {
      const currentUser = currentUser.getCurrentUser();
      let id;
      if (null != currentUser) {
        id = currentUser.id;
      }
      if (null != id) {
        let obj = callback(closure_2[3]);
        obj = { type: "WIDGET_PENDING_SAVE_START" };
        obj.dispatch(obj);
        const mapped = lib.map((toSubmission) => toSubmission.toSubmission());
        const HTTP = lib(closure_2[4]).HTTP;
        obj = { url: constants.USER_PROFILE_WIDGETS };
        const obj1 = { widgets: mapped };
        obj.body = obj1;
        obj.oldFormErrors = true;
        obj.rejectWithError = true;
        const tmp11 = yield HTTP.put(obj);
        const obj2 = { type: "WIDGET_PENDING_SAVE_SUCCESS", userId: id, widgets: tmp11.body.widgets };
        callback(closure_2[3]).dispatch(obj2);
        return tmp11.body;
      }
    })();
  },
  clearPendingWidgets() {
    importDefault(dependencyMap[3]).dispatch({ type: "WIDGET_PENDING_CLEAR" });
  },
  fetchSuggestedGames() {
    return callback(async () => {
      let obj = callback2(closure_2[3]);
      obj.dispatch({ type: "WIDGET_SUGGESTED_FETCH_START" });
      const HTTP = callback(closure_2[4]).HTTP;
      obj = { url: constants.USER_PROFILE_SUGGESTED_GAMES, rejectWithError: true };
      const tmp2 = yield HTTP.get(obj);
      const body = tmp2.body;
      let suggested_games;
      if (null != body) {
        suggested_games = body.suggested_games;
      }
      let tmp6 = tmp5;
      if (null != suggested_games) {
        const body2 = tmp3.body;
        let prop;
        if (null != body2) {
          prop = body2.suggested_wishlist_games;
        }
        tmp6 = null != prop;
      }
      if (!tmp6) {
        callback2(closure_2[5]).captureMessage("Suggested games or wishlist games not found");
        const obj3 = callback2(closure_2[5]);
      }
      obj = { type: "WIDGET_SUGGESTED_FETCH_SUCCESS" };
      const body3 = tmp3.body;
      let suggested_games1;
      if (null != body3) {
        suggested_games1 = body3.suggested_games;
      }
      obj.suggestedGamesIds = null != suggested_games1 ? suggested_games1 : [];
      const body4 = tmp2.body;
      let prop1;
      if (null != body4) {
        prop1 = body4.suggested_wishlist_games;
      }
      obj.suggestedWishlistGamesIds = null != prop1 ? prop1 : [];
      callback2(closure_2[3]).dispatch(obj);
    })();
  },
  removeGameFromSuggestedGames(applicationId) {
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "WIDGET_SUGGESTED_REMOVE_GAME", applicationId };
    obj.dispatch(obj);
  }
};
