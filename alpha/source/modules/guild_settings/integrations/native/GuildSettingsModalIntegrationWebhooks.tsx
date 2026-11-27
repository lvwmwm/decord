// Module ID: 20092
// Function ID: 20093
// Name: GuildSettingsModalIntegrationWebhooks
// Dependencies: [19, 4892, 4975, 4985, 1387, 19198, 1071, 21, 20000, 504, 19199, 20093, 6115, 575, 6140, 1112, 5659, 19197, 20005, 20073, 19070, 2]
// Exports: default

// Module 20092 (GuildSettingsModalIntegrationWebhooks)
import Constants from "Constants" /* 1071 */;
import useChannelName from "useChannelName" /* 5659 */;
import IntegrationsSettingsWebhooksOverview from "IntegrationsSettingsWebhooksOverview" /* 19197 */;
import WebhooksActionCreatorsDefault from "WebhooksActionCreators" /* 19199 */;
import groupWebhooksByChannelDefault from "groupWebhooksByChannel" /* 20093 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import PermissionStore from "PermissionStore" /* 4975 */;
import RelationshipStore from "RelationshipStore" /* 4985 */;
import UserStore from "UserStore" /* 1387 */;
import WebhooksStore from "WebhooksStore" /* 19198 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let channel_id, dependencyMap;

let c10;
let unpackModuleId;
const Permissions = Constants.Permissions;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
const result = size.fileFinishedImporting("modules/guild_settings/integrations/native/GuildSettingsModalIntegrationWebhooks.tsx");

export default function GuildSettingsModalIntegrationWebhooks(guild) {
  let closure_2;
  let intl2;
  let items8;
  let tmp10Result;
  guild = guild.guild;
  let stateFromStoresObject;
  const id = guild.id;
  const tmp = id;
  const tmp3 = id(20000)(id, guild.applicationId);
  dependencyMap = tmp3;
  let obj = guild(504);
  let items = [WebhooksStore];
  const items1 = [id];
  const stateFromStores = obj.useStateFromStores(items, () => WebhooksStore.isFetching(id), items1);
  let obj2 = guild(504);
  const items2 = [PermissionStore];
  const items3 = [guild];
  const items4 = [id];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => PermissionStore.can(Permissions.MANAGE_WEBHOOKS, guild), items3);
  const effect = stateFromStoresObject.useEffect(() => {
    let isFetchingResult = WebhooksStore.isFetching(id);
    const obj = WebhooksStore;
    if (!isFetchingResult) {
      isFetchingResult = 0 !== obj.getWebhooksForGuild(tmp).length;
    }
    if (!isFetchingResult) {
      const obj2 = WebhooksActionCreatorsDefault;
      const forGuild = obj2.fetchForGuild(tmp);
    }
  }, items4);
  const items5 = [ChannelStore];
  const items6 = [tmp3];
  const obj3 = guild(504);
  stateFromStoresObject = obj3.useStateFromStoresObject(items5, () => {
    let channel;
    return Object.fromEntries(closure_2.map((channel_id) => {
      channel_id = channel_id.channel_id;
      const items = [channel_id, channel.getChannel(channel_id)];
      return items;
    }));
  }, items6);
  const items7 = [stateFromStoresObject, tmp3];
  const memo = stateFromStoresObject.useMemo(() => groupWebhooksByChannelDefault(closure_2, (arg0) => stateFromStoresObject[arg0]), items7);
  if (memo.length > 0) {
    const obj4 = {
      spacing: tmp(575).space.PX_16,
      children: memo.map((channel) => {
          let intl;
          let obj2;
          channel = channel.channel;
          const webhooks = channel.webhooks;
          let obj = {
            hasIcons: true,
            title: intl.formatToPlainString(guild(closure_2[15]).t.TKDIZg, obj2),
            children: webhooks.map((item) => {
              let avatar;
              let name;
              let token;
              let type;
              let user;
              ({ id, avatar } = item);
              ({ type, name, user, token } = item);
              const obj = { webhookId: id, webhookType: type, avatar, name, user, channelId: channel.id, token, guildId: id };
              const ConnectedWebhookItem = IntegrationsSettingsWebhooksOverview.ConnectedWebhookItem;
              return authStore(ConnectedWebhookItem, obj, id);
            })
          };
          const TableRowGroup = guild(closure_2[14]).TableRowGroup;
          intl = guild(closure_2[15]).intl;
          obj2 = {
            channelHook() {
              const obj = useChannelName;
              return obj.computeChannelName(channel, UserStore, RelationshipStore, true);
            }
          };
          return closure_1_10(TableRowGroup, obj, channel.id);
        })
    };
    const Stack = tmp4(6115).Stack;
    tmp10Result = closure_10(Stack, obj4);
  } else {
    tmp10Result = null;
    if (!stateFromStores) {
      let stringResult;
      const tmpResult = tmp(20005);
      let intl = tmp4(1112).intl;
      const string = intl.string;
      const t = tmp4(1112).t;
      const tmp10 = closure_10;
      if (stateFromStores1) {
        stringResult = string(t.ahPd2Y);
      } else {
        stringResult = string(t.axqYMl);
      }
      const obj5 = { text: stringResult };
      tmp10Result = tmp10(tmpResult, obj5);
    }
  }
  const obj6 = { spacing: tmp(575).space.PX_8, children: items8 };
  const Stack2 = tmp4(6115).Stack;
  const obj7 = { icon: guild(19070).WebhookIcon, title: intl2.string(guild(1112).t["t9ZX/I"]) };
  const tmpResult2 = tmp(20073);
  intl2 = tmp4(1112).intl;
  items8 = [closure_10(tmpResult2, obj7), tmp10Result];
  return closure_11(Stack2, obj6);
};
