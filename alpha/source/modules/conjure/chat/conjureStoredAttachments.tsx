// Module ID: 12486
// Function ID: 12487
// Name: conjureStoredAttachments
// Dependencies: [19, 12487, 12488, 572, 504, 2]
// Exports: fetchConjureStoredAttachments, useConjureStoredAttachment, useConjureStoredAttachments

// Module 12486 (conjureStoredAttachments)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12488 */;
import react from "react" /* 19 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 12487 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f102210 = () => {

};
const f102211 = () => set.delete(projectId);
let closure_5 = [];
const set = new Set();
let result = size.fileFinishedImporting("modules/conjure/chat/conjureStoredAttachments.tsx");

export function fetchConjureStoredAttachments(projectId) {
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
    const catchPromise = nextPromise.catch(f102210);
    catchPromise.finally(f102211);
  }
}
export function useConjureStoredAttachments(projectId) {
  _require = projectId;
  const items = [ConjureStoredAttachmentStore];
  const items1 = [projectId];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let attachments = ConjureStoredAttachmentStore.getAttachments(projectId);
    if (attachments == null) {
      attachments = closure_5;
    }
    return attachments;
  }, items1);
}
export function useConjureStoredAttachment(context, attachmentId) {
  let closure_2;
  _require = context;
  let obj = require("get initialized");
  let items = [ConjureStoredAttachmentStore];
  const items1 = [attachmentId];
  const stateFromStores = obj.useStateFromStores(items, () => ConjureStoredAttachmentStore.getAttachment(attachmentId), items1);
  dependencyMap = tmp2;
  const items2 = [tmp2, context, attachmentId];
  const effect = react.useEffect(() => {
    const tmp = closure_2 && null != context && !ConjureStoredAttachmentStore.wasLookedUp(attachmentId);
    if (tmp) {
      let obj = DispatcherDefault;
      const obj2 = { type: "CONJURE_STORED_ATTACHMENT_LOOKUP", attachmentId };
      obj.dispatch(obj2);
      const obj3 = set;
      if (!set.has(context)) {
        obj3.add(context);
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
        const catchPromise = nextPromise.catch(f102210);
        catchPromise.finally(f102211);
      }
    }
  }, items2);
  return stateFromStores;
}
