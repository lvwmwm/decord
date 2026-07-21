// Module ID: 7280
// Function ID: 58682
// Name: applyClientOptions
// Dependencies: []
// Exports: parseEventHintOrCaptureContext, prepareEvent

// Module 7280 (applyClientOptions)
function applyClientOptions(environment, environment2) {
  let dist;
  let maxValueLength;
  let release;
  ({ release, dist, maxValueLength } = environment2);
  let num = 250;
  if (undefined !== maxValueLength) {
    num = maxValueLength;
  }
  let DEFAULT_ENVIRONMENT = environment.environment || environment2.environment;
  if (!DEFAULT_ENVIRONMENT) {
    DEFAULT_ENVIRONMENT = require(dependencyMap[7]).DEFAULT_ENVIRONMENT;
  }
  environment.environment = DEFAULT_ENVIRONMENT;
  if (tmp3) {
    environment.release = release;
  }
  if (tmp4) {
    environment.dist = dist;
  }
  if (environment.message) {
    environment.message = require(dependencyMap[8]).truncate(environment.message, num);
    const obj = require(dependencyMap[8]);
  }
  let iter = environment.exception && environment.exception.values;
  if (iter) {
    iter = environment.exception.values[0];
  }
  let value = iter;
  if (iter) {
    value = iter.value;
  }
  if (value) {
    iter.value = require(dependencyMap[8]).truncate(iter.value, num);
    const obj2 = require(dependencyMap[8]);
  }
  const request = environment.request;
  let url = request;
  if (request) {
    url = request.url;
  }
  if (url) {
    request.url = require(dependencyMap[8]).truncate(request.url, num);
    const obj3 = require(dependencyMap[8]);
  }
}
function applyDebugIds(exception) {
  const callback = callback(dependencyMap[9]).getFilenameToDebugIdMap(arg1);
  const values = exception.exception.values;
  const item = values.forEach((stacktrace) => {
    const frames = stacktrace.stacktrace.frames;
    const item = frames.forEach((filename) => {
      filename = closure_0;
      if (closure_0) {
        filename = filename.filename;
      }
      if (filename) {
        filename.debug_id = closure_0[filename.filename];
      }
    });
  });
}
function applyDebugMeta(exception) {
  let obj = {};
  const require = obj;
  const values = exception.exception.values;
  const item = values.forEach((stacktrace) => {
    const frames = stacktrace.stacktrace.frames;
    const item = frames.forEach((debug_id) => {
      if (debug_id.debug_id) {
        if (debug_id.abs_path) {
          closure_0[debug_id.abs_path] = debug_id.debug_id;
        } else if (debug_id.filename) {
          closure_0[debug_id.filename] = debug_id.debug_id;
        }
        delete r0.debug_id;
      }
    });
  });
  while (true) {
    let tmp2 = globalThis;
    let _Object = Object;
    let tmp3 = obj;
    let num = 0;
    if (0 === Object.keys(obj).length) {
      break;
    } else {
      let tmp4 = exception;
      let debug_meta = exception.debug_meta;
      obj = debug_meta;
      if (!debug_meta) {
        obj = {};
      }
      exception.debug_meta = obj;
      let tmp5 = exception;
      let images = exception.debug_meta.images;
      let items = images;
      if (!images) {
        items = [];
      }
      exception.debug_meta.images = items;
      let dependencyMap = exception.debug_meta.images;
      let _Object2 = Object;
      let entries = Object.entries(obj);
      let item1 = entries.forEach((arg0) => {
        const tmp = callback(arg0, 2);
        images.push({ type: "sourcemap", code_file: tmp[0], debug_id: tmp[1] });
      });
      // break
    }
  }
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = ["memo", "withSpring", "formatToPlainString", "icon", "LIGHT", "getChannel", "__workletHash", "t"];

export { applyClientOptions };
export { applyDebugIds };
export { applyDebugMeta };
export const parseEventHintOrCaptureContext = function parseEventHintOrCaptureContext(captureContext) {
  if (captureContext) {
    let tmp3 = captureContext instanceof require(dependencyMap[11]).Scope;
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
export const prepareEvent = function prepareEvent(normalizeDepth, event_id, event_id2, getScopeData, emit, getScopeData2) {
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
    const globalScope = require(dependencyMap[4]).getGlobalScope();
    const scopeData = globalScope.getScopeData();
    if (getScopeData2) {
      const scopeData1 = getScopeData2.getScopeData();
      require(dependencyMap[5]).mergeScopeData(scopeData, scopeData1);
      const obj8 = require(dependencyMap[5]);
    }
    if (getScopeData) {
      const scopeData2 = getScopeData.getScopeData();
      require(dependencyMap[5]).mergeScopeData(scopeData, scopeData2);
      const obj9 = require(dependencyMap[5]);
    }
    const items1 = [];
    let attachments = event_id2.attachments;
    if (!attachments) {
      attachments = [];
    }
    const obj6 = require(dependencyMap[4]);
    const tmp33 = callback2;
    const combined = items1.concat(callback2(attachments), callback2(scopeData.attachments));
    if (combined.length) {
      event_id2.attachments = combined;
    }
    const tmp33Result = callback2(attachments);
    const result1 = require(dependencyMap[5]).applyScopeDataToEvent(merged, scopeData);
    const items2 = [];
    const obj10 = require(dependencyMap[5]);
    const combined1 = items2.concat(callback2(eventProcessors), callback2(scopeData.eventProcessors));
    const tmp40 = callback2(eventProcessors);
    const result2 = require(dependencyMap[6]).notifyEventProcessors(combined1, merged, event_id2);
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
                    const obj = { data: arg1(arg2[10]).normalize(data.data, arg1, arg2) };
                    data = obj;
                    const obj2 = arg1(arg2[10]);
                  }
                  return Object.assign({}, data, data);
                });
                breadcrumbs = obj;
              }
              let user = breadcrumbs.user;
              if (user) {
                obj = { user: arg1(arg2[10]).normalize(breadcrumbs.user, arg1, arg2) };
                user = obj;
                const obj3 = arg1(arg2[10]);
              }
              let contexts = breadcrumbs.contexts;
              if (contexts) {
                obj = { contexts: arg1(arg2[10]).normalize(breadcrumbs.contexts, arg1, arg2) };
                contexts = obj;
                const obj5 = arg1(arg2[10]);
              }
              let extra = breadcrumbs.extra;
              if (extra) {
                const obj1 = { extra: arg1(arg2[10]).normalize(breadcrumbs.extra, arg1, arg2) };
                extra = obj1;
                const obj7 = arg1(arg2[10]);
              }
              const merged = Object.assign({}, breadcrumbs, breadcrumbs, user, contexts, extra);
              if (tmp16) {
                merged.contexts.trace = breadcrumbs.contexts.trace;
                if (breadcrumbs.contexts.trace.data) {
                  merged.contexts.trace.data = arg1(arg2[10]).normalize(breadcrumbs.contexts.trace.data, arg1, arg2);
                  const obj8 = arg1(arg2[10]);
                }
              }
              if (breadcrumbs.spans) {
                const spans = breadcrumbs.spans;
                merged.spans = spans.map((data) => {
                  data = data.data;
                  if (data) {
                    const obj = { data: arg1(arg2[10]).normalize(data.data, arg1, arg2) };
                    data = obj;
                    const obj2 = arg1(arg2[10]);
                  }
                  return Object.assign({}, data, data);
                });
              }
              if (tmp19) {
                merged.contexts.flags = arg1(arg2[10]).normalize(breadcrumbs.contexts.flags, 3, arg2);
                const obj9 = arg1(arg2[10]);
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
    if (getScopeData) {
      let cloneResult = getScopeData.clone();
    } else {
      const Scope = require(dependencyMap[11]).Scope;
      const prototype = Scope.prototype;
      cloneResult = new Scope();
    }
    cloneResult.update(captureContext);
  }
};
