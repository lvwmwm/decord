// Module ID: 15842
// Function ID: 15843
// Name: NewMemberActionsProgress
// Dependencies: [19, 17, 2108, 5023, 5024, 2052, 4455, 21, 4836, 576, 5293, 563, 1385, 5435, 1101, 4832, 1115, 1177, 9396, 2]
// Exports: NewMemberActionsProgress

// Module 15842 (NewMemberActionsProgress)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4455 */;
import LinearGradientDefault from "LinearGradient" /* 5293 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 5023 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 5024 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let obj2;
let obj3;
let unpackModuleId;
function ProgressBar(percent) {
  let items;
  let obj2;
  let tmp2;
  percent = percent.percent;
  const tmp = closure_12();
  const obj = { style: tmp.progressBackground, children: authStore(tmp2, obj2) };
  obj2 = { style: items, colors: ["rgba(103, 203, 134, 1)", "rgba(59, 165, 92, 1)"], useAngle: true, angle: -90 };
  items = [tmp.progressForeground, ];
  const obj3 = { width: "" + percent + "%" };
  items[1] = obj3;
  tmp2 = LinearGradientDefault;
  return authStore(View, obj);
}
const View = react_native.View;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const GuildMemberFlags = GuildMemberConstants.GuildMemberFlags;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { padding: 16 }, horizontal: { flexDirection: "row", alignItems: "center" }, spaceBetween: { justifyContent: "space-between" }, spaceBelow: { marginBottom: 8 }, progressBackground: obj2, progressForeground: obj3 };
obj2 = { borderRadius: nativeDefault.radii.round, height: 8, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.STATUS_POSITIVE_BACKGROUND, borderRadius: nativeDefault.radii.round, height: 8 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/NewMemberActionsProgress.tsx");

export const NewMemberActionsProgress = function NewMemberActionsProgress(guildId) {
  let intl;
  let items5;
  let items6;
  let items7;
  let items8;
  guildId = guildId.guildId;
  let stateFromStores1;
  const tmp = closure_12();
  let obj = guildId(stateFromStores1[11]);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId), items1);
  const items2 = [GuildOnboardingMemberActionStore];
  const obj2 = guildId(stateFromStores1[11]);
  stateFromStores1 = obj2.useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(guildId));
  const items3 = [GuildMemberStore];
  const obj3 = guildId(stateFromStores1[11]);
  const stateFromStores2 = obj3.useStateFromStores(items3, () => GuildMemberStore.getSelfMember(guildId));
  let num;
  if (stateFromStores != null) {
    num = stateFromStores.length;
  }
  if (num == null) {
    num = 0;
  }
  const items4 = [stateFromStores1, stateFromStores];
  const memo = react.useMemo(() => {
    const arr = stateFromStores;
    if (null != stateFromStores) {
      if (null != stateFromStores1) {
        let closure_0 = 0;
        const item = arr.forEach((item) => {
          if (null != stateFromStores1[item.channelId]) {
            closure_0 = closure_0 + 1;
          }
        });
        return closure_0;
      }
    }
    return 0;
  }, items4);
  let num2;
  const hasFlag = guildId(tmp3[12]).hasFlag;
  guildId(stateFromStores1[12]);
  if (stateFromStores2 != null) {
    num2 = stateFromStores2.flags;
  }
  if (num2 == null) {
    num2 = 0;
  }
  let tmp8 = null;
  if (!hasFlag(num2, GuildMemberFlags.COMPLETED_HOME_ACTIONS)) {
    tmp8 = null;
    if (0 !== num) {
      tmp8 = null;
      if (memo + num !== 0) {
        const obj5 = { style: items5, children: items6 };
        items5 = [, , ];
        const obj4 = {
          accessibilityRole: "button",
          activeOpacity: 0.4,
          style: tmp.container,
          onPress() {
                  const obj = guildId(stateFromStores1[14]);
                  obj.transitionTo(constants.GUILD_HOME);
                },
          children: items8
        };
        ({ horizontal: arr7[0], spaceBetween: arr7[1], spaceBelow: arr7[2] } = tmp);
        const PressableOpacity = tmp2(tmp3[13]).PressableOpacity;
        const obj6 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: intl.string(guildId(stateFromStores1[16]).t.LhlgY9) };
        const Text = tmp2(tmp3[15]).Text;
        intl = tmp2(tmp3[16]).intl;
        items6 = [closure_10(Text, obj6), ];
        const obj7 = { style: tmp.horizontal, children: items7 };
        const obj8 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: memo };
        items7 = [closure_10(guildId(tmp3[15]).Text, obj8), closure_10(guildId(tmp3[15]).Text, { variant: "text-xs/medium", color: "text-default", children: "/" }), , ];
        const obj9 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: num };
        items7[2] = closure_10(guildId(stateFromStores1[15]).Text, obj9);
        const obj10 = { size: guildId(stateFromStores1[17]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores(stateFromStores1[18]) };
        const Icon = tmp2(tmp3[17]).Icon;
        items7[3] = closure_10(Icon, obj10);
        items6[1] = closure_11(View, obj7);
        items8 = [closure_11(View, obj5), ];
        const obj11 = { percent: memo / num * 100 + 3 };
        items8[1] = closure_10(ProgressBar, obj11);
        tmp8 = closure_11(PressableOpacity, obj4);
      }
    }
  }
  return tmp8;
};
