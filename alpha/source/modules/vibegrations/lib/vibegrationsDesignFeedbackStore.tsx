// Module ID: 16539
// Function ID: 16540
// Name: vibegrationsDesignFeedbackStore
// Dependencies: [19, 16540, 558, 576, 2]
// Exports: addVibegrationsDesignAnnotation, canEditVibegrationsDesignAnnotation, enterVibegrationsDesignFeedback, exitVibegrationsDesignFeedback, getVibegrationsDesignFeedback, relocateVibegrationsDesignAnnotations, removeVibegrationsDesignAnnotation, setVibegrationsDesignFeedbackContext, updateVibegrationsDesignAnnotation

// Module 16539 (vibegrationsDesignFeedbackStore)
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16540 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function subscribeVibegrationsDesignFeedback(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  return () => {
    set.delete(closure_0);
  };
}
let obj = { active: false, annotations: Object.freeze([]), context: null };
let active = Object.freeze(obj);
const map = new Map();
const set = new Set();
let metroRequire = 0;
function getVibegrationsDesignFeedback(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  return value;
}
function canEditVibegrationsDesignAnnotation(authorId, arg1) {
  return null != arg1 && authorId.authorId === arg1;
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      let value;
      if (null == closure_0) {
        value = active;
      } else {
        value = map.get(tmp);
        if (value == null) {
          value = active;
        }
      }
      return value;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return react.useSyncExternalStore(subscribeVibegrationsDesignFeedback, tmp2, tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const callback = react.useCallback(() => {
    let value;
    if (null == closure_0) {
      value = active;
    } else {
      value = map.get(tmp);
      if (value == null) {
        value = active;
      }
    }
    return value;
  }, items);
  return react.useSyncExternalStore(subscribeVibegrationsDesignFeedback, callback, callback);
});
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsDesignFeedbackStore.tsx");

export { getVibegrationsDesignFeedback };
export const enterVibegrationsDesignFeedback = function enterVibegrationsDesignFeedback(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  if (!value.active) {
    const obj2 = { active: true };
    const merged = Object.assign(value);
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = obj.set(arg0, obj2);
  }
};
export const exitVibegrationsDesignFeedback = function exitVibegrationsDesignFeedback(arg0) {
  if (map.has(arg0)) {
    if (!active.active) {
      if (0 === active.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = obj.set(arg0, tmp);
  }
};
export const setVibegrationsDesignFeedbackContext = function setVibegrationsDesignFeedbackContext(arg0, context) {
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  if (value.active) {
    const obj2 = { context };
    const merged = Object.assign(value);
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = obj.set(arg0, obj2);
  }
};
export const addVibegrationsDesignAnnotation = function addVibegrationsDesignAnnotation(arg0, authorId, target, comment) {
  let items;
  let VIBEGRATIONS_DESIGN_ANCHOR_CENTER = arg4;
  if (arg4 === undefined) {
    VIBEGRATIONS_DESIGN_ANCHOR_CENTER = VibegrationsDesignFeedback.VIBEGRATIONS_DESIGN_ANCHOR_CENTER;
  }
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  metroRequire = metroRequire + 1;
  const text = `annotation-${tmp5}`;
  const obj2 = { annotations: items };
  const merged = Object.assign(value);
  items = [];
  items[HermesBuiltin.arraySpread(items, value.annotations, 0)] = { id: text, authorId, target, anchor: VIBEGRATIONS_DESIGN_ANCHOR_CENTER, comment };
  if (!obj2.active) {
    if (0 === obj2.annotations.length) {
      map.delete(arg0);
    }
    (function emit() {
      const items = [...closure_1_5];
      const iter = items[Symbol.iterator]();
      iter.next();
      if (iter !== undefined) {
        try {
          tmp2();
        } catch (err) {
        }
      }
    })();
    return text;
  }
  const result = obj.set(arg0, obj2);
};
export const relocateVibegrationsDesignAnnotations = function relocateVibegrationsDesignAnnotations(arg0, size) {
  let annotations;
  let closure_0 = size;
  let obj = map;
  let value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  active = value.active && 0 !== size.size;
  if (active) {
    const obj2 = {
      annotations: annotations.map((id) => {
          const value = closure_0.get(id.id);
          let tmp2 = id;
          if (null != value) {
            const obj = { target: value };
            const merged = Object.assign(id);
            tmp2 = obj;
          }
          return tmp2;
        })
    };
    let tmp2 = obj2;
    let merged = Object.assign(value);
    annotations = value.annotations;
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        obj.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = obj.set(arg0, obj2);
  }
};
export { canEditVibegrationsDesignAnnotation };
export const updateVibegrationsDesignAnnotation = function updateVibegrationsDesignAnnotation(arg0, arg1, arg2, arg3) {
  let annotations1;
  let closure_0 = arg2;
  let closure_1 = arg3;
  let obj = map;
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  const annotations = value.annotations;
  const found = annotations.find((id) => id.id === closure_0);
  let tmp3 = null != found;
  if (tmp3) {
    tmp3 = null != arg1 && found.authorId === arg1;
    const tmp5 = null != arg1 && found.authorId === arg1;
  }
  if (tmp3) {
    const obj2 = {
      annotations: annotations1.map((id) => {
          let tmp = id;
          if (id.id === closure_0) {
            const obj = { comment };
            const merged = Object.assign(id);
            tmp = obj;
          }
          return tmp;
        })
    };
    let merged = Object.assign(value);
    annotations1 = value.annotations;
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        obj.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = obj.set(arg0, obj2);
  }
};
export const removeVibegrationsDesignAnnotation = function removeVibegrationsDesignAnnotation(arg0, arg1, arg2) {
  let annotations1;
  let args;
  let closure_0 = arg2;
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  const annotations = value.annotations;
  const found = annotations.find((id) => id.id === closure_0);
  let tmp3 = null != found;
  if (tmp3) {
    tmp3 = null != arg1 && found.authorId === arg1;
  }
  if (tmp3) {
    const obj2 = { annotations: annotations1.filter((id) => id.id !== closure_0) };
    const merged = Object.assign(value);
    annotations1 = value.annotations;
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = obj.set(arg0, obj2);
  }
};
export { subscribeVibegrationsDesignFeedback };
export const useVibegrationsDesignFeedback = tmp4;
