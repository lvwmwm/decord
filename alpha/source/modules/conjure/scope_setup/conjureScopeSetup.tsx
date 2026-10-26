// Module ID: 11754
// Function ID: 11755
// Name: conjureScopeSetup
// Dependencies: [109, 5, 10699, 11755, 10698, 6773, 1087, 510, 10203, 11756, 11757, 1128, 3830, 1297, 584, 10720, 10719, 2]
// Exports: keepConjureInstallScope, ownerOnlyClarification, reconcileHeldConjurePrompt, serverQuestionFields, settleConjureInstallScope, startConjurePrompt, switchConjureInstallScope

// Module 11754 (conjureScopeSetup)
import Storage6 from "Storage" /* 510 */;
import Constants from "Constants" /* 1087 */;
import intl2 from "intl" /* 1128 */;
import HTTPUtils from "HTTPUtils" /* 1297 */;
import _modDef3830 from "module_3830" /* 3830 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10719 */;
import ConjureChatActionCreators from "ConjureChatActionCreators" /* 11756 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 11757 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureChatStore from "ConjureChatStore" /* 10699 */;
import ConjureComposerDraftStore from "ConjureComposerDraftStore" /* 11755 */;
import ConjureConnectionStore_mod from "ConjureConnectionStore" /* 10698 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6773 */;
import size from "module_2" /* 2 */;

let c2, c4, closure_3, closure_4, set;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
const f111436 = function*(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "+352" };
    }
  } else {
    let c3;
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_0 = tmp4;
          c3 = 1;
          c4 = 2;
          c5 = 1;
          const obj4 = { value: tmp(), done: false };
          return obj4;
        }
      } else if (1 === c4) {
        c3 = 0;
        closure_0 = closure_2;
        set.delete(closure_129_0);
        throw closure_0;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c3 = 0;
        c5 = 3;
        return { value: "IconComponent", done: "+352" };
      }
    } catch (tmp14) {
      closure_2 = tmp14;
      if (0 === c3) {
        c5 = 3;
        throw tmp14;
      } else {
        c4 = 1;
      }
    }
  }
};
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj, "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
function restoreToComposer(projectId, nonce, fn) {
  const Storage = Storage6.Storage;
  obj = Storage.get(ConjureHeldPrompts);
  const tmp3 = ConjureHeldPrompts;
  if (obj == null) {
    obj = {};
  }
  const items = [projectId];
  const tmp4 = _objectWithoutProperties(obj, items.map(_toPropertyKey));
  const Storage2 = tmp(510).Storage;
  const result = Storage2.set(tmp3, tmp4);
  authStore(projectId, nonce.nonce);
  if ("" === ConjureComposerDraftStore.getDraft(projectId)) {
    const tmpResult = ConjureChatActionCreators;
    tmpResult.setComposerDraft(projectId, nonce.message);
  }
  const tmpResult3 = conjureAttachmentDrafts;
  if (0 === tmpResult3.getConjureAttachmentDrafts(projectId, "chat").length) {
    const attachments = nonce.attachments;
    const tmpResult4 = conjureAttachmentDrafts;
    const result1 = tmpResult4.addConjureAttachmentDrafts(projectId, "chat", attachments.map((name) => ({ draft: { name: name.name, contentType: name.content_type, status: "ready", ref: name } })));
  }
  fn();
}
function putInstallScope() {
  return obj(...arguments);
}
let obj = function _putInstallScope() {
  obj = _asyncToGenerator(async (arg0, install_scope, arg2) => {
    let body = arg0;
    let closure_2 = arg2;
    let c5 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let obj4;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: "+352" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              let obj6;
              closure_4 = tmp;
              closure_3 = tmp4;
              body = undefined;
              const HTTP = HTTPUtils.HTTP;
              const request = { url: "" + Endpoints.CONJURE_PROJECT(body) + "/install-scope", body: obj4, rejectWithError: true };
              const put = HTTP.put;
              const _HermesInternal = HermesInternal;
              obj4 = { install_scope };
              const tmp20 = closure_2;
              if (null != closure_2) {
                obj6 = { guild_id: tmp20 };
                const obj5 = { guild_id: tmp20 };
              } else {
                obj6 = {};
              }
              const merged = Object.assign(obj6);
              c5 = 1;
              c6 = 1;
              const obj7 = { value: put(request), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj9 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: body.body };
            obj = closure_132_1(closure_132_2[14]);
            obj.dispatch(obj9);
            c6 = 3;
            return { value: "IconComponent", done: "+352" };
          }
        } catch (tmp14) {
          c6 = 3;
          throw tmp14;
        }
      }
    })();
  });
  return obj(...arguments);
};
let ConjureConnectionStore = ConjureConnectionStore_mod;
({ optimisticMessageId: metroImportDefault, sendUserMessage: metroImportAll, showUserMessage: c9, withdrawUserMessage: c10 } = ConjureConnectionStore);
ConjureConnectionStore = ConjureConnectionStore_mod;
const Endpoints = Constants.Endpoints;
const ConjureHeldPrompts = "ConjureHeldPrompts";
const map = new Map();
const map1 = new Map();
let result = size.fileFinishedImporting("modules/conjure/scope_setup/conjureScopeSetup.tsx");

