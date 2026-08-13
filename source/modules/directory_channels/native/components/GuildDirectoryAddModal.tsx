// Module ID: 11739
// Function ID: 11740
// Name: GuildDirectoryAddModal
// Dependencies: [19, 11740, 21, 4342, 5307, 503, 5310, 11738, 11741, 11749, 11753, 11763, 5368, 5756, 5823, 1236, 2]
// Exports: GuildDirectoryAddModalScreen, default

// Module 11739 (GuildDirectoryAddModal)
import "noop";
import { GuildDirectoryCreate } from "GuildDirectoryCreate";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { safeArea: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  let initialStack;
  let screens;
  const _require = arg0;
  ({ screens, initialStack } = importDefault(5756)(() => {
    let obj = { name: outer1_3.CREATE_OR_ADD, params: null };
    obj = {};
    let merged = Object.assign(callback);
    obj[1] = obj;
    const items = [obj];
    obj = { screens: null, initialStack: null };
    const obj1 = {};
    const obj2 = { fullscreen: true, impressionName: callback(outer1_2[5]).ImpressionNames.HUB_EXISTING_GUILD_CHOOSE, headerLeft: null, headerTitle: null, render: null };
    let obj5 = callback(outer1_2[6]);
    obj2[2] = obj5.getHeaderCloseButton(outer1_1(outer1_2[7]).close);
    obj2[3] = function headerTitle() {
      return null;
    };
    obj2[4] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(11741), {});
    };
    obj1[outer1_3.CREATE_OR_ADD] = obj2;
    obj1[outer1_3.DESCRIPTION] = {
      fullscreen: true,
      impressionName: callback(outer1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11749), {});
      }
    };
    const obj3 = {
      fullscreen: true,
      impressionName: callback(outer1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11749), {});
      }
    };
    obj1[outer1_3.TEMPLATES] = {
      fullscreen: true,
      impressionName: callback(outer1_2[5]).ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11753), {});
      }
    };
    obj5 = {
      headerTitle() {
        return null;
      },
      fullscreen: true,
      impressionName: callback(outer1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11763), {});
      }
    };
    obj1[outer1_3.CREATE] = obj5;
    obj[0] = obj1;
    obj[1] = items;
    return obj;
  }));
  let obj = { screens, initialRouteStack: initialStack, headerBackTitle: null };
  const intl = _require(1236).intl;
  obj[2] = intl.string(_require(1236).t["13/7kX"]);
  return jsx(_require(5823).Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: null });
};
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  const tmp = createCacheKey();
  return jsx(require(5368) /* SafeAreaPaddingView */.SafeAreaPaddingView, { top: true, style: createCacheKey().safeArea, children: children.children });
};
