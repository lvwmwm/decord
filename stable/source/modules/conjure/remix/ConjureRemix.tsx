// Module ID: 11628
// Function ID: 11629
// Name: ConjureRemix
// Dependencies: [5, 10978, 1128, 3883, 11004, 10999, 11068, 2]
// Exports: remixConjureProjectInto

// Module 11628 (ConjureRemix)
import intl3 from "intl" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10999 */;
import ConjureWorkerTickets from "ConjureWorkerTickets" /* 11004 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10978 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3, projectId;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj = function _remixConjureProjectInto() {
  obj = _asyncToGenerator(async (projectId, guild_id) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      let acceptRemixResult;
      let deleteProjectResult;
      let intl2;
      let name;
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
          let obj5;
          let c2;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_2 = tmp4;
              projectId = undefined;
              closure_3 = undefined;
              obj5 = { ok: false, message: intl2.string(_modDef3883.Cn8H0Y) };
              intl2 = intl3.intl;
              const obj15 = ConjureWorkerTickets;
              const mintRemixTicketResult = obj15.mintRemixTicket(projectId.id);
              c2 = mintRemixTicketResult;
              mintRemixTicketResult.catch(() => {

              });
              c4 = 1;
              const obj6 = { name: "" + name.slice(0, 120) + closure_2_7, guild_id, install_scope: projectId.install_scope };
              name = projectId.name;
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
                  closure_131_4(projectId);
                  if ("rejected" === closure_3) {
                    c5 = 4;
                    c6 = 1;
                    const obj7 = closure_131_0(closure_131_2[5]);
                    const obj11 = {
                      value: deleteProjectResult.catch(() => {

                                    }),
                      done: false
                    };
                    deleteProjectResult = obj7.deleteProject(projectId);
                    return obj11;
                  }
                } else {
                  const intl = closure_131_0(closure_131_2[2]).intl;
                  closure_131_6(projectId, intl.string(closure_131_1(closure_131_2[3]).jviD6Y), undefined, { remix: true });
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
                closure_131_5(projectId);
                c5 = 2;
                c6 = 1;
                const obj2 = closure_131_0(closure_131_2[6]);
                const obj16 = { value: acceptRemixResult.catch(() => "rejected"), done: false };
                acceptRemixResult = obj2.acceptRemix(c2, projectId);
                return obj16;
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
        } catch (tmp36) {
          if (0 === c4) {
            c6 = 3;
            throw tmp36;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ closeConnection: closure_4, ensureConnection: hasOwnProperty, sendUserMessage: metroRequire } = ConjureConnectionStore);
let c7 = " (Remix)";
const result = size.fileFinishedImporting("modules/conjure/remix/ConjureRemix.tsx");

export const remixConjureProjectInto = function remixConjureProjectInto() {
  return obj(...arguments);
};
