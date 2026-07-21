// Module ID: 1063
// Function ID: 11362
// Name: _getGraphQLOperation
// Dependencies: []

// Module 1063 (_getGraphQLOperation)
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
    let first = tmp7;
    if (input.xhr[closure_0(undefined, closure_1[1]).SENTRY_XHR_DATA_KEY]) {
      first = require(dependencyMap[1]).getBodyString(tmp7.body)[0];
      const obj3 = require(dependencyMap[1]);
    }
    let first1 = first;
  } else {
    const fetchRequestArgBody = require(dependencyMap[1]).getFetchRequestArgBody(input.input);
    const obj = require(dependencyMap[1]);
    first1 = require(dependencyMap[1]).getBodyString(fetchRequestArgBody)[0];
    const obj2 = require(dependencyMap[1]);
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
const _module = require(dependencyMap[0]);

export { _getGraphQLOperation };
export { getGraphQLRequestPayload };
export { getRequestPayloadXhrOrFetch };
export const graphqlClientIntegration = _module.defineIntegration(function _graphqlClientIntegration(arg0) {
  const require = arg0;
  return {
    name: "GraphQLClient",
    setup(on) {
      function _updateSpanWithGraphQLData(on, arg1) {
        on.on("beforeOutgoingRequestSpan", (updateName) => {
          const tmp = arg1(closure_1[0]).spanToJSON(updateName).data || {};
          if ("http.client" === tmp[closure_0(undefined, closure_1[0]).SEMANTIC_ATTRIBUTE_SENTRY_OP]) {
            if (obj2.isString(tmp[closure_0(undefined, closure_1[0]).SEMANTIC_ATTRIBUTE_URL_FULL] || tmp.http.url)) {
              if (obj3.isString(tmp5)) {
                const result = arg1(closure_1[0]).stringMatchesSomePattern(tmp2, arg1.endpoints);
                const tmp16 = callback2(arg1);
                if (result) {
                  if (tmp16) {
                    const tmp18 = callback5(tmp16);
                    if (tmp18) {
                      const _HermesInternal = HermesInternal;
                      updateName.updateName("" + tmp5 + " " + tmp2 + " (" + callback(tmp18) + ")");
                      if (callback3(tmp18)) {
                        const attr = updateName.setAttribute("graphql.document", tmp18.query);
                      }
                      if (callback4(tmp18)) {
                        const attr1 = updateName.setAttribute("graphql.persisted_query.hash.sha256", tmp18.extensions.persistedQuery.sha256Hash);
                        const attr2 = updateName.setAttribute("graphql.persisted_query.version", tmp18.extensions.persistedQuery.version);
                      }
                    }
                  }
                }
                const obj4 = arg1(closure_1[0]);
              }
              const obj3 = arg1(closure_1[0]);
            }
            const obj2 = arg1(closure_1[0]);
          }
        });
      }(on, on);
      function _updateBreadcrumbWithGraphQLData(on, arg1) {
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
              const result = arg1(closure_1[0]).stringMatchesSomePattern(url, arg1.endpoints);
              const tmp9 = callback2(arg1);
              if (result) {
                if (data) {
                  if (tmp9) {
                    const tmp11 = callback5(tmp9);
                    if (!data.graphql) {
                      if (tmp11) {
                        data.graphql.operation = callback(tmp11);
                        if (callback3(tmp11)) {
                          data.graphql.document = tmp11.query;
                        }
                        if (callback4(tmp11)) {
                          data.graphql.persisted_query.hash.sha256 = tmp11.extensions.persistedQuery.sha256Hash;
                          data.graphql.persisted_query.version = tmp11.extensions.persistedQuery.version;
                        }
                      }
                    }
                  }
                }
              }
              const obj = arg1(closure_1[0]);
            }
          }
        });
      }(on, on);
    }
  };
});
export { parseGraphQLQuery };
