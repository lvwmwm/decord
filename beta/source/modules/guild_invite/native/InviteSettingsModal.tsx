// Module ID: 18257
// Function ID: 18258
// Name: InviteSettingsModal
// Dependencies: [32, 19, 2041, 10116, 2063, 4427, 1074, 21, 4788, 576, 1484, 504, 38, 12, 18258, 10121, 5140, 1115, 5235, 573, 7651, 8903, 18259, 10117, 1249, 5873, 7277, 2]
// Exports: default

// Module 18257 (InviteSettingsModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5140 */;
import NavigatorHeader from "NavigatorHeader" /* 5873 */;
import Navigator from "Navigator" /* 7277 */;
import CreateInviteModalActionCreatorsDefault from "CreateInviteModalActionCreators" /* 10121 */;
import CreateInstantInviteUtils from "CreateInstantInviteUtils" /* 18258 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 10116 */;
import GuildStore from "GuildStore" /* 2063 */;
import PermissionStore from "PermissionStore" /* 4427 */;

require = fn;
function AdvancedInstantInviteScreen() {
  let tmp = closure_12();
  navigation = navigation(1484).useNavigation();
  let obj = navigation(1484);
  const items = [ChannelStore, CreateInviteModalStore, GuildStore];
  const stateFromStoresObject = navigation(504).useStateFromStoresObject(items, () => {
    const pendingSettings = CreateInviteModalStore.getPendingSettings();
    channel(38)(null != pendingSettings, "Received null pending invite settings");
    const inviteSettings = CreateInviteModalStore.getInviteSettings();
    channel(38)(null != inviteSettings, "Received null invite settings");
    channel = channel.getChannel(pendingSettings.channelId);
    let guildId;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    return { settings: pendingSettings, inviteSettings, channel, guild: guild.getGuild(guildId) };
  });
  ({ settings, channel } = stateFromStoresObject);
  ({ inviteSettings, guild } = stateFromStoresObject);
  const tmp6 = callback(noop.useState(channel), 2);
  const first = tmp6[0];
  let tmp8 = null != channel;
  if (tmp8) {
    tmp8 = channel !== first;
  }
  if (tmp8) {
    tmp6[1](channel);
  }
  let obj2 = navigation(504);
  const tmp10 = !navigation(12).isEqual(settings, inviteSettings);
  dependencyMap = tmp10;
  const items1 = [channel];
  const effect = obj3.useEffect(() => {
    if (null == channel) {
      const guildId = CreateInviteModalStore.getGuildId();
      let invitableChannelForGuild = null;
      if (null != guildId) {
        invitableChannelForGuild = CreateInstantInviteUtils.getInvitableChannelForGuild(guildId);
      }
      if (null != invitableChannelForGuild) {
        const obj3 = { channelId: invitableChannelForGuild.channel.id };
        CreateInviteModalActionCreatorsDefault.updateSettings(obj3);
      } else {
        const obj5 = { title: null, body: null, onConfirm: null, isDismissable: false };
        const intl = util.intl;
        obj5.title = intl.string(util.t.VINpSK);
        const intl2 = util.intl;
        obj5.body = intl2.string(util.t.kQ6fit);
        obj5.onConfirm = CreateInviteModalActionCreatorsDefault.close;
        AlertActionCreatorsDefault.show(obj5);
      }
    }
  }, items1);
  const tmp2Result = navigation(12);
  const unmountEffect = navigation(5235).useUnmountEffect(() => {
    channel(573).wait(channel(10121).resetSettings);
  });
  const items2 = [channel];
  callback = obj3.useCallback(() => {
    if (null != channel) {
      if (PermissionStore.can(constants2.CREATE_INSTANT_INVITE, tmp)) {
        const invite = CreateInviteModalActionCreatorsDefault.createInvite("IOS Regenerate");
        CreateInviteModalActionCreatorsDefault.close();
      }
    }
    const obj2 = { title: null, body: null, onConfirm: null, isDismissable: false };
    const intl = util.intl;
    obj2.title = intl.string(util.t.VINpSK);
    const intl2 = util.intl;
    obj2.body = intl2.string(util.t.RiiKV0);
    obj2.onConfirm = CreateInviteModalActionCreatorsDefault.close;
    AlertActionCreatorsDefault.show(obj2);
  }, items2);
  const items3 = [navigation, tmp10, callback];
  const effect1 = obj3.useEffect(() => {
    navigation.setOptions({
      headerRight() {
        let tmp;
        if (dependencyMap) {
          const obj = { onPress, text: null };
          const intl = navigation(1115).intl;
          obj.text = intl.string(navigation(1115).t["R3BPH+"]);
          tmp = jsx(navigation(7651).HeaderActionButton, { onPress, text: null });
        }
        return tmp;
      }
    });
  }, items3);
  const callback1 = obj3.useCallback((maxUses) => {
    channel(10121).updateSettings({ maxUses });
  }, []);
  const callback2 = obj3.useCallback((maxAge) => {
    channel(10121).updateSettings({ maxAge });
  }, []);
  const callback3 = obj3.useCallback((temporary) => {
    channel(10121).updateSettings({ temporary });
  }, []);
  const callback4 = obj3.useCallback((flags) => {
    channel(10121).updateSettings({ flags });
  }, []);
  const callback5 = obj3.useCallback((roleIds) => {
    channel(10121).updateSettings({ roleIds });
  }, []);
  let obj4 = { contentContainerStyle: tmp.formContainer, children: null };
  let obj5 = { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null };
  const tmp2Result2 = navigation(5235);
  obj5.maxUsesOptions = channel(10117).getMaxUsesOptions;
  ({ temporary: obj7.temporary, flags: obj7.flags, roleIds: obj7.roleIds } = settings);
  obj5.onChangeMaxAge = callback2;
  obj5.onChangeMaxUses = callback1;
  obj5.onChangeTemporary = callback3;
  obj5.onChangeFlags = callback4;
  obj5.onChangeRoleIds = callback5;
  obj4.children = jsx(channel(18259), { style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: null, temporary: null, flags: null, roleIds: null, onChangeMaxAge: null, onChangeMaxUses: null, onChangeTemporary: null, onChangeFlags: null, onChangeRoleIds: null });
  return jsx(navigation(8903).Form, { contentContainerStyle: tmp.formContainer, children: null });
}
const Constants = fn(1074);
({ InviteModalScenes: closure_9, Permissions: c10 } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4788);
let obj2 = { formContainer: { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 }, formContent: null };
let obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
obj2.formContent = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default function InviteSettingsModal() {
  const memo = noop.useMemo(() => {
    const obj = {};
    const obj2 = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE_LINK_SETTINGS, title: null, headerLeft: null, render: null };
    const intl = util.intl;
    obj2.title = intl.string(util.t.Yx4IiC);
    obj2.headerLeft = NavigatorHeader.getHeaderCloseButton(CreateInviteModalActionCreatorsDefault.close);
    obj2.render = function render() {
      return closure_1_11(closure_1_13, {});
    };
    obj[constants.ADVANCED] = obj2;
    return obj;
  }, []);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
};
