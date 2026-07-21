// Module ID: 14971
// Function ID: 112706
// Name: NsfwGateGuildSidebar
// Dependencies: []
// Exports: default

// Module 14971 (NsfwGateGuildSidebar)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const NsfwGateSource = arg1(dependencyMap[5]).NsfwGateSource;
({ AnalyticEvents: closure_9, HelpdeskArticles: closure_10, Fonts: closure_11 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[9]).colors.PANEL_BG };
obj.container = obj;
obj.emptyStateContainer = { flex: 1 };
obj.emptyStateImageContainer = { marginBottom: 16 };
let closure_14 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default function NsfwGateGuildSidebar(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(guildId));
  const importDefault = stateFromStores;
  const currentUser = currentUser.getCurrentUser();
  const dependencyMap = currentUser;
  const items1 = [guildId, stateFromStores, currentUser];
  const effect = React.useEffect(() => {
    let tmp = null != currentUser;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = stateFromStores(currentUser[11]);
      obj = { guild_id: guildId, user_id: currentUser.id, is_member: member.isMember(guildId, currentUser.id) };
      let nsfwAllowed = currentUser.nsfwAllowed;
      if (nsfwAllowed) {
        nsfwAllowed = guildId(currentUser[12]).getViewNsfwGuildsOrDefault();
        const obj3 = guildId(currentUser[12]);
      }
      obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
      obj.source = constants.GUILD_SIDEBAR;
      obj.track(constants2.GUILD_NSFW_GATE_VIEWED, obj);
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = {};
    const items2 = [tmp.container, guildId.style];
    obj.style = items2;
    obj = { guild: stateFromStores, showExtraButtons: false };
    const items3 = [callback(importDefault(dependencyMap[13]), obj), ];
    const obj1 = { imageStyle: tmp.emptyStateImageContainer, titleStyle: importDefault(dependencyMap[15])(constants2.DISPLAY_EXTRABOLD, undefined, 16), containerStyle: tmp.emptyStateContainer, source: importDefault(dependencyMap[16]) };
    const intl = arg1(dependencyMap[17]).intl;
    obj1.title = intl.string(arg1(dependencyMap[17]).t.bAVpRR);
    const intl2 = arg1(dependencyMap[17]).intl;
    const obj2 = { helpURL: importDefault(dependencyMap[18]).getArticleURL(constants.NSFW_GUILD_GUIDELINES) };
    obj1.body = intl2.format(arg1(dependencyMap[17]).t.NQuXf0, obj2);
    items3[1] = callback(arg1(dependencyMap[14]).RefreshEmptyState, obj1);
    obj.children = items3;
    tmp5 = callback2(View, obj);
    const obj6 = importDefault(dependencyMap[18]);
  }
  return tmp5;
};
