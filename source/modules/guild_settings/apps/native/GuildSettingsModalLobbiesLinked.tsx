// Module ID: 16338
// Function ID: 127137
// Name: SyncingToGamesItem
// Dependencies: [31, 3767, 1849, 653, 33, 1456, 5468, 5501, 5165, 4320, 4593, 3834, 689, 16261, 22, 7636, 4541, 5448, 2]
// Exports: default

// Module 16338 (SyncingToGamesItem)
import "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { GuildSettingsSections } from "ME";
import jsxProd from "jsxProd";

let closure_6;
let closure_7;
let closure_8;
let require = arg1;
function SyncingToGamesItem(channels) {
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  let obj = channels(1456);
  const dependencyMap = obj.useNavigation();
  const getOrFetchApplication = channels(5468).useGetOrFetchApplication(channels.applicationId);
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
      let closure_0 = id;
      let obj = { label: channels(4320).computeChannelName(id, outer1_4, outer1_3) };
      obj = {};
      const obj2 = channels(4320);
      obj.IconComponent = channels(4593).getChannelIconComponent(id);
      obj.icon = outer1_6(channels(5165).TableRow.Icon, obj);
      obj.arrow = true;
      obj.onPress = function onPress() {
        const obj = { channel: length };
        let num = 1;
        if (outer1_1) {
          num = 1;
          if (1 === length.length) {
            num = 2;
          }
        }
        obj.numScreensToPop = num;
        outer1_2.push(outer2_5.EDIT_LINKED_LOBBY, obj);
      };
      return outer1_6(channels(5165).TableRow, obj, id.id);
    });
    tmp3Result = closure_6(channels(5501).TableRowGroup, obj);
    const tmp3 = closure_6;
  }
  return tmp3Result;
}
({ jsx: closure_6, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default function GuildSettingsModalLobbiesLinked(arg0) {
  let contentContainerStyle;
  let guildId;
  ({ contentContainerStyle, guildId } = arg0);
  let obj = require(3834) /* map */;
  const token = obj.useToken(keys(689).modules.mobile.TABLE_ROW_PADDING);
  let obj1 = require(16261) /* getChannelsAllowedToUnlink */;
  const channelsAllowedToUnlink = obj1.useChannelsAllowedToUnlink(guildId);
  let obj2 = keys(22);
  const groupByResult = obj2.groupBy(channelsAllowedToUnlink, (linkedLobby) => {
    linkedLobby = linkedLobby.linkedLobby;
    let application_id;
    if (null != linkedLobby) {
      application_id = linkedLobby.application_id;
    }
    return application_id;
  });
  require = groupByResult;
  keys = Object.keys(groupByResult);
  obj = {};
  obj = {};
  obj1 = { paddingTop: keys(689).space.PX_16 };
  const items = [obj1, contentContainerStyle];
  obj.contentContainerStyle = items;
  obj2 = { style: { paddingHorizontal: token }, spacing: keys(689).space.PX_24, children: keys.map((applicationId) => outer1_6(outer1_9, { applicationId, channels: groupByResult[applicationId], isOnlySection: 1 === keys.length }, applicationId)) };
  obj.children = callback(require(4541) /* Stack */.Stack, obj2);
  const items1 = [callback(require(7636) /* Form */.Form, obj), callback(require(5448) /* NavScrim */.NavScrim, {})];
  obj.children = items1;
  return callback2(closure_7, obj);
};
