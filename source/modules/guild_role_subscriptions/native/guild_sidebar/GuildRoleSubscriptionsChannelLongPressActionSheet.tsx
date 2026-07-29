// Module ID: 15173
// Function ID: 15174
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: [19, 17, 1379, 21, 4189, 712, 5551, 5242, 1297, 10138, 1236, 7634, 15094, 10224, 2]
// Exports: default

// Module 15173 (GuildRoleSubscriptionsChannelLongPressActionSheet)
import "noop";
import { View } from "get ActivityIndicator";
import { StaticChannelRoute } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { headerIcon: null };
createCacheKey = { marginRight: 16, tintColor: require("Themes").colors.CHANNEL_ICON, width: 20, height: 20 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_sidebar/GuildRoleSubscriptionsChannelLongPressActionSheet.tsx");

export default function GuildRoleSubscriptionsChannelLongPressActionSheet(arg0) {
  let importDefault;
  let require;
  ({ guildId: require, onClose: importDefault } = arg0);
  let obj = { children: null };
  obj = { leading: null, title: null };
  obj = { style: createCacheKey().headerIcon, children: null };
  const obj1 = { disableColor: true, source: null };
  obj1[1] = importDefault(10138);
  obj[1] = callback(require(1297) /* Button */.Icon, obj1);
  obj[0] = callback(View, obj);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["KzCF/6"]);
  const items = [callback(require(5242) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), ];
  const obj2 = { leading: null, label: null, onPress: null };
  const obj3 = { source: null };
  obj3[0] = importDefault(15094);
  obj2[0] = callback(require(1297) /* Button */.Icon, obj3);
  const obj4 = { text: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl2.string(require(1236) /* getSystemLocale */.t.WqhZss);
  obj2[1] = callback(require(7634) /* Form */.FormLabel, obj4);
  obj2[2] = function onPress() {
    callback();
    const result = outer1_0(outer1_2[13]).copyGuildChannelOrThreadLink(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(require(7634) /* Form */.FormRow, obj2);
  obj[0] = items;
  return callback2(require(5551) /* ActionSheet */.ActionSheet, obj);
};
