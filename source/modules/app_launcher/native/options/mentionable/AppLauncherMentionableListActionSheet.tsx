// Module ID: 11332
// Function ID: 88170
// Name: AppLauncherMentionableListActionSheet
// Dependencies: [57, 31, 653, 33, 6753, 4974, 4098, 11318, 11319, 8873, 4126, 3969, 11333, 5044, 11331, 7607, 5165, 2]
// Exports: default

// Module 11332 (AppLauncherMentionableListActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { RelationshipTypes } from "ME";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let obj = { USER: "user", ROLE: "role", GLOBAL: "global" };
let result = require("ME").fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx");

export default function AppLauncherMentionableListActionSheet(channel) {
  let onActionSheetDismiss;
  let require;
  ({ onMentionablePress: require, onActionSheetDismiss } = channel);
  channel = channel.channel;
  const option = channel.option;
  const tmp = option(first.useState(""), 2);
  first = tmp[0];
  let closure_5 = tmp[1];
  const ref = first.useRef(null);
  const tmp4 = option(first.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const guild_id = channel.guild_id;
  let items = [first, option, channel];
  const effect = first.useEffect(() => {
    let globals;
    let roles;
    let obj = outer1_0(channel[4]);
    const applicationCommandOptionQueryOptions = obj.getApplicationCommandOptionQueryOptions(option);
    obj = { query: first, channel, canMentionEveryone: applicationCommandOptionQueryOptions.canMentionEveryone, canMentionHere: applicationCommandOptionQueryOptions.canMentionHere, canMentionUsers: applicationCommandOptionQueryOptions.canMentionUsers, canMentionRoles: applicationCommandOptionQueryOptions.canMentionRoles, includeAllGuildUsers: applicationCommandOptionQueryOptions.canMentionAnyGuildUser, includeNonMentionableRoles: applicationCommandOptionQueryOptions.canMentionNonMentionableRoles, request: true, limit: 10, allowSnowflake: true };
    const queryMentionResultsResult = onActionSheetDismiss(channel[5]).queryMentionResults(obj);
    const users = queryMentionResultsResult.users;
    const items = [...users.map((result) => ({ type: constants.USER, result })), ...roles.map((result) => ({ type: constants.ROLE, result })), ...globals.map((result) => ({ type: constants.GLOBAL, result }))];
    ({ roles, globals } = queryMentionResultsResult);
    lib2(items);
  }, items);
  let obj = { option, onDismiss: onActionSheetDismiss };
  obj = {
    onChange(str) {
      lib(str.toLowerCase());
      const current = ref.current;
      if (null != current) {
        current.scrollToOffset({ offset: 0, animated: false });
      }
    }
  };
  const items1 = [ref(require(channel[8]).AppLauncherListSearchBar, obj), ];
  if (0 === first1.length) {
    let tmp10 = ref(require(channel[8]).AppLauncherListEmptyState, {});
  } else {
    obj = {
      ref,
      data: first1,
      renderItem(item) {
          item = item.item;
          const index = item.index;
          let obj = {
            onPress() {
              item({ mentionable: item });
              onActionSheetDismiss(channel[6]).hideActionSheet("AppLauncherMentionableListActionSheet");
              outer1_1();
            },
            start: 0 === index,
            end: index === first1.length - 1
          };
          const type = item.type;
          if (lib2.USER === type) {
            const result3 = item.result;
            const user = result3.user;
            obj = { type: lib.NONE, user, nickname: result3.nick, guildId: guild_id };
            obj = { color: "text-subtle", variant: "text-xs/normal" };
            const tmp28 = onActionSheetDismiss(channel[9]);
            obj.children = outer1_0(channel[11]).getUserTag(user);
            obj.subLabel = ref(outer1_0(channel[10]).Text, obj);
            const merged = Object.assign(obj);
            return ref(tmp28, obj, user.id);
          } else if (lib2.ROLE === type) {
            const result2 = item.result;
            let obj1 = { guildRole: result2, guildId: guild_id };
            const merged1 = Object.assign(obj);
            return ref(outer1_0(channel[12]).RoleRow, obj1, result2.id);
          } else if (lib2.GLOBAL === type) {
            const result = item.result;
            obj1 = onActionSheetDismiss(channel[13]);
            if (result.text === obj1.MENTION_EVERYONE().text) {
              let tmp8 = ref(outer1_0(channel[12]).RoleIcon, {});
            } else {
              const obj2 = { icon: ref(outer1_0(channel[15]).UserCircleIcon, { size: "sm", color: "interactive-text-default" }) };
              tmp8 = ref(onActionSheetDismiss(channel[14]), obj2);
              const tmp6 = onActionSheetDismiss(channel[14]);
            }
            const obj3 = {};
            const obj4 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", children: result.text };
            obj3.label = ref(outer1_0(channel[10]).Text, obj4);
            obj3.icon = tmp8;
            const merged2 = Object.assign(obj);
            return ref(outer1_0(channel[16]).TableRow, obj3, result.text);
          }
        }
    };
    tmp10 = ref(require(channel[8]).AppLauncherList, obj);
  }
  items1[1] = tmp10;
  obj.children = items1;
  return first1(require(channel[7]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export const MentionableItemTypes = obj;
