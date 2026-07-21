// Module ID: 11498
// Function ID: 89596
// Name: GuildProgressHeader
// Dependencies: []
// Exports: default

// Module 11498 (GuildProgressHeader)
class GuildProgressHeader {
  constructor(arg0) {
    ({ title, subtitle } = global);
    tmp = closure_16();
    obj = { style: tmp.header };
    obj = { style: tmp.headerTitle, children: title };
    items = [, ];
    items[0] = jsx(arg1(dependencyMap[29]).Text, obj);
    obj1 = { style: tmp.headerSubtitle, children: subtitle };
    items[1] = jsx(arg1(dependencyMap[33]).LegacyText, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ AnalyticsSetupTypes: closure_8, AnalyticsActions: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
({ UPLOAD_MEDIUM_SIZE: closure_10, AnalyticEvents: closure_11, ComponentActions: closure_12, InstantInviteSources: closure_13 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { container: { padding: 16 }, header: {}, headerTitle: { "Null": null, "Null": null } };
obj = { color: importDefault(dependencyMap[9]).colors.TEXT_SUBTLE };
obj.headerSubtitle = obj;
obj.footer = { marginTop: 4 };
obj.center = { alignItems: "center" };
let closure_16 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx");

export default function GuildProgressActionSheet(guild) {
  let guildBoosted;
  let guildMessaged;
  let guildPersonalized;
  let guildPopulated;
  let showBoostStep;
  guild = guild.guild;
  const arg1 = guild;
  let dependencyMap;
  let closure_3;
  let View;
  function _addServerIcon() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = totalSteps(tmp);
    const _addServerIcon = obj;
    return obj(...arguments);
  }
  function handleDismissGuildProgress() {
    let obj = lib(numFinished[14]);
    obj.dismissProgress(guild.id);
    lib(numFinished[23]).hideActionSheet("guild-progress-" + guild.id);
    const obj2 = lib(numFinished[23]);
    obj = { action: constants2.DISMISS_GUILD_PROGRESS, setup_type: constants.GUILD_PROGRESS, num_total_actions: totalSteps, num_actions_completed: numFinished };
    lib(numFinished[13]).track(constants3.SERVER_SETUP_CTA_CLICKED, obj);
  }
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_7];
  const importDefault = obj.useStateFromStores(items, () => defaultChannel.getDefaultChannel(guild.id));
  let obj1 = arg1(dependencyMap[11]);
  const iOSCompletionStates = obj1.useIOSCompletionStates(guild);
  const numFinished = iOSCompletionStates.numFinished;
  dependencyMap = numFinished;
  const totalSteps = iOSCompletionStates.totalSteps;
  closure_3 = totalSteps;
  ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted, showBoostStep } = iOSCompletionStates);
  let obj2 = arg1(dependencyMap[10]);
  const items1 = [_addServerIcon];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => _addServerIcon.getErrors());
  const React = stateFromStoresObject;
  const id = guild.id;
  View = id;
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = React.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      guild(numFinished[12]).presentError(stateFromStoresObject.message);
      const obj = guild(numFinished[12]);
    }
  }, items2);
  const items3 = [id];
  const effect = React.useEffect(() => {
    let obj = lib(numFinished[13]);
    obj = { type: "Guild Progress Sheet", guild_id: id };
    obj.track(constants3.OPEN_POPOUT, obj);
  }, items3);
  const items4 = [id, totalSteps, numFinished];
  const effect1 = React.useEffect(() => {
    if (numFinished === totalSteps) {
      const result = lib(numFinished[14]).markCompletedProgressSeen(id);
      const obj = lib(numFinished[14]);
    }
  }, items4);
  obj = {
    onPress: function inviteFriends() {
      if (null != closure_1) {
        let obj = guild(numFinished[16]);
        obj = { source: constants5.GUILD_PROGRESS };
        const result = obj.showInstantInviteActionSheet(closure_1, obj);
      }
    }
  };
  obj = { uri: importDefault(dependencyMap[17]) };
  obj.source = obj;
  const intl = arg1(dependencyMap[18]).intl;
  obj.title = intl.string(arg1(dependencyMap[18]).t.q9n0Ta);
  obj.isCompleted = guildPopulated;
  obj.analyticsSetupType = constants.GUILD_PROGRESS;
  obj.analyticsAction = constants2.INVITE;
  const tmp7 = importDefault(dependencyMap[15]);
  obj1 = {
    onPress: function addServerIcon() {
      return _addServerIcon(...arguments);
    }
  };
  obj2 = {};
  const tmp8 = callback(importDefault(dependencyMap[15]), obj);
  obj2.uri = importDefault(dependencyMap[21]);
  obj1.source = obj2;
  const intl2 = arg1(dependencyMap[18]).intl;
  obj1.title = intl2.string(arg1(dependencyMap[18]).t.DWB2YZ);
  obj1.isCompleted = guildPersonalized;
  obj1.analyticsSetupType = constants.GUILD_PROGRESS;
  obj1.analyticsAction = constants2.PERSONALIZE_SERVER;
  const tmp9 = importDefault(dependencyMap[15]);
  const obj3 = {
    onPress: function goToChannel() {
      if (null != lib) {
        let obj = guild(numFinished[22]);
        obj.transitionToChannel(lib.id);
      }
      lib(numFinished[23]).hideActionSheet();
      let tmp6;
      if (null != lib) {
        obj = { channelId: lib.id };
        tmp6 = obj;
      }
      const ComponentDispatch = guild(numFinished[24]).ComponentDispatch;
      ComponentDispatch.dispatch(constants4.TEXTAREA_FOCUS, tmp6);
    }
  };
  const obj4 = {};
  const tmp10 = callback(importDefault(dependencyMap[15]), obj1);
  obj4.uri = importDefault(dependencyMap[25]);
  obj3.source = obj4;
  const intl3 = arg1(dependencyMap[18]).intl;
  obj3.title = intl3.string(arg1(dependencyMap[18]).t.dNktpr);
  obj3.isCompleted = guildMessaged;
  obj3.analyticsSetupType = constants.GUILD_PROGRESS;
  obj3.analyticsAction = constants2.SEND_MESSAGE;
  let tmp13 = null;
  const tmp11 = importDefault(dependencyMap[15]);
  if (showBoostStep) {
    const obj5 = {
      onPress: function goToBoosts() {
          let obj = guild(numFinished[11]);
          obj.hideActionSheet(id);
          obj = { guildId: id, analyticsLocation: lib(numFinished[27]).GUILD_POWERUPS_GUILD_PROGRESS };
          lib(numFinished[26])(obj);
        }
    };
    const obj6 = { uri: importDefault(dependencyMap[28]) };
    obj5.source = obj6;
    const intl4 = arg1(dependencyMap[18]).intl;
    obj5.title = intl4.string(arg1(dependencyMap[18]).t.6Qbqxw);
    obj5.isCompleted = guildBoosted;
    obj5.analyticsSetupType = constants.GUILD_PROGRESS;
    obj5.analyticsAction = constants2.BOOST;
    tmp13 = callback(importDefault(dependencyMap[15]), obj5);
    const tmp17 = importDefault(dependencyMap[15]);
  }
  const obj7 = { style: tmp.container };
  const obj8 = {};
  const intl5 = arg1(dependencyMap[18]).intl;
  obj8.title = intl5.string(arg1(dependencyMap[18]).t.tu/tr8);
  const intl6 = arg1(dependencyMap[18]).intl;
  obj8.subtitle = intl6.format(arg1(dependencyMap[18]).t.l6iRLs, {
    numFinished,
    total: totalSteps,
    stepsHook(children) {
      return callback(guild(numFinished[29]).Text, { children }, arg1);
    }
  });
  const items5 = [callback(GuildProgressHeader, obj8), tmp8, tmp10, callback(importDefault(dependencyMap[15]), obj3), tmp13, ];
  const obj10 = {};
  const items6 = [tmp.footer, ];
  let center = null;
  if (numFinished !== totalSteps) {
    center = tmp.center;
  }
  items6[1] = center;
  obj10.style = items6;
  if (numFinished === totalSteps) {
    const obj11 = { "Null": null, "Null": null, onPress: handleDismissGuildProgress };
    const intl8 = tmp28(tmp29[18]).intl;
    obj11.text = intl8.string(tmp28(tmp29[18]).t.0/5zhg);
    let tmp27Result = tmp27(tmp28(tmp29[30]).Button, obj11);
  } else {
    const obj12 = { accessibilityRole: "button", onPress: handleDismissGuildProgress };
    const obj13 = {};
    const intl7 = tmp28(tmp29[18]).intl;
    obj13.children = intl7.string(tmp28(tmp29[18]).t.9E36wf);
    obj12.children = callback(tmp28(tmp29[29]).Text, obj13);
    tmp27Result = tmp27(tmp28(tmp29[31]).PressableOpacity, obj12);
  }
  obj10.children = tmp27Result;
  items5[5] = callback(View, obj10);
  obj7.children = items5;
  const obj9 = {
    numFinished,
    total: totalSteps,
    stepsHook(children) {
      return callback(guild(numFinished[29]).Text, { children }, arg1);
    }
  };
  const tmp12 = callback(importDefault(dependencyMap[15]), obj3);
  const tmp22 = closure_15;
  const tmp23 = View;
  const tmp24 = callback;
  const tmp25 = View;
  const obj14 = { marginVertical: null, GUILDS_EMPTY_NUX: null, children: closure_15(View, obj7) };
  return callback(arg1(dependencyMap[32]).ActionSheet, obj14);
};
export { GuildProgressHeader };
