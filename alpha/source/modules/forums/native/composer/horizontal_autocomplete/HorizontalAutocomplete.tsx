// Module ID: 10499
// Function ID: 10500
// Name: HorizontalAutocomplete
// Dependencies: [19, 17, 5010, 4915, 4880, 4951, 1384, 1072, 21, 5009, 6717, 575, 5090, 5588, 5249, 504, 1188, 5619, 5063, 7350, 7368, 8700, 8595, 5647, 5712, 2]

// Module 10499 (HorizontalAutocomplete)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1188 */;
import UserUtilsDefault from "UserUtils" /* 5063 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 5090 */;
import timing from "timing" /* 5249 */;
import useMountEffectDefault from "useMountEffect" /* 5588 */;
import Text_Text from "Text/Text" /* 5619 */;
import FastImageDefault from "FastImage" /* 5712 */;
import RoleIconUtils from "RoleIconUtils" /* 7350 */;
import RoleIconDefault from "RoleIcon" /* 7368 */;
import AssetRegistryDefault from "AssetRegistry" /* 8700 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;
import GuildRoleStore from "GuildRoleStore" /* 4915 */;
import GuildStore from "GuildStore" /* 4880 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import UserStore from "UserStore" /* 1384 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import TextStyles from "TextStyles" /* 6717 */;
import size from "module_2" /* 2 */;

let set;

let Fonts;
let StyleSheet;
let c10;
let c3;
let closure_12;
let closure_4;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
function HorizontalAutocompleteOption(arg0) {
  let children;
  let items;
  let obj4;
  let onPress;
  let sharedValue;
  ({ children, onPress } = arg0);
  const tmp = closure_13();
  let obj = sharedValue(5090);
  sharedValue = obj.useSharedValue(0);
  useMountEffectDefault(() => {
    set = sharedValue.set;
    const obj = timing;
    const result = set(obj.withTiming(1));
  });
  const fn = function c() {
    const obj = { opacity: sharedValue.get() };
    return obj;
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = __initData;
  const obj3 = { onPress, children: closure_11(ReanimatedRexportDefault.View, obj4) };
  const obj2 = sharedValue(5090);
  const animatedStyle = obj2.useAnimatedStyle(fn);
  obj4 = { style: items, children };
  items = [tmp.horizontalAutocompleteOption, animatedStyle];
  return closure_11(closure_3, obj3);
}
({ TouchableOpacity: c3, View: closure_4, StyleSheet } = react_native);
({ ChannelTypes: c10, Fonts } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 }, nickname: obj2, status: obj3, horizontalAutocompleteOption: obj4, roleIcon: { marginRight: 4 }, channelName: { marginLeft: 8 } };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 14));
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj4 = { paddingHorizontal: 8, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_13 = createStyles(obj);
const __initData = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
let obj5 = {
  User(arg0) {
    let guildId;
    let items1;
    let items2;
    let items3;
    let nick;
    let onPress;
    let status;
    let useReducedMotion;
    let user;
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = closure_13();
    const items = [AccessibilityStore];
    const obj2 = { onPress, children: items1 };
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const obj3 = { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores };
    const Avatar = native.Avatar;
    items1 = [unpackModuleId(Avatar, obj3), ];
    const obj4 = { style: { marginLeft: 8, height: 56, flexDirection: "column", justifyContent: "center" }, children: items2 };
    const obj5 = { style: tmp.nickname, variant: "text-sm/semibold", children: nick };
    const Text = Text_Text.Text;
    const tmp6 = HorizontalAutocompleteOption;
    const tmp7 = unpackModuleId;
    const tmp8 = React3;
    if (nick == null) {
      const obj6 = UserUtilsDefault;
      nick = obj6.getName(user);
    }
    items2 = [tmp7(Text, obj5), ];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", children: items3 };
    const Text2 = Text_Text.Text;
    items3 = ["@"];
    const obj8 = UserUtilsDefault;
    items3[1] = obj8.getUserTag(user, { decoration: "never" });
    items2[1] = authStore2(Text2, obj7);
    items1[1] = authStore2(tmp8, obj4);
    return authStore2(tmp6, obj2);
  },
  Role(onPress) {
    let colorString;
    let items1;
    let name;
    let obj4;
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    onPress = onPress.onPress;
    const tmp = closure_13();
    const items = [GuildRoleStore];
    const obj = get_initialized;
    const stateFromStores = obj.useStateFromStores(items, () => GuildRoleStore.getRole(require, importDefault));
    let roleIconData = null;
    if (null != stateFromStores) {
      const tmp2Result = RoleIconUtils;
      roleIconData = tmp2Result.getRoleIconData(stateFromStores, 30);
    }
    let tmp8 = null;
    const obj2 = { onPress, children: items1 };
    const tmp6 = closure_12;
    const tmp7 = HorizontalAutocompleteOption;
    if (null != roleIconData) {
      const obj3 = { style: tmp.roleIcon, children: closure_11(RoleIconDefault, obj4) };
      obj4 = { name, src: null, unicodeEmoji: null, size: 24 };
      ({ customIconSrc: obj5.src, unicodeEmoji: obj5.unicodeEmoji } = roleIconData);
      tmp8 = closure_11(closure_4, obj3);
    }
    items1 = [tmp8, ];
    const items2 = [tmp.nickname, ];
    let tmp13;
    const LegacyText = tmp2(1188).LegacyText;
    const tmp12 = closure_11;
    if (null != colorString) {
      tmp13 = { color: colorString };
      const obj6 = { color: colorString };
    }
    items2[1] = tmp13;
    const obj7 = { style: items2, children: "@" + name };
    items1[1] = tmp12(LegacyText, obj7);
    return tmp6(tmp7, obj2);
  },
  Channel(channel) {
    let channelIconWithGuild;
    let items;
    channel = channel.channel;
    const onPress = channel.onPress;
    const tmp = closure_13();
    channel(504);
    [][0] = channel;
    if (channel.type === constants.GUILD_CATEGORY) {
      channelIconWithGuild = AssetRegistryDefault;
    } else {
      const tmp2Result = channel(8595);
      channelIconWithGuild = tmp2Result.getChannelIconWithGuild(channel, tmp5);
    }
    const obj = { onPress, children: items };
    items = [closure_11(channel(1188).Icon, { source: channelIconWithGuild }), ];
    const tmp8 = closure_11(channel(1188).Icon, { source: channelIconWithGuild });
    const tmp2Result2 = channel(5647);
    const channelName = tmp2Result2.computeChannelName(channel, UserStore, RelationshipStore);
    const obj2 = { style: tmp.channelName, variant: "text-sm/semibold", children: channelName };
    items[1] = closure_11(channel(5619).Text, obj2);
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    let items;
    let items1;
    let items2;
    let name;
    let obj3;
    let onPress;
    let surrogates;
    let tmp5;
    let tmp6;
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_13();
    if ("" !== url) {
      const obj2 = { style: items, source: obj3 };
      items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj3 = { uri: url };
      tmp5 = unpackModuleId(FastImageDefault, obj2);
      tmp6 = unpackModuleId;
    } else {
      const obj = { style: items1, allowFontScaling: false, children: surrogates };
      items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      tmp5 = unpackModuleId(native.LegacyText, obj);
      tmp6 = unpackModuleId;
    }
    const obj4 = { onPress, children: items2 };
    items2 = [tmp6(React3, { children: tmp5 }), ];
    const obj5 = { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" };
    const Text = Text_Text.Text;
    items2[1] = tmp6(Text, obj5);
    return authStore2(HorizontalAutocompleteOption, obj4);
  }
};
let result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default obj5;
