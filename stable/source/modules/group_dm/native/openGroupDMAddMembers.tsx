// Module ID: 12542
// Function ID: 12543
// Name: openGroupDMAddMembers
// Dependencies: [5155, 1388, 12543, 12544, 12546, 12547, 6004, 5482, 2]
// Exports: default, showGroupDMAddMembersRoadblock

// Module 12542 (openGroupDMAddMembers)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5482 */;
import ToastUtils from "ToastUtils" /* 6004 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 12543 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 12544 */;
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet" /* 12547 */;
import ChannelStore from "ChannelStore" /* 5155 */;
import UserStore from "UserStore" /* 1388 */;
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
      getGroupDMNitroAudience = tmp2(12543).getGroupDMNitroAudience;
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
      tmp5Result = tmp5(12546);
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
