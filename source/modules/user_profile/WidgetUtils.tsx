// Module ID: 6854
// Function ID: 54172
// Name: widgetSupportsComment
// Dependencies: []
// Exports: addPendingGameToWidget, addWidgetToPending, areWidgetGamesEqual, getGameWidgetSubtitle, getRandomElement, getRandomElements, getWidgetTitle, isGameAllowedInGameWidgets, isGameLimitReached, removePendingGameFromWidget, removeTagFromGame, removeWidgetFromPending, reorderGamesInWidget, reorderWidgets, updatePendingGameComment

// Module 6854 (widgetSupportsComment)
function widgetSupportsComment(arg0) {
  return closure_8.includes(arg0);
}
function widgetSupportsTags(arg0) {
  return closure_9.includes(arg0);
}
function widgetMaxGames(type) {
  let num = 0;
  if (type in arg1(dependencyMap[5]).GAME_WIDGET_LIMITS_BY_TYPE) {
    num = arg1(dependencyMap[5]).GAME_WIDGET_LIMITS_BY_TYPE[type];
  }
  return num;
}
function getSavedWidgets() {
  const currentUser = currentUser.getCurrentUser();
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
  if (closure_6.hasPendingChanges()) {
    let pendingWidgets = closure_6.getPendingWidgets();
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
  const arg1 = widgetType;
  const found = getCurrentWidgets().filter(arg1(dependencyMap[7]).isGameWidget);
  const found1 = found.find((type) => type.type === type);
  let tmp2 = null;
  if (null != found1) {
    tmp2 = found1;
  }
  return tmp2;
}
function replaceWidgetInList(baseGameWidget) {
  const arg1 = baseGameWidget;
  const obj = getCurrentWidgets();
  const findIndexResult = obj.findIndex((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === getUniqueKey.getUniqueKey();
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
  if (arg2.length <= Object.values(arg1(dependencyMap[9]).WidgetGameTag).length) {
    const tmp3 = findGameWidget(widgetType);
    if (null != tmp3) {
      const games = tmp3.games;
      const found = games.find((applicationId) => applicationId.applicationId === arg1);
      if (null != found) {
        let obj = {};
        const merged = Object.assign(found);
        obj["tags"] = arg2;
        const importDefault = obj;
        const games1 = tmp3.games;
        const mapped = games1.map((applicationId) => {
          let tmp = applicationId;
          if (applicationId.applicationId === arg1) {
            tmp = obj;
          }
          return tmp;
        });
        const BaseGameWidget = arg1(dependencyMap[7]).BaseGameWidget;
        obj = {};
        const merged1 = Object.assign(tmp3);
        obj["games"] = mapped;
        const prototype = BaseGameWidget.prototype;
        const baseGameWidget = new BaseGameWidget(obj);
        const tmp21 = replaceWidgetInList(baseGameWidget);
        importDefault(dependencyMap[8]).setPendingWidgets(tmp21);
        const obj3 = importDefault(dependencyMap[8]);
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
function isNSFWGame(themes) {
  themes = undefined;
  if (null != themes) {
    themes = themes.themes;
  }
  let hasItem = null != themes;
  if (hasItem) {
    themes = themes.themes;
    hasItem = themes.includes(arg1(dependencyMap[11]).GameTheme.EROTIC);
  }
  return hasItem;
}
function isAgeRestrictedGame(content_classification) {
  let tmp = null != content_classification.content_classification;
  if (tmp) {
    let obj = arg1(dependencyMap[12]);
    obj = { type: arg1(dependencyMap[12]).ContentClassificationVariant.MINIMAL, data: content_classification.content_classification };
    const result = obj.contentClassificationToAgeRestriction(obj);
    tmp = result === arg1(dependencyMap[13]).AgeRestrictionStatus.ADULT;
  }
  return tmp;
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
({ WIDGET_TITLES_BY_TYPE: closure_7, WIDGETS_SUPPORTING_COMMENT: closure_8, WIDGETS_SUPPORTING_TAGS: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/user_profile/WidgetUtils.tsx");

export const getWidgetTitle = function getWidgetTitle(widget) {
  return closure_7[widget.type](widget);
};
export const getGameWidgetSubtitle = function getGameWidgetSubtitle(games, showEditingControls) {
  if (showEditingControls.showEditingControls) {
    if (games.games.length > 0) {
      if (1 === showEditingControls(dependencyMap[5]).GAME_WIDGET_LIMITS_BY_TYPE[games.type]) {
        const intl2 = showEditingControls(dependencyMap[6]).intl;
        let stringResult = intl2.string(showEditingControls(dependencyMap[6]).t.wiXdEa);
      } else {
        const intl = showEditingControls(dependencyMap[6]).intl;
        const obj = { numGames: showEditingControls(dependencyMap[5]).GAME_WIDGET_LIMITS_BY_TYPE[games.type] };
        stringResult = intl.format(showEditingControls(dependencyMap[6]).t.zR1+0/, obj);
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
  const arg1 = arg0;
  const arr = getCurrentWidgets();
  if (null == arr.find((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey === getUniqueKey.getUniqueKey();
  })) {
    const items = [arg0];
    HermesBuiltin.arraySpread(arr, 1);
    importDefault(dependencyMap[8]).setPendingWidgets(items);
    const obj = importDefault(dependencyMap[8]);
  }
};
export const removeWidgetFromPending = function removeWidgetFromPending(arg0) {
  const arg1 = arg0;
  const found = getCurrentWidgets().filter((getUniqueKey) => {
    const uniqueKey = getUniqueKey.getUniqueKey();
    return uniqueKey !== getUniqueKey.getUniqueKey();
  });
  const arr = getCurrentWidgets();
  importDefault(dependencyMap[8]).setPendingWidgets(found);
};
export { updatePendingGameTags };
export const removeTagFromGame = function removeTagFromGame(widgetType) {
  const importDefault = arg2;
  const tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const games = tmp.games;
    const found = games.find((applicationId) => applicationId.applicationId === arg1);
    if (null != found) {
      if (null != found.tags) {
        if (0 !== found.tags.length) {
          const tags = found.tags;
          let found1 = tags.filter((arg0) => arg0 !== arg2);
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
  const tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const games = tmp.games;
    const found = games.find((applicationId) => applicationId.applicationId === arg1);
    if (null != found) {
      if (arg2 !== found.comment) {
        let obj = {};
        const merged = Object.assign(found);
        obj["comment"] = arg2;
        const importDefault = obj;
        const games1 = tmp.games;
        const mapped = games1.map((applicationId) => {
          let tmp = applicationId;
          if (applicationId.applicationId === arg1) {
            tmp = obj;
          }
          return tmp;
        });
        const BaseGameWidget = arg1(dependencyMap[7]).BaseGameWidget;
        obj = {};
        const merged1 = Object.assign(tmp);
        obj["games"] = mapped;
        const prototype = BaseGameWidget.prototype;
        const baseGameWidget = new BaseGameWidget(obj);
        const tmp18 = replaceWidgetInList(baseGameWidget);
        importDefault(dependencyMap[8]).setPendingWidgets(tmp18);
        const obj3 = importDefault(dependencyMap[8]);
      }
    }
  }
};
export const addPendingGameToWidget = function addPendingGameToWidget(ignoreMaxGames) {
  let game;
  let widgetType;
  ({ widgetType, game } = ignoreMaxGames);
  const arg1 = game;
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
  const baseGameWidget = new arg1(dependencyMap[7]).BaseGameWidget(obj);
  const tmp7 = replaceWidgetInList;
  const tmp7Result = replaceWidgetInList(baseGameWidget);
  importDefault(dependencyMap[8]).setPendingWidgets(tmp7Result);
  const useGame = arg1(dependencyMap[10]).useGame;
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
            importDefault(dependencyMap[8]).setPendingWidgets(items);
            const obj = importDefault(dependencyMap[8]);
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
                const BaseGameWidget = arg1(dependencyMap[7]).BaseGameWidget;
                const obj = {};
                const merged = Object.assign(tmp);
                obj["games"] = items;
                const prototype = BaseGameWidget.prototype;
                const baseGameWidget = new BaseGameWidget(obj);
                const tmp17 = replaceWidgetInList(baseGameWidget);
                importDefault(dependencyMap[8]).setPendingWidgets(tmp17);
                const obj2 = importDefault(dependencyMap[8]);
              }
            }
          }
        }
      }
    }
  }
};
export const removePendingGameFromWidget = function removePendingGameFromWidget(widgetType) {
  let tmp = findGameWidget(widgetType);
  if (null != tmp) {
    const found = null != tmp.games ? tmp.games : [].filter((applicationId) => applicationId.applicationId !== arg1);
    const BaseGameWidget = arg1(dependencyMap[7]).BaseGameWidget;
    const obj = {};
    const merged = Object.assign(tmp);
    obj["games"] = found;
    const prototype = BaseGameWidget.prototype;
    tmp = new.target;
    const baseGameWidget = new BaseGameWidget(obj);
    const arr = null != tmp.games ? tmp.games : [];
    const tmp13 = replaceWidgetInList(baseGameWidget);
    importDefault(dependencyMap[8]).setPendingWidgets(tmp13);
    const obj2 = importDefault(dependencyMap[8]);
  }
};
export const isGameLimitReached = function isGameLimitReached(games) {
  return games.games.length >= widgetMaxGames(games.type);
};
export const areWidgetGamesEqual = function areWidgetGamesEqual(games, games2, type) {
  const importDefault = type;
  return games.length === games2.length && games.every((applicationId) => function areGamesEqual(applicationId, applicationId2, arg2) {
    if (applicationId.applicationId !== applicationId2.applicationId) {
      return false;
    } else {
      if (callback(arg2)) {
        if (tmp2 !== callback3(applicationId2.comment)) {
          return false;
        }
        const tmp2 = callback3(applicationId.comment);
      }
      if (callback2(arg2)) {
        const arr = callback3(applicationId.tags);
        const arr2 = callback3(applicationId2.tags);
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
  }(applicationId, arg1[arg1], arg2));
};
export { isNSFWGame };
export { isAgeRestrictedGame };
export const isGameAllowedInGameWidgets = function isGameAllowedInGameWidgets(id) {
  let tmp = !isNSFWGame(id);
  if (tmp) {
    tmp = !isAgeRestrictedGame(id);
  }
  if (tmp) {
    const GAME_WIDGET_BANNED_APPLICATION_IDS = arg1(dependencyMap[5]).GAME_WIDGET_BANNED_APPLICATION_IDS;
    tmp = !GAME_WIDGET_BANNED_APPLICATION_IDS.has(id.id);
  }
  return tmp;
};
