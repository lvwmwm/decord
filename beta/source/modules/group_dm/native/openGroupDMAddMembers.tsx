// Module ID: 11212
// Function ID: 11213
// Name: openGroupDMAddMembers
// Dependencies: [2051, 1377, 11213, 11214, 11216, 11217, 4567, 4736, 2]
// Exports: default, showGroupDMAddMembersRoadblock

// Module 11212 (openGroupDMAddMembers)
import ToastUtils from "ToastUtils" /* 4567 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4736 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11213 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11214 */;
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet" /* 11217 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
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
      getGroupDMNitroAudience = tmp2(11213).getGroupDMNitroAudience;
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
      tmp5Result = tmp5(11216);
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
export const showGroupDMAddMembersRoadblock = function showGroupDMAddMembersRoadblock(groupDMAddMembersAction, CHANNEL_TEXT_AREA) {
  if ("upsell" === groupDMAddMembersAction) {
    openGroupDMNitroCapLimitSheetDefault(CHANNEL_TEXT_AREA);
  } else {
    const obj = ToastUtils;
    obj.showMaxGroupMembers();
  }
};
