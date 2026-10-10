// Module ID: 16712
// Function ID: 16713
// Name: NsfwGateGuildSidebar
// Dependencies: [19, 17, 2125, 2087, 1390, 6915, 1085, 21, 5092, 587, 558, 576, 504, 1265, 6916, 16549, 5906, 1126, 2128, 1200, 2]

// Module 16712 (NsfwGateGuildSidebar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import Constants2 from "Constants" /* 6915 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6916 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildStore from "GuildStore" /* 2087 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let map1;
let obj2;
let unpackModuleId;
const View = react_native.View;
const NsfwGateSource = Constants2.NsfwGateSource;
({ AnalyticEvents: c9, HelpdeskArticles: c10, Fonts: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { container: obj2, emptyStateContainer: { flex: 1 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
let closure_14 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function NsfwGateGuildSidebar(arg0) {
  let first;
  let guildId;
  let items1;
  let obj5;
  let style;
  let tmp7;
  let tmp9;
  let user;
  const tmp = guildId;
  let tmp2 = dependencyMap;
  let obj = guildId(576);
  const cResult = obj.c(24);
  ({ style, guildId } = arg0);
  const tmp4 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function b() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    cResult[3] = currentUser;
    tmp9 = currentUser;
  } else {
    tmp9 = cResult[3];
  }
  dependencyMap = tmp9;
  if (cResult[4] === guildId) {
    let tmp12;
    let tmp13;
    if (cResult[5] === stateFromStores) {
      tmp12 = cResult[6];
      tmp13 = cResult[7];
    }
    const effect = react.useEffect(tmp12, tmp13);
    if (null == stateFromStores) {
      return null;
    } else {
      if (cResult[8] === style) {
        let tmp17;
        let tmp18;
        let tmp23;
        let tmp22;
        let tmp29;
        let tmp28;
        if (cResult[9] === tmp4.container) {
          tmp17 = cResult[10];
        }
        if (cResult[11] !== stateFromStores) {
          let obj2 = { guild: stateFromStores, showExtraButtons: false };
          const tmp21 = closure_12(stateFromStores(16549), obj2);
          cResult[11] = stateFromStores;
          cResult[12] = tmp21;
          tmp18 = tmp21;
        } else {
          tmp18 = cResult[12];
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = stateFromStores(5906)(constants3.DISPLAY_SEMIBOLD, undefined, 20);
          const tmp27 = stateFromStores(5906)(constants3.PRIMARY_NORMAL, undefined, 14);
          cResult[13] = tmp26;
          cResult[14] = tmp27;
          tmp23 = tmp27;
          tmp22 = tmp26;
        } else {
          tmp22 = cResult[13];
          tmp23 = cResult[14];
        }
        const _Symbol2 = Symbol;
        const emptyStateContainer = tmp4.emptyStateContainer;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp(1126).t.bAVpRR);
          const intl2 = tmp(1126).intl;
          const format = intl2.format;
          const obj3 = { helpURL: obj5.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
          const NQuXf0 = tmp(1126).t.NQuXf0;
          obj5 = stateFromStores(2128);
          const formatResult = format(NQuXf0, obj3);
          cResult[15] = stringResult;
          cResult[16] = formatResult;
          tmp29 = formatResult;
          tmp28 = stringResult;
        } else {
          tmp28 = cResult[15];
          tmp29 = cResult[16];
        }
        if (cResult[17] === tmp4.emptyStateContainer) {
          let tmp34;
          if (cResult[18] === tmp29) {
            tmp34 = cResult[19];
          }
          if (cResult[20] === tmp34) {
            if (cResult[21] === tmp17) {
              let tmp37;
              if (cResult[22] === tmp18) {
                tmp37 = cResult[23];
              }
              return tmp37;
            }
          }
          const obj4 = { style: tmp17, children: items1 };
          items1 = [tmp18, tmp34];
          const tmp40 = closure_13(View, obj4);
          cResult[20] = tmp34;
          cResult[21] = tmp17;
          cResult[22] = tmp18;
          cResult[23] = tmp40;
          tmp37 = tmp40;
        }
        const obj6 = { titleStyle: tmp22, bodyStyle: tmp23, containerStyle: emptyStateContainer, title: tmp28, body: tmp29 };
        const tmp36 = closure_12(tmp(1200).RefreshEmptyState, obj6);
        cResult[17] = tmp4.emptyStateContainer;
        cResult[18] = tmp29;
        cResult[19] = tmp36;
        tmp34 = tmp36;
      }
      const items2 = [tmp4.container, style];
      cResult[8] = style;
      cResult[9] = tmp4.container;
      cResult[10] = items2;
      tmp17 = items2;
    }
  }
  const fn2 = function v() {
    let nsfwAllowed;
    const tmp2 = null != user && null != stateFromStores;
    if (tmp2) {
      const obj = { guild_id: guildId, user_id: user.id, is_member: GuildMemberStore.isMember(guildId, user.id), is_user_opted_in_to_age_restricted_servers: nsfwAllowed, source: NsfwGateSource.GUILD_SIDEBAR };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_NSFW_GATE_VIEWED = constants.GUILD_NSFW_GATE_VIEWED;
      AnalyticsUtilsDefault;
      nsfwAllowed = tmp.nsfwAllowed;
      if (nsfwAllowed) {
        const obj2 = AgeRestrictedContentSettingsUtils;
        nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
      }
      track(GUILD_NSFW_GATE_VIEWED, obj);
    }
  };
  const items3 = [guildId, stateFromStores, tmp9];
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items3;
  tmp13 = items3;
  tmp12 = fn2;
}) : (function NsfwGateGuildSidebar(guildId) {
  let NQuXf0;
  let format;
  let intl;
  let items2;
  let items3;
  let obj5;
  let obj6;
  guildId = guildId.guildId;
  let currentUser;
  const style = guildId.style;
  const tmp = closure_14();
  let tmp2 = guildId;
  let obj = guildId(currentUser[12]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  currentUser = UserStore.getCurrentUser();
  const items1 = [guildId, stateFromStores, currentUser];
  const effect = react.useEffect(() => {
    let nsfwAllowed;
    const tmp2 = null != currentUser && null != stateFromStores;
    if (tmp2) {
      const obj = { guild_id: guildId, user_id: currentUser.id, is_member: GuildMemberStore.isMember(guildId, currentUser.id), is_user_opted_in_to_age_restricted_servers: nsfwAllowed, source: NsfwGateSource.GUILD_SIDEBAR };
      const track = AnalyticsUtilsDefault.track;
      const GUILD_NSFW_GATE_VIEWED = constants.GUILD_NSFW_GATE_VIEWED;
      AnalyticsUtilsDefault;
      nsfwAllowed = tmp.nsfwAllowed;
      if (nsfwAllowed) {
        const obj2 = AgeRestrictedContentSettingsUtils;
        nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
      }
      track(GUILD_NSFW_GATE_VIEWED, obj);
    }
  }, items1);
  let tmp7 = null;
  if (null != stateFromStores) {
    let obj2 = { style: items2, children: items3 };
    items2 = [tmp.container, style];
    const obj3 = { guild: stateFromStores, showExtraButtons: false };
    items3 = [closure_12(stateFromStores(tmp3[15]), obj3), ];
    const obj4 = { titleStyle: stateFromStores(currentUser[16])(constants3.DISPLAY_SEMIBOLD, undefined, 20), bodyStyle: stateFromStores(currentUser[16])(constants3.PRIMARY_NORMAL, undefined, 14), containerStyle: tmp.emptyStateContainer, title: intl.string(tmp2(currentUser[17]).t.bAVpRR), body: format(NQuXf0, obj5) };
    const RefreshEmptyState = tmp2(tmp3[19]).RefreshEmptyState;
    intl = tmp2(tmp3[17]).intl;
    const intl2 = tmp2(tmp3[17]).intl;
    format = intl2.format;
    obj5 = { helpURL: obj6.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
    NQuXf0 = tmp2(tmp3[17]).t.NQuXf0;
    obj6 = stateFromStores(currentUser[18]);
    items3[1] = closure_12(RefreshEmptyState, obj4);
    tmp7 = closure_13(View, obj2);
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default tmp4;
