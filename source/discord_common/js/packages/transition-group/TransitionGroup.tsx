// Module ID: 10364
// Function ID: 79968
// Name: _toPropertyKey
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 10365, 2]

// Module 10364 (_toPropertyKey)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import getChildMapping from "getChildMapping";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";

const require = arg1;
function _toPropertyKey(arg0) {
  let StringResult = arg0;
  if ("object" === typeof arg0) {
    StringResult = arg0;
    if (arg0) {
      const _Symbol = Symbol;
      if (undefined !== arg0[Symbol.toPrimitive]) {
        const callResult = obj.call(arg0, "string");
        StringResult = callResult;
        if ("object" === typeof callResult) {
          const _TypeError = TypeError;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(arg0);
      }
    }
  }
  let text = StringResult;
  if ("symbol" !== typeof StringResult) {
    text = `${tmp}`;
  }
  return text;
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let tmp3 = ((Component) => {
  class TransitionGroup {
    constructor(arg0) {
      self = this;
      tmp = outer1_3(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_6(apply);
      tmp2 = outer1_5;
      if (outer1_10()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, items, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result._keyChildMapping = {};
      tmp2Result.addChildRef = (arg0, arg1) => {
        tmp2Result._keyChildMapping[arg0] = arg1;
      };
      obj = {};
      obj3 = TransitionGroup(outer1_1[7]);
      obj.children = obj3.getChildMapping(Component.children);
      obj.firstRender = true;
      tmp2Result.state = obj;
      set = new Set();
      tmp2Result._currentlyTransitioningKeys = set;
      tmp2Result._keysToEnter = [];
      tmp2Result._keysToLeave = [];
      tmp2Result._isMounted = false;
      return tmp2Result;
    }
  }
  callback2(TransitionGroup, Component);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      this._isMounted = true;
      const children = this.state.children;
      if (this.props.transitionAppear) {
        for (const key10008 in children) {
          let tmp3 = key10008;
          if (!children[key10008]) {
            continue;
          } else {
            let performAppearResult = self.performAppear(key10008);
            continue;
          }
          continue;
        }
      }
    }
  };
  let items = [obj, , , , , , , , , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      this._isMounted = false;
      this._keyChildMapping = {};
      this.state.children = {};
    }
  };
  items[1] = obj;
  obj = {
    key: "componentDidUpdate",
    value(children, children2) {
      const self = this;
      if (children.children === this.props.children) {
        if (self._keysToEnter.length > 0) {
          const _keysToEnter = self._keysToEnter;
          self._keysToEnter = [];
          const item = _keysToEnter.forEach(self.performEnter, self);
        }
        if (self._keysToLeave.length > 0) {
          const _keysToLeave = self._keysToLeave;
          self._keysToLeave = [];
          const item1 = _keysToLeave.forEach(self.performLeave, self);
        }
      }
      let obj = TransitionGroup(outer1_1[7]);
      const childMapping = obj.getChildMapping(self.props.children);
      children = children2.children;
      if (self.props.transitionEnter) {
        self._enqueueTransitions(childMapping, children, self._keysToEnter);
      } else if (self._keysToEnter.length > 0) {
        self._keysToEnter = [];
      }
      const _enqueueTransitions = self._enqueueTransitions;
      if (self.props.transitionLeave) {
        _enqueueTransitions(children, childMapping, self._keysToLeave);
      } else {
        const items = [];
        _enqueueTransitions(children, childMapping, items);
        let num3 = 0;
        const obj2 = TransitionGroup(outer1_1[7]);
        if (0 < items.length) {
          do {
            let tmp9 = items[num3];
            delete tmp[tmp2];
            num3 = num3 + 1;
          } while (num3 < length);
        }
        if (self._isMounted) {
          obj = { children: mergeChildMappingsResult };
          self.setState(obj);
        }
        if (self._keysToLeave.length > 0) {
          self._keysToLeave = [];
        }
        mergeChildMappingsResult = TransitionGroup(outer1_1[7]).mergeChildMappings(children, childMapping);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_enqueueTransitions",
    value(obj, arg1, arr) {
      for (const key10006 in arg0) {
        let tmp5 = key10006;
        let hasOwnPropertyResult = arg1;
        if (arg1) {
          hasOwnPropertyResult = arg1.hasOwnProperty(key10006);
        }
        let hasItem = !arg0[key10006];
        if (!hasItem) {
          hasItem = hasOwnPropertyResult;
        }
        if (!hasItem) {
          let _currentlyTransitioningKeys = tmp._currentlyTransitioningKeys;
          hasItem = _currentlyTransitioningKeys.has(key10006);
        }
        if (hasItem) {
          continue;
        } else {
          arr = arg2.push(key10006);
          continue;
        }
        continue;
      }
    }
  };
  items[4] = {
    key: "_perform",
    value(arg0, arg1, arg2) {
      let flag = arg3;
      let self = this;
      self = this;
      let closure_1 = arg0;
      let _objectWithoutProperties = arg2;
      if (arg3 === undefined) {
        flag = false;
      }
      const _currentlyTransitioningKeys = self._currentlyTransitioningKeys;
      _currentlyTransitioningKeys.add(arg0);
      function callback() {
        return self._handleDonePerform(closure_1, _objectWithoutProperties, flag);
      }
      if (null != self._keyChildMapping[arg0]) {
        if (null != tmp2[arg1]) {
          tmp2[arg1](callback);
        }
      }
      callback();
    }
  };
  items[5] = {
    key: "_handleDonePerform",
    value(arg0, arg1) {
      let flag = arg2;
      const self = this;
      let closure_0 = arg0;
      if (arg2 === undefined) {
        flag = false;
      }
      if (tmp2) {
        tmp[arg1]();
      }
      const _currentlyTransitioningKeys = self._currentlyTransitioningKeys;
      _currentlyTransitioningKeys.delete(arg0);
      const childMapping = TransitionGroup(outer1_1[7]).getChildMapping(self.props.children);
      if (flag) {
        if (null != childMapping) {
          if (childMapping.hasOwnProperty(arg0)) {
            self.performEnter(arg0);
          }
        }
        self.setState((children) => {
          const items = [closure_0];
          return { children: outer2_2(children.children, items.map(outer2_9)) };
        });
      } else {
        if (!tmp5) {
          self.performLeave(arg0);
        }
        tmp5 = null != childMapping && childMapping.hasOwnProperty(arg0);
      }
    }
  };
  items[6] = {
    key: "performAppear",
    value(arg0) {
      this._perform(arg0, "componentWillAppear", "componentDidAppear");
    }
  };
  items[7] = {
    key: "performEnter",
    value(arg0) {
      this._perform(arg0, "componentWillEnter", "componentDidEnter");
    }
  };
  items[8] = {
    key: "performLeave",
    value(arg0) {
      this._perform(arg0, "componentWillLeave", "componentDidLeave", true);
    }
  };
  items[9] = {
    key: "render",
    value() {
      const self = this;
      const props = this.props;
      const childFactory = props.childFactory;
      const children = this.state.children;
      const items = [];
      for (const key10011 in children) {
        let tmp4 = key10011;
        let tmpResult = tmp(key10011);
        continue;
      }
      let obj = {};
      const merged = Object.assign(this.props);
      const keys = Object.keys(self.defaultProps);
      const item = keys.forEach((arg0) => {
        delete tmp2[tmp];
        return arg0;
      });
      return <props.component>{items}</props.component>;
    }
  };
  const items1 = [
    {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(children) {
        let firstRender;
        ({ children, firstRender } = arg1);
        let obj = TransitionGroup(outer1_1[7]);
        const childMapping = obj.getChildMapping(children.children);
        obj = {};
        let mergeChildMappingsResult = childMapping;
        if (!firstRender) {
          mergeChildMappingsResult = TransitionGroup(outer1_1[7]).mergeChildMappings(children, childMapping);
          const obj3 = TransitionGroup(outer1_1[7]);
        }
        obj.children = mergeChildMappingsResult;
        obj.firstRender = false;
        return obj;
      }
    }
  ];
  return callback(TransitionGroup, items, items1);
})(importAllResult.Component);
tmp3.defaultProps = { component: "span", transitionAppear: true, transitionLeave: true, transitionEnter: true, childFactory: null };
let result = require("_defineProperties").fileFinishedImporting("../discord_common/js/packages/transition-group/TransitionGroup.tsx");

export const TransitionGroup = tmp3;
