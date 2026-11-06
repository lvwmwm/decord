// Module ID: 12145
// Function ID: 12146
// Name: conjureStoredAttachments
// Dependencies: [19, 12146, 12147, 572, 504, 2]
// Exports: fetchConjureStoredAttachments, useConjureStoredAttachment, useConjureStoredAttachments

// Module 12145 (conjureStoredAttachments)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureAttachmentRequests from "conjureAttachmentRequests" /* 12147 */;
import react from "react" /* 19 */;
import ConjureStoredAttachmentStore from "ConjureStoredAttachmentStore" /* 12146 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const f100892 = () => {

};
const f100893 = () => set.delete(projectId);
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
    const catchPromise = nextPromise.catch(f100892);
    catchPromise.finally(f100893);
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
        const catchPromise = nextPromise.catch(f100892);
        catchPromise.finally(f100893);
      }
    }
  }, items2);
  return stateFromStores;
}
