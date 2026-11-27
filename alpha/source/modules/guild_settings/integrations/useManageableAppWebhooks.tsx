// Module ID: 20000
// Function ID: 20001
// Name: useManageableAppWebhooks
// Dependencies: [4892, 4975, 19198, 1071, 504, 2]
// Exports: default

// Module 20000 (useManageableAppWebhooks)
import Constants from "Constants" /* 1071 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import WebhooksStore from "WebhooksStore" /* 19198 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/guild_settings/integrations/useManageableAppWebhooks.tsx");

export default function useManageableAppWebhooks(arg0, arg1) {
  let channel;
  let closure_0;
  let closure_1;
  _require = arg0;
  dependencyMap = arg1;
  let items = [WebhooksStore, ChannelStore, PermissionStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    let items;
    if (null == closure_0) {
      items = [];
    } else {
      const tmp2 = WebhooksStore;
      const webhooksForGuild = WebhooksStore.getWebhooksForGuild(tmp);
      items = webhooksForGuild.filter((application_id) => {
        let canResult = null != application_id.application_id;
        if (canResult) {
          canResult = null == closure_1_1 || application_id.application_id === tmp2;
        }
        if (canResult) {
          canResult = PermissionStore.can(constants.MANAGE_WEBHOOKS, channel.getChannel(application_id.channel_id));
        }
        return canResult;
      });
    }
    return items;
  }, items1);
};
