// Module ID: 15166
// Function ID: 114373
// Name: MemberActionRow
// Dependencies: []
// Exports: default

// Module 15166 (MemberActionRow)
function MemberActionRow(channelId) {
  let completed;
  let icon;
  let title;
  channelId = channelId.channelId;
  const arg1 = channelId;
  let emoji = channelId.emoji;
  let importDefault;
  let dependencyMap;
  ({ title, icon, completed } = channelId);
  const tmp = callback3();
  if (null == emoji) {
    emoji = {};
  }
  const id = emoji.id;
  importDefault = id;
  const name = emoji.name;
  let obj1 = arg1(dependencyMap[15]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => channel.getChannel(channelId));
  dependencyMap = stateFromStores;
  let obj2 = arg1(dependencyMap[15]);
  const items1 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => closure_9.can(constants.VIEW_CHANNEL, stateFromStores));
  let obj3 = arg1(dependencyMap[15]);
  const items2 = [closure_5];
  const items3 = [id];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = customEmojiById.getCustomEmojiById(id);
    }
    return customEmojiById;
  }, items3);
  let obj4 = importDefault(dependencyMap[17]);
  const newMemberActionIconURL = obj4.getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores1) {
      if (null != newMemberActionIconURL) {
        let obj = { style: tmp.icon };
        obj = { uri: newMemberActionIconURL };
        obj.source = obj;
        obj.resizeMode = "contain";
        let tmp17 = callback(importDefault(dependencyMap[19]), obj);
      } else if (null != stateFromStores2) {
        obj1 = { style: tmp.emoji };
        obj2 = {};
        let obj12 = importDefault(dependencyMap[17]);
        obj3 = {};
        ({ id: obj14.id, animated: obj14.animated } = stateFromStores2);
        obj3.size = EMOJI_URL_BASE_SIZE;
        obj2.uri = obj12.getEmojiURL(obj3);
        obj1.source = obj2;
        obj1.resizeMode = "contain";
        tmp17 = callback(importDefault(dependencyMap[19]), obj1);
        const tmp24 = importDefault(dependencyMap[19]);
      } else {
        if (null != name) {
          let obj5 = importDefault(dependencyMap[20]);
          let obj6 = importDefault(dependencyMap[20]);
          if (null != obj5.getByName(obj6.convertSurrogateToName(name, false))) {
            obj4 = { style: tmp.textEmoji, variant: "heading-xxl/normal", children: name };
            tmp17 = callback(arg1(dependencyMap[21]).Text, obj4);
          }
        }
        obj5 = { style: tmp.emojiPlaceholder };
        obj6 = { size: arg1(dependencyMap[22]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[23]) };
        obj5.children = callback(arg1(dependencyMap[22]).Icon, obj6);
        tmp17 = callback(View, obj5);
      }
      const obj7 = { onPress: tmp7, style: tmp.actionContainer };
      const items4 = [tmp17, , ];
      const obj8 = { style: tmp.channelNameContainer };
      const obj9 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", children: title };
      const items5 = [callback(arg1(dependencyMap[21]).Text, obj9), ];
      const obj10 = {};
      const intl = arg1(dependencyMap[25]).intl;
      const obj11 = { channelName: tmp3 };
      obj10.children = intl.format(arg1(dependencyMap[25]).t.MkzlDL, obj11);
      items5[1] = callback(arg1(dependencyMap[21]).Text, obj10);
      obj8.children = items5;
      items4[1] = callback2(View, obj8);
      obj12 = { disableColor: true, size: arg1(dependencyMap[22]).Icon.Sizes.MEDIUM };
      if (completed) {
        let tmp39 = tmp38[26];
      } else {
        tmp39 = tmp38[27];
      }
      obj12.source = importDefault(tmp39);
      obj12 = callback(arg1(dependencyMap[22]).Icon, obj12);
      items4[2] = obj12;
      obj7.children = items4;
      callback2(arg1(dependencyMap[24]).PressableOpacity, obj7);
      const tmp29 = callback2;
      const tmp36 = callback;
      const tmp37 = importDefault;
    }
  }
  return tmp8;
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
const Permissions = arg1(dependencyMap[9]).Permissions;
const EMOJI_URL_BASE_SIZE = arg1(dependencyMap[10]).EMOJI_URL_BASE_SIZE;
const GuildMemberFlags = arg1(dependencyMap[11]).GuildMemberFlags;
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[12]));
let obj = arg1(dependencyMap[13]);
obj = { actionsContainer: { paddingHorizontal: 12 }, actionsHeader: { "Bool(true)": "<string:7525240>", "Bool(true)": "<string:536870912>" } };
obj = { backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[14]).radii.sm };
obj.actionContainer = obj;
obj.channelNameContainer = {};
const tmp2 = arg1(dependencyMap[12]);
obj.icon = { borderRadius: importDefault(dependencyMap[14]).radii.xs };
obj.emoji = {};
obj.textEmoji = {};
const obj1 = { borderRadius: importDefault(dependencyMap[14]).radii.xs };
obj.emojiPlaceholder = { backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOWEST };
let closure_17 = obj.createStyles(obj);
const obj2 = { backgroundColor: importDefault(dependencyMap[14]).colors.BACKGROUND_BASE_LOWEST };
const result = arg1(dependencyMap[30]).fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx");

