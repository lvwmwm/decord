// Module ID: 13032
// Function ID: 100802
// Name: GuildActionSheetTabItems
// Dependencies: [31, 1348, 1907, 1906, 653, 33, 13020, 4037, 566, 8529, 8526, 4965, 7533, 1212, 7477, 689, 4324, 4098, 4966, 10226, 7727, 5079, 5792, 8482, 2]
// Exports: default

// Module 13032 (GuildActionSheetTabItems)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_8;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_8, AnalyticsObjects: closure_9, AnalyticsSections: closure_10, InstantInviteSources: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  guild = guild.guild;
  let obj = guild(13020);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(4037)(guild.id).total;
  let obj1 = guild(566);
  const items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getChannels(guild.id));
  let obj2 = guild(8529);
  let shouldRenderInviteResult = obj2.shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  let closure_2 = React.useCallback(() => {
    const channelId = outer1_7.getChannelId(guild.id);
    let channel = outer1_5.getChannel(guild(outer1_3[9]).getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = outer1_6.getDefaultChannel(guild.id);
    }
    if (null != channel) {
      const obj2 = guild(outer1_3[10]);
      const result = obj2.handleOpenInviteActionsheet(guild, channel.id, stateFromStores, outer1_11.SERVER_PROFILE);
    }
  }, items1);
  obj = { direction: "horizontal", style: { flexWrap: "wrap" } };
  obj = { variant: "secondary" };
  if (total > 0) {
    const intl2 = guild(1212).intl;
    obj1 = { subscriptions: total };
    let formatToPlainStringResult = intl2.formatToPlainString(guild(1212).t["pob/cL"], obj1);
  } else {
    const intl = guild(1212).intl;
    formatToPlainStringResult = intl.string(guild(1212).t.Uj0md3);
  }
  obj.label = formatToPlainStringResult;
  obj2 = { color: stateFromStores(689).unsafe_rawColors.GUILD_BOOSTING_PINK };
  obj.icon = callback(guild(7477).BoostGemIcon, obj2);
  obj.grow = true;
  obj.onPress = function onPress() {
    let obj = stateFromStores(outer1_3[16]);
    obj = { section: outer1_10.GUILD_POPOUT, object: outer1_9.BOOST_GEM_ICON };
    obj.trackWithMetadata(outer1_8.PREMIUM_GUILD_PROMOTION_OPENED, { location: obj });
    stateFromStores(outer1_3[17]).hideActionSheet();
    const obj3 = stateFromStores(outer1_3[17]);
    callback(outer1_3[18]).openApplyBoostModal(guild.id);
  };
  const items2 = [callback(guild(7533).IconButton, obj), , , ];
  if (shouldRenderInviteResult) {
    let obj3 = { variant: "secondary" };
    const intl3 = guild(1212).intl;
    obj3.label = intl3.string(guild(1212).t.VINpSK);
    obj3.icon = stateFromStores(10226);
    obj3.grow = true;
    obj3.onPress = function onPress() {
      stateFromStores(outer1_3[17]).hideActionSheet();
      callback();
    };
    shouldRenderInviteResult = callback(guild(7533).IconButton, obj3);
  }
  items2[1] = shouldRenderInviteResult;
  const obj4 = { variant: "secondary" };
  const intl4 = guild(1212).intl;
  obj4.label = intl4.string(guild(1212).t.HcoRu0);
  obj4.icon = stateFromStores(7727);
  obj4.grow = true;
  obj4.onPress = function onPress() {
    stateFromStores(outer1_3[17]).hideActionSheet();
    const obj = stateFromStores(outer1_3[17]);
    stateFromStores(outer1_3[21]).open(guild.id);
  };
  items2[2] = callback(guild(7533).IconButton, obj4);
  if (canAccessSettings) {
    const obj5 = { variant: "secondary" };
    const intl5 = guild(1212).intl;
    obj5.label = intl5.string(guild(1212).t["3D5yo/"]);
    obj5.icon = stateFromStores(5792);
    obj5.grow = true;
    obj5.onPress = function onPress() {
      stateFromStores(outer1_3[17]).hideActionSheet();
      const obj = stateFromStores(outer1_3[17]);
      stateFromStores(outer1_3[23]).open(guild.id);
    };
    canAccessSettings = callback(guild(7533).IconButton, obj5);
  }
  items2[3] = canAccessSettings;
  obj.children = items2;
  return closure_13(guild(4965).ButtonGroup, obj);
};
