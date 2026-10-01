// Module ID: 12170
// Function ID: 12171
// Name: HubProgressActionSheet
// Dependencies: [19, 17, 4467, 9286, 1074, 11793, 11962, 21, 4800, 4836, 12166, 11967, 1241, 9285, 1115, 11969, 4832, 11971, 1101, 12171, 1186, 9275, 12172, 12173, 12267, 5281, 5435, 6571, 2]
// Exports: default

// Module 12170 (HubProgressActionSheet)
import react_native from "react-native" /* 17 */;
import router_utils from "router_utils" /* 1101 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1186 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import HubProgressActionCreators from "HubProgressActionCreators" /* 9285 */;
import directory_channels_GuildDirectoryConstants from "directory_channels/GuildDirectoryConstants" /* 11793 */;
import react from "react" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import HubProgressBarConstants from "HubProgressBarConstants" /* 9286 */;
import Constants from "Constants" /* 1074 */;
import GuildProgressConstants from "GuildProgressConstants" /* 11962 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let c10;
let c9;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp;
let unpackModuleId;
const ContactSyncModalActionCreators = tmp(12173);
const View = react_native.View;
({ HUB_PROGRESS_ACTION_SHEET_ID: metroRequire, HUB_PROGRESS_NUM_TOTAL_STEPS: metroImportDefault } = HubProgressBarConstants);
({ AnalyticEvents: metroImportAll, AnalyticsLocations: c9, InstantInviteSources: c10, Routes: unpackModuleId } = Constants);
let closure_12 = directory_channels_GuildDirectoryConstants.DirectoryChannelScrollBehavior;
({ AnalyticsActions: map1, AnalyticsSetupTypes: closure_14 } = GuildProgressConstants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let closure_17 = createStyles.createStyles({ container: { padding: 16 }, footer: { marginTop: 12, display: "flex", alignItems: "center" } });
let size = size_mod;
let result = size.fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default function HubProgressActionSheet(guild) {
  let Text;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let items1;
  let items2;
  let obj11;
  let obj4;
  let stringResult;
  let tmp11Result;
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let hubProgressBarCompletedSteps;
  let tmp = closure_17();
  let obj = guild(hubProgressBarCompletedSteps[10]);
  hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  size = hubProgressBarCompletedSteps.size;
  let tmp4 = closure_7;
  const tmp5 = 100 === Math.max(guild(hubProgressBarCompletedSteps[11]).MIN_PROGRESS_PERCENT, 100 * size / closure_7);
  const ref = size.useRef(analyticsSource);
  const effect = size.useEffect(() => {
    ref.current = analyticsSource;
  });
  const items = [guild.id];
  const effect1 = size.useEffect(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current };
    obj.track(metroImportAll.OPEN_MODAL, obj2);
  }, items);
  const intl = guild(hubProgressBarCompletedSteps[14]).intl;
  const string = intl.string;
  const t = guild(hubProgressBarCompletedSteps[14]).t;
  if (tmp5) {
    stringResult = string(t.zQ4gGo);
  } else {
    stringResult = string(t.hRVjpT);
  }
  function handleFinishPress() {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { setup_type: constants3.HUB_PROGRESS, action: map1.DISMISS, num_total_actions: metroImportDefault, num_actions_completed: size };
    obj.track(metroImportAll.SERVER_SETUP_CTA_CLICKED, obj2);
    const obj3 = HubProgressActionCreators;
    obj3.skipHubProgress(guild.id);
    const obj4 = ActionSheetActionCreatorsDefault;
    obj4.hideActionSheet(metroRequire);
  }
  let obj2 = { style: tmp.container, children: items1 };
  let obj3 = { title: stringResult, subtitle: intl2.format(tmp2(tmp3[14]).t.l6iRLs, obj4) };
  const GuildProgressHeader = tmp2(tmp3[15]).GuildProgressHeader;
  intl2 = tmp2(tmp3[14]).intl;
  obj4 = {
    numFinished: size,
    total: tmp4,
    stepsHook(children, arg1) {
      const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
      return closure_1_15(guild(hubProgressBarCompletedSteps[16]).Text, obj, arg1);
    }
  };
  items1 = [closure_15(GuildProgressHeader, obj3), , , , ];
  const obj5 = {
    onPress() {
      let obj3;
      const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
      const tmp = guild;
      if (null != defaultChannel) {
        const obj2 = { state: obj3 };
        obj3 = { scrollBehavior: constants.GUILD_LIST_TOP };
        const obj = router_utils;
        obj.transitionTo(unpackModuleId.CHANNEL(tmp.id, defaultChannel.id), obj2);
        const obj4 = ActionSheetActionCreatorsDefault;
        obj4.hideActionSheet(metroRequire);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[19]),
    title: intl3.string(guild(hubProgressBarCompletedSteps[14]).t.iNR25n),
    isCompleted: hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.JOIN_GUILD),
    analyticsSetupType: constants5.HUB_PROGRESS,
    analyticsAction: constants4.JOIN_GUILD
  };
  const tmp12 = analyticsSource(hubProgressBarCompletedSteps[17]);
  intl3 = tmp2(tmp3[14]).intl;
  items1[1] = closure_15(tmp12, obj5);
  const obj6 = {
    onPress() {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guild.id);
      const channels = GuildChannelStore.getChannels(guild.id);
      const tmp4 = null != defaultChannel && null != channels;
      if (tmp4) {
        const obj = instant_invite_InstantInviteUtils;
        const result = obj.handleOpenInviteActionsheet(tmp, defaultChannel.id, channels, constants2.HUB_PROGRESS);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[22]),
    title: intl4.string(guild(hubProgressBarCompletedSteps[14]).t["3NlTYU"]),
    isCompleted: hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.INVITE_USER),
    analyticsSetupType: constants5.HUB_PROGRESS,
    analyticsAction: constants4.INVITE
  };
  const tmp13 = analyticsSource(hubProgressBarCompletedSteps[17]);
  intl4 = tmp2(tmp3[14]).intl;
  items1[2] = closure_15(tmp13, obj6);
  const obj7 = {
    onPress() {
      if (!hubProgressBarCompletedSteps.has(preloaded_user_settings.HubProgressStep.CONTACT_SYNC)) {
        const tmpResult = ContactSyncModalActionCreators;
        tmpResult.openContactSyncModal({}, constants.HUB_PROGRESS);
        const obj2 = ActionSheetActionCreatorsDefault;
        obj2.hideActionSheet(metroRequire);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[24]),
    title: intl5.string(guild(hubProgressBarCompletedSteps[14]).t.HFvFte),
    isCompleted: hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.CONTACT_SYNC),
    analyticsSetupType: constants5.HUB_PROGRESS,
    analyticsAction: constants4.CONTACT_SYNC
  };
  const tmp14 = analyticsSource(hubProgressBarCompletedSteps[17]);
  intl5 = tmp2(tmp3[14]).intl;
  items1[3] = closure_15(tmp14, obj7);
  const obj8 = { style: items2, children: tmp11Result };
  items2 = [tmp.footer];
  const tmp9 = closure_16;
  if (tmp5) {
    const obj9 = { text: intl7.string(guild(hubProgressBarCompletedSteps[14]).t["0/5zhg"]), onPress: handleFinishPress };
    const Button = tmp2(tmp3[25]).Button;
    intl7 = tmp2(tmp3[14]).intl;
    tmp11Result = tmp11(Button, obj9);
  } else {
    const obj10 = { accessibilityRole: "button", onPress: handleFinishPress, children: closure_15(Text, obj11) };
    const PressableOpacity = tmp2(tmp3[26]).PressableOpacity;
    obj11 = { variant: "text-sm/medium", color: "text-default", children: intl6.string(guild(hubProgressBarCompletedSteps[14]).t["9E36wf"]) };
    Text = tmp2(tmp3[16]).Text;
    intl6 = tmp2(tmp3[14]).intl;
    tmp11Result = tmp11(PressableOpacity, obj10);
  }
  items1[4] = closure_15(ref, obj8);
  const children = tmp9(tmp10, obj2);
  return closure_15(guild(hubProgressBarCompletedSteps[27]).BottomSheet, { startExpanded: true, children });
};
