// Module ID: 851
// Function ID: 9488
// Name: getBaseApiEndpoint
// Dependencies: []

// Module 851 (getBaseApiEndpoint)
function getBaseApiEndpoint(protocol) {
  let str = "";
  if (protocol.protocol) {
    const _HermesInternal = HermesInternal;
    str = "" + protocol.protocol + ":";
  }
  let str3 = "";
  if (protocol.port) {
    const _HermesInternal2 = HermesInternal;
    str3 = ":" + protocol.port;
  }
  let str5 = "";
  if (protocol.path) {
    const _HermesInternal3 = HermesInternal;
    str5 = "/" + protocol.path;
  }
  return "" + str + "//" + protocol.host + str3 + str5 + "/api/";
}
Object.defineProperty(arg5, Symbol.toStringTag, { value: "Module" });
arg5.getEnvelopeEndpointWithUrlEncodedAuth = function getEnvelopeEndpointWithUrlEncodedAuth(projectId, arg1, name) {
  let combined1 = arg1;
  if (!arg1) {
    const _HermesInternal = HermesInternal;
    const obj = { sentry_version: "7" };
    const combined = "" + getBaseApiEndpoint(projectId) + projectId.projectId + "/envelope/";
    if (projectId.publicKey) {
      obj.sentry_key = projectId.publicKey;
    }
    if (name) {
      const _HermesInternal2 = HermesInternal;
      obj.sentry_client = "" + name.name + "/" + name.version;
    }
    const _URLSearchParams = URLSearchParams;
    const str5 = new URLSearchParams(obj);
    const _HermesInternal3 = HermesInternal;
    combined1 = "" + combined + "?" + str5.toString();
  }
  return combined1;
};
arg5.getReportDialogEndpoint = function getReportDialogEndpoint(arg0, user) {
  const dsn = user(arg6[0]).makeDsn(arg0);
  if (dsn) {
    const _HermesInternal = HermesInternal;
    const combined = "" + getBaseApiEndpoint(dsn) + "embed/error-page/";
    const _HermesInternal2 = HermesInternal;
    let combined1 = "dsn=" + user(arg6[0]).dsnToString(dsn);
    let tmp10 = combined1;
    const keys = Object.keys();
    if (keys !== undefined) {
      tmp10 = combined1;
      while (keys[tmp] !== undefined) {
        let tmp19 = tmp13;
        if ("dsn" === tmp13) {
          continue;
        } else {
          combined1 = tmp12;
          if ("onClose" === tmp13) {
            continue;
          } else {
            if ("user" === tmp13) {
              user = user.user;
              combined1 = tmp12;
              let tmp15 = user;
              if (!user) {
                continue;
              } else {
                let sum = tmp12;
                if (user.name) {
                  let _encodeURIComponent3 = encodeURIComponent;
                  let _HermesInternal4 = HermesInternal;
                  sum = tmp12 + "&name=" + encodeURIComponent(user.name);
                }
                combined1 = sum;
                let tmp17 = user;
                if (!user.email) {
                  continue;
                } else {
                  let _encodeURIComponent4 = encodeURIComponent;
                  let _HermesInternal5 = HermesInternal;
                  combined1 = sum + "&email=" + encodeURIComponent(user.email);
                  let tmp18 = user;
                  // continue
                }
                continue;
              }
              continue;
            } else {
              let _encodeURIComponent = encodeURIComponent;
              let _encodeURIComponent2 = encodeURIComponent;
              let encodeURIComponentResult = encodeURIComponent(tmp13);
              let _HermesInternal3 = HermesInternal;
              combined1 = tmp12 + "&" + encodeURIComponentResult + "=" + encodeURIComponent(user[tmp13]);
              // continue
            }
            continue;
          }
          continue;
        }
        continue;
      }
    }
    const _HermesInternal6 = HermesInternal;
    return "" + combined + "?" + tmp10;
  } else {
    return "";
  }
  const obj = user(arg6[0]);
};
