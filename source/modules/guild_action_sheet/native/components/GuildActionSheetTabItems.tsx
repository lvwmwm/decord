// Module ID: 13106
// Function ID: 13107
// Name: GuildActionSheetTabItems
// Dependencies: [19, 1372, 1932, 1931, 676, 21, 13094, 4096, 589, 8348, 8345, 5022, 6679, 1236, 6615, 712, 4384, 4157, 5023, 10219, 7729, 5135, 9008, 8301, 2]
// Exports: default

// Module 13106 (GuildActionSheetTabItems)
import registerAsset from "registerAsset";
import ensureGuildLoaded from "ensureGuildLoaded";
import comparator from "comparator";
import handleConnectionOpen from "handleConnectionOpen";
import ME from "ME";
import jsxProd from "module_5135";

let c10;
let c9;
let closure_12;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
({ AnalyticEvents: metroImportAll, AnalyticsObjects: c9, AnalyticsSections: c10, InstantInviteSources: unpackModuleId } = ME);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let result = require("comparator").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetTabItems.tsx");

export default function GuildActionSheetTabItems(guild) {
  guild = guild.guild;
  let stateFromStores;
  let closure_2;
  let obj = guild(13094);
  let canAccessSettings = obj.useGuildActionSheetPermissions(guild).canAccessSettings;
  const total = stateFromStores(4096)(guild.id).total;
  let obj1 = guild(589);
  const items = [comparator];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getChannels(guild.id));
  let obj2 = guild(8348);
  let shouldRenderInviteResult = obj2.shouldRenderInvite(stateFromStores, guild);
  const items1 = [stateFromStores, guild];
  closure_2 = React.useCallback(() => {
    const channelId = outer1_7.getChannelId(guild.id);
    let channel = outer1_5.getChannel(guild(outer1_3[9]).getInviteChannelId(channelId, stateFromStores));
    if (null == channel) {
      channel = outer1_6.getDefaultChannel(tmp.id);
    }
    if (null != channel) {
      const tmp3Result = guild(outer1_3[10]);
      const result = tmp3Result.handleOpenInviteActionsheet(tmp, channel.id, tmp5, outer1_11.SERVER_PROFILE);
    }
  }, items1);
  obj = { direction: "horizontal", style: { flexWrap: "wrap" }, children: null };
  if (total > 0) {
    const intl2 = tmp(1236).intl;
    obj = { subscriptions: null };
    obj[0] = total;
    let formatToPlainStringResult = intl2.formatToPlainString(tmp(1236).t["pob/cL"], obj);
  } else {
    const intl = tmp(1236).intl;
    formatToPlainStringResult = intl.string(tmp(1236).t.Uj0md3);
  }
  obj1 = { variant: "secondary", label: formatToPlainStringResult, icon: null, grow: true, onPress: null };
  obj2 = { color: null };
  obj2[0] = stateFromStores(712).unsafe_rawColors.GUILD_BOOSTING_PINK;
  obj1[2] = closure_12(guild(6615).BoostGemIcon, obj2);
  obj1[4] = function onPress() {
    let obj = stateFromStores(outer1_3[16]);
    obj = { section: outer1_10.GUILD_POPOUT, object: outer1_9.BOOST_GEM_ICON };
    obj.trackWithMetadata(outer1_8.PREMIUM_GUILD_PROMOTION_OPENED, { location: obj });
    stateFromStores(outer1_3[17]).hideActionSheet();
    const obj3 = stateFromStores(outer1_3[17]);
    callback(outer1_3[18]).openApplyBoostModal(guild.id);
  };
  const items2 = [closure_12(guild(6679).IconButton, obj1), , , ];
  if (shouldRenderInviteResult) {
    let obj3 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl3 = tmp(1236).intl;
    obj3[1] = intl3.string(tmp(1236).t.VINpSK);
    obj3[2] = tmp3(10219);
    obj3[4] = function onPress() {
      stateFromStores(outer1_3[17]).hideActionSheet();
      callback();
    };
    shouldRenderInviteResult = tmp7(tmp(6679).IconButton, obj3);
  }
  items2[1] = shouldRenderInviteResult;
  const obj4 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
  const intl4 = tmp(1236).intl;
  obj4[1] = intl4.string(guild(1236).t.HcoRu0);
  obj4[2] = stateFromStores(7729);
  obj4[4] = function onPress() {
    stateFromStores(outer1_3[17]).hideActionSheet();
    const obj = stateFromStores(outer1_3[17]);
    stateFromStores(outer1_3[21]).open(guild.id);
  };
  items2[2] = closure_12(guild(6679).IconButton, obj4);
  if (canAccessSettings) {
    const obj5 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl5 = tmp(1236).intl;
    obj5[1] = intl5.string(tmp(1236).t["3D5yo/"]);
    obj5[2] = tmp3(9008);
    obj5[4] = function onPress() {
      stateFromStores(outer1_3[17]).hideActionSheet();
      const obj = stateFromStores(outer1_3[17]);
      stateFromStores(outer1_3[23]).open(guild.id);
    };
    canAccessSettings = tmp7(tmp(6679).IconButton, obj5);
  }
  items2[3] = canAccessSettings;
  obj[2] = items2;
  return closure_13(guild(5022).ButtonGroup, obj);
};
