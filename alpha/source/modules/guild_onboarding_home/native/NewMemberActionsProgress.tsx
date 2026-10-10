// Module ID: 16623
// Function ID: 16624
// Name: NewMemberActionsProgress
// Dependencies: [19, 17, 2125, 6925, 7915, 2072, 4736, 21, 5092, 587, 558, 576, 5391, 573, 1403, 6184, 1112, 5088, 1126, 1200, 11018, 2]
// Exports: NewMemberActionsProgress

// Module 16623 (NewMemberActionsProgress)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import ChannelConstants from "ChannelConstants" /* 2072 */;
import GuildMemberConstants from "GuildMemberConstants" /* 4736 */;
import LinearGradientDefault from "LinearGradient" /* 5391 */;
import react from "react" /* 19 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildOnboardingHomeSettingsStore from "GuildOnboardingHomeSettingsStore" /* 6925 */;
import GuildOnboardingMemberActionStore from "GuildOnboardingMemberActionStore" /* 7915 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c10;
let obj2;
let obj3;
let unpackModuleId;
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
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProgressBar(percent) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(11);
  percent = percent.percent;
  const tmp3 = closure_12();
  const combined = "" + percent + "%";
  if (cResult[0] !== combined) {
    const obj2 = { width: combined };
    cResult[0] = combined;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp3.progressForeground) {
    let tmp6;
    let tmp7;
    let tmp8;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const items = ["rgba(103, 203, 134, 1)", "rgba(59, 165, 92, 1)"];
      cResult[5] = items;
      tmp7 = items;
    } else {
      tmp7 = cResult[5];
    }
    if (cResult[6] !== tmp6) {
      const obj3 = { style: tmp6, colors: tmp7, useAngle: true, angle: -90 };
      const tmp11 = authStore(LinearGradientDefault, obj3);
      cResult[6] = tmp6;
      cResult[7] = tmp11;
      tmp8 = tmp11;
    } else {
      tmp8 = cResult[7];
    }
    if (cResult[8] === tmp3.progressBackground) {
      let tmp12;
      if (cResult[9] === tmp8) {
        tmp12 = cResult[10];
      }
      return tmp12;
    }
    const obj4 = { style: tmp3.progressBackground, children: tmp8 };
    const tmp15 = authStore(View, obj4);
    cResult[8] = tmp3.progressBackground;
    cResult[9] = tmp8;
    cResult[10] = tmp15;
    tmp12 = tmp15;
  }
  const items1 = [tmp3.progressForeground, tmp5];
  cResult[2] = tmp3.progressForeground;
  cResult[3] = tmp5;
  cResult[4] = items1;
  tmp6 = items1;
}) : (function ProgressBar(percent) {
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
});
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
  let obj = guildId(stateFromStores1[13]);
  const items = [GuildOnboardingHomeSettingsStore];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => GuildOnboardingHomeSettingsStore.getNewMemberActions(guildId), items1);
  const items2 = [GuildOnboardingMemberActionStore];
  const obj2 = guildId(stateFromStores1[13]);
  stateFromStores1 = obj2.useStateFromStores(items2, () => GuildOnboardingMemberActionStore.getCompletedActions(guildId));
  const items3 = [GuildMemberStore];
  const obj3 = guildId(stateFromStores1[13]);
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
  const hasFlag = guildId(tmp3[14]).hasFlag;
  guildId(stateFromStores1[14]);
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
                  const obj = guildId(stateFromStores1[16]);
                  obj.transitionTo(constants.GUILD_HOME);
                },
          children: items8
        };
        ({ horizontal: arr7[0], spaceBetween: arr7[1], spaceBelow: arr7[2] } = tmp);
        const PressableOpacity = tmp2(tmp3[15]).PressableOpacity;
        const obj6 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: intl.string(guildId(stateFromStores1[18]).t.LhlgY9) };
        const Text = tmp2(tmp3[17]).Text;
        intl = tmp2(tmp3[18]).intl;
        items6 = [closure_10(Text, obj6), ];
        const obj7 = { style: tmp.horizontal, children: items7 };
        const obj8 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: memo };
        items7 = [closure_10(guildId(tmp3[17]).Text, obj8), closure_10(guildId(tmp3[17]).Text, { variant: "text-xs/medium", color: "text-default", children: "/" }), , ];
        const obj9 = { variant: "text-xs/bold", color: "mobile-text-heading-primary", children: num };
        items7[2] = closure_10(guildId(stateFromStores1[17]).Text, obj9);
        const obj10 = { size: guildId(stateFromStores1[19]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores(stateFromStores1[20]) };
        const Icon = tmp2(tmp3[19]).Icon;
        items7[3] = closure_10(Icon, obj10);
        items6[1] = closure_11(View, obj7);
        items8 = [closure_11(View, obj5), ];
        const obj11 = { percent: memo / num * 100 + 3 };
        items8[1] = closure_10(closure_13, obj11);
        tmp8 = closure_11(PressableOpacity, obj4);
      }
    }
  }
  return tmp8;
};
