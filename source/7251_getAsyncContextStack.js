// Module ID: 7251
// Function ID: 58378
// Name: getAsyncContextStack
// Dependencies: []
// Exports: getStackAsyncContextStrategy

// Module 7251 (getAsyncContextStack)
function getAsyncContextStack() {
  const mainCarrier = require(dependencyMap[4]).getMainCarrier();
  const obj = require(dependencyMap[4]);
  const sentryCarrier = require(dependencyMap[4]).getSentryCarrier(mainCarrier);
  let stack = sentryCarrier.stack;
  if (!stack) {
    const defaultCurrentScope = require(dependencyMap[5]).getDefaultCurrentScope();
    const obj3 = require(dependencyMap[5]);
    const prototype = tmp2.prototype;
    stack = new tmp2(defaultCurrentScope, require(dependencyMap[5]).getDefaultIsolationScope());
    const obj4 = require(dependencyMap[5]);
  }
  sentryCarrier.stack = stack;
  return stack;
}
function withScope(arg0) {
  return getAsyncContextStack().withScope(arg0);
}
function withSetScope(arg0, arg1) {
  const require = arg0;
  const dependencyMap = arg1;
  const obj = getAsyncContextStack();
  let closure_2 = obj;
  return obj.withScope(() => {
    obj.getStackTop().scope = arg0;
    return arg1(arg0);
  });
}
function withIsolationScope(arg0) {
  const require = arg0;
  return getAsyncContextStack().withScope(() => arg0(callback().getIsolationScope()));
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
const tmp2 = () => {
  class AsyncContextStack {
    constructor(arg0, arg1) {
      scope = arg0;
      scope2 = arg1;
      self = this;
      tmp3 = closure_2(this, AsyncContextStack);
      if (!arg0) {
        tmp4 = AsyncContextStack;
        tmp5 = closure_1;
        num = 2;
        Scope = AsyncContextStack(closure_1[2]).Scope;
        prototype = Scope.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        scope = new Scope();
      }
      if (!scope2) {
        tmp8 = AsyncContextStack;
        tmp9 = closure_1;
        num2 = 2;
        Scope2 = AsyncContextStack(closure_1[2]).Scope;
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
  const require = AsyncContextStack;
  let obj = {
    key: "withScope",
    value: function withScope(arg0) {
      const self = this;
      const AsyncContextStack = this;
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
  const items = [obj, , , , , , ];
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
      const tmp = this._stack.length <= 1;
      let arr = !tmp;
      if (!tmp) {
        const _stack = this._stack;
        arr = _stack.pop();
      }
      return arr;
    }
  };
  return callback(AsyncContextStack, items);
}();

export const AsyncContextStack = tmp2;
export const getStackAsyncContextStrategy = function getStackAsyncContextStrategy() {
  return {
    withIsolationScope,
    withScope,
    withSetScope,
    withSetIsolationScope(arg0, arg1) {
      return callback2(arg1);
    },
    getCurrentScope() {
      return callback().getScope();
    },
    getIsolationScope() {
      return callback().getIsolationScope();
    }
  };
};
