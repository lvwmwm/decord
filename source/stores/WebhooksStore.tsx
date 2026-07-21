// Module ID: 15401
// Function ID: 117514
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15401 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function fetchingKey(guildId, channelId) {
  let str = channelId;
  if (null == channelId) {
    str = "guild";
  }
  return "" + guildId + ":" + str;
}
function getOrCreateGuild(guildId) {
  if (null == closure_8[guildId]) {
    closure_8[guildId] = {};
  }
  return closure_8[guildId];
}
function handleWebhookCreateUpdate(webhook) {
  webhook = webhook.webhook;
  getOrCreateGuild(webhook.guildId)[webhook.id] = webhook;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_8 = {};
let closure_9 = {};
let tmp2 = (Store) => {
  class WebhooksStore {
    constructor() {
      self = this;
      tmp = closure_2(this, WebhooksStore);
      obj = closure_5(WebhooksStore);
      tmp2 = closure_4;
      if (closure_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const importDefault = WebhooksStore;
  callback2(WebhooksStore, Store);
  let obj = {
    key: "isFetching",
    value(arg0, arg1) {
      return null != closure_9[closure_11(undefined, arg0, arg1)];
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getWebhooksForGuild",
    value(arg0) {
      return WebhooksStore(closure_1[6]).values(callback4(arg0));
    }
  };
  items[1] = obj;
  obj = {
    key: "getWebhooksForChannel",
    value(arg0, arg1) {
      const WebhooksStore = arg1;
      const tmp = WebhooksStore(closure_1[6]);
      const values = WebhooksStore(closure_1[6])(callback4(arg0)).values();
      const tmpResult = WebhooksStore(closure_1[6])(callback4(arg0));
      return values.filter((channel_id) => channel_id.channel_id === arg1).value();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "error",
    get() {
      return closure_7;
    }
  };
  return callback(WebhooksStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "WebhooksStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  WEBHOOKS_UPDATE: function handleWebhooksUpdate(arg0) {
    let channelId;
    let error;
    let guildId;
    let webhooks;
    ({ guildId, channelId } = arg0);
    const importDefault = channelId;
    ({ webhooks, error } = arg0);
    let dependencyMap;
    if (null != webhooks) {
      let closure_7 = null;
      let items = [];
      if (null != channelId) {
        const tmp11 = importDefault(dependencyMap[6]);
        const values = importDefault(dependencyMap[6])(getOrCreateGuild(guildId)).values();
        const tmp11Result = importDefault(dependencyMap[6])(getOrCreateGuild(guildId));
        items = values.filter((channel_id) => channel_id.channel_id !== channelId).value();
        const iter = values.filter((channel_id) => channel_id.channel_id !== channelId);
      }
      let obj = {};
      closure_8[guildId] = obj;
      dependencyMap = obj;
      const combined = items.concat(webhooks);
      const item = combined.forEach((id) => {
        obj[id.id] = id;
        return id;
      });
      fetchingKey(guildId, channelId);
      delete r2[r1];
    } else if (null != error) {
      closure_7 = error;
      fetchingKey(guildId, channelId);
      delete r6[r1];
    } else {
      let tmp = null != channelId;
      if (tmp) {
        tmp = null != closure_8[guildId];
      }
      if (tmp) {
        closure_7 = null;
        obj = importDefault(dependencyMap[5]);
        const forChannel = obj.fetchForChannel(guildId, channelId);
      }
    }
  },
  WEBHOOKS_FETCHING: function handleWebhooksFetching(guildId) {
    closure_9[fetchingKey(guildId.guildId, guildId.channelId)] = true;
  },
  WEBHOOK_CREATE: handleWebhookCreateUpdate,
  WEBHOOK_UPDATE: handleWebhookCreateUpdate,
  WEBHOOK_DELETE: function handleWebhookDelete(guildId) {
    getOrCreateGuild(guildId.guildId);
    delete r1[r2];
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/WebhooksStore.tsx");

export default tmp2;
