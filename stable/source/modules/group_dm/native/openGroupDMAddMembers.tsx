// Module ID: 11817
// Function ID: 11818
// Name: openGroupDMAddMembers
// Dependencies: [5019, 1385, 11818, 11819, 11821, 11822, 5868, 5346, 2]
// Exports: default, showGroupDMAddMembersRoadblock

// Module 11817 (openGroupDMAddMembers)
import NavigationRouteUtils from "NavigationRouteUtils" /* 5346 */;
import ToastUtils from "ToastUtils" /* 5868 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11818 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11819 */;
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet" /* 11822 */;
import ChannelStore from "ChannelStore" /* 5019 */;
import UserStore from "UserStore" /* 1385 */;
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
      getGroupDMNitroAudience = tmp2(11818).getGroupDMNitroAudience;
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
      tmp5Result = tmp5(11821);
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
