// Module ID: 16136
// Function ID: 16137
// Name: GuildMemberDashChannelRow
// Dependencies: [19, 673, 1393, 10047, 21, 4481, 709, 16137, 5496, 4305, 1219, 12311, 1233, 5050, 1296, 2]
// Exports: default

// Module 16136 (GuildMemberDashChannelRow)
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "noop" /* 19 */;
import ME from "ME" /* 673 */;
import { StaticChannelRoute } from "set" /* 1393 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
({ GuildFeatures: c4, Routes: c5 } = ME);
createCacheKey = { container: null, badge: null, badgeText: null };
createCacheKey = { marginVertical: require("hairlineWidth").CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: ThemesDefault.radii.md };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_DEFAULT };
const obj1 = { backgroundColor: ThemesDefault.colors.BADGE_BACKGROUND_DEFAULT };
createCacheKey[2] = { color: ThemesDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: ThemesDefault.colors.BADGE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default function GuildMemberDashChannelRow(arg0) {
  ({ guild, selected } = arg0);
  let id;
  let hasItem;
  const tmp = callback();
  id = guild.id;
  let obj = id(16137);
  let num = obj.useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = React.useEffect(() => {
    if (hasItem) {
      let obj = hasItem(closure_1_2[8]);
      obj = { guildId: null, status: null };
      obj[0] = id;
      obj[1] = id(closure_1_2[9]).GuildJoinRequestApplicationStatuses.SUBMITTED;
      const guildJoinRequests = obj.fetchGuildJoinRequests(obj);
    }
  }, items);
  const items1 = [id];
  callback = React.useCallback(() => {
    id(closure_1_2[10]).transitionTo(closure_1_5.CHANNEL(id, closure_1_6.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = tmp2(12311).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  obj = { onPress: callback, style: tmp.container, accessible: true, accessibilityLabel: null, accessibilityState: null, mode: null, name: null, icon: null, channelInfo: null };
  const intl = tmp2(1233).intl;
  obj[3] = intl.string(id(1233).t["9Oq93m"]);
  obj[4] = { selected };
  obj[5] = tmp7;
  obj = { name: null, mode: null };
  const intl2 = tmp2(1233).intl;
  obj[0] = intl2.string(id(1233).t["9Oq93m"]);
  obj[1] = tmp7;
  obj[6] = jsx(id(12311).BaseChannelName, { name: null, mode: null });
  const tmp9 = hasItem(12311);
  obj[7] = jsx(id(12311).BaseChannelIcon, { mode: tmp7, IconComponent: id(5050).GroupIcon });
  let tmp8Result = null;
  if (num > 0) {
    const obj2 = { style: null, textStyle: null, value: null };
    ({ badge: obj5[0], badgeText: obj5[1] } = tmp);
    obj2[2] = num;
    tmp8Result = tmp8(tmp2(1296).Badge, obj2);
  }
  obj[8] = tmp8Result;
  return <tmp9 name={null} mode={null} />;
};
