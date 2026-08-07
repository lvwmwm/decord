// Module ID: 11614
// Function ID: 11615
// Name: GuildDirectoryAddModal
// Dependencies: [19, 11615, 21, 4302, 5266, 503, 5269, 11613, 11616, 11624, 11628, 11638, 5327, 5656, 5723, 1236, 2]
// Exports: GuildDirectoryAddModalScreen, default

// Module 11614 (GuildDirectoryAddModal)
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
  ({ screens, initialStack } = importDefault(5656)(() => {
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
      return callback2(callback(11616), {});
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
        return callback2(callback(11624), {});
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
        return callback2(callback(11624), {});
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
        return callback2(callback(11628), {});
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
        return callback2(callback(11638), {});
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
  return jsx(_require(5723).Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: null });
};
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  const tmp = createCacheKey();
  return jsx(require(5327) /* SafeAreaPaddingView */.SafeAreaPaddingView, { top: true, style: createCacheKey().safeArea, children: children.children });
};
