// Module ID: 12594
// Function ID: 12595
// Name: ConjureAppBuildRequest
// Dependencies: [32, 19, 6844, 1113, 3868, 12595, 12583, 10315, 12597, 2]
// Exports: appBuildRequestSentToast, useConjureAppBuildRequestForm

// Module 12594 (ConjureAppBuildRequest)
import intl2 from "intl" /* 1113 */;
import _modDef3868 from "module_3868" /* 3868 */;
import createNonce from "createNonce" /* 10315 */;
import conjureAttachmentDrafts from "conjureAttachmentDrafts" /* 12583 */;
import useConjureProjectPickerOptionsDefault from "useConjureProjectPickerOptions" /* 12595 */;
import conjureSendToProject from "conjureSendToProject" /* 12597 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

let content, dependencyMap, importDefault, set;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let result = size.fileFinishedImporting("modules/conjure/app_build_request/ConjureAppBuildRequest.tsx");

export const CONJURE_APP_BUILD_PROMPT_MAX_LENGTH = 4000;
export const CONJURE_APP_BUILD_MAX_TARGETS = 10;
export function appBuildRequestSentToast(arr) {
  let mapped;
  const intl = intl2.intl;
  const formatToPlainString = intl.formatToPlainString;
  const obj = { names: mapped.join(", ") };
  const RZO35O = _modDef3868.RZO35O;
  mapped = arr.map((name) => name.name);
  return formatToPlainString(RZO35O, obj);
}
export function useConjureAppBuildRequestForm(projectId, request, canSend, onDismiss, onSent) {
  let closure_10;
  let closure_11;
  let closure_4;
  let closure_6;
  let closure_8;
  let first;
  let first1;
  let first2;
  let first3;
  let str;
  let tmp7;
  importDefault = request;
  let tmp = canSend;
  dependencyMap = onDismiss;
  _slicedToArray = onSent;
  let tmp2 = useConjureProjectPickerOptionsDefault(projectId);
  react = tmp2;
  let obj = react;
  [first, closure_6] = react.useState(null);
  [first1, closure_8] = react.useState([]);
  [str, tmp7] = react.useState(request.prompt);
  [first2, closure_10] = react.useState(false);
  [first3, closure_11] = react.useState(false);
  const useRef = react.useRef;
  map = new Map();
  let closure_12 = useRef(map);
  let closure_13 = react.useRef(false);
  const ref = react.useRef(false);
  let items = [tmp2, first1];
  const memo = react.useMemo(() => closure_4.filter((item) => {
    let closure_0 = item;
    return !first1.some((target) => target.target.projectId === projectId.projectId);
  }), items);
  let items1 = [request];
  const memo1 = react.useMemo(() => {
    let project_ids;
    if (null != request.project_ids) {
      project_ids = tmp.project_ids;
    } else if (null != request.project_id) {
      const items = [request.project_id];
      project_ids = items;
    } else {
      project_ids = [];
    }
    return project_ids;
  }, items1);
  const items2 = [first, memo1, memo];
  const memo2 = react.useMemo(() => {
    const found = memo.filter((projectId) => {
      let obj = first;
      if (first == null) {
        obj = memo1;
      }
      return obj.includes(projectId.projectId);
    });
    return found.map((projectId) => projectId.projectId);
  }, items2);
  const items3 = [memo, memo2];
  const memo3 = react.useMemo(() => memo.filter((projectId) => memo2.includes(projectId.projectId)), items3);
  const callback = react.useCallback((arr) => {
    closure_6(arr.slice(0, 10));
  }, []);
  const trimmed = str.trim();
  if (canSend) {
    tmp = !first2;
  }
  if (tmp) {
    let tmp18;
    let num = 0;
    if (memo3.length > 0) {
      tmp18 = "" !== trimmed;
    } else {
      tmp18 = first1.length > 0;
    }
    tmp = tmp18;
  }
  let closure_20 = tmp;
  const items4 = [onSent, projectId];
  const callback1 = obj.useCallback((arr) => {
    function sentMessage(arr) {
      let _prompt;
      let target;
      map = new Map();
      const iter = arr[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        ({ target, prompt: _prompt } = nextResult);
        set = map.set;
        let items1 = map.get(_prompt);
        if (items1 == null) {
          items1 = [];
        }
        let items = [];
        items[HermesBuiltin.arraySpread(items, items1, 0)] = target;
        let result = set(_prompt, items);
        continue;
      }
      arr = Array.from(map, (arg0) => {
        let arr;
        let tmp;
        [tmp, arr] = arg0;
        const mapped = arr.map((name) => {
          const intl = closure_1_0(closure_1_2[3]).intl;
          const obj = { name: name.name, projectId: name.projectId };
          return intl.formatToPlainString(closure_1_1(closure_1_2[4]).tcDZw9, obj);
        });
        const targets = mapped.join(", ");
        let intl = closure_1_0(closure_1_2[3]).intl;
        return "" + intl.formatToPlainString(closure_1_1(closure_1_2[4]).jZlNst, { targets }) + "\n\n" + tmp;
      });
      return arr.join("\n\n");
    }
    if (!ref.current) {
      let tmp2 = arr;
      tmp.current = true;
      let tmp3 = closure_10;
      let tmp4 = closure_10(true);
      if (null != onSent) {
        tmp5(arr.map((target) => target.target));
      } else {
        let obj = conjureAttachmentDrafts;
        let num = 0;
        obj.sendConjureCardReply(projectId, sentMessage(arr));
      }
    }
  }, items4);
  const items5 = [tmp, callback1, first1, projectId, memo3, trimmed];
  const items6 = [callback1, first1, onDismiss, first2];
  const callback2 = obj.useCallback(() => {
    let args;
    let ref2;
    let tmp = closure_20;
    if (tmp) {
      let arr = memo3;
      if (0 !== memo3.length) {
        closure_10(true);
        closure_11(false);
        const project = first.getProject(projectId);
        let name;
        const tmp10 = trimmed;
        if (project != null) {
          name = project.name;
        }
        if (name == null) {
          name = tmp9;
        }
        const intl = projectId(onDismiss[3]).intl;
        let obj = { name, projectId: tmp9 };
        const _HermesInternal = HermesInternal;
        projectId = "" + tmp10 + "\n\n" + intl.formatToPlainString(request(onDismiss[4]).ScoZLp, obj);
        const allSettledResult = Promise.allSettled(arr.map((projectId) => {
          let obj2;
          const current = ref.current;
          let value = current.get(projectId.projectId);
          content = undefined;
          const tmp = ref;
          if (value != null) {
            content = value.content;
          }
          if (content !== content) {
            const obj = { content, nonce: obj2.createNonce() };
            const current2 = tmp.current;
            obj2 = createNonce;
            const result = current2.set(projectId.projectId, obj);
            value = obj;
          }
          const obj3 = conjureSendToProject;
          return obj3.sendConjureMessageToProject(projectId.projectId, content, value.nonce);
        }));
        allSettledResult.then((result) => {
          let _prompt;
          let closure_0 = result;
          const found = closure_18.filter((item, index) => "fulfilled" === content[index].status);
          const items = [...closure_7, ...found.map((target) => ({ target, prompt: _prompt }))];
          const arr = closure_18;
          if (found.length !== closure_18.length) {
            if (!ref2.current) {
              closure_8(items);
              const found1 = arr.filter((item) => !found.includes(item));
              closure_6(found1.map((projectId) => projectId.projectId));
              closure_10(false);
              closure_11(true);
            }
          }
          if (items.length > 0) {
            closure_21(items);
          }
        });
      } else {
        callback1(first1);
      }
    }
  }, items5);
  let obj2 = {
    projects: memo,
    targetIds: memo2,
    setTargetIds: callback,
    prompt: str,
    setPrompt: tmp7,
    sending: first2,
    failed: first3,
    canSubmit: tmp,
    submit: callback2,
    dismiss: obj.useCallback(() => {
      closure_13.current = true;
      let tmp2 = first1.length > 0;
      const tmp = first1;
      if (tmp2) {
        tmp2 = !first2;
      }
      if (tmp2) {
        callback1(tmp);
      }
      onDismiss();
    }, items6)
  };
  return obj2;
}
