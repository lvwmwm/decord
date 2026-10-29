// Module ID: 11386
// Function ID: 11387
// Name: openGroupDMAddMembers
// Dependencies: [4857, 1389, 11387, 11388, 11390, 11391, 5700, 5187, 2]
// Exports: default, showGroupDMAddMembersRoadblock

// Module 11386 (openGroupDMAddMembers)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import ToastUtils from "ToastUtils" /* 5700 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11387 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11388 */;
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet" /* 11391 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import UserStore from "UserStore" /* 1389 */;
import size from "module_2" /* 2 */;

function getGroupDMAddMembersAction(id, CHANNEL_TEXT_AREA) {
  let flag;
  let getGroupDMNitroAudience;
  let obj2;
  let premiumType;
  let tmp5Result;
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    if (channel.isGroupDM()) {
      const currentUser = UserStore.getCurrentUser();
      const recipients = channel.recipients;
      let num;
      const getGroupDMAddMembersEntryAction = GroupDMNitroUpsellModel.getGroupDMAddMembersEntryAction;
      GroupDMNitroUpsellModel;
      if (recipients != null) {
        num = recipients.length;
      }
      if (num == null) {
        num = 0;
      }
      const obj = { memberCount: num + 1, recipientLimit: getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true }), audience: getGroupDMNitroAudience(premiumType, flag), showUpsell: tmp5Result.getConfig(obj2).enabled };
      premiumType = undefined;
      getGroupDMNitroAudience = tmp2(11387).getGroupDMNitroAudience;
      GroupDMNitroUpsellModel;
      const tmp5 = importDefault;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      flag = undefined;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      obj2 = { location: CHANNEL_TEXT_AREA };
      tmp5Result = tmp5(11390);
      return getGroupDMAddMembersEntryAction(obj);
    }
  }
  return "open";
}
const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMAddMembers.tsx");

export default function openGroupDMAddMembers(channelId, locationPage) {
  const tmp = getGroupDMAddMembersAction(channelId, locationPage);
  if ("open" === tmp) {
    const obj2 = NavigationRouteUtils;
    obj2.navigateToNewGroupDM(channelId, locationPage);
  } else if ("upsell" === tmp) {
    openGroupDMNitroCapLimitSheetDefault(locationPage);
  } else {
    const obj = ToastUtils;
    obj.showMaxGroupMembers();
  }
};
export { getGroupDMAddMembersAction };
export function showGroupDMAddMembersRoadblock(groupDMAddMembersAction, CHANNEL_TEXT_AREA) {
  if ("upsell" === groupDMAddMembersAction) {
    openGroupDMNitroCapLimitSheetDefault(CHANNEL_TEXT_AREA);
  } else {
    const obj = ToastUtils;
    obj.showMaxGroupMembers();
  }
}
