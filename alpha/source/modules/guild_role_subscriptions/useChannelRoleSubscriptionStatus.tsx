// Module ID: 5855
// Function ID: 5856
// Name: useChannelRoleSubscriptionStatus
// Dependencies: [4727, 4672, 4755, 1072, 504, 2]
// Exports: default

// Module 5855 (useChannelRoleSubscriptionStatus)
import Constants from "Constants" /* 1072 */;
import GatedChannelStore from "GatedChannelStore" /* 4727 */;
import ChannelStore from "ChannelStore" /* 4672 */;
import PermissionStore from "PermissionStore" /* 4755 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function getChannelRoleSubscriptionStatus(id, ChannelStore, GatedChannelStore, PermissionStore) {
  let obj3;
  let obj = ChannelStore;
  if (ChannelStore === undefined) {
    obj = ChannelStore;
  }
  let obj2 = GatedChannelStore;
  if (GatedChannelStore === undefined) {
    obj2 = GatedChannelStore;
  }
  let tmp = PermissionStore;
  if (PermissionStore === undefined) {
    tmp = PermissionStore;
  }
  const channel = obj.getChannel(id);
  let result;
  if (channel != null) {
    result = channel.isRoleSubscriptionTemplatePreviewChannel();
  }
  if (result) {
    obj3 = { isSubscriptionGated: true, needSubscriptionToAccess: true };
  } else {
    if (null != channel) {
      if (obj2.isChannelGated(channel.guild_id, channel.id)) {
        let tmp4;
        const can = tmp.can;
        if (channel.isGuildVocal()) {
          tmp4 = !can(tmp3.CONNECT, channel);
        } else {
          tmp4 = !can(tmp3.VIEW_CHANNEL, channel);
        }
        obj3 = { isSubscriptionGated: true, needSubscriptionToAccess: tmp4 };
        const obj4 = { isSubscriptionGated: true, needSubscriptionToAccess: tmp4 };
      }
    }
    obj3 = closure_6;
  }
  return obj3;
}
const Permissions = Constants.Permissions;
let closure_6 = { needSubscriptionToAccess: false, isSubscriptionGated: false };
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default function useChannelRoleSubscriptionStatus(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ChannelStore, GatedChannelStore, PermissionStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, () => getChannelRoleSubscriptionStatus(closure_0, ChannelStore, GatedChannelStore, PermissionStore), items1);
};
export { getChannelRoleSubscriptionStatus };
