// Module ID: 9471
// Function ID: 73653
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 33, 5290, 7677, 2]

// Module 9471 (_isNativeReflectConstruct)
import jsxProd from "jsxProd";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { jsx } from "jsxProd";
import importAllResult from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
const tmp3 = ((Component) => {
  class SwipeableFastList {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = outer1_2(this, apply);
      items1 = [...items];
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_8()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items1, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result._shouldBounceFirstRowOnMount = tmp2Result.props.bounceFirstRowOnMount;
      tmp2Result._openRowKey = null;
      tmp2Result._refs = {};
      tmp2Result._bounceTimeout = null;
      tmp2Result.renderRow = (arg0, arg1, arg2) => {
        let closure_1 = arg1;
        let props = tmp2Result.props;
        const renderQuickActions = props.renderQuickActions;
        let _isNativeReflectConstruct = "" + arg0 + ":" + arg1;
        let c4 = false;
        if (arg0._shouldBounceFirstRowOnMount) {
          tmp2Result._shouldBounceFirstRowOnMount = false;
          c4 = true;
        }
        const obj = {
          renderRightActions(showRightAction, transX, self) {
            return renderQuickActions(closure_0, closure_1);
          },
          ref(arg0) {
            closure_0._refs[_isNativeReflectConstruct] = arg0;
            if (tmp) {
              closure_0.bounceSwipeable(arg0);
              if (null != closure_0.props.onBounceSwipable) {
                const props = closure_0.props;
                props.onBounceSwipable();
              }
            }
          },
          overshootFriction: 8,
          onSwipeableWillOpen(left) {
            return closure_0.handleOpen(_isNativeReflectConstruct);
          },
          onSwipeableClose(arg0, closure_0) {
            return closure_0.handleClose(_isNativeReflectConstruct);
          },
          useNativeAnimations: true,
          children: props.renderItem(arg0, arg1, arg2)
        };
        return outer2_7(SwipeableFastList(outer2_1[7]), obj);
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
  let items = [obj, , , , , ];
  obj = {
    key: "bounceSwipeable",
    value(arg0) {
      let self = this;
      self = this;
      let closure_1 = arg0;
      if (null != this._bounceTimeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._bounceTimeout);
      }
      self._bounceTimeout = setTimeout(() => {
        closure_1.openRight();
        self._bounceTimeout = setTimeout(() => {
          outer1_1.close();
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
      return outer1_7(SwipeableFastList(outer1_1[8]), obj);
    }
  };
  return callback(SwipeableFastList, items);
})(require("result").Component);
tmp3.defaultProps = {
  bounceFirstRowOnMount: true,
  renderQuickActions(closure_0, closure_1) {
    return null;
  }
};
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/SwipeableFastList.tsx");

export default tmp3;
