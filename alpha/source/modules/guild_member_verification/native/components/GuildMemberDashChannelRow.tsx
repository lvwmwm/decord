// Module ID: 16438
// Function ID: 16439
// Name: GuildMemberDashChannelRow
// Dependencies: [19, 1085, 2070, 11776, 21, 5090, 587, 558, 576, 16439, 6121, 4902, 1112, 12104, 1126, 8192, 1200, 2]

// Module 16438 (GuildMemberDashChannelRow)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import ChannelConstants from "ChannelConstants" /* 2070 */;
import MemberVerificationTypes from "MemberVerificationTypes" /* 4902 */;
import GuildJoinRequestActionCreatorsDefault from "GuildJoinRequestActionCreators" /* 6121 */;
import RedesignChannelListConstants from "RedesignChannelListConstants" /* 11776 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles_mod from "createStyles" /* 5090 */;
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
obj3 = { backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_DEFAULT };
obj4 = { color: nativeDefault.colors.BADGE_TEXT_DEFAULT };
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
  const obj2 = id(16439);
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
        const ChannelModes = tmp(12104).ChannelModes;
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
          cResult[11] = obj3.string(tmp(1126).t["9Oq93m"]);
          const stringResult = obj3.string(tmp(1126).t["9Oq93m"]);
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
          const stringResult1 = obj4.string(tmp(1126).t["9Oq93m"]);
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
          const tmp23 = jsx(tmp(12104).BaseChannelName, { name: tmp19, mode: tmp13 });
          const BaseChannelIcon = tmp(12104).BaseChannelIcon;
          const tmp24 = <BaseChannelIcon mode={tmp13} IconComponent={tmp(8192).GroupIcon} />;
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
          tmp26 = jsx(tmp(1200).Badge, { style: null, textStyle: null, value: num });
        }
        class R {
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
  class R {
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
  cResult[4] = R;
  tmp8 = R;
}) : (function GuildMemberDashChannelRow(arg0) {
  let guild;
  let intl2;
  let selected;
  ({ guild, selected } = arg0);
  let hasItem;
  let tmp = closure_8();
  const id = guild.id;
  let obj = id(16439);
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
  const ChannelModes = tmp2(12104).ChannelModes;
  const tmp7 = selected ? ChannelModes.SELECTED : ChannelModes.DEFAULT;
  hasItem(12104);
  const intl = tmp2(1126).intl;
  ({ name: intl2.string(id(1126).t["9Oq93m"]), mode: tmp7 });
  const BaseChannelName = tmp2(12104).BaseChannelName;
  intl2 = tmp2(1126).intl;
  ({ mode: tmp7, IconComponent: id(8192).GroupIcon });
  const BaseChannelIcon = tmp2(12104).BaseChannelIcon;
  let tmp8Result = null;
  if (num > 0) {
    const obj9 = { style: null, textStyle: null, value: num };
    ({ badge: obj5.style, badgeText: obj5.textStyle } = tmp);
    tmp8Result = tmp8(tmp2(1200).Badge, obj9);
  }
  return <tmp9 onPress={callback} style={tmp.container} accessible accessibilityLabel={intl.string(id(1126).t["9Oq93m"])} accessibilityState={{ selected }} mode={tmp7} name={null} icon={null} channelInfo={tmp8Result} />;
});
const result = size.fileFinishedImporting("modules/guild_member_verification/native/components/GuildMemberDashChannelRow.tsx");

export default tmp4;
