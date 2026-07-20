// Module ID: 11286
// Function ID: 87832
// Name: AppLauncherMentionableListActionSheet
// Dependencies: []
// Exports: default

// Module 11286 (AppLauncherMentionableListActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const RelationshipTypes = arg1(dependencyMap[2]).RelationshipTypes;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const obj = { USER: "user", ROLE: "role", GLOBAL: "global" };
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/app_launcher/native/options/mentionable/AppLauncherMentionableListActionSheet.tsx");

export default function AppLauncherMentionableListActionSheet(channel) {
  let onActionSheetDismiss;
  ({ onMentionablePress: closure_0, onActionSheetDismiss } = channel);
  const importDefault = onActionSheetDismiss;
  channel = channel.channel;
  const dependencyMap = channel;
  const option = channel.option;
  const callback = option;
  const tmp = callback(React.useState(""), 2);
  const first = tmp[0];
  const React = first;
  let closure_5 = tmp[1];
  const ref = React.useRef(null);
  const tmp4 = callback(React.useState([]), 2);
  const first1 = tmp4[0];
  let closure_8 = tmp4[1];
  const guild_id = channel.guild_id;
  const items = [first, option, channel];
  const effect = React.useEffect(() => {
    let globals;
    let roles;
    let obj = callback(channel[4]);
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
        current.scrollToOffset({ "Bool(true)": 9035158524362260000000000000000000000000000000000000000000000000000000000000000000000000000000, "Bool(true)": -222642488090540470000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 });
      }
    }
  };
  const items1 = [ref(arg1(dependencyMap[8]).AppLauncherListSearchBar, obj), ];
  if (0 === first1.length) {
    let tmp10 = ref(arg1(dependencyMap[8]).AppLauncherListEmptyState, {});
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
              callback(closure_2[6]).hideActionSheet("AppLauncherMentionableListActionSheet");
              callback();
            },
            start: 0 === index,
            end: index === first1.length - 1
          };
          const type = item.type;
          if (lib2.USER === type) {
            const result3 = item.result;
            const user = result3.user;
            obj = { type: lib.NONE, user, nickname: result3.nick, guildId: guild_id };
            obj = { "Bool(false)": null, "Bool(false)": null };
            const tmp28 = onActionSheetDismiss(channel[9]);
            obj.children = item(channel[11]).getUserTag(user);
            obj.subLabel = ref(item(channel[10]).Text, obj);
            const merged = Object.assign(obj);
            return ref(tmp28, obj, user.id);
          } else if (lib2.ROLE === type) {
            const result2 = item.result;
            let obj1 = { guildRole: result2, guildId: guild_id };
            const merged1 = Object.assign(obj);
            return ref(item(channel[12]).RoleRow, obj1, result2.id);
          } else if (lib2.GLOBAL === type) {
            const result = item.result;
            obj1 = onActionSheetDismiss(channel[13]);
            if (result.text === obj1.MENTION_EVERYONE().text) {
              let tmp8 = ref(item(channel[12]).RoleIcon, {});
            } else {
              const obj2 = { icon: ref(item(channel[15]).UserCircleIcon, {}) };
              tmp8 = ref(onActionSheetDismiss(channel[14]), obj2);
              const tmp6 = onActionSheetDismiss(channel[14]);
            }
            const obj3 = {};
            const obj4 = { CHANNEL_HIGHLIGHT: true, guild_template_description: 15.1, borderWidth: 253, children: result.text };
            obj3.label = ref(item(channel[10]).Text, obj4);
            obj3.icon = tmp8;
            const merged2 = Object.assign(obj);
            return ref(item(channel[16]).TableRow, obj3, result.text);
          }
        }
    };
    tmp10 = ref(arg1(dependencyMap[8]).AppLauncherList, obj);
  }
  items1[1] = tmp10;
  obj.children = items1;
  return first1(arg1(dependencyMap[7]).AppLauncherCommandOptionActionSheet, obj);
};
export const APP_LAUNCHER_MENTIONABLE_LIST_ACTION_SHEET_KEY = "AppLauncherMentionableListActionSheet";
export const MentionableItemTypes = obj;
