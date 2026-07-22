// Module ID: 13441
// Function ID: 102052
// Name: getSettingTitle
// Dependencies: []
// Exports: getInitialScrollIndex, getScoredSettingListSearchResultItems, getSettingListSearchResultItems, getSettingScreens, getSettingSearchableTitles, onRouteSettingOnPress, toSettingListItems

// Module 13441 (getSettingTitle)
function getSettingTitle(closure_0) {
  const cachedSettingTitle = require(dependencyMap[7]).getCachedSettingTitle(closure_0);
  const obj = require(dependencyMap[7]);
  importDefault(dependencyMap[8])(null != cachedSettingTitle, "Setting " + closure_0 + " is missing a title.");
  return cachedSettingTitle;
}
function getSearchResultIconComponent(arg0) {
  const tmp = require(dependencyMap[9]).SETTING_RENDERER_CONFIG[arg0];
  const type = tmp.type;
  if (constants2.RADIO !== type) {
    if (constants2.VOLUME_SLIDER !== type) {
      if (constants2.SLIDER !== type) {
        return tmp.IconComponent;
      }
    }
  }
  return null;
}
function isSupportedSearchResultSettingData(type) {
  return set.has(type.type);
}
const _module = require(dependencyMap[0]);
({ ListItemType: closure_3, NodeType: closure_4, SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES: closure_5 } = _module);
const AnalyticsPages = require(dependencyMap[1]).AnalyticsPages;
const _module1 = require(dependencyMap[12]);
const result = _module1.fileFinishedImporting("modules/settings/native/renderer/SettingRendererUtils.tsx");

