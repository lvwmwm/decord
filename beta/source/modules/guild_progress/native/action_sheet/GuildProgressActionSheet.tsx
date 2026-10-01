// Module ID: 11969
// Function ID: 11970
// Name: GuildProgressActionSheet
// Dependencies: [5, 19, 17, 9049, 4467, 11962, 1074, 21, 4836, 576, 504, 11967, 4527, 1241, 11970, 11971, 9275, 11972, 1115, 9048, 5450, 11973, 4847, 4800, 1110, 11974, 11975, 6603, 12084, 4832, 5281, 5435, 6618, 1177, 2]
// Exports: default

// Module 11969 (GuildProgressActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1110 */;
import native from "native" /* 1177 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import transitionToChannel from "transitionToChannel" /* 4847 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6603 */;
import instant_invite_InstantInviteUtils from "instant_invite/InstantInviteUtils" /* 9275 */;
import GuildProgressUtils from "GuildProgressUtils" /* 11967 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 11970 */;
import openGuildPowerupsModalDefault from "openGuildPowerupsModal" /* 11975 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9049 */;
import GuildChannelStore from "GuildChannelStore" /* 4467 */;
import GuildProgressConstants from "GuildProgressConstants" /* 11962 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c2, c3, importDefault;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let obj2;
let unpackModuleId;
class GuildProgressHeader {
  constructor(arg0) {
    let items;
    let subtitle;
    let title;
    ({ title, subtitle } = arg0);
    const tmp = closure_16();
    const obj = { style: tmp.header, children: items };
    items = [, ];
    const obj2 = { style: tmp.headerTitle, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: title };
    items[0] = authStore2(Text_Text.Text, obj2);
    const obj3 = { style: tmp.headerSubtitle, children: subtitle };
    items[1] = authStore2(native.LegacyText, obj3);
    return closure_15(View, obj);
  }
}
const View = react_native.View;
({ AnalyticsSetupTypes: metroImportAll, AnalyticsActions: c9 } = GuildProgressConstants);
({ UPLOAD_MEDIUM_SIZE: c10, AnalyticEvents: unpackModuleId, ComponentActions: closure_12, InstantInviteSources: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let obj = { container: { padding: 16 }, header: { alignItems: "center", paddingTop: 8, paddingBottom: 16 }, headerTitle: { marginBottom: 8, textAlign: "center" }, headerSubtitle: obj2, footer: { marginTop: 4 }, center: { alignItems: "center" } };
obj2 = { fontSize: 14, fontWeight: "500", color: nativeDefault.colors.TEXT_SUBTLE };
const authStore3 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_progress/native/action_sheet/GuildProgressActionSheet.tsx");

export default function GuildProgressActionSheet(guild) {
  let Text;
  let guildBoosted;
  let guildMessaged;
  let guildPersonalized;
  let guildPopulated;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let items5;
  let obj11;
  let obj14;
  let obj18;
  let obj5;
  let obj7;
  let obj9;
  let tmp9Result;
  let user;
  guild = guild.guild;
  let numFinished;
  let obj = function _addServerIcon() {
    obj = _asyncToGenerator(async (arg0, value) => {
      let closure_0;
      let closure_1;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let base64;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              base64 = undefined;
              const obj6 = tmp4(c2[19]);
              obj6.init(closure_2_5);
              const obj7 = tmp(c2[11]);
              obj7.hideActionSheet(id.id);
              const obj4 = { size };
              const obj8 = tmp4(c2[20]);
              c2 = 1;
              c3 = 1;
              const obj5 = { value: obj8.openImagePicker(obj4), done: false };
              return obj5;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            base64 = value.base64;
            if (null != base64) {
              obj = tmp4(c2[19]);
              obj.updateIcon(closure_129_5, base64);
            }
            c3 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp15) {
          c3 = 3;
          throw tmp15;
        }
      }
    });
    return obj(...arguments);
  };
  const tmp = closure_16();
  let tmp2 = guild;
  const tmp3 = numFinished;
  obj = guild(numFinished[10]);
  const items = [GuildChannelStore];
  importDefault = obj.useStateFromStores(items, () => GuildChannelStore.getDefaultChannel(guild.id));
  let obj2 = guild(numFinished[11]);
  const iOSCompletionStates = obj2.useIOSCompletionStates(guild);
  numFinished = iOSCompletionStates.numFinished;
  const totalSteps = iOSCompletionStates.totalSteps;
  ({ guildPopulated, guildPersonalized, guildMessaged, guildBoosted } = iOSCompletionStates);
  let obj3 = guild(numFinished[10]);
  const items1 = [obj];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items1, () => obj.getErrors());
  const id = guild.id;
  const items2 = [stateFromStoresObject.message];
  const layoutEffect = stateFromStoresObject.useLayoutEffect(() => {
    if (null != stateFromStoresObject.message) {
      obj = ToastUtils;
      obj.presentError(tmp.message);
    }
  }, items2);
  const items3 = [id];
  const effect = stateFromStoresObject.useEffect(() => {
    obj = AnalyticsUtilsDefault;
    const obj2 = { type: "Guild Progress Sheet", guild_id: id };
    obj.track(unpackModuleId.OPEN_POPOUT, obj2);
  }, items3);
  const items4 = [id, totalSteps, numFinished];
  const effect1 = stateFromStoresObject.useEffect(() => {
    if (numFinished === totalSteps) {
      obj = GuildProgressActionCreatorsDefault;
      const result = obj.markCompletedProgressSeen(id);
    }
  }, items4);
  let obj4 = {
    onPress: function inviteFriends() {
      if (null != user) {
        const obj2 = { source: map1.GUILD_PROGRESS };
        obj = instant_invite_InstantInviteUtils;
        const result = obj.showInstantInviteActionSheet(tmp, obj2);
      }
    },
    source: obj5,
    title: intl.string(guild(numFinished[18]).t.q9n0Ta),
    isCompleted: guildPopulated,
    analyticsSetupType: constants.GUILD_PROGRESS,
    analyticsAction: constants2.INVITE
  };
  obj5 = { uri: require("module_11972") };
  const tmp10 = require("ProgressItem");
  intl = guild(numFinished[18]).intl;
  const tmp11 = closure_14(tmp10, obj4);
  let obj6 = {
    onPress: function addServerIcon() {
      return obj(...arguments);
    },
    source: obj7,
    title: intl2.string(guild(numFinished[18]).t.DWB2YZ),
    isCompleted: guildPersonalized,
    analyticsSetupType: constants.GUILD_PROGRESS,
    analyticsAction: constants2.PERSONALIZE_SERVER
  };
  obj7 = { uri: require("module_11973") };
  const tmp12 = require("ProgressItem");
  intl2 = guild(numFinished[18]).intl;
  const tmp13 = closure_14(tmp12, obj6);
  let obj8 = {
    onPress: function goToChannel() {
      if (null != user) {
        obj = transitionToChannel;
        obj.transitionToChannel(user.id);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
      let tmp6;
      if (null != user) {
        tmp6 = { channelId: user.id };
        const obj3 = { channelId: user.id };
      }
      const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
      ComponentDispatch.dispatch(constants2.TEXTAREA_FOCUS, tmp6);
    },
    source: obj9,
    title: intl3.string(guild(numFinished[18]).t.dNktpr),
    isCompleted: guildMessaged,
    analyticsSetupType: constants.GUILD_PROGRESS,
    analyticsAction: constants2.SEND_MESSAGE
  };
  obj9 = { uri: require("module_11974") };
  const tmp14 = require("ProgressItem");
  intl3 = guild(numFinished[18]).intl;
  const tmp15 = closure_14(tmp14, obj8);
  const obj10 = {
    onPress: function goToBoosts() {
      obj = GuildProgressUtils;
      obj.hideActionSheet(id);
      const obj2 = { guildId: id, analyticsLocation: AnalyticsLocationDefault.GUILD_POWERUPS_GUILD_PROGRESS };
      const tmp2 = openGuildPowerupsModalDefault;
      tmp2(obj2);
    },
    source: obj11,
    title: intl4.string(guild(numFinished[18]).t["6Qbqxw"]),
    isCompleted: guildBoosted,
    analyticsSetupType: constants.GUILD_PROGRESS,
    analyticsAction: constants2.BOOST
  };
  obj11 = { uri: require("module_12084") };
  const tmp16 = require("ProgressItem");
  intl4 = guild(numFinished[18]).intl;
  const obj12 = { style: tmp.container, children: items5 };
  const obj13 = { title: intl5.string(guild(numFinished[18]).t["tu/tr8"]), subtitle: intl6.format(guild(numFinished[18]).t.l6iRLs, obj14) };
  const tmp17 = closure_14(tmp16, obj10);
  intl5 = guild(numFinished[18]).intl;
  intl6 = guild(numFinished[18]).intl;
  obj14 = {
    numFinished,
    total: totalSteps,
    stepsHook(children, arg1) {
      obj = { variant: "text-sm/medium", color: "mobile-text-heading-primary", children };
      return closure_1_14(guild(numFinished[29]).Text, obj, arg1);
    }
  };
  items5 = [closure_14(GuildProgressHeader, obj13), tmp11, tmp13, tmp15, tmp17, ];
  const items6 = [tmp.footer, ];
  let center = null;
  const tmp19 = closure_15;
  if (numFinished !== totalSteps) {
    center = tmp.center;
  }
  function handleDismissGuildProgress() {
    obj = GuildProgressActionCreatorsDefault;
    obj.dismissProgress(guild.id);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideActionSheet("guild-progress-" + guild.id);
    const obj3 = AnalyticsUtilsDefault;
    const obj4 = { action: constants.DISMISS_GUILD_PROGRESS, setup_type: metroImportAll.GUILD_PROGRESS, num_total_actions: totalSteps, num_actions_completed: numFinished };
    obj3.track(unpackModuleId.SERVER_SETUP_CTA_CLICKED, obj4);
  }
  const obj15 = { style: items6, children: tmp9Result };
  items6[1] = center;
  if (numFinished === totalSteps) {
    const obj16 = { variant: "primary", grow: true, onPress: handleDismissGuildProgress, text: intl8.string(tmp2(tmp3[18]).t["0/5zhg"]) };
    const Button = tmp2(tmp3[30]).Button;
    intl8 = tmp2(tmp3[18]).intl;
    tmp9Result = tmp9(Button, obj16);
  } else {
    const obj17 = { accessibilityRole: "button", onPress: handleDismissGuildProgress, children: closure_14(Text, obj18) };
    const PressableOpacity = tmp2(tmp3[31]).PressableOpacity;
    obj18 = { variant: "text-sm/medium", color: "text-default", children: intl7.string(tmp2(tmp3[18]).t["9E36wf"]) };
    Text = tmp2(tmp3[29]).Text;
    intl7 = tmp2(tmp3[18]).intl;
    tmp9Result = tmp9(PressableOpacity, obj17);
  }
  items5[5] = closure_14(id, obj15);
  const children = tmp19(tmp20, obj12);
  return closure_14(tmp2(tmp3[32]).ActionSheet, { showGradient: true, startExpanded: true, children });
};
export { GuildProgressHeader };
