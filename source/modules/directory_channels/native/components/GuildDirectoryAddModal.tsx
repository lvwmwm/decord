// Module ID: 10030
// Function ID: 77487
// Name: GuildDirectoryAddModal
// Dependencies: []
// Exports: GuildDirectoryAddModalScreen, default

// Module 10030 (GuildDirectoryAddModal)
importAll(dependencyMap[0]);
const GuildDirectoryCreate = arg1(dependencyMap[1]).GuildDirectoryCreate;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { marginTop: arg1(dependencyMap[4]).NAV_BAR_HEIGHT, flex: 1 };
obj.safeArea = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  let initialStack;
  let screens;
  const arg1 = arg0;
  ({ screens, initialStack } = importDefault(dependencyMap[13])(() => {
    let obj = { name: constants.CREATE_OR_ADD };
    obj = {};
    const merged = Object.assign(arg0);
    obj.params = obj;
    const items = [obj];
    obj = {};
    const obj1 = {};
    const obj2 = { fullscreen: true, impressionName: arg0(closure_2[5]).ImpressionNames.HUB_EXISTING_GUILD_CHOOSE };
    let obj5 = arg0(closure_2[6]);
    obj2.headerLeft = obj5.getHeaderCloseButton(callback(closure_2[7]).close);
    obj2.headerTitle = function headerTitle() {
      return null;
    };
    obj2.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[8]), {});
    };
    obj1[constants.CREATE_OR_ADD] = obj2;
    obj1[constants.DESCRIPTION] = {
      fullscreen: true,
      impressionName: arg0(closure_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(closure_2[9]), {});
      }
    };
    const obj3 = {
      fullscreen: true,
      impressionName: arg0(closure_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(closure_2[9]), {});
      }
    };
    obj1[constants.TEMPLATES] = {
      fullscreen: true,
      impressionName: arg0(closure_2[5]).ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(closure_2[10]), {});
      }
    };
    obj5 = {
      headerTitle() {
        return null;
      },
      fullscreen: true,
      impressionName: arg0(closure_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(closure_2[11]), {});
      }
    };
    obj1[constants.CREATE] = obj5;
    obj.screens = obj1;
    obj.initialStack = items;
    return obj;
  }));
  const obj = { screens, initialRouteStack: initialStack };
  const intl = arg1(dependencyMap[15]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[15]).t.13/7kX);
  return jsx(arg1(dependencyMap[14]).Navigator, obj);
};
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  const tmp = callback();
  return jsx(arg1(dependencyMap[12]).SafeAreaPaddingView, { top: true, style: callback().safeArea, children: children.children });
};
