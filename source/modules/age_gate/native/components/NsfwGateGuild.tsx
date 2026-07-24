// Module ID: 9385
// Function ID: 73246
// Name: NsfwGateGuild
// Dependencies: [31, 27, 1917, 1849, 9386, 653, 33, 4130, 689, 1212, 1920, 675, 8013, 9258, 9387, 4126, 4543, 2]
// Exports: default

// Module 9385 (NsfwGateGuild)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import { NsfwGateSource } from "NsfwGateSource";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_9;
const require = arg1;
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ AnalyticEvents: closure_9, HelpdeskArticles: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.header = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.description = { textAlign: "center", marginBottom: 16 };
_createForOfIteratorHelperLoose.image = { marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  const intl = guildId(1212).intl;
  const intl2 = guildId(1212).intl;
  const stringResult = intl.string(guildId(1212).t.vAymlG);
  const intl3 = guildId(1212).intl;
  let obj = {};
  let obj1 = currentUser(1920);
  obj.helpURL = obj1.getArticleURL(constants.NSFW_GUILD_GUIDELINES);
  const stringResult1 = intl2.string(guildId(1212).t.Crj6eC);
  currentUser = currentUser.getCurrentUser();
  const items = [guildId, currentUser];
  const effect = React.useEffect(() => {
    let obj = currentUser(outer1_2[11]);
    obj = { guild_id: guildId };
    let id;
    if (null != currentUser) {
      id = currentUser.id;
    }
    obj.user_id = id;
    let id1;
    if (null != currentUser) {
      id1 = currentUser.id;
    }
    obj.is_member = outer1_6.isMember(guildId, id1);
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (nsfwAllowed) {
      nsfwAllowed = guildId(outer1_2[12]).getViewNsfwGuildsOrDefault();
      const obj3 = guildId(outer1_2[12]);
    }
    obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
    obj.source = outer1_8.MODAL;
    obj.track(outer1_9.GUILD_NSFW_GATE_VIEWED, obj);
  }, items);
  obj = { style: tmp.container };
  const items1 = [callback(currentUser(9258), {}), , , , , ];
  obj = { source: currentUser(9387), style: tmp.image };
  items1[1] = callback(closure_5, obj);
  obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stringResult };
  items1[2] = callback(guildId(4126).Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: stringResult1 };
  items1[3] = callback(guildId(4126).Text, obj2);
  let obj3 = { style: tmp.description, variant: "text-md/normal", color: "text-default", children: intl3.format(guildId(1212).t.Z12LNW, obj) };
  items1[4] = callback(guildId(4126).Text, obj3);
  const obj4 = { onPress: guildId.onClose, size: "md" };
  const intl4 = guildId(1212).intl;
  obj4.text = intl4.string(guildId(1212).t.gRqiWV);
  items1[5] = callback(guildId(4543).Button, obj4);
  obj.children = items1;
  return callback2(closure_4, obj);
};
