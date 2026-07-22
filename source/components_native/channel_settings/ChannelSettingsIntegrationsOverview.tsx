// Module ID: 15405
// Function ID: 117520
// Name: LinkedLobbyFormSection
// Dependencies: []
// Exports: default

// Module 15405 (LinkedLobbyFormSection)
function LinkedLobbyFormSection(channel) {
  channel = channel.channel;
  const arg1 = channel;
  let obj = arg1(dependencyMap[4]);
  const importDefault = obj.useNavigation();
  let obj1 = arg1(dependencyMap[5]);
  const linkedLobby = channel.linkedLobby;
  let application_id;
  if (null != linkedLobby) {
    application_id = linkedLobby.application_id;
  }
  const getOrFetchApplication = obj1.useGetOrFetchApplication(application_id);
  let tmp3 = null;
  if (null != getOrFetchApplication) {
    obj = {};
    const intl = arg1(dependencyMap[7]).intl;
    obj.title = intl.string(arg1(dependencyMap[7]).t.oAvIAg);
    obj.hasIcons = true;
    obj = { label: getOrFetchApplication.name };
    obj1 = {};
    ({ id: obj7.id, icon: obj7.icon } = getOrFetchApplication);
    obj1.source = importDefault(dependencyMap[10]).getApplicationIconSource({});
    obj1.size = arg1(dependencyMap[9]).AvatarSizes.REFRESH_MEDIUM_32;
    obj.icon = callback(arg1(dependencyMap[9]).Avatar, obj1);
    obj.arrow = true;
    obj.onPress = function onPress() {

    };
    obj.children = callback(arg1(dependencyMap[8]).TableRow, obj);
    tmp3 = callback(arg1(dependencyMap[6]).TableRowGroup, obj);
    const obj2 = {};
    const obj6 = importDefault(dependencyMap[10]);
  }
  return tmp3;
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const ChannelSettingsSections = arg1(dependencyMap[2]).ChannelSettingsSections;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[11]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[12]).colors.BACKGROUND_BASE_LOWER, paddingTop: importDefault(dependencyMap[12]).space.PX_16 };
obj.screenContainer = obj;
let closure_7 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("components_native/channel_settings/ChannelSettingsIntegrationsOverview.tsx");

export default function ConnectedChannelSettingsIntegrationsOverview(arg0) {
  let canManageWebhooks;
  let canUnlinkLobby;
  ({ channelId: closure_0, canManageWebhooks, canUnlinkLobby } = arg0);
  let obj = arg1(dependencyMap[4]);
  const importDefault = obj.useNavigation();
  let obj1 = arg1(dependencyMap[13]);
  const items = [closure_3];
  const stateFromStores = obj1.useStateFromStores(items, () => channel.getChannel(closure_0));
  let tmp4Result = null;
  if (null != stateFromStores) {
    obj = { style: tmp2.screenContainer };
    obj = {};
    obj1 = { paddingHorizontal: importDefault(dependencyMap[12]).space.PX_12 };
    obj.style = obj1;
    obj.spacing = importDefault(dependencyMap[12]).space.PX_24;
    if (canManageWebhooks) {
      const obj2 = { hasIcons: true };
      const obj3 = {};
      const intl = arg1(dependencyMap[7]).intl;
      obj3.label = intl.string(arg1(dependencyMap[7]).t.jp25Id);
      const intl2 = arg1(dependencyMap[7]).intl;
      obj3.subLabel = intl2.string(arg1(dependencyMap[7]).t.mKIOkI);
      obj3.icon = callback(arg1(dependencyMap[16]).WebhookIcon, {});
      obj3.arrow = true;
      obj3.onPress = function onPress() {
        return arr.push(constants.WEBHOOKS);
      };
      const items1 = [callback(arg1(dependencyMap[8]).TableRow, obj3), ];
      const obj4 = {};
      const intl3 = arg1(dependencyMap[7]).intl;
      obj4.label = intl3.string(arg1(dependencyMap[7]).t.OrV60r);
      const intl4 = arg1(dependencyMap[7]).intl;
      obj4.subLabel = intl4.string(arg1(dependencyMap[7]).t.rQREJl);
      obj4.icon = callback(arg1(dependencyMap[17]).ChannelsFollowedIcon, {});
      obj4.arrow = true;
      obj4.onPress = function onPress() {
        return arr.push(constants.CHANNELS_FOLLOWED);
      };
      items1[1] = callback(arg1(dependencyMap[8]).TableRow, obj4);
      obj2.children = items1;
      canManageWebhooks = callback2(arg1(dependencyMap[6]).TableRowGroup, obj2);
    }
    const items2 = [canManageWebhooks, ];
    if (canUnlinkLobby) {
      canUnlinkLobby = null != stateFromStores.linkedLobby;
    }
    if (canUnlinkLobby) {
      const obj5 = { channel: stateFromStores };
      canUnlinkLobby = callback(LinkedLobbyFormSection, obj5);
    }
    items2[1] = canUnlinkLobby;
    obj.children = items2;
    obj.children = callback2(arg1(dependencyMap[15]).Stack, obj);
    tmp4Result = callback(arg1(dependencyMap[14]).Form, obj);
    const tmp4 = callback;
    const tmp7 = callback2;
  }
  return tmp4Result;
};
