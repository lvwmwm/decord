// Module ID: 17622
// Function ID: 17623
// Name: InviteSettingsModal
// Dependencies: [32, 19, 2045, 9276, 2067, 4469, 1074, 21, 4836, 576, 1485, 504, 38, 12, 17623, 9281, 5203, 1115, 5298, 573, 6795, 8053, 17624, 9277, 1249, 5936, 6421, 2]
// Exports: default

// Module 17622 (InviteSettingsModal)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import NavigatorHeader from "NavigatorHeader" /* 5936 */;
import Navigator from "Navigator" /* 6421 */;
import CreateInviteModalActionCreatorsDefault from "CreateInviteModalActionCreators" /* 9281 */;
import CreateInstantInviteUtils from "CreateInstantInviteUtils" /* 17623 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import CreateInviteModalStore from "CreateInviteModalStore" /* 9276 */;
import GuildStore from "GuildStore" /* 2067 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import Constants from "Constants" /* 1074 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap, getGuild, navigation;

let c10;
let c9;
let obj2;
let obj3;
function AdvancedInstantInviteScreen() {
  let callback;
  let channel;
  let closure_2;
  let guild;
  let inviteSettings;
  let settings;
  let tmp = closure_12();
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  let obj2 = navigation(504);
  const items = [ChannelStore, CreateInviteModalStore, GuildStore];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    const pendingSettings = CreateInviteModalStore.getPendingSettings();
    channel(closure_2[12])(null != pendingSettings, "Received null pending invite settings");
    const inviteSettings = CreateInviteModalStore.getInviteSettings();
    channel(closure_2[12])(null != inviteSettings, "Received null invite settings");
    channel = channel.getChannel(pendingSettings.channelId);
    let guildId;
    getGuild = getGuild.getGuild;
    if (channel != null) {
      guildId = channel.getGuildId();
    }
    const obj = { settings: pendingSettings, inviteSettings, channel, guild: getGuild(guildId) };
    return obj;
  });
  ({ settings, channel } = stateFromStoresObject);
  let obj3 = react;
  ({ inviteSettings, guild } = stateFromStoresObject);
  const tmp6 = callback(react.useState(channel), 2);
  const first = tmp6[0];
  let tmp9 = null != channel;
  const tmp8 = tmp6[1];
  if (tmp9) {
    tmp9 = channel !== first;
  }
  if (tmp9) {
    tmp8(channel);
  }
  const tmp2Result = navigation(12);
  const tmp11 = !tmp2Result.isEqual(settings, inviteSettings);
  dependencyMap = tmp11;
  const items1 = [channel];
  const effect = obj3.useEffect(() => {
    let intl;
    let intl2;
    if (null == channel) {
      const guildId = CreateInviteModalStore.getGuildId();
      let invitableChannelForGuild = null;
      if (null != guildId) {
        const obj = CreateInstantInviteUtils;
        invitableChannelForGuild = obj.getInvitableChannelForGuild(guildId);
      }
      if (null != invitableChannelForGuild) {
        const obj3 = { channelId: invitableChannelForGuild.channel.id };
        const obj2 = CreateInviteModalActionCreatorsDefault;
        obj2.updateSettings(obj3);
      } else {
        const obj4 = { title: intl.string(intl3.t.VINpSK), body: intl2.string(intl3.t.kQ6fit), onConfirm: CreateInviteModalActionCreatorsDefault.close, isDismissable: false };
        const show = AlertActionCreatorsDefault.show;
        AlertActionCreatorsDefault;
        intl = intl3.intl;
        intl2 = intl3.intl;
        show(obj4);
      }
    }
  }, items1);
  const tmp2Result2 = navigation(5298);
  const unmountEffect = tmp2Result2.useUnmountEffect(() => {
    const obj = channel(closure_2[19]);
    obj.wait(channel(closure_2[15]).resetSettings);
  });
  const items2 = [channel];
  callback = obj3.useCallback(() => {
    let intl;
    let intl2;
    if (null != channel) {
      if (PermissionStore.can(constants.CREATE_INSTANT_INVITE, tmp)) {
        const obj2 = CreateInviteModalActionCreatorsDefault;
        const invite = obj2.createInvite("IOS Regenerate");
        const obj3 = CreateInviteModalActionCreatorsDefault;
        obj3.close();
      }
    }
    const obj = { title: intl.string(intl3.t.VINpSK), body: intl2.string(intl3.t.RiiKV0), onConfirm: CreateInviteModalActionCreatorsDefault.close, isDismissable: false };
    const show = AlertActionCreatorsDefault.show;
    AlertActionCreatorsDefault;
    intl = intl3.intl;
    intl2 = intl3.intl;
    show(obj);
  }, items2);
  const items3 = [navigation, tmp11, callback];
  const effect1 = obj3.useEffect(() => {
    let onPress;
    const obj = {
      headerRight() {
        let tmp;
        if (closure_1_2) {
          const HeaderActionButton = navigation(closure_2[20]).HeaderActionButton;
          const intl = navigation(closure_2[17]).intl;
          tmp = <HeaderActionButton onPress={onPress} text={intl.string(navigation(closure_2[17]).t["R3BPH+"])} />;
        }
        return tmp;
      }
    };
    navigation.setOptions(obj);
  }, items3);
  const callback1 = obj3.useCallback((maxUses) => {
    const obj = channel(closure_2[15]);
    const obj2 = { maxUses };
    obj.updateSettings(obj2);
  }, []);
  const callback2 = obj3.useCallback((maxAge) => {
    const obj = channel(closure_2[15]);
    const obj2 = { maxAge };
    obj.updateSettings(obj2);
  }, []);
  const callback3 = obj3.useCallback((temporary) => {
    const obj = channel(closure_2[15]);
    const obj2 = { temporary };
    obj.updateSettings(obj2);
  }, []);
  const callback4 = obj3.useCallback((flags) => {
    const obj = channel(closure_2[15]);
    const obj2 = { flags };
    obj.updateSettings(obj2);
  }, []);
  const callback5 = obj3.useCallback((roleIds) => {
    const obj = channel(closure_2[15]);
    const obj2 = { roleIds };
    obj.updateSettings(obj2);
  }, []);
  const Form = tmp2(8053).Form;
  ({ style: tmp.formContent, channel: first, guild, maxAge: settings.maxAge, maxUses: settings.maxUses, maxUsesOptions: channel(9277).getMaxUsesOptions, temporary: null, flags: null, roleIds: null, onChangeMaxAge: callback2, onChangeMaxUses: callback1, onChangeTemporary: callback3, onChangeFlags: callback4, onChangeRoleIds: callback5 });
  channel(17624);
  ({ temporary: obj7.temporary, flags: obj7.flags, roleIds: obj7.roleIds } = settings);
  return <Form contentContainerStyle={tmp.formContainer}>{null}</Form>;
}
({ InviteModalScenes: c9, Permissions: c10 } = Constants);
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { formContainer: obj2, formContent: obj3 };
obj2 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default function InviteSettingsModal() {
  const memo = react.useMemo(() => {
    let intl;
    let obj3;
    const obj = {};
    const ADVANCED = constants.ADVANCED;
    const obj2 = {
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_INVITE_LINK_SETTINGS,
      title: intl.string(intl3.t.Yx4IiC),
      headerLeft: obj3.getHeaderCloseButton(CreateInviteModalActionCreatorsDefault.close),
      render() {
        return closure_1_11(closure_1_13, {});
      }
    };
    intl = intl3.intl;
    obj[ADVANCED] = obj2;
    obj3 = NavigatorHeader;
    return obj;
  }, []);
  return jsx(Navigator.Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
};
