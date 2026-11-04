// Module ID: 9018
// Function ID: 9019
// Name: useGetEventChannelsByType
// Dependencies: [4868, 4944, 4946, 9019, 504, 9020, 2]
// Exports: useCanCreateEventInStageChannel, useCanCreateEventInVoiceChannel, useGetEventChannelsByType

// Module 9018 (useGetEventChannelsByType)
import GuildChannelStore2 from "GuildChannelStore" /* 4944 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9020 */;
import StageInstanceStore from "StageInstanceStore" /* 4868 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import PermissionsConstants from "PermissionsConstants" /* 9019 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, dependencyMap;

let metroImportDefault;
let metroRequire;
function getEventChannelsByType(id, channelTypeFromEntity, items) {
  let obj;
  let tmp = items;
  if (items === undefined) {
    items = [GuildChannelStore];
    tmp = items;
  }
  [obj] = tmp;
  if (null == channelTypeFromEntity) {
    return [];
  } else {
    const items1 = [];
    const tmp17 = obj.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
    for (const item10016 of tmp17) {
      let channel = item10016.channel;
      let obj2 = channel;
      let obj3 = useManageResourcePermissions;
      let manageResourcePermissions = obj3.getManageResourcePermissions(channel);
      let canManageAllEvents = manageResourcePermissions.canCreateGuildEvent || manageResourcePermissions.canManageAllEvents;
      if (obj2.type === channelTypeFromEntity) {
        let isGuildVoiceResult = obj2.isGuildVoice() && canManageAllEvents;
        if (!isGuildVoiceResult) {
          let isGuildStageVoiceResult = obj2.isGuildStageVoice() && canManageAllEvents;
          isGuildVoiceResult = isGuildStageVoiceResult;
        }
        if (isGuildVoiceResult) {
          let arr = items1.push(obj2);
        }
      }
      continue;
    }
    return items1;
  }
}
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
({ CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: metroRequire, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: metroImportDefault } = PermissionsConstants);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGetEventChannelsByType.tsx");

export function useCanCreateEventInStageChannel(isGuildStageVoice) {
  _require = isGuildStageVoice;
  const items = [PermissionStore];
  const items1 = [isGuildStageVoice];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(metroImportDefault, isGuildStageVoice), items1);
  const items2 = [StageInstanceStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => StageInstanceStore.getStageInstanceByChannel(isGuildStageVoice.id));
  const tmp3 = isGuildStageVoice.isGuildStageVoice() && stateFromStores && null == stateFromStores1;
  return tmp3;
}
export function useCanCreateEventInVoiceChannel(isGuildVoice) {
  _require = isGuildVoice;
  const items = [PermissionStore];
  const items1 = [isGuildVoice];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(metroRequire, isGuildVoice), items1);
  const tmp2 = isGuildVoice.isGuildVoice() && stateFromStores;
  return tmp2;
}
export { getEventChannelsByType };
export function useGetEventChannelsByType(id, channelType) {
  _require = id;
  dependencyMap = channelType;
  let items = [GuildChannelStore];
  const items1 = [id, channelType];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const items = [GuildChannelStore];
    return getEventChannelsByType(id, channelType, items);
  }, items1);
}
