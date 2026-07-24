// Module ID: 846
// Function ID: 9438
// Name: applyClientOptions
// Dependencies: [57, 65, 807, 815, 847, 848, 834, 809, 850, 841, 820]
// Exports: parseEventHintOrCaptureContext, prepareEvent

// Module 846 (applyClientOptions)
import _slicedToArray from "_slicedToArray";
import _toConsumableArray from "_toConsumableArray";

function applyClientOptions(environment, environment2) {
  let dist;
  let maxValueLength;
  let release;
  ({ release, dist, maxValueLength } = environment2);
  let DEFAULT_ENVIRONMENT = environment.environment || environment2.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = maxValueLength(834).DEFAULT_ENVIRONMENT;
  }
  environment.environment = DEFAULT_ENVIRONMENT;
  if (tmp3) {
    environment.release = release;
  }
  if (tmp4) {
    environment.dist = dist;
  }
  const request = environment.request;
  if (tmp5) {
    request.url = maxValueLength(809).truncate(request.url, maxValueLength);
    let obj = maxValueLength(809);
  }
  if (maxValueLength) {
    const exception = environment.exception;
    let tmp8 = null == exception;
    let arr = exception;
    if (!tmp8) {
      const values = exception.values;
      tmp8 = null == values;
      arr = values;
    }
    if (!tmp8) {
      const item = arr.forEach((value) => {
        if (value.value) {
          value.value = maxValueLength(outer1_1[7]).truncate(value.value, maxValueLength);
          const obj = maxValueLength(outer1_1[7]);
        }
      });
    }
  }
}
function applyDebugIds(exception) {
  _require = _require(850).getFilenameToDebugIdMap(arg1);
  exception = exception.exception;
  let tmp = null == exception;
  let arr = exception;
  if (!tmp) {
    const values = exception.values;
    tmp = null == values;
    arr = values;
  }
  if (!tmp) {
    let item = arr.forEach((stacktrace) => {
      stacktrace = stacktrace.stacktrace;
      let tmp = null == stacktrace;
      let arr = stacktrace;
      if (!tmp) {
        const frames = stacktrace.frames;
        tmp = null == frames;
        arr = frames;
      }
      if (!tmp) {
        const item = arr.forEach((filename) => {
          if (filename.filename) {
            filename.debug_id = outer1_0[filename.filename];
          }
        });
      }
    });
  }
}
function applyDebugMeta(exception) {
  const obj = {};
  exception = exception.exception;
  let tmp = null == exception;
  let arr = exception;
  if (!tmp) {
    const values = exception.values;
    tmp = null == values;
    arr = values;
  }
  if (!tmp) {
    let item = arr.forEach((stacktrace) => {
      stacktrace = stacktrace.stacktrace;
      let tmp = null == stacktrace;
      let arr = stacktrace;
      if (!tmp) {
        const frames = stacktrace.frames;
        tmp = null == frames;
        arr = frames;
      }
      if (!tmp) {
        const item = arr.forEach((debug_id) => {
          if (debug_id.debug_id) {
            if (debug_id.abs_path) {
              outer1_0[debug_id.abs_path] = debug_id.debug_id;
            } else if (debug_id.filename) {
              outer1_0[debug_id.filename] = debug_id.debug_id;
            }
            delete tmp.debug_id;
          }
        });
      }
    });
  }
  if (0 !== Object.keys(obj).length) {
    exception.debug_meta = exception.debug_meta || {};
    let images = exception.debug_meta.images;
    if (!images) {
      images = [];
    }
    exception.debug_meta.images = images;
    images = exception.debug_meta.images;
    const _Object = Object;
    const entries = Object.entries(obj);
    const item1 = entries.forEach((arg0) => {
      const tmp = outer1_2(arg0, 2);
      images.push({ type: "sourcemap", code_file: tmp[0], debug_id: tmp[1] });
    });
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = ["user", "level", "extra", "contexts", "tags", "fingerprint", "propagationContext"];

export { applyClientOptions };
export { applyDebugIds };
export { applyDebugMeta };
export const parseEventHintOrCaptureContext = function parseEventHintOrCaptureContext(captureContext) {
  if (captureContext) {
    let tmp3 = captureContext instanceof require(820) /* Scope */.Scope;
    if (!tmp3) {
      tmp3 = "function" === typeof captureContext;
    }
    if (tmp3) {
      const obj = { captureContext };
      let tmp4 = obj;
    } else {
      tmp4 = captureContext;
    }
    return tmp4;
  }
};
export const prepareEvent = function prepareEvent(normalizeDepth, event_id, event_id2, clone, emit, isolationScope) {
  normalizeDepth = normalizeDepth.normalizeDepth;
  let num = 3;
  if (undefined !== normalizeDepth) {
    num = normalizeDepth;
  }
  const normalizeMaxBreadth = normalizeDepth.normalizeMaxBreadth;
  let num2 = 1000;
  if (undefined !== normalizeMaxBreadth) {
    num2 = normalizeMaxBreadth;
  }
  let obj = {};
  event_id = event_id.event_id;
  if (!event_id) {
    event_id = event_id2.event_id;
  }
  if (!event_id) {
    event_id = num(num2[2]).uuid4();
    let obj2 = num(num2[2]);
  }
  obj.event_id = event_id;
  let timestamp = event_id.timestamp;
  if (!timestamp) {
    timestamp = num(num2[3]).dateTimestampInSeconds();
    let obj3 = num(num2[3]);
  }
  obj.timestamp = timestamp;
  let merged = Object.assign({}, event_id, obj);
  let integrations = event_id2.integrations;
  if (!integrations) {
    const integrations1 = normalizeDepth.integrations;
    integrations = integrations1.map((name) => name.name);
  }
  applyClientOptions(merged, normalizeDepth);
  if (integrations.length > 0) {
    merged.sdk = merged.sdk || {};
    const items = [];
    let integrations2 = merged.sdk.integrations;
    if (!integrations2) {
      integrations2 = [];
    }
    merged.sdk.integrations = items.concat(_toConsumableArray(integrations2), _toConsumableArray(integrations));
    const tmp7 = _toConsumableArray;
    const tmp7Result = _toConsumableArray(integrations2);
  }
  if (emit) {
    emit.emit("applyFrameMetadata", event_id);
  }
  if (undefined === event_id.type) {
    applyDebugIds(merged, normalizeDepth.stackParser);
  }
  const captureContext = event_id2.captureContext;
  if (!captureContext) {
    if (event_id2.mechanism) {
      const result = num(num2[2]).addExceptionMechanism(merged, event_id2.mechanism);
      let obj5 = num(num2[2]);
    }
    if (emit) {
      let eventProcessors = emit.getEventProcessors();
    } else {
      eventProcessors = [];
    }
    const combinedScopeData = num(num2[4]).getCombinedScopeData(isolationScope, clone);
    const items1 = [];
    let attachments = event_id2.attachments;
    if (!attachments) {
      attachments = [];
    }
    const obj6 = num(num2[4]);
    const tmp26 = _toConsumableArray;
    const combined = items1.concat(_toConsumableArray(attachments), _toConsumableArray(combinedScopeData.attachments));
    if (combined.length) {
      event_id2.attachments = combined;
    }
    const tmp26Result = _toConsumableArray(attachments);
    const result1 = num(num2[4]).applyScopeDataToEvent(merged, combinedScopeData);
    const items2 = [];
    let obj7 = num(num2[4]);
    const combined1 = items2.concat(_toConsumableArray(eventProcessors), _toConsumableArray(combinedScopeData.eventProcessors));
    const tmp33 = _toConsumableArray(eventProcessors);
    const result2 = num(num2[5]).notifyEventProcessors(combined1, merged, event_id2);
    return result2.then((breadcrumbs) => {
      if (breadcrumbs) {
        outer1_7(breadcrumbs);
      }
      let tmp3 = breadcrumbs;
      if ("number" === typeof num) {
        tmp3 = breadcrumbs;
        if (0 > 0) {
          tmp3 = (function normalizeEvent(breadcrumbs, arg1, arg2) {
            let closure_0 = arg1;
            let closure_1 = arg2;
            if (breadcrumbs) {
              const _Object = Object;
              breadcrumbs = breadcrumbs.breadcrumbs;
              if (breadcrumbs) {
                let obj = {};
                breadcrumbs = breadcrumbs.breadcrumbs;
                obj.breadcrumbs = breadcrumbs.map((data) => {
                  data = data.data;
                  if (data) {
                    const obj = { data: 9(num2[9]).normalize(data.data, closure_0, closure_1) };
                    data = obj;
                    const obj2 = 9(num2[9]);
                  }
                  return Object.assign({}, data, data);
                });
                breadcrumbs = obj;
              }
              let user = breadcrumbs.user;
              if (user) {
                obj = { user: 9(num2[9]).normalize(breadcrumbs.user, arg1, arg2) };
                user = obj;
                const obj3 = 9(num2[9]);
              }
              let contexts = breadcrumbs.contexts;
              if (contexts) {
                obj = { contexts: num(9[9]).normalize(breadcrumbs.contexts, arg1, arg2) };
                contexts = obj;
                const obj5 = num(9[9]);
              }
              let extra = breadcrumbs.extra;
              if (extra) {
                const obj1 = { extra: num(num2[9]).normalize(breadcrumbs.extra, arg1, arg2) };
                extra = obj1;
                const obj7 = num(num2[9]);
              }
              const merged = Object.assign({}, breadcrumbs, breadcrumbs, user, contexts, extra);
              const contexts2 = breadcrumbs.contexts;
              if (tmp17) {
                merged.contexts.trace = breadcrumbs.contexts.trace;
                if (breadcrumbs.contexts.trace.data) {
                  merged.contexts.trace.data = num(num2[9]).normalize(breadcrumbs.contexts.trace.data, arg1, arg2);
                  const obj8 = num(num2[9]);
                }
              }
              if (breadcrumbs.spans) {
                const spans = breadcrumbs.spans;
                merged.spans = spans.map((data) => {
                  data = data.data;
                  if (data) {
                    const obj = { data: 9(num2[9]).normalize(data.data, closure_0, closure_1) };
                    data = obj;
                    const obj2 = 9(num2[9]);
                  }
                  return Object.assign({}, data, data);
                });
              }
              const contexts3 = breadcrumbs.contexts;
              if (tmp20) {
                merged.contexts.flags = num(num2[9]).normalize(breadcrumbs.contexts.flags, 3, arg2);
                const obj9 = num(num2[9]);
              }
              return merged;
            } else {
              return null;
            }
          })(breadcrumbs, num, num2);
        }
      }
      return tmp3;
    });
  } else {
    if (clone) {
      let cloneResult = clone.clone();
    } else {
      const Scope = num(num2[10]).Scope;
      const prototype = Scope.prototype;
      cloneResult = new Scope();
    }
    cloneResult.update(captureContext);
  }
};
