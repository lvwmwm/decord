// Module ID: 930
// Function ID: 10106
// Name: createConsolaReporter
// Dependencies: []
// Exports: createConsolaReporter

// Module 930 (createConsolaReporter)
let closure_2 = require(dependencyMap[0]);
let closure_3 = ["gradientTransform", "ImpressionGroups", "stageInfo", "browser", "getApplicationCodedLinkData", "_shortMonthsParse"];
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let closure_4 = [];
let closure_5 = {};
let closure_6 = {};

export const createConsolaReporter = function createConsolaReporter() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      let first = arguments[0];
    }
    let _Set = Set;
    let levels = first.levels;
    if (null == levels) {
      levels = closure_4;
    }
    const prototype = _Set.prototype;
    _Set = new _Set(levels);
    const require = _Set;
    const dependencyMap = first.client;
    const obj = {
      log(arg0) {
          let args;
          let date;
          let level;
          let message;
          let tag;
          let type;
          ({ type, level, message, args, tag, date } = arg0);
          const tmp = callback(arg0, closure_3);
          if (!client) {
            const client = _Set(client[1]).getClient();
            const obj2 = _Set(client[1]);
          }
          if (client) {
            let str = "debug";
            if ("verbose" !== type) {
              str = "trace";
              if ("silent" !== type) {
                if (!type) {
                  str = "info";
                  if ("number" === typeof level) {
                    str = "info";
                    if (closure_6[level]) {
                      str = tmp6;
                    }
                  }
                }
              }
            }
            if (_Set.has(str)) {
              const options = client.getOptions();
              const normalizeDepth = options.normalizeDepth;
              let num3 = 3;
              if (undefined !== normalizeDepth) {
                num3 = normalizeDepth;
              }
              const normalizeMaxBreadth = options.normalizeMaxBreadth;
              let num4 = 1000;
              if (undefined !== normalizeMaxBreadth) {
                num4 = normalizeMaxBreadth;
              }
              const items = [];
              if (message) {
                items.push(message);
              }
              let tmp10 = args;
              if (args) {
                tmp10 = args.length > 0;
              }
              if (tmp10) {
                items.push(_Set(client[2]).formatConsoleArgs(args, num3, num4));
                const obj3 = _Set(client[2]);
              }
              tmp.sentry.origin = "auto.log.consola";
              const joined = items.join(" ");
              if (tag) {
                tmp.consola.tag = tag;
              }
              if (type) {
                tmp.consola.type = type;
              }
              let tmp16 = null != level;
              if (tmp16) {
                tmp16 = "number" === typeof level;
              }
              if (tmp16) {
                tmp.consola.level = level;
              }
              const obj = { level: str, message: joined, attributes: tmp };
              _Set(client[3])._INTERNAL_captureLog(obj);
              const obj4 = _Set(client[3]);
            }
          }
        }
    };
    return obj;
  }
  first = {};
};
