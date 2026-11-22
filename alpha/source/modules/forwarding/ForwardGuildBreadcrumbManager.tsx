// Module ID: 20096
// Function ID: 20097
// Name: ForwardGuildBreadcrumbManager
// Dependencies: [8693, 4784, 1071, 19560, 20097, 7484, 19571, 2]

// Module 20096 (ForwardGuildBreadcrumbManager)
import Constants from "Constants" /* 1071 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 19571 */;
import BasicGuildActionCreators from "BasicGuildActionCreators" /* 20097 */;
import BasicGuildStore from "BasicGuildStore" /* 8693 */;
import GuildStore from "GuildStore" /* 4784 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7484 */;
import size from "module_2" /* 2 */;

let tmp2;
let tmp3;
function fetchForwardReferencedGuilds(message_reference) {
  message_reference = message_reference.message_reference;
  let type;
  if (message_reference != null) {
    type = message_reference.type;
  }
  if (type === MessageReferenceTypes.FORWARD) {
    const guild_id = message_reference.message_reference.guild_id;
    const tmp2 = null != guild_id && null == GuildStore.getGuild(guild_id) && null == BasicGuildStore.getGuildOrStatus(guild_id);
    if (tmp2) {
      let obj = guild_id(19560);
      const result = obj.queueMessageLinkFetch(() => {
        const obj = BasicGuildActionCreators;
        return obj.fetchBasicGuild(guild_id);
      });
    }
  }
}
const MessageReferenceTypes = Constants.MessageReferenceTypes;
class ForwardGuildBreadcrumbManager extends AutomaticLifecycleManager {
  constructor() {
    const tmp3 = new ForwardGuildBreadcrumbManager(tmp2, tmp, new.target);
    setupLoadFromMessageManagerHandlersDefault(tmp3, fetchForwardReferencedGuilds);
    return tmp3;
  }
}
const tmp5 = new tmp(tmp4, tmp3, tmp2, Object, defineProperty, ForwardGuildBreadcrumbManager, importDefault);
setupLoadFromMessageManagerHandlersDefault(tmp5, fetchForwardReferencedGuilds);
let result = size.fileFinishedImporting("modules/forwarding/ForwardGuildBreadcrumbManager.tsx");

export default tmp5;
