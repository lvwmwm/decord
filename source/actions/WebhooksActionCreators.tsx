// Module ID: 15402
// Function ID: 117533
// Dependencies: []

// Module 15402
const _module = require(dependencyMap[0]);
({ AbortCodes: closure_3, Endpoints: closure_4 } = _module);
let closure_5 = ["arz", "ar"];
const _module1 = require(dependencyMap[6]);
const result = _module1.fileFinishedImporting("actions/WebhooksActionCreators.tsx");

export default {
  fetchForGuild(guildId) {
    const require = guildId;
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "WEBHOOKS_FETCHING", guildId };
    obj.dispatch(obj);
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { url: closure_4.GUILD_WEBHOOKS(guildId), oldFormErrors: true, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    const obj4 = require(dependencyMap[2]);
    value.then((body) => {
      let obj = callback(closure_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: body, webhooks: body.body };
      return obj.dispatch(obj);
    }).catch((body) => {
      let obj = callback(closure_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: body, error: body.body.message };
      obj.dispatch(obj);
    });
  },
  fetchForChannel(guildId, channelId) {
    const require = guildId;
    const importDefault = channelId;
    let obj = importDefault(dependencyMap[1]);
    obj = { type: "WEBHOOKS_FETCHING", guildId, channelId };
    obj.dispatch(obj);
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { disabled: null, accessibilityHint: null, legacyCompat_selected: null, url: closure_4.CHANNEL_WEBHOOKS(channelId) };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = arg1(closure_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: body, channelId: arg1, webhooks: body.body };
      return obj.dispatch(obj);
    }).catch((body) => {
      let obj = arg1(closure_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: body, error: body.body.message };
      obj.dispatch(obj);
    });
  },
  create(arg0, channelId) {
    let tmp = arg2;
    const require = arg0;
    if (null == arg2) {
      let obj = importDefault(dependencyMap[3]);
      tmp = closure_5[obj.random(obj, 0, closure_5.length - 1)];
    }
    const HTTP = require(dependencyMap[2]).HTTP;
    obj = { url: closure_4.CHANNEL_WEBHOOKS(channelId), body: obj, oldFormErrors: true };
    obj = { name: tmp, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const obj4 = require(dependencyMap[2]);
    const postResult = HTTP.post(obj);
    return HTTP.post(obj).then((body) => {
      body = body.body;
      let obj = callback(closure_2[1]);
      obj = { type: "WEBHOOK_CREATE", guildId: body, webhook: body };
      obj.dispatch(obj);
      return body;
    }).catch((body) => {
      body = body.body;
      if (null != body) {
        if (body.code === constants.TOO_MANY_WEBHOOKS) {
          let obj = {};
          const intl3 = body(closure_2[5]).intl;
          obj.title = intl3.string(body(closure_2[5]).t.cCqsca);
          const intl4 = body(closure_2[5]).intl;
          obj.body = intl4.string(body(closure_2[5]).t.w+QZoX);
          callback(closure_2[4]).show(obj);
          const obj3 = callback(closure_2[4]);
        }
        return null;
      }
      if (429 === body.status) {
        obj = callback(closure_2[4]);
        obj = {};
        const intl = body(closure_2[5]).intl;
        obj.title = intl.string(body(closure_2[5]).t.cCqsca);
        const intl2 = body(closure_2[5]).intl;
        obj.body = intl2.string(body(closure_2[5]).t.YBM+UW);
        obj.show(obj);
      } else {
        const obj1 = {};
        const intl5 = body(closure_2[5]).intl;
        obj1.title = intl5.string(body(closure_2[5]).t.cCqsca);
        const intl6 = body(closure_2[5]).intl;
        obj1.body = intl6.string(body(closure_2[5]).t./4TwKf);
        callback(closure_2[4]).show(obj1);
        const obj5 = callback(closure_2[4]);
      }
    });
  },
  delete(arg0, arg1) {
    const require = arg0;
    const importDefault = arg1;
    const HTTP = require(dependencyMap[2]).HTTP;
    const obj = { url: closure_4.WEBHOOK(arg1), oldFormErrors: true, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const obj2 = require(dependencyMap[2]);
    return HTTP.del(obj).then(() => {
      let obj = arg1(closure_2[1]);
      obj = { type: "WEBHOOK_DELETE", guildId: arg0, webhookId: arg1 };
      obj.dispatch(obj);
    });
  },
  update(arg0, arg1, body) {
    const require = arg0;
    const HTTP = require(dependencyMap[2]).HTTP;
    const obj = { url: closure_4.WEBHOOK(arg1), body, oldFormErrors: true, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const obj2 = require(dependencyMap[2]);
    return HTTP.patch(obj).then((body) => {
      body = body.body;
      let obj = callback(closure_2[1]);
      obj = { type: "WEBHOOK_UPDATE", guildId: body, webhook: body };
      obj.dispatch(obj);
      return body;
    });
  }
};
