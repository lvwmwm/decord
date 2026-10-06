// Module ID: 7041
// Function ID: 7042
// Name: UserProfileGameWidgetTypes
// Dependencies: [7040, 5423, 7042, 2]
// Exports: isGameWidget, isGameWidgetType

// Module 7041 (UserProfileGameWidgetTypes)
import GameWidgetLimits from "GameWidgetLimits" /* 5423 */;
import WidgetType from "WidgetType" /* 7040 */;
import WidgetUtils from "WidgetUtils" /* 7042 */;
import size from "module_2" /* 2 */;

const items = [WidgetType.WidgetType.CURRENT_GAMES, WidgetType.WidgetType.FAVORITE_GAMES, WidgetType.WidgetType.WANT_TO_PLAY_GAMES, WidgetType.WidgetType.PLAYED_GAMES];
class BaseGameWidget {
  constructor(arg0) {
    let games;
    let id;
    let type;
    ({ id, type, games } = arg0);
    const obj = Object.create(new.target.prototype);
    obj.id = id;
    obj.type = type;
    obj.games = games;
    return obj;
  }
  toSubmission() {
    let games;
    let obj2;
    const obj = { id: this.id, data: obj2 };
    obj2 = { type: this.type, games: games.map((gameId) => ({ game_id: gameId.gameId, comment: gameId.comment, tags: gameId.tags })) };
    games = this.games;
    return obj;
  }
  isUpdatable() {
    return true;
  }
  isDiscardable() {
    return 0 === this.games.length;
  }
  isValid() {
    const self = this;
    const tmp = this.games.length > 0 && self.games.length <= GameWidgetLimits.GAME_WIDGET_LIMITS_BY_TYPE[self.type];
    return tmp;
  }
  isEqual(type) {
    let tmp = type instanceof BaseGameWidget;
    if (tmp) {
      const self = this;
      let areWidgetGamesEqualResult = type.type === this.type;
      if (areWidgetGamesEqualResult) {
        const obj = WidgetUtils;
        areWidgetGamesEqualResult = obj.areWidgetGamesEqual(self.games, type.games, self.type);
      }
      tmp = areWidgetGamesEqualResult;
    }
    return tmp;
  }
  getUniqueKey() {
    return this.type;
  }
  getProfileAnalyticsOptions() {
    return { widgetType: this.type };
  }
  getProfileEditAnalyticsOptions() {
    return { widgetEdited: this.type };
  }
}
const prototype = BaseGameWidget.prototype;
const result = size.fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTypes.tsx");

export const GAME_WIDGET_TYPES = items;
export const isGameWidgetType = function isGameWidgetType(arg0) {
  return items.includes(arg0);
};
export const isGameWidget = function isGameWidget(widget) {
  return widget instanceof BaseGameWidget;
};
export { BaseGameWidget };
