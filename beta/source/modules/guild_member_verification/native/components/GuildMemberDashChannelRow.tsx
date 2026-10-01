// Module ID: 15846
// Function ID: 15847
// Name: GuildMemberDashChannelRow
// Dependencies: [19, 1074, 2052, 9577, 21, 4836, 576, 15847, 5853, 4658, 1101, 11868, 1115, 5403, 1177, 2]
// Exports: default

// Module 15846 (GuildMemberDashChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import router_utils from "router_utils" /* 1101 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4658 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 5853 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 9577 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let obj4;
({ GuildFeatures: closure_4, Routes: hasOwnProperty } = Constants);
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const CHANNEL_MARGIN_VERTICAL = RedesignChannelListConstants.CHANNEL_MARGIN_VERTICAL;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, badge: obj3, badgeText: obj4 };
createStyles = createStyles.createStyles;
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
obj3 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
obj4 = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default function GuildMemberDashChannelRow(arg0) {
  let guild;
  let intl2;
  let selected;
  ({ guild, selected } = arg0);
  let hasItem;
  let tmp = closure_8();
  const id = guild.id;
  let obj = id(15847);
  let num = obj.useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  const features = guild.features;
  hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
  const items = [guild.features, id, hasItem];
  const effect = react.useEffect(() => {
    const tmp = hasItem;
    if (tmp) {
      const obj = { guildId: id, status: MemberVerificationTypes.GuildJoinRequestApplicationStatuses.SUBMITTED };
      const fetchGuildJoinRequests = GuildJoinRequestActionCreatorsDefault.fetchGuildJoinRequests;
      GuildJoinRequestActionCreatorsDefault;
      const guildJoinRequests = fetchGuildJoinRequests(obj);
    }
  }, items);
  const items1 = [id];
  const callback = react.useCallback(() => {
    const obj = router_utils;
    obj.transitionTo(hasOwnProperty.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
  }, items1);
  const ChannelModes = tmp2(11868).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  hasItem(11868);
  const intl = tmp2(1115).intl;
  ({ name: intl2.string(id(1115).t["9Oq93m"]), mode: tmp7 });
  const BaseChannelName = tmp2(11868).BaseChannelName;
  intl2 = tmp2(1115).intl;
  ({ mode: tmp7, IconComponent: id(5403).GroupIcon });
  const BaseChannelIcon = tmp2(11868).BaseChannelIcon;
  let tmp8Result = null;
  if (num > 0) {
    const obj9 = { style: null, textStyle: null, value: num };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    tmp8Result = tmp8(tmp2(1177).Badge, obj9);
  }
  return <tmp9 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(id(1115).t["9Oq93m"])} accessibilityState={{ selected }} mode={tmp7} name={null} icon={null} channelInfo={tmp8Result} />;
};
