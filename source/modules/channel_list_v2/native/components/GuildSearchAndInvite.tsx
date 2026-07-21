// Module ID: 11385
// Function ID: 88518
// Name: handleInviteDisabledPress
// Dependencies: []

// Module 11385 (handleInviteDisabledPress)
function handleInviteDisabledPress() {
  const lazyResult = importAllResult.lazy(() => callback(paths[12])(paths[11], paths.paths));
  arg1(dependencyMap[13]).openAlert("invites-disabled", callback(lazyResult, {}));
}
function GuildSearchAndInvite(guildId) {
  let onPressIn;
  let onPressOut;
  let pressableStyles;
  guildId = guildId.guildId;
  const arg1 = guildId;
  const canInvite = guildId.canInvite;
  const importDefault = canInvite;
  const invitesDisabled = guildId.invitesDisabled;
  const dependencyMap = invitesDisabled;
  const onInvitePress = guildId.onInvitePress;
  const onEventsPress = guildId.onEventsPress;
  const View = onEventsPress;
  const hasUnreadEvents = guildId.hasUnreadEvents;
  let closure_5 = hasUnreadEvents;
  const useEventsButton = guildId.useEventsButton;
  let closure_6 = useEventsButton;
  const useButtonComponent = guildId.useButtonComponent;
  const tmp = callback2(useButtonComponent);
  let closure_7 = tmp;
  let obj = arg1(dependencyMap[14]);
  let closure_8 = obj.useNavigation();
  let obj1 = arg1(dependencyMap[15]);
  let closure_9 = obj1.useGuildSearchContext(guildId);
  const tmp2 = importDefault(dependencyMap[16])(() => {
    const guild = tmp.getGuild(guildId);
    let hasItem;
    if (null != guild) {
      const features = guild.features;
      hasItem = features.has(constants.HUB);
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
  let obj2 = arg1(dependencyMap[19]);
  const iOSPressEffects = obj2.useIOSPressEffects(4);
  const items = [canInvite, invitesDisabled, onInvitePress];
  ({ onPressIn, onPressOut, pressableStyles } = iOSPressEffects);
  const items1 = [useEventsButton, onEventsPress, hasUnreadEvents, tmp.badge];
  const memo = onInvitePress.useMemo(() => {
    let tmp = null;
    if (canInvite) {
      const obj = { "Bool(true)": null, "Bool(true)": null, icon: canInvite(invitesDisabled[21]), onPress: onInvitePress, onPressDisabled: closure_15 };
      const intl = guildId(invitesDisabled[22]).intl;
      obj.accessibilityLabel = intl.string(guildId(invitesDisabled[22]).t.VINpSK);
      obj.disabled = invitesDisabled;
      obj.maxFontSizeMultiplier = 2;
      tmp = callback(guildId(invitesDisabled[20]).IconButton, obj);
    }
    return tmp;
  }, items);
  obj = { style: tmp.container };
  if (useButtonComponent) {
    obj = { icon: importDefault(dependencyMap[25]), onPress: tmp2 };
    const intl2 = arg1(dependencyMap[22]).intl;
    obj.text = intl2.string(arg1(dependencyMap[22]).t.5h0QOP);
    obj.maxFontSizeMultiplier = 2;
    const items2 = [tmp8(arg1(dependencyMap[24]).Button, obj), memo, tmp5];
    obj.children = items2;
    let tmp19 = obj;
  } else {
    obj1 = {};
    const items3 = [tmp.search, pressableStyles];
    obj1.style = items3;
    obj2 = { onPress: tmp2, onPressIn, onPressOut };
    obj1.children = callback(arg1(dependencyMap[27]).SearchButtonContent, obj2);
    const items4 = [tmp8(importDefault(dependencyMap[26]).View, obj1), ];
    let tmp13 = null;
    if (canInvite) {
      const obj3 = { variant: "tertiary", icon: importDefault(dependencyMap[21]), onPress: onInvitePress, onPressDisabled: handleInviteDisabledPress };
      const intl = arg1(dependencyMap[22]).intl;
      obj3.accessibilityLabel = intl.string(arg1(dependencyMap[22]).t.VINpSK);
      obj3.disabled = invitesDisabled;
      tmp13 = callback(arg1(dependencyMap[20]).IconButton, obj3);
    }
    items4[1] = tmp13;
    obj.children = items4;
    tmp19 = obj;
  }
  return closure_13(View, tmp19);
}
const importAllResult = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const SEARCH_BAR_MARGIN_BOTTOM = arg1(dependencyMap[6]).SEARCH_BAR_MARGIN_BOTTOM;
({ GuildFeatures: closure_10, InstantInviteSources: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
let closure_14 = arg1(dependencyMap[9]).createStyles((arg0) => {
  let obj = {};
  obj = { paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, marginBottom: SEARCH_BAR_MARGIN_BOTTOM, flexDirection: "row" };
  let num = 10;
  if (arg0) {
    num = importDefault(dependencyMap[10]).space.PX_12;
  }
  obj.gap = num;
  obj.container = obj;
  obj.search = { flex: 1 };
  obj = { borderRadius: importDefault(dependencyMap[10]).radii.round, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND };
  obj.badge = obj;
  return obj;
});
const obj2 = arg1(dependencyMap[9]);
const memoResult = importAllResult.memo(function ConnectedGuildSearchAndInviteInner(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let flag = guild.useButtonComponent;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = guild.useEventsButton;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let obj = arg1(dependencyMap[28]);
  const items = [closure_6];
  const items1 = [guild];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channels = store.getChannels(guild.id);
    return guild(closure_2[29]).shouldRenderInvite(channels, guild);
  }, items1);
  const tmp2 = importDefault(dependencyMap[16])(() => {
    const channelId = channelId.getChannelId(guild.id);
    const channels = store.getChannels(guild.id);
    const result = guild(closure_2[30]).handleOpenInviteActionsheet(guild, channelId, channels, constants.GUILD_HEADER);
  });
  const shouldShowInvitesDisabledNotif = arg1(dependencyMap[31]).useShouldShowInvitesDisabledNotif(guild);
  const obj2 = arg1(dependencyMap[31]);
  const tmp5 = importDefault(dependencyMap[33])(guild);
  obj = { guildId: guild.id, canInvite: stateFromStores, invitesDisabled: shouldShowInvitesDisabledNotif, onInvitePress: tmp2, onEventsPress: tmp5.handlePress, onEventsLongPress: tmp5.handleLongPress, hasUnreadEvents: tmp5.hasUnread };
  if (flag2) {
    flag2 = tmp4;
  }
  obj.useEventsButton = flag2;
  obj.useButtonComponent = flag;
  return closure_12(GuildSearchAndInvite, obj);
});
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/channel_list_v2/native/components/GuildSearchAndInvite.tsx");

export default memoResult;
