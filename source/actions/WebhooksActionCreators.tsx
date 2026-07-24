// Module ID: 15574
// Function ID: 120072
// Dependencies: [653, 686, 507, 22, 4470, 1212, 2]

// Module 15574
import ME from "ME";

let closure_3;
let closure_4;
({ AbortCodes: closure_3, Endpoints: closure_4 } = ME);
let closure_5 = ["Spidey Bot", "Captain Hook"];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("actions/WebhooksActionCreators.tsx");

export default {
  fetchForGuild(guildId) {
    const _require = guildId;
    let obj = importDefault(686);
    obj = { type: "WEBHOOKS_FETCHING", guildId };
    obj.dispatch(obj);
    const HTTP = _require(507).HTTP;
    obj = { url: closure_4.GUILD_WEBHOOKS(guildId), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    const obj4 = _require(507);
    value.then((body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, webhooks: body.body };
      return obj.dispatch(obj);
    }).catch((body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, error: body.body.message };
      obj.dispatch(obj);
    });
  },
  fetchForChannel(guildId, channelId) {
    const _require = guildId;
    const importDefault = channelId;
    let obj = importDefault(686);
    obj = { type: "WEBHOOKS_FETCHING", guildId, channelId };
    obj.dispatch(obj);
    const HTTP = _require(507).HTTP;
    obj = { url: closure_4.CHANNEL_WEBHOOKS(channelId), oldFormErrors: true, rejectWithError: true };
    const value = HTTP.get(obj);
    value.then((body) => {
      let obj = channelId(outer1_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, channelId, webhooks: body.body };
      return obj.dispatch(obj);
    }).catch((body) => {
      let obj = channelId(outer1_2[1]);
      obj = { type: "WEBHOOKS_UPDATE", guildId: closure_0, error: body.body.message };
      obj.dispatch(obj);
    });
  },
  create(arg0, channelId) {
    let tmp = arg2;
    const _require = arg0;
    if (null == arg2) {
      let obj = importDefault(22);
      tmp = length[obj.random(obj, 0, length.length - 1)];
    }
    const HTTP = _require(507).HTTP;
    obj = { url: closure_4.CHANNEL_WEBHOOKS(channelId), body: obj, oldFormErrors: true };
    obj = { name: tmp, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj4 = _require(507);
    const postResult = HTTP.post(obj);
    return HTTP.post(obj).then((body) => {
      body = body.body;
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "WEBHOOK_CREATE", guildId: closure_0, webhook: body };
      obj.dispatch(obj);
      return body;
    }).catch((body) => {
      body = body.body;
      if (null != body) {
        if (body.code === outer1_3.TOO_MANY_WEBHOOKS) {
          let obj = {};
          const intl3 = callback(outer1_2[5]).intl;
          obj.title = intl3.string(callback(outer1_2[5]).t.cCqsca);
          const intl4 = callback(outer1_2[5]).intl;
          obj.body = intl4.string(callback(outer1_2[5]).t["w+QZoX"]);
          outer1_1(outer1_2[4]).show(obj);
          const obj3 = outer1_1(outer1_2[4]);
        }
        return null;
      }
      if (429 === body.status) {
        obj = outer1_1(outer1_2[4]);
        obj = {};
        const intl = callback(outer1_2[5]).intl;
        obj.title = intl.string(callback(outer1_2[5]).t.cCqsca);
        const intl2 = callback(outer1_2[5]).intl;
        obj.body = intl2.string(callback(outer1_2[5]).t["YBM+UW"]);
        obj.show(obj);
      } else {
        const obj1 = {};
        const intl5 = callback(outer1_2[5]).intl;
        obj1.title = intl5.string(callback(outer1_2[5]).t.cCqsca);
        const intl6 = callback(outer1_2[5]).intl;
        obj1.body = intl6.string(callback(outer1_2[5]).t["/4TwKf"]);
        outer1_1(outer1_2[4]).show(obj1);
        const obj5 = outer1_1(outer1_2[4]);
      }
    });
  },
  delete(arg0, arg1) {
    const _require = arg0;
    let closure_1 = arg1;
    const HTTP = _require(507).HTTP;
    let obj = { url: closure_4.WEBHOOK(arg1), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj2 = _require(507);
    return HTTP.del(obj).then(() => {
      let obj = callback(outer1_2[1]);
      obj = { type: "WEBHOOK_DELETE", guildId: closure_0, webhookId: callback };
      obj.dispatch(obj);
    });
  },
  update(arg0, arg1, body) {
    const _require = arg0;
    const HTTP = _require(507).HTTP;
    let obj = { url: closure_4.WEBHOOK(arg1), body, oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj2 = _require(507);
    return HTTP.patch(obj).then((body) => {
      body = body.body;
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "WEBHOOK_UPDATE", guildId: closure_0, webhook: body };
      obj.dispatch(obj);
      return body;
    });
  }
};
