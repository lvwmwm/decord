// Module ID: 10071
// Function ID: 77734
// Name: GuildDirectoryAddModal
// Dependencies: [31, 10072, 33, 4130, 5084, 480, 5087, 10070, 10073, 10081, 10085, 10095, 5121, 5450, 5517, 1212, 2]
// Exports: GuildDirectoryAddModalScreen, default

// Module 10071 (GuildDirectoryAddModal)
import "result";
import { GuildDirectoryCreate } from "GuildDirectoryCreate";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
_createForOfIteratorHelperLoose.safeArea = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  let initialStack;
  let screens;
  const _require = arg0;
  ({ screens, initialStack } = importDefault(5450)(() => {
    let obj = { name: outer1_3.CREATE_OR_ADD };
    obj = {};
    let merged = Object.assign(callback);
    obj.params = obj;
    const items = [obj];
    obj = {};
    const obj1 = {};
    const obj2 = { fullscreen: true, impressionName: callback(outer1_2[5]).ImpressionNames.HUB_EXISTING_GUILD_CHOOSE };
    let obj5 = callback(outer1_2[6]);
    obj2.headerLeft = obj5.getHeaderCloseButton(outer1_1(outer1_2[7]).close);
    obj2.headerTitle = function headerTitle() {
      return null;
    };
    obj2.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return outer2_4(outer2_1(outer2_2[8]), {});
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
        return outer2_4(outer2_1(outer2_2[9]), {});
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
        return outer2_4(outer2_1(outer2_2[9]), {});
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
        return outer2_4(outer2_1(outer2_2[10]), {});
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
        return outer2_4(outer2_1(outer2_2[11]), {});
      }
    };
    obj1[outer1_3.CREATE] = obj5;
    obj.screens = obj1;
    obj.initialStack = items;
    return obj;
  }));
  let obj = { screens, initialRouteStack: initialStack };
  const intl = _require(1212).intl;
  obj.headerBackTitle = intl.string(_require(1212).t["13/7kX"]);
  return jsx(_require(5517).Navigator, { screens, initialRouteStack: initialStack });
};
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  const tmp = _createForOfIteratorHelperLoose();
  return jsx(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, { top: true, style: _createForOfIteratorHelperLoose().safeArea, children: children.children });
};
