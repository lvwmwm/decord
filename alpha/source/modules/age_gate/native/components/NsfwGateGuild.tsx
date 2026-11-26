// Module ID: 7568
// Function ID: 7569
// Name: NsfwGateGuild
// Dependencies: [19, 17, 4955, 1387, 7569, 1071, 21, 5043, 575, 1112, 2188, 1256, 7570, 7042, 5730, 7572, 5634, 5641, 2]
// Exports: default

// Module 7568 (NsfwGateGuild)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import Constants2 from "Constants" /* 7569 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 7570 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 4955 */;
import UserStore from "UserStore" /* 1387 */;
import Constants from "Constants" /* 1071 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5043 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let obj2;
let unpackModuleId;
const View = react_native.View;
const NsfwGateSource = Constants2.NsfwGateSource;
({ AnalyticEvents: metroImportAll, HelpdeskArticles: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = { container: obj2, header: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 16 }, image: { marginBottom: 16 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  let intl4;
  let items1;
  let obj2;
  guildId = guildId.guildId;
  let currentUser;
  const onClose = guildId.onClose;
  const tmp = closure_12();
  const intl = guildId(1112).intl;
  const stringResult = intl.string(guildId(1112).t.vAymlG);
  const intl2 = guildId(1112).intl;
  const stringResult1 = intl2.string(guildId(1112).t.Crj6eC);
  const intl3 = guildId(1112).intl;
  const format = intl3.format;
  let obj = { helpURL: obj2.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
  const Z12LNW = guildId(1112).t.Z12LNW;
  obj2 = currentUser(2188);
  const formatResult = format(Z12LNW, obj);
  currentUser = UserStore.getCurrentUser();
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
    const GUILD_NSFW_GATE_VIEWED = metroImportAll.GUILD_NSFW_GATE_VIEWED;
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
  const obj3 = { style: tmp.container, children: items1 };
  items1 = [closure_10(currentUser(7042), {}), , , , , ];
  const obj4 = { source: currentUser(7572), style: tmp.image };
  const tmp7 = currentUser(5730);
  items1[1] = closure_10(tmp7, obj4);
  const obj5 = { style: tmp.header, variant: "heading-xl/semibold", color: "mobile-text-heading-primary", children: stringResult };
  items1[2] = closure_10(guildId(5634).Heading, obj5);
  const obj6 = { style: tmp.description, variant: "body-md/normal", color: "text-default", children: stringResult1 };
  items1[3] = closure_10(guildId(5634).Text, obj6);
  const obj7 = { style: tmp.description, variant: "body-md/normal", color: "text-default", children: formatResult };
  items1[4] = closure_10(guildId(5634).Text, obj7);
  const obj8 = { onPress: onClose, size: "md", text: intl4.string(guildId(1112).t.gRqiWV) };
  const Button = guildId(5641).Button;
  intl4 = guildId(1112).intl;
  items1[5] = closure_10(Button, obj8);
  return closure_11(View, obj3);
};
