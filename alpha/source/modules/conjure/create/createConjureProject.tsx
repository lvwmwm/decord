// Module ID: 12790
// Function ID: 12791
// Name: createConjureProject
// Dependencies: [5, 10807, 10832, 12791, 2]
// Exports: default

// Module 12790 (createConjureProject)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10807 */;
import size from "module_2" /* 2 */;

let closure_2, install_scope, value;

let c3;
let closure_4;
let obj = function _createConjureProject() {
  obj = _asyncToGenerator(async (guild_id) => {
    let closure_3;
    let templateId;
    let c5 = 0;
    let c6 = 0;
    const iter = (async (arg0) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      let obj6;
      ({ guildId: c0, installScope: c1, prompt: c2, modelSettings: c3, templateId: c4 } = closure_0);
      await "Reflect";
      const createProject = closure_132_0(closure_132_1[2]).createProject;
      closure_132_0(closure_132_1[2]);
      if (null != install_scope) {
        obj6 = { guild_id, install_scope };
      } else {
        obj6 = { guild_id, auto_install_scope: true, prompt: install_scope.slice(0, 4000) };
        install_scope = c2;
        if (c2 == null) {
          install_scope = "";
        }
      }
      value = await createProject(obj6);
      const obj9 = { templateId };
      closure_132_3(value, obj9);
      closure_2 = c3;
      const tmp29 = closure_132_4;
      const tmp30 = value;
      if (c3 == null) {
        closure_2 = closure_132_0(closure_132_1[3]).CONJURE_DEFAULT_TIER_SETTINGS;
      }
      tmp29(tmp30, closure_2);
      return value;
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
({ ensureConnection: c3, stageModelSettings: closure_4 } = ConjureConnectionStore);
const result = size.fileFinishedImporting("modules/conjure/create/createConjureProject.tsx");

export default function createConjureProject() {
  return obj(...arguments);
};
