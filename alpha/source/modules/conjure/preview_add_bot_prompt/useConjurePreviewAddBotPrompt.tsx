// Module ID: 18241
// Function ID: 18242
// Name: useConjurePreviewAddBotPrompt
// Dependencies: [5, 32, 19, 6979, 504, 12298, 14743, 2]
// Exports: useConjurePreviewAddBotPrompt

// Module 18241 (useConjurePreviewAddBotPrompt)
import conjurePreviewAddBotPromptConnection from "conjurePreviewAddBotPromptConnection" /* 14743 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjurePreviewAddBotPromptStore from "ConjurePreviewAddBotPromptStore" /* 6979 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, closure_2, dependencyMap;

let react = react_mod;
let result = size.fileFinishedImporting("modules/conjure/preview_add_bot_prompt/useConjurePreviewAddBotPrompt.tsx");

export function useConjurePreviewAddBotPrompt(projectId, guildId) {
  let adding;
  let closure_4;
  let id;
  _require = projectId;
  dependencyMap = guildId;
  let obj = require("get initialized");
  const items = [id];
  const items1 = [projectId];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let _prompt = null;
    if (null != projectId) {
      _prompt = ConjurePreviewAddBotPromptStore.getPrompt(tmp);
    }
    return _prompt;
  }, items1);
  let obj2 = react;
  let tmp2 = adding(react.useState(false), 2);
  adding = tmp2[0];
  react = tmp2[1];
  id = undefined;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  if (id == null) {
    id = null;
  }
  const items2 = [id, guildId, projectId];
  const onAddBot = obj2.useCallback(stateFromStores(function*(arg0, value) {
    let c1;
    let closure_0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c4 = 2;
        if (0 === guildId) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else if (null != tmp) {
            if (null != id) {
              v3(true);
              c3 = 1;
              const obj4 = tmp(guildId[5]);
              guildId = 2;
              c4 = 1;
              const obj6 = { value: obj4.requestConjureInstallConsent(tmp, guildId), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp4) {
          c3 = 0;
          closure_128_4(false);
          throw closure_2;
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_4(false);
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          c3 = 0;
          closure_128_4(false);
          const obj = tmp(guildId[6]);
          if (obj.conjurePreviewBotAdded(closure_128_0)) {
            const obj2 = tmp(guildId[6]);
            const result = obj2.answerConjurePreviewAddBotPrompt(closure_128_0, closure_128_5, "added");
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      } catch (tmp34) {
        closure_2 = tmp34;
        if (0 === c3) {
          c4 = 3;
          throw tmp34;
        } else {
          guildId = 1;
        }
      }
    }
  }), items2);
  const items3 = [id, projectId];
  const callback1 = obj2.useCallback(() => {
    let tmp2 = null != projectId;
    const tmp = projectId;
    if (tmp2) {
      tmp2 = null != id;
    }
    if (tmp2) {
      const obj = conjurePreviewAddBotPromptConnection;
      const result = obj.answerConjurePreviewAddBotPrompt(tmp, id, "skipped");
    }
  }, items3);
  const items4 = [stateFromStores, adding, onAddBot, callback1];
  return obj2.useMemo(() => {
    let tmp2 = null;
    if (null != stateFromStores) {
      tmp2 = { prompt: tmp, adding, onAddBot, onSkip: callback1 };
      const obj = { prompt: tmp, adding, onAddBot, onSkip: callback1 };
    }
    return tmp2;
  }, items4);
}
