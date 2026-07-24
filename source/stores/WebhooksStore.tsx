// Module ID: 15573
// Function ID: 120053
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 15574, 22, 566, 686, 2]

// Module 15573 (_isNativeReflectConstruct)
import apply from "apply";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

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
  if (null == dependencyMap[guildId]) {
    dependencyMap[guildId] = {};
  }
  return dependencyMap[guildId];
}
function handleWebhookCreateUpdate(webhook) {
  webhook = webhook.webhook;
  getOrCreateGuild(webhook.guildId)[webhook.id] = webhook;
}
let closure_8 = {};
let closure_9 = {};
let tmp2 = ((Store) => {
  class WebhooksStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, WebhooksStore);
      obj = outer1_5(WebhooksStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(WebhooksStore, Store);
  let obj = {
    key: "isFetching",
    value(arg0, arg1) {
      return null != outer1_9[outer1_11(undefined, arg0, arg1)];
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getWebhooksForGuild",
    value(arg0) {
      return WebhooksStore(outer1_1[6]).values(outer1_12(arg0));
    }
  };
  items[1] = obj;
  obj = {
    key: "getWebhooksForChannel",
    value(arg0, arg1) {
      let closure_0 = arg1;
      const tmp = WebhooksStore(outer1_1[6]);
      const values = WebhooksStore(outer1_1[6])(outer1_12(arg0)).values();
      const tmpResult = WebhooksStore(outer1_1[6])(outer1_12(arg0));
      return values.filter((channel_id) => channel_id.channel_id === closure_0).value();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "error",
    get() {
      return outer1_7;
    }
  };
  return callback(WebhooksStore, items);
})(require("initialize").Store);
tmp2.displayName = "WebhooksStore";
tmp2 = new tmp2(require("dispatcher"), {
  WEBHOOKS_UPDATE: function handleWebhooksUpdate(arg0) {
    let channelId;
    let error;
    let guildId;
    let webhooks;
    ({ guildId, channelId } = arg0);
    ({ webhooks, error } = arg0);
    let obj;
    if (null != webhooks) {
      let c7 = null;
      let items = [];
      if (null != channelId) {
        const tmp14 = channelId(obj[6]);
        const values = channelId(obj[6])(getOrCreateGuild(guildId)).values();
        const tmp14Result = channelId(obj[6])(getOrCreateGuild(guildId));
        items = values.filter((channel_id) => channel_id.channel_id !== channelId).value();
        const iter = values.filter((channel_id) => channel_id.channel_id !== channelId);
      }
      obj = {};
      dependencyMap[guildId] = obj;
      const combined = items.concat(webhooks);
      const item = combined.forEach((id) => {
        obj[id.id] = id;
        return id;
      });
      fetchingKey(guildId, channelId);
      delete tmp2[tmp];
    } else if (null != error) {
      c7 = error;
      fetchingKey(guildId, channelId);
      delete tmp3[tmp];
    } else {
      let tmp4 = null != channelId;
      if (tmp4) {
        tmp4 = null != dependencyMap[guildId];
      }
      if (tmp4) {
        c7 = null;
        obj = channelId(obj[5]);
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
    delete tmp[tmp2];
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/WebhooksStore.tsx");

export default tmp2;
