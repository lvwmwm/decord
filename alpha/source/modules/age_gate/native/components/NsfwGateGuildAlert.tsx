// Module ID: 9099
// Function ID: 9100
// Name: NsfwGateGuildAlert
// Dependencies: [19, 2124, 1389, 6902, 1085, 21, 558, 576, 1264, 6903, 1126, 5303, 4763, 2127, 5299, 2]
// Exports: showNsfwGateGuildAlert

// Module 9099 (NsfwGateGuildAlert)
import Fragment from "Fragment" /* 21 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import useAlertStore from "useAlertStore" /* 5299 */;
import Constants2 from "Constants" /* 6902 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6903 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2124 */;
import UserStore from "UserStore" /* 1389 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
const NsfwGateSource = Constants2.NsfwGateSource;
({ AnalyticEvents: metroImportDefault, HelpdeskArticles: metroImportAll } = Constants);
const jsx = Fragment.jsx;
let c10 = "nsfw-guild-alert";
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function NsfwGateGuildAlert(guildId) {
  let first;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp17;
  let tmp7;
  let tmp8;
  const tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(8);
  guildId = guildId.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    cResult[0] = currentUser;
    first = currentUser;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function w() {
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
      if (first != null) {
        id = tmp4.id;
      }
      id1 = undefined;
      isMember = GuildMemberStore.isMember;
      if (first != null) {
        id1 = tmp4.id;
      }
      nsfwAllowed = undefined;
      if (first != null) {
        nsfwAllowed = tmp4.nsfwAllowed;
      }
      if (nsfwAllowed) {
        const obj2 = AgeRestrictedContentSettingsUtils;
        nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
      }
      track(GUILD_NSFW_GATE_VIEWED, obj);
    };
    const items = [guildId, first];
    cResult[1] = guildId;
    cResult[2] = fn;
    cResult[3] = items;
    tmp8 = items;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const effect = react.useEffect(tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.JqfHGt);
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(tmp(1126).t.EdXn1A);
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    tmp11 = stringResult1;
    tmp10 = stringResult;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const AlertActionButton = tmp(5303).AlertActionButton;
    const intl3 = tmp(1126).intl;
    const tmp16 = <AlertActionButton key="help-center" text={intl3.string(tmp(1126).t.wi6hPV)} onPress={function onPress() {
      const openURL = first(dependencyMap[12]).openURL;
      first(dependencyMap[12]);
      const obj = first(dependencyMap[13]);
      return openURL(obj.getArticleURL(constants.NSFW_GUILD_GUIDELINES));
    }} />;
    cResult[6] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[6];
  }
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [tmp14, ];
    const AlertModal = tmp(5303).AlertModal;
    const AlertActionButton2 = tmp(5303).AlertActionButton;
    const intl4 = tmp(1126).intl;
    items1[1] = <AlertActionButton2 key="dismiss" variant="secondary" text={intl4.string(tmp(1126).t.WAI6xu)} />;
    const tmp19 = <AlertModal title={tmp10} content={tmp11} actions={items1} />;
    cResult[7] = tmp19;
    tmp17 = tmp19;
  } else {
    tmp17 = cResult[7];
  }
  return tmp17;
}) : (function NsfwGateGuildAlert(guildId) {
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
  const AlertModal = guildId(5303).AlertModal;
  const intl = guildId(1126).intl;
  const intl2 = guildId(1126).intl;
  const AlertActionButton = guildId(5303).AlertActionButton;
  const intl3 = guildId(1126).intl;
  const items1 = [
    <AlertActionButton key="help-center" text={intl3.string(guildId(1126).t.wi6hPV)} onPress={function onPress() {
      const openURL = currentUser(dependencyMap[12]).openURL;
      currentUser(dependencyMap[12]);
      const obj = currentUser(dependencyMap[13]);
      return openURL(obj.getArticleURL(constants.NSFW_GUILD_GUIDELINES));
    }} />,

  ];
  const AlertActionButton2 = guildId(5303).AlertActionButton;
  const intl4 = guildId(1126).intl;
  items1[1] = <AlertActionButton2 key="dismiss" variant="secondary" text={intl4.string(guildId(1126).t.WAI6xu)} />;
  return <AlertModal title={intl.string(guildId(1126).t.JqfHGt)} content={intl2.string(guildId(1126).t.EdXn1A)} actions={items1} />;
});
let closure_11 = tmp3;
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildAlert.tsx");

export default tmp3;
export const NSFW_GUILD_ALERT_KEY = "nsfw-guild-alert";
export const showNsfwGateGuildAlert = function showNsfwGateGuildAlert(id, onCloseCallback) {
  const obj = useAlertStore;
  obj.openAlert(c10, <closure_11 guildId={arg0} />, onCloseCallback);
};
