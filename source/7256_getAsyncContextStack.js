// Module ID: 7256
// Function ID: 58441
// Name: getAsyncContextStack
// Dependencies: [6, 7, 7257, 7243, 7254, 7262]
// Exports: getStackAsyncContextStrategy

// Module 7256 (getAsyncContextStack)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function getAsyncContextStack() {
  const mainCarrier = require(7254) /* getSentryCarrier */.getMainCarrier();
  const obj = require(7254) /* getSentryCarrier */;
  const sentryCarrier = require(7254) /* getSentryCarrier */.getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    const defaultCurrentScope = require(7262) /* getDefaultCurrentScope */.getDefaultCurrentScope();
    const obj3 = require(7262) /* getDefaultCurrentScope */;
    const prototype = tmp2.prototype;
    stack = new tmp2(defaultCurrentScope, require(7262) /* getDefaultCurrentScope */.getDefaultIsolationScope());
    const obj4 = require(7262) /* getDefaultCurrentScope */;
  }
  sentryCarrier.stack = stack;
  return stack;
}
function withScope(arg0) {
  return getAsyncContextStack().withScope(arg0);
}
function withSetScope(arg0, arg1) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  const obj = getAsyncContextStack();
  return obj.withScope(() => {
    obj.getStackTop().scope = closure_0;
    return callback(closure_0);
  });
}
function withIsolationScope(arg0) {
  let closure_0 = arg0;
  return getAsyncContextStack().withScope(() => callback(outer1_5().getIsolationScope()));
}
const tmp2 = (() => {
  class AsyncContextStack {
    constructor(arg0, arg1) {
      scope = arg0;
      scope2 = arg1;
      self = this;
      tmp3 = outer1_2(this, AsyncContextStack);
      if (!arg0) {
        tmp4 = AsyncContextStack;
        tmp5 = outer1_1;
        num = 2;
        Scope = AsyncContextStack(outer1_1[2]).Scope;
        prototype = Scope.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        scope = new Scope();
      }
      if (!scope2) {
        tmp8 = AsyncContextStack;
        tmp9 = outer1_1;
        num2 = 2;
        Scope2 = AsyncContextStack(outer1_1[2]).Scope;
        prototype2 = Scope2.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        scope2 = new Scope2();
      }
      obj = {};
      obj.scope = scope;
      items = [];
      items[0] = obj;
      self._stack = items;
      self._isolationScope = scope2;
      return;
    }
  }
  let obj = {
    key: "withScope",
    value: function withScope(arg0) {
      let self = this;
      self = this;
      const promise = arg0(this._pushScope());
      if (obj.isThenable(promise)) {
        let nextPromise = promise.then((arg0) => {
          self._popScope();
          return arg0;
        }, (arg0) => {
          self._popScope();
          throw arg0;
        });
      } else {
        self._popScope();
        nextPromise = promise;
      }
      return nextPromise;
    }
  };
  let items = [obj, , , , , , ];
  obj = {
    key: "getClient",
    value: function getClient() {
      return this.getStackTop().client;
    }
  };
  items[1] = obj;
  obj = {
    key: "getScope",
    value: function getScope() {
      return this.getStackTop().scope;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getIsolationScope",
    value: function getIsolationScope() {
      return this._isolationScope;
    }
  };
  items[4] = {
    key: "getStackTop",
    value: function getStackTop() {
      return this._stack[this._stack.length - 1];
    }
  };
  items[5] = {
    key: "_pushScope",
    value: function _pushScope() {
      const scope = this.getScope();
      const cloneResult = scope.clone();
      const _stack = this._stack;
      _stack.push({ client: this.getClient(), scope: cloneResult });
      return cloneResult;
    }
  };
  items[6] = {
    key: "_popScope",
    value: function _popScope() {
      let arr = !tmp;
      if (this._stack.length > 1) {
        const _stack = this._stack;
        arr = _stack.pop();
      }
      return arr;
    }
  };
  return _defineProperties(AsyncContextStack, items);
})();
let closure_4 = tmp2;

export const AsyncContextStack = tmp2;
export const getStackAsyncContextStrategy = function getStackAsyncContextStrategy() {
  return {
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope(arg0, arg1) {
      return outer1_8(arg1);
    },
    getCurrentScope() {
      return outer1_5().getScope();
    },
    getIsolationScope() {
      return outer1_5().getIsolationScope();
    }
  };
};
