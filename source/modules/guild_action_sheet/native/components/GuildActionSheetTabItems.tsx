// Module ID: 12857
// Function ID: 98268
// Name: GuildActionSheetTabItems
// Dependencies: []
// Exports: default

// Module 12857 (GuildActionSheetTabItems)
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10, InstantInviteSources: closure_11 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  guild = guild.guild;
  const arg1 = guild;
  let obj = arg1(dependencyMap[6]);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = importDefault(dependencyMap[7])(guild.id).total;
  let obj1 = arg1(dependencyMap[8]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => store.getChannels(guild.id));
  const importDefault = stateFromStores;
  let obj2 = arg1(dependencyMap[9]);
  let shouldRenderInviteResult = obj2.shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  let closure_2 = React.useCallback(() => {
    const channelId = channelId.getChannelId(guild.id);
    let channel = channel.getChannel(guild(closure_3[9]).getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = store.getDefaultChannel(guild.id);
    }
    if (null != channel) {
      const obj2 = guild(closure_3[10]);
      const result = obj2.handleOpenInviteActionsheet(guild, channel.id, stateFromStores, constants4.SERVER_PROFILE);
    }
  }, items1);
  obj = { direction: "horizontal", style: { flexWrap: "wrap" } };
  obj = { variant: "secondary" };
  if (total > 0) {
    const intl2 = arg1(dependencyMap[13]).intl;
    obj1 = { subscriptions: total };
    let formatToPlainStringResult = intl2.formatToPlainString(arg1(dependencyMap[13]).t.pob/cL, obj1);
  } else {
    const intl = arg1(dependencyMap[13]).intl;
    formatToPlainStringResult = intl.string(arg1(dependencyMap[13]).t.Uj0md3);
  }
  obj.label = formatToPlainStringResult;
  obj2 = { color: importDefault(dependencyMap[15]).unsafe_rawColors.GUILD_BOOSTING_PINK };
  obj.icon = callback(arg1(dependencyMap[14]).BoostGemIcon, obj2);
  obj.grow = true;
  obj.onPress = function onPress() {
    let obj = stateFromStores(closure_3[16]);
    obj = { section: constants3.GUILD_POPOUT, object: constants2.BOOST_GEM_ICON };
    obj.trackWithMetadata(constants.PREMIUM_GUILD_PROMOTION_OPENED, { location: obj });
    stateFromStores(closure_3[17]).hideActionSheet();
    const obj3 = stateFromStores(closure_3[17]);
    callback(closure_3[18]).openApplyBoostModal(guild.id);
  };
  const items2 = [callback(arg1(dependencyMap[12]).IconButton, obj), , , ];
  if (shouldRenderInviteResult) {
    const obj3 = { variant: "secondary" };
    const intl3 = arg1(dependencyMap[13]).intl;
    obj3.label = intl3.string(arg1(dependencyMap[13]).t.VINpSK);
    obj3.icon = importDefault(dependencyMap[19]);
    obj3.grow = true;
    obj3.onPress = function onPress() {
      stateFromStores(closure_3[17]).hideActionSheet();
      callback();
    };
    shouldRenderInviteResult = callback(arg1(dependencyMap[12]).IconButton, obj3);
  }
  items2[1] = shouldRenderInviteResult;
  const obj4 = { variant: "secondary" };
  const intl4 = arg1(dependencyMap[13]).intl;
  obj4.label = intl4.string(arg1(dependencyMap[13]).t.HcoRu0);
  obj4.icon = importDefault(dependencyMap[20]);
  obj4.grow = true;
  obj4.onPress = function onPress() {
    stateFromStores(closure_3[17]).hideActionSheet();
    const obj = stateFromStores(closure_3[17]);
    stateFromStores(closure_3[21]).open(guild.id);
  };
  items2[2] = callback(arg1(dependencyMap[12]).IconButton, obj4);
  if (canAccessSettings) {
    const obj5 = { variant: "secondary" };
    const intl5 = arg1(dependencyMap[13]).intl;
    obj5.label = intl5.string(arg1(dependencyMap[13]).t.3D5yo/);
    obj5.icon = importDefault(dependencyMap[22]);
    obj5.grow = true;
    obj5.onPress = function onPress() {
      stateFromStores(closure_3[17]).hideActionSheet();
      const obj = stateFromStores(closure_3[17]);
      stateFromStores(closure_3[23]).open(guild.id);
    };
    canAccessSettings = callback(arg1(dependencyMap[12]).IconButton, obj5);
  }
  items2[3] = canAccessSettings;
  obj.children = items2;
  return closure_13(arg1(dependencyMap[11]).ButtonGroup, obj);
};
