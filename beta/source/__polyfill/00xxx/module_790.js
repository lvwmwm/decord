// Module ID: 790
// Function ID: 791
// Dependencies: [697]
// Exports: addMetadataToStackFrames, getFilenameToMetadataMap, getMetadataForUrl, stripMetadataFromStackFrames

// Module 790
import _mod697 from "module_697" /* 697 */;

let filename, stacktrace;

function ensureMetadataStacksAreParsed(fn) {
  const tmp2 = closure_1_0;
  const tmp4 = closure_1_1;
  if (closure_1_0(closure_1_1[0]).GLOBAL_OBJ._sentryModuleMetadata) {
    const _Object = Object;
    const keys = Object.keys(tmp2(tmp4[0]).GLOBAL_OBJ._sentryModuleMetadata);
    for (const item10026 of keys) {
      let tmp11 = item10026;
      let tmp16 = closure_1_0(closure_1_1[0]).GLOBAL_OBJ._sentryModuleMetadata[item10026];
      let obj = set;
      if (!set.has(item10026)) {
        let addResult = obj.add(tmp11);
        let obj2 = fn(tmp11);
        let reversed = obj2.reverse();
        for (const item10050 of reversed) {
          if (item10050.filename) {
            let result = closure_1_2.set(tmp22.filename, tmp16);
            obj3.return();
            break;
          }
          continue;
        }
      }
      continue;
    }
  }
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const map = new Map();
const set = new Set();

export const addMetadataToStackFrames = function addMetadataToStackFrames(arg0, exception) {
  let closure_0 = arg0;
  exception = exception.exception;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      let item = values.forEach((stacktrace) => {
        stacktrace = stacktrace.stacktrace;
        if (stacktrace != null) {
          const frames = stacktrace.frames;
          if (frames != null) {
            const item = frames.forEach((filename) => {
              if (filename.filename) {
                if (!filename.module_metadata) {
                  filename = filename.filename;
                  let tmp2 = ensureMetadataStacksAreParsed(closure_1_0);
                  const value = map.get(filename);
                  if (value) {
                    filename.module_metadata = value;
                  }
                }
              }
            });
          }
        }
      });
    }
  }
};
export const getFilenameToMetadataMap = function getFilenameToMetadataMap(fn) {
  const obj = {};
  if (_mod697.GLOBAL_OBJ._sentryModuleMetadata) {
    const _Object = Object;
    const keys = Object.keys(_mod697.GLOBAL_OBJ._sentryModuleMetadata);
    for (const item10026 of keys) {
      let tmp15 = _mod697.GLOBAL_OBJ._sentryModuleMetadata[item10026];
      let obj2 = fn(item10026);
      let reversed = obj2.reverse();
      for (const item10043 of reversed) {
        if (item10043.filename) {
          obj[tmp19.filename] = tmp15;
          obj3.return();
          break;
        }
        continue;
      }
      continue;
    }
    return obj;
  } else {
    return obj;
  }
};
export const getMetadataForUrl = function getMetadataForUrl(fn, arg1) {
  ensureMetadataStacksAreParsed(fn);
  return map.get(arg1);
};
export const stripMetadataFromStackFrames = function stripMetadataFromStackFrames(exception) {
  exception = exception.exception;
  if (exception != null) {
    const values = exception.values;
    if (values != null) {
      let item = values.forEach((stacktrace) => {
        stacktrace = stacktrace.stacktrace;
        if (stacktrace != null) {
          const frames = stacktrace.frames;
          if (frames != null) {
            const item = frames.forEach((item) => {
              delete item["module_metadata"];
            });
          }
        }
      });
    }
  }
};
