// Module ID: 9232
// Function ID: 9233
// Name: NsfwGateGuild
// Dependencies: [19, 17, 2108, 1372, 9233, 1074, 21, 4836, 576, 1115, 2111, 1241, 8597, 6394, 9234, 4832, 5281, 2]
// Exports: default

// Module 9232 (NsfwGateGuild)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 8597 */;
import Constants2 from "Constants" /* 9233 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import UserStore from "UserStore" /* 1372 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let obj2;
let unpackModuleId;
({ View: closure_4, Image: hasOwnProperty } = react_native);
const NsfwGateSource = Constants2.NsfwGateSource;
({ AnalyticEvents: c9, HelpdeskArticles: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { container: obj2, header: { textAlign: "center", marginBottom: 8 }, description: { textAlign: "center", marginBottom: 16 }, image: { marginBottom: 16 } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_13 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  let intl4;
  let items1;
  let obj2;
  guildId = guildId.guildId;
  let currentUser;
  const onClose = guildId.onClose;
  const tmp = closure_13();
  const intl = guildId(1115).intl;
  const stringResult = intl.string(guildId(1115).t.vAymlG);
  const intl2 = guildId(1115).intl;
  const stringResult1 = intl2.string(guildId(1115).t.Crj6eC);
  const intl3 = guildId(1115).intl;
  const format = intl3.format;
  let obj = { helpURL: obj2.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
  const Z12LNW = guildId(1115).t.Z12LNW;
  obj2 = currentUser(2111);
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
    const GUILD_NSFW_GATE_VIEWED = constants.GUILD_NSFW_GATE_VIEWED;
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
  items1 = [closure_11(currentUser(6394), {}), , , , , ];
  const obj4 = { source: currentUser(9234), style: tmp.image };
  items1[1] = closure_11(closure_5, obj4);
  const obj5 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  items1[2] = closure_11(guildId(4832).Text, obj5);
  const obj6 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 };
  items1[3] = closure_11(guildId(4832).Text, obj6);
  const obj7 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: formatResult };
  items1[4] = closure_11(guildId(4832).Text, obj7);
  const obj8 = { onPress: onClose, size: "md", text: intl4.string(guildId(1115).t.gRqiWV) };
  const Button = guildId(5281).Button;
  intl4 = guildId(1115).intl;
  items1[5] = closure_11(Button, obj8);
  return closure_12(closure_4, obj3);
};
