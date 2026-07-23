// Module ID: 312
// Function ID: 4780
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 44, 313]

// Module 312 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_4 from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import { isValidElement } from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import importAllResult from "result";

let StyleSheet;
let closure_10;
let closure_11;
let closure_9;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
({ StyleSheet, View: closure_9 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
const styles = StyleSheet.create({ row: { flexDirection: "row" }, rowReverse: { flexDirection: "row-reverse" }, columnReverse: { flexDirection: "column-reverse" } });

export default ((PureComponent) => {
  class CellRenderer {
    constructor() {
      self = this;
      tmp = outer1_3(this, apply);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = outer1_6(apply);
      tmp3 = outer1_5;
      if (outer1_13()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = outer1_6;
        constructResult = Reflect.construct(obj, combined, outer1_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      obj = { highlighted: false, leadingItem: tmp3Result.props.item };
      tmp3Result.state = { separatorProps: obj };
      tmp3Result._separators = {
        highlight() {
              const props = tmp3Result.props;
              const items = [, ];
              ({ cellKey: arr[0], prevCellKey: arr[1] } = tmp3Result.props);
              props.onUpdateSeparators(items, { highlighted: true });
            },
        unhighlight() {
              const props = tmp3Result.props;
              const items = [, ];
              ({ cellKey: arr[0], prevCellKey: arr[1] } = tmp3Result.props);
              props.onUpdateSeparators(items, { highlighted: false });
            },
        updateProps(arg0, arg1) {
              const props = tmp3Result.props;
              let prevCellKey = props.cellKey;
              const props2 = tmp3Result.props;
              if ("leading" === arg0) {
                prevCellKey = props.prevCellKey;
              }
              const items = [prevCellKey];
              props2.onUpdateSeparators(items, arg1);
            }
      };
      tmp3Result._onLayout = (arg0) => {
        if (null != tmp3Result.props.onCellLayout) {
          const props = tmp3Result.props;
          props.onCellLayout(arg0, tmp3Result.props.cellKey, tmp3Result.props.index);
        }
      };
      tmp3Result._onCellFocusCapture = (arg0) => {
        if (null != tmp3Result.props.onCellFocusCapture) {
          const props = tmp3Result.props;
          props.onCellFocusCapture(tmp3Result.props.cellKey);
        }
      };
      return tmp3Result;
    }
  }
  callback2(CellRenderer, PureComponent);
  let obj = {
    key: "updateSeparatorProps",
    value: function updateSeparatorProps(closure_0) {
      this.setState((separatorProps) => ({ separatorProps: Object.assign({}, separatorProps.separatorProps, closure_0) }));
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const props = this.props;
      props.onUnmount(this.props.cellKey);
    }
  };
  items[1] = obj;
  obj = {
    key: "_renderElement",
    value: function _renderElement(renderItem, ListItemComponent, item, index) {
      const self = this;
      let tmp = renderItem;
      if (renderItem) {
        tmp = ListItemComponent;
      }
      if (tmp) {
        const _console = console;
        console.warn("VirtualizedList: Both ListItemComponent and renderItem props are present. ListItemComponent will take precedence over renderItem.");
      }
      if (ListItemComponent) {
        let obj = { item, index, separators: self._separators };
        let tmp7 = outer1_10(ListItemComponent, obj);
      } else if (renderItem) {
        obj = { item, index, separators: self._separators };
        tmp7 = renderItem(obj);
      } else {
        outer1_1(outer1_2[8])(false, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
      }
      return tmp7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value: function render() {
      let CellRendererComponent;
      let ItemSeparatorComponent;
      let horizontal;
      let index;
      let inversionStyle;
      let item;
      let onCellLayout;
      const self = this;
      const props = this.props;
      ({ CellRendererComponent, ItemSeparatorComponent, horizontal, item, index, inversionStyle, onCellLayout } = props);
      const _renderElementResult = this._renderElement(props.renderItem, props.ListItemComponent, item, index);
      let tmp2 = ItemSeparatorComponent;
      if (!outer1_8(ItemSeparatorComponent)) {
        let tmp3 = ItemSeparatorComponent;
        if (ItemSeparatorComponent) {
          const _Object = Object;
          tmp3 = outer1_10(ItemSeparatorComponent, Object.assign({}, self.state.separatorProps));
        }
        tmp2 = tmp3;
      }
      if (inversionStyle) {
        let items = outer1_12;
        if (horizontal) {
          items = [, ];
          items[0] = items.rowReverse;
          items[1] = inversionStyle;
          let items1 = items;
        } else {
          items1 = [items.columnReverse, inversionStyle];
        }
      } else {
        let tmp6 = inversionStyle;
        if (horizontal) {
          const items2 = [outer1_12.row, inversionStyle];
          tmp6 = items2;
        }
        if (CellRendererComponent) {
          let obj = { cellKey: props.cellKey, index, item, style: tmp6, onFocusCapture: self._onCellFocusCapture };
          if (onCellLayout) {
            obj = { onLayout: self._onLayout };
            onCellLayout = obj;
          }
          const obj1 = {};
          const items3 = [_renderElementResult, tmp2];
          obj1.children = items3;
          let tmp9Result = tmp9(CellRendererComponent, Object.assign(obj, onCellLayout, obj1));
        } else {
          obj = { style: tmp6, onFocusCapture: self._onCellFocusCapture };
          let tmp12 = onCellLayout;
          if (onCellLayout) {
            const obj2 = { onLayout: self._onLayout };
            tmp12 = obj2;
          }
          const obj3 = {};
          const items4 = [_renderElementResult, tmp2];
          obj3.children = items4;
          tmp9Result = tmp9(outer1_9, Object.assign(obj, tmp12, obj3));
          const tmp11 = outer1_9;
        }
        const obj4 = { cellKey: self.props.cellKey, children: tmp9Result };
        return outer1_10(CellRenderer(outer1_2[9]).VirtualizedListCellContextProvider, obj4);
      }
    }
  };
  let items1 = [
    {
      key: "getDerivedStateFromProps",
      value: function getDerivedStateFromProps(item, separatorProps) {
        let tmp = null;
        if (item.item !== separatorProps.separatorProps.leadingItem) {
          let obj = {};
          const _Object = Object;
          obj = { leadingItem: item.item };
          obj.separatorProps = Object.assign({}, separatorProps.separatorProps, obj);
          tmp = obj;
        }
        return tmp;
      }
    }
  ];
  return callback(CellRenderer, items, items1);
})(require("result").PureComponent);
