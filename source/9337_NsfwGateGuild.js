// Module ID: 9337
// Function ID: 72958
// Name: NsfwGateGuild
// Dependencies: []
// Exports: default

// Module 9337 (NsfwGateGuild)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
const NsfwGateSource = arg1(dependencyMap[4]).NsfwGateSource;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticEvents: closure_9, HelpdeskArticles: closure_10 } = arg1(dependencyMap[5]));
const tmp3 = arg1(dependencyMap[5]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { -9223372036854775808: "r", 9223372036854775807: "overlayButton", 0: "r", -9223372036854775808: "LinkingTypes", backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.header = { person_pouting: -0.0014069081515246523, cv: -0.0001058445630777106 };
obj.description = { person_pouting: 52881784.83212474, cv: 0.0000000000000000000000000000000000000000000000000000000000000000000000011319598867188059 };
obj.image = { marginBottom: 16 };
let closure_13 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuild.tsx");

export default function NsfwGateGuild(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  const intl = arg1(dependencyMap[9]).intl;
  const intl2 = arg1(dependencyMap[9]).intl;
  const stringResult = intl.string(arg1(dependencyMap[9]).t.vAymlG);
  const intl3 = arg1(dependencyMap[9]).intl;
  let obj = {};
  let obj1 = importDefault(dependencyMap[10]);
  obj.helpURL = obj1.getArticleURL(constants.NSFW_GUILD_GUIDELINES);
  const stringResult1 = intl2.string(arg1(dependencyMap[9]).t.Crj6eC);
  const currentUser = currentUser.getCurrentUser();
  const importDefault = currentUser;
  const items = [guildId, currentUser];
  const effect = React.useEffect(() => {
    let obj = currentUser(closure_2[11]);
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
    obj.is_member = member.isMember(guildId, id1);
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    if (nsfwAllowed) {
      nsfwAllowed = guildId(closure_2[12]).getViewNsfwGuildsOrDefault();
      const obj3 = guildId(closure_2[12]);
    }
    obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
    obj.source = constants.MODAL;
    obj.track(constants2.GUILD_NSFW_GATE_VIEWED, obj);
  }, items);
  obj = { style: tmp.container };
  const items1 = [callback(importDefault(dependencyMap[13]), {}), , , , , ];
  obj = { source: importDefault(dependencyMap[14]), style: tmp.image };
  items1[1] = callback(closure_5, obj);
  obj1 = { style: tmp.header, children: stringResult };
  items1[2] = callback(arg1(dependencyMap[15]).Text, obj1);
  items1[3] = callback(arg1(dependencyMap[15]).Text, { style: tmp.description, children: stringResult1 });
  const formatResult = intl3.format(arg1(dependencyMap[9]).t.Z12LNW, obj);
  const obj2 = { style: tmp.description, children: stringResult1 };
  items1[4] = callback(arg1(dependencyMap[15]).Text, { style: tmp.description, children: intl3.format(arg1(dependencyMap[9]).t.Z12LNW, obj) });
  const obj4 = { onPress: guildId.onClose, size: "md" };
  const intl4 = arg1(dependencyMap[9]).intl;
  obj4.text = intl4.string(arg1(dependencyMap[9]).t.gRqiWV);
  items1[5] = callback(arg1(dependencyMap[16]).Button, obj4);
  obj.children = items1;
  return callback2(closure_4, obj);
};
