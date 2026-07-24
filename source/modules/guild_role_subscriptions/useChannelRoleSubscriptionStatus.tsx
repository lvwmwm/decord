// Module ID: 4574
// Function ID: 40114
// Name: getChannelRoleSubscriptionStatus
// Dependencies: [1908, 1348, 3758, 653, 566, 2]
// Exports: default

// Module 4574 (getChannelRoleSubscriptionStatus)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import { Permissions } from "ME";

const require = arg1;
function getChannelRoleSubscriptionStatus(id, closure_4, closure_3, closure_6) {
  let obj = closure_4;
  let obj2 = closure_3;
  let tmp = closure_6;
  if (closure_4 === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = _isNativeReflectConstruct;
  }
  if (tmp === undefined) {
    tmp = closure_4;
  }
  const channel = obj.getChannel(id);
  if (null != channel) {
    if (channel.isRoleSubscriptionTemplatePreviewChannel()) {
      obj = { isSubscriptionGated: true, needSubscriptionToAccess: true };
    }
    return obj;
  }
  if (null != channel) {
    if (obj2.isChannelGated(channel.guild_id, channel.id)) {
      obj = { isSubscriptionGated: true };
      const can = tmp.can;
      let canResult = Permissions;
      if (channel.isGuildVocal()) {
        canResult = can(canResult.CONNECT, channel);
        let tmp3 = !canResult;
      } else {
        tmp3 = !can(canResult.VIEW_CHANNEL, channel);
      }
      obj.needSubscriptionToAccess = tmp3;
    }
  }
  obj = closure_6;
}
let closure_6 = { needSubscriptionToAccess: false, isSubscriptionGated: false };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default function useChannelRoleSubscriptionStatus(arg0) {
  const _require = arg0;
  const items = [closure_3, _isNativeReflectConstruct, closure_4];
  const items1 = [arg0];
  return _require(566).useStateFromStoresObject(items, () => outer1_7(closure_0, outer1_3, outer1_2, outer1_4), items1);
};
export { getChannelRoleSubscriptionStatus };
