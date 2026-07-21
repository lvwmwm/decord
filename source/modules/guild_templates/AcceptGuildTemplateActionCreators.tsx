// Module ID: 10939
// Function ID: 85069
// Dependencies: []

// Module 10939
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_templates/AcceptGuildTemplateActionCreators.tsx");

export default {
  acceptGuildTemplate(code, first, first1) {
    first = code;
    const importDefault = first;
    const dependencyMap = first1;
    let obj = importDefault(dependencyMap[3]);
    obj = { type: "GUILD_TEMPLATE_ACCEPT", code };
    obj.dispatch(obj);
    return new Promise((code) => {
      const HTTP = code(arg2[4]).HTTP;
      let obj = { url: closure_5.UNRESOLVED_GUILD_TEMPLATE(code), body: obj, oldFormErrors: true };
      obj = { name: arg1, icon: arg2, rejectWithError: code(arg2[4]).rejectWithMigratedError() };
      const obj3 = code(arg2[4]);
      HTTP.post(obj).then((body) => {
        body = body.body;
        let obj = arg1(closure_2[3]);
        obj = { type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code: body, guild: body };
        obj.dispatch(obj);
        if (connected.isConnected()) {
          const result = closure_4.addConditionalChangeListener(() => {
            if (null != guild.getGuild(body.id)) {
              body(closure_2[5]).transitionToGuild(body.id);
              body(body);
              return false;
            }
          });
        } else {
          body(closure_2[5]).transitionToGuild(body.id);
          body(body);
          const obj3 = body(closure_2[5]);
        }
      }, (body) => {
        let obj = arg1(closure_2[3]);
        obj = { type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: body };
        obj.dispatch(obj);
        arg1(body.body);
      });
    });
  }
};
