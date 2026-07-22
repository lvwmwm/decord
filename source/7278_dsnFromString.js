// Module ID: 7278
// Function ID: 58653
// Name: dsnFromString
// Dependencies: []
// Exports: dsnToString, makeDsn

// Module 7278 (dsnFromString)
function dsnFromString(arg0) {
  let tmp6;
  let tmp7;
  const require = arg0;
  const match = regex.exec(arg0);
  if (match) {
    const tmp5 = callback(match.slice(1), 6);
    let str = "";
    let str2 = "";
    [tmp6, tmp7] = tmp5;
    if (undefined !== tmp5[2]) {
      str2 = tmp8;
    }
    let tmp10 = str;
    if (undefined !== tmp5[3]) {
      tmp10 = tmp9;
    }
    let tmp12 = str;
    if (undefined !== tmp5[4]) {
      tmp12 = tmp11;
    }
    let str3 = str;
    if (undefined !== tmp5[5]) {
      str3 = tmp13;
    }
    const parts = str3.split("/");
    let str5 = str3;
    if (parts.length > 1) {
      const substr = parts.slice(0, -1);
      str = substr.join("/");
      str5 = parts.pop();
    }
    let first = str5;
    if (str5) {
      const match1 = str5.match(/^\d+/);
      first = str5;
      if (match1) {
        first = match1[0];
      }
    }
    let obj = { host: tmp10, pass: str2, path: str, projectId: first, port: tmp12, protocol: tmp6, publicKey: tmp7 };
    return dsnFromComponents(obj);
  } else {
    obj = require(dependencyMap[1]);
    obj.consoleSandbox(() => {
      console.error("Invalid Sentry Dsn: " + arg0);
    });
  }
}
function dsnFromComponents(protocol) {
  return { protocol: protocol.protocol, publicKey: tmp, pass: tmp2, host: protocol.host, port: tmp3, path: tmp4, projectId: protocol.projectId };
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+)?)?@)([\w.-]+)(?::(\d+))?\/(.+)/;

export { dsnFromString };
export const dsnToString = function dsnToString(arg0) {
  let host;
  let pass;
  let path;
  let port;
  let projectId;
  let protocol;
  let publicKey;
  ({ host, path, pass, port, projectId, protocol, publicKey } = arg0);
  let str = "";
  if (tmp) {
    str = "";
    if (pass) {
      const _HermesInternal = HermesInternal;
      str = ":" + pass;
    }
  }
  let str3 = "";
  if (port) {
    const _HermesInternal2 = HermesInternal;
    str3 = ":" + port;
  }
  let combined = path;
  if (path) {
    const _HermesInternal3 = HermesInternal;
    combined = "" + path + "/";
  }
  return "" + protocol + "://" + publicKey + str + "@" + host + str3 + "/" + combined + projectId;
};
export const makeDsn = function makeDsn(arg0) {
  if ("string" === typeof arg0) {
    let tmp2 = dsnFromString(arg0);
  } else {
    tmp2 = dsnFromComponents(arg0);
  }
  if (tmp2) {
    if (function validateDsn(arg0) {
      let port;
      let projectId;
      let protocol;
      if (arg0(closure_1[2]).DEBUG_BUILD) {
        ({ port, projectId, protocol } = arg0);
        const items = [];
        const found = items.find((arg0) => {
          let flag = !arg0[arg0];
          if (flag) {
            const logger = arg0(closure_1[1]).logger;
            const _HermesInternal = HermesInternal;
            logger.error("Invalid Sentry Dsn: " + arg0 + " missing");
            flag = true;
          }
          return flag;
        });
        if (found) {
          return !found;
        } else {
          if (!projectId.match(/^\d+$/)) {
            const logger2 = arg0(closure_1[1]).logger;
            const _HermesInternal = HermesInternal;
            logger2.error("Invalid Sentry Dsn: Invalid projectId " + projectId);
          }
          let tmp6 = "http" === protocol;
          if (!tmp6) {
            tmp6 = "https" === protocol;
          }
          if (tmp6) {
            let num3 = port;
            if (port) {
              const _isNaN = isNaN;
              const _parseInt = parseInt;
              num3 = isNaN(parseInt(port, 10));
            }
            if (num3) {
              const logger = arg0(closure_1[1]).logger;
              const _HermesInternal3 = HermesInternal;
              logger.error("Invalid Sentry Dsn: Invalid port " + port);
              num3 = 1;
            }
            let num2 = num3;
          } else {
            num2 = 1;
            const logger3 = arg0(closure_1[1]).logger;
            const _HermesInternal2 = HermesInternal;
            logger3.error("Invalid Sentry Dsn: Invalid protocol " + protocol);
          }
        }
      } else {
        return true;
      }
    }(tmp2)) {
      return tmp2;
    }
  }
};
