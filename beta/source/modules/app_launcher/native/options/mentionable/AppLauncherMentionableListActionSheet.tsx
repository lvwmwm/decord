// Module ID: 11662
// Function ID: 11663
// Name: AppLauncherMentionableListActionSheet
// Dependencies: [32, 19, 1074, 21, 6941, 5754, 4800, 11648, 11649, 10328, 4832, 4678, 11663, 5828, 11661, 10378, 5917, 2]
// Exports: default

// Module 11662 (AppLauncherMentionableListActionSheet)
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import AutocompleteUtilsDefault from "AutocompleteUtils" /* 5754 */;
import ApplicationCommandUtils from "ApplicationCommandUtils" /* 6941 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let metroImportDefault;
let metroRequire;
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
const AppLauncherMentionableListActionSheet_str = "AppLauncherMentionableListActionSheet";
const MentionableItemTypes = { USER: "user", ROLE: "role", GLOBAL: "global" };
let result = size.fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx");

export default function AppLauncherMentionableListActionSheet(channel) {
  let items1;
  let onActionSheetDismiss;
  let tmp9Result;
  ({ onMentionablePress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  let query;
  const tmp = option(query.useState(""), 2);
  query = tmp[0];
  let closure_5 = tmp[1];
  const ref = query.useRef(null);
  const tmp4 = option(query.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const guild_id = channel.guild_id;
  let items = [query, option, channel];
  const length = first1.length;
  const effect = query.useEffect(() => {
    let globals;
    let roles;
    const obj = ApplicationCommandUtils;
    const applicationCommandOptionQueryOptions = obj.getApplicationCommandOptionQueryOptions(option);
    const obj2 = AutocompleteUtilsDefault;
    const obj3 = { query, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, canMentionOtherGlobals: applicationCommandOptionQueryOptions.canMentionOtherGlobals, request: true, limit: 10, allowSnowflake: true };
    const queryMentionResultsResult = obj2.queryMentionResults(obj3);
    const users = queryMentionResultsResult.users;
    const items = [...users.map((item) => ({ type: constants.USER, result: item })), ...roles.map((item) => ({ type: constants.ROLE, result: item })), ...globals.map((item) => ({ type: constants.GLOBAL, result: item }))];
    ({ roles, globals } = queryMentionResultsResult);
    closure_8(items);
  }, items);
  let tmp7 = require;
  let tmp8 = channel;
  let obj = { option, onDismiss: onActionSheetDismiss, children: items1 };
  let tmp9 = ref;
  const AppLauncherCommandOptionActionSheet = require("AppLauncherCommandOptionActionSheet").AppLauncherCommandOptionActionSheet;
  let obj2 = {
    onChange(str) {
      closure_5(str.toLowerCase());
      const current = ref.current;
      if (current != null) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  items1 = [ref(require("AppLauncherList").AppLauncherListSearchBar, obj2), ];
  const tmp6 = first1;
  if (0 === length) {
    tmp9Result = tmp9(tmp7(tmp8[8]).AppLauncherListEmptyState, {});
  } else {
    let obj3 = {
      ref,
      data: first1,
      renderItem(item) {
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
          if (guild_id.USER === type) {
            const result3 = item.result;
            const user = result3.user;
            const obj3 = { type: closure_5.NONE, user, nickname: result3.nick, guildId: guild_id, subLabel: ref(Text, obj4) };
            obj4 = { color: "text-subtle", variant: "text-xs/normal", children: obj9.getUserTag(user) };
            const tmp25 = onActionSheetDismiss(channel[9]);
            Text = require("Text/Text").Text;
            obj9 = require("UserUtils");
            const merged = Object.assign(obj);
            return ref(tmp25, obj3, user.id);
          } else if (guild_id.ROLE === type) {
            const result2 = item.result;
            const obj5 = { guildRole: result2, guildId: guild_id };
            const RoleRow = require("AppLauncherRoleListActionSheet").RoleRow;
            const merged1 = Object.assign(obj);
            return ref(RoleRow, obj5, result2.id);
          } else if (guild_id.GLOBAL === type) {
            let tmp7;
            let tmp8;
            let tmp9;
            const result = item.result;
            const text = result.text;
            let obj2 = onActionSheetDismiss(channel[13]);
            const tmp2 = onActionSheetDismiss;
            if (text === obj2.MENTION_EVERYONE().text) {
              tmp7 = ref(require("AppLauncherRoleListActionSheet").RoleIcon, {});
              tmp8 = require;
              tmp9 = ref;
            } else {
              const obj6 = { icon: ref(require("UserCircleIcon").UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
              const tmp2Result = tmp2(channel[14]);
              tmp7 = ref(tmp2Result, obj6);
              tmp8 = require;
              tmp9 = ref;
            }
            const obj7 = { label: tmp9(tmp8(channel[10]).Text, obj8), icon: tmp7 };
            const TableRow = tmp8(tmp3[16]).TableRow;
            obj8 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: result.text };
            const merged2 = Object.assign(obj);
            return tmp9(TableRow, obj7, result.text);
          }
        }
    };
    tmp9Result = tmp9(tmp7(tmp8[8]).AppLauncherList, obj3);
  }
  items1[1] = tmp9Result;
  return tmp6(AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export { MentionableItemTypes };
