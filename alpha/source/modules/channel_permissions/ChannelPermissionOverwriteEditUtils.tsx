// Module ID: 19694
// Function ID: 19695
// Name: ChannelPermissionOverwriteEditUtils
// Dependencies: [5243, 1084, 2]
// Exports: applyChannelPermissionOverwriteEdit, getChannelPermissionOverwrite, getChannelPermissionOverwriteValue

// Module 19694 (ChannelPermissionOverwriteEditUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1084 */;
import PermissionUtils from "PermissionUtils" /* 5243 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionOverwriteEditUtils.tsx");

export function getChannelPermissionOverwrite(channel, id) {
  let tmp = channel.permissionOverwrites[id];
  if (tmp == null) {
    let everyoneOverwrite;
    if (channel.guild_id === id) {
      const obj = PermissionUtils;
      everyoneOverwrite = obj.makeEveryoneOverwrite(id);
    }
    tmp = everyoneOverwrite;
  }
  return tmp;
}
export function getChannelPermissionOverwriteValue(effectiveOverwrite, flag) {
  let ALLOW;
  if (null == effectiveOverwrite) {
    ALLOW = PermissionUtils.PASSTHROUGH;
  } else {
    const obj2 = BigFlagUtilsAll;
    const tmp8 = importAll;
    if (obj2.has(effectiveOverwrite.allow, flag)) {
      ALLOW = PermissionUtils.ALLOW;
    } else {
      const tmp8Result = tmp8(1084);
      const hasItem = tmp8Result.has(effectiveOverwrite.deny, flag);
      const tmp3 = PermissionUtils;
      ALLOW = hasItem ? tmp3.DENY : tmp3.PASSTHROUGH;
    }
  }
  return ALLOW;
}
export function applyChannelPermissionOverwriteEdit(channelPermissionOverwrite, flag, value) {
  let obj2;
  let obj3;
  const obj = { allow: obj2.remove(channelPermissionOverwrite.allow, flag), deny: obj3.remove(channelPermissionOverwrite.deny, flag) };
  const merged = Object.assign(channelPermissionOverwrite);
  obj2 = BigFlagUtilsAll;
  obj3 = BigFlagUtilsAll;
  if (value === PermissionUtils.ALLOW) {
    const tmp2Result = BigFlagUtilsAll;
    obj.allow = tmp2Result.add(obj.allow, flag);
  } else if (value === PermissionUtils.DENY) {
    const tmp2Result2 = BigFlagUtilsAll;
    obj.deny = tmp2Result2.add(obj.deny, flag);
  }
  return obj;
}
