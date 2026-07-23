// Module ID: 11509
// Function ID: 89659
// Name: GuildProgressHeader
// Dependencies: [5, 31, 27, 8439, 1907, 11502, 653, 33, 4130, 689, 566, 11507, 3830, 675, 11510, 11511, 8481, 6289, 1212, 8438, 4674, 5917, 4138, 4098, 1207, 6409, 11512, 5484, 5907, 4126, 4543, 4660, 5500, 1273, 2]
// Exports: default

// Module 11509 (GuildProgressHeader)
import closure_3 from "Steps";
import PressableBase from "PressableBase";
import { View } from "QUICK_SWITCHER";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import Steps from "Steps";
import ME from "ME";
import jsxProd from "Button";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_8;
let closure_9;
const require = arg1;
class GuildProgressHeader {
  constructor(arg0) {
    ({ title, subtitle } = global);
    tmp = c16();
    obj = { style: tmp.header };
    obj = { style: null, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header" };
    obj.style = tmp.headerTitle;
    obj.children = title;
    items = [, ];
    items[0] = jsx(require("Text").Text, obj);
    obj1 = { style: tmp.headerSubtitle, children: subtitle };
    items[1] = jsx(require("Button").LegacyText, obj1);
    obj.children = items;
    return jsxs(View, obj);
  }
}
({ AnalyticsSetupTypes: closure_8, AnalyticsActions: closure_9 } = Steps);
({ UPLOAD_MEDIUM_SIZE: closure_10, AnalyticEvents: closure_11, ComponentActions: closure_12, InstantInviteSources: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { padding: 16 }, header: { alignItems: "center", paddingTop: 8, paddingBottom: 16 }, headerTitle: { marginBottom: 8, textAlign: "center" } };
_createForOfIteratorHelperLoose = { fontSize: 14, fontWeight: "500", color: require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE };
_createForOfIteratorHelperLoose.headerSubtitle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.footer = { marginTop: 4 };
_createForOfIteratorHelperLoose.center = { alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx");

export default function GuildProgressActionSheet(guild) {
  let guildBoosted;
  let guildMessaged;
  let guildPersonalized;
  let guildPopulated;
  let showBoostStep;
  guild = guild.guild;
  let numFinished;
  let totalSteps;
  let id;
  function _addServerIcon() {
    // CreateGeneratorClosureLongIndex (0x67)
    const obj = totalSteps(tmp);
    return obj(...arguments);
  }
  function handleDismissGuildProgress() {
    let obj = lib(numFinished[14]);
    obj.dismissProgress(guild.id);
    lib(numFinished[23]).hideActionSheet("guild-progress-" + guild.id);
    const obj2 = lib(numFinished[23]);
    obj = { action: outer1_9.DISMISS_GUILD_PROGRESS, setup_type: outer1_8.GUILD_PROGRESS, num_total_actions: totalSteps, num_actions_completed: numFinished };
    lib(numFinished[13]).track(outer1_11.SERVER_SETUP_CTA_CLICKED, obj);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = guild(numFinished[10]);
  const items = [closure_7];
  const importDefault = obj.useStateFromStores(items, () => outer1_7.getDefaultChannel(guild.id));
  let obj1 = guild(numFinished[11]);
  const iOSCompletionStates = obj1.useIOSCompletionStates(guild);
  numFinished = iOSCompletionStates.numFinished;
  totalSteps = iOSCompletionStates.totalSteps;
  ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted, showBoostStep } = iOSCompletionStates);
  let obj2 = guild(numFinished[10]);
  const items1 = [_addServerIcon];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => _addServerIcon.getErrors());
  id = guild.id;
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = stateFromStoresObject.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      guild(numFinished[12]).presentError(stateFromStoresObject.message);
      const obj = guild(numFinished[12]);
    }
  }, items2);
  const items3 = [id];
  const effect = stateFromStoresObject.useEffect(() => {
    let obj = lib(numFinished[13]);
    obj = { type: "Guild Progress Sheet", guild_id: id };
    obj.track(outer1_11.OPEN_POPOUT, obj);
  }, items3);
  const items4 = [id, totalSteps, numFinished];
  const effect1 = stateFromStoresObject.useEffect(() => {
    if (numFinished === totalSteps) {
      const result = lib(numFinished[14]).markCompletedProgressSeen(id);
      const obj = lib(numFinished[14]);
    }
  }, items4);
  obj = {
    onPress: function inviteFriends() {
      if (null != closure_1) {
        let obj = guild(numFinished[16]);
        obj = { source: outer1_13.GUILD_PROGRESS };
        const result = obj.showInstantInviteActionSheet(closure_1, obj);
      }
    }
  };
  obj = { uri: importDefault(numFinished[17]) };
  obj.source = obj;
  const intl = guild(numFinished[18]).intl;
  obj.title = intl.string(guild(numFinished[18]).t.q9n0Ta);
  obj.isCompleted = guildPopulated;
  obj.analyticsSetupType = constants.GUILD_PROGRESS;
  obj.analyticsAction = constants2.INVITE;
  const tmp7 = importDefault(numFinished[15]);
  obj1 = {
    onPress: function addServerIcon() {
      return _addServerIcon(...arguments);
    }
  };
  obj2 = {};
  const tmp8 = callback(importDefault(numFinished[15]), obj);
  obj2.uri = importDefault(numFinished[21]);
  obj1.source = obj2;
  const intl2 = guild(numFinished[18]).intl;
  obj1.title = intl2.string(guild(numFinished[18]).t.DWB2YZ);
  obj1.isCompleted = guildPersonalized;
  obj1.analyticsSetupType = constants.GUILD_PROGRESS;
  obj1.analyticsAction = constants2.PERSONALIZE_SERVER;
  const tmp9 = importDefault(numFinished[15]);
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
      ComponentDispatch.dispatch(outer1_12.TEXTAREA_FOCUS, tmp6);
    }
  };
  const obj4 = {};
  const tmp10 = callback(importDefault(numFinished[15]), obj1);
  obj4.uri = importDefault(numFinished[25]);
  obj3.source = obj4;
  const intl3 = guild(numFinished[18]).intl;
  obj3.title = intl3.string(guild(numFinished[18]).t.dNktpr);
  obj3.isCompleted = guildMessaged;
  obj3.analyticsSetupType = constants.GUILD_PROGRESS;
  obj3.analyticsAction = constants2.SEND_MESSAGE;
  let tmp13 = null;
  const tmp11 = importDefault(numFinished[15]);
  if (showBoostStep) {
    const obj5 = {
      onPress: function goToBoosts() {
          let obj = guild(numFinished[11]);
          obj.hideActionSheet(id);
          obj = { guildId: id, analyticsLocation: lib(numFinished[27]).GUILD_POWERUPS_GUILD_PROGRESS };
          lib(numFinished[26])(obj);
        }
    };
    const obj6 = { uri: importDefault(numFinished[28]) };
    obj5.source = obj6;
    const intl4 = guild(numFinished[18]).intl;
    obj5.title = intl4.string(guild(numFinished[18]).t["6Qbqxw"]);
    obj5.isCompleted = guildBoosted;
    obj5.analyticsSetupType = constants.GUILD_PROGRESS;
    obj5.analyticsAction = constants2.BOOST;
    tmp13 = callback(importDefault(numFinished[15]), obj5);
    const tmp17 = importDefault(numFinished[15]);
  }
  const obj7 = { style: tmp.container };
  const obj8 = {};
  const intl5 = guild(numFinished[18]).intl;
  obj8.title = intl5.string(guild(numFinished[18]).t["tu/tr8"]);
  const intl6 = guild(numFinished[18]).intl;
  obj8.subtitle = intl6.format(guild(numFinished[18]).t.l6iRLs, {
    numFinished,
    total: totalSteps,
    stepsHook(children) {
      const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
      return outer1_14(guild(numFinished[29]).Text, obj, arg1);
    }
  });
  const items5 = [callback(GuildProgressHeader, obj8), tmp8, tmp10, callback(importDefault(numFinished[15]), obj3), tmp13, ];
  const obj10 = {};
  const items6 = [tmp.footer, ];
  let center = null;
  if (numFinished !== totalSteps) {
    center = tmp.center;
  }
  items6[1] = center;
  obj10.style = items6;
  if (numFinished === totalSteps) {
    const obj11 = { variant: "primary", grow: true, onPress: handleDismissGuildProgress };
    const intl8 = tmp28(tmp29[18]).intl;
    obj11.text = intl8.string(tmp28(tmp29[18]).t["0/5zhg"]);
    let tmp27Result = tmp27(tmp28(tmp29[30]).Button, obj11);
  } else {
    const obj12 = { accessibilityRole: "button", onPress: handleDismissGuildProgress };
    const obj13 = { variant: "text-sm/medium", color: "text-default" };
    const intl7 = tmp28(tmp29[18]).intl;
    obj13.children = intl7.string(tmp28(tmp29[18]).t["9E36wf"]);
    obj12.children = callback(tmp28(tmp29[29]).Text, obj13);
    tmp27Result = tmp27(tmp28(tmp29[31]).PressableOpacity, obj12);
  }
  obj10.children = tmp27Result;
  items5[5] = callback(id, obj10);
  obj7.children = items5;
  const obj9 = {
    numFinished,
    total: totalSteps,
    stepsHook(children) {
      const obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
      return outer1_14(guild(numFinished[29]).Text, obj, arg1);
    }
  };
  const tmp12 = callback(importDefault(numFinished[15]), obj3);
  const tmp22 = closure_15;
  const tmp23 = id;
  const tmp24 = callback;
  const tmp25 = id;
  const obj14 = { showGradient: true, startExpanded: true, children: closure_15(id, obj7) };
  return callback(guild(numFinished[32]).ActionSheet, obj14);
};
export { GuildProgressHeader };
