// Module ID: 15031
// Function ID: 114508
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: [31, 27, 1355, 33, 4130, 689, 5500, 5186, 1273, 10113, 1212, 7495, 14961, 10199, 2]
// Exports: default

// Module 15031 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { StaticChannelRoute } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginRight: 16, tintColor: require("_createForOfIteratorHelperLoose").colors.CHANNEL_ICON, width: 20, height: 20 };
_createForOfIteratorHelperLoose.headerIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, onClose: importDefault } = arg0);
  let obj = {};
  obj = {};
  obj = { style: _createForOfIteratorHelperLoose().headerIcon };
  const obj1 = { disableColor: true, source: importDefault(10113) };
  obj.children = callback(require(1273) /* Button */.Icon, obj1);
  obj.leading = callback(View, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["KzCF/6"]);
  const items = [callback(require(5186) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), ];
  const obj2 = {};
  const obj3 = { source: importDefault(14961) };
  obj2.leading = callback(require(1273) /* Button */.Icon, obj3);
  const obj4 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl2.string(require(1212) /* getSystemLocale */.t.WqhZss);
  obj2.label = callback(require(7495) /* Form */.FormLabel, obj4);
  obj2.onPress = function onPress() {
    callback();
    const result = outer1_0(outer1_2[13]).copyGuildChannelOrThreadLink(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(require(7495) /* Form */.FormRow, obj2);
  obj.children = items;
  return callback2(require(5500) /* ActionSheet */.ActionSheet, obj);
};
