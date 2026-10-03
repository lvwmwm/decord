// Module ID: 16715
// Function ID: 16716
// Name: vibegrationsAttachmentDrafts
// Dependencies: [109, 4749, 12904, 558, 576, 1126, 3723, 6747, 584, 2]
// Exports: addVibegrationsAttachmentDrafts, clearVibegrationsAttachmentDrafts, removeVibegrationsAttachmentDraft, sendVibegrationsCardReply

// Module 16715 (vibegrationsAttachmentDrafts)
import intl2 from "intl" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ZustandStore from "ZustandStore" /* 4749 */;
import VibegrationsTypes from "VibegrationsTypes" /* 6747 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import VibegrationsConnectionStore from "VibegrationsConnectionStore" /* 12904 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import Dispatcher_mod from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_8;

let closure_4;
let hasOwnProperty;
const f126006 = () => {

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
function getVibegrationsAttachmentDrafts(projectId, chat) {
  const tmp = zustandStore.getState().draftsByProject[projectId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[chat];
  }
  if (tmp2 == null) {
    tmp2 = closure_7;
  }
  return tmp2;
}
function setDrafts(projectId, chat, items) {
  let obj2;
  const draftsByProject = zustandStore.getState().draftsByProject;
  const obj = { draftsByProject: obj2 };
  obj2 = {};
  const setState = zustandStore.setState;
  const merged = Object.assign(draftsByProject);
  const obj3 = {};
  const merged1 = Object.assign(draftsByProject[projectId]);
  obj3[chat] = items;
  obj2[projectId] = obj3;
  setState(obj);
}
function discardDraft(projectId, item10010) {
  if (null != item10010.previewUrl) {
    const _URL = URL;
    URL.revokeObjectURL(item10010.previewUrl);
  }
  if (null != item10010.ref) {
    const promise = React3(projectId, item10010.ref.id);
    promise.catch(f126006);
  }
}
function discardProject(projectId, deleteFromWorker) {
  deleteFromWorker = deleteFromWorker.deleteFromWorker;
  const draftsByProject = zustandStore.getState().draftsByProject;
  if (null != draftsByProject[projectId]) {
    const _Object = Object;
    const values = Object.values(tmp);
    const iter = values[Symbol.iterator]();
    let nextResult = iter.next();
    while (iter !== undefined) {
      if (nextResult == null) {
        nextResult = closure_7;
      }
      for (const item10017 of nextResult) {
        let tmp7 = item10017;
        if (deleteFromWorker) {
          let tmp13 = discardDraft(projectId, tmp7);
        } else if (null != tmp7.previewUrl) {
          let _URL = URL;
          let revokeObjectURLResult = URL.revokeObjectURL(tmp7.previewUrl);
        }
        continue;
      }
      continue;
    }
    const items = [projectId];
    const obj = { draftsByProject: _objectWithoutProperties(draftsByProject, items.map(_toPropertyKey)) };
    zustandStore.setState(obj);
  }
}
function takeVibegrationsAttachmentRefs(projectId, chat) {
  const arr = getVibegrationsAttachmentDrafts(projectId, chat);
  if (0 === arr.length) {
    return [];
  } else {
    const iter = arr[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      if (null != nextResult.previewUrl) {
        let _URL = URL;
        let revokeObjectURLResult = URL.revokeObjectURL(tmp7.previewUrl);
      }
      continue;
    }
    setDrafts(projectId, chat, closure_7);
    return arr.flatMap((ref) => {
      let items1;
      if (null != ref.ref) {
        const items = [ref.ref];
        items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    });
  }
}
const createZustandStore = ZustandStore.createZustandStore;
({ deleteStagedAttachment: closure_4, sendUserMessage: hasOwnProperty } = VibegrationsConnectionStore);
let closure_7 = [];
let c8 = 1;
const zustandStore = createZustandStore(() => ({ draftsByProject: {} }));
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  _require = arg0;
  let closure_1 = arg1;
  const obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === arg0) {
    let tmp2;
    if (cResult[1] === arg1) {
      tmp2 = cResult[2];
    }
    return zustandStore.useState(tmp2);
  }
  const fn = function r(arg0) {
    let tmp2;
    if (arg0.draftsByProject[closure_0] != null) {
      tmp2 = tmp[closure_1];
    }
    if (tmp2 == null) {
      tmp2 = closure_7;
    }
    return tmp2;
  };
  cResult[0] = arg0;
  cResult[1] = arg1;
  cResult[2] = fn;
  tmp2 = fn;
}) : ((arg0, arg1) => {
  let closure_0 = arg0;
  let closure_1 = arg1;
  return zustandStore.useState((arg0) => {
    let tmp2;
    if (arg0.draftsByProject[closure_0] != null) {
      tmp2 = tmp[closure_1];
    }
    if (tmp2 == null) {
      tmp2 = closure_7;
    }
    return tmp2;
  });
});
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("LOGOUT", () => {
  const keys = Object.keys(zustandStore.getState().draftsByProject);
  const tmp2 = keys[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = discardProject(tmp3, { deleteFromWorker: true });
    continue;
  }
});
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("VIBEGRATIONS_PROJECT_DELETE_SUCCESS", (projectId) => {
  discardProject(projectId.projectId, { deleteFromWorker: false });
});
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsAttachmentDrafts.tsx");

export const VibegrationsAttachmentDraftStore = zustandStore;
export { getVibegrationsAttachmentDrafts };
export const useVibegrationsAttachmentDraftList = tmp4;
export const addVibegrationsAttachmentDrafts = function addVibegrationsAttachmentDrafts(projectId, chat, mapped) {
  let state;
  let closure_0 = projectId;
  let closure_1 = chat;
  if (0 !== mapped.length) {
    mapped = mapped.map((upload) => {
      let obj2;
      const obj = { draft: obj2, upload };
      upload = upload.upload;
      obj2 = { localId: +closure_8 };
      const merged = Object.assign(upload.draft);
      closure_8 = tmp2 + 1;
      return obj;
    });
    let tmp4 = setDrafts;
    const items = [];
    let tmp6 = items;
    const arraySpreadResult = HermesBuiltin.arraySpread(items, getVibegrationsAttachmentDrafts(projectId, chat), 0);
    HermesBuiltin.arraySpread(items, mapped.map((draft) => draft.draft), arraySpreadResult);
    setDrafts(projectId, chat, items);
    let tmp2 = mapped;
    for (const item10006 of mapped) {
      let upload = item10006.upload;
      let tmp11Result = tmp11(item10006.draft);
      continue;
    }
  }
};
export const removeVibegrationsAttachmentDraft = function removeVibegrationsAttachmentDraft(projectId, chat, arg2) {
  let obj3;
  let closure_0 = arg2;
  const tmp = zustandStore.getState().draftsByProject[projectId];
  let tmp2;
  if (tmp != null) {
    tmp2 = tmp[chat];
  }
  if (tmp2 == null) {
    tmp2 = closure_7;
  }
  const found = tmp2.find((localId) => localId.localId === closure_0);
  if (null != found) {
    if (null != found.previewUrl) {
      const _URL = URL;
      URL.revokeObjectURL(found.previewUrl);
    }
    if (null != found.ref) {
      const promise = React3(projectId, found.ref.id);
      promise.catch(f126006);
    }
    const found1 = tmp2.filter((localId) => localId.localId !== closure_0);
    const draftsByProject = obj.getState().draftsByProject;
    const obj2 = { draftsByProject: obj3 };
    obj3 = {};
    const setState = obj.setState;
    const merged = Object.assign(draftsByProject);
    const obj4 = {};
    const merged1 = Object.assign(draftsByProject[projectId]);
    obj4[chat] = found1;
    obj3[projectId] = obj4;
    setState(obj2);
  }
};
export const clearVibegrationsAttachmentDrafts = function clearVibegrationsAttachmentDrafts(projectId, chat) {
  const arr = getVibegrationsAttachmentDrafts(projectId, chat);
  if (0 !== arr.length) {
    for (const item10010 of arr) {
      let tmp4 = discardDraft(projectId, item10010);
      continue;
    }
    setDrafts(projectId, chat, closure_7);
  }
};
export { takeVibegrationsAttachmentRefs };
export const sendVibegrationsCardReply = function sendVibegrationsCardReply(projectId, implementation_prompt, arg2) {
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  const clarificationAnswers = obj.clarificationAnswers;
  const tmp = zustandStore.getState().draftsByProject[projectId];
  let chat;
  if (tmp != null) {
    chat = tmp.chat;
  }
  if (chat == null) {
    chat = closure_7;
  }
  if (chat.length > 0) {
    let items;
    if (chat.every((status) => "ready" === status.status)) {
      items = takeVibegrationsAttachmentRefs(projectId, "chat");
    }
    const obj2 = { clarificationAnswers };
    hasOwnProperty(projectId, implementation_prompt, items, obj2);
  }
  items = [];
};