export default function GuildOnboardingNewMemberActions(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  let obj = arg1(dependencyMap[15]);
  const items = [closure_10];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => newMemberActions.getNewMemberActions(guildId), items1);
  let obj1 = arg1(dependencyMap[15]);
  const items2 = [closure_11];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => completedActions.getCompletedActions(guildId));
  const importDefault = stateFromStores1;
  let obj2 = arg1(dependencyMap[15]);
  const items3 = [closure_7];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => selfMember.getSelfMember(guildId));
  const dependencyMap = stateFromStores2;
  let obj3 = arg1(dependencyMap[15]);
  const items4 = [closure_8];
  const stateFromStores3 = obj3.useStateFromStores(items4, () => guild.getGuild(guildId));
  const React = stateFromStores3;
  const items5 = [stateFromStores1, guildId, ];
  let flags;
  if (null != stateFromStores2) {
    flags = stateFromStores2.flags;
  }
  items5[2] = flags;
  const effect = React.useEffect(() => {
    let hasFlagResult = null == stateFromStores1;
    if (hasFlagResult) {
      let flags;
      if (null != stateFromStores2) {
        flags = stateFromStores2.flags;
      }
      hasFlagResult = null != flags;
    }
    if (hasFlagResult) {
      flags = stateFromStores2.flags;
      let num2 = 0;
      if (null != flags) {
        num2 = flags;
      }
      hasFlagResult = guildId(stateFromStores2[28]).hasFlag(num2, constants.STARTED_HOME_ACTIONS);
      const obj = guildId(stateFromStores2[28]);
    }
    if (hasFlagResult) {
      const newMemberActions = guildId(stateFromStores2[18]).fetchNewMemberActions(guildId);
      const obj2 = guildId(stateFromStores2[18]);
    }
  }, items5);
  [][0] = stateFromStores3;
  let tmp22Result = null;
  if (null != stateFromStores2) {
    tmp22Result = null;
    if (null != stateFromStores) {
      tmp22Result = null;
      if (0 !== stateFromStores.length) {
        obj = { style: tmp.actionsContainer };
        obj = { style: tmp.actionsHeader };
        obj1 = {};
        const intl2 = arg1(dependencyMap[25]).intl;
        obj1.children = intl2.string(arg1(dependencyMap[25]).t.LhlgY9);
        obj.children = callback(arg1(dependencyMap[21]).Text, obj1);
        const items6 = [
          callback(View, obj),
          stateFromStores.map((channelId) => {
                  const obj = { channelId: channelId.channelId, title: channelId.title, emoji: channelId.emoji, icon: channelId.icon };
                  let tmp3;
                  if (null != stateFromStores1) {
                    tmp3 = stateFromStores1[channelId.channelId];
                  }
                  obj.completed = null != tmp3 && tmp3;
                  return closure_15(closure_18, obj, "member-action-" + channelId.channelId);
                }),

        ];
        let rulesChannelId;
        if (null != stateFromStores3) {
          rulesChannelId = stateFromStores3.rulesChannelId;
        }
        let tmp11 = null != rulesChannelId;
        if (tmp11) {
          obj2 = { onPress: tmp8, style: tmp.actionContainer };
          obj3 = { style: tmp.emojiPlaceholder };
          const obj4 = { size: arg1(dependencyMap[22]).Icon.Sizes.REFRESH_SMALL_16, source: importDefault(dependencyMap[29]) };
          obj3.children = callback(arg1(dependencyMap[22]).Icon, obj4);
          const items7 = [callback(View, obj3), ];
          const obj5 = { style: tmp.channelNameContainer };
          const obj6 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold" };
          const intl = arg1(dependencyMap[25]).intl;
          obj6.children = intl.string(arg1(dependencyMap[25]).t.K/i3iQ);
          obj5.children = callback(arg1(dependencyMap[21]).Text, obj6);
          items7[1] = callback(View, obj5);
          obj2.children = items7;
          tmp11 = callback2(arg1(dependencyMap[24]).PressableOpacity, obj2);
        }
        items6[2] = tmp11;
        obj.children = items6;
        tmp22Result = callback2(View, obj);
        const tmp22 = callback2;
        const tmp23 = View;
      }
    }
  }
  return tmp22Result;
};
