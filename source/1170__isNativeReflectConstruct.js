// Module ID: 1170
// Function ID: 13289
// Name: _isNativeReflectConstruct
// Dependencies: []
// Exports: withTouchEventBoundary

// Module 1170 (_isNativeReflectConstruct)
let StyleSheet;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getTouchedComponentInfo(elementType) {
  elementType = elementType.elementType;
  if (null !== elementType) {
    if (undefined !== elementType) {
      const displayName = elementType.displayName;
    }
  }
  const memoizedProps = elementType.memoizedProps;
  if (memoizedProps) {
    let obj = {};
    const obj2 = arg1(dependencyMap[8]);
    obj.name = getComponentName(memoizedProps) || displayName;
    obj.element = getElementName(memoizedProps);
    obj.file = getFileName(memoizedProps);
    obj.label = getLabelValue(memoizedProps, arg1);
    let dropUndefinedKeysResult = obj2.dropUndefinedKeys(obj);
    const tmp5 = getComponentName(memoizedProps) || displayName;
  } else if (displayName) {
    obj = { name: displayName };
    dropUndefinedKeysResult = obj;
  }
  return dropUndefinedKeysResult;
}
function getComponentName(arg0) {
  let tmp = "string" === typeof arg0[closure_12];
  if (tmp) {
    tmp = arg0[closure_12].length > 0;
  }
  if (tmp) {
    tmp = "unknown" !== arg0[closure_12];
  }
  if (tmp) {
    tmp = arg0[closure_12];
  }
  return tmp;
}
function getElementName(memoizedProps) {
  let tmp = "string" === typeof memoizedProps[closure_13];
  if (tmp) {
    tmp = memoizedProps[closure_13].length > 0;
  }
  if (tmp) {
    tmp = "unknown" !== memoizedProps[closure_13];
  }
  if (tmp) {
    tmp = memoizedProps[closure_13];
  }
  return tmp;
}
function getFileName(memoizedProps) {
  let tmp = "string" === typeof memoizedProps[closure_14];
  if (tmp) {
    tmp = memoizedProps[closure_14].length > 0;
  }
  if (tmp) {
    tmp = "unknown" !== memoizedProps[closure_14];
  }
  if (tmp) {
    tmp = memoizedProps[closure_14];
  }
  return tmp;
}
function getLabelValue(memoizedProps, arg1) {
  if ("string" === typeof memoizedProps[closure_11]) {
    if (memoizedProps[closure_11].length > 0) {
      let tmp2 = memoizedProps[closure_11];
    }
    return tmp2;
  }
  if ("string" === typeof arg1) {
    if ("string" === typeof memoizedProps[arg1]) {
      if (memoizedProps[arg1].length > 0) {
        tmp2 = memoizedProps[arg1];
      }
    }
  }
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
({ StyleSheet, View: closure_9 } = arg1(dependencyMap[7]));
const styles = StyleSheet.create({ wrapperView: { flex: 1 } });
let closure_11 = "sentry-label";
let closure_12 = "data-sentry-component";
let closure_13 = "data-sentry-element";
let closure_14 = "data-sentry-source-file";
const tmp4 = (Component) => {
  class TouchEventBoundary {
    constructor() {
      self = this;
      tmp = closure_3(this, TouchEventBoundary);
      obj = closure_6(TouchEventBoundary);
      tmp2 = closure_5;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.name = "TouchEventBoundary";
      return tmp2Result;
    }
  }
  const arg1 = TouchEventBoundary;
  callback2(TouchEventBoundary, Component);
  let obj = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const client = TouchEventBoundary(closure_1[8]).getClient();
      let addIntegration;
      if (null != client) {
        addIntegration = client.addIntegration;
      }
      if (!tmp3) {
        const self = this;
        addIntegration.call(client, TouchEventBoundary(closure_1[9]).createIntegration(this.name));
        const obj2 = TouchEventBoundary(closure_1[9]);
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "render",
    value: function render() {
      const _onTouchStart = this._onTouchStart;
      return <closure_9 style={wrapperView.wrapperView} onTouchStart={_onTouchStart.bind(this)}>{this.props.children}</closure_9>;
    }
  };
  items[1] = obj;
  obj = {
    key: "_logTouchEvent",
    value: function _logTouchEvent(items, label) {
      let combined = label;
      const self = this;
      const first = items[0];
      if (first) {
        if (!combined) {
          let str3 = "";
          if (first.file) {
            const _HermesInternal = HermesInternal;
            str3 = " (" + first.file + ")";
          }
          const _HermesInternal2 = HermesInternal;
          combined = "" + first.name + str3;
        }
        let obj = { category: self.props.breadcrumbCategory };
        obj = { path: items };
        obj.data = obj;
        obj.level = "info";
        const _HermesInternal3 = HermesInternal;
        obj.message = "Touch event within element: " + combined;
        obj.type = self.props.breadcrumbType;
        TouchEventBoundary(closure_1[8]).addBreadcrumb(obj);
        const debug2 = TouchEventBoundary(closure_1[8]).debug;
        const _HermesInternal4 = HermesInternal;
        debug2.log("[TouchEvents] " + obj.message);
        const obj3 = TouchEventBoundary(closure_1[8]);
      } else {
        const debug = TouchEventBoundary(closure_1[8]).debug;
        debug.warn("[TouchEvents] No root component found in touch path.");
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "_isNameIgnored",
    value: function _isNameIgnored(label) {
      const self = this;
      const TouchEventBoundary = label;
      const tmp = this.props.ignoreNames || [];
      let combined = tmp;
      if (self.props.ignoredDisplayNames) {
        const items = [];
        combined = items.concat(callback(tmp), callback(self.props.ignoredDisplayNames));
        const tmp3 = callback(tmp);
      }
      return combined.some((arg0) => {
        let tmp = "string" === typeof arg0;
        if (tmp) {
          tmp = arg0 === arg0;
        }
        if (!tmp) {
          const _RegExp = RegExp;
          let match = arg0 instanceof RegExp;
          if (match) {
            match = arg0.match(arg0);
          }
          tmp = match;
        }
        return tmp;
      });
    }
  };
  items[4] = {
    key: "_onTouchStart",
    value: function _onTouchStart(_targetInst) {
      const self = this;
      if (_targetInst._targetInst) {
        let _return = _targetInst._targetInst;
        const items = [];
        if (_return) {
          if (self.props.maxComponentTreeSize) {
            if (items.length < self.props.maxComponentTreeSize) {
              const elementType2 = _return.elementType;
              let displayName;
              if (null !== elementType2) {
                if (undefined !== elementType2) {
                  displayName = elementType2.displayName;
                }
              }
              if (displayName !== TouchEventBoundary.displayName) {
                self._pushIfNotIgnored(items, callback5(_return, self.props.labelName));
                _return = _return.return;
                while (_return) {
                  if (!self.props.maxComponentTreeSize) {
                    break;
                  } else if (items.length >= self.props.maxComponentTreeSize) {
                    break;
                  } else {
                    let elementType = _return.elementType;
                    let displayName1;
                    if (null !== elementType) {
                      if (undefined !== elementType) {
                        displayName1 = elementType.displayName;
                      }
                    }
                    let tmp6 = TouchEventBoundary;
                    if (displayName1 === TouchEventBoundary.displayName) {
                      break;
                    }
                  }
                }
              }
            }
          }
        }
        const found = items.find((label) => label.label);
        let label;
        if (null !== found) {
          if (undefined !== found) {
            label = found.label;
          }
        }
        if (items.length > 0) {
          self._logTouchEvent(items, label);
        }
        let obj = TouchEventBoundary(closure_1[10]);
        obj = { elementId: label, op: TouchEventBoundary(closure_1[11]).UI_ACTION_TOUCH };
        const result = obj.startUserInteractionSpan(obj);
        if (result) {
          const attr = result.setAttribute(TouchEventBoundary(closure_1[8]).SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, TouchEventBoundary(closure_1[12]).SPAN_ORIGIN_AUTO_INTERACTION);
        }
      }
    }
  };
  items[5] = {
    key: "_pushIfNotIgnored",
    value: function _pushIfNotIgnored(items, name) {
      const self = this;
      let tmp2 = !tmp;
      if (!!name) {
        let tmp4 = !tmp3;
        if (!(!name.name && !name.label)) {
          let tmp5 = !name.name || !self._isNameIgnored(name.name);
          if (tmp5) {
            let tmp6 = !name.label || !self._isNameIgnored(name.label);
            if (tmp6) {
              let tmp7 = items.length > 0;
              if (tmp7) {
                const _JSON = JSON;
                const _JSON2 = JSON;
                const json = JSON.stringify(items[items.length - 1]);
                tmp7 = json === JSON.stringify(name);
              }
              let flag = !tmp7;
              if (!tmp7) {
                items.push(name);
                flag = true;
              }
              tmp6 = flag;
            }
            tmp5 = tmp6;
          }
          tmp4 = tmp5;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    }
  };
  return callback(TouchEventBoundary, items);
}(importAllResult.Component);
tmp4.displayName = "__Sentry.TouchEventBoundary";
const obj = { GUILD_FEED_REMOVED: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002004063439013, PINNED: 14169530670149420000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, ACTIVE_CHANNELS_REMOVED: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000169759663317, REQUIRE_TAG: null, ignoreNames: [] };
tmp4.defaultProps = obj;

export const TouchEventBoundary = tmp4;
export const withTouchEventBoundary = function withTouchEventBoundary(arg0, arg1) {
  arg1 = arg0;
  const dependencyMap = arg1;
  class WrappedComponent {
    constructor(arg0) {
      tmp = closure_8;
      tmp2 = closure_15;
      merged = Object.assign({}, null != arg1 ? arg1 : {});
      return closure_8.createElement(tmp2, merged, closure_8.createElement(arg0, Object.assign({}, arg0)));
    }
  }
  WrappedComponent.displayName = "WithTouchEventBoundary";
  return WrappedComponent;
};
