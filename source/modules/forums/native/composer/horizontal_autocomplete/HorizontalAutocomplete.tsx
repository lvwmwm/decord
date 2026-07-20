// Module ID: 9628
// Function ID: 75010
// Name: HorizontalAutocompleteOption
// Dependencies: []

// Module 9628 (HorizontalAutocompleteOption)
function HorizontalAutocompleteOption(arg0) {
  let children;
  let onPress;
  ({ children, onPress } = arg0);
  let obj = arg1(dependencyMap[11]);
  const sharedValue = obj.useSharedValue(0);
  const arg1 = sharedValue;
  importDefault(dependencyMap[12])(() => {
    const result = sharedValue.set(sharedValue(closure_2[13]).withTiming(1));
  });
  const tmp = callback3();
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = closure_13;
  obj = { onPress };
  const animatedStyle = arg1(dependencyMap[11]).useAnimatedStyle(fn);
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj.children = callback(importDefault(dependencyMap[11]).View, { style: items, children });
  return callback(closure_3, obj);
}
importAll(dependencyMap[0]);
const tmp3 = arg1(dependencyMap[1]);
({ TouchableOpacity: closure_3, View: closure_4 } = tmp3);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const tmp4 = arg1(dependencyMap[6]);
const ChannelTypes = tmp4.ChannelTypes;
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { emoji: { aze: "boolean", azj: "string" }, emojiImage: { resizeMode: "contain" }, emojiText: { "Bool(false)": "AggregateError", "Bool(false)": "MUR", "Bool(false)": "any" }, emojiName: { marginLeft: 8 } };
obj = {};
const tmp5 = arg1(dependencyMap[7]);
const merged = Object.assign(importDefault(dependencyMap[9])(tmp4.Fonts.PRIMARY_SEMIBOLD, importDefault(dependencyMap[10]).colors.TEXT_DEFAULT, 14));
obj.nickname = obj;
const importDefaultResult = importDefault(dependencyMap[9]);
obj.status = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
const obj1 = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BASE_LOW };
obj.horizontalAutocompleteOption = { borderRightWidth: tmp3.StyleSheet.hairlineWidth, borderRightColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
obj.roleIcon = { marginRight: 4 };
obj.channelName = { marginLeft: 8 };
let closure_12 = obj.createStyles(obj);
let closure_13 = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const obj2 = { borderRightWidth: tmp3.StyleSheet.hairlineWidth, borderRightColor: importDefault(dependencyMap[10]).colors.BORDER_SUBTLE };
const obj3 = {
  User(arg0) {
    let guildId;
    let nick;
    let onPress;
    let status;
    let user;
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = callback3();
    let obj = { onPress };
    obj = { status, statusStyle: tmp.status, user, size: arg1(dependencyMap[14]).AvatarSizes.SMALL, guildId, animate: true };
    const items = [callback(arg1(dependencyMap[14]).Avatar, obj), ];
    obj = { style: { st: "Fran\u00E7ais", padding: "French", flexGrow: "fr", borderRadius: "french", marginHorizontal: true } };
    const obj1 = { style: items1, variant: "text-sm/semibold" };
    const items1 = [tmp.nickname];
    if (null == nick) {
      nick = importDefault(dependencyMap[16]).getName(user);
      const obj5 = importDefault(dependencyMap[16]);
    }
    obj1.children = nick;
    const items2 = [callback(arg1(dependencyMap[15]).Text, obj1), ];
    const obj2 = { INTEGRATION_CREATE: true, ConstraintReasonCode: true };
    const items3 = [null, importDefault(dependencyMap[16]).getUserTag(user, { decoration: "never" })];
    obj2.children = items3;
    items2[1] = callback2(arg1(dependencyMap[15]).Text, obj2);
    obj.children = items2;
    items[1] = callback2(closure_4, obj);
    obj.children = items;
    return callback2(HorizontalAutocompleteOption, obj);
  },
  Role(onPress) {
    let colorString;
    let name;
    ({ guildId: closure_0, name, id: closure_1, colorString } = onPress);
    const tmp = callback3();
    let obj = arg1(dependencyMap[17]);
    const items = [closure_5];
    const stateFromStores = obj.useStateFromStores(items, () => role.getRole(closure_0, closure_1));
    let roleIconData = null;
    if (null != stateFromStores) {
      let obj1 = arg1(dependencyMap[18]);
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
      obj.children = closure_10(importDefault(dependencyMap[19]), obj1);
      tmp9Result = closure_10(closure_4, obj);
      const tmp10 = closure_4;
      const tmp11 = closure_10;
      const tmp14 = importDefault(dependencyMap[19]);
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
    items1[1] = closure_10(arg1(dependencyMap[14]).LegacyText, obj3);
    obj.children = items1;
    return closure_11(HorizontalAutocompleteOption, obj);
  },
  Channel(channel) {
    channel = channel.channel;
    const arg1 = channel;
    arg1(dependencyMap[17]);
    [][0] = channel;
    if (channel.type === ChannelTypes.GUILD_CATEGORY) {
      let channelIconWithGuild = importDefault(dependencyMap[20]);
    } else {
      let obj = arg1(dependencyMap[21]);
      channelIconWithGuild = obj.getChannelIconWithGuild(channel, tmp3);
    }
    obj = { source: channelIconWithGuild };
    const tmp = callback3();
    const tmp9 = callback(arg1(dependencyMap[14]).Icon, obj);
    obj = { onPress: channel.onPress };
    const items = [tmp9, ];
    const channelName = arg1(dependencyMap[22]).computeChannelName(channel, closure_8, closure_7);
    items[1] = callback(arg1(dependencyMap[15]).Text, { style: tmp.channelName, variant: "text-sm/semibold", children: channelName });
    obj.children = items;
    return callback2(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    let name;
    let onPress;
    let surrogates;
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = callback3();
    if ("" !== url) {
      let obj = {};
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj.style = items;
      obj = { uri: url };
      obj.source = obj;
      let tmp5 = callback(importDefault(dependencyMap[23]), obj);
    } else {
      obj = {};
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.allowFontScaling = false;
      obj.children = surrogates;
      tmp5 = callback(arg1(dependencyMap[14]).LegacyText, obj);
    }
    const obj1 = { onPress };
    const obj2 = { children: tmp5 };
    const items2 = [callback(closure_4, obj2), ];
    const obj3 = { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" };
    items2[1] = callback(arg1(dependencyMap[15]).Text, obj3);
    obj1.children = items2;
    return callback2(HorizontalAutocompleteOption, obj1);
  }
};
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default obj3;