export const startConjurePrompt = function startConjurePrompt(arg0, trimmed) {
  let tmp5Result;
  let items = arg2;
  if (arg2 === undefined) {
    items = [];
  }
  const project = ConjureProjectStore.getProject(arg0);
  let install_scope_setup;
  if (project != null) {
    install_scope_setup = project.install_scope_setup;
  }
  if (null != install_scope_setup) {
    const Storage = Storage6.Storage;
    set = Storage.set;
    const Storage2 = Storage6.Storage;
    obj = Storage2.get(ConjureHeldPrompts);
    const tmp5 = require;
    const tmp7 = ConjureHeldPrompts;
    if (obj == null) {
      obj = {};
    }
    const obj2 = {};
    const merged = Object.assign(obj);
    const obj3 = { message: trimmed, attachments: items, nonce: tmp5Result.createNonce() };
    obj2[arg0] = obj3;
    tmp5Result = tmp5(10203);
    const result = set(tmp7, obj2);
  } else {
    metroImportAll(arg0, trimmed, items);
  }
};
export const reconcileHeldConjurePrompt = function reconcileHeldConjurePrompt(projectId, fn) {
  const Storage = Storage6.Storage;
  obj = Storage.get(ConjureHeldPrompts);
  if (obj == null) {
    obj = {};
  }
  let closure_0 = tmp4;
  const project = ConjureProjectStore.getProject(projectId);
  if (null != obj[projectId]) {
    if (null != project) {
      if (ConjureChatStore.hasLoadedHistory(projectId)) {
        const messages = obj9.getMessages(projectId);
        let closure_1 = metroImportDefault(tmp4.nonce);
        if (true !== obj[projectId].sent) {
          if (null == project.install_scope_setup) {
            if ("open" === ConjureConnectionStore.getConnState(projectId)) {
              const Storage4 = Storage6.Storage;
              set = Storage4.set;
              const Storage5 = Storage6.Storage;
              let value3 = Storage5.get(tmp3);
              if (value3 == null) {
                value3 = {};
              }
              const obj2 = {};
              const merged = Object.assign(value3);
              const obj3 = { sent: true };
              const merged1 = Object.assign(tmp4);
              obj2[projectId] = obj3;
              const result = set(tmp3, obj2);
              const result1 = map1.set(projectId, obj9.getHistoryLoads(projectId));
              const obj4 = { nonce: obj[projectId].nonce };
              if (!metroImportAll(projectId, obj[projectId].message, obj[projectId].attachments, obj4)) {
                restoreToComposer(projectId, obj[projectId], fn);
              }
            }
          } else if (!messages.some((id) => id.id === closure_1)) {
            const obj5 = { held: true, nonce: obj[projectId].nonce };
            React4(projectId, obj[projectId].message, obj[projectId].attachments, obj5);
          }
        } else {
          const someResult = messages.some((role) => "user" === role.role && true !== role.held && role.id !== closure_1 && role.content === message.message);
          const historyLoads = obj9.getHistoryLoads(projectId);
          let num = map1.get(projectId);
          if (num == null) {
            num = 0;
          }
          if (someResult) {
            const Storage2 = Storage6.Storage;
            let value4 = Storage2.get(tmp3);
            if (value4 == null) {
              value4 = {};
            }
            const items = [projectId];
            const tmp15 = _objectWithoutProperties(value4, items.map(_toPropertyKey));
            const Storage3 = Storage6.Storage;
            const result2 = Storage3.set(tmp3, tmp15);
          } else {
            let isHistoryUnavailableResult = !tmp8;
            if (historyLoads > num) {
              isHistoryUnavailableResult = null != project.install_scope_setup;
            }
            if (!isHistoryUnavailableResult) {
              isHistoryUnavailableResult = obj9.isHistoryUnavailable(projectId);
            }
            if (!isHistoryUnavailableResult) {
              isHistoryUnavailableResult = obj9.isThinking(projectId);
            }
            if (!isHistoryUnavailableResult) {
              restoreToComposer(projectId, obj[projectId], fn);
            }
          }
        }
      }
    }
  }
};
export const serverQuestionFields = function serverQuestionFields(conjureEligibleGuilds, guild_id) {
  let intl;
  let items;
  let closure_0 = guild_id;
  if (0 === conjureEligibleGuilds.length) {
    return {};
  } else {
    const found = conjureEligibleGuilds.find((id) => id.id === closure_0);
    const obj2 = { input: "server", note: intl.string(_modDef3830.SU9K9U) };
    intl = intl2.intl;
    if (null != found) {
      const obj4 = { default_entities: items };
      const obj7 = { id: null, name: null, kind: "server" };
      ({ id: obj3.id, name: obj3.name } = found);
      items = [obj7];
      obj = obj4;
    } else {
      obj = {};
    }
    const merged = Object.assign(obj);
    return obj2;
  }
};
export const ownerOnlyClarification = function ownerOnlyClarification(memo) {
  let questions;
  obj = {
    id: memo.id,
    questions: questions.map((id) => {
      let intl;
      obj = { id: id.id, question: id.question, recommendation_reason: "", options: [], allow_custom: false, note: intl.string(_modDef3830.ZKPaWY) };
      intl = intl2.intl;
      return obj;
    })
  };
  questions = memo.questions;
  return obj;
};
export const settleConjureInstallScope = function settleConjureInstallScope(arg0, arg1, arg2) {
  let closure_0 = arg0;
  let closure_2 = arg2;
  const combined = "settle:" + arg0;
  let closure_1 = _asyncToGenerator(async (arg0, value) => {
    let obj3;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      let c3;
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp;
            closure_0 = tmp4;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: putInstallScope(closure_0, closure_1, closure_2), done: false };
            return obj5;
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_0 = closure_2;
          if (409 !== closure_0.status) {
            throw closure_0;
          } else {
            c4 = 3;
            c5 = 1;
            const obj6 = { value: obj3.getProject(closure_129_0), done: false };
            obj3 = closure_0(closure_2[15]);
            return obj6;
          }
        } else {
          if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              c3 = 0;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          }
          c5 = 3;
          return { value: "IconComponent", done: "+352" };
        }
      } catch (tmp19) {
        closure_2 = tmp19;
        if (0 === c3) {
          c5 = 3;
          throw tmp19;
        } else {
          c4 = 1;
        }
      }
    }
  });
  obj = map;
  let value = map.get(combined);
  const tmp2 = _asyncToGenerator;
  if (value == null) {
    value = tmp2(f111436)();
  }
  const result = obj.set(combined, value);
  return value;
};
export const switchConjureInstallScope = function switchConjureInstallScope(arg0, id, arg2, arg3) {
  let closure_0 = arg0;
  let closure_2 = arg3;
  const combined = "switch:" + arg0 + ":" + id;
  let closure_1 = _asyncToGenerator(async function(arg0, value) {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+352" };
      }
    } else {
      try {
        let prop;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            prop = undefined;
            c2 = 1;
            c3 = 1;
            const obj4 = { value: putInstallScope(tmp, tmp4, closure_2), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          if ("guild" === closure_129_1) {
            prop = tmp4(c2[12])["8+EcCu"];
          } else {
            prop = tmp4(c2[12])["U7+Yeh"];
          }
          const intl = tmp(c2[11]).intl;
          if (closure_1_8(closure_129_0, intl.string(prop))) {
            c3 = 3;
            return { value: "IconComponent", done: "+352" };
          } else {
            const _Error = Error;
            const self = this;
            const self2 = this;
            const error = new Error("Not connected");
            throw error;
          }
        }
      } catch (tmp24) {
        c3 = 3;
        throw tmp24;
      }
    }
  });
  obj = map;
  let value = map.get(combined);
  const tmp2 = _asyncToGenerator;
  if (value == null) {
    value = tmp2(f111436)();
  }
  const result = obj.set(combined, value);
  return value;
};
export const keepConjureInstallScope = function keepConjureInstallScope(projectId) {
  obj = conjureProjectSockets;
  return obj.sendOnConjureSocket(projectId, "keep install scope", (sendKeepInstallScope) => sendKeepInstallScope.sendKeepInstallScope());
};
