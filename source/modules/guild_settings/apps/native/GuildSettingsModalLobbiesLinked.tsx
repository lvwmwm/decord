// Module ID: 16174
// Function ID: 124640
// Name: SyncingToGamesItem
// Dependencies: []
// Exports: default

// Module 16174 (SyncingToGamesItem)
function SyncingToGamesItem(channels) {
  channels = channels.channels;
  const arg1 = channels;
  const importDefault = channels.isOnlySection;
  let obj = arg1(closure_2[5]);
  closure_2 = obj.useNavigation();
  const getOrFetchApplication = arg1(closure_2[6]).useGetOrFetchApplication(channels.applicationId);
  let tmp3Result = null;
  if (0 !== channels.length) {
    obj = {};
    let name;
    if (null != getOrFetchApplication) {
      name = getOrFetchApplication.name;
    }
    obj.title = name;
    obj.hasIcons = true;
    obj.children = channels.map((id) => {
      const channels = id;
      let obj = { label: channels(closure_2[9]).computeChannelName(id, closure_4, closure_3) };
      obj = {};
      const obj2 = channels(closure_2[9]);
      obj.IconComponent = channels(closure_2[10]).getChannelIconComponent(id);
      obj.icon = callback(channels(closure_2[8]).TableRow.Icon, obj);
      obj.arrow = true;
      obj.onPress = function onPress() {
        const obj = { channel: arg0 };
        let num = 1;
        if (closure_1) {
          num = 1;
          if (1 === arg0.length) {
            num = 2;
          }
        }
        obj.numScreensToPop = num;
        const arr = arr.push(constants.EDIT_LINKED_LOBBY, obj);
      };
      return callback(channels(closure_2[8]).TableRow, obj, id.id);
    });
    tmp3Result = closure_6(arg1(closure_2[7]).TableRowGroup, obj);
    const tmp3 = closure_6;
  }
  return tmp3Result;
}
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const GuildSettingsSections = arg1(dependencyMap[3]).GuildSettingsSections;
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
const tmp3 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[18]).fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default function GuildSettingsModalLobbiesLinked(arg0) {
  let contentContainerStyle;
  let guildId;
  ({ contentContainerStyle, guildId } = arg0);
  let obj = arg1(dependencyMap[11]);
  const token = obj.useToken(importDefault(dependencyMap[12]).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = arg1(dependencyMap[13]);
  const channelsAllowedToUnlink = obj1.useChannelsAllowedToUnlink(guildId);
  let obj2 = importDefault(dependencyMap[14]);
  const groupByResult = obj2.groupBy(channelsAllowedToUnlink, (linkedLobby) => {
    linkedLobby = linkedLobby.linkedLobby;
    let application_id;
    if (null != linkedLobby) {
      application_id = linkedLobby.application_id;
    }
    return application_id;
  });
  const arg1 = groupByResult;
  const keys = Object.keys(groupByResult);
  const importDefault = keys;
  obj = {};
  obj = {};
  obj1 = { paddingTop: importDefault(dependencyMap[12]).space.PX_16 };
  const items = [obj1, contentContainerStyle];
  obj.contentContainerStyle = items;
  obj2 = { style: { paddingHorizontal: token }, spacing: importDefault(dependencyMap[12]).space.PX_24, children: keys.map((applicationId) => callback(closure_9, { applicationId, channels: groupByResult[applicationId], isOnlySection: 1 === keys.length }, applicationId)) };
  obj.children = callback(arg1(dependencyMap[16]).Stack, obj2);
  const items1 = [callback(arg1(dependencyMap[15]).Form, obj), callback(arg1(dependencyMap[17]).NavScrim, {})];
  obj.children = items1;
  return callback2(closure_7, obj);
};
