// Module ID: 11960
// Function ID: 11961
// Name: AcceptGuildTemplateActionCreators
// Dependencies: [5528, 2067, 1078, 577, 1275, 7618, 2]

// Module 11960 (AcceptGuildTemplateActionCreators)
import DispatcherDefault from "Dispatcher" /* 577 */;
import transitionToGuild from "transitionToGuild" /* 7618 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5528 */;
import GuildStore from "GuildStore" /* 2067 */;

require = fn;
const Endpoints = fn(1078).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_templates/AcceptGuildTemplateActionCreators.tsx");

export default {
  acceptGuildTemplate(code, first1, first12) {
    importDefault = first1;
    dependencyMap = first12;
    DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_ACCEPT", code });
    const obj2 = { type: "GUILD_TEMPLATE_ACCEPT", code };
    return new Promise((code, arg1) => {
      name = arg1;
      const HTTP = code(icon[4]).HTTP;
      const request = { url: Endpoints.UNRESOLVED_GUILD_TEMPLATE(code), body: { name, icon }, oldFormErrors: true, rejectWithError: code(icon[4]).rejectWithMigratedError() };
      const obj = { name, icon };
      let obj3 = code(icon[4]);
      HTTP.post(request).then((body) => {
        body = body.body;
        closure_1(dependencyMap[3]).dispatch({ type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code, guild: body });
        if (connected.isConnected()) {
          const result = GuildStore.addConditionalChangeListener(() => {
            if (null != GuildStore.getGuild(body.id)) {
              transitionToGuild.transitionToGuild(tmp.id);
              body(tmp);
              return false;
            }
          });
        } else {
          code(dependencyMap[5]).transitionToGuild(body.id);
          body(body);
          const obj3 = code(dependencyMap[5]);
        }
      }, (body) => {
        DispatcherDefault.dispatch({ type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code });
        closure_1(body.body);
      });
    });
  }
};
