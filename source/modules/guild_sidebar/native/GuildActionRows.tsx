// Module ID: 15033
// Function ID: 114514
// Name: GuildRolesAndChannelsRow
// Dependencies: [31, 27, 6764, 4142, 10260, 5055, 4326, 33, 4130, 689, 5730, 3946, 1334, 624, 6760, 4337, 9970, 1934, 11424, 11390, 1212, 12852, 2]
// Exports: GuildRolesAndChannelsRow

// Module 15033 (GuildRolesAndChannelsRow)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { CHANNELS_AND_ROLES_MODAL_KEY as closure_7 } from "GUILD_ONBOARDING_MODAL_KEY";
import { ReadStateTypes } from "ReadStateTypes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.channelInfoContainer = { paddingStart: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_sidebar/native/GuildActionRows.tsx");

export const GuildRolesAndChannelsRow = function GuildRolesAndChannelsRow(guild) {
  guild = guild.guild;
  const selected = guild.selected;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = id(5730)(guild);
  id = guild.id;
  let obj = guild(3946);
  const result = obj.useIsDismissibleContentDismissed_UNSAFE(guild(1334).DismissibleContent.CHANNEL_BROWSER_NEW_BADGE_NUX);
  let obj1 = guild(624);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.hasUnread(guild.id, outer1_8.GUILD_ONBOARDING_QUESTION));
  let obj2 = guild(624);
  const items1 = [_isNativeReflectConstruct];
  const items2 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_5.getNewChannelIds(guild.id).size > guild(outer1_2[14]).MAX_NEW_CHANNELS_TO_SHOW);
  const callback = React.useCallback(() => {
    let obj = id(outer1_2[15]);
    obj = { guildId: id };
    obj.pushLazy(guild(outer1_2[17])(outer1_2[16], outer1_2.paths), obj, outer1_7);
  }, items2);
  let SELECTED = guild(11424).ChannelModes.DEFAULT;
  if (selected) {
    SELECTED = guild(11424).ChannelModes.SELECTED;
  }
  let tmp10 = null;
  if (tmp9) {
    obj = { style: tmp.channelInfoContainer, children: jsx(guild(11390).NewBadge, {}) };
    tmp10 = <View style={tmp.channelInfoContainer}>{jsx(guild(11390).NewBadge, {})}</View>;
  }
  obj = { onPress: callback, style: tmp.container, accessible: true };
  const intl = guild(1212).intl;
  const string = intl.string;
  const t = guild(1212).t;
  if (tmp2) {
    let stringResult = string(t.h9mGOP);
  } else {
    stringResult = string(t.et6wav);
  }
  obj.accessibilityLabel = stringResult;
  obj.accessibilityState = { selected };
  obj.mode = SELECTED;
  obj1 = {};
  const intl2 = guild(1212).intl;
  const string2 = intl2.string;
  const t2 = guild(1212).t;
  if (tmp2) {
    let string2Result = string2(t2.h9mGOP);
  } else {
    string2Result = string2(t2.et6wav);
  }
  obj1.name = string2Result;
  obj1.mode = SELECTED;
  obj.name = jsx(guild(11424).BaseChannelName, {});
  obj2 = { mode: SELECTED, IconComponent: guild(12852).ChannelListMagnifyingGlassIcon };
  obj.icon = jsx(guild(11424).BaseChannelIcon, { mode: SELECTED, IconComponent: guild(12852).ChannelListMagnifyingGlassIcon });
  obj.channelInfo = tmp10;
  return jsx(id(11424), { onPress: callback, style: tmp.container, accessible: true });
};
