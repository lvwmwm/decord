// Module ID: 15086
// Function ID: 114870
// Name: GuildMemberDashChannelRow
// Dependencies: [31, 653, 1355, 10289, 33, 4130, 689, 15087, 9196, 3950, 1198, 11452, 1212, 4646, 1273, 2]
// Exports: default

// Module 15086 (GuildMemberDashChannelRow)
import result from "result";
import ME from "ME";
import { StaticChannelRoute } from "set";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ GuildFeatures: closure_4, Routes: closure_5 } = ME);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: require("_createForOfIteratorHelperLoose").radii.md };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.badge = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_DEFAULT };
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BADGE_BACKGROUND_DEFAULT };
_createForOfIteratorHelperLoose.badgeText = { color: require("_createForOfIteratorHelperLoose").colors.BADGE_TEXT_DEFAULT };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { color: require("_createForOfIteratorHelperLoose").colors.BADGE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default function GuildMemberDashChannelRow(arg0) {
  let guild;
  let selected;
  ({ guild, selected } = arg0);
  let hasItem;
  const tmp = _createForOfIteratorHelperLoose();
  const id = guild.id;
  let obj = id(15087);
  const submittedGuildJoinRequestTotal = obj.useSubmittedGuildJoinRequestTotal({ guildId: id });
  let num = 0;
  if (null != submittedGuildJoinRequestTotal) {
    num = submittedGuildJoinRequestTotal;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = React.useEffect(() => {
    if (hasItem) {
      let obj = hasItem(outer1_2[8]);
      obj = { guildId: id, status: id(outer1_2[9]).GuildJoinRequestApplicationStatuses.SUBMITTED };
      const guildJoinRequests = obj.fetchGuildJoinRequests(obj);
    }
  }, items);
  const items1 = [id];
  const callback = React.useCallback(() => {
    id(outer1_2[10]).transitionTo(outer1_5.CHANNEL(id, outer1_6.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = id(11452).ChannelModes;
  const tmp6 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  obj = { onPress: callback, style: tmp.container, accessible: true };
  const intl = id(1212).intl;
  obj.accessibilityLabel = intl.string(id(1212).t["9Oq93m"]);
  obj.accessibilityState = { selected };
  obj.mode = tmp6;
  obj = {};
  const intl2 = id(1212).intl;
  obj.name = intl2.string(id(1212).t["9Oq93m"]);
  obj.mode = tmp6;
  obj.name = jsx(id(11452).BaseChannelName, {});
  const obj1 = { mode: tmp6, IconComponent: id(4646).GroupIcon };
  obj.icon = jsx(id(11452).BaseChannelIcon, { mode: tmp6, IconComponent: id(4646).GroupIcon });
  let tmp9 = null;
  if (num > 0) {
    const obj2 = {};
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    obj2.value = num;
    tmp9 = jsx(id(1273).Badge, {});
  }
  obj.channelInfo = tmp9;
  return jsx(hasItem(11452), {});
};
