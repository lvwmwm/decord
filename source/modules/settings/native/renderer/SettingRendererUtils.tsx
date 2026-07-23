// Module ID: 13555
// Function ID: 104208
// Name: getSettingTitle
// Dependencies: [10096, 653, 7375, 5793, 5784, 477, 1820, 13556, 44, 13557, 14575, 22, 2]
// Exports: getInitialScrollIndex, getScoredSettingListSearchResultItems, getSettingListSearchResultItems, getSettingScreens, getSettingSearchableTitles, onRouteSettingOnPress, toSettingListItems

// Module 13555 (getSettingTitle)
import GUILD_SELECT_ALL_SERVERS_OPTION_ID from "GUILD_SELECT_ALL_SERVERS_OPTION_ID";
import { AnalyticsPages } from "ME";

let closure_3;
let closure_4;
let closure_5;
function getSettingTitle(closure_0) {
  const cachedSettingTitle = require(13556) /* map */.getCachedSettingTitle(closure_0);
  const obj = require(13556) /* map */;
  importDefault(44)(null != cachedSettingTitle, "Setting " + closure_0 + " is missing a title.");
  return cachedSettingTitle;
}
function getSearchResultIconComponent(arg0) {
  const tmp = require(13557) /* MobileSetting */.SETTING_RENDERER_CONFIG[arg0];
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
({ ListItemType: closure_3, NodeType: closure_4, SUPPORTED_SEARCH_RESULT_NO_PARENT_RENDERER_TYPES: closure_5 } = GUILD_SELECT_ALL_SERVERS_OPTION_ID);
let result = require("dispatcher").fileFinishedImporting("modules/settings/native/renderer/SettingRendererUtils.tsx");

export const onRouteSettingOnPress = function onRouteSettingOnPress(arg0) {
  let importDefault;
  let preNavigationAction;
  let require;
  ({ navigation: require, screen: importDefault, preNavigationAction } = arg0);
  function goToScreen() {
    function onPress() {
      let obj = outer2_1(outer2_2[2]);
      obj.setSection(outer1_1.route);
      obj = { destinationPane: outer1_1.route, source: obj };
      obj = { page: outer2_6.USER_SETTINGS };
      const result = outer2_0(outer2_2[3]).trackUserSettingsPaneViewed(obj);
      onPress.navigate(outer1_1.route);
    }
    if (obj.getKeyboardIsOpen()) {
      if (obj2.isIOS()) {
        let result = outer1_0(outer1_2[6]).dismissGlobalKeyboard();
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          onPress();
        }, 100);
        const obj3 = outer1_0(outer1_2[6]);
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
  const entries = Object.entries(items(13557).SETTING_RENDERER_CONFIG);
  items = [];
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (!tmp2.unsearchable) {
      const cachedSettingTitle = items(outer1_2[7]).getCachedSettingTitle(tmp);
      if (null != cachedSettingTitle) {
        items = [tmp, ];
        const items1 = [cachedSettingTitle];
        HermesBuiltin.arraySpread(items(outer1_2[7]).getCachedSettingSearchTerms(tmp), 1);
        items[1] = items1;
        items.push(items);
        const obj2 = items(outer1_2[7]);
      }
      const obj = items(outer1_2[7]);
    }
  });
  return items;
};
export const getSettingScreens = function getSettingScreens() {
  let items = [];
  const set = new Set();
  const entries = Object.entries(items(13557).SETTING_RENDERER_CONFIG);
  const item = entries.forEach((arg0) => {
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    if (tmp2.type === outer1_4.ROUTE) {
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
  let closure_0 = field;
  const items = [];
  const sections = node.sections;
  let item = sections.forEach((settings) => {
    settings = settings.settings;
    const found = settings.filter((arg0) => !items(outer2_2[10]).isBlocked(arg0, found));
    if (0 !== found.length) {
      let obj = { type: outer1_3.SECTION_HEADER, label: settings.label };
      items.push(obj);
      const item = found.forEach((setting) => {
        outer1_1.push({ type: outer2_3.SECTION_ROW, setting, settingData: callback(outer2_2[9]).SETTING_RENDERER_CONFIG[setting], start: 0 === arg1, end: arg1 === found.length - 1 });
      });
      if (null != settings.subLabel) {
        obj = { type: outer1_3.SECTION_FOOTER, label: settings.subLabel };
        items.push(obj);
      }
    }
  });
  return items;
};
export const getSettingListSearchResultItems = function getSettingListSearchResultItems(arr) {
  const items = [];
  const item = arr.forEach((setting) => {
    const tmp = items(items1[9]).SETTING_RENDERER_CONFIG[setting];
    if (null != tmp.parent) {
      const highestLevelAncestor = sortByResult(items1[10]).getHighestLevelAncestor(setting);
      const obj2 = sortByResult(items1[10]);
      let obj = { category: highestLevelAncestor, setting, data: sortByResult(items1[10]).getNearestRouteAncestorDataOrSelf(setting) };
      items.push(obj);
      const obj3 = sortByResult(items1[10]);
    } else if (outer1_9(tmp)) {
      obj = { category: setting, setting, data: tmp };
      items.push(obj);
    }
  });
  const sortByResult = items(items1[11]).sortBy(items, (category) => category.category);
  const importDefault = sortByResult;
  items1 = [];
  const set = new Set();
  const item1 = sortByResult.forEach((data, index) => {
    let category;
    let setting;
    ({ category, setting } = data);
    let obj = sortByResult(items1[10]);
    const breadcrumbs = obj.getBreadcrumbs(setting);
    const tmp = outer1_7(setting);
    set.add(category);
    obj = { type: set.SETTING_SEARCH_RESULT, settingData: data.data, title: tmp };
    let tmp6;
    if (tmp3) {
      tmp6 = outer1_8(category);
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
    const _Map2 = Map;
    const map1 = new Map();
    constants = 0;
    let item = settings.forEach((arg0) => {
      let score;
      let setting;
      ({ setting, score } = arg0);
      const tmp = items(map1[9]).SETTING_RENDERER_CONFIG[setting];
      let tmp2 = null != tmp.parent;
      if (!tmp2) {
        tmp2 = outer1_9(tmp);
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
    let sorted = arr.sort((arg0, arg1) => arg1[1] - arg0[1]);
    const mapped = sorted.map((arg0) => {
      let tmp;
      [tmp] = arg0;
      return tmp;
    });
    let c4 = 0;
    const item1 = mapped.forEach((arg0) => {
      let closure_0 = arg0;
      const value = map.get(arg0);
      if (null != value) {
        const sorted = value.sort((setting, setting2) => {
          let num = -1;
          if (setting.setting !== closure_0) {
            let num2 = 1;
            if (setting2.setting !== closure_0) {
              num2 = setting2.score - setting.score;
            }
            num = num2;
          }
          return num;
        });
        const item = sorted.forEach((setting) => {
          setting = setting.setting;
          let nearestRouteAncestorDataOrSelf = items(map1[9]).SETTING_RENDERER_CONFIG[setting];
          if (null != nearestRouteAncestorDataOrSelf.parent) {
            let obj = map(map1[10]);
            let highestLevelAncestor = obj.getHighestLevelAncestor(setting);
            nearestRouteAncestorDataOrSelf = map(map1[10]).getNearestRouteAncestorDataOrSelf(setting);
            const obj2 = map(map1[10]);
          } else {
            highestLevelAncestor = setting;
          }
          obj = { type: constants.SETTING_SEARCH_RESULT, settingData: nearestRouteAncestorDataOrSelf, title: outer2_7(setting) };
          let tmp6;
          if (0 === arg1) {
            tmp6 = outer2_8(highestLevelAncestor);
          }
          obj.IconComponent = tmp6;
          obj.breadcrumbs = map(map1[10]).getBreadcrumbs(setting);
          obj.setting = setting;
          obj.index = outer1_4;
          obj.total = outer1_3;
          outer1_4 = outer1_4 + 1;
          const obj4 = map(map1[10]);
        });
      }
    });
    return items;
  }
};
export const getInitialScrollIndex = function getInitialScrollIndex(arg0, findLastIndex) {
  let closure_0 = arg0;
  const findLastIndexResult = findLastIndex.findLastIndex((type) => {
    let tmp = type.type === outer1_3.SECTION_ROW;
    if (tmp) {
      tmp = type.setting === closure_0;
    }
    return tmp;
  });
  if (1 !== findLastIndexResult) {
    const _Math = Math;
    return Math.max(0, findLastIndexResult);
  }
};
