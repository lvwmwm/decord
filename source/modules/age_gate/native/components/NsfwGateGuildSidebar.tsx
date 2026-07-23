// Module ID: 15095
// Function ID: 114917
// Name: NsfwGateGuildSidebar
// Dependencies: [31, 27, 1917, 1838, 1849, 9350, 653, 33, 4130, 689, 566, 675, 7926, 14986, 1273, 5052, 15096, 1212, 1920, 2]
// Exports: default

// Module 15095 (NsfwGateGuildSidebar)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import { NsfwGateSource } from "NsfwGateSource";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_9;
const require = arg1;
({ AnalyticEvents: closure_9, HelpdeskArticles: closure_10, Fonts: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.PANEL_BG };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.emptyStateContainer = { flex: 1 };
_createForOfIteratorHelperLoose.emptyStateImageContainer = { marginBottom: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/age_gate/native/components/NsfwGateGuildSidebar.tsx");

export default function NsfwGateGuildSidebar(guildId) {
  guildId = guildId.guildId;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(currentUser[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getGuild(guildId));
  currentUser = currentUser.getCurrentUser();
  const items1 = [guildId, stateFromStores, currentUser];
  const effect = React.useEffect(() => {
    let tmp = null != currentUser;
    if (tmp) {
      tmp = null != stateFromStores;
    }
    if (tmp) {
      let obj = stateFromStores(currentUser[11]);
      obj = { guild_id: guildId, user_id: currentUser.id, is_member: outer1_5.isMember(guildId, currentUser.id) };
      let nsfwAllowed = currentUser.nsfwAllowed;
      if (nsfwAllowed) {
        nsfwAllowed = guildId(currentUser[12]).getViewNsfwGuildsOrDefault();
        const obj3 = guildId(currentUser[12]);
      }
      obj.is_user_opted_in_to_age_restricted_servers = nsfwAllowed;
      obj.source = outer1_8.GUILD_SIDEBAR;
      obj.track(outer1_9.GUILD_NSFW_GATE_VIEWED, obj);
    }
  }, items1);
  let tmp5 = null;
  if (null != stateFromStores) {
    obj = {};
    const items2 = [tmp.container, guildId.style];
    obj.style = items2;
    obj = { guild: stateFromStores, showExtraButtons: false };
    const items3 = [callback(stateFromStores(currentUser[13]), obj), ];
    const obj1 = { imageStyle: tmp.emptyStateImageContainer, titleStyle: stateFromStores(currentUser[15])(constants2.DISPLAY_EXTRABOLD, undefined, 16), containerStyle: tmp.emptyStateContainer, source: stateFromStores(currentUser[16]) };
    const intl = guildId(currentUser[17]).intl;
    obj1.title = intl.string(guildId(currentUser[17]).t.bAVpRR);
    const intl2 = guildId(currentUser[17]).intl;
    const obj2 = { helpURL: stateFromStores(currentUser[18]).getArticleURL(constants.NSFW_GUILD_GUIDELINES) };
    obj1.body = intl2.format(guildId(currentUser[17]).t.NQuXf0, obj2);
    items3[1] = callback(guildId(currentUser[14]).RefreshEmptyState, obj1);
    obj.children = items3;
    tmp5 = callback2(View, obj);
    const obj6 = stateFromStores(currentUser[18]);
  }
  return tmp5;
};
