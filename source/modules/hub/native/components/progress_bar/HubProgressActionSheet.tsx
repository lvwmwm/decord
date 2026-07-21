// Module ID: 11691
// Function ID: 90698
// Name: dismissActionSheet
// Dependencies: []
// Exports: default

// Module 11691 (dismissActionSheet)
function dismissActionSheet() {
  importDefault(dependencyMap[8]).hideActionSheet(closure_6);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ HUB_PROGRESS_ACTION_SHEET_ID: closure_6, HUB_PROGRESS_NUM_TOTAL_STEPS: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
({ AnalyticEvents: closure_8, AnalyticsLocations: closure_9, InstantInviteSources: closure_10, Routes: closure_11 } = arg1(dependencyMap[4]));
let closure_12 = arg1(dependencyMap[5]).DirectoryChannelScrollBehavior;
const tmp3 = arg1(dependencyMap[4]);
({ AnalyticsActions: closure_13, AnalyticsSetupTypes: closure_14 } = arg1(dependencyMap[6]));
const tmp4 = arg1(dependencyMap[6]);
({ jsx: closure_15, jsxs: closure_16 } = arg1(dependencyMap[7]));
const tmp5 = arg1(dependencyMap[7]);
let closure_17 = arg1(dependencyMap[9]).createStyles({ container: { padding: 16 }, footer: {} });
const obj = arg1(dependencyMap[9]);
const result = arg1(dependencyMap[28]).fileFinishedImporting("modules/hub/native/components/progress_bar/HubProgressActionSheet.tsx");

export default function HubProgressActionSheet(guild) {
  guild = guild.guild;
  const arg1 = guild;
  const analyticsSource = guild.analyticsSource;
  const importDefault = analyticsSource;
  let React;
  function handleFinishPress() {
    let obj = analyticsSource(hubProgressBarCompletedSteps[12]);
    obj = { setup_type: constants6.HUB_PROGRESS, action: constants5.DISMISS, num_total_actions: closure_7, num_actions_completed: size };
    obj.track(constants.SERVER_SETUP_CTA_CLICKED, obj);
    guild(hubProgressBarCompletedSteps[13]).skipHubProgress(guild.id);
    callback2();
  }
  const tmp = callback2();
  let obj = arg1(dependencyMap[10]);
  const hubProgressBarCompletedSteps = obj.useHubProgressBarCompletedSteps(guild);
  const dependencyMap = hubProgressBarCompletedSteps;
  const size = hubProgressBarCompletedSteps.size;
  React = size;
  const tmp2 = 100 === Math.max(arg1(dependencyMap[11]).MIN_PROGRESS_PERCENT, 100 * size / closure_7);
  let closure_4 = React.useRef(analyticsSource);
  const effect = React.useEffect(() => {
    closure_4.current = analyticsSource;
  });
  const items = [guild.id];
  const effect1 = React.useEffect(() => {
    let obj = analyticsSource(hubProgressBarCompletedSteps[12]);
    obj = { type: "Hub Progress Action Sheet", guild_id: guild.id, source: ref.current };
    obj.track(constants.OPEN_MODAL, obj);
  }, items);
  const intl = arg1(dependencyMap[14]).intl;
  const string = intl.string;
  const t = arg1(dependencyMap[14]).t;
  if (tmp2) {
    let stringResult = string(t.zQ4gGo);
  } else {
    stringResult = string(t.hRVjpT);
  }
  obj = { style: tmp.container };
  obj = { title: stringResult };
  const intl2 = arg1(dependencyMap[14]).intl;
  obj.subtitle = intl2.format(arg1(dependencyMap[14]).t.l6iRLs, {
    numFinished: size,
    total: closure_7,
    stepsHook(children) {
      return callback(guild(hubProgressBarCompletedSteps[16]).Text, { children }, arg1);
    }
  });
  const items1 = [callback(arg1(dependencyMap[15]).GuildProgressHeader, obj), , , , ];
  const obj2 = {
    onPress() {
      const defaultChannel = store.getDefaultChannel(guild.id);
      if (null != defaultChannel) {
        let obj = guild(hubProgressBarCompletedSteps[18]);
        obj = {};
        obj = { scrollBehavior: constants4.GUILD_LIST_TOP };
        obj.state = obj;
        obj.transitionTo(closure_11.CHANNEL(guild.id, defaultChannel.id), obj);
        analyticsSource(hubProgressBarCompletedSteps[8]).hideActionSheet(closure_6);
        const obj4 = analyticsSource(hubProgressBarCompletedSteps[8]);
      }
    },
    source: importDefault(dependencyMap[19])
  };
  const intl3 = arg1(dependencyMap[14]).intl;
  obj2.title = intl3.string(arg1(dependencyMap[14]).t.iNR25n);
  obj2.isCompleted = hubProgressBarCompletedSteps.has(arg1(dependencyMap[20]).HubProgressStep.JOIN_GUILD);
  obj2.analyticsSetupType = constants2.HUB_PROGRESS;
  obj2.analyticsAction = constants.JOIN_GUILD;
  items1[1] = callback(importDefault(dependencyMap[17]), obj2);
  const obj3 = {
    onPress() {
      const defaultChannel = store.getDefaultChannel(guild.id);
      const channels = store.getChannels(guild.id);
      if (tmp3) {
        const obj = guild(hubProgressBarCompletedSteps[21]);
        const result = obj.handleOpenInviteActionsheet(guild, defaultChannel.id, channels, constants3.HUB_PROGRESS);
      }
    }
  };
  const obj1 = {
    numFinished: size,
    total: closure_7,
    stepsHook(children) {
      return callback(guild(hubProgressBarCompletedSteps[16]).Text, { children }, arg1);
    }
  };
  const tmp6 = closure_16;
  const tmp8 = callback;
  const tmp9 = importDefault(dependencyMap[17]);
  obj3.source = importDefault(dependencyMap[22]);
  const intl4 = arg1(dependencyMap[14]).intl;
  obj3.title = intl4.string(arg1(dependencyMap[14]).t.3NlTYU);
  obj3.isCompleted = hubProgressBarCompletedSteps.has(arg1(dependencyMap[20]).HubProgressStep.INVITE_USER);
  obj3.analyticsSetupType = constants2.HUB_PROGRESS;
  obj3.analyticsAction = constants.INVITE;
  items1[2] = callback(importDefault(dependencyMap[17]), obj3);
  const obj4 = {
    onPress() {
      if (!hubProgressBarCompletedSteps.has(guild(hubProgressBarCompletedSteps[20]).HubProgressStep.CONTACT_SYNC)) {
        guild(hubProgressBarCompletedSteps[23]).openContactSyncModal({}, constants2.HUB_PROGRESS);
        callback2();
        const obj = guild(hubProgressBarCompletedSteps[23]);
      }
    }
  };
  const tmp10 = importDefault(dependencyMap[17]);
  obj4.source = importDefault(dependencyMap[24]);
  const intl5 = arg1(dependencyMap[14]).intl;
  obj4.title = intl5.string(arg1(dependencyMap[14]).t.HFvFte);
  obj4.isCompleted = hubProgressBarCompletedSteps.has(arg1(dependencyMap[20]).HubProgressStep.CONTACT_SYNC);
  obj4.analyticsSetupType = constants2.HUB_PROGRESS;
  obj4.analyticsAction = constants.CONTACT_SYNC;
  items1[3] = callback(importDefault(dependencyMap[17]), obj4);
  const obj5 = { style: items2 };
  const items2 = [tmp.footer];
  if (tmp2) {
    const obj6 = {};
    const intl7 = tmp13(tmp14[14]).intl;
    obj6.text = intl7.string(tmp13(tmp14[14]).t.0/5zhg);
    obj6.onPress = handleFinishPress;
    let tmp12Result = tmp12(tmp13(tmp14[25]).Button, obj6);
  } else {
    const obj7 = { accessibilityRole: "button", onPress: handleFinishPress };
    const obj8 = {};
    const intl6 = tmp13(tmp14[14]).intl;
    obj8.children = intl6.string(tmp13(tmp14[14]).t.9E36wf);
    obj7.children = tmp12(tmp13(tmp14[16]).Text, obj8);
    tmp12Result = tmp12(tmp13(tmp14[26]).PressableOpacity, obj7);
  }
  obj5.children = tmp12Result;
  items1[4] = tmp8(closure_4, obj5);
  obj.children = items1;
  const children = tmp6(tmp7, obj);
  return callback(arg1(dependencyMap[27]).BottomSheet, { startExpanded: true, children });
};
