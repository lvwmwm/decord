// Module ID: 17638
// Function ID: 17639
// Name: GuildMemberDashChannelRow
// Dependencies: [19, 1087, 4830, 12059, 21, 4971, 587, 558, 576, 17639, 6843, 5005, 1114, 13269, 1128, 8560, 1202, 2]

// Module 17638 (GuildMemberDashChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1114 */;
import ChannelConstants from "ChannelConstants" /* 4830 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 5005 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6843 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 12059 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1087 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault, tmp2, tmp3, tmp6, transitionToResult;

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
obj2 = { marginVertical: CHANNEL_MARGIN_VERTICAL, marginHorizontal: 8, borderRadius: nativeDefault.radii.md };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BADGE_SECONDARY_BACKGROUND };
obj4 = { color: nativeDefault.colors.BADGE_SECONDARY_TEXT };
let closure_8 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildMemberDashChannelRow(arg0) {
  let closure_1;
  let guild;
  let id;
  let selected;
  let tmp5;
  let tmp = id;
  let obj = id(576);
  const cResult = obj.c(30);
  ({ guild, selected } = arg0);
  const tmp4 = closure_8();
  id = guild.id;
  const obj2 = id(17639);
  let num = obj2.useSubmittedGuildJoinRequestTotal({ guildId: id });
  if (num == null) {
    num = 0;
  }
  if (cResult[0] !== guild.features) {
    const features = guild.features;
    const hasItem = features.has(constants.MEMBER_VERIFICATION_MANUAL_APPROVAL);
    cResult[0] = guild.features;
    cResult[1] = hasItem;
    tmp5 = hasItem;
  } else {
    tmp5 = cResult[1];
  }
  importDefault = tmp5;
  if (cResult[2] === id) {
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === guild.features) {
      if (cResult[6] === id) {
        let tmp9;
        let tmp19;
        if (cResult[7] === tmp5) {
          tmp9 = cResult[8];
        }
        const effect = react.useEffect(tmp8, tmp9);
        if (cResult[9] !== id) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          cResult[9] = id;
          cResult[10] = I;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        const ChannelModes = tmp(13269).ChannelModes;
        const tmp13 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
        const _Symbol = Symbol;
        const container = tmp4.container;
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          cResult[11] = obj3.string(tmp(1128).t["9Oq93m"]);
          const stringResult = obj3.string(tmp(1128).t["9Oq93m"]);
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        if (cResult[12] !== selected) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          tmp18[0] = selected;
          cResult[12] = selected;
          cResult[13] = tmp18;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          const stringResult1 = obj4.string(tmp(1128).t["9Oq93m"]);
          cResult[14] = stringResult1;
          tmp19 = stringResult1;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        if (cResult[15] !== tmp13) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          const tmp23 = jsx(tmp(13269).BaseChannelName, { name: tmp19, mode: tmp13 });
          const BaseChannelIcon = tmp(13269).BaseChannelIcon;
          const tmp24 = <BaseChannelIcon mode={tmp13} IconComponent={tmp(8560).GroupIcon} />;
          cResult[15] = tmp13;
          cResult[16] = tmp24;
          cResult[17] = tmp23;
        } else {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        if (cResult[18] === num) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
        }
        let tmp26 = null;
        if (num > 0) {
          class I {
            constructor() {
              obj = closure_0(closure_2[12]);
              transitionToResult = obj.transitionTo(Routes.CHANNEL(id, StaticChannelRoute.MEMBER_SAFETY));
              return;
            }
          }
          ({ badge: obj7.style, badgeText: obj7.textStyle } = tmp4);
          tmp26 = jsx(tmp(1202).Badge, { style: null, textStyle: null, value: num });
        }
        class T {
          constructor() {
            tmp = closure_1;
            if (tmp) {
              tmp2 = closure_1;
              tmp3 = closure_2;
              tmp4 = closure_1(closure_2[10]);
              obj = { guildId: null, status: null };
              tmp5 = id;
              obj.guildId = id;
              tmp6 = closure_0;
              fetchGuildJoinRequests = tmp4.fetchGuildJoinRequests;
              obj.status = closure_0(closure_2[11]).GuildJoinRequestApplicationStatuses.SUBMITTED;
              guildJoinRequests = fetchGuildJoinRequests(obj);
            }
            return;
          }
        }
        cResult[19] = tmp4.badge;
        cResult[20] = tmp4.badgeText;
        cResult[21] = tmp26;
      }
    }
    const items = [guild.features, id, tmp5];
    cResult[5] = guild.features;
    cResult[6] = id;
    cResult[7] = tmp5;
    cResult[8] = items;
    tmp9 = items;
  }
  class T {
    constructor() {
      tmp = closure_1;
      if (tmp) {
        tmp2 = closure_1;
        tmp3 = closure_2;
        tmp4 = closure_1(closure_2[10]);
        obj = { guildId: null, status: null };
        tmp5 = id;
        obj.guildId = id;
        tmp6 = closure_0;
        fetchGuildJoinRequests = tmp4.fetchGuildJoinRequests;
        obj.status = closure_0(closure_2[11]).GuildJoinRequestApplicationStatuses.SUBMITTED;
        guildJoinRequests = fetchGuildJoinRequests(obj);
      }
      return;
    }
  }
  cResult[2] = id;
  cResult[3] = tmp5;
  cResult[4] = T;
  tmp8 = T;
}) : (function GuildMemberDashChannelRow(arg0) {
  let guild;
  let intl2;
  let selected;
  ({ guild, selected } = arg0);
  let hasItem;
  let tmp = closure_8();
  const id = guild.id;
  let obj = id(17639);
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
  const ChannelModes = tmp2(13269).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  hasItem(13269);
  const intl = tmp2(1128).intl;
  ({ name: intl2.string(id(1128).t["9Oq93m"]), mode: tmp7 });
  const BaseChannelName = tmp2(13269).BaseChannelName;
  intl2 = tmp2(1128).intl;
  ({ mode: tmp7, IconComponent: id(8560).GroupIcon });
  const BaseChannelIcon = tmp2(13269).BaseChannelIcon;
  let tmp8Result = null;
  if (num > 0) {
    const obj9 = { style: null, textStyle: null, value: num };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    tmp8Result = tmp8(tmp2(1202).Badge, obj9);
  }
  return <tmp9 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(id(1128).t["9Oq93m"])} accessibilityState={{ selected }} mode={tmp7} name={null} icon={null} channelInfo={tmp8Result} />;
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default tmp4;
