// Module ID: 12192
// Function ID: 12193
// Name: ConjureAppBuildRequest
// Dependencies: [32, 5, 19, 10970, 1126, 3862, 558, 576, 12187, 12031, 2]

// Module 12192 (ConjureAppBuildRequest)
import useConjureProjectPickerOptionsDefault from "useConjureProjectPickerOptions" /* 12187 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, flag, flag2, importDefault, nextPromise, ticket, tmp11;

function sendAppBuildRequest() {
  return obj(...arguments);
}
let obj = function _sendAppBuildRequest() {
  obj = _asyncToGenerator(async (_prompt, arg1, arg2) => {
    let closure_3;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async function(arg0, value, arg2) {
      let obj7;
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
          let tmp;
          let closure_5;
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              _prompt = closure_2;
              closure_1 = undefined;
              closure_2 = undefined;
              tmp = undefined;
              ticket = undefined;
              closure_5 = undefined;
              const items = [, ];
              const obj10 = require("ConjureWorkerTickets");
              items[0] = obj10.mintWorkerTicket(closure_1);
              const obj11 = require("ConjureWorkerTickets");
              items[1] = obj11.mintWorkerTicket(_prompt);
              c5 = 1;
              c6 = 1;
              const obj4 = { value: all(items), done: false };
              return obj4;
            }
          } else if (1 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_1 = value;
              closure_2 = closure_132_3(closure_1, 2);
              tmp = closure_2[0];
              ticket = closure_2[1];
              const _fetch = fetch;
              const _URLSearchParams = URLSearchParams;
              const self3 = this;
              const self4 = this;
              const baseUrl = tmp.baseUrl;
              const obj6 = { ticket: tmp.ticket };
              const uRLSearchParams = new URLSearchParams(obj6);
              const _HermesInternal2 = HermesInternal;
              const request = { method: "POST", body: JSON.stringify(obj7) };
              const _JSON = JSON;
              obj7 = { caller_ticket: ticket.ticket, prompt: _prompt };
              const combined = "" + baseUrl + "/agent/app-build-request?" + uRLSearchParams;
              c5 = 2;
              c6 = 1;
              const obj8 = { value: fetch(combined, request), done: false };
              return obj8;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            closure_5 = value;
            if (closure_5.ok) {
              c6 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self = this;
              const self2 = this;
              const error = new Error("app build request failed: " + closure_5.status);
              throw error;
            }
          }
        } catch (tmp12) {
          c6 = 3;
          throw tmp12;
        }
      }
    })();
  });
  return obj(...arguments);
};
let react = react_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppBuildRequestForm(arg0, prompt, arg2) {
  let _prompt;
  let closure_0;
  let projectId;
  let tmp10;
  let tmp3;
  let tmp4;
  let tmp8;
  _require = arg0;
  importDefault = prompt;
  obj = require("react");
  const cResult = obj.c(18);
  const arr = useConjureProjectPickerOptionsDefault(arg0);
  const tmp2 = _slicedToArray(react.useState(null), 2);
  [tmp3, tmp4] = tmp2;
  const tmp5 = _slicedToArray(react.useState(prompt.prompt), 2);
  const tmp6 = tmp5[1];
  [tmp8, dependencyMap] = _slicedToArray(react.useState(false), 2);
  const tmp7 = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  [tmp10, _slicedToArray] = tmp9;
  let project_id = null;
  if (arr.some((projectId) => projectId.projectId === _prompt.project_id)) {
    project_id = prompt.project_id;
  }
  if (tmp3 == null) {
    tmp3 = project_id;
  }
  if (tmp3 == null) {
    tmp3 = null;
  }
  let c4 = tmp3;
  if (cResult[0] === arr) {
    let tmp12;
    let tmp14;
    if (cResult[1] === tmp3) {
      tmp12 = cResult[2];
    }
    react = tmp12;
    if (cResult[3] !== tmp5[0]) {
      const trimmed = str.trim();
      cResult[3] = tmp5[0];
      cResult[4] = trimmed;
      tmp14 = trimmed;
    } else {
      tmp14 = cResult[4];
    }
    let tmp16 = arg2;
    let closure_6 = tmp14;
    if (arg2) {
      tmp16 = !tmp8;
    }
    if (tmp16) {
      tmp16 = null != tmp12;
    }
    if (tmp16) {
      tmp16 = "" !== tmp14;
    }
    let closure_7 = tmp16;
    if (cResult[5] === tmp16) {
      if (cResult[6] === arg0) {
        if (cResult[7] === tmp12) {
          let tmp17;
          if (cResult[8] === tmp14) {
            tmp17 = cResult[9];
          }
          if (cResult[10] === tmp16) {
            if (cResult[11] === tmp10) {
              if (cResult[12] === arr) {
                if (cResult[13] === tmp5[0]) {
                  if (cResult[14] === tmp8) {
                    if (cResult[15] === tmp17) {
                      let tmp18;
                      if (cResult[16] === tmp3) {
                        tmp18 = cResult[17];
                      }
                      return tmp18;
                    }
                  }
                }
              }
            }
          }
          const obj2 = { projects: arr, targetId: tmp3, setTargetId: tmp4, prompt: tmp5[0], setPrompt: tmp6, sending: tmp8, failed: tmp10, canSubmit: null, submit: tmp17 };
          class E {
            constructor() {
              tmp = closure_7;
              if (tmp) {
                tmp2 = closure_5;
                tmp3 = null;
                tmp = null != closure_5;
              }
              if (tmp) {
                tmp4 = closure_2;
                flag = true;
                tmp5 = closure_2(true);
                tmp6 = closure_3;
                flag2 = false;
                tmp7 = closure_3(false);
                tmp8 = sendAppBuildRequest;
                tmp9 = closure_0;
                tmp10 = closure_5;
                tmp11 = closure_6;
                promise = sendAppBuildRequest(closure_0, closure_5.projectId, closure_6);
                nextPromise = promise.then(() => {
                  const sendConjureCardReply = closure_0(dependencyMap[9]).sendConjureCardReply;
                  closure_0(dependencyMap[9]);
                  const intl = closure_0(dependencyMap[4]).intl;
                  obj = { name: projectId.name, projectId: projectId.projectId };
                  return sendConjureCardReply(closure_1_0, "" + intl.formatToPlainString(_prompt(dependencyMap[5]).jZlNst, obj) + "\n\n" + closure_1_6);
                }, () => {
                  closure_1_2(false);
                  closure_1_3(true);
                });
              }
              return;
            }
          }
          cResult[10] = tmp16;
          cResult[11] = tmp10;
          cResult[12] = arr;
          cResult[13] = tmp5[0];
          cResult[14] = tmp8;
          cResult[15] = tmp17;
          cResult[16] = tmp3;
          cResult[17] = obj2;
          tmp18 = obj2;
        }
      }
    }
    class E {
      constructor() {
        tmp = closure_7;
        if (tmp) {
          tmp2 = closure_5;
          tmp3 = null;
          tmp = null != closure_5;
        }
        if (tmp) {
          tmp4 = closure_2;
          flag = true;
          tmp5 = closure_2(true);
          tmp6 = closure_3;
          flag2 = false;
          tmp7 = closure_3(false);
          tmp8 = sendAppBuildRequest;
          tmp9 = closure_0;
          tmp10 = closure_5;
          tmp11 = closure_6;
          promise = sendAppBuildRequest(closure_0, closure_5.projectId, closure_6);
          nextPromise = promise.then(() => {
            const sendConjureCardReply = closure_0(dependencyMap[9]).sendConjureCardReply;
            closure_0(dependencyMap[9]);
            const intl = closure_0(dependencyMap[4]).intl;
            obj = { name: projectId.name, projectId: projectId.projectId };
            return sendConjureCardReply(closure_1_0, "" + intl.formatToPlainString(_prompt(dependencyMap[5]).jZlNst, obj) + "\n\n" + closure_1_6);
          }, () => {
            closure_1_2(false);
            closure_1_3(true);
          });
        }
        return;
      }
    }
    cResult[5] = tmp16;
    cResult[6] = arg0;
    cResult[7] = tmp12;
    cResult[8] = tmp14;
    cResult[9] = E;
    tmp17 = E;
  }
  let found = arr.find((projectId) => projectId.projectId === c4);
  if (found == null) {
    found = null;
  }
  cResult[0] = arr;
  cResult[1] = tmp3;
  cResult[2] = found;
  tmp12 = found;
}) : (function useConjureAppBuildRequestForm(arg0, prompt, arg2) {
  let _prompt;
  let found;
  let tmp2;
  let tmp3;
  let tmp7;
  let tmp9;
  let closure_0 = arg0;
  importDefault = prompt;
  const arr = useConjureProjectPickerOptionsDefault(arg0);
  obj = found;
  let tmp = _slicedToArray(found.useState(null), 2);
  [tmp2, tmp3] = tmp;
  const tmp4 = _slicedToArray(found.useState(prompt.prompt), 2);
  const tmp5 = tmp4[1];
  [tmp7, dependencyMap] = _slicedToArray(found.useState(false), 2);
  const tmp6 = _slicedToArray(found.useState(false), 2);
  const tmp8 = _slicedToArray(found.useState(false), 2);
  [tmp9, _slicedToArray] = tmp8;
  let project_id = null;
  if (arr.some((projectId) => projectId.projectId === _prompt.project_id)) {
    project_id = prompt.project_id;
  }
  if (tmp2 == null) {
    tmp2 = project_id;
  }
  if (tmp2 == null) {
    tmp2 = null;
  }
  let c4 = tmp2;
  found = arr.find((projectId) => projectId.projectId === c4);
  if (found == null) {
    found = null;
  }
  let tmp12 = arg2;
  const trimmed = str.trim();
  if (arg2) {
    tmp12 = !tmp7;
  }
  if (tmp12) {
    tmp12 = null != found;
  }
  if (tmp12) {
    tmp12 = "" !== trimmed;
  }
  let closure_7 = tmp12;
  const items = [tmp12, arg0, found, trimmed];
  const obj2 = {
    projects: arr,
    targetId: tmp2,
    setTargetId: tmp3,
    prompt: tmp4[0],
    setPrompt: tmp5,
    sending: tmp7,
    failed: tmp9,
    canSubmit: tmp12,
    submit: obj.useCallback(() => {
      let tmp = closure_7;
      if (tmp) {
        tmp = null != found;
      }
      if (tmp) {
        dependencyMap(true);
        _slicedToArray(false);
        const promise = sendAppBuildRequest(closure_0, found.projectId, trimmed);
        promise.then(() => {
          const sendConjureCardReply = closure_0(dependencyMap[9]).sendConjureCardReply;
          closure_0(dependencyMap[9]);
          const intl = closure_0(dependencyMap[4]).intl;
          obj = { name: found.name, projectId: found.projectId };
          return sendConjureCardReply(closure_1_0, "" + intl.formatToPlainString(_prompt(dependencyMap[5]).jZlNst, obj) + "\n\n" + trimmed);
        }, () => {
          closure_1_2(false);
          closure_1_3(true);
        });
      }
    }, items)
  };
  return obj2;
});
const result = size.fileFinishedImporting("modules/conjure/app_build_request/ConjureAppBuildRequest.tsx");

export const CONJURE_APP_BUILD_PROMPT_MAX_LENGTH = 4000;
export const useConjureAppBuildRequestForm = tmp2;
