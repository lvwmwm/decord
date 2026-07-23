// Module ID: 1063
// Function ID: 11363
// Name: _getGraphQLOperation
// Dependencies: [794, 1009]

// Module 1063 (_getGraphQLOperation)
import registerSpanErrorInstrumentation from "registerSpanErrorInstrumentation";

function _getGraphQLOperation(operationName) {
  if (isPersistedRequest(operationName)) {
    const _HermesInternal2 = HermesInternal;
    return "persisted " + operationName.operationName;
  } else if (isStandardRequest(operationName)) {
    const tmp3 = parseGraphQLQuery(operationName.query);
    operationName = tmp3.operationName;
    if (undefined === operationName) {
      operationName = operationName.operationName;
    }
    const operationType = tmp3.operationType;
    const _HermesInternal = HermesInternal;
    if (operationName) {
      let combined = concat(operationType, " ", operationName);
    } else {
      combined = concat(operationType);
    }
    return combined;
  } else {
    return "unknown";
  }
}
function getRequestPayloadXhrOrFetch(input) {
  if ("xhr" in input) {
    const tmp7 = input.xhr[require(undefined, 1009) /* addClsInstrumentationHandler */.SENTRY_XHR_DATA_KEY];
    let first = tmp7;
    if (tmp7) {
      first = require(1009) /* addClsInstrumentationHandler */.getBodyString(tmp7.body)[0];
      const obj3 = require(1009) /* addClsInstrumentationHandler */;
    }
    let first1 = first;
  } else {
    const fetchRequestArgBody = require(1009) /* addClsInstrumentationHandler */.getFetchRequestArgBody(input.input);
    const obj = require(1009) /* addClsInstrumentationHandler */;
    first1 = require(1009) /* addClsInstrumentationHandler */.getBodyString(fetchRequestArgBody)[0];
    const obj2 = require(1009) /* addClsInstrumentationHandler */;
  }
  return first1;
}
function parseGraphQLQuery(query) {
  const match = query.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)(\w+)(?:\s*)[{(]/);
  const obj = {};
  if (match) {
    obj.operationType = match[1];
    obj.operationName = match[2];
    return obj;
  } else {
    const match1 = query.match(/^(?:\s*)(query|mutation|subscription)(?:\s*)[{(]/);
    if (match1) {
      obj.operationType = match1[1];
      obj.operationName = undefined;
      let tmp3 = obj;
    } else {
      obj.operationType = undefined;
      obj.operationName = undefined;
      tmp3 = obj;
    }
    return tmp3;
  }
}
function isObject(arg0) {
  let tmp = "object" === typeof arg0;
  if (tmp) {
    tmp = null !== arg0;
  }
  return tmp;
}
function isStandardRequest(parsed) {
  let tmp = isObject(parsed);
  if (tmp) {
    tmp = "string" === typeof parsed.query;
  }
  return tmp;
}
function isPersistedRequest(parsed) {
  let tmp = isObject(parsed);
  if (tmp) {
    tmp = "string" === typeof parsed.operationName;
  }
  if (tmp) {
    tmp = isObject(parsed.extensions);
  }
  if (tmp) {
    tmp = isObject(parsed.extensions.persistedQuery);
  }
  if (tmp) {
    tmp = "string" === typeof parsed.extensions.persistedQuery.sha256Hash;
  }
  if (tmp) {
    tmp = "number" === typeof parsed.extensions.persistedQuery.version;
  }
  return tmp;
}
function getGraphQLRequestPayload(arg0) {
  const parsed = JSON.parse(arg0);
  if (isStandardRequest(parsed)) {
    const tmp4 = parsed;
  }
  return tmp4;
}
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });

export { _getGraphQLOperation };
export { getGraphQLRequestPayload };
export { getRequestPayloadXhrOrFetch };
export const graphqlClientIntegration = registerSpanErrorInstrumentation.defineIntegration(function _graphqlClientIntegration(arg0) {
  let closure_0 = arg0;
  return {
    name: "GraphQLClient",
    setup(on) {
      (function _updateSpanWithGraphQLData(on, closure_0) {
        on.on("beforeOutgoingRequestSpan", (updateName) => {
          const tmp = lib(outer3_1[0]).spanToJSON(updateName).data || {};
          if ("http.client" === tmp[lib(undefined, outer3_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_OP]) {
            const tmp2 = tmp[lib(undefined, outer3_1[0]).SEMANTIC_ATTRIBUTE_URL_FULL] || tmp["http.url"];
            const tmp5 = tmp[lib(undefined, outer3_1[0]).SEMANTIC_ATTRIBUTE_HTTP_REQUEST_METHOD] || tmp["http.method"];
            if (obj2.isString(tmp2)) {
              if (obj3.isString(tmp5)) {
                const result = lib(outer3_1[0]).stringMatchesSomePattern(tmp2, lib.endpoints);
                const tmp16 = outer3_3(arg1);
                if (result) {
                  if (tmp16) {
                    const tmp18 = outer3_8(tmp16);
                    if (tmp18) {
                      const _HermesInternal = HermesInternal;
                      updateName.updateName("" + tmp5 + " " + tmp2 + " (" + outer3_2(tmp18) + ")");
                      if (outer3_6(tmp18)) {
                        const attr = updateName.setAttribute("graphql.document", tmp18.query);
                      }
                      if (outer3_7(tmp18)) {
                        const attr1 = updateName.setAttribute("graphql.persisted_query.hash.sha256", tmp18.extensions.persistedQuery.sha256Hash);
                        const attr2 = updateName.setAttribute("graphql.persisted_query.version", tmp18.extensions.persistedQuery.version);
                      }
                    }
                  }
                }
                const obj4 = lib(outer3_1[0]);
              }
              obj3 = lib(outer3_1[0]);
            }
            obj2 = lib(outer3_1[0]);
          }
        });
      })(on, closure_0);
      (function _updateBreadcrumbWithGraphQLData(on, closure_0) {
        on.on("beforeOutgoingRequestBreadcrumb", (type) => {
          let category;
          let data;
          ({ category, data } = type);
          if ("http" === type.type) {
            if ("fetch" === category) {
              let url;
              if (null != data) {
                url = data.url;
              }
              const result = lib(outer3_1[0]).stringMatchesSomePattern(url, lib.endpoints);
              const tmp9 = outer3_3(arg1);
              if (result) {
                if (data) {
                  if (tmp9) {
                    const tmp11 = outer3_8(tmp9);
                    if (!data.graphql) {
                      if (tmp11) {
                        data["graphql.operation"] = outer3_2(tmp11);
                        if (outer3_6(tmp11)) {
                          data["graphql.document"] = tmp11.query;
                        }
                        if (outer3_7(tmp11)) {
                          data["graphql.persisted_query.hash.sha256"] = tmp11.extensions.persistedQuery.sha256Hash;
                          data["graphql.persisted_query.version"] = tmp11.extensions.persistedQuery.version;
                        }
                      }
                    }
                  }
                }
              }
              const obj = lib(outer3_1[0]);
            }
          }
        });
      })(on, closure_0);
    }
  };
});
export { parseGraphQLQuery };
