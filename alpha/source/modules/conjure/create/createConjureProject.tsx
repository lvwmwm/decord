// Module ID: 11750
// Function ID: 11751
// Name: createConjureProject
// Dependencies: [5, 10698, 10720, 11748, 2]
// Exports: default

// Module 11750 (createConjureProject)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10698 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, guild_id, templateId;

let c3;
let closure_4;
let obj = function _createConjureProject() {
  obj = _asyncToGenerator(async (guild_id) => {
    let c5 = 0;
    let c6 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      let c3;
      let c4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let _var;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let closure_4 = tmp4;
              closure_3 = tmp;
              guild_id = undefined;
              _var = undefined;
              c2 = undefined;
              c3 = undefined;
              templateId = undefined;
              ({ guildId: c0, installScope: c1, prompt: c2, modelSettings: c3, templateId: c4 } = closure_0);
              value = undefined;
              c5 = 1;
              c6 = 1;
              return { value: "Reflect", done: true };
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let obj6;
              const createProject = closure_132_0(closure_132_1[2]).createProject;
              closure_132_0(closure_132_1[2]);
              if (null != _var) {
                obj6 = { guild_id, install_scope: _var };
                const obj5 = { guild_id, install_scope: _var };
              } else {
                obj6 = { guild_id, auto_install_scope: true, prompt: _var };
                _var = c2;
                if (c2 == null) {
                  _var = "";
                }
              }
              c5 = 2;
              c6 = 1;
              const obj7 = { value: createProject(obj6), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            const obj9 = { templateId };
            closure_132_3(value, obj9);
            closure_2 = c3;
            const tmp29 = closure_132_4;
            const tmp30 = value;
            if (c3 == null) {
              closure_2 = closure_132_0(closure_132_1[3]).CONJURE_DEFAULT_TIER_SETTINGS;
            }
            tmp29(tmp30, closure_2);
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp19) {
          c6 = 3;
          throw tmp19;
        }
      }
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