export const onRouteSettingOnPress = function onRouteSettingOnPress(arg0) {
  let preNavigationAction;
  ({ navigation: closure_0, screen: closure_1, preNavigationAction } = arg0);
  function goToScreen() {
    function onPress(arg0) {
      let obj = lib(closure_2[2]);
      obj.setSection(lib.route);
      obj = { destinationPane: lib.route, source: obj };
      obj = { page: constants.USER_SETTINGS };
      const result = onPress(closure_2[3]).trackUserSettingsPaneViewed(obj);
      onPress.navigate(lib.route);
    }
    if (obj.getKeyboardIsOpen()) {
      if (obj2.isIOS()) {
        const result = onPress(closure_2[6]).dismissGlobalKeyboard();
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          onPress();
        }, 100);
        const obj3 = onPress(closure_2[6]);
      }
    }
    onPress();
  }
  let preNavigationActionResult;
  if (null != preNavigationAction) {
    preNavigationActionResult = preNavigationAction(goToScreen);
  }
  if (false !== preNavigationActionResult) {
    goToScreen();
  }
};
export { getSettingTitle };
export const getSettingSearchableTitles = function getSettingSearchableTitles() {
  const entries = Object.entries(require(dependencyMap[9]).SETTING_RENDERER_CONFIG);
  const items = [];
  const require = items;
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (!tmp2.unsearchable) {
      const cachedSettingTitle = items(closure_2[7]).getCachedSettingTitle(tmp);
      if (null != cachedSettingTitle) {
        const items = [tmp, ];
        const items1 = [cachedSettingTitle];
        HermesBuiltin.arraySpread(items(closure_2[7]).getCachedSettingSearchTerms(tmp), 1);
        items[1] = items1;
        items.push(items);
        const obj2 = items(closure_2[7]);
      }
      const obj = items(closure_2[7]);
    }
  });
  return items;
};
export const getSettingScreens = function getSettingScreens() {
  const items = [];
  const require = items;
  const importDefault = new Set();
  const entries = Object.entries(require(dependencyMap[9]).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (tmp2.type === constants.ROUTE) {
      if (!set.has(tmp2.screen.route)) {
        const items = [tmp, tmp2.screen];
        items.push(items);
        set.add(tmp2.screen.route);
      }
    }
  });
  return items;
};
export const toSettingListItems = function toSettingListItems(node, field) {
  const require = field;
  const items = [];
  const importDefault = items;
  const sections = node.sections;
  const item = sections.forEach((settings) => {
    settings = settings.settings;
    const found = settings.filter((arg0) => !arr(closure_2[10]).isBlocked(arg0, found));
    const arg1 = found;
    if (0 !== found.length) {
      let obj = { type: constants.SECTION_HEADER, label: settings.label };
      items.push(obj);
      const item = found.forEach((setting) => {
        const obj = { type: constants.SECTION_ROW, setting, settingData: found(closure_2[9]).SETTING_RENDERER_CONFIG[setting], start: 0 === arg1, end: arg1 === found.length - 1 };
      });
      if (null != settings.subLabel) {
        obj = { type: constants.SECTION_FOOTER, label: settings.subLabel };
        items.push(obj);
      }
    }
  });
  return items;
};
export const getSettingListSearchResultItems = function getSettingListSearchResultItems(arr) {
  const items = [];
  const require = items;
  const item = arr.forEach((setting) => {
    const tmp = items(items1[9]).SETTING_RENDERER_CONFIG[setting];
    if (null != tmp.parent) {
      const highestLevelAncestor = sortByResult(items1[10]).getHighestLevelAncestor(setting);
      const obj2 = sortByResult(items1[10]);
      let obj = { category: highestLevelAncestor, setting, data: sortByResult(items1[10]).getNearestRouteAncestorDataOrSelf(setting) };
      items.push(obj);
      const obj3 = sortByResult(items1[10]);
    } else if (callback3(tmp)) {
      obj = { category: setting, setting, data: tmp };
      items.push(obj);
    }
  });
  const sortByResult = require(dependencyMap[11]).sortBy(items, (category) => category.category);
  const importDefault = sortByResult;
  const items1 = [];
  const dependencyMap = items1;
  const set = new Set();
  const item1 = sortByResult.forEach((data, index) => {
    let category;
    let setting;
    ({ category, setting } = data);
    let obj = sortByResult(items1[10]);
    const breadcrumbs = obj.getBreadcrumbs(setting);
    const tmp = callback(setting);
    set.add(category);
    obj = { type: set.SETTING_SEARCH_RESULT, settingData: data.data, title: tmp };
    let tmp6;
    if (tmp3) {
      tmp6 = callback2(category);
    }
    obj.IconComponent = tmp6;
    obj.breadcrumbs = breadcrumbs;
    obj.setting = setting;
    obj.index = index;
    obj.total = sortByResult.length;
    items1.push(obj);
  });
  return items1;
};
export const getScoredSettingListSearchResultItems = function getScoredSettingListSearchResultItems(settings, isLoading, placeholderCount) {
  const items = [];
  const require = items;
  if (isLoading) {
    for (let num4 = 0; num4 < placeholderCount; num4 = num4 + 1) {
      let obj = {};
      let tmp11 = constants;
      obj.type = constants.SECTION_ROW_PLACEHOLDER;
      obj.start = 0 === num4;
      obj.end = num4 === placeholderCount - 1;
      let arr = items.push(obj);
    }
    return items;
  } else {
    const _Map = Map;
    const map = new Map();
    const importDefault = map;
    const _Map2 = Map;
    const map1 = new Map();
    const dependencyMap = map1;
    const constants = 0;
    const item = settings.forEach((arg0) => {
      let score;
      let setting;
      ({ setting, score } = arg0);
      const tmp = items(map1[9]).SETTING_RENDERER_CONFIG[setting];
      let tmp2 = null != tmp.parent;
      if (!tmp2) {
        tmp2 = callback(tmp);
      }
      if (tmp2) {
        closure_3 = closure_3 + 1;
      }
      let obj = map(map1[10]);
      const highestLevelAncestor = obj.getHighestLevelAncestor(setting);
      let sum = score;
      if (highestLevelAncestor === setting) {
        sum = score + 0.05;
      }
      let value = map1.get(highestLevelAncestor);
      let num2 = 0;
      if (null != value) {
        num2 = value;
      }
      const result = map1.set(highestLevelAncestor, Math.max(num2, sum));
      value = map.get(highestLevelAncestor);
      if (null == value) {
        value = [];
      }
      obj = { setting, score: sum };
      value.push(obj);
      const result1 = map.set(highestLevelAncestor, value);
    });
    const _Array = Array;
    arr = Array.from(map1.entries());
    const sorted = arr.sort((arg0, arg1) => arg1[1] - arg0[1]);
    const mapped = sorted.map((arg0) => {
      let tmp;
      [tmp] = arg0;
      return tmp;
    });
    let closure_4 = 0;
    const item1 = mapped.forEach((arg0) => {
      const items = arg0;
      const value = map.get(arg0);
      if (null != value) {
        const sorted = value.sort((setting, setting2) => {
          let num = -1;
          if (setting.setting !== setting) {
            let num2 = 1;
            if (setting2.setting !== setting) {
              num2 = setting2.score - setting.score;
            }
            num = num2;
          }
          return num;
        });
        const item = sorted.forEach((setting) => {
          setting = setting.setting;
          let nearestRouteAncestorDataOrSelf = setting(closure_2[9]).SETTING_RENDERER_CONFIG[setting];
          if (null != nearestRouteAncestorDataOrSelf.parent) {
            let obj = callback(closure_2[10]);
            let highestLevelAncestor = obj.getHighestLevelAncestor(setting);
            nearestRouteAncestorDataOrSelf = callback(closure_2[10]).getNearestRouteAncestorDataOrSelf(setting);
            const obj2 = callback(closure_2[10]);
          } else {
            highestLevelAncestor = setting;
          }
          obj = { type: constants.SETTING_SEARCH_RESULT, settingData: nearestRouteAncestorDataOrSelf, title: callback2(setting) };
          let tmp6;
          if (0 === arg1) {
            tmp6 = callback3(highestLevelAncestor);
          }
          obj.IconComponent = tmp6;
          obj.breadcrumbs = callback(closure_2[10]).getBreadcrumbs(setting);
          obj.setting = setting;
          obj.index = closure_4;
          obj.total = constants;
          closure_4 = closure_4 + 1;
          setting.push(obj);
        });
      }
    });
    return items;
  }
};
export const getInitialScrollIndex = function getInitialScrollIndex(arg0, findLastIndex) {
  const require = arg0;
  const findLastIndexResult = findLastIndex.findLastIndex((type) => {
    let tmp = type.type === constants.SECTION_ROW;
    if (tmp) {
      tmp = type.setting === type;
    }
    return tmp;
  });
  if (1 !== findLastIndexResult) {
    const _Math = Math;
    return Math.max(0, findLastIndexResult);
  }
};
