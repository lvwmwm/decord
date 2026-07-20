// Module ID: 15818
// Function ID: 120954
// Name: isAnalyticsEndpoint
// Dependencies: []

// Module 15818 (isAnalyticsEndpoint)
function isAnalyticsEndpoint(pathname) {
  const uRL = new URL(pathname);
  return regex.test(uRL.pathname);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const AbortCodes = arg1(dependencyMap[2]).AbortCodes;
let closure_7 = [-0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004875348574975153, 3262742309352079600000000000000000000000000000000000000000000000000000000000000000000000];
importDefault(dependencyMap[3]).parse. = JSON.parse;
const idGenerator = new arg1(dependencyMap[4]).IdGenerator();
let closure_9 = /\/api(\/v\d+)?\/science/;
let obj = arg1(dependencyMap[6]);
obj = { -1269606814: "<string:4123168576>", -1845285747: "<string:1229937704>", defaultConfig: { migrationKilled: false }, variations: { [1]: { migrationKilled: true } } };
let closure_10 = obj.createApexExperiment(obj);
let closure_11 = null;
const subscription = importDefault(dependencyMap[7]).subscribe("LOGOUT", () => {
  let closure_11 = null;
});
const importDefaultResult = importDefault(dependencyMap[7]);
const result = arg1(dependencyMap[8]).setRejectWithMigratedError(function isRejectWithMigratedErrorEnabled() {
  if (null != closure_11) {
    let tmp2 = closure_11;
  } else {
    tmp2 = !hasLoadedExperiments.hasLoadedExperiments;
    if (!tmp2) {
      const obj = { location: "reject_with_error_migration" };
      const tmp4 = !config.getConfig(obj).migrationKilled;
      closure_11 = tmp4;
      tmp2 = tmp4;
    }
  }
  return tmp2;
});
const obj4 = arg1(dependencyMap[8]);
obj = {
  prepareRequest(promise) {
    const arg1 = promise;
    function maybeTrackRequest(status) {
      if (closure_2) {
        const obj = {};
        ({ url: obj.url, method: obj.method } = status);
        status = undefined;
        if (null != status) {
          status = status.status;
        }
        obj.status_code = status;
        const _Math = Math;
        const _performance = performance;
        obj.duration_ms = Math.round(performance.now() - callback);
        callback(maybeTrackRequest[19])(obj);
        closure_2 = false;
        const tmp3 = callback(maybeTrackRequest[19]);
      }
    }
    const _default = arg1(maybeTrackRequest[9]).default;
    const _default2 = arg1(maybeTrackRequest[10]).default;
    const _default3 = arg1(maybeTrackRequest[12]).default;
    const importDefault = performance.now();
    if ("/" === promise.url[0]) {
      obj.url = arg1(maybeTrackRequest[8]).getAPIBaseURL() + obj.url;
      let tmp2 = "Authorization" in obj.header;
      if (!tmp2) {
        tmp2 = "authorization" in obj.header;
      }
      if (!tmp2) {
        const result = obj.set("Authorization", _default.getToken());
      }
      const obj6 = arg1(maybeTrackRequest[8]);
      const result1 = arg1(maybeTrackRequest[15]).updateDynamicSuperProperties();
      const superPropertiesBase64 = _default4.getSuperPropertiesBase64();
      if (null != superPropertiesBase64) {
        const result2 = obj.set("X-Super-Properties", superPropertiesBase64);
      }
      const fingerprint = _default.getFingerprint();
      let tmp13 = null != fingerprint;
      if (tmp13) {
        tmp13 = "" !== fingerprint;
      }
      if (tmp13) {
        const result3 = obj.set("X-Fingerprint", fingerprint);
      }
      const installationForTracking = _default.getInstallationForTracking();
      let tmp17 = null != installationForTracking;
      if (tmp17) {
        tmp17 = "" !== installationForTracking;
      }
      if (tmp17) {
        const result4 = obj.set("X-Installation-ID", installationForTracking);
      }
      if (arg1(maybeTrackRequest[14]).isPlatformEmbedded) {
        let items = [];
        const tmp22 = arg1(maybeTrackRequest[16]);
        if (obj3.isAndroid()) {
          let LocalizationManager = arg1(maybeTrackRequest[17]).default;
        } else {
          LocalizationManager = tmp22.NativeModules.LocalizationManager;
        }
        if (null != LocalizationManager) {
          let Languages = LocalizationManager.getConstants().Languages;
          if (null == Languages) {
            Languages = [];
          }
          items = Languages;
        }
        const result5 = obj.set("Accept-Language", function populateQValues(items) {
          let closure_0 = 10;
          const reduced = items.reduce((arr) => {
            if (10 === closure_0) {
              arr.push(arg1);
            } else {
              const _HermesInternal = HermesInternal;
              arr.push("" + arg1 + ";q=0." + closure_0);
            }
            closure_0 = Math.max(closure_0 - 1, 1);
            return arr;
          }, []);
          return reduced.join(",");
        }(items));
        const obj3 = arg1(maybeTrackRequest[14]);
      }
      const result6 = obj.set("X-Discord-Locale", arg1(maybeTrackRequest[11]).default.locale);
      const tmp31 = importDefault(maybeTrackRequest[18])();
      if (null != tmp31) {
        const result7 = obj.set("X-Discord-Timezone", tmp31);
      }
      const debugOptionsHeaderValue = _default2.getDebugOptionsHeaderValue();
      let tmp35 = null != debugOptionsHeaderValue;
      if (tmp35) {
        tmp35 = "" !== debugOptionsHeaderValue;
      }
      if (tmp35) {
        const result8 = obj.set("X-Debug-Options", debugOptionsHeaderValue);
      }
      const routingKeyHeaderValue = _default2.getRoutingKeyHeaderValue();
      let tmp39 = null != routingKeyHeaderValue;
      if (tmp39) {
        tmp39 = "" !== routingKeyHeaderValue;
      }
      if (tmp39) {
        const result9 = obj.set("X-Routing-Key", routingKeyHeaderValue);
      }
      if (_default2.isTracingRequests) {
        const currentUser = _default3.getCurrentUser();
        let id;
        if (null != currentUser) {
          id = currentUser.id;
        }
        let str14 = "0";
        if (null != id) {
          str14 = id;
        }
        const generateResult = idGenerator.generate(str14);
        const result10 = obj.set("x-client-trace-id", generateResult);
        const _URL = URL;
        const uRL = new URL(obj.url);
        if (!isAnalyticsEndpoint(uRL.pathname)) {
          const _URLSearchParams = URLSearchParams;
          const str16 = new URLSearchParams();
          const _HermesInternal = HermesInternal;
          str16.append("query", "@http.x_client_trace_id:\"" + tmp46 + "\"");
          str16.append("showAllSpans", "true");
          const _HermesInternal2 = HermesInternal;
          const str24 = importDefault(maybeTrackRequest[5]).toURLSafe("traces?" + str16.toString(), "https://datadog.discord.tools/apm/");
          if (null != str24) {
            str24.toString();
          }
          const obj4 = importDefault(maybeTrackRequest[5]);
        }
        const tmp46 = generateResult;
      }
      const obj2 = arg1(maybeTrackRequest[15]);
    }
    const importAll = !isAnalyticsEndpoint(promise.url);
    const _default4 = arg1(maybeTrackRequest[13]).default;
    importAll(maybeTrackRequest[20]).report("Network", "Sending " + promise.method + " to " + promise.url);
    promise.on("response", (status) => {
      let method;
      let url;
      let text = null;
      if (null != status) {
        text = null;
        if (status.status >= 400) {
          text = status.text;
        }
      }
      let str = "";
      if (null != text) {
        const _HermesInternal = HermesInternal;
        str = "and body: " + text;
      }
      ({ method, url } = status);
      status = undefined;
      if (null != status) {
        status = status.status;
      }
      callback2(maybeTrackRequest[20]).report("Network", "Completed " + method + " to " + url + " with status: " + status + " " + str);
      maybeTrackRequest(status);
    });
    promise.on("error", (status, text) => {
      let method;
      let url;
      let obj = callback2(maybeTrackRequest[20]);
      ({ method, url } = status);
      status = undefined;
      if (null != status) {
        status = status.status;
      }
      text = undefined;
      if (null != text) {
        text = text.text;
      }
      obj.report("Network", "Failed " + method + " to " + url + " with status " + status + " and body: " + text);
      if (null != status) {
        if ("parse" in status) {
          if (status.parse) {
            let str = "[FILTERED]";
            if (closure_7.includes(status.url)) {
              const xhr = status.xhr;
              let substr;
              if (null != xhr) {
                const responseText = xhr.responseText;
                if (null != responseText) {
                  substr = responseText.slice(0, 1000);
                }
              }
              str = substr;
            }
            obj = { <string:944832516>: "public_key", backShouldLeaveGuild: "BLUETOOTH" };
            obj = {};
            ({ method: obj4.method, url: obj4.url } = status);
            obj.responseText = str;
            obj.status = status.status;
            obj.data = obj;
            callback(maybeTrackRequest[21]).addBreadcrumb(obj);
            const obj2 = callback(maybeTrackRequest[21]);
          }
        }
      }
      maybeTrackRequest(text);
    });
  },
  interceptResponse(statusCode) {
    const arg1 = statusCode;
    const importDefault = arg1;
    const importAll = arg2;
    if (400 === statusCode.statusCode) {
      const body = statusCode.body;
      if (null != body) {
        if (body.captcha_key) {
          const items = [arg1(dependencyMap[23])(dependencyMap[22], dependencyMap.paths), arg1(dependencyMap[23])(dependencyMap[24], dependencyMap.paths)];
          const allPromises = Promise.all(items);
          const nextPromise = Promise.all(items).then((arg0) => {
            const iter = arg0[Symbol.iterator]();
            let nextResult;
            let tmp3 = tmp2;
            if (iter !== undefined) {
              nextResult = iter.next();
            }
            let nextResult1;
            if (!tmp3) {
              tmp3 = tmp6;
              if (iter !== undefined) {
                nextResult1 = iter.next();
              }
            }
            if (!tmp3) {
              iter.return();
            }
            return nextResult.default.showCaptchaAsync(nextResult1.extractCaptchaPropsFromResponse(arg0.body));
          });
          Promise.all(items).then((arg0) => {
            const iter = arg0[Symbol.iterator]();
            let nextResult;
            let tmp3 = tmp2;
            if (iter !== undefined) {
              nextResult = iter.next();
            }
            let nextResult1;
            if (!tmp3) {
              tmp3 = tmp6;
              if (iter !== undefined) {
                nextResult1 = iter.next();
              }
            }
            if (!tmp3) {
              iter.return();
            }
            return nextResult.default.showCaptchaAsync(nextResult1.extractCaptchaPropsFromResponse(arg0.body));
          }).then((X-Captcha-Key) => {
            let captcha_rqtoken;
            let captcha_session_id;
            ({ captcha_rqtoken, captcha_session_id } = X_Captcha_Key);
            const obj = { X-Captcha-Key: X_Captcha_Key.captcha_key };
            if (null != captcha_rqtoken) {
              obj.X-Captcha-Rqtoken = captcha_rqtoken;
            }
            if (null != captcha_session_id) {
              obj.X-Captcha-Session-Id = captcha_session_id;
            }
            arg1(obj);
          }).catch(arg2);
          let flag = true;
          const nextPromise1 = Promise.all(items).then((arg0) => {
            const iter = arg0[Symbol.iterator]();
            let nextResult;
            let tmp3 = tmp2;
            if (iter !== undefined) {
              nextResult = iter.next();
            }
            let nextResult1;
            if (!tmp3) {
              tmp3 = tmp6;
              if (iter !== undefined) {
                nextResult1 = iter.next();
              }
            }
            if (!tmp3) {
              iter.return();
            }
            return nextResult.default.showCaptchaAsync(nextResult1.extractCaptchaPropsFromResponse(arg0.body));
          }).then((X-Captcha-Key) => {
            let captcha_rqtoken;
            let captcha_session_id;
            ({ captcha_rqtoken, captcha_session_id } = X_Captcha_Key);
            const obj = { X-Captcha-Key: X_Captcha_Key.captcha_key };
            if (null != captcha_rqtoken) {
              obj.X-Captcha-Rqtoken = captcha_rqtoken;
            }
            if (null != captcha_session_id) {
              obj.X-Captcha-Session-Id = captcha_session_id;
            }
            arg1(obj);
          });
        }
        return flag;
      }
    }
    if (401 === statusCode.statusCode) {
      const body2 = statusCode.body;
      let code;
      if (null != body2) {
        code = body2.code;
      }
      if (code === AbortCodes.MFA_REQUIRED) {
        const body3 = statusCode.body;
        if (null != body3) {
          if (body3.mfa) {
            const promise4 = arg1(dependencyMap[23])(dependencyMap[25], dependencyMap.paths);
            arg1(dependencyMap[23])(dependencyMap[25], dependencyMap.paths).then((openMFAModal) => {
              openMFAModal.openMFAModal(openMFAModal.body.mfa, arg1, arg2);
            }).catch(arg2);
            flag = true;
            const nextPromise2 = arg1(dependencyMap[23])(dependencyMap[25], dependencyMap.paths).then((openMFAModal) => {
              openMFAModal.openMFAModal(openMFAModal.body.mfa, arg1, arg2);
            });
          }
        }
      }
    }
    const body4 = statusCode.body;
    let code1;
    if (null != body4) {
      code1 = body4.code;
    }
    if (obj.isLimitedAccessErrorCode(statusCode.statusCode, code1)) {
      tmp6(tmp7[23])(tmp7[27], tmp7.paths).then((arg0) => {
        arg0.default();
      });
      flag = false;
      const promise3 = tmp6(tmp7[23])(tmp7[27], tmp7.paths);
    } else {
      const body5 = statusCode.body;
      let code2;
      if (null != body5) {
        code2 = body5.code;
      }
      if (tmp6Result.isLimitedAccessErrorCode(statusCode.statusCode, code2)) {
        arg1(dependencyMap[23])(dependencyMap[29], dependencyMap.paths).then((arg0) => {
          const body = arg0.body;
          let guild_id;
          if (null != body) {
            guild_id = body.guild_id;
          }
          arg0.default(guild_id);
        });
        flag = false;
        const promise2 = arg1(dependencyMap[23])(dependencyMap[29], dependencyMap.paths);
      } else {
        flag = 403 === statusCode.statusCode;
        if (flag) {
          const body6 = statusCode.body;
          let code3;
          if (null != body6) {
            code3 = body6.code;
          }
          flag = code3 === AbortCodes.RESTRICTED_HOURS_ACTIVE;
        }
        if (flag) {
          arg1(dependencyMap[23])(dependencyMap[30], dependencyMap.paths).then((openRestrictedHoursModal) => {
            const result = openRestrictedHoursModal.openRestrictedHoursModal();
          });
          flag = false;
          const promise = arg1(dependencyMap[23])(dependencyMap[30], dependencyMap.paths);
        }
      }
      const tmp6Result = tmp6(tmp7[28]);
    }
  }
};
arg1(dependencyMap[8]).setRequestPatch(obj);
const obj5 = arg1(dependencyMap[8]);
arg1(dependencyMap[8]).setAwaitOnline(() => {
  // CreateGeneratorClosureLongIndex (0x67)
  let closure_0 = callback(tmp);
  return function() {
    return callback(...arguments);
  };
}());
const obj7 = arg1(dependencyMap[8]);
const result1 = arg1(dependencyMap[32]).fileFinishedImporting("lib/superagentPatch.tsx");
