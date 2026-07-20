// Module ID: 312
// Function ID: 4780
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 312 (_isNativeReflectConstruct)
let StyleSheet;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const isValidElement = arg1(dependencyMap[5]).isValidElement;
const importAllResult = importAll(dependencyMap[5]);
({ StyleSheet, View: closure_9 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
const tmp4 = arg1(dependencyMap[7]);
const styles = StyleSheet.create({ row: { flexDirection: "row" }, rowReverse: { flexDirection: "row-reverse" }, columnReverse: { flexDirection: "column-reverse" } });

export default (PureComponent) => {
  class CellRenderer {
    constructor() {
      self = this;
      tmp = closure_3(this, CellRenderer);
      length = arguments.length;
      array = new Array(length);
      for (let num = 0; num < length; num = num + 1) {
        array[num] = arguments[num];
      }
      items = [];
      combined = items.concat(array);
      obj = closure_6(CellRenderer);
      tmp3 = closure_5;
      if (closure_13()) {
        if (!combined) {
          combined = [];
        }
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj, combined, closure_6(self).constructor);
      } else {
        constructResult = obj.apply(self, combined);
      }
      tmp3Result = tmp3(self, constructResult);
      CellRenderer = tmp3Result;
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
  const arg1 = CellRenderer;
  callback2(CellRenderer, PureComponent);
  let obj = {
    key: "updateSeparatorProps",
    value: function updateSeparatorProps(arg0) {
      const CellRenderer = arg0;
      this.setState((separatorProps) => ({ separatorProps: Object.assign({}, separatorProps.separatorProps, separatorProps) }));
    }
  };
  const items = [obj, , , ];
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
        let tmp7 = callback5(ListItemComponent, obj);
      } else if (renderItem) {
        obj = { item, index, separators: self._separators };
        tmp7 = renderItem(obj);
      } else {
        callback(closure_2[8])(false, "VirtualizedList: Either ListItemComponent or renderItem props are required but none were found.");
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
      if (!callback4(ItemSeparatorComponent)) {
        let tmp3 = ItemSeparatorComponent;
        if (ItemSeparatorComponent) {
          const _Object = Object;
          tmp3 = callback5(ItemSeparatorComponent, Object.assign({}, self.state.separatorProps));
        }
        tmp2 = tmp3;
      }
      if (inversionStyle) {
        let items = row;
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
          const items2 = [row.row, inversionStyle];
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
          tmp9Result = tmp9(closure_9, Object.assign(obj, tmp12, obj3));
          const tmp11 = closure_9;
        }
        const obj4 = { cellKey: self.props.cellKey, children: tmp9Result };
        return callback5(CellRenderer(closure_2[9]).VirtualizedListCellContextProvider, obj4);
      }
    }
  };
  const items1 = [
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
}(importAllResult.PureComponent);
