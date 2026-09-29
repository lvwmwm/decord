// Module ID: 10920
// Function ID: 10921
// Name: HorizontalAutocomplete
// Dependencies: [19, 17, 4780, 2099, 2063, 4437, 1372, 1074, 21, 4788, 5773, 576, 4524, 5235, 4789, 504, 1177, 4784, 4632, 7464, 7482, 8425, 5271, 4941, 5836, 2]

// Module 10920 (HorizontalAutocomplete)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import ReanimatedRexportDefault from "ReanimatedRexport" /* 4524 */;
import UserUtilsDefault from "UserUtils" /* 4632 */;
import Text_Text from "Text/Text" /* 4784 */;
import timing from "timing" /* 4789 */;
import useMountEffectDefault from "useMountEffect" /* 5235 */;
import FastImageDefault from "FastImage" /* 5836 */;
import RoleIconDefault from "RoleIcon" /* 7482 */;
import _modDef8425 from "module_8425" /* 8425 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4780 */;
import GuildRoleStore from "GuildRoleStore" /* 2099 */;
import GuildStore from "GuildStore" /* 2063 */;
import RelationshipStore from "RelationshipStore" /* 4437 */;
import UserStore from "UserStore" /* 1372 */;
import TextStyles from "TextStyles" /* 5773 */;

