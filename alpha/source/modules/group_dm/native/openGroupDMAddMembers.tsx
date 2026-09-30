// Module ID: 11290
// Function ID: 11291
// Name: openGroupDMAddMembers
// Dependencies: [2045, 1372, 11291, 11292, 11294, 11295, 4557, 4722, 2]
// Exports: default, showGroupDMAddMembersRoadblock

// Module 11290 (openGroupDMAddMembers)
import ToastUtils from "ToastUtils" /* 4557 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4722 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11291 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11292 */;
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet" /* 11295 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function getGroupDMAddMembersAction(id, CHANNEL_TEXT_AREA) {
  const channel = ChannelStore.getChannel(id);
  if (null != channel) {
    if (channel.isGroupDM()) {
      const currentUser = UserStore.getCurrentUser();
      const recipients = channel.recipients;
      let num;
      if (recipients != null) {
        num = recipients.length;
      }
      if (num == null) {
        num = 0;
      }
      const obj = { memberCount: num + 1, recipientLimit: getGroupDMRecipientLimitDefault({ useNitroCapExperiment: true }), audience: null, showUpsell: null };
      const obj3 = GroupDMNitroUpsellModel;
      const tmp4 = importDefault;
      let premiumType;
      if (currentUser != null) {
        premiumType = currentUser.premiumType;
      }
      let flag;
      if (currentUser != null) {
        flag = currentUser.isStaff();
      }
      if (flag == null) {
        flag = false;
      }
      obj.audience = GroupDMNitroUpsellModel.getGroupDMNitroAudience(premiumType, flag);
      const tmp2Result = GroupDMNitroUpsellModel;
      const obj2 = { location: CHANNEL_TEXT_AREA };
      obj.showUpsell = tmp4(11294).getConfig(obj2).enabled;
      return obj3.getGroupDMAddMembersEntryAction(obj);
    }
  }
  return "open";
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/group_dm/native/openGroupDMAddMembers.tsx");

export default function openGroupDMAddMembers(channelId, locationPage) {
  const tmp = getGroupDMAddMembersAction(channelId, locationPage);
  if ("open" === tmp) {
    NavigationRouteUtils.navigateToNewGroupDM(channelId, locationPage);
  } else if ("upsell" === tmp) {
    openGroupDMNitroCapLimitSheetDefault(locationPage);
  } else {
    ToastUtils.showMaxGroupMembers();
  }
};
export { getGroupDMAddMembersAction };
export const showGroupDMAddMembersRoadblock = function showGroupDMAddMembersRoadblock(groupDMAddMembersAction, CHANNEL_TEXT_AREA) {
  if ("upsell" === groupDMAddMembersAction) {
    openGroupDMNitroCapLimitSheetDefault(CHANNEL_TEXT_AREA);
  } else {
    ToastUtils.showMaxGroupMembers();
  }
};
