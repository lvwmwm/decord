// Module ID: 6859
// Function ID: 54236
// Name: widgetSupportsComment
// Dependencies: [57, 1849, 6855, 6860, 6861, 6858, 1212, 6857, 6862, 6863, 6864, 6866, 6868, 2]
// Exports: addPendingGameToWidget, addWidgetToPending, areWidgetGamesEqual, getGameWidgetSubtitle, getRandomElement, getRandomElements, getWidgetTitle, isGameAllowedInGameWidgets, isGameLimitReached, removePendingGameFromWidget, removeTagFromGame, removeWidgetFromPending, reorderGamesInWidget, reorderWidgets, updatePendingGameComment

// Module 6859 (widgetSupportsComment)
import _slicedToArray from "_slicedToArray";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import items from "items";

let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function widgetSupportsComment(arg0) {
  return closure_8.includes(arg0);
}
function widgetSupportsTags(arg0) {
  return closure_9.includes(arg0);
}
function widgetMaxGames(type) {
  let num = 0;
  if (type in require(6858) /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE) {
    num = require(6858) /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE[type];
  }
  return num;
}
function getSavedWidgets() {
  currentUser = currentUser.getCurrentUser();
  let userProfile = null;
  if (null != currentUser) {
    userProfile = userProfile.getUserProfile(currentUser.id);
  }
  let widgets;
  if (null != userProfile) {
    widgets = userProfile.widgets;
  }
  if (null == widgets) {
    widgets = [];
  }
  return widgets;
}
function getCurrentWidgets() {
  if (_createForOfIteratorHelperLoose.hasPendingChanges()) {
    let pendingWidgets = _createForOfIteratorHelperLoose.getPendingWidgets();
    if (null == pendingWidgets) {
      pendingWidgets = [];
    }
    let tmp2 = pendingWidgets;
  } else {
    tmp2 = getSavedWidgets();
  }
  return tmp2;
}
function findGameWidget(widgetType) {
  const _require = widgetType;
  const found = getCurrentWidgets().filter(_require(6857).isGameWidget);
  const found1 = found.find((type) => type.type === closure_0);
  let tmp2 = null;
  if (null != found1) {
    tmp2 = found1;
  }
  return tmp2;
}
function replaceWidgetInList(baseGameWidget) {
  let closure_0 = baseGameWidget;
  const obj = getCurrentWidgets();
  const findIndexResult = obj.findIndex((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === baseGameWidget.getUniqueKey();
  });
  if (-1 === findIndexResult) {
    const items = [baseGameWidget];
    HermesBuiltin.arraySpread(obj, 1);
    return items;
  } else {
    const items1 = [];
    HermesBuiltin.arraySpread(obj, 0);
    items1[findIndexResult] = baseGameWidget;
    return items1;
  }
}
function updatePendingGameTags(widgetType) {
  const _require = arg1;
  if (arg2.length <= Object.values(_require(6863).WidgetGameTag).length) {
    const tmp3 = findGameWidget(widgetType);
    if (null != tmp3) {
      const games = tmp3.games;
      const found = games.find((applicationId) => applicationId.applicationId === closure_0);
      if (null != found) {
        let obj = {};
        const merged = Object.assign(found);
        obj["tags"] = arg2;
        const games1 = tmp3.games;
        const mapped = games1.map((applicationId) => {
          let tmp = applicationId;
          if (applicationId.applicationId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        const BaseGameWidget = _require(6857).BaseGameWidget;
        obj = {};
        const merged1 = Object.assign(tmp3);
        obj["games"] = mapped;
        const prototype = BaseGameWidget.prototype;
        const baseGameWidget = new BaseGameWidget(obj);
        const tmp21 = replaceWidgetInList(baseGameWidget);
        obj(6862).setPendingWidgets(tmp21);
        const obj3 = obj(6862);
      }
    }
  }
}
function normalizeNullishValue(arg0) {
  let tmp = null;
  if (null != arg0) {
    tmp = null;
    if ("" !== arg0) {
      const _Array = Array;
      if (!Array.isArray(arg0)) {
        tmp = arg0;
      } else {
        tmp = null;
      }
    }
  }
  return tmp;
}
function isAgeRestrictedGame(content_classification) {
  let tmp = null != content_classification.content_classification;
  if (tmp) {
    let obj = require(6866) /* _createForOfIteratorHelperLoose */;
    obj = { type: require(6866) /* _createForOfIteratorHelperLoose */.ContentClassificationVariant.MINIMAL, data: content_classification.content_classification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === require(6868) /* AgeRestrictionStatus */.AgeRestrictionStatus.ADULT;
  }
  return tmp;
}
({ WIDGET_TITLES_BY_TYPE: closure_7, WIDGETS_SUPPORTING_COMMENT: closure_8, WIDGETS_SUPPORTING_TAGS: closure_9 } = items);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_profile/WidgetUtils.tsx");

export const getWidgetTitle = function getWidgetTitle(widget) {
  return dependencyMap[widget.type](widget);
};
export const getGameWidgetSubtitle = function getGameWidgetSubtitle(games, showEditingControls) {
  if (showEditingControls.showEditingControls) {
    if (games.games.length > 0) {
      if (1 === require(6858) /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE[games.type]) {
        const intl2 = require(1212) /* getSystemLocale */.intl;
        let stringResult = intl2.string(require(1212) /* getSystemLocale */.t.wiXdEa);
      } else {
        const intl = require(1212) /* getSystemLocale */.intl;
        const obj = { numGames: require(6858) /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_LIMITS_BY_TYPE[games.type] };
        stringResult = intl.format(require(1212) /* getSystemLocale */.t["zR1+0/"], obj);
      }
      return stringResult;
    }
  }
};
export { widgetSupportsComment };
export { widgetSupportsTags };
export { widgetMaxGames };
export const getRandomElement = function getRandomElement(arg0) {
  return arg0[Math.floor(Math, Math.random(Math) * arg0.length)];
};
export const getRandomElements = function getRandomElements(arg0, arg1) {
  const items = [...arg0];
  const sorted = items.sort(() => 0.5 - Math.random());
  return sorted.slice(0, arg1);
};
export { getSavedWidgets };
export { replaceWidgetInList };
export const addWidgetToPending = function addWidgetToPending(arg0) {
  let closure_0 = arg0;
  const arr = getCurrentWidgets();
  if (null == arr.find((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === uniqueKey.getUniqueKey();
  })) {
    const items = [arg0];
    HermesBuiltin.arraySpread(arr, 1);
    importDefault(6862).setPendingWidgets(items);
    const obj = importDefault(6862);
  }
};
export const removeWidgetFromPending = function removeWidgetFromPending(arg0) {
  let closure_0 = arg0;
  const found = getCurrentWidgets().filter((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey !== uniqueKey.getUniqueKey();
  });
  const arr = getCurrentWidgets();
  importDefault(6862).setPendingWidgets(found);
};
export { updatePendingGameTags };
export const removeTagFromGame = function removeTagFromGame(widgetType) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  const tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const games = tmp.games;
    const found = games.find((applicationId) => applicationId.applicationId === closure_0);
    if (null != found) {
      if (null != found.tags) {
        if (0 !== found.tags.length) {
          const tags = found.tags;
          let found1 = tags.filter((arg0) => arg0 !== closure_1);
          if (found1.length <= 0) {
            found1 = [];
          }
          updatePendingGameTags(tmp.type, arg1, found1);
          const tmp3 = updatePendingGameTags;
        }
      }
    }
  }
};
export const updatePendingGameComment = function updatePendingGameComment(widgetType) {
  const _require = arg1;
  let tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const games = tmp.games;
    const found = games.find((applicationId) => applicationId.applicationId === closure_0);
    if (null != found) {
      if (arg2 !== found.comment) {
        let obj = {};
        const merged = Object.assign(found);
        obj["comment"] = arg2;
        const games1 = tmp.games;
        const mapped = games1.map((applicationId) => {
          let tmp = applicationId;
          if (applicationId.applicationId === closure_0) {
            tmp = obj;
          }
          return tmp;
        });
        const BaseGameWidget = _require(6857).BaseGameWidget;
        obj = {};
        const merged1 = Object.assign(tmp);
        obj["games"] = mapped;
        const prototype = BaseGameWidget.prototype;
        const baseGameWidget = new BaseGameWidget(obj);
        const tmp18 = replaceWidgetInList(baseGameWidget);
        obj(6862).setPendingWidgets(tmp18);
        const obj3 = obj(6862);
      }
    }
  }
};
export const addPendingGameToWidget = function addPendingGameToWidget(ignoreMaxGames) {
  let game;
  let widgetType;
  ({ widgetType, game } = ignoreMaxGames);
  let flag = ignoreMaxGames.ignoreMaxGames;
  if (flag === undefined) {
    flag = false;
  }
  let tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const games = tmp.games;
    let length;
    if (null != games) {
      length = games.length;
    }
    let num = 0;
    if (null != length) {
      num = length;
    }
    let games1 = tmp.games;
    if (null == games1) {
      games1 = [];
    }
  }
  let obj = { applicationId: game.applicationId, comment: game.comment, tags: game.tags };
  if (null != tmp) {
    const items = [obj];
    let games2 = tmp.games;
    if (null == games2) {
      games2 = [];
    }
    HermesBuiltin.arraySpread(games2, 1);
    let items1 = items;
  } else {
    items1 = [obj];
  }
  obj = {};
  if (null == tmp) {
    obj = { type: widgetType };
    tmp = obj;
  }
  const merged = Object.assign(tmp);
  obj["games"] = items1;
  const baseGameWidget = new game(6857).BaseGameWidget(obj);
  const tmp7 = replaceWidgetInList;
  const tmp7Result = replaceWidgetInList(baseGameWidget);
  importDefault(6862).setPendingWidgets(tmp7Result);
  const useGame = game(6864).useGame;
  const items2 = [game.applicationId];
  const many = useGame.fetchMany(items2);
};
export const reorderWidgets = function reorderWidgets(arg0, arg1) {
  if (arg0 !== arg1) {
    const arr2 = getCurrentWidgets();
    if (arg0 >= 0) {
      if (arg0 < arr2.length) {
        if (arg1 >= 0) {
          if (arg1 < arr2.length) {
            const items = [];
            HermesBuiltin.arraySpread(arr2, 0);
            items.splice(arg1, 0, callback(items.splice(arg0, 1), 1)[0]);
            importDefault(6862).setPendingWidgets(items);
            const obj = importDefault(6862);
          }
        }
      }
    }
  }
};
export const reorderGamesInWidget = function reorderGamesInWidget(widgetType) {
  const tmp = findGameWidget(widgetType);
  if (null != tmp) {
    if (null != tmp.games) {
      if (arg1 !== arg2) {
        const items = [];
        HermesBuiltin.arraySpread(tmp.games, 0);
        if (arg1 >= 0) {
          if (arg1 < items.length) {
            if (arg2 >= 0) {
              if (arg2 < items.length) {
                items.splice(arg2, 0, callback(items.splice(arg1, 1), 1)[0]);
                const BaseGameWidget = require(6857) /* items */.BaseGameWidget;
                const obj = {};
                const merged = Object.assign(tmp);
                obj["games"] = items;
                const prototype = BaseGameWidget.prototype;
                const baseGameWidget = new BaseGameWidget(obj);
                const tmp17 = replaceWidgetInList(baseGameWidget);
                importDefault(6862).setPendingWidgets(tmp17);
                const obj2 = importDefault(6862);
              }
            }
          }
        }
      }
    }
  }
};
export const removePendingGameFromWidget = function removePendingGameFromWidget(widgetType) {
  const _require = arg1;
  let tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const found = null != tmp.games ? tmp.games : [].filter((applicationId) => applicationId.applicationId !== closure_0);
    const BaseGameWidget = _require(6857).BaseGameWidget;
    const obj = {};
    const merged = Object.assign(tmp);
    obj["games"] = found;
    const prototype = BaseGameWidget.prototype;
    tmp = new.target;
    const baseGameWidget = new BaseGameWidget(obj);
    const arr = null != tmp.games ? tmp.games : [];
    const tmp13 = replaceWidgetInList(baseGameWidget);
    importDefault(6862).setPendingWidgets(tmp13);
    const obj2 = importDefault(6862);
  }
};
export const isGameLimitReached = function isGameLimitReached(games) {
  return games.games.length >= widgetMaxGames(games.type);
};
export const areWidgetGamesEqual = function areWidgetGamesEqual(games, games2, type) {
  let closure_0 = games2;
  let closure_1 = type;
  return games.length === games2.length && games.every((applicationId) => (function areGamesEqual(applicationId, applicationId2, closure_1) {
    if (applicationId.applicationId !== applicationId2.applicationId) {
      return false;
    } else {
      if (outer2_10(closure_1)) {
        if (tmp2 !== outer2_18(applicationId2.comment)) {
          return false;
        }
        tmp2 = outer2_18(applicationId.comment);
      }
      if (outer2_11(closure_1)) {
        const arr = outer2_18(applicationId.tags);
        const arr2 = outer2_18(applicationId2.tags);
        if (null === arr !== (null === arr2)) {
          return false;
        } else if (null !== arr) {
          if (null !== arr2) {
            if (arr.length !== arr2.length) {
              return false;
            } else if (!arr.every((arg0, arg1) => arg0 === arr2[arg1])) {
              return false;
            }
          }
        }
      }
      return true;
    }
  })(applicationId, games2[arg1], closure_1));
};
export { isAgeRestrictedGame };
export const isGameAllowedInGameWidgets = function isGameAllowedInGameWidgets(id) {
  const tmp = isAgeRestrictedGame(id);
  let tmp2 = !tmp;
  if (!tmp) {
    const GAME_WIDGET_BANNED_APPLICATION_IDS = require(6858) /* GAME_WIDGET_LIMITS_BY_TYPE */.GAME_WIDGET_BANNED_APPLICATION_IDS;
    tmp2 = !GAME_WIDGET_BANNED_APPLICATION_IDS.has(id.id);
  }
  return tmp2;
};
