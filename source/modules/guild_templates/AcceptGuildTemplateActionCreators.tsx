// Module ID: 10977
// Function ID: 85320
// Dependencies: [4808, 1838, 653, 686, 507, 5737, 2]

// Module 10977
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import { Endpoints } from "ME";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/guild_templates/AcceptGuildTemplateActionCreators.tsx");

export default {
  acceptGuildTemplate(code, first, first1) {
    let closure_0 = code;
    const importDefault = first;
    const dependencyMap = first1;
    let obj = importDefault(686);
    obj = { type: "GUILD_TEMPLATE_ACCEPT", code };
    obj.dispatch(obj);
    return new Promise((closure_0) => {
      const code = closure_0;
      let closure_1 = arg1;
      const HTTP = code(507).HTTP;
      obj = { url: outer1_5.UNRESOLVED_GUILD_TEMPLATE(code), body: obj, oldFormErrors: true };
      obj = { name: closure_1, icon: dependencyMap, rejectWithError: code(507).rejectWithMigratedError() };
      let obj3 = code(507);
      HTTP.post(obj).then((body) => {
        body = body.body;
        let obj = callback2(686);
        obj = { type: "GUILD_TEMPLATE_ACCEPT_SUCCESS", code: callback, guild: body };
        obj.dispatch(obj);
        if (outer2_3.isConnected()) {
          const result = outer2_4.addConditionalChangeListener(() => {
            if (null != outer3_4.getGuild(body.id)) {
              body(table[5]).transitionToGuild(body.id);
              body(body);
              return false;
            }
          });
        } else {
          callback(5737).transitionToGuild(body.id);
          body(body);
          const obj3 = callback(5737);
        }
      }, (body) => {
        let obj = callback2(686);
        obj = { type: "GUILD_TEMPLATE_ACCEPT_FAILURE", code: closure_0 };
        obj.dispatch(obj);
        callback2(body.body);
      });
    });
  }
};
