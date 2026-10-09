// Module ID: 5967
// Function ID: 5968
// Name: PremiumGuildSubscribeModal
// Dependencies: [32, 19, 1205, 5968, 1085, 21, 5969, 6205, 5966, 7082, 4930, 7083, 7084, 7085, 1126, 6682, 7087, 1200, 7089, 13825, 558, 576, 6176, 5371, 6686, 2]

// Module 5967 (PremiumGuildSubscribeModal)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5371 */;
import BoostingActionCreators from "BoostingActionCreators" /* 5966 */;
import PremiumGuildSubscribeConstants from "PremiumGuildSubscribeConstants" /* 5968 */;
import useInitialValueDefault from "useInitialValue" /* 6176 */;
import NavigatorHeader2 from "NavigatorHeader" /* 6205 */;
import Navigator2 from "Navigator" /* 6686 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let closure_6 = PremiumGuildSubscribeConstants.PremiumGuildSubscribeModalScenes;
const UserSettingsSections = Constants.UserSettingsSections;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumGuildSubscribeModal(guildId) {
  let closure_5;
  let first;
  let initialStack;
  let intent;
  let screens;
  let tmp = guildId;
  let obj = guildId(intent[21]);
  const cResult = obj.c(12);
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  intent = guildId.intent;
  _slicedToArray = onResult;
  if (cResult[0] === guildBoostSlots) {
    if (cResult[1] === guildId) {
      if (cResult[2] === intent) {
        let tmp4;
        let tmp11;
        let tmp15;
        let tmp14;
        if (cResult[3] === guildId.onResult) {
          tmp4 = cResult[4];
        }
        ({ initialStack, screens } = guildBoostSlots(intent[22])(tmp4));
        guildBoostSlots(intent[22])(tmp4);
        [first, ThemeStore] = first.useState(initialStack[0].name);
        const tmp5 = guildBoostSlots;
        if (cResult[5] !== first) {
          const fn2 = function b() {
            let flag = first === constants.GUILD_SELECT;
            if (flag) {
              const obj = BoostingActionCreators;
              obj.closeApplyBoostModal();
              flag = true;
            }
            return flag;
          };
          cResult[5] = first;
          cResult[6] = fn2;
          tmp11 = fn2;
        } else {
          tmp11 = cResult[6];
        }
        tmp5(intent[23])(tmp11);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          let intl = tmp(tmp2[14]).intl;
          const stringResult = intl.string(tmp(intent[14]).t["13/7kX"]);
          class E {
            constructor(arg0) {
              let tmp;
              if (arg0 != null) {
                tmp = arg0.routes[arg0.index];
              }
              if (null != tmp) {
                closure_5(tmp.name);
              }
            }
          }
          cResult[7] = stringResult;
          cResult[8] = E;
          tmp15 = E;
          tmp14 = stringResult;
        } else {
          tmp14 = cResult[7];
          tmp15 = cResult[8];
        }
        if (cResult[9] === initialStack) {
          let tmp17;
          if (cResult[10] === screens) {
            tmp17 = cResult[11];
          }
          return tmp17;
        }
        const tmp19 = jsx(tmp(intent[24]).Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: tmp14, onStateChange: tmp15 });
        cResult[9] = initialStack;
        cResult[10] = screens;
        cResult[11] = tmp19;
        tmp17 = tmp19;
      }
    }
  }
  const fn = function o() {
    let intl;
    let obj10;
    let obj11;
    let obj12;
    let obj13;
    let obj3;
    let obj5;
    const items = [];
    if (null != guildId) {
      if (null != guildBoostSlots) {
        if (guildBoostSlots.length > 0) {
          const obj2 = { name: constants.CONFIRMATION, params: obj3 };
          obj3 = { guildId, guildBoostSlots, intent, onResult: _slicedToArray };
          items.push(obj2);
        }
        const obj4 = { initialStack: items, screens: obj5 };
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
          headerLeft: obj11.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
          headerRight: function renderSettingsButton() {
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
          headerLeft: obj13.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
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
    if (null != guildId) {
      const obj9 = { name: constants.OVERVIEW, params: obj10 };
      obj10 = { guildId, guildBoostSlots, intent, onResult: _slicedToArray };
      items.push(obj9);
    } else {
      const obj = { name: constants.GUILD_SELECT, params: obj12 };
      obj12 = { guildBoostSlots, intent, onResult: _slicedToArray };
      items.push(obj);
    }
  };
  cResult[0] = guildBoostSlots;
  cResult[1] = guildId;
  cResult[2] = intent;
  cResult[3] = guildId.onResult;
  cResult[4] = fn;
  tmp4 = fn;
}) : (function PremiumGuildSubscribeModal(arg0) {
  let closure_5;
  let first;
  let guildBoostSlots;
  let intent;
  let onResult;
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  first = undefined;
  closure_5 = undefined;
  let tmp = useInitialValueDefault(() => {
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
          headerLeft: obj11.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
          headerRight: function renderSettingsButton() {
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
          headerLeft: obj13.getHeaderCloseButton(BoostingActionCreators.closeApplyBoostModal),
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
      const obj = BoostingActionCreators;
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
});
let result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default tmp2;
