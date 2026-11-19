// Module ID: 18255
// Function ID: 18256
// Name: GuildOnboardingNewMemberActions
// Dependencies: [19, 17, 6452, 4641, 4704, 4663, 4724, 6563, 8392, 1072, 1391, 4710, 21, 4792, 575, 4854, 504, 5408, 1414, 13049, 5479, 4738, 5383, 1187, 12153, 6911, 1113, 13053, 18256, 1406, 18257, 2]
// Exports: default

// Module 18255 (GuildOnboardingNewMemberActions)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import EmojiConstants from "EmojiConstants" /* 1391 */;
import FlagUtils from "FlagUtils" /* 1406 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4710 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 13049 */;
import react from "react" /* 19 */;
import EmojiStore from "EmojiStore" /* 6452 */;
import ChannelStore from "ChannelStore" /* 4641 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import GuildStore from "GuildStore" /* 4663 */;
import PermissionStore from "PermissionStore" /* 4724 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6563 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 8392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4792 */;
import size_mod from "module_2" /* 2 */;

let closure_15;
let closure_16;
let obj2;
let size;
let size1;
function MemberActionRow(channelId) {
  let Icon;
  let accessibilityRole;
  let accessibilityState;
  let completed;
  let emoji;
  let intl;
  let intl2;
  let items4;
  let items5;
  let obj10;
  let obj12;
  let obj17;
  let obj3;
  let obj6;
  let obj7;
  let title;
  let tmp6Result4;
  channelId = channelId.channelId;
  ({ title, emoji, completed } = channelId);
  let id;
  let stateFromStores;
  const icon = channelId.icon;
  const tmp = closure_17();
  let obj = channelId(stateFromStores[15]);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: completed });
  ({ accessibilityRole, accessibilityState } = checkboxA11yNative);
  if (emoji == null) {
    emoji = {};
  }
  id = emoji.id;
  const name = emoji.name;
  const items = [ChannelStore];
  const tmp2Result = channelId(stateFromStores[16]);
  stateFromStores = tmp2Result.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  const tmp7 = id(stateFromStores[17])(stateFromStores, true);
  const items1 = [PermissionStore];
  const tmp2Result3 = channelId(stateFromStores[16]);
  const stateFromStores1 = tmp2Result3.useStateFromStores(items1, () => PermissionStore.can(Permissions.VIEW_CHANNEL, stateFromStores));
  const items2 = [EmojiStore];
  const items3 = [id];
  const tmp2Result4 = channelId(stateFromStores[16]);
  const stateFromStores2 = tmp2Result4.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = EmojiStore.getCustomEmojiById(tmp);
    }
    return customEmojiById;
  }, items3);
  const obj5 = id(stateFromStores[18]);
  const newMemberActionIconURL = obj5.getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp23Result = null;
  if (null != stateFromStores) {
    tmp23Result = null;
    if (stateFromStores1) {
      let tmp16;
      let tmp17;
      if (null != newMemberActionIconURL) {
        const obj2 = { style: tmp.icon, source: obj3, resizeMode: "contain" };
        obj3 = { uri: newMemberActionIconURL };
        tmp16 = closure_15(tmp6(tmp3[20]), obj2);
        tmp17 = closure_15;
      } else if (null != stateFromStores2) {
        const obj4 = { style: tmp.emoji, source: obj6, resizeMode: "contain" };
        obj6 = { uri: tmp6Result4.getEmojiURL(obj7) };
        obj7 = { id: null, animated: null, size: EMOJI_URL_BASE_SIZE };
        ({ id: obj13.id, animated: obj13.animated } = stateFromStores2);
        const tmp6Result = id(stateFromStores[20]);
        tmp6Result4 = id(stateFromStores[18]);
        tmp16 = closure_15(tmp6Result, obj4);
        tmp17 = closure_15;
      } else {
        if (null != name) {
          const getByName = id(tmp3[21]).getByName;
          id(stateFromStores[21]);
          const tmp6Result6 = id(stateFromStores[21]);
          if (null != getByName(tmp6Result6.convertSurrogateToName(name, false))) {
            const obj8 = { style: tmp.textEmoji, variant: "heading-xxl/medium", children: name };
            tmp16 = closure_15(tmp2(tmp3[22]).Text, obj8);
            tmp17 = closure_15;
          }
        }
        const obj9 = { style: tmp.emojiPlaceholder, children: closure_15(Icon, obj10) };
        obj10 = { size: channelId(stateFromStores[23]).Icon.Sizes.REFRESH_SMALL_16, source: id(stateFromStores[24]) };
        Icon = tmp2(tmp3[23]).Icon;
        tmp16 = closure_15(View, obj9);
        tmp17 = closure_15;
      }
      const obj11 = { accessible: true, accessibilityRole, accessibilityState, accessibilityLabel: "" + title + ", " + intl.formatToPlainString(channelId(stateFromStores[26]).t.MkzlDL, obj12), onPress: tmp11, style: tmp.actionContainer, children: items4 };
      const PressableOpacity = tmp2(tmp3[25]).PressableOpacity;
      intl = tmp2(tmp3[26]).intl;
      const _HermesInternal = HermesInternal;
      items4 = [tmp16, , ];
      obj12 = { channelName: tmp7 };
      const obj14 = { style: tmp.channelNameContainer, children: items5 };
      const obj15 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: title };
      items5 = [tmp17(tmp2(tmp3[22]).Text, obj15), ];
      const obj16 = { variant: "body-xs/normal", color: "text-muted", children: intl2.format(channelId(stateFromStores[26]).t.MkzlDL, obj17) };
      const Text = tmp2(tmp3[22]).Text;
      intl2 = tmp2(tmp3[26]).intl;
      obj17 = { channelName: tmp7 };
      items5[1] = tmp17(Text, obj16);
      items4[1] = closure_16(View, obj14);
      const obj18 = { disableColor: true, size: channelId(stateFromStores[23]).Icon.Sizes.MEDIUM, source: id(completed ? stateFromStores[27] : stateFromStores[28]) };
      const Icon2 = tmp2(tmp3[23]).Icon;
      items4[2] = tmp17(Icon2, obj18);
      tmp23Result = closure_16(PressableOpacity, obj11);
    }
  }
  return tmp23Result;
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
  let intl3;
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
  let obj = guildId(stateFromStores2[16]);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId), items1);
  const items2 = [GuildOnboardingMemberActionStore];
  const obj2 = guildId(stateFromStores2[16]);
  const stateFromStores1 = obj2.useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(guildId));
  const items3 = [GuildMemberStore];
  const obj3 = guildId(stateFromStores2[16]);
  stateFromStores2 = obj3.useStateFromStores(items3, () => GuildMemberStore.getSelfMember(guildId));
  const items4 = [GuildStore];
  const obj4 = guildId(stateFromStores2[16]);
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
        obj7 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl3.string(tmp2(tmp3[26]).t.LhlgY9) };
        Text2 = tmp2(tmp3[22]).Text;
        intl3 = tmp2(tmp3[26]).intl;
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
          const obj8 = { accessible: true, accessibilityRole: "button", accessibilityLabel: intl.string(tmp2(tmp3[26]).t["K/i3iQ"]), onPress: tmp10, style: tmp.actionContainer, children: items7 };
          const PressableOpacity = tmp2(tmp3[25]).PressableOpacity;
          intl = tmp2(tmp3[26]).intl;
          const obj9 = { style: tmp.emojiPlaceholder, children: closure_15(Icon, obj10) };
          obj10 = { size: tmp2(tmp3[23]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(tmp3[30]) };
          Icon = tmp2(tmp3[23]).Icon;
          items7 = [closure_15(View, obj9), ];
          const obj11 = { style: tmp.channelNameContainer, children: closure_15(Text, obj12) };
          obj12 = { variant: "body-md/semibold", color: "mobile-text-heading-primary", children: intl2.string(tmp2(tmp3[26]).t["K/i3iQ"]) };
          Text = tmp2(tmp3[22]).Text;
          intl2 = tmp2(tmp3[26]).intl;
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
