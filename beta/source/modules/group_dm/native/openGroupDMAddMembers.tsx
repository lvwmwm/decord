// Module ID: 11085
// Function ID: 11086
// Name: openGroupDMAddMembers
// Dependencies: [2045, 1372, 11086, 11087, 11089, 11090, 4527, 4692, 2]
// Exports: default, showGroupDMAddMembersRoadblock

// Module 11085 (openGroupDMAddMembers)
import ToastUtils from "ToastUtils" /* 4527 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4692 */;
import GroupDMNitroUpsellModel from "GroupDMNitroUpsellModel" /* 11086 */;
import getGroupDMRecipientLimitDefault from "getGroupDMRecipientLimit" /* 11087 */;
import openGroupDMNitroCapLimitSheetDefault from "openGroupDMNitroCapLimitSheet" /* 11090 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
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
      getGroupDMNitroAudience = tmp2(11086).getGroupDMNitroAudience;
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
      tmp5Result = tmp5(11089);
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
