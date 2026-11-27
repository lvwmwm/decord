// Module ID: 11457
// Function ID: 11458
// Name: startConjureScopeMigration
// Dependencies: [5, 7706, 4, 4245, 1112, 11458, 10071, 11459, 5827, 7674, 11461, 2]
// Exports: conjureScopeMigrationMessage, conjureScopeMigrationRequestMaxLength, default

// Module 11457 (startConjureScopeMigration)
import logger_Logger from "logger/Logger" /* 4 */;
import intl2 from "intl" /* 1112 */;
import _modDef4245 from "module_4245" /* 4245 */;
import createNonce from "createNonce" /* 10071 */;
import conjureUserMessageLimit from "conjureUserMessageLimit" /* 11458 */;
import conjureSendToProject from "conjureSendToProject" /* 11459 */;
import openConjureProjectInBuilderDefault from "openConjureProjectInBuilder" /* 11461 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7706 */;
import size from "module_2" /* 2 */;

let closure_2, closure_4, err;

function sendConjureScopeMigrationMessage() {
  return obj(...arguments);
}
let obj = function _sendConjureScopeMigrationMessage() {
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
            obj6 = closure_131_0(closure_131_2[8]);
            return obj5;
          } else if (2 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              const obj11 = closure_131_0(closure_131_2[9]);
              obj11.forgetEarlyTicket(projectId);
              c5 = 2;
              c6 = 5;
              c7 = 1;
              const obj8 = { value: obj12.sendConjureMessageToProject(projectId, closure_1, nonce), done: false };
              obj12 = closure_131_0(closure_131_2[7]);
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
obj = { added: _modDef4245.YXmrDJ, removed: _modDef4245.OYaecm, moved: _modDef4245.EmQX8f };
const obj2 = { added: _modDef4245.QxOTur, removed: _modDef4245.vmlwZE, moved: _modDef4245.Ot15Gc };
const result = size.fileFinishedImporting("modules/conjure/server_share/startConjureScopeMigration.tsx");

export default function startConjureScopeMigration(id, arg1) {
  let stringResult1;
  let tmp6;
  openConjureProjectInBuilderDefault(id);
  id = id.id;
  const publishStatus = ConjurePublishStatusStore.getPublishStatus(id.id);
  let publishState;
  const tmp3 = sendConjureScopeMigrationMessage;
  if (publishStatus != null) {
    publishState = publishStatus.publishState;
  }
  if (null != publishState) {
    tmp6 = "nothing_built" !== publishState;
  } else {
    const prop = id.preview_supported_surfaces;
    let num;
    if (prop != null) {
      num = prop.length;
    }
    if (num == null) {
      num = 0;
    }
    tmp6 = num > 0;
    if (!tmp6) {
      const supported_surfaces = id.supported_surfaces;
      let num3;
      if (supported_surfaces != null) {
        num3 = supported_surfaces.length;
      }
      if (num3 == null) {
        num3 = 0;
      }
      tmp6 = num3 > 0;
    }
  }
  const intl = intl2.intl;
  const string = intl.string;
  if (tmp6) {
    const stringResult = string(obj[arg1]);
    const trim = "".trim;
    const trimmed = "".trim();
    let combined = stringResult;
    if ("" !== trimmed) {
      const _HermesInternal = HermesInternal;
      combined = "" + stringResult + "\n\n" + trimmed;
    }
    stringResult1 = combined;
  } else {
    stringResult1 = string(obj2[arg1]);
  }
  tmp3(id, stringResult1);
};
export function conjureScopeMigrationMessage(added, trimmed) {
  let str = trimmed;
  if (trimmed === undefined) {
    str = "";
  }
  const intl = intl2.intl;
  const stringResult = intl.string(obj[added]);
  trimmed = str.trim();
  let combined = stringResult;
  if ("" !== trimmed) {
    const _HermesInternal = HermesInternal;
    combined = "" + stringResult + "\n\n" + trimmed;
  }
  return combined;
}
export function conjureScopeMigrationRequestMaxLength() {
  const values = Object.values(obj);
  const items = [
    ...values.map((item) => {
      const intl = intl2.intl;
      return intl.string(item).length;
    })
  ];
  const applyResult = max.apply(items);
  return conjureUserMessageLimit.CONJURE_USER_MESSAGE_MAX_LENGTH - applyResult - 2;
}
export { sendConjureScopeMigrationMessage };
