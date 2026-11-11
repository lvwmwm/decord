// Module ID: 13872
// Function ID: 13873
// Name: createConjureProject
// Dependencies: [5, 7301, 7265, 13873, 2]
// Exports: default

// Module 13872 (createConjureProject)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 7301 */;
import size from "module_2" /* 2 */;

let closure_1, closure_2, guild_id, templateId;

let c3;
let closure_4;
let obj = function _createConjureProject() {
  obj = _asyncToGenerator(async (guild_id) => {
    let c4 = 0;
    let c5 = 0;
    const iter = (async (arg0, value) => {
      let c0;
      let c2;
      let c3;
      let installScope;
      let obj3;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
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
              let closure_3 = tmp4;
              closure_2 = tmp;
              guild_id = undefined;
              installScope = undefined;
              c2 = undefined;
              templateId = undefined;
              ({ guildId: c0, installScope } = closure_0);
              const tmp17 = closure_0;
              if (installScope === undefined) {
                installScope = "user";
              }
              ({ modelSettings: c2, templateId: c3 } = tmp17);
              value = undefined;
              c4 = 1;
              c5 = 1;
              return { value: "flexDirection", done: true };
            }
          } else if (1 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              c4 = 2;
              c5 = 1;
              const obj6 = { guild_id, install_scope: installScope };
              const obj7 = { value: obj3.createProject(obj6), done: false };
              obj3 = closure_131_0(closure_131_1[2]);
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
            closure_1 = c2;
            const tmp28 = closure_131_4;
            const tmp29 = value;
            if (c2 == null) {
              closure_1 = closure_131_0(closure_131_1[3]).CONJURE_DEFAULT_TIER_SETTINGS;
            }
            tmp28(tmp29, closure_1);
            c5 = 3;
            return { value, done: true };
          }
        } catch (tmp18) {
          c5 = 3;
          throw tmp18;
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
