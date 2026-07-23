// Module ID: 9641
// Function ID: 75092
// Name: HorizontalAutocompleteOption
// Dependencies: [31, 27, 1910, 1838, 3767, 1849, 653, 33, 4130, 5052, 689, 3991, 4559, 4131, 1273, 4126, 3969, 566, 5489, 5490, 7806, 4593, 4320, 5085, 2]

// Module 9641 (HorizontalAutocompleteOption)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";

let closure_10;
let closure_11;
let closure_3;
let closure_4;
const require = arg1;
function HorizontalAutocompleteOption(arg0) {
  let children;
  let onPress;
  ({ children, onPress } = arg0);
  let obj = sharedValue(3991);
  sharedValue = obj.useSharedValue(0);
  importDefault(4559)(() => {
    const result = sharedValue.set(sharedValue(outer1_2[13]).withTiming(1));
  });
  const tmp = _createForOfIteratorHelperLoose();
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = closure_13;
  obj = { onPress };
  const animatedStyle = sharedValue(3991).useAnimatedStyle(fn);
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj.children = callback(importDefault(3991).View, { style: items, children });
  return callback(closure_3, obj);
}
({ TouchableOpacity: closure_3, View: closure_4 } = get_ActivityIndicator);
const ChannelTypes = ME.ChannelTypes;
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(ME.Fonts.PRIMARY_SEMIBOLD, require("_createForOfIteratorHelperLoose").colors.TEXT_DEFAULT, 14));
_createForOfIteratorHelperLoose.nickname = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.status = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj2 = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: get_ActivityIndicator.StyleSheet.hairlineWidth, borderRightColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.horizontalAutocompleteOption = obj2;
_createForOfIteratorHelperLoose.roleIcon = { marginRight: 4 };
_createForOfIteratorHelperLoose.channelName = { marginLeft: 8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_13 = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
let obj3 = {
  User(arg0) {
    let guildId;
    let nick;
    let onPress;
    let status;
    let user;
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = _createForOfIteratorHelperLoose();
    let obj = { onPress };
    obj = { status, statusStyle: tmp.status, user, size: require(1273) /* Button */.AvatarSizes.SMALL, guildId, animate: true };
    const items = [callback(require(1273) /* Button */.Avatar, obj), ];
    obj = { style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" } };
    const obj1 = { style: items1, variant: "text-sm/semibold" };
    items1 = [tmp.nickname];
    if (null == nick) {
      nick = importDefault(3969).getName(user);
      const obj5 = importDefault(3969);
    }
    obj1.children = nick;
    const items2 = [callback(require(4126) /* Text */.Text, obj1), ];
    const obj2 = { variant: "text-xs/medium", color: "text-muted" };
    const items3 = ["@", importDefault(3969).getUserTag(user, { decoration: "never" })];
    obj2.children = items3;
    items2[1] = callback2(require(4126) /* Text */.Text, obj2);
    obj.children = items2;
    items[1] = callback2(closure_4, obj);
    obj.children = items;
    return callback2(HorizontalAutocompleteOption, obj);
  },
  Role(onPress) {
    let colorString;
    let importDefault;
    let name;
    let require;
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    const tmp = _createForOfIteratorHelperLoose();
    let obj = require(566) /* initialize */;
    const items = [closure_5];
    const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getRole(closure_0, closure_1));
    let roleIconData = null;
    if (null != stateFromStores) {
      let obj1 = require(5489) /* getRoleIconSource */;
      roleIconData = obj1.getRoleIconData(stateFromStores, 30);
    }
    obj = { onPress: onPress.onPress };
    let tmp9Result = null;
    if (null != roleIconData) {
      obj = { style: tmp.roleIcon };
      obj1 = { name };
      let tmp15;
      if (null != roleIconData.customIconSrc) {
        const obj2 = { uri: roleIconData.customIconSrc };
        tmp15 = obj2;
      }
      obj1.source = tmp15;
      obj1.unicodeEmoji = roleIconData.unicodeEmoji;
      obj1.size = 24;
      obj.children = closure_10(importDefault(5490), obj1);
      tmp9Result = closure_10(closure_4, obj);
      const tmp10 = closure_4;
      const tmp11 = closure_10;
      const tmp14 = importDefault(5490);
      const tmp9 = closure_10;
    }
    const items1 = [tmp9Result, ];
    const obj3 = {};
    const items2 = [tmp.nickname, ];
    let tmp17;
    if (null != colorString) {
      const obj4 = { color: colorString };
      tmp17 = obj4;
    }
    items2[1] = tmp17;
    obj3.style = items2;
    obj3.children = "@" + name;
    items1[1] = closure_10(require(1273) /* Button */.LegacyText, obj3);
    obj.children = items1;
    return closure_11(HorizontalAutocompleteOption, obj);
  },
  Channel(channel) {
    channel = channel.channel;
    channel(566);
    [][0] = channel;
    if (channel.type === ChannelTypes.GUILD_CATEGORY) {
      let channelIconWithGuild = importDefault(7806);
    } else {
      let obj = channel(4593);
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp3);
    }
    obj = { source: channelIconWithGuild };
    const tmp = _createForOfIteratorHelperLoose();
    const tmp9 = callback(channel(1273).Icon, obj);
    obj = { onPress: channel.onPress };
    const items = [tmp9, ];
    const channelName = channel(4320).computeChannelName(channel, closure_8, _isNativeReflectConstruct);
    items[1] = callback(channel(4126).Text, { style: tmp.channelName, variant: "text-sm/semibold", children: channelName });
    obj.children = items;
    return callback2(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    let name;
    let onPress;
    let surrogates;
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = _createForOfIteratorHelperLoose();
    if ("" !== url) {
      let obj = {};
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj.style = items;
      obj = { uri: url };
      obj.source = obj;
      let tmp5 = callback(importDefault(5085), obj);
    } else {
      obj = {};
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.allowFontScaling = false;
      obj.children = surrogates;
      tmp5 = callback(require(1273) /* Button */.LegacyText, obj);
    }
    const obj1 = { onPress };
    const obj2 = { children: tmp5 };
    const items2 = [callback(closure_4, obj2), ];
    const obj3 = { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" };
    items2[1] = callback(require(4126) /* Text */.Text, obj3);
    obj1.children = items2;
    return callback2(HorizontalAutocompleteOption, obj1);
  }
};
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default obj3;
