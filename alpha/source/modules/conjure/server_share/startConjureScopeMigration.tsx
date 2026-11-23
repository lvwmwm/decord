// Module ID: 18297
// Function ID: 18298
// Name: startConjureScopeMigration
// Dependencies: [5, 6980, 4, 4190, 8447, 18298, 5662, 6940, 13494, 1112, 2]
// Exports: default

// Module 18297 (startConjureScopeMigration)
import logger_Logger from "logger/Logger" /* 4 */;
import intl2 from "intl" /* 1112 */;
import _modDef4190 from "module_4190" /* 4190 */;
import createNonce from "createNonce" /* 8447 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 13494 */;
import conjureSendToProject from "conjureSendToProject" /* 18298 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 6980 */;
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
          return { value: "HermesInternal", done: null };
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
            return { value: "HermesInternal", done: null };
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
obj = { added: _modDef4190.YXmrDJ, removed: _modDef4190.OYaecm };
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
  if (tmp5) {
    id = id.id;
    const intl = intl2.intl;
    sendMigrationMessage(id, intl.string(obj[arg1]));
  }
};
