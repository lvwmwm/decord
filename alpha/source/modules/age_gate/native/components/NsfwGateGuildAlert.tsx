// Module ID: 10743
// Function ID: 10744
// Name: NsfwGateGuildAlert
// Dependencies: [19, 5155, 1385, 10744, 1072, 21, 1252, 10745, 6211, 1113, 5949, 2185, 6207, 2]
// Exports: showNsfwGateGuildAlert

// Module 10743 (NsfwGateGuildAlert)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import useAlertStore from "useAlertStore" /* 6207 */;
import Constants2 from "Constants" /* 10744 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 10745 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5155 */;
import UserStore from "UserStore" /* 1385 */;
import Constants from "Constants" /* 1072 */;
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
    const AlertModal = guildId(6211).AlertModal;
    const intl = guildId(1113).intl;
    const intl2 = guildId(1113).intl;
    const AlertActionButton = guildId(6211).AlertActionButton;
    const intl3 = guildId(1113).intl;
    const items1 = [
      <AlertActionButton key="help-center" text={intl3.string(guildId(1113).t.wi6hPV)} onPress={function onPress() {
        const openURL = currentUser(dependencyMap[10]).openURL;
        currentUser(dependencyMap[10]);
        const obj = currentUser(dependencyMap[11]);
        return openURL(obj.getArticleURL(constants.NSFW_GUILD_GUIDELINES));
      }} />,

    ];
    const AlertActionButton2 = guildId(6211).AlertActionButton;
    const intl4 = guildId(1113).intl;
    items1[1] = <AlertActionButton2 key="dismiss" variant="secondary" text={intl4.string(guildId(1113).t.WAI6xu)} />;
    return <AlertModal title={intl.string(guildId(1113).t.JqfHGt)} content={intl2.string(guildId(1113).t.EdXn1A)} actions={items1} />;
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
