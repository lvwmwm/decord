// Module ID: 5747
// Function ID: 5748
// Name: PremiumGuildSubscribeModal
// Dependencies: [32, 19, 1182, 5748, 1074, 21, 5749, 5936, 5746, 6795, 4685, 6796, 6797, 6798, 1115, 6416, 6800, 1177, 6802, 13148, 5910, 5276, 6421, 2]
// Exports: default

// Module 5747 (PremiumGuildSubscribeModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5276 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5746 */;
import PremiumGuildSubscribeConstants from "PremiumGuildSubscribeConstants" /* 5748 */;
import reactDefault from "react" /* 5910 */;
import NavigatorHeader2 from "NavigatorHeader" /* 5936 */;
import Navigator2 from "Navigator" /* 6421 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1182 */;
import size from "module_2" /* 2 */;

let closure_6 = PremiumGuildSubscribeConstants.PremiumGuildSubscribeModalScenes;
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default function PremiumGuildSubscribeModal(arg0) {
  let closure_5;
  let first;
  let guildBoostSlots;
  let intent;
  let onResult;
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  first = undefined;
  closure_5 = undefined;
  let tmp = reactDefault(() => {
    let intl;
    let obj10;
    let obj11;
    let obj12;
    let obj13;
    let obj3;
    let obj5;
    let theme;
    const items = [];
    let tmp = require;
    if (null != require) {
      if (null != importDefault) {
        if (importDefault.length > 0) {
          let obj2 = { name: constants.CONFIRMATION, params: obj3 };
          obj3 = { guildId: tmp, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray };
          items.push(obj2);
        }
        let obj4 = { initialStack: items, screens: obj5 };
        obj5 = {};
        const obj6 = {
          headerShown: false,
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[6]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj5[constants.GUILD_SELECT] = obj6;
        const OVERVIEW = constants.OVERVIEW;
        const obj7 = {
          headerLeft: obj11.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal),
          headerRight() {
                let intl;
                let intl2;
                let tmp4Result;
                const HeaderActionButton = closure_1_0(intent[9]).HeaderActionButton;
                let obj = closure_1_0(intent[10]);
                const tmp = closure_1_8;
                if (obj.isThemeDark(theme.theme)) {
                  tmp4Result = tmp4(tmp3[11]);
                } else {
                  tmp4Result = tmp4(tmp3[12]);
                }
                let obj2 = {
                  source: tmp4Result,
                  IconComponent: tmp2(tmp3[13]).SettingsIcon,
                  accessibilityLabel: intl.string(closure_1_0(intent[14]).t["3D5yo/"]),
                  accessibilityHint: intl2.string(closure_1_0(intent[14]).t["+CbP2v"]),
                  onPress() {
                    const obj = closure_1_0(closure_1_2[15]);
                    const obj2 = { destinationPane: constants.GUILD_BOOSTING };
                    const result = obj.trackUserSettingsPaneViewed(obj2);
                    const obj3 = closure_1_0(closure_1_2[8]);
                    obj3.closeApplyBoostModal();
                    const obj4 = closure_1_0(closure_1_2[16]);
                    const obj5 = { screen: constants.GUILD_BOOSTING };
                    obj4.openUserSettings(obj5);
                  }
                };
                intl = tmp2(tmp3[14]).intl;
                intl2 = tmp2(tmp3[14]).intl;
                return tmp(HeaderActionButton, obj2);
              },
          headerTitle(children) {
                let intl;
                let tmpResult;
                children = children.children;
                const obj = { title: intl.string(closure_1_0(intent[14]).t.VJEVbu), subtitle: tmpResult };
                const NavigatorHeader = closure_1_0(intent[7]).NavigatorHeader;
                intl = closure_1_0(intent[14]).intl;
                tmpResult = null;
                const tmp2 = closure_1_0;
                const tmp3 = intent;
                if (children.length > 0) {
                  const obj2 = { children };
                  tmpResult = tmp(tmp2(tmp3[17]).LegacyText, obj2);
                }
                return closure_1_8(NavigatorHeader, obj);
              },
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[18]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj5[OVERVIEW] = obj7;
        obj11 = NavigatorHeader2;
        const CONFIRMATION = constants.CONFIRMATION;
        const obj8 = {
          headerLeft: obj13.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal),
          headerTitle: intl.string(intl3.t.VJEVbu),
          render(arg0) {
                const obj = {};
                const tmp = guildBoostSlots(intent[19]);
                const merged = Object.assign(arg0);
                return closure_1_8(tmp, obj);
              }
        };
        obj13 = NavigatorHeader2;
        intl = intl3.intl;
        obj5[CONFIRMATION] = obj8;
        return obj4;
      }
    }
    if (null != tmp) {
      const obj9 = { name: constants.OVERVIEW, params: obj10 };
      obj10 = { guildId: tmp, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray };
      items.push(obj9);
    } else {
      let obj = { name: constants.GUILD_SELECT, params: obj12 };
      let tmp2 = constants;
      let tmp3 = importDefault;
      const tmp4 = dependencyMap;
      obj12 = { guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray };
      items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  const screens = tmp.screens;
  [first, closure_5] = first.useState(initialStack[0].name);
  let items = [first];
  let tmp4 = useBackPressHandlerDefault;
  let tmp4Result = tmp4(first.useCallback(() => {
    let flag = first === constants.GUILD_SELECT;
    if (flag) {
      const obj = actions_BoostingActionCreators;
      obj.closeApplyBoostModal();
      flag = true;
    }
    return flag;
  }, items));
  const Navigator = Navigator2.Navigator;
  let intl = intl3.intl;
  return <Navigator screens={screens} initialRouteStack={initialStack} headerBackTitle={intl.string(intl3.t["13/7kX"])} onStateChange={function onStateChange(arg0) {
    let tmp;
    if (arg0 != null) {
      tmp = arg0.routes[arg0.index];
    }
    if (null != tmp) {
      closure_5(tmp.name);
    }
  }} />;
};
