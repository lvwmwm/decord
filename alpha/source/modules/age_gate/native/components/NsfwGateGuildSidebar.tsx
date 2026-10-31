// Module ID: 18343
// Function ID: 18344
// Name: NsfwGateGuildSidebar
// Dependencies: [19, 17, 4926, 4885, 1383, 7388, 1072, 21, 5014, 575, 504, 1252, 7389, 18180, 1187, 6723, 1113, 2061, 2]
// Exports: default

// Module 18343 (NsfwGateGuildSidebar)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Constants2 from "Constants" /* 7388 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7389 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4926 */;
import GuildStore from "GuildStore" /* 4885 */;
import UserStore from "UserStore" /* 1383 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
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
let obj = { container: obj2, emptyStateContainer: { flex: 1 } };
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
    const obj4 = { titleStyle: stateFromStores(currentUser[15])(constants3.DISPLAY_SEMIBOLD, undefined, 20), bodyStyle: stateFromStores(currentUser[15])(constants3.PRIMARY_NORMAL, undefined, 14), containerStyle: tmp.emptyStateContainer, title: intl.string(tmp2(currentUser[16]).t.bAVpRR), body: format(NQuXf0, obj5) };
    const RefreshEmptyState = tmp2(tmp3[14]).RefreshEmptyState;
    intl = tmp2(tmp3[16]).intl;
    const intl2 = tmp2(tmp3[16]).intl;
    format = intl2.format;
    obj5 = { helpURL: obj6.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
    NQuXf0 = tmp2(tmp3[16]).t.NQuXf0;
    obj6 = stateFromStores(currentUser[17]);
    items3[1] = closure_12(RefreshEmptyState, obj4);
    tmp7 = closure_13(View, obj2);
  }
  return tmp7;
};
