// Module ID: 1094
// Function ID: 12550
// Name: isValidProfile
// Dependencies: [65, 794, 978, 1095]
// Exports: addProfilesToEnvelope, createHermesProfilingEvent, enrichCombinedProfileWithEventContext, findProfiledTransactionsFromEnvelope

// Module 1094 (isValidProfile)
import _toConsumableArray from "_toConsumableArray";

const require = arg1;
function isValidProfile(profile) {
  return profile.samples.length > 1;
}
function enrichAndroidProfileWithEventContext(profile_id, build_id, contexts) {
  let obj = {};
  obj = {};
  const merged = Object.assign({}, build_id);
  obj.images = require(1095) /* getDebugMetadata */.getDebugMetadata();
  obj.debug_meta = obj;
  obj.build_id = build_id.build_id || "";
  obj.device_cpu_frequencies = [];
  contexts = contexts.contexts;
  let device;
  if (null !== contexts) {
    if (undefined !== contexts) {
      device = contexts.device;
    }
  }
  let flag;
  if (null !== device) {
    if (undefined !== device) {
      flag = device.simulator;
    }
  }
  if (!flag) {
    flag = false;
  }
  obj.device_is_emulator = flag;
  const contexts2 = contexts.contexts;
  let str;
  if (null !== contexts2) {
    if (undefined !== contexts2) {
      str = contexts2.device;
    }
  }
  if (str) {
    str = contexts.contexts.device.locale;
  }
  if (!str) {
    str = "";
  }
  obj.device_locale = str;
  const contexts3 = contexts.contexts;
  let device1;
  if (null !== contexts3) {
    if (undefined !== contexts3) {
      device1 = contexts3.device;
    }
  }
  let str2;
  if (null !== device1) {
    if (undefined !== device1) {
      str2 = device1.manufacturer;
    }
  }
  if (!str2) {
    str2 = "";
  }
  obj.device_manufacturer = str2;
  const contexts4 = contexts.contexts;
  let device2;
  if (null !== contexts4) {
    if (undefined !== contexts4) {
      device2 = contexts4.device;
    }
  }
  let str3;
  if (null !== device2) {
    if (undefined !== device2) {
      str3 = device2.model;
    }
  }
  if (!str3) {
    str3 = "";
  }
  obj.device_model = str3;
  const contexts5 = contexts.contexts;
  let os;
  if (null !== contexts5) {
    if (undefined !== contexts5) {
      os = contexts5.os;
    }
  }
  let str4;
  if (null !== os) {
    if (undefined !== os) {
      str4 = os.name;
    }
  }
  if (!str4) {
    str4 = "";
  }
  obj.device_os_name = str4;
  const contexts6 = contexts.contexts;
  let os1;
  if (null !== contexts6) {
    if (undefined !== contexts6) {
      os1 = contexts6.os;
    }
  }
  let str5;
  if (null !== os1) {
    if (undefined !== os1) {
      str5 = os1.version;
    }
  }
  if (!str5) {
    str5 = "";
  }
  obj.device_os_version = str5;
  const contexts7 = contexts.contexts;
  let device3;
  if (null !== contexts7) {
    if (undefined !== contexts7) {
      device3 = contexts7.device;
    }
  }
  let str6;
  if (null !== device3) {
    if (undefined !== device3) {
      str6 = device3.memory_size;
    }
  }
  if (str6) {
    const _Number = Number;
    str6 = Number(contexts.contexts.device.memory_size).toString(10);
    const str7 = Number(contexts.contexts.device.memory_size);
  }
  if (!str6) {
    str6 = "";
  }
  obj.device_physical_memory_bytes = str6;
  let environment = contexts.environment;
  if (!environment) {
    environment = require(978) /* isHermesEnabled */.getDefaultEnvironment();
    const obj4 = require(978) /* isHermesEnabled */;
  }
  obj.environment = environment;
  obj.profile_id = profile_id;
  let _Date = Date;
  if (contexts.start_timestamp) {
    const prototype2 = _Date.prototype;
    _Date = new _Date(1000 * contexts.start_timestamp);
    let toISOStringResult = _Date.toISOString();
  } else {
    const prototype = _Date.prototype;
    const _Date1 = new _Date();
    toISOStringResult = _Date1.toISOString();
  }
  obj.timestamp = toISOStringResult;
  obj.release = contexts.release || "";
  obj.dist = contexts.dist || "";
  obj.transaction_id = contexts.event_id || "";
  obj.transaction_name = contexts.transaction || "";
  const contexts8 = contexts.contexts;
  let trace;
  if (null !== contexts8) {
    if (undefined !== contexts8) {
      trace = contexts8.trace;
    }
  }
  let str8;
  if (null !== trace) {
    if (undefined !== trace) {
      str8 = trace.trace_id;
    }
  }
  if (!str8) {
    str8 = "";
  }
  obj.trace_id = str8;
  obj.version_name = contexts.release || "";
  obj.version_code = contexts.dist || "";
  return Object.assign(merged, obj);
}

