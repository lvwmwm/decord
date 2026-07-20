// Module ID: 9423
// Function ID: 73365
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9423 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const jsx = arg1(dependencyMap[6]).jsx;
const tmp3 = (Component) => {
  class SwipeableFastList {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_2(this, SwipeableFastList);
      items1 = [...items];
      obj = closure_5(SwipeableFastList);
      tmp2 = closure_4;
      if (closure_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_5;
        constructResult = Reflect.construct(obj, items1, closure_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      SwipeableFastList = tmp2Result;
      tmp2Result._shouldBounceFirstRowOnMount = tmp2Result.props.bounceFirstRowOnMount;
      tmp2Result._openRowKey = null;
      tmp2Result._refs = {};
      tmp2Result._bounceTimeout = null;
      tmp2Result.renderRow = (arg0, arg1, arg2) => {
        const props = tmp2Result.props;
        const renderQuickActions = props.renderQuickActions;
        let closure_3 = "" + arg0 + ":" + arg1;
        let closure_4 = false;
        if (arg0._shouldBounceFirstRowOnMount) {
          tmp2Result._shouldBounceFirstRowOnMount = false;
          closure_4 = true;
        }
        const obj = {
          renderRightActions(showRightAction, transX, self) {
            return renderQuickActions(showRightAction, transX);
          },
          ref(self) {
            self._refs[closure_3] = self;
            if (tmp) {
              self.bounceSwipeable(self);
              if (null != self.props.onBounceSwipable) {
                const props = self.props;
                props.onBounceSwipable();
              }
            }
          },
          overshootFriction: 8,
          onSwipeableWillOpen(left) {
            return left.handleOpen(closure_3);
          },
          onSwipeableClose(arg0, arg1) {
            return arg0.handleClose(closure_3);
          },
          useNativeAnimations: true,
          children: props.renderItem(arg0, arg1, arg2)
        };
        return callback(arg0(arg1[7]), obj);
      };
      tmp2Result.handleScroll = (arg0) => {
        tmp2Result.closeOpenRow();
        const onScroll = tmp2Result.props.onScroll;
        if (null != onScroll) {
          onScroll(arg0);
        }
      };
      return tmp2Result;
    }
  }
  const importDefault = SwipeableFastList;
  callback2(SwipeableFastList, Component);
  let obj = {
    key: "componentWillUnmount",
    value() {
      if (null != this._bounceTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp._bounceTimeout);
      }
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "bounceSwipeable",
    value(arg0) {
      const self = this;
      const SwipeableFastList = this;
      if (null != this._bounceTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._bounceTimeout);
      }
      self._bounceTimeout = setTimeout(() => {
        arg0.openRight();
        self._bounceTimeout = setTimeout(() => {
          closure_1.close();
        }, 400);
      }, 700);
    }
  };
  items[1] = obj;
  obj = {
    key: "closeOpenRow",
    value() {
      const self = this;
      if (null != this._openRowKey) {
        if (null != self._refs[self._openRowKey]) {
          self._refs[self._openRowKey].close();
          const obj = self._refs[self._openRowKey];
        }
        self._openRowKey = null;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "handleOpen",
    value(_openRowKey) {
      this.closeOpenRow();
      this._openRowKey = _openRowKey;
    }
  };
  items[4] = {
    key: "handleClose",
    value(arg0) {
      if (this._openRowKey === arg0) {
        tmp._openRowKey = null;
      }
    }
  };
  items[5] = {
    key: "render",
    value() {
      const obj = {};
      const merged = Object.assign(this.props);
      obj["onScroll"] = this.handleScroll;
      obj["renderItem"] = this.renderRow;
      return callback3(SwipeableFastList(closure_1[8]), obj);
    }
  };
  return callback(SwipeableFastList, items);
}(importAll(dependencyMap[5]).Component);
tmp3.defaultProps = {
  bounceFirstRowOnMount: true,
  renderQuickActions(arg0, arg1) {
    return null;
  }
};
const importAllResult = importAll(dependencyMap[5]);
const result = arg1(dependencyMap[9]).fileFinishedImporting("components_native/common/SwipeableFastList.tsx");

export default tmp3;
