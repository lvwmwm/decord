// Module ID: 11702
// Function ID: 90772
// Name: dismissActionSheet
// Dependencies: [31, 27, 1907, 5714, 653, 10040, 11502, 33, 4098, 4130, 11698, 11507, 675, 5713, 1212, 11509, 4126, 11511, 1198, 11703, 1282, 8481, 11704, 11705, 11786, 4543, 4660, 5187, 2]
// Exports: default

// Module 11702 (dismissActionSheet)
import result from "result";
import { View } from "Background";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";
import ME from "ME";
import { DirectoryChannelScrollBehavior as closure_12 } from "GuildDirectoryCreate";
import Steps from "Steps";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_13;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function dismissActionSheet() {
  importDefault(4098).hideActionSheet(closure_6);
}
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_6, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_7 } = items);
({ AnalyticEvents: closure_8, AnalyticsLocations: closure_9, InstantInviteSources: closure_10, Routes: closure_11 } = ME);
({ AnalyticsActions: closure_13, AnalyticsSetupTypes: closure_14 } = Steps);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = _createForOfIteratorHelperLoose.createStyles({ container: { padding: 16 }, footer: { marginTop: 12, display: "flex", alignItems: "center" } });
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default function HubProgressActionSheet(guild) {
  guild = guild.guild;
  const analyticsSource = guild.analyticsSource;
  let size;
  function handleFinishPress() {
    let obj = analyticsSource(hubProgressBarCompletedSteps[12]);
    obj = { setup_type: outer1_14.HUB_PROGRESS, action: outer1_13.DISMISS, num_total_actions: outer1_7, num_actions_completed: size };
    obj.track(outer1_8.SERVER_SETUP_CTA_CLICKED, obj);
    guild(hubProgressBarCompletedSteps[13]).skipHubProgress(guild.id);
    outer1_18();
  }
  const tmp = callback2();
  let obj = guild(hubProgressBarCompletedSteps[10]);
  hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  size = hubProgressBarCompletedSteps.size;
  const tmp2 = 100 === Math.max(guild(hubProgressBarCompletedSteps[11]).MIN_PROGRESS_PERCENT, 100 * size / closure_7);
  let closure_4 = size.useRef(analyticsSource);
  const effect = size.useEffect(() => {
    closure_4.current = analyticsSource;
  });
  const items = [guild.id];
  const effect1 = size.useEffect(() => {
    let obj = analyticsSource(hubProgressBarCompletedSteps[12]);
    obj = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current };
    obj.track(outer1_8.OPEN_MODAL, obj);
  }, items);
  const intl = guild(hubProgressBarCompletedSteps[14]).intl;
  const string = intl.string;
  const t = guild(hubProgressBarCompletedSteps[14]).t;
  if (tmp2) {
    let stringResult = string(t.zQ4gGo);
  } else {
    stringResult = string(t.hRVjpT);
  }
  obj = { style: tmp.container };
  obj = { title: stringResult };
  const intl2 = guild(hubProgressBarCompletedSteps[14]).intl;
  obj.subtitle = intl2.format(guild(hubProgressBarCompletedSteps[14]).t.l6iRLs, {
    numFinished: size,
    total: closure_7,
    stepsHook(children) {
      const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
      return outer1_15(guild(hubProgressBarCompletedSteps[16]).Text, obj, arg1);
    }
  });
  const items1 = [callback(guild(hubProgressBarCompletedSteps[15]).GuildProgressHeader, obj), , , , ];
  const obj2 = {
    onPress() {
      const defaultChannel = outer1_5.getDefaultChannel(guild.id);
      if (null != defaultChannel) {
        let obj = guild(hubProgressBarCompletedSteps[18]);
        obj = {};
        obj = { scrollBehavior: outer1_12.GUILD_LIST_TOP };
        obj.state = obj;
        obj.transitionTo(outer1_11.CHANNEL(guild.id, defaultChannel.id), obj);
        analyticsSource(hubProgressBarCompletedSteps[8]).hideActionSheet(outer1_6);
        const obj4 = analyticsSource(hubProgressBarCompletedSteps[8]);
      }
    },
    source: analyticsSource(hubProgressBarCompletedSteps[19])
  };
  const intl3 = guild(hubProgressBarCompletedSteps[14]).intl;
  obj2.title = intl3.string(guild(hubProgressBarCompletedSteps[14]).t.iNR25n);
  obj2.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.JOIN_GUILD);
  obj2.analyticsSetupType = constants2.HUB_PROGRESS;
  obj2.analyticsAction = constants.JOIN_GUILD;
  items1[1] = callback(analyticsSource(hubProgressBarCompletedSteps[17]), obj2);
  const obj3 = {
    onPress() {
      const defaultChannel = outer1_5.getDefaultChannel(guild.id);
      const channels = outer1_5.getChannels(guild.id);
      if (tmp3) {
        const obj = guild(hubProgressBarCompletedSteps[21]);
        const result = obj.handleOpenInviteActionsheet(guild, defaultChannel.id, channels, outer1_10.HUB_PROGRESS);
      }
    }
  };
  const obj1 = {
    numFinished: size,
    total: closure_7,
    stepsHook(children) {
      const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
      return outer1_15(guild(hubProgressBarCompletedSteps[16]).Text, obj, arg1);
    }
  };
  const tmp6 = closure_16;
  const tmp8 = callback;
  const tmp9 = analyticsSource(hubProgressBarCompletedSteps[17]);
  obj3.source = analyticsSource(hubProgressBarCompletedSteps[22]);
  const intl4 = guild(hubProgressBarCompletedSteps[14]).intl;
  obj3.title = intl4.string(guild(hubProgressBarCompletedSteps[14]).t["3NlTYU"]);
  obj3.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.INVITE_USER);
  obj3.analyticsSetupType = constants2.HUB_PROGRESS;
  obj3.analyticsAction = constants.INVITE;
  items1[2] = callback(analyticsSource(hubProgressBarCompletedSteps[17]), obj3);
  let obj4 = {
    onPress() {
      if (!hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.CONTACT_SYNC)) {
        guild(hubProgressBarCompletedSteps[23]).openContactSyncModal({}, outer1_9.HUB_PROGRESS);
        outer1_18();
        const obj = guild(hubProgressBarCompletedSteps[23]);
      }
    }
  };
  const tmp10 = analyticsSource(hubProgressBarCompletedSteps[17]);
  obj4.source = analyticsSource(hubProgressBarCompletedSteps[24]);
  const intl5 = guild(hubProgressBarCompletedSteps[14]).intl;
  obj4.title = intl5.string(guild(hubProgressBarCompletedSteps[14]).t.HFvFte);
  obj4.isCompleted = hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.CONTACT_SYNC);
  obj4.analyticsSetupType = constants2.HUB_PROGRESS;
  obj4.analyticsAction = constants.CONTACT_SYNC;
  items1[3] = callback(analyticsSource(hubProgressBarCompletedSteps[17]), obj4);
  const obj5 = { style: items2 };
  items2 = [tmp.footer];
  if (tmp2) {
    const obj6 = {};
    const intl7 = tmp13(tmp14[14]).intl;
    obj6.text = intl7.string(tmp13(tmp14[14]).t["0/5zhg"]);
    obj6.onPress = handleFinishPress;
    let tmp12Result = tmp12(tmp13(tmp14[25]).Button, obj6);
  } else {
    const obj7 = { accessibilityRole: "button", onPress: handleFinishPress };
    const obj8 = { variant: "text-sm/medium", color: "text-default" };
    const intl6 = tmp13(tmp14[14]).intl;
    obj8.children = intl6.string(tmp13(tmp14[14]).t["9E36wf"]);
    obj7.children = tmp12(tmp13(tmp14[16]).Text, obj8);
    tmp12Result = tmp12(tmp13(tmp14[26]).PressableOpacity, obj7);
  }
  obj5.children = tmp12Result;
  items1[4] = tmp8(closure_4, obj5);
  obj.children = items1;
  const children = tmp6(tmp7, obj);
  return callback(guild(hubProgressBarCompletedSteps[27]).BottomSheet, { startExpanded: true, children });
};