export { isValidProfile };
export const findProfiledTransactionsFromEnvelope = function findProfiledTransactionsFromEnvelope(arg0) {
  const items = [];
  items(794).forEachEnvelopeItem(arg0, (arg0, arg1) => {
    if ("transaction" === arg1) {
      for (let num = 1; num < arg0.length; num = num + 1) {
        let contexts = arg0[num].contexts;
        let trace;
        if (null !== contexts) {
          if (undefined !== contexts) {
            trace = contexts.trace;
          }
        }
        let data;
        if (null !== trace) {
          if (undefined !== trace) {
            data = trace.data;
          }
        }
        let profile_id;
        if (null !== data) {
          if (undefined !== data) {
            profile_id = data.profile_id;
          }
        }
        if (profile_id) {
          let tmp5 = items;
          let arr = items.push(arg0[num]);
        }
      }
    }
  });
  return items;
};
export const enrichCombinedProfileWithEventContext = function enrichCombinedProfileWithEventContext(profile_id, value, contexts) {
  if ("js_profile" in value) {
    return enrichAndroidProfileWithEventContext(profile_id, value, contexts);
  } else {
    if (value.profile) {
      if (isValidProfile(value.profile)) {
        contexts = contexts.contexts;
        let trace;
        if (null !== contexts) {
          if (undefined !== contexts) {
            trace = contexts.trace;
          }
        }
        let str;
        if (null !== trace) {
          if (undefined !== trace) {
            str = trace.trace_id;
          }
        }
        if (!str) {
          str = "";
        }
        const _Object = Object;
        let obj = { event_id: profile_id, runtime: { name: "hermes", version: "" } };
        let _Date = Date;
        const merged = Object.assign({}, value);
        if (contexts.start_timestamp) {
          const prototype2 = _Date.prototype;
          _Date = new _Date(1000 * contexts.start_timestamp);
          let toISOStringResult = _Date.toISOString();
        } else {
          const prototype = _Date.prototype;
          const _Date1 = new _Date();
          toISOStringResult = _Date1.toISOString();
        }
        obj.timestamp = toISOStringResult;
        obj.release = contexts.release || "";
        let environment = contexts.environment;
        if (!environment) {
          environment = require(978) /* isHermesEnabled */.getDefaultEnvironment();
          const obj4 = require(978) /* isHermesEnabled */;
        }
        obj.environment = environment;
        obj = {};
        const contexts2 = contexts.contexts;
        let os;
        if (null !== contexts2) {
          if (undefined !== contexts2) {
            os = contexts2.os;
          }
        }
        let str3;
        if (null !== os) {
          if (undefined !== os) {
            str3 = os.name;
          }
        }
        if (!str3) {
          str3 = "";
        }
        obj.name = str3;
        const contexts3 = contexts.contexts;
        let os1;
        if (null !== contexts3) {
          if (undefined !== contexts3) {
            os1 = contexts3.os;
          }
        }
        let str4;
        if (null !== os1) {
          if (undefined !== os1) {
            str4 = os1.version;
          }
        }
        if (!str4) {
          str4 = "";
        }
        obj.version = str4;
        const contexts4 = contexts.contexts;
        let os2;
        if (null !== contexts4) {
          if (undefined !== contexts4) {
            os2 = contexts4.os;
          }
        }
        let str5;
        if (null !== os2) {
          if (undefined !== os2) {
            str5 = os2.build;
          }
        }
        if (!str5) {
          str5 = "";
        }
        obj.build_number = str5;
        obj.os = obj;
        obj = {};
        const contexts5 = contexts.contexts;
        let str6;
        if (null !== contexts5) {
          if (undefined !== contexts5) {
            str6 = contexts5.device;
          }
        }
        if (str6) {
          str6 = contexts.contexts.device.locale;
        }
        if (!str6) {
          str6 = "";
        }
        obj.locale = str6;
        const contexts6 = contexts.contexts;
        let device;
        if (null !== contexts6) {
          if (undefined !== contexts6) {
            device = contexts6.device;
          }
        }
        let str7;
        if (null !== device) {
          if (undefined !== device) {
            str7 = device.model;
          }
        }
        if (!str7) {
          str7 = "";
        }
        obj.model = str7;
        const contexts7 = contexts.contexts;
        let device1;
        if (null !== contexts7) {
          if (undefined !== contexts7) {
            device1 = contexts7.device;
          }
        }
        let str8;
        if (null !== device1) {
          if (undefined !== device1) {
            str8 = device1.manufacturer;
          }
        }
        if (!str8) {
          str8 = "";
        }
        obj.manufacturer = str8;
        const contexts8 = contexts.contexts;
        let device2;
        if (null !== contexts8) {
          if (undefined !== contexts8) {
            device2 = contexts8.device;
          }
        }
        let str9;
        if (null !== device2) {
          if (undefined !== device2) {
            str9 = device2.arch;
          }
        }
        if (!str9) {
          str9 = "";
        }
        obj.architecture = str9;
        const contexts9 = contexts.contexts;
        let device3;
        if (null !== contexts9) {
          if (undefined !== contexts9) {
            device3 = contexts9.device;
          }
        }
        let flag;
        if (null !== device3) {
          if (undefined !== device3) {
            flag = device3.simulator;
          }
        }
        if (!flag) {
          flag = false;
        }
        obj.is_emulator = flag;
        obj.device = obj;
        const obj1 = { name: contexts.transaction || "", id: contexts.event_id || "", trace_id: str };
        const transaction = value.transaction;
        let str10;
        if (null !== transaction) {
          if (undefined !== transaction) {
            str10 = transaction.active_thread_id;
          }
        }
        if (!str10) {
          str10 = "";
        }
        obj1.active_thread_id = str10;
        obj.transaction = obj1;
        const obj2 = {};
        const items = [];
        const debug_meta = value.debug_meta;
        let images;
        const obj9 = require(1095) /* getDebugMetadata */;
        const tmp23 = callback;
        if (null !== debug_meta) {
          if (undefined !== debug_meta) {
            images = debug_meta.images;
          }
        }
        if (!images) {
          images = [];
        }
        obj2.images = items.concat(callback(require(1095) /* getDebugMetadata */.getDebugMetadata()), tmp23(images));
        obj.debug_meta = obj2;
        return Object.assign(merged, obj);
      }
    }
    return null;
  }
};
export { enrichAndroidProfileWithEventContext };
export const createHermesProfilingEvent = function createHermesProfilingEvent(result1) {
  const obj = { platform: "javascript", version: "1", profile: result1, transaction: { active_thread_id: result1.active_thread_id } };
  return obj;
};
export const addProfilesToEnvelope = function addProfilesToEnvelope(arg0, arg1) {
  if (arg1.length) {
    const tmp3 = arg1[Symbol.iterator]();
    while (tmp3 !== undefined) {
      let tmp6 = arg0;
      let arr = arg0[1];
      let obj = { type: "profile" };
      let items = [obj, tmp4];
      arr = arr.push(items);
      continue;
    }
    return arg0;
  } else {
    return arg0;
  }
};
