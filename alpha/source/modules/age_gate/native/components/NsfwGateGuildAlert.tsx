// Module ID: 10402
// Function ID: 10403
// Name: NsfwGateGuildAlert
// Dependencies: [19, 4706, 1386, 10403, 1071, 21, 1255, 10322, 5747, 1112, 5473, 2186, 5743, 2]
// Exports: showNsfwGateGuildAlert

// Module 10402 (NsfwGateGuildAlert)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import useAlertStore from "useAlertStore" /* 5743 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 10322 */;
import Constants2 from "Constants" /* 10403 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4706 */;
import UserStore from "UserStore" /* 1386 */;
import Constants from "Constants" /* 1071 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
class NsfwGateGuildAlert {
  constructor(guildId) {
    guildId = guildId.guildId;
    const currentUser = UserStore.getCurrentUser();
    const items = [guildId, currentUser];
    const effect = react.useEffect(() => {
      let id;
      let id1;
      let isMember;
      let nsfwAllowed;
      let tmp3;
      const obj = { guild_id: guildId, user_id: id, is_member: isMember(tmp3, id1), is_user_opted_in_to_age_restricted_servers: nsfwAllowed, source: NsfwGateSource.MODAL };
      id = undefined;
      const track = AnalyticsUtilsDefault.track;
      const GUILD_NSFW_GATE_VIEWED = metroImportDefault.GUILD_NSFW_GATE_VIEWED;
      AnalyticsUtilsDefault;
      tmp3 = guildId;
      if (currentUser != null) {
        id = tmp4.id;
      }
      id1 = undefined;
      isMember = GuildMemberStore.isMember;
      if (currentUser != null) {
        id1 = tmp4.id;
      }
      nsfwAllowed = undefined;
      if (currentUser != null) {
        nsfwAllowed = tmp4.nsfwAllowed;
      }
      if (nsfwAllowed) {
        const obj2 = AgeRestrictedContentSettingsUtils;
        nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
      }
      track(GUILD_NSFW_GATE_VIEWED, obj);
    }, items);
    const AlertModal = guildId(5747).AlertModal;
    const intl = guildId(1112).intl;
    const intl2 = guildId(1112).intl;
    const AlertActionButton = guildId(5747).AlertActionButton;
    const intl3 = guildId(1112).intl;
    const items1 = [
      <AlertActionButton key="help-center" text={intl3.string(guildId(1112).t.wi6hPV)} onPress={function onPress() {
        const openURL = currentUser(dependencyMap[10]).openURL;
        currentUser(dependencyMap[10]);
        const obj = currentUser(dependencyMap[11]);
        return openURL(obj.getArticleURL(constants.NSFW_GUILD_GUIDELINES));
      }} />,

    ];
    const AlertActionButton2 = guildId(5747).AlertActionButton;
    const intl4 = guildId(1112).intl;
    items1[1] = <AlertActionButton2 key="dismiss" variant="secondary" text={intl4.string(guildId(1112).t.WAI6xu)} />;
    return <AlertModal title={intl.string(guildId(1112).t.JqfHGt)} content={intl2.string(guildId(1112).t.EdXn1A)} actions={items1} />;
  }
}
const NsfwGateSource = Constants2.NsfwGateSource;
({ AnalyticEvents: metroImportDefault, HelpdeskArticles: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let c10 = "nsfw-guild-alert";
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildAlert.tsx");

export default NsfwGateGuildAlert;
export const NSFW_GUILD_ALERT_KEY = "nsfw-guild-alert";
export function showNsfwGateGuildAlert(id, onCloseCallback) {
  const obj = useAlertStore;
  obj.openAlert(c10, <NsfwGateGuildAlert guildId={arg0} />, onCloseCallback);
}
