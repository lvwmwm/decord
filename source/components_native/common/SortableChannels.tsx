// Module ID: 16171
// Function ID: 124680
// Name: _createForOfIteratorHelperLoose
// Dependencies: []

// Module 16171 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_4(arg0, constructResult);
}
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
const importAllResult = importAll(dependencyMap[5]);
const tmp3 = arg1(dependencyMap[6]);
({ View: closure_8, Animated: closure_9, PanResponder: closure_10, SectionList: closure_11 } = tmp3);
({ jsxs: closure_12, jsx: closure_13 } = arg1(dependencyMap[7]));
const createElement = arg1(dependencyMap[5]).createElement;
let closure_15 = 24 + tmp3.StyleSheet.hairlineWidth;
const tmp4 = arg1(dependencyMap[7]);
let closure_16 = importDefault(dependencyMap[8]).memoize((arr) => {
  const mapped = arr.map((category) => {
    const items = [{ type: "section", data: category.category }, ...data.map((data) => ({ type: "row", data }))];
    const data = category.data;
    return items;
  });
  return mapped.reduce((arg0, arg1) => {
    const items = [...arg1];
    return items;
  }, []);
});
let closure_17 = (Component) => {
  class Row {
    constructor(arg0) {
      items = [...arguments];
      tmp = closure_2(this, Row);
      items1 = [...items];
      tmp2 = closure_21(this, Row, items1);
      Row = tmp2;
      tmp2.handleLongPress = (arg0) => {
        ({ onRowActive: closure_1, rowData: closure_2 } = arg0.props);
        const _view = tmp2._view;
        if (null != _view) {
          _view.measure((arg0, arg1, arg2, frameHeight, arg4, pageY) => {
            if (null != callback) {
              let obj = {};
              obj = { frameHeight, pageY };
              obj.layout = obj;
              obj.rowData = closure_2;
              obj.touch = arg0.nativeEvent;
              callback(obj);
            }
          });
        }
      };
      tmp2.setViewRef = (_view) => {
        tmp2._view = _view;
      };
      tmp2.measure = (arg0) => {
        const _view = tmp2._view;
        if (null != _view) {
          _view.measure(arg0);
        }
      };
      return tmp2;
    }
  }
  const arg1 = Row;
  callback3(Row, Component);
  const items = [
    {
      key: "render",
      value() {
        let active;
        let activeDivider;
        let isAfter;
        let list;
        let renderItem;
        let rowData;
        let sortingEnabled;
        let style;
        const self = this;
        const props = this.props;
        ({ rowData, list, activeDivider, isAfter } = props);
        const active2 = list.state.active;
        let num = -1;
        ({ active, renderItem, style, sortingEnabled } = props);
        if (null != active2) {
          num = active2.rowData.index;
        }
        let tmp4 = null;
        if (sortingEnabled) {
          let obj = {};
          obj = { onLongPress: self.handleLongPress, onPressOut: list.cancel };
          obj.sortHandlers = obj;
          obj.onLongPress = self.handleLongPress;
          obj.onPressOut = list.cancel;
          tmp4 = obj;
        }
        obj = {};
        let tmp8 = null;
        const renderItemResult = renderItem(rowData.data);
        if (active) {
          const obj1 = { opacity: 0.2 };
          tmp8 = obj1;
        }
        const items = [tmp8, style];
        obj.style = items;
        obj.ref = self.setViewRef;
        obj.collapsable = false;
        let tmp9 = null;
        if (!isAfter) {
          tmp9 = null;
          if (tmp) {
            tmp9 = null;
            if (null != activeDivider) {
              tmp9 = activeDivider;
            }
          }
        }
        const items1 = [tmp9, closure_7.cloneElement(renderItem(rowData.data), tmp4), ];
        let tmp10 = null;
        if (isAfter) {
          tmp10 = null;
          if (tmp) {
            tmp10 = null;
            if (null != activeDivider) {
              tmp10 = activeDivider;
            }
          }
        }
        items1[2] = tmp10;
        obj.children = items1;
        return closure_12(closure_8, obj);
      }
    }
  ];
  return callback(Row, items);
}(importAllResult.Component);
let closure_18 = (Component) => {
  class SortRow {
    constructor(arg0) {
      tmp = closure_2(this, SortRow);
      items = [];
      items[0] = Component;
      tmp2 = closure_21(this, SortRow, items);
      if (null == Component.list.state.active) {
        tmp3 = globalThis;
        _Error = Error;
        prototype = Error.prototype;
        tmp4 = new.target;
        tmp5 = new.target;
        error = new Error();
        tmp7 = error;
        throw error;
      } else {
        layout = Component.list.state.active.layout;
        obj = {};
        obj = {};
        activeOpacity = Component.activeOpacity;
        num = 0.8;
        if (null != activeOpacity) {
          num = activeOpacity;
        }
        obj.opacity = num;
        obj.height = layout.frameHeight;
        obj.marginTop = layout.pageY - Component.list.wrapperLayout.pageY;
        obj.style = obj;
        tmp2.state = obj;
        return tmp2;
      }
    }
  }
  const arg1 = SortRow;
  callback3(SortRow, Component);
  const items = [
    {
      key: "render",
      value() {
        let renderItem;
        let rowData;
        const props = this.props;
        const obj = {};
        const items = [this.state.style, props.sortRowStyle, ];
        const pan = props.list.state.pan;
        ({ rowData, renderItem } = props);
        items[2] = pan.getLayout();
        obj.style = items;
        obj.children = renderItem(rowData.data, true);
        return callback2(RN.View, obj);
      }
    }
  ];
  return callback(SortRow, items);
}(importAllResult.Component);
const importDefaultResult = importDefault(dependencyMap[8]);
const tmp5 = (Component) => {
  class SortableChannels {
    constructor(arg0) {
      tmp = closure_2(this, SortableChannels);
      items = [];
      items[0] = Component;
      obj = closure_21(this, SortableChannels, items);
      SortableChannels = obj;
      obj.cancel = () => {
        if (!obj.moved) {
          const onMoveCancel = obj.props.onMoveCancel;
          if (null != obj.state.active) {
            if (null != onMoveCancel) {
              onMoveCancel();
            }
          }
          obj.setState({ style: true, showTopContainer: true, multiline: true });
        }
      };
      obj.handleWrapperLayout = () => {
        if (null != obj._view) {
          const _view = obj._view;
          _view.measure((arg0, arg1, arg2, frameHeight, arg4, pageY) => {
            closure_0.wrapperLayout = { frameHeight, pageY };
          });
        }
      };
      obj.handleListLayout = (nativeEvent) => {
        obj.listLayout = nativeEvent.nativeEvent.layout;
      };
      obj.handleScroll = (nativeEvent) => {
        const onScroll = obj.props.onScroll;
        obj.scrollValue = nativeEvent.nativeEvent.contentOffset.y;
        if (null != onScroll) {
          onScroll(nativeEvent);
        }
      };
      obj.handleContentSizeChange = (arg0, scrollContainerHeight) => {
        obj.scrollContainerHeight = scrollContainerHeight;
      };
      obj.setListRef = (_list) => {
        obj._list = _list;
      };
      obj.scrollAnimation = () => {
        const active = obj.state.active;
        if (null != active) {
          if (null != obj.moveY) {
            const _Math = Math;
            const bound = Math.max(obj.moveY - obj.wrapperLayout.pageY, 0);
            const sum = obj.scrollContainerHeight - obj.listLayout.height + active.layout.frameHeight;
            const scrollValue = obj.scrollValue;
            const diff = obj.listLayout.height - 100;
            if (bound < 100) {
              if (scrollValue > 0) {
                let diff1 = scrollValue - 1500 * (1 - bound / 100);
                if (diff1 < 0) {
                  diff1 = 0;
                }
              }
              if (null != diff1) {
                obj.scrollValue = diff1;
                const obj = {};
                obj.y = obj.scrollValue;
                obj.x = 0;
                obj.scrollTo(obj);
              }
              if (obj.moved) {
                obj.checkTargetElement();
              }
              const _requestAnimationFrame2 = requestAnimationFrame;
              const animationFrame = requestAnimationFrame(obj.scrollAnimation);
            }
            diff1 = null;
            if (bound > diff) {
              diff1 = null;
              if (scrollValue < sum) {
                diff1 = scrollValue + 1500 * (1 - (obj.listLayout.height - bound) / 100);
                if (diff1 > sum) {
                  diff1 = sum;
                }
              }
            }
          } else {
            const _requestAnimationFrame = requestAnimationFrame;
            const animationFrame1 = requestAnimationFrame(obj.scrollAnimation);
          }
        }
      };
      obj.setWrapperRef = (_view) => {
        obj._view = _view;
      };
      obj.checkTargetElement = () => {
        const onHoverChange = obj.props.onHoverChange;
        const scrollValue = obj.scrollValue;
        const diff = obj.moveY - obj.wrapperLayout.pageY;
        const order = obj.props.order;
        let num = 0;
        let num2 = 0;
        let flag = false;
        let num3 = 0;
        if (0 < scrollValue + diff) {
          num3 = num2;
          flag = true;
          while (null != obj.layoutMap[order[num2]]) {
            num = num + tmp3.height;
            num2 = num2 + 1;
            num3 = num2;
            flag = false;
            if (num >= scrollValue + diff) {
              break;
            }
          }
        }
        let diff1 = num3;
        if (!flag) {
          diff1 = num3 - 1;
        }
        if (tmp5) {
          const obj = { hoveringIndex: diff1 };
          obj.setState(obj);
          if (null != onHoverChange) {
            onHoverChange(order[diff1]);
          }
        }
      };
      obj.handleRowActive = (layout) => {
        const props = obj.props;
        const onRowActive = props.onRowActive;
        if (!props.disableSorting) {
          const pan = obj.state.pan;
          pan.setValue({});
          obj.moveY = layout.layout.pageY + layout.layout.frameHeight / 2;
          const index = layout.rowData.index;
          const obj = { active: layout, activeIndex: index, hoveringIndex: index };
          obj.setState(obj, obj.scrollAnimation);
          if (null != onRowActive) {
            onRowActive(layout);
          }
        }
      };
      obj.renderActiveDivider = (arg0) => {
        const active = obj.state.active;
        const renderActiveDivider = obj.props.renderActiveDivider;
        if (null == active) {
          return null;
        } else {
          const frameHeight = active.layout.frameHeight;
          if (null != renderActiveDivider) {
            let tmp4 = null;
            if (null != active) {
              tmp4 = obj.props.order[active.rowData.index];
            }
            let renderActiveDividerResult = renderActiveDivider(frameHeight, arg0, tmp4);
          } else {
            let obj = {};
            obj = { height: frameHeight };
            obj.style = obj;
            renderActiveDividerResult = callback(closure_8, obj);
          }
          return renderActiveDividerResult;
        }
      };
      obj.renderSectionHeader = (data) => {
        let active;
        let activeIndex;
        let hoveringIndex;
        let panResponder;
        let tmp = arg1;
        const state = obj.state;
        ({ active, hoveringIndex } = state);
        const order = obj.props.order;
        ({ activeIndex, panResponder } = state);
        const index = order.indexOf(data.section.category.id);
        let tmp4 = !tmp;
        if (tmp4) {
          let index1;
          if (null != active) {
            const rowData = active.rowData;
            if (null != rowData) {
              index1 = rowData.index;
            }
          }
          tmp4 = index1 === index;
        }
        let str = "";
        if (null != obj.props.order[hoveringIndex]) {
          str = tmp7;
        }
        let obj = { data, index, isRow: false };
        const itemLayoutProps = obj.getItemLayoutProps(obj.index);
        obj = {};
        const merged = Object.assign(obj.props);
        const renderSectionHeader = obj.props.renderSectionHeader;
        obj["renderItem"] = renderSectionHeader.bind(null, data);
        let renderActiveDividerResult = null;
        if (str === data.section.key) {
          renderActiveDividerResult = obj.renderActiveDivider(str);
        }
        obj["activeDivider"] = renderActiveDividerResult;
        obj["key"] = data.section.key;
        if (!tmp) {
          tmp = tmp4;
        }
        obj["active"] = tmp;
        obj["list"] = obj;
        obj["sortingEnabled"] = obj.props.sortingEnabled;
        obj["hovering"] = str === data.section.key;
        obj["panResponder"] = panResponder;
        obj["rowData"] = obj;
        obj["onRowActive"] = obj.handleRowActive;
        obj["isAfter"] = hoveringIndex > activeIndex;
        return closure_14(arg1 ? closure_18 : closure_17, obj);
      };
      obj.renderItem = (data) => {
        let active;
        let activeIndex;
        let hoveringIndex;
        let panResponder;
        let tmp = arg1;
        const state = obj.state;
        ({ active, hoveringIndex } = state);
        let tmp3 = !tmp;
        ({ activeIndex, panResponder } = state);
        if (tmp3) {
          let index;
          if (null != active) {
            const rowData = active.rowData;
            if (null != rowData) {
              index = rowData.index;
            }
          }
          tmp3 = index === data.item.index;
        }
        let str = "";
        if (null != obj.props.order[hoveringIndex]) {
          str = tmp6;
        }
        let obj = { data, index: data.item.index, isRow: true };
        const itemLayoutProps = obj.getItemLayoutProps(obj.index);
        obj = {};
        const merged = Object.assign(obj.props);
        let renderActiveDividerResult = null;
        if (str === data.item.key) {
          renderActiveDividerResult = obj.renderActiveDivider(str);
        }
        obj["activeDivider"] = renderActiveDividerResult;
        obj["key"] = data.item.key;
        if (!tmp) {
          tmp = tmp3;
        }
        obj["active"] = tmp;
        obj["list"] = obj;
        obj["sortingEnabled"] = obj.props.sortingEnabled;
        obj["hovering"] = str === data.item.key;
        obj["panResponder"] = panResponder;
        obj["rowData"] = obj;
        obj["onRowActive"] = obj.handleRowActive;
        obj["isAfter"] = hoveringIndex > activeIndex;
        return closure_14(arg1 ? closure_18 : closure_17, obj);
      };
      obj.getItemLayout = (arg0, arg1) => obj.getItemLayoutProps(arg1);
      obj.getSectionHeight = (data) => {
        const props = obj.props;
        let num = 20;
        if (props.sortingEnabled) {
          num = 0;
        }
        let bound = Math.max(44 + 16 * props.fontScale, 60);
        if ("null" === data.data.id) {
          bound = num;
        }
        return bound;
      };
      obj.getRowHeight = () => Math.max(closure_15 + 20 * obj.props.fontScale, 48);
      obj.getItemLayoutProps = (index) => {
        const tmp = callback3(callback2(obj.props.sections));
        const iter = tmp();
        let tmp2;
        let tmp3;
        let num = 0;
        if (!iter.done) {
          let value = iter.value;
          if ("section" === value.type) {
            let sectionHeight = obj.getSectionHeight(value);
          } else {
            sectionHeight = obj.getRowHeight();
          }
          let tmp7 = sectionHeight;
          let tmp8 = value;
          let num2 = 0;
          let num3 = 0;
          tmp2 = sectionHeight;
          tmp3 = value;
          num = 0;
          if (0 !== index) {
            const sum = num2 + tmp7;
            num3 = num3 + 1;
            const iter2 = tmp();
            tmp2 = tmp7;
            tmp3 = tmp8;
            num = sum;
            while (!iter2.done) {
              value = iter2.value;
              if ("section" === value.type) {
                let tmp12 = obj;
                let sectionHeight1 = obj.getSectionHeight(value);
              } else {
                let tmp10 = obj;
                sectionHeight1 = obj.getRowHeight();
              }
              tmp7 = sectionHeight1;
              tmp8 = value;
              num2 = sum;
              tmp2 = sectionHeight1;
              tmp3 = value;
              num = sum;
              if (num3 === index) {
                break;
              }
            }
          }
        }
        let obj = { length: tmp2, offset: num, index };
        if (null == tmp3) {
          return obj;
        } else {
          if (null != tmp3.data.id) {
            let id = tmp3.data.id;
          } else {
            id = null;
            if (null != tmp3.data.channel) {
              id = tmp3.data.channel.id;
            }
          }
          if ("string" === typeof id) {
            obj = { y: num, height: tmp2 };
            obj.layoutMap[id] = obj;
          }
          return obj;
        }
      };
      obj.scrollTo = (arg0) => {
        const items = [...arguments];
        const scrollResponder = obj.getScrollResponder();
        if (null != scrollResponder) {
          const scrollTo = scrollResponder.scrollTo;
          const items1 = [];
          HermesBuiltin.arraySpread(items, 0);
          HermesBuiltin.apply(items1, scrollResponder);
        }
      };
      obj.getScrollResponder = () => {
        const _list = obj._list;
        let scrollResponder;
        if (null != _list) {
          if (null != _list.getScrollResponder) {
            scrollResponder = _list.getScrollResponder();
          }
        }
        let tmp2 = null;
        if (null != scrollResponder) {
          tmp2 = scrollResponder;
        }
        return tmp2;
      };
      obj = {};
      valueXY = new closure_9.ValueXY(obj);
      panResponder = obj.createPanResponder(Component, obj, valueXY);
      obj.listener = valueXY.addListener((arg0) => {
        const y = arg0.y;
        obj.panY = y;
        return y;
      });
      obj.moved = false;
      obj.moveY = 0;
      obj.dy = 0;
      obj.direction = "down";
      obj.scrollValue = 0;
      obj4 = SortableChannels(closure_1[9]);
      obj.scrollContainerHeight = 1.2 * obj4.getWindowDimensions().height;
      obj1 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true };
      obj1.panResponder = panResponder;
      obj1.pan = valueXY;
      obj.state = obj1;
      obj.layoutMap = {};
      return obj;
    }
  }
  const arg1 = SortableChannels;
  callback3(SortableChannels, Component);
  let obj = {
    key: "componentWillUnmount",
    value() {
      const pan = this.state.pan;
      pan.removeListener(this.listener);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "createPanResponder",
    value(arg0, arg1, dx) {
      const SortableChannels = this;
      let obj = { dx: dx.x, dy: dx.y };
      const items = [true, obj];
      let closure_3 = closure_9.event(items, { useNativeDriver: false });
      obj = {
        onStartShouldSetPanResponder() {
          return true;
        },
        onMoveShouldSetPanResponderCapture(arg0, vy) {
          const absolute = Math.abs(vy.vy);
          let tmp2 = absolute > Math.abs(vy.vx);
          if (tmp2) {
            tmp2 = null != self.state.active;
          }
          return tmp2;
        },
        onPanResponderMove(arg0, dy) {
          const active = self.state.active;
          if (null != active) {
            dy.dx = 0;
            const layout = active.layout;
            self.moveY = layout.pageY + layout.frameHeight / 2 + dy.dy;
            let str = "up";
            if (dy.dy >= self.dy) {
              str = "down";
            }
            self.direction = str;
            self.dy = dy.dy;
            callback(arg0, dy);
            const tmp5 = self;
          }
        },
        onPanResponderGrant() {
          const state = self.state;
          const pan = state.pan;
          const onMoveStart = arg0.onMoveStart;
          if (null != state.active) {
            self.moved = true;
            self.dy = 0;
            self.direction = "down";
            if (null != onMoveStart) {
              onMoveStart();
            }
            pan.setOffset(arg1);
            pan.setValue(arg1);
          }
        },
        onPanResponderTerminate() {
          const onHoverChange = self.props.onHoverChange;
          if (null != onHoverChange) {
            onHoverChange("-1");
          }
          self.setState({ style: true, showTopContainer: true, multiline: true });
        },
        onPanResponderRelease() {
          let active;
          let hoveringIndex;
          ({ active, hoveringIndex } = self.state);
          const onRowMoved = self.props.onRowMoved;
          self.moved = false;
          if (null != arg0.onMoveEnd) {
            arg0.onMoveEnd();
          }
          if (null == active) {
            if (hoveringIndex >= 0) {
              let obj = { hoveringIndex: -1 };
              self.setState(obj);
            }
            self.moveY = 0;
          } else {
            const index = active.rowData.index;
            let tmp3 = hoveringIndex;
            if (-1 === hoveringIndex) {
              tmp3 = index;
            }
            if (tmp3 === index) {
              return self.setState({ style: true, showTopContainer: true, multiline: true });
            } else {
              obj = { row: active.rowData, from: index - 1, to: tmp3 - 1 };
              if (null != onRowMoved) {
                onRowMoved(obj);
              }
              self.setState({ style: true, showTopContainer: true, multiline: true });
              const _Math = Math;
              const bound = Math.max(0, self.scrollContainerHeight - self.listLayout.height + active.layout.frameHeight);
              if (self.scrollValue > bound) {
                obj = { y: bound };
                self.scrollTo(obj);
              }
              self.state.active = null;
              self.state.hoveringIndex = -1;
              self.moveY = 0;
            }
          }
        }
      };
      return closure_10.create(obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "renderActive",
    value() {
      const self = this;
      const active = this.state.active;
      if (null != active) {
        const rowData = active.rowData;
        const data = rowData.data;
        if (rowData.isRow) {
          let renderItemResult = self.renderItem(data, true);
        } else {
          renderItemResult = self.renderSectionHeader(data, true);
        }
        return renderItemResult;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let active;
      let panResponder;
      const self = this;
      let obj = { style: { flex: 1 }, onLayout: this.handleWrapperLayout, ref: this.setWrapperRef };
      obj = { enableEmptySections: true };
      ({ active, panResponder } = this.state);
      const merged = Object.assign(this.props);
      const merged1 = Object.assign(panResponder.panHandlers);
      obj["ref"] = this.setListRef;
      obj["onScroll"] = this.handleScroll;
      obj["onContentSizeChange"] = this.handleContentSizeChange;
      obj["onLayout"] = this.handleListLayout;
      let tmp7 = null == active;
      if (tmp7) {
        tmp7 = false !== this.props.scrollEnabled;
      }
      obj["scrollEnabled"] = tmp7;
      obj["renderItem"] = self.renderItem;
      obj["renderSectionHeader"] = self.renderSectionHeader;
      obj["stickySectionHeadersEnabled"] = false;
      obj["initialNumToRender"] = 20;
      obj["keyExtractor"] = function keyExtractor(key) {
        return key.key;
      };
      obj["getItemLayout"] = self.getItemLayout;
      const items = [closure_13(closure_11, obj), self.renderActive()];
      obj.children = items;
      return closure_12(closure_8, obj);
    }
  };
  return callback(SortableChannels, items);
}(importAllResult.Component);
const result = arg1(dependencyMap[10]).fileFinishedImporting("components_native/common/SortableChannels.tsx");

export default tmp5;
