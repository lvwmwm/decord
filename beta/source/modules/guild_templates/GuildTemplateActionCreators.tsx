// Module ID: 6743
// Function ID: 6744
// Name: GuildTemplateActionCreators
// Dependencies: [1086, 585, 1283, 1253, 6744, 2]

// Module 6743 (GuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import HTTPUtils from "HTTPUtils" /* 1283 */;
import Constants from "Constants" /* 1086 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Endpoints: c3, AnalyticEvents: closure_4 } = Constants);
const map = new Map();
let obj = {
  resolveGuildTemplate(code) {
    const f92502 = () => {
      let nextPromise;
      let obj = DispatcherDefault;
      if (obj.isDispatching()) {
        const resolved = Promise.resolve();
        nextPromise = resolved.then(f92502);
      } else {
        let obj2 = map;
        nextPromise = map.get(tmp);
        if (null == nextPromise) {
          let obj3 = { type: "GUILD_TEMPLATE_RESOLVE", code };
          const tmp2Result = DispatcherDefault;
          tmp2Result.dispatch(obj3);
          const HTTP = HTTPUtils.HTTP;
          let obj4 = { url: _false.UNRESOLVED_GUILD_TEMPLATE(code), oldFormErrors: true, rejectWithError: true };
          const get = HTTP.get;
          const value = get(obj4);
          const nextPromise1 = value.then(f92503, f92504);
          const cleanupPromise = nextPromise1.finally(f92505);
          const result = obj2.set(tmp, cleanupPromise);
          nextPromise = cleanupPromise;
        }
      }
      return nextPromise;
    };
    const f92503 = (body) => {
      body = body.body;
      const obj = closure_2_1(closure_2_2[3]);
      const obj2 = { resolved: true, guild_template_code: code, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
      obj.track(constants.GUILD_TEMPLATE_RESOLVED, obj2);
      const obj3 = closure_2_1(closure_2_2[1]);
      const obj4 = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code };
      obj3.dispatch(obj4);
      const obj5 = { guildTemplate: closure_2_1(closure_2_2[4])(body), code };
      return obj5;
    };
    const f92504 = () => {
      const obj = closure_2_1(closure_2_2[3]);
      const obj2 = { resolved: false, guild_template_code: code };
      obj.track(constants.GUILD_TEMPLATE_RESOLVED, obj2);
      const obj3 = closure_2_1(closure_2_2[1]);
      const obj4 = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code };
      obj3.dispatch(obj4);
      return { guildTemplate: null, code };
    };
    const f92505 = () => {
      set.delete(closure_0);
    };
    _require = code;
    let tmp2 = dependencyMap;
    const tmp = importDefault;
    let obj = DispatcherDefault;
    if (obj.isDispatching()) {
      let resolved = Promise.resolve();
      return resolved.then(f92502);
    } else {
      let obj2 = map;
      let value = map.get(code);
      if (null != value) {
        return value;
      } else {
        let obj3 = { type: "GUILD_TEMPLATE_RESOLVE", code };
        const tmpResult = DispatcherDefault;
        const dispatchResult = tmpResult.dispatch(obj3);
        let HTTP = require("HTTPUtils").HTTP;
        let obj4 = { url: closure_3.UNRESOLVED_GUILD_TEMPLATE(code), oldFormErrors: true, rejectWithError: true };
        let get = HTTP.get;
        const value2 = get(obj4);
        let nextPromise = value2.then(f92503, f92504);
        let cleanupPromise = nextPromise.finally(f92505);
        let result = obj2.set(code, cleanupPromise);
        return cleanupPromise;
      }
    }
  },
  loadTemplatesForGuild(arg0) {
    let obj2;
    const HTTP = HTTPUtils.HTTP;
    let obj = { url: _false.GUILD_TEMPLATES(arg0), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const get = HTTP.get;
    obj2 = HTTPUtils;
    const value = get(obj);
    return value.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: body.body };
      obj.dispatch(obj2);
      return body;
    });
  },
  createGuildTemplate(arg0, name, description) {
    let obj;
    let obj3;
    const HTTP = HTTPUtils.HTTP;
    const request = { url: _false.GUILD_TEMPLATES(arg0), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const post = HTTP.post;
    obj = { name, description };
    obj3 = HTTPUtils;
    const postResult = post(request);
    return postResult.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: body.body, code: body.body.code };
      obj.dispatch(obj2);
    });
  },
  syncGuildTemplate(arg0, code) {
    let obj2;
    _require = code;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, code), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const put = HTTP.put;
    obj2 = require("HTTPUtils");
    const putResult = put(obj);
    return putResult.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code };
      obj.dispatch(obj2);
    });
  },
  updateGuildTemplate(arg0, code, name, description) {
    let obj;
    let obj3;
    _require = code;
    const HTTP = require("HTTPUtils").HTTP;
    const request = { url: closure_3.GUILD_TEMPLATE(arg0, code), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
    const patch = HTTP.patch;
    obj = { name, description };
    obj3 = require("HTTPUtils");
    const patchResult = patch(request);
    return patchResult.then((body) => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code };
      obj.dispatch(obj2);
    });
  },
  deleteGuildTemplate(guildId, code) {
    let obj2;
    _require = guildId;
    const HTTP = require("HTTPUtils").HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(guildId, code), oldFormErrors: true, rejectWithError: obj2.rejectWithMigratedError() };
    const del = HTTP.del;
    obj2 = require("HTTPUtils");
    const delResult = del(obj);
    return delResult.then(() => {
      const obj = DispatcherDefault;
      const obj2 = { type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId, code };
      obj.dispatch(obj2);
    });
  }
};
let result = size.fileFinishedImporting("modules/guild_templates/GuildTemplateActionCreators.tsx");

export default obj;
