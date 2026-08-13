// Module ID: 15411
// Function ID: 15412
// Name: GuildRoleSubscriptionsChannelLongPressActionSheet
// Dependencies: [19, 17, 1398, 21, 4342, 712, 5804, 5436, 1297, 12192, 1236, 8012, 15308, 9775, 2]
// Exports: default

// Module 15411 (GuildRoleSubscriptionsChannelLongPressActionSheet)
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
  obj1[1] = importDefault(12192);
  obj[1] = callback(require(1297) /* Button */.Icon, obj1);
  obj[0] = callback(View, obj);
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl.string(require(1236) /* getSystemLocale */.t["KzCF/6"]);
  const items = [callback(require(5436) /* RedesignBottomSheetTitleHeaderBase */.BottomSheetTitleHeader, obj), ];
  const obj2 = { leading: null, label: null, onPress: null };
  const obj3 = { source: null };
  obj3[0] = importDefault(15308);
  obj2[0] = callback(require(1297) /* Button */.Icon, obj3);
  const obj4 = { text: null };
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj4[0] = intl2.string(require(1236) /* getSystemLocale */.t.WqhZss);
  obj2[1] = callback(require(8012) /* Form */.FormLabel, obj4);
  obj2[2] = function onPress() {
    callback();
    const result = outer1_0(outer1_2[13]).copyGuildChannelOrThreadLink(closure_0, outer1_4.ROLE_SUBSCRIPTIONS);
  };
  items[1] = callback(require(8012) /* Form */.FormRow, obj2);
  obj[0] = items;
  return callback2(require(5804) /* ActionSheet */.ActionSheet, obj);
};
