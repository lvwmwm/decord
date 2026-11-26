// Module ID: 18857
// Function ID: 18858
// Name: createConjureProject
// Dependencies: [5, 7693, 7667, 18858, 2]
// Exports: default

// Module 18857 (createConjureProject)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7693 */;
import size from "module_2" /* 2 */;

let closure_1, guild_id, templateId;

let c3;
let closure_4;
let obj = function _createConjureProject() {
  obj = _asyncToGenerator(async (guild_id) => {
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c1;
      let c2;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: "+95" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              let closure_2 = tmp;
              guild_id = undefined;
              c1 = undefined;
              templateId = undefined;
              ({ guildId: c0, modelSettings: c1, templateId: c2 } = closure_0);
              value = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "Path", done: true };
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              let obj6;
              const createProject = closure_131_0(closure_131_1[2]).createProject;
              closure_131_0(closure_131_1[2]);
              if (null != guild_id) {
                obj6 = { guild_id };
                const obj5 = { guild_id };
              } else {
                obj6 = {};
              }
              c4 = 2;
              c5 = 1;
              const obj7 = { value: createProject(obj6), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const obj9 = { templateId };
            closure_131_3(value, obj9);
            closure_1 = c1;
            const tmp31 = closure_131_4;
            const tmp32 = value;
            if (c1 == null) {
              closure_1 = closure_131_0(closure_131_1[3]).CONJURE_DEFAULT_TIER_SETTINGS;
            }
            tmp31(tmp32, closure_1);
            c5 = 3;
            return { value, done: true };
          }
        } catch (tmp21) {
          c5 = 3;
          throw tmp21;
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
