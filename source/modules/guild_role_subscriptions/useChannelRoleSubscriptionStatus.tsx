// Module ID: 4570
// Function ID: 40070
// Name: getChannelRoleSubscriptionStatus
// Dependencies: []
// Exports: default

// Module 4570 (getChannelRoleSubscriptionStatus)
function getChannelRoleSubscriptionStatus(id, closure_4, closure_3, closure_6) {
  let obj = closure_4;
  let obj2 = closure_3;
  let tmp = closure_6;
  if (closure_4 === undefined) {
    obj = closure_3;
  }
  if (obj2 === undefined) {
    obj2 = closure_2;
  }
  if (tmp === undefined) {
    tmp = closure_4;
  }
  const channel = obj.getChannel(id);
  if (null != channel) {
    if (channel.isRoleSubscriptionTemplatePreviewChannel()) {
      obj = { "Null": null, "Null": null };
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
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const Permissions = arg1(dependencyMap[3]).Permissions;
let closure_6 = { "Bool(false)": null, "Bool(false)": null };
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx");

export default function useChannelRoleSubscriptionStatus(arg0) {
  const arg1 = arg0;
  const items = [closure_3, closure_2, closure_4];
  const items1 = [arg0];
  return arg1(dependencyMap[4]).useStateFromStoresObject(items, () => callback(arg0, closure_3, closure_2, closure_4), items1);
};
export { getChannelRoleSubscriptionStatus };
