// Module ID: 6858
// Function ID: 54213
// Name: items
// Dependencies: [6, 7, 6857, 6859, 6860, 2]
// Exports: isGameWidget, isGameWidgetType

// Module 6858 (items)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

const require = arg1;
let items = [require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.WANT_TO_PLAY_GAMES, require("WidgetType").WidgetType.PLAYED_GAMES];
const tmp2 = (() => {
  class BaseGameWidget {
    constructor(arg0) {
      ({ id, type, games } = arg0);
      tmp = outer1_2(this, BaseGameWidget);
      this.id = id;
      this.type = type;
      this.games = games;
      return;
    }
  }
  let obj = {
    key: "toSubmission",
    value() {
      let obj = { id: this.id };
      obj = { type: this.type, games: games.map((applicationId) => ({ game_id: applicationId.applicationId, comment: applicationId.comment, tags: applicationId.tags })) };
      games = this.games;
      obj.data = obj;
      return obj;
    }
  };
  const items = [obj, , , , , , ];
  obj = {
    key: "isDiscardable",
    value() {
      return 0 === this.games.length;
    }
  };
  items[1] = obj;
  obj = {
    key: "isValid",
    value() {
      const self = this;
      let tmp = this.games.length > 0;
      if (tmp) {
        tmp = self.games.length <= BaseGameWidget(outer1_1[3]).GAME_WIDGET_LIMITS_BY_TYPE[self.type];
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "isEqual",
    value(type) {
      const self = this;
      let tmp = type instanceof BaseGameWidget;
      if (tmp) {
        let areWidgetGamesEqualResult = type.type === self.type;
        if (areWidgetGamesEqualResult) {
          areWidgetGamesEqualResult = BaseGameWidget(outer1_1[4]).areWidgetGamesEqual(self.games, type.games, self.type);
          const obj = BaseGameWidget(outer1_1[4]);
        }
        tmp = areWidgetGamesEqualResult;
      }
      return tmp;
    }
  };
  items[4] = {
    key: "getUniqueKey",
    value() {
      return this.type;
    }
  };
  items[5] = {
    key: "getProfileAnalyticsOptions",
    value() {
      return { widgetType: this.type };
    }
  };
  items[6] = {
    key: "getProfileEditAnalyticsOptions",
    value() {
      return { widgetEdited: this.type };
    }
  };
  return callback(BaseGameWidget, items);
})();
let closure_5 = tmp2;
const result = require("WidgetType").fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTypes.tsx");

export const GAME_WIDGET_TYPES = items;
export const isGameWidgetType = function isGameWidgetType(arg0) {
  return items.includes(arg0);
};
export const isGameWidget = function isGameWidget(widget) {
  return widget instanceof closure_5;
};
export const BaseGameWidget = tmp2;
