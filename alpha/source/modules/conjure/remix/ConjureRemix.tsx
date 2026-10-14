// Module ID: 11309
// Function ID: 11310
// Name: ConjureRemix
// Dependencies: [5, 10663, 1126, 3849, 10684, 10752, 2]
// Exports: remixConjureProjectInto

// Module 11309 (ConjureRemix)
import intl3 from "intl" /* 1126 */;
import _modDef3849 from "module_3849" /* 3849 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10684 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10663 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3;

let closure_4;
let hasOwnProperty;
let obj = function _remixConjureProjectInto() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    const user = arg0;
    let closure_1 = arg1;
    let c5 = 0;
    c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let acceptRemixResult;
      let deleteProjectResult;
      let intl2;
      let name;
      let tmp19;
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
          let projectId;
          let obj5;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp19;
              projectId = undefined;
              closure_3 = undefined;
              obj5 = { ok: false, message: intl2.string(_modDef3849.Cn8H0Y) };
              intl2 = intl3.intl;
              c4 = 1;
              const obj6 = { name: "" + name.slice(0, 120) + closure_2_6, guild_id: projectId, install_scope: user.install_scope };
              name = user.name;
              const createProject = ConjureActionCreators.createProject;
              const _HermesInternal = HermesInternal;
              ConjureActionCreators;
              c5 = 3;
              c6 = 1;
              const obj8 = { value: createProject(obj6), done: false };
              return obj8;
            }
          } else if (1 === c5) {
            c4 = 0;
            c6 = 3;
            return { value: obj5, done: true };
          } else {
            if (2 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                let obj12;
                closure_3 = value;
                if ("accepted" !== closure_3) {
                  if ("rejected" === closure_3) {
                    c5 = 4;
                    c6 = 1;
                    const obj7 = closure_131_0(closure_131_2[4]);
                    const obj11 = {
                      value: deleteProjectResult.catch(() => {

                                    }),
                      done: false
                    };
                    deleteProjectResult = obj7.deleteProject(projectId);
                    return obj11;
                  }
                } else {
                  closure_131_4(projectId);
                  const intl = closure_131_0(closure_131_2[2]).intl;
                  closure_131_5(projectId, intl.string(closure_131_1(closure_131_2[3]).jviD6Y), undefined, { remix: true });
                  obj12 = { ok: true, projectId };
                }
                c6 = 3;
                return { value: obj12, done: true };
              }
            } else if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 0;
                c6 = 3;
                return { value, done: true };
              } else {
                projectId = value;
                c4 = 0;
                c5 = 2;
                c6 = 1;
                const obj2 = closure_131_0(closure_131_2[5]);
                const obj15 = { value: acceptRemixResult.catch(() => "rejected"), done: false };
                acceptRemixResult = obj2.acceptRemix(user.id, projectId);
                return obj15;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            }
            obj12 = obj5;
          }
        } catch (tmp18) {
          tmp19 = c4;
          if (0 === c4) {
            c6 = 3;
            throw tmp18;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ ensureConnection: closure_4, sendUserMessage: hasOwnProperty } = ConjureConnectionStore);
let c6 = " (Remix)";
const result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export const remixConjureProjectInto = function remixConjureProjectInto() {
  return obj(...arguments);
};
