// Module ID: 18218
// Function ID: 18219
// Name: GuildMemberDashChannelRow
// Dependencies: [19, 1072, 4865, 11027, 21, 5009, 575, 18219, 6910, 5043, 1100, 13887, 1114, 8653, 1188, 2]
// Exports: default

// Module 18218 (GuildMemberDashChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import router_utils from "router_utils" /* 1100 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5043 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6910 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11027 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles_mod from "createStyles" /* 5009 */;
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
obj3 = { backgroundColor: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND };
obj4 = { color: nativeDefault.colors.BADGE_SECONDARY_TEXT };
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
  let obj = id(18219);
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
  const ChannelModes = tmp2(13887).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  hasItem(13887);
  const intl = tmp2(1114).intl;
  ({ name: intl2.string(id(1114).t["9Oq93m"]), mode: tmp7 });
  const BaseChannelName = tmp2(13887).BaseChannelName;
  intl2 = tmp2(1114).intl;
  ({ mode: tmp7, IconComponent: id(8653).GroupIcon });
  const BaseChannelIcon = tmp2(13887).BaseChannelIcon;
  let tmp8Result = null;
  if (num > 0) {
    const obj9 = { style: null, textStyle: null, value: num };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    tmp8Result = tmp8(tmp2(1188).Badge, obj9);
  }
  return <tmp9 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(id(1114).t["9Oq93m"])} accessibilityState={{ selected }} mode={tmp7} name={null} icon={null} channelInfo={tmp8Result} />;
};
