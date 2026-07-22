// Module ID: 5713
// Function ID: 49123
// Name: map
// Dependencies: [3154116625, 1660944388]

// Module 5713 (map)
const _module = require(dependencyMap[0]);
({ Endpoints: closure_3, AnalyticEvents: closure_4 } = _module);
const map = new Map();
function resolveGuildTemplate(code) {
  const require = code;
  let obj = importDefault(dependencyMap[1]);
  if (obj.isDispatching()) {
    const resolved = Promise.resolve();
    return resolved.then(() => callback2(arg0));
  } else {
    let value = map.get(code);
    if (null != value) {
      return value;
    } else {
      obj = { type: "GUILD_TEMPLATE_RESOLVE", code };
      importDefault(dependencyMap[1]).dispatch(obj);
      const HTTP = require(dependencyMap[2]).HTTP;
      obj = { y: null, isArray: null, accessible: null, url: closure_3.UNRESOLVED_GUILD_TEMPLATE(code) };
      value = HTTP.get(obj);
      const obj2 = importDefault(dependencyMap[1]);
      const cleanupPromise = value.then((body) => {
        body = body.body;
        let obj = callback(closure_2[3]);
        obj = { resolved: true, guild_template_code: body, guild_template_name: body.name, guild_template_description: body.description, guild_template_guild_id: body.source_guild_id };
        obj.track(constants.GUILD_TEMPLATE_RESOLVED, obj);
        obj = { type: "GUILD_TEMPLATE_RESOLVE_SUCCESS", guildTemplate: body, code: body };
        callback(closure_2[1]).dispatch(obj);
        const obj3 = callback(closure_2[1]);
        return { guildTemplate: callback(closure_2[4])(body), code: body };
      }, () => {
        let obj = callback(closure_2[3]);
        obj = { resolved: false, guild_template_code: arg0 };
        obj.track(constants.GUILD_TEMPLATE_RESOLVED, obj);
        obj = { type: "GUILD_TEMPLATE_RESOLVE_FAILURE", code: arg0 };
        callback(closure_2[1]).dispatch(obj);
        return { guildTemplate: null, code: arg0 };
      }).finally(() => {
        set.delete(arg0);
      });
      const result = map.set(code, cleanupPromise);
      return cleanupPromise;
    }
  }
}
const _module1 = require(dependencyMap[5]);
const result = _module1.fileFinishedImporting("modules/guild_templates/GuildTemplateActionCreators.tsx");

export default {
  resolveGuildTemplate,
  loadTemplatesForGuild(arg0) {
    const HTTP = require(dependencyMap[2]).HTTP;
    const obj = { url: closure_3.GUILD_TEMPLATES(arg0), oldFormErrors: true, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const value = HTTP.get(obj);
    return value.then((body) => {
      let obj = callback(closure_2[1]);
      obj = { type: "GUILD_TEMPLATE_LOAD_FOR_GUILD_SUCCESS", guildTemplates: body.body };
      obj.dispatch(obj);
      return body;
    });
  },
  createGuildTemplate(arg0, name, description) {
    const HTTP = require(dependencyMap[2]).HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATES(arg0), body: obj, oldFormErrors: true };
    obj = { name, description, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const obj3 = require(dependencyMap[2]);
    return HTTP.post(obj).then((body) => {
      let obj = callback(closure_2[1]);
      obj = { type: "GUILD_TEMPLATE_CREATE_SUCCESS", guildTemplate: body.body, code: body.body.code };
      obj.dispatch(obj);
    });
  },
  syncGuildTemplate(arg0, arg1) {
    const require = arg1;
    const HTTP = require(dependencyMap[2]).HTTP;
    const obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), oldFormErrors: true, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const obj2 = require(dependencyMap[2]);
    return HTTP.put(obj).then((body) => {
      let obj = callback(closure_2[1]);
      obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code: arg1 };
      obj.dispatch(obj);
    });
  },
  updateGuildTemplate(arg0, arg1, name, description) {
    const require = arg1;
    const HTTP = require(dependencyMap[2]).HTTP;
    let obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), body: obj, oldFormErrors: true };
    obj = { name, description, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const obj3 = require(dependencyMap[2]);
    return HTTP.patch(obj).then((body) => {
      let obj = callback(closure_2[1]);
      obj = { type: "GUILD_TEMPLATE_SYNC_SUCCESS", guildTemplate: body.body, code: arg1 };
      obj.dispatch(obj);
    });
  },
  deleteGuildTemplate(arg0, arg1) {
    const require = arg0;
    const importDefault = arg1;
    const HTTP = require(dependencyMap[2]).HTTP;
    const obj = { url: closure_3.GUILD_TEMPLATE(arg0, arg1), oldFormErrors: true, rejectWithError: require(dependencyMap[2]).rejectWithMigratedError() };
    const obj2 = require(dependencyMap[2]);
    return HTTP.del(obj).then(() => {
      let obj = arg1(closure_2[1]);
      obj = { type: "GUILD_TEMPLATE_DELETE_SUCCESS", guildId: arg0, code: arg1 };
      obj.dispatch(obj);
    });
  }
};
