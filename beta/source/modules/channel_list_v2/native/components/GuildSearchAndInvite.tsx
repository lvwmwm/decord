// Module ID: 11780
// Function ID: 11781
// Name: GuildSearchAndInvite
// Dependencies: [19, 17, 2045, 4467, 2067, 2099, 9577, 1074, 21, 4836, 576, 11781, 1981, 5205, 1485, 11782, 6383, 11783, 11821, 5922, 7363, 9491, 1115, 9077, 5281, 6473, 4566, 11859, 504, 9278, 9275, 11860, 11861, 11863, 2]

// Module 11780 (GuildSearchAndInvite)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import useStableCallbackDefault from "useStableCallback" /* 6383 */;
import IconButton2 from "IconButton" /* 7363 */;
import AssetRegistryDefault from "AssetRegistry" /* 9077 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import utils_InstantInviteUtils from "utils/InstantInviteUtils" /* 9278 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 9491 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import GuildDirectorySearchModalActionCreatorsDefault from "GuildDirectorySearchModalActionCreators" /* 11783 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11821 */;
import useCanSeeEventsInChannelListDefault from "useCanSeeEventsInChannelList" /* 11861 */;
import useEventsButtonPropsDefault from "useEventsButtonProps" /* 11863 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildStore from "GuildStore" /* 2067 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2099 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;

let c10;
let closure_12;
let map1;
let unpackModuleId;
function handleInviteDisabledPress() {
  let paths;
  const lazyResult = react.lazy(() => require("asyncRequire")(paths[11], paths.paths));
  const obj = useAlertStore;
  obj.openAlert("invites-disabled", closure_12(lazyResult, {}));
}
function GuildSearchAndInvite(guildId) {
  let intl;
  let intl2;
  let items3;
  let obj7;
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  let tmp14;
  guildId = guildId.guildId;
  const canInvite = guildId.canInvite;
  const invitesDisabled = guildId.invitesDisabled;
  const onInvitePress = guildId.onInvitePress;
  const onEventsPress = guildId.onEventsPress;
  const hasUnreadEvents = guildId.hasUnreadEvents;
  const useEventsButton = guildId.useEventsButton;
  const useButtonComponent = guildId.useButtonComponent;
  let tmp = closure_14(useButtonComponent);
  const badge = tmp;
  let tmp2 = guildId;
  const tmp3 = invitesDisabled;
  let obj = guildId(invitesDisabled[14]);
  let closure_8 = obj.useNavigation();
  let obj2 = guildId(invitesDisabled[15]);
  let closure_9 = obj2.useGuildSearchContext(guildId);
  const tmp4 = canInvite;
  const tmp5 = canInvite(invitesDisabled[16])(() => {
    let directoryChannelIds;
    const guild = GuildStore.getGuild(guildId);
    let hasItem;
    const tmp = guildId;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(constants.HUB);
    }
    if (hasItem) {
      directoryChannelIds = GuildChannelStore.getDirectoryChannelIds(tmp);
    } else {
      directoryChannelIds = [];
    }
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = ChannelStore.getChannel(directoryChannelIds[0]);
    }
    if (null != channel) {
      const obj3 = { channel };
      const obj2 = GuildDirectorySearchModalActionCreatorsDefault;
      obj2.open(obj3);
    } else {
      const obj = SearchPlatformUtilsDefault;
      const result = obj.navigateToSearchWithPrefetch(closure_8, closure_9);
    }
  });
  let obj3 = guildId(invitesDisabled[19]);
  const iOSPressEffects = obj3.useIOSPressEffects(4);
  let items = [canInvite, invitesDisabled, onInvitePress];
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const items1 = [useEventsButton, onEventsPress, hasUnreadEvents, tmp.badge];
  const memo = onInvitePress.useMemo(() => {
    let intl;
    let tmp = null;
    if (canInvite) {
      const obj = { variant: "secondary", size: "sm", icon: AssetRegistryDefault2, onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: intl.string(intl3.t.VINpSK), disabled: invitesDisabled, maxFontSizeMultiplier: 2 };
      const IconButton = IconButton2.IconButton;
      intl = intl3.intl;
      tmp = closure_12(IconButton, obj);
    }
    return tmp;
  }, items);
  const obj4 = { style: tmp.container, children: null };
  const tmp10 = onEventsPress;
  const tmp9 = closure_13;
  if (useButtonComponent) {
    const obj5 = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: tmp4(tmp3[25]), onPress: tmp5, text: intl2.string(tmp2(tmp3[22]).t["5h0QOP"]), maxFontSizeMultiplier: 2 };
    const Button = tmp2(tmp3[24]).Button;
    intl2 = tmp2(tmp3[22]).intl;
    const items2 = [tmp11(Button, obj5), memo, tmp8];
    obj4.children = items2;
    tmp14 = obj4;
  } else {
    const obj6 = { style: items3, children: closure_12(tmp2(tmp3[27]).SearchButtonContent, obj7) };
    items3 = [tmp.search, pressableStyles];
    View = tmp4(tmp3[26]).View;
    obj7 = { onPress: tmp5, onPressIn, onPressOut };
    const items4 = [tmp11(View, obj6), ];
    let tmp11Result = null;
    if (canInvite) {
      const obj8 = { variant: "tertiary", icon: tmp4(tmp3[21]), onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress, accessibilityLabel: intl.string(tmp2(tmp3[22]).t.VINpSK), disabled: invitesDisabled };
      let IconButton = tmp2(tmp3[20]).IconButton;
      intl = tmp2(tmp3[22]).intl;
      tmp11Result = tmp11(IconButton, obj8);
    }
    items4[1] = tmp11Result;
    obj4.children = items4;
    tmp14 = obj4;
  }
  return tmp9(tmp10, tmp14);
}
let View = react_native.View;
const SEARCH_BAR_MARGIN_BOTTOM = RedesignChannelListConstants.SEARCH_BAR_MARGIN_BOTTOM;
({ GuildFeatures: c10, InstantInviteSources: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let closure_14 = createStyles.createStyles((arg0) => {
  let num;
  const obj = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: SEARCH_BAR_MARGIN_BOTTOM, flexDirection: "row", gap: num };
  num = 10;
  const tmp3 = arg0;
  if (tmp3) {
    num = tmp(576).space.PX_12;
  }
  const obj2 = { container: obj, search: { flex: 1 }, badge: size };
  size = { position: "absolute", right: 0, top: 0, width: 8, height: 8, borderRadius: tmp(576).radii.round, backgroundColor: tmp(576).colors.BACKGROUND_BRAND };
  return obj2;
});
const memoResult = react.memo(function ConnectedGuildSearchAndInviteInner(guild) {
  guild = guild.guild;
  let flag = guild.useButtonComponent;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.useEventsButton;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = guild(504);
  const items = [GuildChannelStore];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channels = GuildChannelStore.getChannels(guild.id);
    const obj = utils_InstantInviteUtils;
    return obj.shouldRenderInvite(channels, guild);
  }, items1);
  const tmp2 = useStableCallbackDefault(() => {
    const channelId = SelectedChannelStore.getChannelId(guild.id);
    const channels = GuildChannelStore.getChannels(guild.id);
    const obj = instant_invite_InstantInviteUtils;
    const result = obj.handleOpenInviteActionsheet(guild, channelId, channels, unpackModuleId.GUILD_HEADER);
  });
  const obj2 = guild(11860);
  const shouldShowInvitesDisabledNotif = obj2.useShouldShowInvitesDisabledNotif(guild);
  const tmp4 = useCanSeeEventsInChannelListDefault(guild.id);
  const tmp5 = useEventsButtonPropsDefault(guild);
  const obj3 = { guildId: guild.id, canInvite: stateFromStores, invitesDisabled: shouldShowInvitesDisabledNotif, onInvitePress: tmp2, onEventsPress: tmp5.handlePress, onEventsLongPress: tmp5.handleLongPress, hasUnreadEvents: tmp5.hasUnread, useEventsButton: flag2, useButtonComponent: flag };
  const tmp6 = closure_12;
  const tmp7 = GuildSearchAndInvite;
  if (flag2) {
    flag2 = tmp4;
  }
  return tmp6(tmp7, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx");

export default memoResult;