require = fn;
function HorizontalAutocompleteOption(arg0) {
  let sharedValue;
  ({ children, onPress } = arg0);
  const tmp = closure_13();
  sharedValue = sharedValue(4524).useSharedValue(0);
  useMountEffectDefault(() => {
    const result = sharedValue.set(timing.withTiming(1));
  });
  const obj = sharedValue(4524);
  const fn = function c() {
    return { opacity: sharedValue.get() };
  };
  fn.__closure = { opacity: sharedValue };
  fn.__workletHash = 14159604656069;
  fn.__initData = __initData;
  const obj3 = { onPress, children: null };
  const animatedStyle = sharedValue(4524).useAnimatedStyle(fn);
  const obj4 = { style: null, children };
  const items = [tmp.horizontalAutocompleteOption, animatedStyle];
  obj4.style = items;
  obj3.children = closure_11(ReanimatedRexportDefault.View, obj4);
  return closure_11(closure_3, obj3);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const Constants = fn(1074);
({ ChannelTypes: c10, Fonts } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4788);
let obj2 = { emoji: { width: 32, height: 32 }, emojiImage: { resizeMode: "contain" }, emojiText: { lineHeight: 32, fontSize: 27, textAlign: "center" }, emojiName: { marginLeft: 8 }, nickname: null, status: null, horizontalAutocompleteOption: null, roleIcon: null, channelName: null };
const merged = Object.assign(TextStyles(Fonts.PRIMARY_SEMIBOLD, nativeDefault.colors.TEXT_DEFAULT, 14));
obj2.nickname = {};
obj2.status = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let obj3 = {};
let obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.horizontalAutocompleteOption = { paddingHorizontal: 8, flex: 1, flexDirection: "row", height: 56, alignItems: "center", borderRightWidth: StyleSheet.hairlineWidth, borderRightColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.roleIcon = { marginRight: 4 };
obj2.channelName = { marginLeft: 8 };
let closure_13 = createStyles.createStyles(obj2);
const __initData = { code: "function HorizontalAutocompleteTsx1(){const{opacity}=this.__closure;return{opacity:opacity.get()};}" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/composer/horizontal_autocomplete/HorizontalAutocomplete.tsx");

export default {
  User(arg0) {
    ({ user, nick } = arg0);
    ({ status, guildId, onPress } = arg0);
    const tmp = closure_13();
    const items = [AccessibilityStore];
    const obj2 = { onPress, children: null };
    const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
    const tmp6 = HorizontalAutocompleteOption;
    const tmp7 = closure_1_11;
    const items1 = [closure_1_11(native.Avatar, { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores }), ];
    const obj4 = { style: { marginLeft: 8, height: 56, flex: 1, flexDirection: "column", justifyContent: "center" }, children: null };
    const obj5 = { style: null, variant: "text-sm/semibold", children: null };
    const items2 = [tmp.nickname];
    obj5.style = items2;
    if (nick == null) {
      nick = UserUtilsDefault.getName(user);
    }
    obj5.children = nick;
    const items3 = [tmp7(Text_Text.Text, obj5), ];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", children: null };
    const obj3 = { status, statusStyle: tmp.status, user, size: native.AvatarSizes.SMALL, guildId, animate: !stateFromStores };
    const tmp8 = React4;
    const items4 = ["@", UserUtilsDefault.getUserTag(user, { decoration: "never" })];
    obj7.children = items4;
    items3[1] = closure_1_12(Text_Text.Text, obj7);
    obj4.children = items3;
    items1[1] = closure_1_12(tmp8, obj4);
    obj2.children = items1;
    return closure_1_12(tmp6, obj2);
  },
  Role(onPress) {
    ({ guildId: require, name, id: importDefault, colorString } = onPress);
    const tmp = closure_13();
    const items = [GuildRoleStore];
    const stateFromStores = initialize.useStateFromStores(items, () => GuildRoleStore.getRole(require, importDefault));
    let roleIconData = null;
    if (null != stateFromStores) {
      roleIconData = tmp2(7464).getRoleIconData(stateFromStores, 30);
      const tmp2Result = tmp2(7464);
    }
    const obj2 = { onPress: onPress.onPress, children: null };
    let tmp8 = null;
    if (null != roleIconData) {
      const obj3 = { style: tmp.roleIcon, children: null };
      const obj4 = { name, src: null, unicodeEmoji: null, size: 24 };
      ({ customIconSrc: obj5.src, unicodeEmoji: obj5.unicodeEmoji } = roleIconData);
      obj3.children = closure_11(RoleIconDefault, obj4);
      tmp8 = closure_11(closure_4, obj3);
    }
    const items1 = [tmp8, ];
    const items2 = [tmp.nickname, ];
    let tmp13;
    if (null != colorString) {
      const obj6 = { color: colorString };
      tmp13 = obj6;
    }
    const tmp12 = closure_11;
    const tmp6 = closure_12;
    const tmp7 = HorizontalAutocompleteOption;
    items2[1] = tmp13;
    items1[1] = tmp12(native.LegacyText, { style: items2, children: "@" + name });
    obj2.children = items1;
    return tmp6(tmp7, obj2);
  },
  Channel(channel) {
    channel = channel.channel;
    channel(504);
    [][0] = channel;
    if (channel.type === constants.GUILD_CATEGORY) {
      let channelIconWithGuild = _modDef8425;
    } else {
      channelIconWithGuild = tmp2(5271).getChannelIconWithGuild(channel, tmp5);
      const tmp2Result = tmp2(5271);
    }
    const tmp = closure_13();
    const tmp8 = closure_11(channel(1177).Icon, { source: channelIconWithGuild });
    const obj = { onPress: channel.onPress, children: null };
    const items = [tmp8, ];
    const channelName = channel(4941).computeChannelName(channel, UserStore, RelationshipStore);
    items[1] = closure_11(channel(4784).Text, { style: tmp.channelName, variant: "text-sm/semibold", children: channelName });
    obj.children = items;
    return closure_12(HorizontalAutocompleteOption, obj);
  },
  Emoji(url) {
    url = url.url;
    ({ name, surrogates, onPress } = url);
    const tmp = closure_13();
    if ("" !== url) {
      const obj2 = { style: null, source: null };
      const items = [, ];
      ({ emoji: arr2[0], emojiImage: arr2[1] } = tmp);
      obj2.style = items;
      const obj3 = { uri: url };
      obj2.source = obj3;
      let tmp5 = closure_1_11(FastImageDefault, obj2);
      let tmp6 = closure_1_11;
    } else {
      const obj = { style: null, allowFontScaling: false, children: null };
      const items1 = [, ];
      ({ emoji: arr[0], emojiText: arr[1] } = tmp);
      obj.style = items1;
      obj.children = surrogates;
      tmp5 = closure_1_11(native.LegacyText, obj);
      tmp6 = closure_1_11;
    }
    const obj4 = { onPress, children: null };
    const items2 = [tmp6(React4, { children: tmp5 }), tmp6(Text_Text.Text, { style: tmp.emojiName, variant: "text-sm/semibold", children: ":" + name + ":" })];
    obj4.children = items2;
    return closure_1_12(HorizontalAutocompleteOption, obj4);
  }
};
