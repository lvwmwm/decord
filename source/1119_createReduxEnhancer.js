// Module ID: 1119
// Function ID: 12717
// Name: createReduxEnhancer
// Dependencies: [65, 794]
// Exports: createReduxEnhancer

// Module 1119 (createReduxEnhancer)
import _toConsumableArray from "_toConsumableArray";

Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
let obj = {
  attachReduxState: true,
  actionTransformer(arg0) {
    return arg0;
  },
  stateTransformer(arg0) {
    let tmp = arg0;
    if (!arg0) {
      tmp = null;
    }
    return tmp;
  }
};

export const createReduxEnhancer = function createReduxEnhancer(arg0) {
  let closure_0 = Object.assign({}, obj, arg0);
  return (arg0) => {
    let closure_0 = arg0;
    return (arg0, arg1) => {
      function sentryWrapReducer(arg0, arg1) {
        let closure_0 = arg0;
        return (arg0, arg1) => {
          const tmp = lib(arg0, arg1);
          let obj = lib(outer4_1[1]);
          const currentScope = obj.getCurrentScope();
          const actionTransformerResult = lib.actionTransformer(arg1);
          if (null != actionTransformerResult) {
            obj = { category: "redux.action", data: actionTransformerResult, type: "info" };
            lib(outer4_1[1]).addBreadcrumb(obj);
            const obj3 = lib(outer4_1[1]);
          }
          const stateTransformerResult = lib.stateTransformer(tmp);
          if (null != stateTransformerResult) {
            const client = lib(outer4_1[1]).getClient();
            let options;
            if (null != client) {
              options = client.getOptions();
            }
            let num;
            if (null != options) {
              num = options.normalizeDepth;
            }
            if (!num) {
              num = 3;
            }
            obj = {};
            const obj1 = { type: "redux", value: stateTransformerResult };
            obj.state = obj1;
            const obj5 = lib(outer4_1[1]);
            const result = lib(outer4_1[1]).addNonEnumerableProperty(obj, "__sentry_override_normalization_depth__", 3 + num);
            currentScope.setContext("state", obj);
            const obj9 = lib(outer4_1[1]);
          } else {
            currentScope.setContext("state", null);
          }
          const configureScopeWithState = lib.configureScopeWithState;
          if ("function" === typeof configureScopeWithState) {
            const result1 = configureScopeWithState(currentScope, tmp);
          }
          return tmp;
        };
      }
      if (lib.attachReduxState) {
        let obj = lib(outer2_1[1]);
        const globalScope = obj.getGlobalScope();
        globalScope.addEventProcessor((type, attachments) => {
          let tmp2 = tmp;
          if (undefined === type.type) {
            tmp2 = "redux" === type.contexts.state.state.type;
          }
          if (tmp2) {
            const items = [];
            attachments = attachments.attachments;
            let items1 = attachments;
            if (!attachments) {
              items1 = [];
            }
            const obj = { filename: "redux_state.json" };
            const _JSON = JSON;
            obj.data = JSON.stringify(type.contexts.state.state.value);
            const items2 = [obj];
            attachments.attachments = items.concat(outer3_2(items1), items2);
            const tmp5 = outer3_2;
            const tmp5Result = outer3_2(items1);
          }
        });
      }
      const tmp4 = sentryWrapReducer(sentryWrapReducer(arg0), arg1);
      obj = {
        apply(apply) {
          const items = [sentryWrapReducer(arg2[0])];
          apply.apply(arg1, items);
        }
      };
      const proxy = new Proxy(tmp4.replaceReducer, obj);
      tmp4.replaceReducer = proxy;
      return tmp4;
    };
  };
};
