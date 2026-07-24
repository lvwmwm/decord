// Module ID: 11424
// Function ID: 88820
// Name: handleInviteDisabledPress
// Dependencies: [31, 27, 1348, 1907, 1838, 1906, 10289, 653, 33, 4130, 689, 11425, 1934, 4472, 1456, 10107, 8435, 10062, 11426, 5169, 7533, 10226, 1212, 8506, 4543, 5787, 3991, 11443, 566, 8529, 8526, 11444, 11445, 11447, 2]

// Module 11424 (handleInviteDisabledPress)
import importAllResult from "useInvitesDisabledPermission";
import { View } from "SEARCH_BAR_HEIGHT";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import { SEARCH_BAR_MARGIN_BOTTOM } from "hairlineWidth";
import ME from "ME";
import jsxProd from "useEventsButtonProps";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
const require = arg1;
function handleInviteDisabledPress() {
  const lazyResult = importAllResult.lazy(() => outer1_0(outer1_2[12])(outer1_2[11], outer1_2.paths));
  require(4472) /* useAlertStore */.openAlert("invites-disabled", callback(lazyResult, {}));
}
function GuildSearchAndInvite(guildId) {
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  guildId = guildId.guildId;
  const canInvite = guildId.canInvite;
  const invitesDisabled = guildId.invitesDisabled;
  const onInvitePress = guildId.onInvitePress;
  const onEventsPress = guildId.onEventsPress;
  const hasUnreadEvents = guildId.hasUnreadEvents;
  const useEventsButton = guildId.useEventsButton;
  const useButtonComponent = guildId.useButtonComponent;
  let tmp = callback2(useButtonComponent);
  let closure_7 = tmp;
  let obj = guildId(invitesDisabled[14]);
  let closure_8 = obj.useNavigation();
  let obj1 = guildId(invitesDisabled[15]);
  let closure_9 = obj1.useGuildSearchContext(guildId);
  let tmp2 = canInvite(invitesDisabled[16])(() => {
    const guild = tmp.getGuild(guildId);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(outer1_10.HUB);
    }
    if (hasItem) {
      let directoryChannelIds = useEventsButton.getDirectoryChannelIds(guildId);
    } else {
      directoryChannelIds = [];
    }
    let channel = null;
    if (0 !== directoryChannelIds.length) {
      channel = hasUnreadEvents.getChannel(directoryChannelIds[0]);
    }
    if (null != channel) {
      let obj = { channel };
      canInvite(invitesDisabled[17]).open(obj);
      const obj2 = canInvite(invitesDisabled[17]);
    } else {
      obj = canInvite(invitesDisabled[18]);
      const result = obj.navigateToSearchWithPrefetch(closure_8, closure_9);
    }
  });
  let obj2 = guildId(invitesDisabled[19]);
  const iOSPressEffects = obj2.useIOSPressEffects(4);
  let items = [canInvite, invitesDisabled, onInvitePress];
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const items1 = [useEventsButton, onEventsPress, hasUnreadEvents, tmp.badge];
  const memo = onInvitePress.useMemo(() => {
    let tmp = null;
    if (canInvite) {
      const obj = { variant: "secondary", size: "sm", icon: canInvite(invitesDisabled[21]), onPress: onInvitePress, onPressDisabled: outer1_15 };
      const intl = guildId(invitesDisabled[22]).intl;
      obj.accessibilityLabel = intl.string(guildId(invitesDisabled[22]).t.VINpSK);
      obj.disabled = invitesDisabled;
      obj.maxFontSizeMultiplier = 2;
      tmp = outer1_12(guildId(invitesDisabled[20]).IconButton, obj);
    }
    return tmp;
  }, items);
  obj = { style: tmp.container };
  if (useButtonComponent) {
    obj = { variant: "secondary", grow: true, shrink: true, size: "sm", icon: canInvite(invitesDisabled[25]), onPress: tmp2 };
    let intl2 = guildId(invitesDisabled[22]).intl;
    obj.text = intl2.string(guildId(invitesDisabled[22]).t["5h0QOP"]);
    obj.maxFontSizeMultiplier = 2;
    const items2 = [tmp8(guildId(invitesDisabled[24]).Button, obj), memo, tmp5];
    obj.children = items2;
    let tmp19 = obj;
  } else {
    obj1 = {};
    const items3 = [tmp.search, pressableStyles];
    obj1.style = items3;
    obj2 = { onPress: tmp2, onPressIn, onPressOut };
    obj1.children = callback(guildId(invitesDisabled[27]).SearchButtonContent, obj2);
    const items4 = [tmp8(canInvite(invitesDisabled[26]).View, obj1), ];
    let tmp13 = null;
    if (canInvite) {
      const obj3 = { variant: "tertiary", icon: canInvite(invitesDisabled[21]), onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress };
      let intl = guildId(invitesDisabled[22]).intl;
      obj3.accessibilityLabel = intl.string(guildId(invitesDisabled[22]).t.VINpSK);
      obj3.disabled = invitesDisabled;
      tmp13 = callback(guildId(invitesDisabled[20]).IconButton, obj3);
    }
    items4[1] = tmp13;
    obj.children = items4;
    tmp19 = obj;
  }
  return closure_13(onEventsPress, tmp19);
}
({ GuildFeatures: closure_10, InstantInviteSources: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let closure_14 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { paddingHorizontal: importDefault(689).space.PX_16, marginBottom: SEARCH_BAR_MARGIN_BOTTOM, flexDirection: "row" };
  let num = 10;
  if (arg0) {
    num = importDefault(689).space.PX_12;
  }
  obj.gap = num;
  obj.container = obj;
  obj.search = { flex: 1 };
  obj = { position: "absolute", right: 0, top: 0, width: 8, height: 8, borderRadius: importDefault(689).radii.round, backgroundColor: importDefault(689).colors.BACKGROUND_BRAND };
  obj.badge = obj;
  return obj;
});
const memoResult = importAllResult.memo(function ConnectedGuildSearchAndInviteInner(guild) {
  guild = guild.guild;
  let flag = guild.useButtonComponent;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.useEventsButton;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = guild(566);
  const items = [closure_6];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channels = outer1_6.getChannels(guild.id);
    return guild(outer1_2[29]).shouldRenderInvite(channels, guild);
  }, items1);
  const tmp2 = importDefault(8435)(() => {
    const channelId = outer1_8.getChannelId(guild.id);
    const channels = outer1_6.getChannels(guild.id);
    const result = guild(outer1_2[30]).handleOpenInviteActionsheet(guild, channelId, channels, outer1_11.GUILD_HEADER);
  });
  const shouldShowInvitesDisabledNotif = guild(11444).useShouldShowInvitesDisabledNotif(guild);
  const obj2 = guild(11444);
  const tmp5 = importDefault(11447)(guild);
  obj = { guildId: guild.id, canInvite: stateFromStores, invitesDisabled: shouldShowInvitesDisabledNotif, onInvitePress: tmp2, onEventsPress: tmp5.handlePress, onEventsLongPress: tmp5.handleLongPress, hasUnreadEvents: tmp5.hasUnread };
  if (flag2) {
    flag2 = tmp4;
  }
  obj.useEventsButton = flag2;
  obj.useButtonComponent = flag;
  return closure_12(GuildSearchAndInvite, obj);
});
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx");

export default memoResult;
