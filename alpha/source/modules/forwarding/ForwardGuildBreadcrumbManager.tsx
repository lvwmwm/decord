// Module ID: 18351
// Function ID: 18352
// Name: ForwardGuildBreadcrumbManager
// Dependencies: [7946, 2086, 1085, 17874, 18352, 6797, 17887, 2]

// Module 18351 (ForwardGuildBreadcrumbManager)
import Constants from "Constants" /* 1085 */;
import setupLoadFromMessageManagerHandlersDefault from "setupLoadFromMessageManagerHandlers" /* 17887 */;
import BasicGuildActionCreators from "BasicGuildActionCreators" /* 18352 */;
import BasicGuildStore from "BasicGuildStore" /* 7946 */;
import GuildStore from "GuildStore" /* 2086 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6797 */;
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
      let obj = guild_id(17874);
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
