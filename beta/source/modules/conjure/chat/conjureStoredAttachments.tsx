// Module ID: 12182
// Function ID: 12183
// Name: conjureStoredAttachments
// Dependencies: [19, 12170, 11612, 584, 558, 576, 504, 2]
// Exports: fetchConjureStoredAttachments

// Module 12182 (conjureStoredAttachments)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 11612 */;
import react from "react" /* 19 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 12170 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f112324 = () => {

};
const f112325 = () => set.delete(projectId);
let closure_5 = [];
const set = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureStoredAttachments(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(4);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureStoredAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      let attachments = ConjureStoredAttachmentStore.getAttachments(closure_0);
      if (attachments == null) {
        attachments = closure_5;
      }
      return attachments;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStores(first, tmp6, tmp7);
}) : (function useConjureStoredAttachments(arg0) {
  let closure_0;
  _require = arg0;
  const items = [ConjureStoredAttachmentStore];
  const items1 = [arg0];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let attachments = ConjureStoredAttachmentStore.getAttachments(closure_0);
    if (attachments == null) {
      attachments = closure_5;
    }
    return attachments;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
function fetchConjureStoredAttachments(projectId) {
  _require = projectId;
  const obj = set;
  if (!set.has(projectId)) {
    obj.add(projectId);
    const obj2 = require("conjureAttachmentRequests");
    const result = obj2.listStoredAttachments(projectId);
    const nextPromise = result.then((result) => {
      let items;
      const obj = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: items.reverse() };
      items = [...result];
      const dispatch = attachmentId(closure_2_2[3]).dispatch;
      attachmentId(closure_2_2[3]);
      dispatch(obj);
    });
    const catchPromise = nextPromise.catch(f112324);
    catchPromise.finally(f112325);
  }
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureStoredAttachment(arg0, attachmentId) {
  let closure_0;
  let closure_2;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(9);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureStoredAttachmentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== attachmentId) {
    const fn = function u() {
      return ConjureStoredAttachmentStore.getAttachment(attachmentId);
    };
    const items1 = [attachmentId];
    cResult[1] = attachmentId;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  dependencyMap = tmp9;
  if (cResult[4] === attachmentId) {
    if (cResult[5] === null == stateFromStores) {
      let tmp10;
      let tmp11;
      if (cResult[6] === arg0) {
        tmp10 = cResult[7];
        tmp11 = cResult[8];
      }
      const effect = react.useEffect(tmp10, tmp11);
      return stateFromStores;
    }
  }
  const fn2 = function l() {
    const tmp = closure_2 && null != closure_0 && !ConjureStoredAttachmentStore.wasLookedUp(attachmentId);
    if (tmp) {
      const obj2 = { type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId };
      const obj = DispatcherDefault;
      obj.dispatch(obj2);
      const obj3 = set;
      if (!set.has(closure_0)) {
        obj3.add(closure_0);
        const obj4 = conjureAttachmentRequests;
        const result = obj4.listStoredAttachments(tmp10);
        const nextPromise = result.then((result) => {
          let items;
          const obj = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: items.reverse() };
          items = [...result];
          const dispatch = attachmentId(closure_2_2[3]).dispatch;
          attachmentId(closure_2_2[3]);
          dispatch(obj);
        });
        const catchPromise = nextPromise.catch(f112324);
        catchPromise.finally(f112325);
      }
    }
  };
  const items2 = [null == stateFromStores, arg0, attachmentId];
  cResult[4] = attachmentId;
  cResult[5] = null == stateFromStores;
  cResult[6] = arg0;
  cResult[7] = fn2;
  cResult[8] = items2;
  tmp11 = items2;
  tmp10 = fn2;
}) : (function useConjureStoredAttachment(arg0, attachmentId) {
  let closure_0;
  let closure_2;
  _require = arg0;
  let obj = require("get initialized");
  let items = [ConjureStoredAttachmentStore];
  const items1 = [attachmentId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureStoredAttachmentStore.getAttachment(attachmentId), items1);
  dependencyMap = tmp2;
  const items2 = [tmp2, arg0, attachmentId];
  const effect = react.useEffect(() => {
    const tmp = closure_2 && null != closure_0 && !ConjureStoredAttachmentStore.wasLookedUp(attachmentId);
    if (tmp) {
      let obj = DispatcherDefault;
      const obj2 = { type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId };
      obj.dispatch(obj2);
      const obj3 = set;
      if (!set.has(closure_0)) {
        obj3.add(closure_0);
        const obj4 = conjureAttachmentRequests;
        const result = obj4.listStoredAttachments(tmp10);
        const nextPromise = result.then((result) => {
          let items;
          const obj = { type: "CONJURE_STORED_ATTACHMENTS_FETCHED", projectId, attachments: items.reverse() };
          items = [...result];
          const dispatch = attachmentId(closure_2_2[3]).dispatch;
          attachmentId(closure_2_2[3]);
          dispatch(obj);
        });
        const catchPromise = nextPromise.catch(f112324);
        catchPromise.finally(f112325);
      }
    }
  }, items2);
  return stateFromStores;
});
let result = size.fileFinishedImporting("modules/conjure/chat/conjureStoredAttachments.tsx");

export { fetchConjureStoredAttachments };
export const useConjureStoredAttachments = tmp3;
export const useConjureStoredAttachment = tmp4;
