// Module ID: 15155
// Function ID: 115353
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 31, 27, 33, 5162, 2]

// Module 15155 (_isNativeReflectConstruct)
import getActivityIndicator from "get ActivityIndicator";
import closure_3 from "jsxProd";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import importAllResult from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";

let Dimensions;
let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_8;
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
({ View: closure_8, Animated: closure_9, Dimensions, PanResponder: closure_10, FlatList: closure_11 } = get_ActivityIndicator);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
let height = Dimensions.get("window").height;
let closure_15 = { x: 0, y: 0 };
let closure_16 = importAllResult.memo((arg0) => {
  let active;
  let hideContent;
  let hovering;
  let index;
  let item;
  let onPressOut;
  let renderActiveDivider;
  let renderRow;
  let rowData;
  let closure_0 = arg0;
  ({ hovering, rowData, active, renderActiveDivider, hideContent, renderRow, onPressOut } = arg0);
  let closure_1 = importAllResult.useRef(arg0);
  const ref = importAllResult.useRef(null);
  let closure_3 = importAllResult.useRef(null);
  const effect = importAllResult.useEffect(() => {
    closure_1.current = closure_0;
  });
  const callback = importAllResult.useCallback(() => {
    let current = ref.current;
    if (null != current) {
      current.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
        const current = outer1_1.current;
        obj = { layout: obj, rowData: outer1_1.current.rowData };
        obj = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
        current.onRowActive(obj);
      });
    }
  }, []);
  let tmp6 = null != active;
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    const obj = { x: nativeEvent.nativeEvent.layout.x, y: nativeEvent.nativeEvent.layout.y, width: nativeEvent.nativeEvent.layout.width };
    let height = ref.current;
    if (null == height) {
      height = nativeEvent.nativeEvent.layout.height;
    }
    obj.height = height;
    let current = ref.current;
    if (null != current) {
      current.measure((arg0, arg1, arg2, current) => {
        let tmp = null == outer1_3.current;
        if (tmp) {
          tmp = current > 0;
        }
        if (tmp) {
          outer1_3.current = current;
        }
        if (null != outer1_1.current.onRowLayout) {
          current = outer1_1.current;
          current.onRowLayout(outer1_1.current.index, obj);
        }
      });
    }
  }, []);
  ({ item, index } = rowData);
  if (tmp6) {
    tmp6 = active;
  }
  let obj = { onLayout: callback1, ref };
  if (hovering) {
    hovering = renderActiveDivider();
  }
  const items = [hovering, ];
  obj = {};
  obj = null;
  if (hideContent) {
    obj = { height: 0.01, opacity: 0 };
  }
  obj.style = obj;
  obj.children = importAllResult.cloneElement(renderRow(item, index, tmp6), { sortHandlers: { onLongPress: callback, onPressOut } });
  items[1] = closure_12(closure_8, obj);
  obj.children = items;
  return closure_13(closure_8, obj);
});
let closure_17 = importAllResult.memo((listPageY) => {
  let frameHeight;
  let pan;
  let renderRow;
  let rowData;
  let sortRowStyle;
  ({ rowData, pan, frameHeight } = listPageY);
  listPageY = listPageY.listPageY;
  const wrapperPageY = listPageY.wrapperPageY;
  const items = [frameHeight, listPageY, wrapperPageY];
  ({ sortRowStyle, renderRow } = listPageY);
  let obj = {};
  const items1 = [
    importAllResult.useMemo(() => {
      const obj = { position: "absolute", left: 0, right: 0, opacity: 0.25, overflow: "hidden", backgroundColor: "transparent", height: frameHeight, marginTop: listPageY - wrapperPageY };
      return obj;
    }, items),
    sortRowStyle,
    pan.getLayout()
  ];
  obj.style = items1;
  obj.children = renderRow(rowData.item, rowData.index, true);
  return callback3(RN.View, obj);
});
const tmp4 = ((Component) => {
  class SortableListView {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, apply);
      items = [];
      items[0] = Component;
      obj = outer1_5(apply);
      tmp2 = outer1_4;
      if (outer1_18()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = outer1_5;
        constructResult = Reflect.construct(obj, items, outer1_5(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      apply = tmp2Result;
      tmp2Result.memoedRowData = {};
      tmp2Result.firstRowY = undefined;
      tmp2Result.layoutMap = {};
      tmp2Result.scrollValue = 0;
      tmp2Result._delayedInitTimeout = null;
      tmp2Result._isMounted = false;
      tmp2Result.moved = false;
      tmp2Result._wrapperRef = outer1_7.createRef();
      tmp2Result._listRef = outer1_7.createRef();
      tmp2Result.scrollContainerHeight = outer1_14;
      obj = { active: null, hovering: false, hoverIndex: -5 };
      valueXY = new outer1_9.ValueXY(outer1_15);
      obj.pan = valueXY;
      tmp2Result.state = obj;
      tmp2Result.renderActive = () => {
        const active = tmp2Result.state.active;
        if (null == active) {
          return null;
        } else {
          const rowData = active.rowData;
          const index = rowData.index;
          const obj = { pan: tmp3, rowData: tmp2Result.getMemoedRowData(index, rowData.item), shouldDisplayHovering: tmp2 === index, wrapperLayout: tmp2Result.wrapperLayout };
          let frameHeight;
          if (null != active) {
            frameHeight = active.layout.frameHeight;
          }
          let num = 0;
          if (null != frameHeight) {
            num = frameHeight;
          }
          obj.frameHeight = num;
          let pageY;
          if (null != active) {
            pageY = active.layout.pageY;
          }
          let num2 = 0;
          if (null != pageY) {
            num2 = pageY;
          }
          obj.listPageY = num2;
          const wrapperLayout = tmp2Result.wrapperLayout;
          let pageY1;
          if (null != wrapperLayout) {
            pageY1 = wrapperLayout.pageY;
          }
          let num3 = 0;
          if (null != pageY1) {
            num3 = pageY1;
          }
          obj.wrapperPageY = num3;
          obj.renderRow = tmp;
          return outer2_12(outer2_17, obj);
        }
      };
      tmp2Result.renderActiveDivider = () => {
        const renderActiveDivider = tmp2Result.props.renderActiveDivider;
        const active = tmp2Result.state.active;
        if (null != active) {
          const frameHeight = active.layout.frameHeight;
        }
        if (null != renderActiveDivider) {
          let renderActiveDividerResult = renderActiveDivider(frameHeight);
        } else {
          let obj = {};
          obj = { height: frameHeight };
          obj.style = obj;
          renderActiveDividerResult = outer2_12(outer2_8, obj);
        }
        return renderActiveDividerResult;
      };
      tmp2Result.handleRowLayout = (arg0, arg1) => {
        tmp2Result._updateLayoutMap(arg0, arg1);
      };
      tmp2Result.renderItem = (item) => {
        let active;
        let disableSorting;
        let hoverIndex;
        let index;
        let pan;
        let props;
        let renderRow;
        let state;
        ({ index, active } = item);
        ({ props, state } = tmp2Result);
        let tmp = null == active;
        ({ disableSorting, renderRow } = props);
        ({ hoverIndex, pan } = state);
        if (tmp) {
          const active2 = tmp2Result.state.active;
          index = undefined;
          if (null != active2) {
            const rowData = active2.rowData;
            if (null != rowData) {
              index = rowData.index;
            }
          }
          tmp = index === index;
        }
        if (tmp4) {
          let obj = { active: true };
          active = obj;
        }
        obj = { index, disabled: disableSorting, active };
        const active3 = tmp2Result.state.active;
        let index1;
        if (null != active3) {
          index1 = active3.rowData.index;
        }
        obj.hideContent = index1 === index;
        obj.hovering = hoverIndex === index;
        ({ cancel: obj2.onPressOut, handleRowActive: obj2.onRowActive, handleRowLayout: obj2.onRowLayout } = tmp2Result);
        obj.pan = pan;
        obj.renderActiveDivider = tmp2Result.renderActiveDivider;
        obj.renderRow = renderRow;
        obj.rowData = tmp2Result.getMemoedRowData(index, item.item);
        return outer2_12(outer2_16, obj);
      };
      tmp2Result.handleScroll = (nativeEvent) => {
        tmp2Result.scrollValue = nativeEvent.nativeEvent.contentOffset.y;
        if (null != tmp2Result.props.onScroll) {
          const props = tmp2Result.props;
          props.onScroll(nativeEvent);
        }
      };
      tmp2Result.handleLayout = (nativeEvent) => {
        const merged = Object.assign(nativeEvent.nativeEvent.layout);
        closure_0.listLayout = {};
      };
      tmp2Result.handleContentSizeChange = (arg0, scrollContainerHeight) => {
        closure_0.scrollContainerHeight = scrollContainerHeight;
      };
      tmp2Result.checkTargetElement = () => {
        const diff = tmp2Result.scrollValue + (tmp2Result.moveY - tmp2Result.wrapperLayout.pageY) - tmp2Result.firstRowY;
        let num = 0;
        let num2 = 0;
        let num3 = 0;
        let flag = false;
        if (0 <= diff) {
          num3 = num2;
          flag = true;
          while (null != tmp2Result.layoutMap[num2]) {
            num = num + tmp3.height;
            num2 = num2 + 1;
            num3 = num2;
            flag = false;
            if (num > diff) {
              break;
            }
          }
        }
        let diff1 = num3;
        if (!flag) {
          diff1 = num3 - 1;
        }
        const minDraggableIndex = tmp2Result.props.minDraggableIndex;
        let num4 = 0;
        if (null != minDraggableIndex) {
          num4 = minDraggableIndex;
        }
        const bound = Math.max(num4, diff1);
        const active = tmp2Result.state.active;
        let index;
        if (null != active) {
          index = active.rowData.index;
        }
        let num5 = 0;
        if (null != index) {
          num5 = index;
        }
        let sum = bound;
        if (num5 < bound) {
          sum = bound + 1;
        }
        if (sum !== tmp2Result.state.hoverIndex) {
          let obj = SortableListView(outer2_1[8]);
          const result = obj.DeprecatedLayoutAnimation();
          obj = { hovering: true, hoverIndex: sum };
          tmp2Result.setState(obj);
        }
      };
      tmp2Result.cancel = () => {
        if (!tmp2Result.moved) {
          tmp2Result.setState({ active: null, hovering: false, hoverIndex: -5 });
        }
      };
      tmp2Result.scrollTo = (arg0) => {
        const scrollResponder = tmp2Result.scrollResponder;
        const items = [...HermesBuiltin.copyRestArgs()];
        scrollResponder.scrollTo.apply(items);
      };
      tmp2Result.scrollAnimation = () => {
        if (tmp2Result._isMounted) {
          if (null != tmp2Result.state.active) {
            if (null == tmp2Result.moveY) {
              const _requestAnimationFrame2 = requestAnimationFrame;
              return requestAnimationFrame(tmp2Result.scrollAnimation);
            } else {
              const diff = tmp2Result.moveY - tmp2Result.wrapperLayout.pageY;
              const sum = tmp2Result.scrollContainerHeight - tmp2Result.listLayout.height + 2 * tmp2Result.state.active.layout.frameHeight;
              const scrollValue = tmp2Result.scrollValue;
              let tmp3 = diff < 80;
              const diff1 = tmp2Result.listLayout.height - 80;
              if (tmp3) {
                tmp3 = scrollValue > 0;
              }
              let num2 = null;
              if (tmp3) {
                const diff2 = scrollValue - 20 * (1 - diff / 80);
                tmp3 = diff2 < 0;
                num2 = diff2;
              }
              if (tmp3) {
                num2 = 0;
              }
              let sum1 = num2;
              if (diff > diff1) {
                sum1 = num2;
                if (scrollValue < sum) {
                  sum1 = scrollValue + 20 * (1 - (tmp2Result.listLayout.height - diff) / 80);
                  if (sum1 > sum) {
                    sum1 = sum;
                  }
                }
              }
              if (null !== sum1) {
                tmp2Result.scrollValue = sum1;
                const scrollResponder = tmp2Result.scrollResponder;
                const obj = { y: tmp2Result.scrollValue, x: 0, animated: false };
                scrollResponder.scrollTo(obj);
              }
              tmp2Result.checkTargetElement();
              const _requestAnimationFrame = requestAnimationFrame;
              const animationFrame = requestAnimationFrame(tmp2Result.scrollAnimation);
            }
          }
        }
      };
      tmp2Result._updateLayoutMap = (arg0, arg1) => {
        let tmp = null == tmp2Result.firstRowY;
        if (!tmp) {
          tmp = 0 === tmp2Result.firstRowY;
        }
        if (!tmp) {
          tmp = arg1.y < tmp2Result.firstRowY;
        }
        if (tmp) {
          tmp2Result.firstRowY = arg1.y;
        }
        tmp2Result.layoutMap[arg0] = arg1;
      };
      tmp2Result.getScrollResponder = () => tmp2Result.scrollResponder;
      tmp2Result.handleRowActive = (arg0) => {
        let disableSorting = tmp2Result.props.disableSorting;
        if (!disableSorting) {
          const current = tmp2Result._wrapperRef.current;
          disableSorting = null == current;
          let obj = current;
        }
        if (!disableSorting) {
          obj.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
            let obj = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
            state.wrapperLayout = obj;
            const pan = state.state.pan;
            pan.setValue({ x: 0, y: 0 });
            const result = SortableListView(outer3_1[8]).DeprecatedLayoutAnimation();
            state.moveY = state.layout.pageY;
            obj = { active: state, hovering: true, hoverIndex: state.rowData.index };
            state.setState(obj, state.scrollAnimation);
          });
        }
      };
      obj1 = { dx: tmp2Result.state.pan.x, dy: tmp2Result.state.pan.y };
      items1 = [null];
      items1[1] = obj1;
      f115380 = outer1_9.event(items1, { useNativeDriver: false });
      obj2 = {
        onStartShouldSetPanResponder() {
              return true;
            },
        onMoveShouldSetPanResponderCapture(arg0, vy) {
              const absolute = Math.abs(vy.vy);
              let tmp2 = absolute > Math.abs(vy.vx);
              if (tmp2) {
                tmp2 = null != tmp2Result.state.active;
              }
              return tmp2;
            },
        onPanResponderMove(arg0, moveY) {
              moveY.dx = 0;
              closure_0.moveY = moveY.moveY;
              callback(arg0, moveY);
            },
        onPanResponderGrant() {
              tmp2Result.moved = true;
              const pan = tmp2Result.state.pan;
              pan.setOffset(outer2_15);
              const pan2 = tmp2Result.state.pan;
              pan2.setValue(outer2_15);
              if (null != tmp2Result.props.onMoveStart) {
                const props = tmp2Result.props;
                props.onMoveStart();
              }
            },
        onPanResponderTerminate() {
              tmp2Result.setState({ active: null, hovering: false, hoverIndex: -5 });
            },
        onPanResponderRelease() {
              tmp2Result.moved = false;
              if (null != tmp2Result.props.onMoveEnd) {
                const props = tmp2Result.props;
                props.onMoveEnd();
              }
              if (null == tmp2Result.state.active) {
                if (tmp2Result.state.hovering) {
                  tmp2Result.setState({ hovering: false, hoverIndex: -5 });
                }
                tmp2Result.moveY = null;
              } else {
                const index = tmp2Result.state.active.rowData.index;
                if (false === tmp2Result.state.hovering) {
                  return tmp2Result.setState({ active: null, hoverIndex: -5 });
                } else {
                  const hoverIndex = tmp2Result.state.hoverIndex;
                  let diff = hoverIndex;
                  if (hoverIndex > index) {
                    diff = hoverIndex - 1;
                  }
                  let obj = SortableListView(outer2_1[8]);
                  obj = { duration: 0 };
                  const result = obj.DeprecatedLayoutAnimation(obj);
                  if (null != tmp2Result.props.onRowMoved) {
                    const props2 = tmp2Result.props;
                    obj = { row: tmp2Result.state.active.rowData, from: index, to: diff };
                    props2.onRowMoved(obj);
                  }
                  tmp2Result.setState({ active: null, hovering: false, hoverIndex: -5 });
                  const _Math = Math;
                  const bound = Math.max(0, tmp2Result.scrollContainerHeight - tmp2Result.listLayout.height + tmp22);
                  if (tmp2Result.scrollValue > bound) {
                    const scrollResponder = tmp2Result.scrollResponder;
                    const obj1 = { y: bound };
                    scrollResponder.scrollTo(obj1);
                  }
                }
              }
            }
      };
      tmp2Result._panResponder = outer1_10.create(obj2);
      return tmp2Result;
    }
  }
  callback2(SortableListView, Component);
  let obj = {
    key: "componentDidMount",
    value() {
      const self = this;
      this._isMounted = true;
      this._delayedInitTimeout = setTimeout(() => {
        const current = self._listRef.current;
        let scrollResponder;
        if (null != current) {
          scrollResponder = current.getScrollResponder();
        }
        self.scrollResponder = scrollResponder;
        const current2 = self._wrapperRef.current;
        if (null != current2) {
          current2.measure((frameX, frameY, frameWidth, frameHeight, pageX, pageY) => {
            outer1_0.wrapperLayout = { frameX, frameY, frameWidth, frameHeight, pageX, pageY };
          });
        }
      }, 1);
    }
  };
  let items = [obj, , , ];
  obj = {
    key: "componentWillUnmount",
    value() {
      clearTimeout(this._delayedInitTimeout);
    }
  };
  items[1] = obj;
  obj = {
    key: "getMemoedRowData",
    value(index, item) {
      let tmp = this.memoedRowData[index];
      let tmp2 = null != tmp;
      if (tmp2) {
        tmp2 = index === tmp.index;
      }
      if (tmp2) {
        tmp2 = item === tmp.item;
      }
      if (!tmp2) {
        const obj = { index, item };
        tmp = obj;
      }
      this.memoedRowData[index] = tmp;
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "render",
    value() {
      let contentContainerStyle;
      let data;
      let footer;
      let header;
      let keyboardShouldPersistTaps;
      let scrollEnabled;
      let scrollEventThrottle;
      const self = this;
      const props = this.props;
      let obj = { ref: this._wrapperRef, style: items };
      items = [props.wrapperStyles, { flex: 1 }];
      obj = {};
      ({ contentContainerStyle, header, footer, data, scrollEnabled, keyboardShouldPersistTaps, scrollEventThrottle } = props);
      const merged = Object.assign(this._panResponder.panHandlers);
      obj["ref"] = this._listRef;
      obj["keyboardShouldPersistTaps"] = keyboardShouldPersistTaps;
      obj["scrollEventThrottle"] = scrollEventThrottle;
      obj["contentContainerStyle"] = contentContainerStyle;
      obj["ListHeaderComponent"] = header;
      obj["ListFooterComponent"] = footer;
      obj["data"] = data;
      obj["onScroll"] = this.handleScroll;
      obj["onContentSizeChange"] = this.handleContentSizeChange;
      obj["onLayout"] = this.handleLayout;
      let tmp6 = null == this.state.active;
      if (tmp6) {
        tmp6 = false !== scrollEnabled;
      }
      obj["scrollEnabled"] = tmp6;
      obj["renderItem"] = self.renderItem;
      const active = self.state.active;
      let index;
      if (null != active) {
        index = active.rowData.index;
      }
      obj["extraData"] = "" + props.disableSorting + ":" + index + ":" + self.state.hoverIndex;
      const items1 = [outer1_12(outer1_11, obj), self.renderActive()];
      obj.children = items1;
      return outer1_13(outer1_8, obj);
    }
  };
  return callback(SortableListView, items);
})(importAllResult.Component);
tmp4.defaultProps = { disableSorting: false };
let result = require("_possibleConstructorReturn").fileFinishedImporting("components_native/common/SortableListView.tsx");

export default tmp4;
