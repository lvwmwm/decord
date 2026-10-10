// Module ID: 6914
// Function ID: 6915
// Name: NsfwGateGuild
// Dependencies: [19, 17, 2125, 1390, 6915, 1085, 21, 5092, 587, 558, 576, 1126, 2128, 1265, 6916, 6656, 6156, 6918, 5088, 5379, 2]

// Module 6914 (NsfwGateGuild)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import FastImageDefault from "FastImage" /* 6156 */;
import BackgroundImageDefault from "BackgroundImage" /* 6656 */;
import Constants2 from "Constants" /* 6915 */;
import AgeRestrictedContentSettingsUtils from "AgeRestrictedContentSettingsUtils" /* 6916 */;
import AssetRegistryDefault from "AssetRegistry" /* 6918 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import UserStore from "UserStore" /* 1390 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let importDefault;

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
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function NsfwGateGuild(arg0) {
  let closure_1;
  let first;
  let guildId;
  let items1;
  let obj3;
  let onClose;
  let tmp13;
  let tmp16;
  let tmp17;
  let tmp19;
  let tmp23;
  let tmp28;
  let tmp31;
  let tmp32;
  let tmp36;
  let tmp38;
  let tmp7;
  let tmp9;
  let obj = guildId(576);
  const cResult = obj.c(25);
  ({ onClose, guildId } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(guildId(1126).t.vAymlG);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(guildId(1126).t.Crj6eC);
    cResult[1] = stringResult1;
    tmp7 = stringResult1;
  } else {
    tmp7 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl3 = tmp(1126).intl;
    const format = intl3.format;
    let obj2 = { helpURL: obj3.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
    const Z12LNW = tmp(1126).t.Z12LNW;
    obj3 = HelpdeskUtilsDefault;
    const formatResult = format(Z12LNW, obj2);
    cResult[2] = formatResult;
    tmp9 = formatResult;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const currentUser = UserStore.getCurrentUser();
    cResult[3] = currentUser;
    tmp13 = currentUser;
  } else {
    tmp13 = cResult[3];
  }
  importDefault = tmp13;
  if (cResult[4] !== guildId) {
    const fn = function w() {
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
      if (closure_1 != null) {
        id = tmp4.id;
      }
      id1 = undefined;
      isMember = GuildMemberStore.isMember;
      if (closure_1 != null) {
        id1 = tmp4.id;
      }
      nsfwAllowed = undefined;
      if (closure_1 != null) {
        nsfwAllowed = tmp4.nsfwAllowed;
      }
      if (nsfwAllowed) {
        const obj2 = AgeRestrictedContentSettingsUtils;
        nsfwAllowed = obj2.getViewNsfwGuildsOrDefault();
      }
      track(GUILD_NSFW_GATE_VIEWED, obj);
    };
    const items = [guildId, tmp13];
    cResult[4] = guildId;
    cResult[5] = fn;
    cResult[6] = items;
    tmp17 = items;
    tmp16 = fn;
  } else {
    tmp16 = cResult[5];
    tmp17 = cResult[6];
  }
  const effect = react.useEffect(tmp16, tmp17);
  const container = tmp4.container;
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp22 = closure_10(BackgroundImageDefault, {});
    cResult[7] = tmp22;
    tmp19 = tmp22;
  } else {
    tmp19 = cResult[7];
  }
  if (cResult[8] !== tmp4.image) {
    const obj4 = { source: AssetRegistryDefault, style: tmp4.image };
    const tmp26 = FastImageDefault;
    const tmp27 = closure_10(tmp26, obj4);
    cResult[8] = tmp4.image;
    cResult[9] = tmp27;
    tmp23 = tmp27;
  } else {
    tmp23 = cResult[9];
  }
  if (cResult[10] !== tmp4.header) {
    const obj5 = { style: tmp4.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp30 = closure_10(guildId(5088).Heading, obj5);
    cResult[10] = tmp4.header;
    cResult[11] = tmp30;
    tmp28 = tmp30;
  } else {
    tmp28 = cResult[11];
  }
  if (cResult[12] !== tmp4.description) {
    const obj6 = { style: tmp4.description, variant: "text-md/normal", color: "text-default", children: tmp7 };
    const tmp34 = closure_10(guildId(5088).Text, obj6);
    const obj7 = { style: tmp4.description, variant: "text-md/normal", color: "text-default", children: tmp9 };
    const tmp35 = closure_10(guildId(5088).Text, obj7);
    cResult[12] = tmp4.description;
    cResult[13] = tmp34;
    cResult[14] = tmp35;
    tmp32 = tmp35;
    tmp31 = tmp34;
  } else {
    tmp31 = cResult[13];
    tmp32 = cResult[14];
  }
  if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
    const intl4 = tmp(1126).intl;
    const stringResult2 = intl4.string(guildId(1126).t.gRqiWV);
    cResult[15] = stringResult2;
    tmp36 = stringResult2;
  } else {
    tmp36 = cResult[15];
  }
  if (cResult[16] !== onClose) {
    const obj8 = { onPress: onClose, size: "md", text: tmp36 };
    const tmp40 = closure_10(guildId(5379).Button, obj8);
    cResult[16] = onClose;
    cResult[17] = tmp40;
    tmp38 = tmp40;
  } else {
    tmp38 = cResult[17];
  }
  if (cResult[18] === tmp4.container) {
    if (cResult[19] === tmp28) {
      if (cResult[20] === tmp31) {
        if (cResult[21] === tmp32) {
          if (cResult[22] === tmp38) {
            let tmp41;
            if (cResult[23] === tmp23) {
              tmp41 = cResult[24];
            }
            return tmp41;
          }
        }
      }
    }
  }
  const obj9 = { style: container, children: items1 };
  items1 = [tmp19, tmp23, tmp28, tmp31, tmp32, tmp38];
  const tmp42 = closure_11(View, obj9);
  cResult[18] = tmp4.container;
  cResult[19] = tmp28;
  cResult[20] = tmp31;
  cResult[21] = tmp32;
  cResult[22] = tmp38;
  cResult[23] = tmp23;
  cResult[24] = tmp42;
  tmp41 = tmp42;
}) : (function NsfwGateGuild(guildId) {
  let intl4;
  let items1;
  let obj2;
  guildId = guildId.guildId;
  let currentUser;
  const onClose = guildId.onClose;
  const tmp = closure_12();
  const intl = guildId(1126).intl;
  const stringResult = intl.string(guildId(1126).t.vAymlG);
  const intl2 = guildId(1126).intl;
  const stringResult1 = intl2.string(guildId(1126).t.Crj6eC);
  const intl3 = guildId(1126).intl;
  const format = intl3.format;
  let obj = { helpURL: obj2.getArticleURL(constants2.NSFW_GUILD_GUIDELINES) };
  const Z12LNW = guildId(1126).t.Z12LNW;
  obj2 = currentUser(2128);
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
  items1 = [closure_10(currentUser(6656), {}), , , , , ];
  const obj4 = { source: currentUser(6918), style: tmp.image };
  const tmp7 = currentUser(6156);
  items1[1] = closure_10(tmp7, obj4);
  const obj5 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  items1[2] = closure_10(guildId(5088).Heading, obj5);
  const obj6 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 };
  items1[3] = closure_10(guildId(5088).Text, obj6);
  const obj7 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: formatResult };
  items1[4] = closure_10(guildId(5088).Text, obj7);
  const obj8 = { onPress: onClose, size: "md", text: intl4.string(guildId(1126).t.gRqiWV) };
  const Button = guildId(5379).Button;
  intl4 = guildId(1126).intl;
  items1[5] = closure_10(Button, obj8);
  return closure_11(View, obj3);
});
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default tmp4;
