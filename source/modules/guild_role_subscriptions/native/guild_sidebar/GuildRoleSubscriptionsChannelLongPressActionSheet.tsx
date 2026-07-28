// Module ID: 15140
// Function ID: 115160
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: [31, 27, 1355, 33, 4165, 689, 5533, 5220, 1273, 10117, 1212, 7611, 15063, 10203, 2]
// Exports: default

// Module 15140 (GuildRoleSubscriptionsChannelLongPressActionSheet)
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
  const obj1 = { disableColor: true, source: importDefault(10117) };
  obj.children = callback(require(1273) /* Button */.Icon, obj1);
  obj.leading = callback(View, obj);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["KzCF/6"]);
  const items = [callback(require(5220) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), ];
  const obj2 = {};
  const obj3 = { source: importDefault(15063) };
  obj2.leading = callback(require(1273) /* Button */.Icon, obj3);
  const obj4 = {};
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj4.text = intl2.string(require(1212) /* getSystemLocale */.t.WqhZss);
  obj2.label = callback(require(7611) /* Form */.FormLabel, obj4);
  obj2.onPress = function onPress() {
    callback();
    const result = outer1_0(outer1_2[13]).copyGuildChannelOrThreadLink(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(require(7611) /* Form */.FormRow, obj2);
  obj.children = items;
  return callback2(require(5533) /* ActionSheet */.ActionSheet, obj);
};
