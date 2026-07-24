// Module ID: 5718
// Function ID: 49160
// Name: map
// Dependencies: [653, 686, 507, 675, 5719, 2]

// Module 5718 (map)
import ME from "ME";

let closure_3;
let closure_4;
({ Endpoints: closure_3, AnalyticEvents: closure_4 } = ME);
const map = new Map();
function resolveGuildTemplate(code) {
  const _require = code;
  let obj = importDefault(686);
  if (obj.isDispatching()) {
    const resolved = Promise.resolve();
    return resolved.then(() => outer1_6(closure_0));
  } else {
    let value = map.get(code);
    if (null != value) {
      return value;
    } else {
      obj = { type: "GUILD_TEMPLATE_RESOLVE", code };
      importDefault(686).dispatch(obj);
      const HTTP = _require(507).HTTP;
      obj = { url: closure_3.UNRESOLVED_GUILD_TEMPLATE(code), oldFormErrors: true, rejectWithError: true };
      value = HTTP.get(obj);
      const obj2 = importDefault(686);
      const cleanupPromise = value.then((body) => {
        body = body.body;
        let obj = outer1_1(outer1_2[3]);
        obj = { resolved: true, guild_template_code: closure_0, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
        obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
        obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: closure_0 };
        outer1_1(outer1_2[1]).dispatch(obj);
        const obj3 = outer1_1(outer1_2[1]);
        return { guildTemplate: outer1_1(outer1_2[4])(body), code: closure_0 };
      }, () => {
        let obj = outer1_1(outer1_2[3]);
        obj = { resolved: false, guild_template_code: closure_0 };
        obj.track(outer1_4.GUILD_TEMPLATE_RESOLVED, obj);
        obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: closure_0 };
        outer1_1(outer1_2[1]).dispatch(obj);
        return { guildTemplate: null, code: closure_0 };
      }).finally(() => {
        outer1_5.delete(closure_0);
      });
      const result = map.set(code, cleanupPromise);
      return cleanupPromise;
    }
  }
}
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_templates/GuildTemplateActionCreators.tsx");

export default {
  resolveGuildTemplate,
  loadTemplatesForGuild(outer1_0) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATES(outer1_0), oldFormErrors: true, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: body.body };
      obj.dispatch(obj);
      return body;
    });
  },
  createGuildTemplate(outer1_0, name, description) {
    const HTTP = require(507) /* _isNativeReflectConstruct */.HTTP;
    obj = { url: closure_3.GUILD_TEMPLATES(outer1_0), body: obj, oldFormErrors: true };
    obj = { name, description, rejectWithError: require(507) /* _isNativeReflectConstruct */.rejectWithMigratedError() };
    const obj3 = require(507) /* _isNativeReflectConstruct */;
    return HTTP.post(obj).then((body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: body.body, code: body.body.code };
      obj.dispatch(obj);
    });
  },
  syncGuildTemplate(arg0, arg1) {
    const _require = arg1;
    const HTTP = _require(507).HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj2 = _require(507);
    return HTTP.put(obj).then((body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code: closure_0 };
      obj.dispatch(obj);
    });
  },
  updateGuildTemplate(arg0, arg1, name, description) {
    const _require = arg1;
    const HTTP = _require(507).HTTP;
    obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), body: obj, oldFormErrors: true };
    obj = { name, description, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj3 = _require(507);
    return HTTP.patch(obj).then((body) => {
      let obj = outer1_1(outer1_2[1]);
      obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code: closure_0 };
      obj.dispatch(obj);
    });
  },
  deleteGuildTemplate(arg0, arg1) {
    const _require = arg0;
    let closure_1 = arg1;
    const HTTP = _require(507).HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), oldFormErrors: true, rejectWithError: _require(507).rejectWithMigratedError() };
    const obj2 = _require(507);
    return HTTP.del(obj).then(() => {
      let obj = callback(outer1_2[1]);
      obj = { type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId: closure_0, code: callback };
      obj.dispatch(obj);
    });
  }
};
