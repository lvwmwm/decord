// Module ID: 4570
// Function ID: 40078
// Name: getChannelRoleSubscriptionStatus
// Dependencies: [3827, 44, 2, 27, 4589, 3769]
// Exports: default

// Module 4570 (getChannelRoleSubscriptionStatus)
import closure_2 from "t";
import invariant from "invariant";
import result2 from "result2";
import { Permissions } from "get ActivityIndicator";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function getChannelRoleSubscriptionStatus(id, result2, invariant, closure_6) {
  let obj = result2;
  let obj2 = invariant;
  let tmp = closure_6;
  if (result2 === undefined) {
    obj = invariant;
  }
  if (obj2 === undefined) {
    obj2 = closure_2;
  }
  if (tmp === undefined) {
    tmp = result2;
  }
  const channel = obj.getChannel(id);
  if (null != channel) {
    if (channel.isRoleSubscriptionTemplatePreviewChannel()) {
      obj = { USE_EXIF: null, USE_IPTC: null };
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
let closure_6 = { 0: true, 0: true };
const result = _createForOfIteratorHelperLoose.fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default function useChannelRoleSubscriptionStatus(arg0) {
  const arg1 = arg0;
  const items = [invariant, closure_2, result2];
  const items1 = [arg0];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => callback(arg0, invariant, closure_2, result2), items1);
};
export { getChannelRoleSubscriptionStatus };
