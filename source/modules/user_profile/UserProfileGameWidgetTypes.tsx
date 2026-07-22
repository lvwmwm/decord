// Module ID: 6853
// Function ID: 54181
// Name: items
// Dependencies: []
// Exports: isGameWidget, isGameWidgetType

// Module 6853 (items)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const items = [arg1(dependencyMap[2]).WidgetType.CURRENT_GAMES, arg1(dependencyMap[2]).WidgetType.FAVORITE_GAMES, arg1(dependencyMap[2]).WidgetType.WANT_TO_PLAY_GAMES, arg1(dependencyMap[2]).WidgetType.PLAYED_GAMES];
const tmp2 = () => {
  class BaseGameWidget {
    constructor(arg0) {
      ({ id, type, games } = arg0);
      tmp = closure_2(this, BaseGameWidget);
      this.id = id;
      this.type = type;
      this.games = games;
      return;
    }
  }
  const arg1 = BaseGameWidget;
  let obj = {
    key: "toSubmission",
    value() {
      let obj = { id: this.id };
      obj = { type: this.type, games: games.map((applicationId) => ({ game_id: applicationId.applicationId, comment: applicationId.comment, tags: applicationId.tags })) };
      const games = this.games;
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
        tmp = self.games.length <= BaseGameWidget(closure_1[3]).GAME_WIDGET_LIMITS_BY_TYPE[self.type];
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
          areWidgetGamesEqualResult = BaseGameWidget(closure_1[4]).areWidgetGamesEqual(self.games, type.games, self.type);
          const obj = BaseGameWidget(closure_1[4]);
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
}();
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/user_profile/UserProfileGameWidgetTypes.tsx");

export const GAME_WIDGET_TYPES = items;
export const isGameWidgetType = function isGameWidgetType(arg0) {
  return items.includes(arg0);
};
export const isGameWidget = function isGameWidget(widget) {
  return widget instanceof tmp2;
};
export const BaseGameWidget = tmp2;
