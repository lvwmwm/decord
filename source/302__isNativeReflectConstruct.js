// Module ID: 302
// Function ID: 4559
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 302 (_isNativeReflectConstruct)
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
let closure_4 = [true, true, true, true];
let closure_5 = importDefault(dependencyMap[0]);
let closure_6 = importDefault(dependencyMap[1]);
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
let closure_9 = importDefault(dependencyMap[4]);
let closure_10 = importDefault(dependencyMap[5]);
const importAllResult = importAll(dependencyMap[6]);
const jsx = arg1(dependencyMap[7]).jsx;
const tmp3 = (PureComponent) => {
  class FlatList {
    constructor(arg0) {
      self = this;
      tmp = closure_6(this, FlatList);
      items = [];
      items[0] = PureComponent;
      obj = closure_9(FlatList);
      tmp2 = closure_8;
      if (closure_14()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_9;
        constructResult = Reflect.construct(obj, items, closure_9(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      FlatList = tmp2Result;
      tmp2Result._virtualizedListPairs = [];
      tmp2Result._captureRef = (_listRef) => {
        tmp2Result._listRef = _listRef;
      };
      tmp2Result._getItem = (arg0, arg1) => {
        const tmp = callback(tmp2Result.props.numColumns);
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
            const tmp4 = callback(tmp2Result.props.numColumns);
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
        const tmp = callback(tmp2Result.props.numColumns);
        let keyExtractor = tmp2Result.props.keyExtractor;
        if (null == keyExtractor) {
          keyExtractor = tmp(closure_3[9]).keyExtractor;
        }
        if (tmp > 1) {
          const _Array = Array;
          tmp2Result(closure_3[10])(Array.isArray(arr), "FlatList: Encountered internal consistency error, expected each item to consist of an array with 1-%s columns; instead, received a single item.", tmp);
          const mapped = arr.map((arg0, arg1) => keyExtractor(arg0, arg1 * tmp + arg1));
          let joined = mapped.join(":");
          const tmp7 = tmp2Result(closure_3[10]);
        } else {
          joined = keyExtractor(arr, arg1);
        }
        return joined;
      };
      tmp2Result._renderer = (arg0, arg1, arg2, arg3, arg4) => {
        let closure_3 = callback(arg3);
        function render(arg0) {
          if (arg0) {
            const _Object = Object;
            let tmp2 = callback(arg0, Object.assign({}, arg0));
          } else {
            tmp2 = null;
            if (arg1) {
              tmp2 = arg1(arg0);
            }
          }
          return tmp2;
        }
        function renderProp(arg0) {
          let item;
          if (closure_3 > 1) {
            ({ item, index: closure_1 } = arg0);
            const _Array = Array;
            arg0(closure_3[10])(Array.isArray(item), "Expected array of items with numColumns > 1");
            const obj = {};
            const tmp4 = arg0(closure_3[10]);
            const tmp9 = arg1(closure_3[11]);
            obj.style = arg0(closure_3[12]).default.compose(row.row, arg2);
            obj.children = item.map((item) => {
              let obj = { item, index: closure_1 * closure_3 + arg1, separators: item.separators };
              const tmp = callback(obj);
              let tmp2 = null;
              if (null != tmp) {
                obj = { children: tmp };
                tmp2 = callback2(React.Fragment, obj, arg1);
              }
              return tmp2;
            });
            return callback(tmp9, obj);
          } else {
            return render(arg0);
          }
        }
        const obj = {};
        if (arg0) {
          obj.ListItemComponent = renderProp;
          let tmp = obj;
        } else {
          obj.renderItem = renderProp;
          tmp = obj;
        }
        return tmp;
      };
      tmp2Result._memoizedRenderer = closure_1(closure_3[13])(tmp2Result._renderer);
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
          tmp2Result(closure_3[10])(tmp2Result.props.onViewableItemsChanged, "Changing the nullability of onViewableItemsChanged is not supported. Once a function or null is supplied that cannot be changed.");
          const props = tmp2Result.props;
          const onViewableItemsChanged = props.onViewableItemsChanged;
          return onViewableItemsChanged(...arguments);
        });
        arr = prop1.push(obj);
      }
      return tmp2Result;
    }
  }
  const arg1 = FlatList;
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
  const items = [obj, , , , , , , , , , , , , , ];
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
      FlatList(closure_3[10])(numColumns.numColumns === this.props.numColumns, "Changing numColumns on the fly is not supported. Change the key prop on FlatList when changing the number of columns to force a fresh render of the component.");
      FlatList(closure_3[10])(null == numColumns.onViewableItemsChanged === (null == this.props.onViewableItemsChanged), "Changing onViewableItemsChanged nullability on the fly is not supported");
      const tmp3 = FlatList(closure_3[10]);
      tmp3(!FlatList(closure_3[14]).default(numColumns.viewabilityConfig, this.props.viewabilityConfig), "Changing viewabilityConfig on the fly is not supported");
      FlatList(closure_3[10])(numColumns.viewabilityConfigCallbackPairs === this.props.viewabilityConfigCallbackPairs, "Changing viewabilityConfigCallbackPairs on the fly is not supported");
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
      const tmp = callback7(this.props.numColumns);
      if (tmp3) {
        tmp3 = !getItemCount;
      }
      FlatList(closure_3[10])(tmp3, "FlatList does not support custom data formats.");
      if (tmp > 1) {
        FlatList(closure_3[10])(!horizontal, "numColumns does not support horizontal.");
      } else {
        FlatList(closure_3[10])(!columnWrapperStyle, "columnWrapperStyle not supported for single column lists");
      }
      const tmp2 = FlatList(closure_3[10]);
      if (onViewableItemsChanged) {
        onViewableItemsChanged = viewabilityConfigCallbackPairs;
      }
      FlatList(closure_3[10])(!onViewableItemsChanged, "FlatList does not support setting both onViewableItemsChanged and viewabilityConfigCallbackPairs.");
    }
  };
  items[12] = {
    key: "_pushMultiColumnViewable",
    value: function _pushMultiColumnViewable(items, item) {
      const FlatList = items;
      let closure_2 = callback7(this.props.numColumns);
      let keyExtractor = this.props.keyExtractor;
      if (null == keyExtractor) {
        keyExtractor = item(keyExtractor[9]).keyExtractor;
      }
      item = item.item;
      const item1 = item.forEach((item) => {
        item(keyExtractor[10])(null != arg1.index, "Missing index!");
        const sum = arg1.index * closure_2 + arg1;
        item.push(Object.assign({}, arg1, { item, key: keyExtractor(item, sum), index: sum }));
      });
    }
  };
  items[13] = {
    key: "_createOnViewableItemsChanged",
    value: function _createOnViewableItemsChanged(onViewableItemsChanged) {
      const FlatList = onViewableItemsChanged;
      const self = this;
      return (viewableItems) => {
        if (viewableItems) {
          if (tmp > 1) {
            const items = [];
            viewableItems = items;
            const items1 = [];
            const self = items1;
            viewableItems = viewableItems.viewableItems;
            const item = viewableItems.forEach((item) => items1._pushMultiColumnViewable(items1, item));
            const changed = viewableItems.changed;
            const item1 = changed.forEach((item) => items1._pushMultiColumnViewable(items, item));
            const obj = { viewableItems: items1, changed: items };
            viewableItems(obj);
          } else {
            viewableItems(viewableItems);
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
      const tmp2 = callback3(props, closure_4);
      const tmp3 = undefined !== strictMode && strictMode ? self._memoizedRenderer : self._renderer;
      const tmp4 = closure_12;
      const result = callback2(closure_3[8]).shouldUseRemoveClippedSubviewsAsDefaultOnIOS();
      obj.removeClippedSubviews = null == removeClippedSubviews || removeClippedSubviews;
      return tmp4(callback(closure_3[9]).VirtualizedList, Object.assign({}, tmp2, obj, tmp3(self.props.ListItemComponent, self.props.renderItem, columnWrapperStyle, numColumns, self.props.extraData)));
    }
  };
  return callback(FlatList, items);
}(importAllResult.PureComponent);
let closure_13 = arg1(dependencyMap[12]).default.create({ row: { flexDirection: "row" } });

export default tmp3;
