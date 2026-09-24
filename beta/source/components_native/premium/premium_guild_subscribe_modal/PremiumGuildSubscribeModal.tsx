// Module ID: 5686
// Function ID: 5687
// Name: PremiumGuildSubscribeModal
// Dependencies: [32, 19, 1186, 5687, 1078, 21, 5688, 5871, 5685, 7653, 4642, 7654, 7655, 7656, 1119, 7273, 7658, 1181, 7660, 13910, 558, 568, 5845, 5215, 7278, 2]

// Module 5686 (PremiumGuildSubscribeModal)
import util from "util" /* 1119 */;
import useBackPressHandlerDefault from "useBackPressHandler" /* 5215 */;
import actions_BoostingActionCreators from "actions/BoostingActionCreators" /* 5685 */;
import useInitialValueDefault from "useInitialValue" /* 5845 */;
import NavigatorHeader from "NavigatorHeader" /* 5871 */;
import Navigator from "Navigator" /* 7278 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1186 */;

require = fn;
const constants = fn(5687).PremiumGuildSubscribeModalScenes;
const UserSettingsSections = fn(1078).UserSettingsSections;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = guildId(intent[21]).c(12);
  guildId = guildId.guildId;
  const guildBoostSlots = guildId.guildBoostSlots;
  intent = guildId.intent;
  _slicedToArray = onResult;
  if (cResult[0] === guildBoostSlots) {
    if (cResult[1] === guildId) {
      if (cResult[2] === intent) {
        if (cResult[3] === onResult) {
          let tmp4 = cResult[4];
        }
        ({ initialStack, screens } = guildBoostSlots(tmp2[22])(tmp4));
        [first, ThemeStore] = first.useState(initialStack[0].name);
        if (cResult[5] !== first) {
          class B {
            constructor() {
              flag = closure_4 === closure_6.GUILD_SELECT;
              if (flag) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[8]);
                closeApplyBoostModalResult = obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
          cResult[5] = first;
          cResult[6] = B;
          const tmp11 = B;
        } else {
          class B {
            constructor() {
              flag = closure_4 === closure_6.GUILD_SELECT;
              if (flag) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[8]);
                closeApplyBoostModalResult = obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
        }
        guildBoostSlots(tmp2[23])(tmp11);
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class B {
            constructor() {
              flag = closure_4 === closure_6.GUILD_SELECT;
              if (flag) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[8]);
                closeApplyBoostModalResult = obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
          const stringResult = obj2.string(tmp(tmp2[14]).t["13/7kX"]);
          class R {
            constructor(arg0) {
              tmp = undefined;
              if (guildId != null) {
                tmp = guildId.routes[guildId.index];
              }
              if (null != tmp) {
                tmp2 = closure_5;
                tmp3 = closure_5(tmp.name);
              }
              return;
            }
          }
          cResult[7] = stringResult;
          cResult[8] = R;
          let tmp15 = R;
          const tmp14 = stringResult;
        } else {
          class B {
            constructor() {
              flag = closure_4 === closure_6.GUILD_SELECT;
              if (flag) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[8]);
                closeApplyBoostModalResult = obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
          tmp15 = cResult[8];
        }
        if (cResult[9] === initialStack) {
          class B {
            constructor() {
              flag = closure_4 === closure_6.GUILD_SELECT;
              if (flag) {
                tmp = closure_0;
                tmp2 = closure_2;
                obj = closure_0(closure_2[8]);
                closeApplyBoostModalResult = obj.closeApplyBoostModal();
                flag = true;
              }
              return flag;
            }
          }
          return tmp17;
        }
        let obj3 = { screens, initialRouteStack: initialStack, headerBackTitle: tmp14, onStateChange: tmp15 };
        const tmp19 = jsx(tmp(tmp2[24]).Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: tmp14, onStateChange: tmp15 });
        cResult[9] = initialStack;
        cResult[10] = screens;
        cResult[11] = tmp19;
        tmp17 = tmp19;
        const tmp6 = guildBoostSlots(tmp2[22])(tmp4);
      }
    }
  }
  const fn = function o() {
    const items = [];
    if (null != guildId) {
      if (null != guildBoostSlots) {
        if (arr2.length > 0) {
          const obj2 = { name: constants.CONFIRMATION, params: null };
          const obj3 = { guildId: tmp, guildBoostSlots: arr2, intent, onResult };
          obj2.params = obj3;
          items.push(obj2);
        }
        const obj4 = { initialStack: items, screens: null };
        const obj5 = {};
        const obj6 = {
          headerShown: false,
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(5688), {});
              }
        };
        obj5[constants.GUILD_SELECT] = obj6;
        const obj7 = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal),
          headerRight() {
                if (obj.isThemeDark(theme.theme)) {
                  let tmp4Result = tmp4(7654);
                } else {
                  tmp4Result = tmp4(7655);
                }
                let obj2 = { source: tmp4Result, IconComponent: closure_1_0(7656).SettingsIcon, accessibilityLabel: null, accessibilityHint: null, onPress: null };
                const intl = tmp2(1119).intl;
                obj2.accessibilityLabel = intl.string(closure_1_0(1119).t["3D5yo/"]);
                const intl2 = tmp2(1119).intl;
                obj2.accessibilityHint = intl2.string(closure_1_0(1119).t["+CbP2v"]);
                obj2.onPress = function onPress() {
                  const result = closure_1_0(7273).trackUserSettingsPaneViewed({ destinationPane: constants.GUILD_BOOSTING });
                  const obj = closure_1_0(7273);
                  const obj2 = { destinationPane: constants.GUILD_BOOSTING };
                  closure_1_0(5685).closeApplyBoostModal();
                  const obj3 = closure_1_0(5685);
                  closure_1_0(7658).openUserSettings({ screen: constants.GUILD_BOOSTING });
                };
                return closure_1_8(closure_1_0(7653).HeaderActionButton, obj2);
              },
          headerTitle(children) {
                children = children.children;
                const obj = { title: null, subtitle: null };
                const intl = closure_1_0(1119).intl;
                obj.title = intl.string(closure_1_0(1119).t.VJEVbu);
                let tmpResult = null;
                if (children.length > 0) {
                  const obj2 = { children };
                  tmpResult = tmp(closure_1_0(1181).LegacyText, obj2);
                }
                obj.subtitle = tmpResult;
                return closure_1_8(closure_1_0(5871).NavigatorHeader, obj);
              },
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(7660), {});
              }
        };
        obj5[constants.OVERVIEW] = obj7;
        const obj8 = { headerLeft: null, headerTitle: null, render: null };
        obj8.headerLeft = NavigatorHeader.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal);
        const intl = util.intl;
        obj8.headerTitle = intl.string(util.t.VJEVbu);
        obj8.render = function render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_8(guildBoostSlots(13910), {});
        };
        obj5[constants.CONFIRMATION] = obj8;
        obj4.screens = obj5;
        return obj4;
      }
    }
    if (null != guildId) {
      const obj9 = { name: constants.OVERVIEW, params: null };
      const obj10 = { guildId: tmp, guildBoostSlots, intent, onResult };
      obj9.params = obj10;
      items.push(obj9);
    } else {
      const obj = { name: constants.GUILD_SELECT, params: null };
      const obj12 = { guildBoostSlots, intent, onResult };
      obj.params = obj12;
      items.push(obj);
    }
  };
  cResult[0] = guildBoostSlots;
  cResult[1] = guildId;
  cResult[2] = intent;
  cResult[3] = guildId.onResult;
  cResult[4] = fn;
  tmp4 = fn;
}) : ((arg0) => {
  ({ guildId: require, guildBoostSlots: importDefault, intent: dependencyMap, onResult: _slicedToArray } = arg0);
  first = undefined;
  closure_5 = undefined;
  let tmp = useInitialValueDefault(() => {
    const items = [];
    if (null != _require) {
      if (null != guildBoostSlots) {
        if (arr2.length > 0) {
          let obj2 = { name: constants.CONFIRMATION, params: null };
          let obj3 = { guildId: tmp, guildBoostSlots: arr2, intent, onResult };
          obj2.params = obj3;
          items.push(obj2);
        }
        const obj4 = { initialStack: items, screens: null };
        const obj5 = {};
        const obj6 = {
          headerShown: false,
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(5688), {});
              }
        };
        obj5[constants.GUILD_SELECT] = obj6;
        const obj7 = {
          headerLeft: NavigatorHeader.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal),
          headerRight() {
                if (obj.isThemeDark(theme.theme)) {
                  let tmp4Result = tmp4(7654);
                } else {
                  tmp4Result = tmp4(7655);
                }
                let obj2 = { source: tmp4Result, IconComponent: closure_1_0(7656).SettingsIcon, accessibilityLabel: null, accessibilityHint: null, onPress: null };
                const intl = tmp2(1119).intl;
                obj2.accessibilityLabel = intl.string(closure_1_0(1119).t["3D5yo/"]);
                const intl2 = tmp2(1119).intl;
                obj2.accessibilityHint = intl2.string(closure_1_0(1119).t["+CbP2v"]);
                obj2.onPress = function onPress() {
                  const result = closure_1_0(7273).trackUserSettingsPaneViewed({ destinationPane: constants.GUILD_BOOSTING });
                  const obj = closure_1_0(7273);
                  const obj2 = { destinationPane: constants.GUILD_BOOSTING };
                  closure_1_0(5685).closeApplyBoostModal();
                  const obj3 = closure_1_0(5685);
                  closure_1_0(7658).openUserSettings({ screen: constants.GUILD_BOOSTING });
                };
                return closure_1_8(closure_1_0(7653).HeaderActionButton, obj2);
              },
          headerTitle(children) {
                children = children.children;
                const obj = { title: null, subtitle: null };
                const intl = closure_1_0(1119).intl;
                obj.title = intl.string(closure_1_0(1119).t.VJEVbu);
                let tmpResult = null;
                if (children.length > 0) {
                  const obj2 = { children };
                  tmpResult = tmp(closure_1_0(1181).LegacyText, obj2);
                }
                obj.subtitle = tmpResult;
                return closure_1_8(closure_1_0(5871).NavigatorHeader, obj);
              },
          render(arg0) {
                const merged = Object.assign(arg0);
                return closure_1_8(guildBoostSlots(7660), {});
              }
        };
        obj5[constants.OVERVIEW] = obj7;
        const obj8 = { headerLeft: null, headerTitle: null, render: null };
        obj8.headerLeft = NavigatorHeader.getHeaderCloseButton(actions_BoostingActionCreators.closeApplyBoostModal);
        let intl = util.intl;
        obj8.headerTitle = intl.string(util.t.VJEVbu);
        obj8.render = function render(arg0) {
          const merged = Object.assign(arg0);
          return closure_1_8(guildBoostSlots(13910), {});
        };
        obj5[constants.CONFIRMATION] = obj8;
        obj4.screens = obj5;
        return obj4;
      }
    }
    if (null != _require) {
      const obj9 = { name: constants.OVERVIEW, params: null };
      const obj10 = { guildId: tmp, guildBoostSlots, intent, onResult };
      obj9.params = obj10;
      items.push(obj9);
    } else {
      let obj = { name: constants.GUILD_SELECT, params: null };
      const obj12 = { guildBoostSlots, intent, onResult };
      obj.params = obj12;
      items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  [first, closure_5] = first.useState(initialStack[0].name);
  let items = [first];
  useBackPressHandlerDefault(first.useCallback(() => {
    let flag = first === constants.GUILD_SELECT;
    if (flag) {
      actions_BoostingActionCreators.closeApplyBoostModal();
      flag = true;
    }
    return flag;
  }, items));
  let obj = { screens: tmp.screens, initialRouteStack: initialStack, headerBackTitle: null, onStateChange: null };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  obj.onStateChange = function onStateChange(arg0) {
    let tmp;
    if (arg0 != null) {
      tmp = arg0.routes[arg0.index];
    }
    if (null != tmp) {
      closure_5(tmp.name);
    }
  };
  return jsx(Navigator.Navigator, { screens: tmp.screens, initialRouteStack: initialStack, headerBackTitle: null, onStateChange: null });
});
