// Module ID: 18511
// Function ID: 18512
// Name: startConjureScopeMigration
// Dependencies: [5, 7706, 4, 4245, 10070, 18512, 5827, 7674, 13595, 1112, 2]
// Exports: default

// Module 18511 (startConjureScopeMigration)
import logger_Logger from "logger/Logger" /* 4 */;
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import createNonce from "createNonce" /* 10070 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 13595 */;
import conjureSendToProject from "conjureSendToProject" /* 18512 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;
import size from "module_2" /* 2 */;

let closure_2, closure_4, err;

let obj = function _sendMigrationMessage() {
  obj = _asyncToGenerator(async (projectId, arg1) => {
    let closure_1 = arg1;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj12;
      let obj14;
      let obj6;
      if (c7 === 2) {
        c7 = 3;
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
          let nonce;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              err = tmp;
              closure_2 = tmp4;
              const obj13 = createNonce;
              nonce = obj13.createNonce();
              c5 = 1;
              c6 = 3;
              c7 = 1;
              const obj4 = { value: obj14.sendConjureMessageToProject(projectId, closure_1, nonce), done: false };
              obj14 = conjureSendToProject;
              return obj4;
            }
          } else if (1 === c6) {
            c5 = 0;
            c6 = 2;
            c7 = 1;
            const obj5 = { value: obj6.sleep(1500), done: false };
            obj6 = closure_131_0(closure_131_2[6]);
            return obj5;
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              const obj11 = closure_131_0(closure_131_2[7]);
              obj11.forgetEarlyTicket(projectId);
              c5 = 2;
              c6 = 5;
              c7 = 1;
              const obj8 = { value: obj12.sendConjureMessageToProject(projectId, closure_1, nonce), done: false };
              obj12 = closure_131_0(closure_131_2[5]);
              return obj8;
            }
          } else {
            if (3 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                return { value, done: true };
              } else {
                c5 = 0;
              }
            } else if (4 === c6) {
              c5 = 0;
              err = closure_4;
              const obj10 = { projectId, err };
              closure_131_5.warn("scope migration message failed", obj10);
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              c5 = 0;
            }
            c7 = 3;
            return { value: "HermesInternal", done: "+95" };
          }
        } catch (tmp16) {
          closure_4 = tmp16;
          if (0 === c5) {
            c7 = 3;
            throw tmp16;
          } else if (1 === tmp18) {
            c6 = 1;
          } else {
            c6 = 4;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const logger = new logger_Logger.Logger("startConjureScopeMigration");
obj = { added: _modDef4245.YXmrDJ, removed: _modDef4245.OYaecm, moved: _modDef4245.EmQX8f };
const obj2 = { added: _modDef4245.QxOTur, removed: _modDef4245.vmlwZE, moved: _modDef4245.Ot15Gc };
const result = size.fileFinishedImporting("modules/conjure/server_share/startConjureScopeMigration.tsx");

export default function startConjureScopeMigration(id, arg1) {
  let tmp5;
  function sendMigrationMessage() {
    return obj(...arguments);
  }
  openConjureProjectInBuilderDefault(id);
  const publishStatus = ConjurePublishStatusStore.getPublishStatus(id.id);
  let publishState;
  if (publishStatus != null) {
    publishState = publishStatus.publishState;
  }
  if (null != publishState) {
    tmp5 = "nothing_built" !== publishState;
  } else {
    const prop = id.preview_supported_surfaces;
    let num;
    if (prop != null) {
      num = prop.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp5 = num > 0;
    if (!tmp5) {
      const supported_surfaces = id.supported_surfaces;
      let num3;
      if (supported_surfaces != null) {
        num3 = supported_surfaces.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp5 = num3 > 0;
    }
  }
  id = id.id;
  const tmp6 = tmp5 ? obj : obj2;
  const intl = intl2.intl;
  !sendMigrationMessage(id, intl.string(tmp6[arg1]));
};
