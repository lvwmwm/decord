// Module ID: 5367
// Function ID: 5368
// Name: items
// Dependencies: [5366, 5368, 5369, 2]
// Exports: isGameWidget, isGameWidgetType

// Module 5367 (items)
const items = [require("WidgetType").WidgetType.CURRENT_GAMES, require("WidgetType").WidgetType.FAVORITE_GAMES, require("WidgetType").WidgetType.WANT_TO_PLAY_GAMES, require("WidgetType").WidgetType.PLAYED_GAMES];
let BaseGameWidget;
class BaseGameWidget {
  constructor(arg0) {
    ({ id, type, games } = global);
    obj = Object.create(new.target.prototype);
    obj.id = id;
    obj.type = type;
    obj.games = games;
    return obj;
  }
}
const prototype = BaseGameWidget.prototype;
prototype["toSubmission"] = function toSubmission() {
  let obj = { id: this.id, data: null };
  obj = { type: this.type, games: games.map((gameId) => ({ game_id: gameId.gameId, comment: gameId.comment, tags: gameId.tags })) };
  games = this.games;
  obj[1] = obj;
  return obj;
};
prototype["isUpdatable"] = function isUpdatable() {
  return true;
};
prototype["isDiscardable"] = function isDiscardable() {
  return 0 === this.games.length;
};
prototype["isValid"] = function isValid() {
  const self = this;
  let tmp = this.games.length > 0;
  if (tmp) {
    tmp = self.games.length <= require(5368) /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE[self.type];
  }
  return tmp;
};
prototype["isEqual"] = function isEqual(type) {
  let tmp = type instanceof BaseGameWidget;
  if (tmp) {
    const self = this;
    let areWidgetGamesEqualResult = type.type === this.type;
    if (areWidgetGamesEqualResult) {
      areWidgetGamesEqualResult = require(5369) /* findGameWidget */.areWidgetGamesEqual(self.games, type.games, self.type);
      const obj = require(5369) /* findGameWidget */;
    }
    tmp = areWidgetGamesEqualResult;
  }
  return tmp;
};
prototype["getUniqueKey"] = function getUniqueKey() {
  return this.type;
};
prototype["getProfileAnalyticsOptions"] = function getProfileAnalyticsOptions() {
  return { widgetType: this.type };
};
prototype["getProfileEditAnalyticsOptions"] = function getProfileEditAnalyticsOptions() {
  return { widgetEdited: this.type };
};
const result = require("findGameWidget").fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTypes.tsx");

export const GAME_WIDGET_TYPES = items;
export const isGameWidgetType = function isGameWidgetType(arg0) {
  return items.includes(arg0);
};
export const isGameWidget = function isGameWidget(widget) {
  return widget instanceof BaseGameWidget;
};
export { BaseGameWidget };
