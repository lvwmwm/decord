// Module ID: 846
// Function ID: 9432
// Name: applyClientOptions
// Dependencies: []
// Exports: parseEventHintOrCaptureContext, prepareEvent

// Module 846 (applyClientOptions)
function applyClientOptions(environment, environment2) {
  let dist;
  let maxValueLength;
  let release;
  ({ release, dist, maxValueLength } = environment2);
  const require = maxValueLength;
  let DEFAULT_ENVIRONMENT = environment.environment || environment2.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = require(dependencyMap[6]).DEFAULT_ENVIRONMENT;
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
    request.url = require(dependencyMap[7]).truncate(request.url, maxValueLength);
    const obj = require(dependencyMap[7]);
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
          value.value = maxValueLength(closure_1[7]).truncate(value.value, maxValueLength);
          const obj = maxValueLength(closure_1[7]);
        }
      });
    }
  }
}
function applyDebugIds(exception) {
  const callback = callback(dependencyMap[8]).getFilenameToDebugIdMap(arg1);
  exception = exception.exception;
  let tmp = null == exception;
  let arr = exception;
  if (!tmp) {
    const values = exception.values;
    tmp = null == values;
    arr = values;
  }
  if (!tmp) {
    const item = arr.forEach((stacktrace) => {
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
            filename.debug_id = closure_0[filename.filename];
          }
        });
      }
    });
  }
}
function applyDebugMeta(exception) {
  const obj = {};
  const require = obj;
  exception = exception.exception;
  let tmp = null == exception;
  let arr = exception;
  if (!tmp) {
    const values = exception.values;
    tmp = null == values;
    arr = values;
  }
  if (!tmp) {
    const item = arr.forEach((stacktrace) => {
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
              closure_0[debug_id.abs_path] = debug_id.debug_id;
            } else if (debug_id.filename) {
              closure_0[debug_id.filename] = debug_id.debug_id;
            }
            delete r0.debug_id;
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
    const dependencyMap = exception.debug_meta.images;
    const _Object = Object;
    const entries = Object.entries(obj);
    const item1 = entries.forEach((arg0) => {
      const tmp = callback(arg0, 2);
      images.push({ type: "sourcemap", code_file: tmp[0], debug_id: tmp[1] });
    });
  }
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = [true, true, true, true, true, true, true];

export { applyClientOptions };
export { applyDebugIds };
export { applyDebugMeta };
export const parseEventHintOrCaptureContext = function parseEventHintOrCaptureContext(captureContext) {
  if (captureContext) {
    let tmp3 = captureContext instanceof require(dependencyMap[10]).Scope;
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
  const require = num;
  const normalizeMaxBreadth = normalizeDepth.normalizeMaxBreadth;
  let num2 = 1000;
  if (undefined !== normalizeMaxBreadth) {
    num2 = normalizeMaxBreadth;
  }
  const dependencyMap = num2;
  const obj = {};
  event_id = event_id.event_id;
  if (!event_id) {
    event_id = event_id2.event_id;
  }
  if (!event_id) {
    event_id = require(dependencyMap[2]).uuid4();
    const obj2 = require(dependencyMap[2]);
  }
  obj.event_id = event_id;
  let timestamp = event_id.timestamp;
  if (!timestamp) {
    timestamp = require(dependencyMap[3]).dateTimestampInSeconds();
    const obj3 = require(dependencyMap[3]);
  }
  obj.timestamp = timestamp;
  const merged = Object.assign({}, event_id, obj);
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
    merged.sdk.integrations = items.concat(callback2(integrations2), callback2(integrations));
    const tmp7 = callback2;
    const tmp7Result = callback2(integrations2);
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
      const result = require(dependencyMap[2]).addExceptionMechanism(merged, event_id2.mechanism);
      const obj5 = require(dependencyMap[2]);
    }
    if (emit) {
      let eventProcessors = emit.getEventProcessors();
    } else {
      eventProcessors = [];
    }
    const combinedScopeData = require(dependencyMap[4]).getCombinedScopeData(isolationScope, clone);
    const items1 = [];
    let attachments = event_id2.attachments;
    if (!attachments) {
      attachments = [];
    }
    const obj6 = require(dependencyMap[4]);
    const tmp26 = callback2;
    const combined = items1.concat(callback2(attachments), callback2(combinedScopeData.attachments));
    if (combined.length) {
      event_id2.attachments = combined;
    }
    const tmp26Result = callback2(attachments);
    const result1 = require(dependencyMap[4]).applyScopeDataToEvent(merged, combinedScopeData);
    const items2 = [];
    const obj7 = require(dependencyMap[4]);
    const combined1 = items2.concat(callback2(eventProcessors), callback2(combinedScopeData.eventProcessors));
    const tmp33 = callback2(eventProcessors);
    const result2 = require(dependencyMap[5]).notifyEventProcessors(combined1, merged, event_id2);
    return result2.then((breadcrumbs) => {
      if (breadcrumbs) {
        callback(breadcrumbs);
      }
      let tmp3 = breadcrumbs;
      if ("number" === typeof num) {
        tmp3 = breadcrumbs;
        if (0 > 0) {
          tmp3 = function normalizeEvent(breadcrumbs, arg1, arg2) {
            if (breadcrumbs) {
              const _Object = Object;
              breadcrumbs = breadcrumbs.breadcrumbs;
              if (breadcrumbs) {
                let obj = {};
                breadcrumbs = breadcrumbs.breadcrumbs;
                obj.breadcrumbs = breadcrumbs.map((data) => {
                  data = data.data;
                  if (data) {
                    const obj = { data: arg1(arg2[9]).normalize(data.data, arg1, arg2) };
                    data = obj;
                    const obj2 = arg1(arg2[9]);
                  }
                  return Object.assign({}, data, data);
                });
                breadcrumbs = obj;
              }
              let user = breadcrumbs.user;
              if (user) {
                obj = { user: arg1(arg2[9]).normalize(breadcrumbs.user, arg1, arg2) };
                user = obj;
                const obj3 = arg1(arg2[9]);
              }
              let contexts = breadcrumbs.contexts;
              if (contexts) {
                obj = { contexts: arg1(arg2[9]).normalize(breadcrumbs.contexts, arg1, arg2) };
                contexts = obj;
                const obj5 = arg1(arg2[9]);
              }
              let extra = breadcrumbs.extra;
              if (extra) {
                const obj1 = { extra: arg1(arg2[9]).normalize(breadcrumbs.extra, arg1, arg2) };
                extra = obj1;
                const obj7 = arg1(arg2[9]);
              }
              const merged = Object.assign({}, breadcrumbs, breadcrumbs, user, contexts, extra);
              const contexts2 = breadcrumbs.contexts;
              if (tmp17) {
                merged.contexts.trace = breadcrumbs.contexts.trace;
                if (breadcrumbs.contexts.trace.data) {
                  merged.contexts.trace.data = arg1(arg2[9]).normalize(breadcrumbs.contexts.trace.data, arg1, arg2);
                  const obj8 = arg1(arg2[9]);
                }
              }
              if (breadcrumbs.spans) {
                const spans = breadcrumbs.spans;
                merged.spans = spans.map((data) => {
                  data = data.data;
                  if (data) {
                    const obj = { data: arg1(arg2[9]).normalize(data.data, arg1, arg2) };
                    data = obj;
                    const obj2 = arg1(arg2[9]);
                  }
                  return Object.assign({}, data, data);
                });
              }
              const contexts3 = breadcrumbs.contexts;
              if (tmp20) {
                merged.contexts.flags = arg1(arg2[9]).normalize(breadcrumbs.contexts.flags, 3, arg2);
                const obj9 = arg1(arg2[9]);
              }
              return merged;
            } else {
              return null;
            }
          }(breadcrumbs, num, num2);
        }
      }
      return tmp3;
    });
  } else {
    if (clone) {
      let cloneResult = clone.clone();
    } else {
      const Scope = require(dependencyMap[10]).Scope;
      const prototype = Scope.prototype;
      cloneResult = new Scope();
    }
    cloneResult.update(captureContext);
  }
};
