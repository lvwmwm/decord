// Module ID: 17401
// Function ID: 17402
// Name: GuildSettingsModalLobbiesLinked
// Dependencies: [19, 4479, 1372, 1074, 21, 1485, 6589, 5999, 5917, 4989, 5335, 4531, 576, 17294, 12, 8053, 5279, 6461, 2]
// Exports: default

// Module 17401 (GuildSettingsModalLobbiesLinked)
import Constants from "Constants" /* 1074 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, linkedLobby;

let metroImportAll;
let metroImportDefault;
let metroRequire;
function SyncingToGamesItem(channels) {
  let closure_2;
  channels = channels.channels;
  const isOnlySection = channels.isOnlySection;
  const applicationId = channels.applicationId;
  let obj = channels(1485);
  dependencyMap = obj.useNavigation();
  let obj2 = channels(6589);
  const getOrFetchApplication = obj2.useGetOrFetchApplication(applicationId);
  let tmp5Result = null;
  const tmp = channels;
  if (0 !== channels.length) {
    let name;
    const TableRowGroup = tmp(5999).TableRowGroup;
    const tmp5 = closure_6;
    if (getOrFetchApplication != null) {
      name = getOrFetchApplication.name;
    }
    let obj3 = {
      title: name,
      hasIcons: true,
      children: channels.map((id) => {
          let Icon;
          let obj2;
          let obj3;
          let obj4;
          const channel = id;
          let obj = {
            label: obj2.computeChannelName(id, UserStore, RelationshipStore),
            icon: closure_1_6(Icon, obj3),
            arrow: true,
            onPress() {
              let num;
              const obj = { channel, numScreensToPop: num };
              num = 1;
              const push = navigation.push;
              const EDIT_LINKED_LOBBY = GuildSettingsSections.EDIT_LINKED_LOBBY;
              if (isOnlySection) {
                num = 1;
                if (1 === channels.length) {
                  num = 2;
                }
              }
              push(EDIT_LINKED_LOBBY, obj);
            }
          };
          const TableRow = channels(navigation[8]).TableRow;
          obj2 = channels(navigation[9]);
          obj3 = { IconComponent: obj4.getChannelIconComponent(id) };
          Icon = channels(navigation[8]).TableRow.Icon;
          obj4 = channels(navigation[10]);
          return closure_1_6(TableRow, obj, id.id);
        })
    };
    tmp5Result = tmp5(TableRowGroup, obj3);
  }
  return tmp5Result;
}
const GuildSettingsSections = Constants.GuildSettingsSections;
({ jsx: metroRequire, Fragment: metroImportDefault, jsxs: metroImportAll } = Fragment);
const result = size.fileFinishedImporting("modules/guild_settings/apps/native/GuildSettingsModalLobbiesLinked.tsx");

export default function GuildSettingsModalLobbiesLinked(arg0) {
  let Stack;
  let _undefined;
  let contentContainerStyle;
  let guildId;
  let items;
  let items1;
  let obj7;
  _require = undefined;
  let keys;
  ({ contentContainerStyle, guildId } = arg0);
  let obj = require("useToken");
  const token = obj.useToken(keys(576).modules.mobile.TABLE_ROW_PADDING);
  const obj2 = require("useChannelsAllowedToUnlink");
  const channelsAllowedToUnlink = obj2.useChannelsAllowedToUnlink(guildId);
  const obj3 = keys(12);
  const groupByResult = obj3.groupBy(channelsAllowedToUnlink, (linkedLobby) => {
    linkedLobby = linkedLobby.linkedLobby;
    let application_id;
    if (linkedLobby != null) {
      application_id = linkedLobby.application_id;
    }
    return application_id;
  });
  _require = groupByResult;
  keys = Object.keys(groupByResult);
  const obj4 = { children: items1 };
  const obj5 = { contentContainerStyle: items, children: closure_6(Stack, obj7) };
  const obj6 = { paddingTop: keys(576).space.PX_16 };
  const Form = require("Form").Form;
  items = [obj6, contentContainerStyle];
  obj7 = {
    style: { paddingHorizontal: token },
    spacing: keys(576).space.PX_24,
    children: keys.map((applicationId) => {
      const obj = { applicationId, channels: _undefined[applicationId], isOnlySection: 1 === keys.length };
      return metroRequire(SyncingToGamesItem, obj, applicationId);
    })
  };
  Stack = require("Stack/Stack").Stack;
  items1 = [closure_6(Form, obj5), closure_6(require("NavScrim").NavScrim, {})];
  return closure_8(closure_7, obj4);
};
