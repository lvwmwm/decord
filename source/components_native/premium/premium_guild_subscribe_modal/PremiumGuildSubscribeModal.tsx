// Module ID: 5238
// Function ID: 44242
// Name: PremiumGuildSubscribeModal
// Dependencies: []
// Exports: default

// Module 5238 (PremiumGuildSubscribeModal)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).PremiumGuildSubscribeModalScenes;
const UserSettingsSections = arg1(dependencyMap[4]).UserSettingsSections;
const jsx = arg1(dependencyMap[5]).jsx;
const result = arg1(dependencyMap[23]).fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/PremiumGuildSubscribeModal.tsx");

export default function PremiumGuildSubscribeModal(arg0) {
  ({ guildId: closure_0, guildBoostSlots: closure_1, intent: closure_2, onResult: closure_3 } = arg0);
  const tmp = importDefault(dependencyMap[20])(() => {
    const items = [];
    if (null != closure_0) {
      if (null != length) {
        if (length.length > 0) {
          let obj = { name: constants.CONFIRMATION };
          obj = { guildId: closure_0, guildBoostSlots: length, intent: closure_2, onResult: closure_3 };
          obj.params = obj;
          items.push(obj);
        }
        const obj1 = {
          initialStack: items,
          screens: function getScreens() {
                let obj = { [closure_6.GUILD_SELECT]: obj };
                obj = {
                  headerShown: false,
                  render(arg0) {
                    const merged = Object.assign(arg0);
                    return callback3(callback2(closure_2[6]), {});
                  }
                };
                obj = {
                  headerLeft: callback(closure_2[7]).getHeaderCloseButton(callback(closure_2[8]).closeApplyBoostModal),
                  headerRight() {
                    const obj = {};
                    if (obj2.isThemeDark(theme.theme)) {
                      let tmp2Result = tmp2(tmp3[11]);
                    } else {
                      tmp2Result = tmp2(tmp3[12]);
                    }
                    obj.source = tmp2Result;
                    obj.IconComponent = callback(closure_2[13]).SettingsIcon;
                    const intl = callback(closure_2[14]).intl;
                    obj.accessibilityLabel = intl.string(callback(closure_2[14]).t.3D5yo/);
                    const intl2 = callback(closure_2[14]).intl;
                    obj.accessibilityHint = intl2.string(callback(closure_2[14]).t.+CbP2v);
                    obj.onPress = function onPress() {
                      let obj = callback(closure_2[15]);
                      obj = { destinationPane: constants.GUILD_BOOSTING };
                      const result = obj.trackUserSettingsPaneViewed(obj);
                      callback(closure_2[8]).closeApplyBoostModal();
                      const obj3 = callback(closure_2[8]);
                      obj = { screen: constants.GUILD_BOOSTING };
                      callback(closure_2[16]).openUserSettings(obj);
                    };
                    return closure_8(callback(closure_2[9]).HeaderActionButton, obj);
                  },
                  headerTitle(children) {
                    children = children.children;
                    let obj = {};
                    const intl = callback(closure_2[14]).intl;
                    obj.title = intl.string(callback(closure_2[14]).t.VJEVbu);
                    let tmp2 = null;
                    if (children.length > 0) {
                      obj = { children };
                      tmp2 = callback3(callback(closure_2[17]).LegacyText, obj);
                    }
                    obj.subtitle = tmp2;
                    return callback3(callback(closure_2[7]).NavigatorHeader, obj);
                  },
                  render(arg0) {
                    const merged = Object.assign(arg0);
                    return callback3(callback2(closure_2[18]), {});
                  }
                };
                obj[constants.OVERVIEW] = obj;
                const obj1 = {};
                const obj4 = callback(closure_2[7]);
                obj1.headerLeft = callback(closure_2[7]).getHeaderCloseButton(callback(closure_2[8]).closeApplyBoostModal);
                const intl = callback(closure_2[14]).intl;
                obj1.headerTitle = intl.string(callback(closure_2[14]).t.VJEVbu);
                obj1.render = function render(arg0) {
                  const merged = Object.assign(arg0);
                  return callback3(callback2(closure_2[19]), {});
                };
                obj[constants.CONFIRMATION] = obj1;
                return obj;
              }()
        };
        return obj1;
      }
    }
    if (null != closure_0) {
      const obj2 = { name: constants.OVERVIEW };
      const obj3 = { guildId: closure_0, guildBoostSlots: length, intent: closure_2, onResult: closure_3 };
      obj2.params = obj3;
      items.push(obj2);
    } else {
      obj = { name: constants.GUILD_SELECT };
      const obj4 = { guildBoostSlots: length, intent: closure_2, onResult: closure_3 };
      obj.params = obj4;
      items.push(obj);
    }
  });
  const initialStack = tmp.initialStack;
  const tmp2 = callback(React.useState(initialStack[0].name), 2);
  const first = tmp2[0];
  const React = first;
  let closure_5 = tmp2[1];
  const items = [first];
  importDefault(dependencyMap[21])(React.useCallback(() => {
    let flag = first === constants.GUILD_SELECT;
    if (flag) {
      callback(closure_2[8]).closeApplyBoostModal();
      flag = true;
      const obj = callback(closure_2[8]);
    }
    return flag;
  }, items));
  const obj = { screens: tmp.screens, initialRouteStack: initialStack };
  const intl = arg1(dependencyMap[14]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[14]).t.13/7kX);
  obj.onStateChange = function onStateChange(arg0) {
    let tmp;
    if (null != arg0) {
      tmp = arg0.routes[arg0.index];
    }
    if (null != tmp) {
      callback2(tmp.name);
    }
  };
  return jsx(arg1(dependencyMap[22]).Navigator, obj);
};
