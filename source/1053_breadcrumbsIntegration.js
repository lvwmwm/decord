// Module ID: 1053
// Function ID: 11277
// Name: breadcrumbsIntegration
// Dependencies: []

// Module 1053 (breadcrumbsIntegration)
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const _module = require(dependencyMap[0]);

export const breadcrumbsIntegration = _module.defineIntegration(function _breadcrumbsIntegration() {
  if (arguments.length > 0) {
    if (undefined !== arguments[0]) {
      const first = arguments[0];
    }
    const _Object = Object;
    let closure_0 = Object.assign({}, {});
    const obj = {
      name: "Breadcrumbs",
      setup(on) {
          if (lib.console) {
            const result = lib(closure_1[0]).addConsoleInstrumentationHandler(function _getConsoleBreadcrumbHandler(on) {
              return function _consoleBreadcrumb(args) {
                let obj = args(closure_1[0]);
                if (obj.getClient() === args) {
                  obj = { category: "console" };
                  obj = { arguments: args.args, logger: "console" };
                  obj.data = obj;
                  obj.level = args(closure_1[0]).severityLevelFromString(args.level);
                  const obj6 = args(closure_1[0]);
                  obj.message = args(closure_1[0]).safeJoin(args.args, " ");
                  if ("assert" === args.level) {
                    if (false === args.args[0]) {
                      args = args.args;
                      const obj8 = args(closure_1[0]);
                      const _HermesInternal = HermesInternal;
                      obj.message = "Assertion failed: " + args(closure_1[0]).safeJoin(args.slice(1), " ") || "console.assert";
                      const args1 = args.args;
                      obj.data.arguments = args1.slice(1);
                      const tmp = args(closure_1[0]).safeJoin(args.slice(1), " ") || "console.assert";
                    }
                  }
                  let obj1 = args(closure_1[0]);
                  obj1 = {};
                  ({ args: obj3.input, level: obj3.level } = args);
                  obj1.addBreadcrumb(obj, obj1);
                  const obj7 = args(closure_1[0]);
                }
              };
            }(on));
            const obj = lib(closure_1[0]);
          }
          if (lib.dom) {
            const result1 = lib(closure_1[1]).addClickKeypressInstrumentationHandler(function _getDomBreadcrumbHandler(on, dom) {
              return function _innerDomBreadcrumb(event, self) {
                let obj = event(self[0]);
                if (obj.getClient() === event) {
                  let serializeAttribute;
                  if ("object" === typeof self) {
                    serializeAttribute = self.serializeAttribute;
                  }
                  let tmp3 = serializeAttribute;
                  let maxStringLength;
                  if ("object" === typeof self) {
                    if ("number" === typeof self.maxStringLength) {
                      maxStringLength = self.maxStringLength;
                    }
                  }
                  let num = maxStringLength;
                  if (maxStringLength) {
                    maxStringLength = num > 1024;
                  }
                  if (maxStringLength) {
                    if (event(self[2]).DEBUG_BUILD) {
                      const debug = event(self[0]).debug;
                      const _HermesInternal = HermesInternal;
                      debug.warn("`dom.maxStringLength` cannot exceed 1024, but a value of " + num + " was configured. Sentry will use 1024 instead.");
                    }
                    num = 1024;
                  }
                  if ("string" === typeof tmp3) {
                    const items = [tmp3];
                    tmp3 = items;
                  }
                  event = event.event;
                  let target = !tmp20;
                  if (!!event) {
                    target = event.target;
                  }
                  const tmp22 = target ? event.target : event;
                  let obj1 = event(self[0]);
                  obj = { keyAttrs: tmp3, maxStringLength: num };
                  const htmlTreeAsStringResult = obj1.htmlTreeAsString(tmp22, obj);
                  const componentName = event(self[0]).getComponentName(tmp22);
                  while (true) {
                    let tmp26 = htmlTreeAsStringResult;
                    if (0 === htmlTreeAsStringResult.length) {
                      break;
                    } else {
                      obj = {};
                      let tmp33 = event;
                      let tmp34 = globalThis;
                      let _HermesInternal2 = HermesInternal;
                      let str6 = "ui.";
                      obj.category = "ui." + event.name;
                      obj.message = htmlTreeAsStringResult;
                      let tmp35 = obj;
                      let tmp36 = componentName;
                      if (componentName) {
                        let tmp27 = obj;
                        obj1 = { ui.component_name: componentName };
                        tmp35.data = obj1;
                      }
                      let tmp28 = event;
                      let tmp29 = self;
                      let obj6 = event(self[0]);
                      let tmp30 = obj;
                      let obj2 = {};
                      ({ event: obj7.event, name: obj7.name, global: obj7.global } = event);
                      let addBreadcrumbResult = obj6.addBreadcrumb(tmp35, obj2);
                      // break
                    }
                    break;
                  }
                  const obj4 = event(self[0]);
                }
              };
            }(on, lib.dom));
            const obj2 = lib(closure_1[1]);
          }
          if (lib.xhr) {
            const result2 = lib(closure_1[1]).addXhrInstrumentationHandler(function _getXhrBreadcrumbHandler(on) {
              return function _xhrBreadcrumb(xhr) {
                let endTimestamp;
                let startTimestamp;
                let obj = xhr(closure_1[0]);
                if (obj.getClient() === xhr) {
                  ({ startTimestamp, endTimestamp } = xhr);
                  if (startTimestamp) {
                    if (endTimestamp) {
                      if (tmp8) {
                        const status_code = tmp8.status_code;
                        obj = {};
                        ({ method: obj2.method, url: obj2.url } = tmp8);
                        obj.status_code = status_code;
                        obj = { xhr: xhr.xhr, input: tmp8.body, startTimestamp, endTimestamp };
                        const obj1 = { "Bool(true)": null, "Bool(true)": null, "Bool(true)": null, data: obj, level: xhr(closure_1[0]).getBreadcrumbLogLevelFromHttpStatusCode(status_code) };
                        xhr.emit("beforeOutgoingRequestBreadcrumb", obj1, obj);
                        const obj5 = xhr(closure_1[0]);
                        xhr(closure_1[0]).addBreadcrumb(obj1, obj);
                        const obj6 = xhr(closure_1[0]);
                      }
                    }
                  }
                }
              };
            }(on));
            const obj3 = lib(closure_1[1]);
          }
          if (lib.fetch) {
            const result3 = lib(closure_1[0]).addFetchInstrumentationHandler(function _getFetchBreadcrumbHandler(on) {
              return function _fetchBreadcrumb(fetchData) {
                let endTimestamp;
                let startTimestamp;
                let obj = fetchData(closure_1[0]);
                if (obj.getClient() === fetchData) {
                  ({ startTimestamp, endTimestamp } = fetchData);
                  if (endTimestamp) {
                    if (!str.match(/sentry_key/)) {
                      const method = fetchData.fetchData.method;
                      const url = fetchData.fetchData.url;
                      if (fetchData.error) {
                        obj = {};
                        ({ error: obj7.data, args: obj7.input } = fetchData);
                        obj.startTimestamp = startTimestamp;
                        obj.endTimestamp = endTimestamp;
                        obj = { data: fetchData.fetchData };
                        fetchData.emit("beforeOutgoingRequestBreadcrumb", obj, obj);
                        fetchData(closure_1[0]).addBreadcrumb(obj, obj);
                        const obj9 = fetchData(closure_1[0]);
                      } else {
                        const response = fetchData.response;
                        const obj1 = {};
                        let status;
                        if (null != response) {
                          status = response.status;
                        }
                        obj1.status_code = status;
                        const merged = Object.assign({}, fetchData.fetchData, obj1);
                        const request_body_size = fetchData.fetchData.request_body_size;
                        const response_body_size = fetchData.fetchData.response_body_size;
                        if (null != response) {
                          status = response.status;
                        }
                        const obj2 = { input: fetchData.args, response, startTimestamp, endTimestamp };
                        const obj3 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, data: merged, level: fetchData(closure_1[0]).getBreadcrumbLogLevelFromHttpStatusCode(merged.status_code) };
                        fetchData.emit("beforeOutgoingRequestBreadcrumb", obj3, obj2);
                        const obj5 = fetchData(closure_1[0]);
                        fetchData(closure_1[0]).addBreadcrumb(obj3, obj2);
                        const obj6 = fetchData(closure_1[0]);
                      }
                    }
                    const str = fetchData.fetchData.url;
                  }
                }
              };
            }(on));
            const obj4 = lib(closure_1[0]);
          }
          if (lib.history) {
            const result4 = lib(closure_1[1]).addHistoryInstrumentationHandler(function _getHistoryBreadcrumbHandler(on) {
              return function _historyBreadcrumb(arg0) {
                let from;
                let to;
                let obj = arg0(closure_1[0]);
                if (obj.getClient() === arg0) {
                  ({ from, to } = arg0);
                  const url2 = arg0(closure_1[0]).parseUrl(arg0(closure_1[3]).WINDOW.location.href);
                  let parseUrlResult;
                  if (from) {
                    parseUrlResult = arg0(closure_1[0]).parseUrl(from);
                    const obj2 = arg0(closure_1[0]);
                  }
                  const obj7 = arg0(closure_1[0]);
                  const url = arg0(closure_1[0]).parseUrl(to);
                  if (!tmp7) {
                    parseUrlResult = url2;
                  }
                  if (tmp8) {
                    to = url.relative;
                  }
                  if (tmp9) {
                    from = parseUrlResult.relative;
                  }
                  const obj3 = arg0(closure_1[0]);
                  const tmp7 = null != parseUrlResult && parseUrlResult.path;
                  const tmp8 = url2.protocol === url.protocol && url2.host === url.host;
                  const tmp9 = url2.protocol === parseUrlResult.protocol && url2.host === parseUrlResult.host;
                  obj = { category: "navigation" };
                  obj = { from, to };
                  obj.data = obj;
                  arg0(closure_1[0]).addBreadcrumb(obj);
                  const obj4 = arg0(closure_1[0]);
                }
              };
            }(on));
            const obj5 = lib(closure_1[1]);
          }
          if (lib.sentry) {
            on.on("beforeSendEvent", function _getSentryBreadcrumbHandler(on) {
              return function addSentryBreadcrumb(type) {
                let obj = type(closure_1[0]);
                if (obj.getClient() === type) {
                  obj = {};
                  let str = "event";
                  if ("transaction" === type.type) {
                    str = "transaction";
                  }
                  obj.category = `sentry.${str}`;
                  ({ event_id: obj5.event_id, level: obj5.level } = type);
                  const obj4 = type(closure_1[0]);
                  obj.message = type(closure_1[0]).getEventDescription(type);
                  obj = { event: type };
                  obj4.addBreadcrumb(obj, obj);
                  const obj2 = type(closure_1[0]);
                }
              };
            }(on));
          }
        }
    };
    return obj;
  }
});
