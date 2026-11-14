// Module ID: 13515
// Function ID: 13516
// Name: AppLauncherMentionableListActionSheet
// Dependencies: [32, 19, 5218, 1072, 21, 504, 13516, 11621, 8724, 6962, 5552, 13501, 13502, 10581, 5929, 5372, 13517, 7072, 13514, 10898, 7443, 2]
// Exports: default

// Module 13515 (AppLauncherMentionableListActionSheet)
import Constants from "Constants" /* 1072 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 6962 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 8724 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 5218 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let constants;

let metroImportAll;
let metroImportDefault;
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
const AppLauncherMentionableListActionSheet_str = "AppLauncherMentionableListActionSheet";
const MentionableItemTypes = { USER: "user", ROLE: "role", GLOBAL: "global" };
let result = size.fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx");

export default function AppLauncherMentionableListActionSheet(channel) {
  let items3;
  let onActionSheetDismiss;
  let tmp13Result;
  ({ onMentionablePress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let query;
  const tmp = option(query.useState(""), 2);
  query = tmp[0];
  const memberVersion = tmp[1];
  const ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const guild_id = channel.guild_id;
  let obj = require("get initialized");
  let items = [memberVersion];
  const stateFromStores = obj.useStateFromStores(items, () => memberVersion.getMemberVersion());
  let tmp8 = onActionSheetDismiss(channel[6])();
  constants = tmp8;
  let items1 = [first1];
  const length = first1.length;
  const memo = query.useMemo(() => first1.flatMap((type) => {
    let items1;
    if (type.type === constants.USER) {
      const items = [type.result.user.id];
      items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  }), items1);
  onActionSheetDismiss(channel[7])(guild_id, memo);
  const items2 = [query, option, channel, stateFromStores, tmp8];
  const effect = query.useEffect(() => {
    let globals;
    let roles;
    const obj = ApplicationCommandUtils;
    const applicationCommandOptionQueryOptions = obj.getApplicationCommandOptionQueryOptions(option);
    const tmp2 = constants(query);
    const obj2 = AutocompleteUtilsDefault;
    const obj3 = { query, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, canMentionOtherGlobals: applicationCommandOptionQueryOptions.canMentionOtherGlobals, request: tmp2, limit: 10, allowSnowflake: true };
    const queryMentionResultsResult = obj2.queryMentionResults(obj3);
    const users = queryMentionResultsResult.users;
    const items = [...users.map((item) => ({ type: constants.USER, result: item })), ...roles.map((item) => ({ type: constants.ROLE, result: item })), ...globals.map((item) => ({ type: constants.GLOBAL, result: item }))];
    ({ roles, globals } = queryMentionResultsResult);
    closure_8(items);
  }, items2);
  let obj2 = { option, onDismiss: onActionSheetDismiss, children: items3 };
  const AppLauncherCommandOptionActionSheet = require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet;
  let obj3 = {
    onChange: function handleQueryUpdate(str) {
      memberVersion(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  items3 = [first1(require("AppLauncherList").AppLauncherListSearchBar, obj3), ];
  const tmp12 = closure_8;
  if (0 === length) {
    tmp13Result = tmp13(tmp5(tmp6[12]).AppLauncherListEmptyState, {});
  } else {
    let obj4 = {
      ref,
      data: first1,
      renderItem: function Item(item) {
          let Text;
          let obj4;
          let obj8;
          let obj9;
          item = item.item;
          const index = item.index;
          let obj = {
            onPress() {
              const obj = { mentionable: item };
              require(obj);
              const obj2 = ActionSheetActionCreatorsDefault;
              obj2.hideActionSheet(AppLauncherMentionableListActionSheet_str);
              onActionSheetDismiss();
            },
            start: 0 === index,
            end: index === first1.length - 1
          };
          const type = item.type;
          if (constants.USER === type) {
            const result3 = item.result;
            const user = result3.user;
            const obj3 = { type: ref.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: first1(Text, obj4) };
            obj4 = { color: "text-subtle", variant: "body-xs/normal", children: obj9.getUserTag(user) };
            const tmp25 = onActionSheetDismiss(channel[13]);
            Text = require("Text/Text").Text;
            obj9 = require("UserUtils");
            const merged = Object.assign(obj);
            return first1(tmp25, obj3, user.id);
          } else if (constants.ROLE === type) {
            const result2 = item.result;
            const obj5 = { guildRole: result2, guildId: guild_id };
            const RoleRow = require("AppLauncherRoleListActionSheet").RoleRow;
            const merged1 = Object.assign(obj);
            return first1(RoleRow, obj5, result2.id);
          } else if (constants.GLOBAL === type) {
            let tmp7;
            let tmp8;
            let tmp9;
            const result = item.result;
            const text = result.text;
            let obj2 = onActionSheetDismiss(channel[17]);
            const tmp2 = onActionSheetDismiss;
            if (text === obj2.MENTION_EVERYONE().text) {
              tmp7 = first1(require("AppLauncherRoleListActionSheet").RoleIcon, {});
              tmp8 = require;
              tmp9 = first1;
            } else {
              const obj6 = { icon: first1(require("UserCircleIcon").UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
              const tmp2Result = tmp2(channel[18]);
              tmp7 = first1(tmp2Result, obj6);
              tmp8 = require;
              tmp9 = first1;
            }
            const obj7 = { label: tmp9(tmp8(channel[14]).Text, obj8), icon: tmp7 };
            const TableRow = tmp8(tmp3[20]).TableRow;
            obj8 = { lineClamp: 1, variant: "body-md/semibold", color: "mobile-text-heading-primary", children: result.text };
            const merged2 = Object.assign(obj);
            return tmp9(TableRow, obj7, result.text);
          }
        }
    };
    tmp13Result = tmp13(tmp5(tmp6[12]).AppLauncherList, obj4);
  }
  items3[1] = tmp13Result;
  return tmp12(AppLauncherCommandOptionActionSheet, obj2);
};
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export { MentionableItemTypes };
