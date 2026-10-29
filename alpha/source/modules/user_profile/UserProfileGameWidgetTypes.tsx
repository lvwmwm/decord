// Module ID: 7762
// Function ID: 7763
// Name: UserProfileGameWidgetTypes
// Dependencies: [7763, 7761, 7764, 2]
// Exports: isGameWidget, isGameWidgetType

// Module 7762 (UserProfileGameWidgetTypes)
import WidgetType from "WidgetType" /* 7761 */;
import GameWidgetLimits from "GameWidgetLimits" /* 7764 */;
import UserProfileWidgetConstants from "UserProfileWidgetConstants" /* 7763 */;
import size from "module_2" /* 2 */;

let c2;
let c3;
({ widgetSupportsComment: c2, widgetSupportsTags: c3 } = UserProfileWidgetConstants);
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
    obj2 = {
      type: this.type,
      games: games.map(function convertGame(gameId) {
        return { game_id: gameId.gameId, comment: gameId.comment, tags: gameId.tags };
      })
    };
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
    const f147942 = (gameId, index) => {
      let c0;
      let flag = false;
      if (gameId.gameId === games1[index].gameId) {
        if (!React2(type)) {
          flag = true;
          if (_false(type)) {
            const tags = gameId.tags;
            let tmp10 = null;
            if (null != tags) {
              tmp10 = null;
              if ("" !== tags) {
                const _Array3 = Array;
                if (!Array.isArray(tags)) {
                  tmp10 = tags;
                } else {
                  tmp10 = null;
                }
              }
            }
            const tags1 = tmp.tags;
            let tmp12 = null;
            if (null != tags1) {
              tmp12 = null;
              if ("" !== tags1) {
                const _Array4 = Array;
                if (!Array.isArray(tags1)) {
                  tmp12 = tags1;
                } else {
                  tmp12 = null;
                }
              }
            }
            c0 = tmp12;
            flag = false;
            if (null === tmp10 === null === tmp12) {
              flag = true;
              if (null !== tmp10) {
                flag = true;
                if (null !== tmp12) {
                  flag = false;
                  if (tmp10.length === tmp12.length) {
                    flag = true;
                    if (!tmp10.every((item, index) => item === _null[index])) {
                      flag = false;
                    }
                  }
                }
              }
            }
          }
        } else {
          const comment = gameId.comment;
          if (null != comment) {
            if ("" !== comment) {
              const _Array = Array;
            }
          }
          const comment1 = tmp.comment;
          if (null != comment1) {
            if ("" !== comment1) {
              const _Array2 = Array;
            }
          }
          flag = false;
        }
      }
      return flag;
    };
    let tmp = type instanceof BaseGameWidget;
    if (tmp) {
      const self = this;
      let tmp2 = type.type === this.type;
      if (tmp2) {
        const games = self.games;
        const games1 = type.games;
        type = self.type;
        tmp2 = games.length === games1.length && games.every(f147942);
        const tmp3 = games.length === games1.length && games.every(f147942);
      }
      tmp = tmp2;
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
export function isGameWidgetType(arg0) {
  return items.includes(arg0);
}
export function isGameWidget(widget) {
  return widget instanceof BaseGameWidget;
}
export { BaseGameWidget };
