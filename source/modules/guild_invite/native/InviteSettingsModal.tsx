// Module ID: 16535
// Function ID: 128820
// Name: AdvancedInstantInviteScreen
// Dependencies: [57, 31, 1348, 8527, 1838, 3758, 653, 33, 4130, 689, 1456, 566, 44, 22, 16536, 8533, 4470, 1212, 4559, 686, 5788, 7636, 16537, 8528, 480, 5087, 5517, 2]
// Exports: default

// Module 16535 (AdvancedInstantInviteScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_9;
const require = arg1;
function AdvancedInstantInviteScreen() {
  let channel;
  let guild;
  let inviteSettings;
  let settings;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [_isNativeReflectConstruct, closure_6, closure_7];
  const stateFromStoresObject = navigation(566).useStateFromStoresObject(items, () => {
    const pendingSettings = outer1_6.getPendingSettings();
    let guildId;
    channel(tmp8[12])(null != pendingSettings, "Received null pending invite settings");
    const inviteSettings = outer1_6.getInviteSettings();
    channel(tmp8[12])(null != inviteSettings, "Received null invite settings");
    channel = outer1_5.getChannel(pendingSettings.channelId);
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const obj = { settings: pendingSettings, inviteSettings, channel, guild: outer1_7.getGuild(guildId) };
    return obj;
  });
  ({ settings, channel } = stateFromStoresObject);
  ({ inviteSettings, guild } = stateFromStoresObject);
  const tmp4 = callback(React.useState(channel), 2);
  const first = tmp4[0];
  let tmp6 = null != channel;
  if (tmp6) {
    tmp6 = channel !== first;
  }
  if (tmp6) {
    tmp4[1](channel);
  }
  let obj2 = navigation(566);
  const tmp8 = !navigation(22).isEqual(settings, inviteSettings);
  const dependencyMap = tmp8;
  const items1 = [channel];
  const effect = React.useEffect(() => {
    if (null == channel) {
      const guildId = outer1_6.getGuildId();
      let invitableChannelForGuild = null;
      if (null != guildId) {
        let obj = navigation(tmp8[14]);
        invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
      }
      if (null != invitableChannelForGuild) {
        obj = { channelId: invitableChannelForGuild.channel.id };
        channel(tmp8[15]).updateSettings(obj);
        const obj2 = channel(tmp8[15]);
      } else {
        obj = {};
        const intl = navigation(tmp8[17]).intl;
        obj.title = intl.string(navigation(tmp8[17]).t.VINpSK);
        const intl2 = navigation(tmp8[17]).intl;
        obj.body = intl2.string(navigation(tmp8[17]).t.kQ6fit);
        obj.onConfirm = channel(tmp8[15]).close;
        channel(tmp8[16]).show(obj);
        const obj4 = channel(tmp8[16]);
      }
    }
  }, items1);
  let obj3 = navigation(22);
  const unmountEffect = navigation(4559).useUnmountEffect(() => {
    channel(tmp8[19]).wait(channel(tmp8[15]).resetSettings);
  });
  const items2 = [channel];
  callback = React.useCallback(() => {
    if (null != channel) {
      if (outer1_8.can(outer1_10.CREATE_INSTANT_INVITE, channel)) {
        const invite = channel(tmp8[15]).createInvite("IOS Regenerate");
        const obj3 = channel(tmp8[15]);
        channel(tmp8[15]).close();
        const obj4 = channel(tmp8[15]);
      }
    }
    let obj = channel(tmp8[16]);
    obj = {};
    const intl = navigation(tmp8[17]).intl;
    obj.title = intl.string(navigation(tmp8[17]).t.VINpSK);
    const intl2 = navigation(tmp8[17]).intl;
    obj.body = intl2.string(navigation(tmp8[17]).t.RiiKV0);
    obj.onConfirm = channel(tmp8[15]).close;
    obj.show(obj);
  }, items2);
  const items3 = [navigation, tmp8, callback];
  const effect1 = React.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        let tmp;
        if (outer1_2) {
          const obj = { onPress: outer1_3 };
          const intl = navigation(1212).intl;
          obj.text = intl.string(navigation(1212).t["R3BPH+"]);
          tmp = outer2_11(navigation(5788).HeaderActionButton, obj);
        }
        return tmp;
      }
    });
  }, items3);
  const callback1 = React.useCallback((maxUses) => {
    let obj = channel(tmp8[15]);
    obj = { maxUses };
    obj.updateSettings(obj);
  }, []);
  const callback2 = React.useCallback((maxAge) => {
    let obj = channel(tmp8[15]);
    obj = { maxAge };
    obj.updateSettings(obj);
  }, []);
  const callback3 = React.useCallback((temporary) => {
    let obj = channel(tmp8[15]);
    obj = { temporary };
    obj.updateSettings(obj);
  }, []);
  const callback4 = React.useCallback((flags) => {
    let obj = channel(tmp8[15]);
    obj = { flags };
    obj.updateSettings(obj);
  }, []);
  const callback5 = React.useCallback((roleIds) => {
    let obj = channel(tmp8[15]);
    obj = { roleIds };
    obj.updateSettings(obj);
  }, []);
  obj = { contentContainerStyle: tmp.formContainer };
  obj = { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses };
  let obj4 = navigation(4559);
  obj.maxUsesOptions = channel(8528).getMaxUsesOptions;
  ({ temporary: obj6.temporary, flags: obj6.flags, roleIds: obj6.roleIds } = settings);
  obj.onChangeMaxAge = callback2;
  obj.onChangeMaxUses = callback1;
  obj.onChangeTemporary = callback3;
  obj.onChangeFlags = callback4;
  obj.onChangeRoleIds = callback5;
  obj.children = jsx(channel(16537), { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses });
  return jsx(navigation(7636).Form, { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses });
}
({ InviteModalScenes: closure_9, Permissions: closure_10 } = ME);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_32 };
_createForOfIteratorHelperLoose.formContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.formContent = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default function InviteSettingsModal() {
  const memo = React.useMemo(() => (function getScreens() {
    let obj = {};
    obj = { impressionName: outer2_0(outer2_2[24]).ImpressionNames.GUILD_INVITE_LINK_SETTINGS };
    const intl = outer2_0(outer2_2[17]).intl;
    obj.title = intl.string(outer2_0(outer2_2[17]).t.Yx4IiC);
    obj.headerLeft = outer2_0(outer2_2[25]).getHeaderCloseButton(outer2_1(outer2_2[15]).close);
    obj.render = function render() {
      return outer3_11(outer3_13, {});
    };
    obj[outer2_9.ADVANCED] = obj;
    return obj;
  })(), []);
  return jsx(require(5517) /* NavigationStack */.Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
};
