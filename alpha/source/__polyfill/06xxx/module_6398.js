// Module ID: 6398
// Function ID: 6399
// Dependencies: [17, 19, 21, 6366, 6399, 6400, 6401]
// Exports: useSecondaryProps

// Module 6398
import react2 from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import react_native from "react-native" /* 6399 */;
import react3 from "react" /* 6400 */;
import react_native2 from "react-native" /* 6401 */;
import react_native3 from "react-native" /* 17 */;

const react = react2;

let c2;
let c3;
({ Animated: c2, RefreshControl: c3 } = react_native3);
const useMemo = react2.useMemo;
const jsx = Fragment.jsx;

export const useSecondaryProps = function useSecondaryProps(ListHeaderComponent) {
  let items5;
  let tmp;
  let tmp5Result;
  ListHeaderComponent = ListHeaderComponent.ListHeaderComponent;
  const ListHeaderComponentStyle = ListHeaderComponent.ListHeaderComponentStyle;
  const ListFooterComponent = ListHeaderComponent.ListFooterComponent;
  const ListFooterComponentStyle = ListHeaderComponent.ListFooterComponentStyle;
  const ListEmptyComponent = ListHeaderComponent.ListEmptyComponent;
  const ListEmptyComponentStyle = ListHeaderComponent.ListEmptyComponentStyle;
  const renderScrollComponent = ListHeaderComponent.renderScrollComponent;
  const refreshing = ListHeaderComponent.refreshing;
  const progressViewOffset = ListHeaderComponent.progressViewOffset;
  const onRefresh = ListHeaderComponent.onRefresh;
  const data = ListHeaderComponent.data;
  const refreshControl = ListHeaderComponent.refreshControl;
  const stickyHeaderConfig = ListHeaderComponent.stickyHeaderConfig;
  let invertedTransformStyle;
  if (ListHeaderComponent.inverted) {
    let tmp3 = ListHeaderComponent;
    let tmp4 = ListHeaderComponentStyle;
    let obj = ListHeaderComponent(ListHeaderComponentStyle[3]);
    invertedTransformStyle = obj.getInvertedTransformStyle(tmp);
  }
  const tmp5 = ListEmptyComponentStyle;
  let items = [onRefresh, refreshing, progressViewOffset, refreshControl];
  const items1 = [ListHeaderComponent, ListHeaderComponentStyle, invertedTransformStyle];
  const items2 = [ListFooterComponent, ListFooterComponentStyle, invertedTransformStyle];
  const tmp6 = ListEmptyComponentStyle(() => {
    let tmp = refreshControl;
    if (!tmp) {
      let tmp3;
      if (onRefresh) {
        const _Boolean = Boolean;
        tmp3 = <_false refreshing={Boolean(refreshing)} progressViewOffset={progressViewOffset} onRefresh={tmp2} />;
      }
      tmp = tmp3;
    }
    return tmp;
  }, items);
  let tmp7 = ListEmptyComponentStyle(() => {
    let tmp2 = null;
    if (ListHeaderComponent) {
      const items = [ListHeaderComponentStyle, invertedTransformStyle];
      const CompatView = react_native.CompatView;
      tmp2 = <CompatView style={items}>{react3.getValidComponent(tmp)}</CompatView>;
    }
    return tmp2;
  }, items1);
  const items3 = [ListEmptyComponent, data, invertedTransformStyle, ListEmptyComponentStyle];
  const tmp8 = ListEmptyComponentStyle(() => {
    let tmp2 = null;
    if (ListFooterComponent) {
      const items = [ListFooterComponentStyle, invertedTransformStyle];
      const CompatView = react_native.CompatView;
      tmp2 = <CompatView style={items}>{react3.getValidComponent(tmp)}</CompatView>;
    }
    return tmp2;
  }, items2);
  let backdropComponent;
  const tmp9 = ListEmptyComponentStyle(() => {
    if (ListEmptyComponent) {
      let tmp7;
      const obj = react3;
      const validComponent = obj.getValidComponent(tmp);
      const tmp2 = require;
      if (invertedTransformStyle) {
        const items = [ListEmptyComponentStyle, tmp5];
        tmp7 = jsx(tmp2(6399).CompatView, { style: items, children: validComponent });
      } else {
        tmp7 = validComponent;
      }
      return tmp7;
    }
    return null;
  }, items3);
  if (stickyHeaderConfig != null) {
    backdropComponent = stickyHeaderConfig.backdropComponent;
  }
  const items4 = [backdropComponent, invertedTransformStyle];
  let obj2 = {
    refreshControl: tmp6,
    renderHeader: tmp7,
    renderFooter: tmp8,
    renderEmpty: tmp9,
    CompatScrollView: tmp5(() => {
      let forwardRefResult;
      const CompatAnimatedScroller = react_native2.CompatAnimatedScroller;
      if (typeof renderScrollComponent === "function") {
        const tmpResult = react3;
        if (!tmpResult.isComponentClass(renderScrollComponent)) {
          forwardRefResult = react.forwardRef((arg0, ref) => {
            const obj = { ref };
            const merged = Object.assign(arg0);
            return renderScrollComponent(obj);
          });
          forwardRefResult.displayName = "CustomScrollView";
        }
        return React2.createAnimatedComponent(forwardRefResult);
      }
      forwardRefResult = CompatAnimatedScroller;
      if (renderScrollComponent) {
        forwardRefResult = tmp3;
      }
    }, items5),
    renderStickyHeaderBackdrop: tmp5Result
  };
  items5 = [renderScrollComponent];
  tmp5Result = tmp5(() => {
    let backdropComponent1;
    let getValidComponent;
    let items;
    let backdropComponent;
    if (stickyHeaderConfig != null) {
      backdropComponent = tmp.backdropComponent;
    }
    let tmp4Result = null;
    if (backdropComponent) {
      const obj = { style: items, children: getValidComponent(backdropComponent1) };
      items = [{ position: "absolute", inset: 0, pointerEvents: "none" }, invertedTransformStyle];
      const CompatView = react_native.CompatView;
      backdropComponent1 = undefined;
      getValidComponent = react3.getValidComponent;
      react3;
      const tmp4 = jsx;
      if (stickyHeaderConfig != null) {
        backdropComponent1 = tmp.backdropComponent;
      }
      tmp4Result = tmp4(CompatView, obj);
    }
    return tmp4Result;
  }, items4);
  return obj2;
};
