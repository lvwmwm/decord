// Module ID: 302
// Function ID: 4559
// Name: _isNativeReflectConstruct
// Dependencies: [29, 6, 7, 15, 17, 18, 31, 33, 79, 303, 44, 112, 253, 318, 146]

// Module 302 (_isNativeReflectConstruct)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import jsxProd from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function numColumnsOrDefault(arg0) {
  let num = 1;
  if (null != arg0) {
    num = arg0;
  }
  return num;
}
let closure_4 = ["numColumns", "columnWrapperStyle", "removeClippedSubviews", "strictMode"];
let tmp3 = ((PureComponent) => {
  class FlatList {
    constructor(arg0) {
      self = this;
      tmp = outer1_6(this, apply);
      items = [];
      items[0] = PureComponent;
      obj = outer1_9(apply);
      tmp2 = outer1_8;
      if (outer1_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_9;
        constructResult = Reflect.construct(obj, items, outer1_9(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result._virtualizedListPairs = [];
      tmp2Result._captureRef = (_listRef) => {
        closure_0._listRef = _listRef;
      };
      tmp2Result._getItem = (arg0, arg1) => {
        const tmp = outer2_15(tmp2Result.props.numColumns);
        if (tmp > 1) {
          const items = [];
          for (let num = 0; num < tmp; num = num + 1) {
            let sum = arg1 * tmp + num;
            if (sum < arg0.length) {
              let arr = items.push(arg0[sum]);
            }
          }
          return items;
        } else {
          return arg0[arg1];
        }
      };
      tmp2Result._getItemCount = (arg0) => {
        if (null != arg0) {
          const _Object = Object;
          if ("number" === typeof Object(arg0).length) {
            const tmp4 = outer2_15(tmp2Result.props.numColumns);
            if (tmp4 > 1) {
              const _Math = Math;
              let length = Math.ceil(arg0.length / tmp4);
            } else {
              length = arg0.length;
            }
            return length;
          }
        }
        return 0;
      };
      tmp2Result._keyExtractor = (arr) => {
        const tmp = outer2_15(arg1.props.numColumns);
        let closure_1 = tmp;
        let keyExtractor = tmp2Result.props.keyExtractor;
        if (null == keyExtractor) {
          keyExtractor = outer2_1(outer2_3[9]).keyExtractor;
        }
        if (tmp > 1) {
          const _Array = Array;
          FlatList(outer2_3[10])(Array.isArray(arr), "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.", tmp);
          const mapped = arr.map((arg0, arg1) => keyExtractor(arg0, closure_0 * closure_1 + arg1));
          let joined = mapped.join(":");
          const tmp7 = FlatList(outer2_3[10]);
        } else {
          joined = keyExtractor(arr, arg1);
        }
        return joined;
      };
      tmp2Result._renderer = (arg0, arg1, arg2, arg3, arg4) => {
        let closure_0 = arg0;
        let closure_1 = arg1;
        let closure_2 = arg2;
        let closure_3 = outer2_15(arg3);
        function render(arg0) {
          if (closure_0) {
            const _Object = Object;
            let tmp2 = outer3_12(closure_0, Object.assign({}, arg0));
          } else {
            tmp2 = null;
            if (callback) {
              tmp2 = callback(arg0);
            }
          }
          return tmp2;
        }
        function renderProp(arg0) {
          let closure_1;
          let item;
          let closure_0 = arg0;
          if (closure_3 > 1) {
            ({ item, index: closure_1 } = arg0);
            const _Array = Array;
            FlatList(outer3_3[10])(Array.isArray(item), "Expected array of items with numColumns > 1");
            let obj = {};
            const tmp4 = FlatList(outer3_3[10]);
            const tmp9 = outer3_1(outer3_3[11]);
            obj.style = FlatList(outer3_3[12]).default.compose(outer3_13.row, closure_2);
            obj.children = item.map((item) => {
              let obj = { item, index: closure_1 * outer1_3 + arg1, separators: separators.separators };
              const tmp = outer1_4(obj);
              let tmp2 = null;
              if (null != tmp) {
                obj = { children: tmp };
                tmp2 = outer4_12(outer4_11.Fragment, obj, arg1);
              }
              return tmp2;
            });
            return outer3_12(tmp9, obj);
          } else {
            return render(arg0);
          }
        }
        let obj = {};
        if (arg0) {
          obj.ListItemComponent = renderProp;
          let tmp = obj;
        } else {
          obj.renderItem = renderProp;
          tmp = obj;
        }
        return tmp;
      };
      tmp2Result._memoizedRenderer = outer1_1(outer1_3[13])(tmp2Result._renderer);
      _checkPropsResult = tmp2Result._checkProps(tmp2Result.props);
      props = tmp2Result.props;
      if (tmp2Result.props.viewabilityConfigCallbackPairs) {
        prop = props.viewabilityConfigCallbackPairs;
        tmp2Result._virtualizedListPairs = prop.map((viewabilityConfig) => ({ viewabilityConfig: viewabilityConfig.viewabilityConfig, onViewableItemsChanged: tmp2Result._createOnViewableItemsChanged(viewabilityConfig.onViewableItemsChanged) }));
      } else if (props.onViewableItemsChanged) {
        prop1 = tmp2Result._virtualizedListPairs;
        obj = {};
        obj.viewabilityConfig = tmp2Result.props.viewabilityConfig;
        obj.onViewableItemsChanged = tmp2Result._createOnViewableItemsChanged(() => {
          FlatList(outer2_3[10])(tmp2Result.props.onViewableItemsChanged, "Changing the nullability of onViewableItemsChanged is not supported. Once a function or null is supplied that cannot be changed.");
          const props = tmp2Result.props;
          const onViewableItemsChanged = props.onViewableItemsChanged;
          return onViewableItemsChanged(...arguments);
        });
        arr = prop1.push(obj);
      }
      return tmp2Result;
    }
  }
  callback2(FlatList, PureComponent);
  let obj = {
    key: "scrollToEnd",
    value: function scrollToEnd(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.scrollToEnd(arg0);
      }
    }
  };
  let items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "scrollToIndex",
    value: function scrollToIndex(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.scrollToIndex(arg0);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "scrollToItem",
    value: function scrollToItem(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.scrollToItem(arg0);
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "scrollToOffset",
    value: function scrollToOffset(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.scrollToOffset(arg0);
      }
    }
  };
  items[4] = {
    key: "recordInteraction",
    value: function recordInteraction() {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.recordInteraction();
      }
    }
  };
  items[5] = {
    key: "flashScrollIndicators",
    value: function flashScrollIndicators() {
      if (this._listRef) {
        const _listRef = this._listRef;
        const result = _listRef.flashScrollIndicators();
      }
    }
  };
  items[6] = {
    key: "getScrollResponder",
    value: function getScrollResponder() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollResponder();
      }
    }
  };
  items[7] = {
    key: "getNativeScrollRef",
    value: function getNativeScrollRef() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollRef();
      }
    }
  };
  items[8] = {
    key: "getScrollableNode",
    value: function getScrollableNode() {
      if (this._listRef) {
        const _listRef = this._listRef;
        return _listRef.getScrollableNode();
      }
    }
  };
  items[9] = {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      if (this._listRef) {
        const _listRef = this._listRef;
        _listRef.setNativeProps(arg0);
      }
    }
  };
  items[10] = {
    key: "componentDidUpdate",
    value: function componentDidUpdate(numColumns) {
      FlatList(outer1_3[10])(numColumns.numColumns === this.props.numColumns, "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.");
      FlatList(outer1_3[10])(null == numColumns.onViewableItemsChanged === (null == this.props.onViewableItemsChanged), "Changing onViewableItemsChanged nullability on the fly is not supported");
      const tmp3 = FlatList(outer1_3[10]);
      tmp3(!FlatList(outer1_3[14]).default(numColumns.viewabilityConfig, this.props.viewabilityConfig), "Changing viewabilityConfig on the fly is not supported");
      FlatList(outer1_3[10])(numColumns.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, "Changing viewabilityConfigCallbackPairs on the fly is not supported");
      this._checkProps(this.props);
    }
  };
  items[11] = {
    key: "_checkProps",
    value: function _checkProps(onViewableItemsChanged) {
      let columnWrapperStyle;
      let getItem;
      let getItemCount;
      let horizontal;
      let viewabilityConfigCallbackPairs;
      onViewableItemsChanged = onViewableItemsChanged.onViewableItemsChanged;
      ({ getItem, getItemCount, horizontal, columnWrapperStyle, viewabilityConfigCallbackPairs } = onViewableItemsChanged);
      let tmp3 = !getItem;
      const tmp = outer1_15(this.props.numColumns);
      if (tmp3) {
        tmp3 = !getItemCount;
      }
      FlatList(outer1_3[10])(tmp3, "FlatList does not support custom data formats.");
      if (tmp > 1) {
        FlatList(outer1_3[10])(!horizontal, "numColumns does not support horizontal.");
      } else {
        FlatList(outer1_3[10])(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists");
      }
      const tmp2 = FlatList(outer1_3[10]);
      if (onViewableItemsChanged) {
        onViewableItemsChanged = viewabilityConfigCallbackPairs;
      }
      FlatList(outer1_3[10])(!onViewableItemsChanged, "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.");
    }
  };
  items[12] = {
    key: "_pushMultiColumnViewable",
    value: function _pushMultiColumnViewable(items, item) {
      let closure_0 = items;
      let closure_1 = item;
      let closure_2 = outer1_15(this.props.numColumns);
      let keyExtractor = this.props.keyExtractor;
      if (null == keyExtractor) {
        keyExtractor = outer1_1(outer1_3[9]).keyExtractor;
      }
      item = item.item;
      const item1 = item.forEach((item) => {
        FlatList(outer2_3[10])(null != item.index, "Missing index!");
        const sum = item.index * closure_2 + arg1;
        items.push(Object.assign({}, item, { item, key: keyExtractor(item, sum), index: sum }));
      });
    }
  };
  items[13] = {
    key: "_createOnViewableItemsChanged",
    value: function _createOnViewableItemsChanged(onViewableItemsChanged) {
      let closure_0 = onViewableItemsChanged;
      const self = this;
      return (viewableItems) => {
        if (items) {
          if (tmp > 1) {
            items = [];
            const items1 = [];
            viewableItems = viewableItems.viewableItems;
            const item = viewableItems.forEach((item) => items1._pushMultiColumnViewable(items1, item));
            const changed = viewableItems.changed;
            const item1 = changed.forEach((item) => items1._pushMultiColumnViewable(items, item));
            const obj = { viewableItems: items1, changed: items };
            items(obj);
          } else {
            items(viewableItems);
          }
        }
      };
    }
  };
  items[14] = {
    key: "render",
    value: function render() {
      let columnWrapperStyle;
      let numColumns;
      let removeClippedSubviews;
      let strictMode;
      const self = this;
      const props = this.props;
      ({ numColumns, columnWrapperStyle, removeClippedSubviews, strictMode } = props);
      const obj = { getItem: self._getItem, getItemCount: self._getItemCount, keyExtractor: self._keyExtractor, ref: self._captureRef, viewabilityConfigCallbackPairs: self._virtualizedListPairs };
      const tmp = undefined !== strictMode && strictMode;
      const tmp2 = outer1_5(props, outer1_4);
      const tmp3 = undefined !== strictMode && strictMode ? self._memoizedRenderer : self._renderer;
      const tmp4 = outer1_12;
      const result = outer1_2(outer1_3[8]).shouldUseRemoveClippedSubviewsAsDefaultOnIOS();
      obj.removeClippedSubviews = null == removeClippedSubviews || removeClippedSubviews;
      return tmp4(outer1_1(outer1_3[9]).VirtualizedList, Object.assign({}, tmp2, obj, tmp3(self.props.ListItemComponent, self.props.renderItem, columnWrapperStyle, numColumns, self.props.extraData)));
    }
  };
  return callback(FlatList, items);
})(importAllResult.PureComponent);
let closure_13 = require("setStyleAttributePreprocessor").default.create({ row: { flexDirection: "row" } });

export default tmp3;
