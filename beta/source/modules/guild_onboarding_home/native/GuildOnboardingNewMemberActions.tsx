// Module ID: 16213
// Function ID: 16214
// Name: GuildOnboardingNewMemberActions
// Dependencies: [19, 17, 5771, 2045, 2108, 2067, 4469, 5023, 5024, 1074, 1375, 4455, 21, 4836, 576, 504, 4989, 1397, 11767, 5899, 4483, 4832, 1177, 11282, 5435, 1115, 11772, 16214, 1385, 16215, 2]
// Exports: default

// Module 16213 (GuildOnboardingNewMemberActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 11767 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 5771 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5023 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 5024 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let closure_15;
let closure_16;
let obj2;
let size;
let size1;
function MemberActionRow(channelId) {
  let Icon;
  let completed;
  let icon;
  let intl;
  let items4;
  let items5;
  let obj12;
  let obj18;
  let obj6;
  let obj8;
  let obj9;
  let title;
  let tmp5Result4;
  channelId = channelId.channelId;
  let emoji = channelId.emoji;
  let id;
  let stateFromStores;
  ({ title, icon, completed } = channelId);
  const tmp = closure_17();
  if (emoji == null) {
    emoji = {};
  }
  id = emoji.id;
  const name = emoji.name;
  const items = [ChannelStore];
  const obj2 = channelId(stateFromStores[15]);
  stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const items1 = [PermissionStore];
  const tmp6 = id(stateFromStores[16])(stateFromStores, true);
  const obj3 = channelId(stateFromStores[15]);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => PermissionStore.can(Permissions.VIEW_CHANNEL, stateFromStores));
  const items2 = [EmojiStore];
  const items3 = [id];
  const obj4 = channelId(stateFromStores[15]);
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items3);
  const obj5 = id(stateFromStores[17]);
  const newMemberActionIconURL = obj5.getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp22Result = null;
  if (null != stateFromStores) {
    tmp22Result = null;
    if (stateFromStores1) {
      let tmp15;
      let tmp16;
      if (null != newMemberActionIconURL) {
        let obj = { style: tmp.icon, source: obj6, resizeMode: "contain" };
        obj6 = { uri: newMemberActionIconURL };
        tmp15 = closure_15(tmp5(tmp3[19]), obj);
        tmp16 = closure_15;
      } else if (null != stateFromStores2) {
        const obj7 = { style: tmp.emoji, source: obj8, resizeMode: "contain" };
        obj8 = { uri: tmp5Result4.getEmojiURL(obj9) };
        obj9 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
        ({ id: obj13.id, animated: obj13.animated } = stateFromStores2);
        const tmp5Result = id(stateFromStores[19]);
        tmp5Result4 = id(stateFromStores[17]);
        tmp15 = closure_15(tmp5Result, obj7);
        tmp16 = closure_15;
      } else {
        if (null != name) {
          const getByName = id(tmp3[20]).getByName;
          id(stateFromStores[20]);
          const tmp5Result6 = id(stateFromStores[20]);
          if (null != getByName(tmp5Result6.convertSurrogateToName(name, false))) {
            const obj10 = { style: tmp.textEmoji, variant: "heading-xxl/normal", children: name };
            tmp15 = closure_15(tmp2(tmp3[21]).Text, obj10);
            tmp16 = closure_15;
          }
        }
        const obj11 = { style: tmp.emojiPlaceholder, children: closure_15(Icon, obj12) };
        obj12 = { size: channelId(stateFromStores[22]).Icon.Sizes.REFRESH_SMALL_16, source: id(stateFromStores[23]) };
        Icon = tmp2(tmp3[22]).Icon;
        tmp15 = closure_15(View, obj11);
        tmp16 = closure_15;
      }
      const obj14 = { onPress: tmp10, style: tmp.actionContainer, children: items4 };
      items4 = [tmp15, , ];
      const obj15 = { style: tmp.channelNameContainer, children: items5 };
      const PressableOpacity = tmp2(tmp3[24]).PressableOpacity;
      const obj16 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title };
      items5 = [tmp16(tmp2(tmp3[21]).Text, obj16), ];
      const obj17 = { variant: "text-xs/normal", color: "text-muted", children: intl.format(channelId(stateFromStores[25]).t.MkzlDL, obj18) };
      const Text = tmp2(tmp3[21]).Text;
      intl = tmp2(tmp3[25]).intl;
      obj18 = { channelName: tmp6 };
      items5[1] = tmp16(Text, obj17);
      items4[1] = closure_16(View, obj15);
      const obj19 = { disableColor: true, size: channelId(stateFromStores[22]).Icon.Sizes.MEDIUM, source: id(completed ? stateFromStores[26] : stateFromStores[27]) };
      const Icon2 = tmp2(tmp3[22]).Icon;
      items4[2] = tmp16(Icon2, obj19);
      tmp22Result = closure_16(PressableOpacity, obj14);
    }
  }
  return tmp22Result;
}
const View = react_native.View;
const Permissions = Constants.Permissions;
const EMOJI_URL_BASE_SIZE = EmojiConstants.EMOJI_URL_BASE_SIZE;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let createStyles = createStyles_mod;
let obj = { actionsContainer: { paddingHorizontal: 12 }, actionsHeader: { display: "flex", marginBottom: 16 }, actionContainer: obj2, channelNameContainer: { flex: 1, marginHorizontal: 8 }, icon: size, emoji: { width: 40, height: 40 }, textEmoji: { width: 40, textAlign: "center" }, emojiPlaceholder: size1 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "center" };
createStyles = createStyles.createStyles;
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.xs };
size1 = { width: 40, height: 40, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" };
let closure_17 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx");

export default function GuildOnboardingNewMemberActions(guildId) {
  let Icon;
  let Text;
  let Text2;
  let intl;
  let intl2;
  let items6;
  let items7;
  let obj10;
  let obj12;
  let obj7;
  guildId = guildId.guildId;
  let stateFromStores2;
  let tmp = closure_17();
  let tmp2 = guildId;
  const tmp3 = stateFromStores2;
  let obj = guildId(stateFromStores2[15]);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId), items1);
  const items2 = [GuildOnboardingMemberActionStore];
  const obj2 = guildId(stateFromStores2[15]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(guildId));
  const items3 = [GuildMemberStore];
  const obj3 = guildId(stateFromStores2[15]);
  stateFromStores2 = obj3.useStateFromStores(items3, () => GuildMemberStore.getSelfMember(guildId));
  const items4 = [GuildStore];
  const obj4 = guildId(stateFromStores2[15]);
  const stateFromStores3 = obj4.useStateFromStores(items4, () => GuildStore.getGuild(guildId));
  const items5 = [stateFromStores1, guildId, ];
  let flags;
  const useEffect = stateFromStores3.useEffect;
  if (stateFromStores2 != null) {
    flags = stateFromStores2.flags;
  }
  items5[2] = flags;
  const effect = useEffect(() => {
    let hasFlagResult = null == stateFromStores1;
    if (hasFlagResult) {
      let flags;
      if (stateFromStores2 != null) {
        flags = stateFromStores2.flags;
      }
      hasFlagResult = null != flags;
    }
    if (hasFlagResult) {
      let num = stateFromStores2.flags;
      const hasFlag = FlagUtils.hasFlag;
      FlagUtils;
      if (num == null) {
        num = 0;
      }
      hasFlagResult = hasFlag(num, GuildMemberFlags.STARTED_HOME_ACTIONS);
    }
    if (hasFlagResult) {
      const obj = GuildOnboardingHomeActionCreators;
      const newMemberActions = obj.fetchNewMemberActions(guildId);
    }
  }, items5);
  [][0] = stateFromStores3;
  let tmp15Result2 = null;
  if (null != stateFromStores2) {
    tmp15Result2 = null;
    if (null != stateFromStores) {
      let num = 0;
      tmp15Result2 = null;
      if (0 !== stateFromStores.length) {
        const obj5 = { style: tmp.actionsContainer, children: items6 };
        const obj6 = { style: tmp.actionsHeader, children: closure_15(Text2, obj7) };
        obj7 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary", children: intl2.string(tmp2(tmp3[25]).t.LhlgY9) };
        Text2 = tmp2(tmp3[21]).Text;
        intl2 = tmp2(tmp3[25]).intl;
        items6 = [
          closure_15(View, obj6),
          stateFromStores.map((channelId) => {
                  let flag;
                  const obj = { channelId: channelId.channelId, title: channelId.title, emoji: channelId.emoji, icon: channelId.icon, completed: flag };
                  flag = undefined;
                  const tmp = closure_15;
                  const tmp2 = MemberActionRow;
                  if (stateFromStores1 != null) {
                    flag = tmp3[channelId.channelId];
                  }
                  if (flag == null) {
                    flag = false;
                  }
                  return tmp(tmp2, obj, "member-action-" + channelId.channelId);
                }),

        ];
        let rulesChannelId;
        if (stateFromStores3 != null) {
          rulesChannelId = stateFromStores3.rulesChannelId;
        }
        let tmp15Result = null != rulesChannelId;
        if (tmp15Result) {
          const obj8 = { onPress: tmp10, style: tmp.actionContainer, children: items7 };
          const obj9 = { style: tmp.emojiPlaceholder, children: closure_15(Icon, obj10) };
          const PressableOpacity = tmp2(tmp3[24]).PressableOpacity;
          obj10 = { size: tmp2(tmp3[22]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(tmp3[29]) };
          Icon = tmp2(tmp3[22]).Icon;
          items7 = [closure_15(View, obj9), ];
          const obj11 = { style: tmp.channelNameContainer, children: closure_15(Text, obj12) };
          obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: intl.string(tmp2(tmp3[25]).t["K/i3iQ"]) };
          Text = tmp2(tmp3[21]).Text;
          intl = tmp2(tmp3[25]).intl;
          items7[1] = closure_15(View, obj11);
          tmp15Result = tmp15(PressableOpacity, obj8);
        }
        items6[2] = tmp15Result;
        tmp15Result2 = tmp15(tmp16, obj5);
      }
    }
  }
  return tmp15Result2;
};
