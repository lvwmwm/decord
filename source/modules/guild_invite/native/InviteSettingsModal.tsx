// Module ID: 16363
// Function ID: 126280
// Name: AdvancedInstantInviteScreen
// Dependencies: []
// Exports: default

// Module 16363 (AdvancedInstantInviteScreen)
function AdvancedInstantInviteScreen() {
  let channel;
  let guild;
  let inviteSettings;
  let settings;
  const tmp = callback2();
  let obj = arg1(dependencyMap[10]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [closure_5, closure_6, closure_7];
  const stateFromStoresObject = arg1(dependencyMap[11]).useStateFromStoresObject(items, () => {
    const pendingSettings = store.getPendingSettings();
    let guildId;
    channel(tmp8[12])(null != pendingSettings, "Received null pending invite settings");
    const inviteSettings = store.getInviteSettings();
    channel(tmp8[12])(null != inviteSettings, "Received null invite settings");
    const channel = channel.getChannel(pendingSettings.channelId);
    if (null != channel) {
      guildId = channel.getGuildId();
    }
    const obj = { settings: pendingSettings, inviteSettings, channel, guild: guild.getGuild(guildId) };
    return obj;
  });
  ({ settings, channel } = stateFromStoresObject);
  const importDefault = channel;
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
  const obj2 = arg1(dependencyMap[11]);
  const tmp8 = !arg1(dependencyMap[13]).isEqual(settings, inviteSettings);
  const dependencyMap = tmp8;
  const items1 = [channel];
  const effect = React.useEffect(() => {
    if (null == channel) {
      const guildId = store.getGuildId();
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
  const obj3 = arg1(dependencyMap[13]);
  const unmountEffect = arg1(dependencyMap[18]).useUnmountEffect(() => {
    channel(tmp8[19]).wait(channel(tmp8[15]).resetSettings);
  });
  const items2 = [channel];
  const callback = React.useCallback(() => {
    if (null != channel) {
      if (closure_8.can(constants.CREATE_INSTANT_INVITE, channel)) {
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
        if (closure_2) {
          const obj = { onPress: closure_3 };
          const intl = callback(closure_2[17]).intl;
          obj.text = intl.string(callback(closure_2[17]).t.R3BPH+);
          tmp = callback2(callback(closure_2[20]).HeaderActionButton, obj);
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
  const obj4 = arg1(dependencyMap[18]);
  obj.maxUsesOptions = importDefault(dependencyMap[23]).getMaxUsesOptions;
  ({ temporary: obj6.temporary, flags: obj6.flags, roleIds: obj6.roleIds } = settings);
  obj.onChangeMaxAge = callback2;
  obj.onChangeMaxUses = callback1;
  obj.onChangeTemporary = callback3;
  obj.onChangeFlags = callback4;
  obj.onChangeRoleIds = callback5;
  obj.children = jsx(importDefault(dependencyMap[22]), obj);
  return jsx(arg1(dependencyMap[21]).Form, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ InviteModalScenes: closure_9, Permissions: closure_10 } = arg1(dependencyMap[6]));
const jsx = arg1(dependencyMap[7]).jsx;
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { paddingTop: importDefault(dependencyMap[9]).space.PX_16, paddingBottom: importDefault(dependencyMap[9]).space.PX_32 };
obj.formContainer = obj;
const tmp2 = arg1(dependencyMap[6]);
obj.formContent = { paddingHorizontal: importDefault(dependencyMap[9]).modules.mobile.TABLE_ROW_PADDING };
let closure_12 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: importDefault(dependencyMap[9]).modules.mobile.TABLE_ROW_PADDING };
const result = arg1(dependencyMap[27]).fileFinishedImporting("modules/guild_invite/native/InviteSettingsModal.tsx");

export default function InviteSettingsModal() {
  const memo = React.useMemo(() => function getScreens() {
    let obj = {};
    obj = { impressionName: callback(closure_2[24]).ImpressionNames.GUILD_INVITE_LINK_SETTINGS };
    const intl = callback(closure_2[17]).intl;
    obj.title = intl.string(callback(closure_2[17]).t.Yx4IiC);
    obj.headerLeft = callback(closure_2[25]).getHeaderCloseButton(callback2(closure_2[15]).close);
    obj.render = function render() {
      return callback(closure_13, {});
    };
    obj[constants.ADVANCED] = obj;
    return obj;
  }(), []);
  return jsx(arg1(dependencyMap[26]).Navigator, { screens: memo, initialRouteName: constants.ADVANCED });
};
