// Module ID: 1119
// Function ID: 12712
// Name: createReduxEnhancer
// Dependencies: [880148480, 889192452]
// Exports: createReduxEnhancer

// Module 1119 (createReduxEnhancer)
let closure_2 = require(dependencyMap[0]);
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const obj = {
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
      function sentryWrapReducer(arg0) {
        const sentryWrapReducer = arg0;
        return (self) => {
          const tmp = self(self, arg1);
          let obj = self(closure_1[1]);
          const currentScope = obj.getCurrentScope();
          const actionTransformerResult = self.actionTransformer(arg1);
          if (null != actionTransformerResult) {
            obj = { data: actionTransformerResult };
            self(closure_1[1]).addBreadcrumb(obj);
            const obj3 = self(closure_1[1]);
          }
          const stateTransformerResult = self.stateTransformer(tmp);
          if (null != stateTransformerResult) {
            const client = self(closure_1[1]).getClient();
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
            const obj5 = self(closure_1[1]);
            const result = self(closure_1[1]).addNonEnumerableProperty(obj, "__sentry_override_normalization_depth__", 3 + num);
            currentScope.setContext("state", obj);
            const obj9 = self(closure_1[1]);
          } else {
            currentScope.setContext("state", null);
          }
          const configureScopeWithState = self.configureScopeWithState;
          if ("function" === typeof configureScopeWithState) {
            const result1 = configureScopeWithState(currentScope, tmp);
          }
          return tmp;
        };
      }
      arg0 = sentryWrapReducer;
      if (arg0.attachReduxState) {
        let obj = arg0(closure_1[1]);
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
            attachments.attachments = items.concat(closure_2(items1), items2);
            const tmp5 = closure_2;
            const tmp5Result = closure_2(items1);
          }
        });
      }
      const tmp4 = arg0(sentryWrapReducer(arg0), arg1);
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
