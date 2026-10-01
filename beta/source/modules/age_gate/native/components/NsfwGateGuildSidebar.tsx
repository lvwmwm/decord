// Module ID: 15915
// Function ID: 15916
// Name: NsfwGateGuildSidebar
// Dependencies: [19, 17, 2108, 2067, 1372, 9233, 1074, 21, 4836, 576, 504, 1241, 8597, 15767, 1177, 5836, 15916, 1115, 2111, 2]
// Exports: default

// Module 15915 (NsfwGateGuildSidebar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 8597 */;
import Constants2 from "Constants" /* 9233 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

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
let obj = { container: obj2, emptyStateContainer: { flex: 1 }, emptyStateImageContainer: { marginBottom: 16 } };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.PANEL_BG };
let closure_14 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default function NsfwGateGuildSidebar(guildId) {
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
  let obj = guildId(currentUser[10]);
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
    items3 = [closure_12(stateFromStores(tmp3[13]), obj3), ];
    const obj4 = { imageStyle: tmp.emptyStateImageContainer, titleStyle: stateFromStores(currentUser[15])(constants3.DISPLAY_EXTRABOLD, undefined, 16), containerStyle: tmp.emptyStateContainer, source: stateFromStores(currentUser[16]), title: intl.string(tmp2(currentUser[17]).t.bAVpRR), body: format(NQuXf0, obj5) };
    const RefreshEmptyState = tmp2(tmp3[14]).RefreshEmptyState;
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
};
