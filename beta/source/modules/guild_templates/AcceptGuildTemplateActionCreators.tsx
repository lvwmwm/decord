// Module ID: 11147
// Function ID: 11148
// Name: AcceptGuildTemplateActionCreators
// Dependencies: [5590, 2073, 1086, 585, 1283, 6761, 2]

// Module 11147 (AcceptGuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 585 */;
import Constants from "Constants" /* 1086 */;
import transitionToGuild from "transitionToGuild" /* 6761 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5590 */;
import GuildStore from "GuildStore" /* 2073 */;
import size from "module_2" /* 2 */;

let dependencyMap, importDefault, name;

const Endpoints = Constants.Endpoints;
let obj = {
  acceptGuildTemplate(code, first1, first12) {
    let connected;
    let icon;
    importDefault = first1;
    dependencyMap = first12;
    let obj = DispatcherDefault;
    let obj2 = { type: "GUILD_TEMPLATE_ACCEPT", code };
    obj.dispatch(obj2);
    const promise = new Promise((code, arg1) => {
      let closure_1;
      let obj;
      let obj3;
      name = arg1;
      const HTTP = code(icon[4]).HTTP;
      const request = { url: Endpoints.UNRESOLVED_GUILD_TEMPLATE(code), body: obj, oldFormErrors: true, rejectWithError: obj3.rejectWithMigratedError() };
      const post = HTTP.post;
      obj = { name, icon };
      obj3 = code(icon[4]);
      const postResult = post(request);
      postResult.then((body) => {
        body = body.body;
        let obj = name(icon[3]);
        const obj2 = { type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code, guild: body };
        obj.dispatch(obj2);
        const tmp = icon;
        if (connected.isConnected()) {
          const result = GuildStore.addConditionalChangeListener(() => {
            if (null != GuildStore.getGuild(body.id)) {
              const obj = transitionToGuild;
              obj.transitionToGuild(body.id);
              body(body);
              return false;
            }
          });
        } else {
          const obj3 = code(tmp[5]);
          obj3.transitionToGuild(body.id);
          body(body);
        }
      }, (body) => {
        const obj = DispatcherDefault;
        const obj2 = { type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code };
        obj.dispatch(obj2);
        closure_1(body.body);
      });
    });
    return promise;
  }
};
let result = size.fileFinishedImporting("modules/guild_templates/AcceptGuildTemplateActionCreators.tsx");

export default obj;
