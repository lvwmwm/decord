// Module ID: 13572
// Function ID: 13573
// Name: conjureClarificationLinks
// Dependencies: [13243, 2]
// Exports: linkedPair, sendAfterLinkingApps

// Module 13572 (conjureClarificationLinks)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/clarification/conjureClarificationLinks.tsx");

export function linkedPair(caller, link, items) {
  const first = items[0];
  let id;
  if (first != null) {
    id = first.id;
  }
  let tmp3 = null;
  if (null != id) {
    let tmp6;
    if (true === link.link) {
      const _HermesInternal2 = HermesInternal;
      tmp6 = { target: id, caller, key: "" + id + ":" + caller };
      const obj2 = { target: id, caller, key: "" + id + ":" + caller };
    } else {
      tmp6 = null;
      if ("incoming" === link.link) {
        const _HermesInternal = HermesInternal;
        tmp6 = { target: caller, caller: id, key: "" + caller + ":" + id };
        const obj = { target: caller, caller: id, key: "" + caller + ":" + id };
      }
    }
    tmp3 = tmp6;
  }
  return tmp3;
}
export function sendAfterLinkingApps(projectId, questions, arg2, builds, fn) {
  let closure_1 = arg2;
  let closure_2 = builds;
  questions = questions.questions;
  const flatMapResult = questions.flatMap((item) => {
    let items;
    let closure_0 = item;
    let kind;
    if (closure_1[item.id] != null) {
      kind = tmp.kind;
    }
    if ("entities" !== kind) {
      items = [];
    } else {
      const entities = tmp.entities;
      items = entities.flatMap((item) => {
        let items1;
        const items = [item];
        const first = items[0];
        let id;
        if (first != null) {
          id = first.id;
        }
        let tmp5 = null;
        if (null != id) {
          let tmp6;
          if (true === projectId.link) {
            const _HermesInternal2 = HermesInternal;
            tmp6 = { target: id, caller: projectId, key: "" + id + ":" + projectId };
            const obj2 = { target: id, caller: projectId, key: "" + id + ":" + projectId };
          } else {
            tmp6 = null;
            if ("incoming" === projectId.link) {
              const _HermesInternal = HermesInternal;
              tmp6 = { target: projectId, caller: id, key: "" + projectId + ":" + id };
              const obj = { target: projectId, caller: id, key: "" + projectId + ":" + id };
            }
          }
          tmp5 = tmp6;
        }
        if (null == tmp5) {
          items1 = [];
        } else {
          const obj5 = { build: builds[projectId.id] };
          const merged = Object.assign(tmp5);
          ({ link_purpose: obj3.purpose, link_flow: obj3.flow } = projectId);
          items1 = [obj5];
        }
        return items1;
      });
    }
    return items;
  });
  if (0 !== flatMapResult.length) {
    const allSettledResult = Promise.allSettled(flatMapResult.map((item) => {
      let caller;
      let target;
      ({ target, caller } = item);
      const merged = Object.assign(item, Object.assign({ target: 0, caller: 0 }));
      const obj = projectId(closure_1[0]);
      return obj.linkConjureApp(target, caller, merged);
    }));
    allSettledResult.then(fn);
  } else {
    const tmp = fn();
  }
}
