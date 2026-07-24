// Module ID: 4967
// Function ID: 42683
// Name: PremiumGuildSubscribeModal
// Dependencies: [57, 31, 1278, 4968, 653, 33, 4969, 5087, 4966, 5788, 3976, 5789, 5790, 5791, 1212, 5793, 5796, 1273, 5798, 12592, 5450, 4540, 5517, 2]
// Exports: default

// Module 4967 (PremiumGuildSubscribeModal)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { PremiumGuildSubscribeModalScenes as closure_6 } from "PremiumGuildSubscribeModalScenes";
import { UserSettingsSections } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default function PremiumGuildSubscribeModal(arg0) {
  let _slicedToArray;
  let dependencyMap;
  let importDefault;
  let require;
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  let tmp = importDefault(5450)(() => {
    const items = [];
    if (null != closure_0) {
      if (null != length) {
        if (length.length > 0) {
          let obj = { name: outer1_6.CONFIRMATION };
          obj = { guildId: closure_0, guildBoostSlots: length, intent: closure_2, onResult: _slicedToArray };
          obj.params = obj;
          items.push(obj);
        }
        let obj1 = {
          initialStack: items,
          screens: (function getScreens() {
                obj = { [outer2_6.GUILD_SELECT]: obj };
                obj = {
                  headerShown: false,
                  render(arg0) {
                    const merged = Object.assign(arg0);
                    return outer3_8(outer3_1(outer3_2[6]), {});
                  }
                };
                obj = {
                  headerLeft: outer2_0(outer2_2[7]).getHeaderCloseButton(outer2_0(outer2_2[8]).closeApplyBoostModal),
                  headerRight() {
                    let obj = {};
                    if (obj2.isThemeDark(theme.theme)) {
                      let tmp2Result = tmp2(tmp3[11]);
                    } else {
                      tmp2Result = tmp2(tmp3[12]);
                    }
                    obj.source = tmp2Result;
                    obj.IconComponent = outer3_0(outer3_2[13]).SettingsIcon;
                    const intl = outer3_0(outer3_2[14]).intl;
                    obj.accessibilityLabel = intl.string(outer3_0(outer3_2[14]).t["3D5yo/"]);
                    const intl2 = outer3_0(outer3_2[14]).intl;
                    obj.accessibilityHint = intl2.string(outer3_0(outer3_2[14]).t["+CbP2v"]);
                    obj.onPress = function onPress() {
                      let obj = outer4_0(outer4_2[15]);
                      obj = { destinationPane: outer4_7.GUILD_BOOSTING };
                      const result = obj.trackUserSettingsPaneViewed(obj);
                      outer4_0(outer4_2[8]).closeApplyBoostModal();
                      const obj3 = outer4_0(outer4_2[8]);
                      obj = { screen: outer4_7.GUILD_BOOSTING };
                      outer4_0(outer4_2[16]).openUserSettings(obj);
                    };
                    return outer3_8(outer3_0(outer3_2[9]).HeaderActionButton, obj);
                  },
                  headerTitle(children) {
                    children = children.children;
                    let obj = {};
                    const intl = outer3_0(outer3_2[14]).intl;
                    obj.title = intl.string(outer3_0(outer3_2[14]).t.VJEVbu);
                    let tmp2 = null;
                    if (children.length > 0) {
                      obj = { children };
                      tmp2 = outer3_8(outer3_0(outer3_2[17]).LegacyText, obj);
                    }
                    obj.subtitle = tmp2;
                    return outer3_8(outer3_0(outer3_2[7]).NavigatorHeader, obj);
                  },
                  render(arg0) {
                    const merged = Object.assign(arg0);
                    return outer3_8(outer3_1(outer3_2[18]), {});
                  }
                };
                obj[outer2_6.OVERVIEW] = obj;
                const obj1 = {};
                const obj4 = outer2_0(outer2_2[7]);
                obj1.headerLeft = outer2_0(outer2_2[7]).getHeaderCloseButton(outer2_0(outer2_2[8]).closeApplyBoostModal);
                let intl = outer2_0(outer2_2[14]).intl;
                obj1.headerTitle = intl.string(outer2_0(outer2_2[14]).t.VJEVbu);
                obj1.render = function render(arg0) {
                  const merged = Object.assign(arg0);
                  return outer3_8(outer3_1(outer3_2[19]), {});
                };
                obj[outer2_6.CONFIRMATION] = obj1;
                return obj;
              })()
        };
        return obj1;
      }
    }
    if (null != closure_0) {
      const obj2 = { name: outer1_6.OVERVIEW };
      let obj3 = { guildId: closure_0, guildBoostSlots: length, intent: closure_2, onResult: _slicedToArray };
      obj2.params = obj3;
      items.push(obj2);
    } else {
      obj = { name: outer1_6.GUILD_SELECT };
      let obj4 = { guildBoostSlots: length, intent: closure_2, onResult: _slicedToArray };
      obj.params = obj4;
      items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  let tmp2 = callback(first.useState(initialStack[0].name), 2);
  first = tmp2[0];
  let _isNativeReflectConstruct = tmp2[1];
  let items = [first];
  importDefault(4540)(first.useCallback(() => {
    let flag = first === outer1_6.GUILD_SELECT;
    if (flag) {
      outer1_0(outer1_2[8]).closeApplyBoostModal();
      flag = true;
      const obj = outer1_0(outer1_2[8]);
    }
    return flag;
  }, items));
  let obj = { screens: tmp.screens, initialRouteStack: initialStack };
  let intl = require(1212) /* getSystemLocale */.intl;
  obj.headerBackTitle = intl.string(require(1212) /* getSystemLocale */.t["13/7kX"]);
  obj.onStateChange = function onStateChange(arg0) {
    let tmp;
    if (null != arg0) {
      tmp = arg0.routes[arg0.index];
    }
    if (null != tmp) {
      callback(tmp.name);
    }
  };
  return jsx(require(5517) /* NavigationStack */.Navigator, { screens: tmp.screens, initialRouteStack: initialStack });
};
