// Module ID: 13164
// Function ID: 13165
// Name: conjurePublishEval
// Dependencies: [32, 5, 19, 5177, 1388, 7321, 7377, 13165, 13166, 504, 572, 4131, 1113, 13167, 2]
// Exports: conjurePublishEvalDimensionLabel, conjurePublishEvalScoreLabel, getPendingConjurePublishEval, isConjurePublishEvalUser, requestConjurePublishEval, useConjurePublishEvalForm, useIsConjurePublishEvalUser, usePendingConjurePublishEval

// Module 13164 (conjurePublishEval)
import get_initialized from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl3 from "intl" /* 1113 */;
import _modDef4131 from "module_4131" /* 4131 */;
import ConjurePublishEvalTypes from "ConjurePublishEvalTypes" /* 13166 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import GuildStore from "GuildStore" /* 5177 */;
import UserStore from "UserStore" /* 1388 */;
import ConjureChatStore from "ConjureChatStore" /* 7321 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 7377 */;
import ConjurePublishEvalStore from "ConjurePublishEvalStore" /* 13165 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c3, c6, c7, importDefault, publishStatus;

const f106630 = (item) => null != guild.getGuild(item);
let obj = function _submitConjurePublishEval() {
  obj = _asyncToGenerator(async function(arg0, value, arg2) {
    let published_revision;
    let tmp23;
    let trimmed;
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_5 = tmp2;
            let closure_4 = tmp;
            const tmp35 = closure_1;
            closure_1 = undefined;
            publishStatus = publishStatus.getPublishStatus(closure_0.projectId);
            let publishedRevision;
            const str4 = closure_2;
            if (publishStatus != null) {
              publishedRevision = publishStatus.publishedRevision;
            }
            const obj5 = { publish_turn_id: closure_0.publishTurnId, published_revision, quality: null, met_expectations: null, speed: null, feedback: trimmed.slice(0, tmp23(dependencyMap[8]).CONJURE_PUBLISH_EVAL_FEEDBACK_MAX_LENGTH) };
            published_revision = publishedRevision;
            const sendConjurePublishEval = require("conjurePublishEvalConnection").sendConjurePublishEval;
            const projectId = tmp34.projectId;
            tmp23 = _require;
            const tmp25 = require("conjurePublishEvalConnection");
            if (publishedRevision == null) {
              published_revision = null;
            }
            ({ quality: obj4.quality, metExpectations: obj4.met_expectations, speed: obj4.speed } = tmp35);
            trimmed = str4.trim();
            c6 = 1;
            c7 = 1;
            const obj6 = { value: sendConjurePublishEval(projectId, obj5), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_1 = value;
          if (!closure_1.ok) {
            if ("gone" !== closure_1.error) {
              if ("forbidden" !== closure_1.error) {
                const _Error = Error;
                const self = this;
                const self2 = this;
                const error = new Error(closure_1.error);
                throw error;
              }
            }
          }
          const obj13 = { type: "CONJURE_PUBLISH_EVAL_SUBMITTED", projectId: closure_0.projectId, publishTurnId: closure_0.publishTurnId };
          obj = closure_133_1(closure_133_2[10]);
          obj.dispatch(obj13);
          c7 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp28) {
        c7 = 3;
        throw tmp28;
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
let closure_11 = { quality: null, metExpectations: null, speed: null };
obj = { quality: _modDef4131["N94/JU"], metExpectations: _modDef4131["7mnit0"], speed: _modDef4131["J/xftE"] };
const result = size.fileFinishedImporting("modules/conjure/publish_eval/conjurePublishEval.tsx");

export function isConjurePublishEvalUser() {
  let closure_0 = GuildStore;
  const CONJURE_PUBLISH_EVAL_GUILD_IDS = ConjurePublishEvalTypes.CONJURE_PUBLISH_EVAL_GUILD_IDS;
  return CONJURE_PUBLISH_EVAL_GUILD_IDS.some(f106630);
}
export function useIsConjurePublishEvalUser() {
  const items = [GuildStore];
  obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    let closure_0 = GuildStore;
    const CONJURE_PUBLISH_EVAL_GUILD_IDS = require("ConjurePublishEvalTypes").CONJURE_PUBLISH_EVAL_GUILD_IDS;
    return CONJURE_PUBLISH_EVAL_GUILD_IDS.some(f106630);
  });
}
export function getPendingConjurePublishEval() {
  const pending = ConjurePublishEvalStore.getPending();
  let tmp2 = null;
  if (null != pending) {
    const userId = pending.userId;
    const currentUser = UserStore.getCurrentUser();
    let id;
    if (currentUser != null) {
      id = currentUser.id;
    }
    tmp2 = null;
    if (userId === id) {
      let closure_0 = GuildStore;
      const CONJURE_PUBLISH_EVAL_GUILD_IDS = ConjurePublishEvalTypes.CONJURE_PUBLISH_EVAL_GUILD_IDS;
      tmp2 = null;
      if (CONJURE_PUBLISH_EVAL_GUILD_IDS.some(f106630)) {
        tmp2 = pending;
      }
    }
  }
  return tmp2;
}
export function usePendingConjurePublishEval(projectId) {
  _require = projectId;
  const items = [ConjurePublishEvalStore, UserStore, GuildStore];
  const items1 = [projectId];
  obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    const pending = ConjurePublishEvalStore.getPending();
    projectId = undefined;
    if (pending != null) {
      projectId = pending.projectId;
    }
    let tmp3 = null;
    if (projectId === closure_0) {
      const userId = pending.userId;
      const currentUser = UserStore.getCurrentUser();
      let id;
      if (currentUser != null) {
        id = currentUser.id;
      }
      tmp3 = null;
      if (userId === id) {
        closure_0 = GuildStore;
        const CONJURE_PUBLISH_EVAL_GUILD_IDS = ConjurePublishEvalTypes.CONJURE_PUBLISH_EVAL_GUILD_IDS;
        tmp3 = null;
        if (CONJURE_PUBLISH_EVAL_GUILD_IDS.some(f106630)) {
          tmp3 = pending;
        }
      }
    }
    return tmp3;
  }, items1);
}
export function requestConjurePublishEval(projectId) {
  let id2;
  const currentUser = UserStore.getCurrentUser();
  let id1;
  if (currentUser != null) {
    id1 = currentUser.id;
  }
  let someResult = null != id1;
  if (someResult) {
    let closure_0 = GuildStore;
    const CONJURE_PUBLISH_EVAL_GUILD_IDS = ConjurePublishEvalTypes.CONJURE_PUBLISH_EVAL_GUILD_IDS;
    someResult = CONJURE_PUBLISH_EVAL_GUILD_IDS.some(f106630);
  }
  if (someResult) {
    obj = { userId: id1, projectId, publishTurnId: null, createdAt: null };
    const dispatch = DispatcherDefault.dispatch;
    DispatcherDefault;
    const messages = ConjureChatStore.getMessages(projectId);
    let diff = messages.length - 1;
    if (0 <= diff) {
      while ("assistant" !== messages[diff].role) {
        diff = diff - 1;
        let obj2 = { type: "CONJURE_PUBLISH_EVAL_PENDING", pending: obj };
        obj.publishTurnId = id2;
        let tmp17 = globalThis;
        let _Date = Date;
        obj.createdAt = Date.now();
        let dispatchResult = dispatch(obj2);
      }
      let id = tmp13.turn_id;
      if (id == null) {
        id = tmp13.id;
      }
      id2 = id;
    }
    id2 = undefined;
    if (messages[messages.length - 1] != null) {
      id2 = tmp15.id;
    }
    if (id2 == null) {
      id2 = projectId;
    }
  }
}
export function conjurePublishEvalDimensionLabel(dimension) {
  const intl = intl3.intl;
  return intl.string(obj[dimension]);
}
export function conjurePublishEvalScoreLabel(dimension, score) {
  let intl2;
  const intl = intl3.intl;
  const formatToPlainString = intl.formatToPlainString;
  obj = { score, dimension: intl2.string(obj[dimension]) };
  const fML8aJ = _modDef4131.fML8aJ;
  intl2 = intl3.intl;
  return formatToPlainString(fML8aJ, obj);
}
export function useConjurePublishEvalForm(pending) {
  let callback1;
  let closure_4;
  let closure_5;
  let first1;
  let metExpectations;
  let quality;
  let speed;
  let stringResult;
  let tmp2;
  _require = pending;
  obj = react;
  const tmp = first1(react.useState(closure_11), 2);
  [tmp2, importDefault] = tmp;
  const tmp3 = first1(react.useState(""), 2);
  const feedback = tmp3[0];
  const tmp5 = tmp3[1];
  const tmp6 = first1(react.useState(false), 2);
  first1 = tmp6[0];
  _asyncToGenerator = tmp6[1];
  const tmp8 = first1(react.useState(false), 2);
  react = tmp8[1];
  ({ quality, metExpectations, speed } = tmp2);
  let tmp10 = null;
  const first2 = tmp8[0];
  if (null != quality) {
    tmp10 = null;
    if (null != metExpectations) {
      tmp10 = null;
      if (null != speed) {
        let obj2 = { quality, metExpectations, speed };
        tmp10 = obj2;
      }
    }
  }
  obj2 = tmp10;
  const callback = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    importDefault = arg1;
    importDefault((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj[closure_0] = closure_1;
      return obj;
    });
  }, []);
  const items = [tmp10, feedback, pending, first1];
  let obj3 = { dimensions: require("ConjurePublishEvalTypes").CONJURE_PUBLISH_EVAL_DIMENSIONS, scores: tmp2, setScore: callback, feedback, setFeedback: tmp5, canSubmit: null != tmp10 && !first1, submitting: first1, error: stringResult, submit: callback1 };
  callback1 = obj.useCallback(_asyncToGenerator(async (arg0, value) => {
    function submitConjurePublishEval() {
      return closure_1_13(...arguments);
    }
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c2;
      try {
        c3 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            if (null != obj2) {
              const tmp11 = first1;
              if (!tmp11) {
                closure_4(true);
                closure_5(false);
                c2 = 1;
                c1 = 2;
                c3 = 1;
                const obj4 = { value: submitConjurePublishEval(closure_0, tmp10, first), done: false };
                return obj4;
              }
            }
          }
        } else if (1 === tmp4) {
          c2 = 0;
          closure_128_5(true);
          closure_128_4(false);
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 0;
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 0;
        }
        c3 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp18) {
        if (0 === c2) {
          c3 = 3;
          throw tmp18;
        } else {
          c1 = 1;
        }
      }
    }
  }), items);
  stringResult = null;
  const tmp13 = _require;
  if (first2) {
    const intl = tmp13(tmp14[12]).intl;
    stringResult = intl.string(require("module_4131").Nu6mEB);
  }
  return obj3;
}
