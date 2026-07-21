// Module ID: 5189
// Function ID: 44015
// Name: useSecondaryProps
// Dependencies: []
// Exports: useSecondaryProps

// Module 5189 (useSecondaryProps)
const _module = require(dependencyMap[0]);
({ Animated: closure_2, RefreshControl: closure_3 } = _module);
let closure_4 = importDefault(dependencyMap[1]);
const useMemo = require(dependencyMap[1]).useMemo;
const jsx = require(dependencyMap[2]).jsx;

export const useSecondaryProps = function useSecondaryProps(ListHeaderComponent) {
  ListHeaderComponent = ListHeaderComponent.ListHeaderComponent;
  const require = ListHeaderComponent;
  const ListHeaderComponentStyle = ListHeaderComponent.ListHeaderComponentStyle;
  const dependencyMap = ListHeaderComponentStyle;
  const ListFooterComponent = ListHeaderComponent.ListFooterComponent;
  const ListFooterComponentStyle = ListHeaderComponent.ListFooterComponentStyle;
  const ListEmptyComponent = ListHeaderComponent.ListEmptyComponent;
  let closure_4 = ListEmptyComponent;
  const ListEmptyComponentStyle = ListHeaderComponent.ListEmptyComponentStyle;
  const useMemo = ListEmptyComponentStyle;
  const renderScrollComponent = ListHeaderComponent.renderScrollComponent;
  const jsx = renderScrollComponent;
  const refreshing = ListHeaderComponent.refreshing;
  const progressViewOffset = ListHeaderComponent.progressViewOffset;
  const onRefresh = ListHeaderComponent.onRefresh;
  const data = ListHeaderComponent.data;
  const refreshControl = ListHeaderComponent.refreshControl;
  const stickyHeaderConfig = ListHeaderComponent.stickyHeaderConfig;
  let invertedTransformStyle;
  if (ListHeaderComponent.inverted) {
    let obj = require(dependencyMap[3]);
    invertedTransformStyle = obj.getInvertedTransformStyle(tmp);
  }
  const items = [onRefresh, refreshing, progressViewOffset, refreshControl];
  const items1 = [ListHeaderComponent, ListHeaderComponentStyle, invertedTransformStyle];
  const items2 = [ListFooterComponent, ListFooterComponentStyle, invertedTransformStyle];
  const tmp5 = useMemo;
  const tmp6 = useMemo(() => {
    let tmp = refreshControl;
    if (!refreshControl) {
      let tmp3;
      if (onRefresh) {
        const obj = {};
        const _Boolean = Boolean;
        obj.refreshing = Boolean(refreshing);
        obj.progressViewOffset = progressViewOffset;
        obj.onRefresh = onRefresh;
        tmp3 = renderScrollComponent(ListFooterComponentStyle, obj);
      }
      tmp = tmp3;
    }
    return tmp;
  }, items);
  const items3 = [ListEmptyComponent, data, invertedTransformStyle, ListEmptyComponentStyle];
  const tmp7 = useMemo(() => {
    let tmp = null;
    if (ListHeaderComponent) {
      const obj = {};
      const items = [ListHeaderComponentStyle, invertedTransformStyle];
      obj.style = items;
      obj.children = ListHeaderComponent(ListHeaderComponentStyle[5]).getValidComponent(ListHeaderComponent);
      tmp = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
      const obj2 = ListHeaderComponent(ListHeaderComponentStyle[5]);
    }
    return tmp;
  }, items1);
  let backdropComponent;
  const tmp8 = useMemo(() => {
    let tmp = null;
    if (ListFooterComponent) {
      const obj = {};
      const items = [ListFooterComponentStyle, invertedTransformStyle];
      obj.style = items;
      obj.children = ListHeaderComponent(ListHeaderComponentStyle[5]).getValidComponent(ListFooterComponent);
      tmp = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
      const obj2 = ListHeaderComponent(ListHeaderComponentStyle[5]);
    }
    return tmp;
  }, items2);
  if (null != stickyHeaderConfig) {
    backdropComponent = stickyHeaderConfig.backdropComponent;
  }
  const items4 = [backdropComponent, invertedTransformStyle];
  obj = {
    refreshControl: tmp6,
    renderHeader: tmp7,
    renderFooter: tmp8,
    renderEmpty: useMemo(() => {
      if (ListEmptyComponent) {
        let obj = ListHeaderComponent(ListHeaderComponentStyle[5]);
        const validComponent = obj.getValidComponent(ListEmptyComponent);
        if (invertedTransformStyle) {
          obj = {};
          const items = [ListEmptyComponentStyle, invertedTransformStyle];
          obj.style = items;
          obj.children = validComponent;
          let tmp9 = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
        } else {
          tmp9 = validComponent;
        }
        return tmp9;
      }
      return null;
    }, items3)
  };
  const items5 = [renderScrollComponent];
  const tmp9 = useMemo(() => {
    if (ListEmptyComponent) {
      let obj = ListHeaderComponent(ListHeaderComponentStyle[5]);
      const validComponent = obj.getValidComponent(ListEmptyComponent);
      if (invertedTransformStyle) {
        obj = {};
        const items = [ListEmptyComponentStyle, invertedTransformStyle];
        obj.style = items;
        obj.children = validComponent;
        let tmp9 = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
      } else {
        tmp9 = validComponent;
      }
      return tmp9;
    }
    return null;
  }, items3);
  obj.CompatScrollView = useMemo(() => {
    if ("function" === typeof renderScrollComponent) {
      if (!obj.isComponentClass(renderScrollComponent)) {
        let CompatAnimatedScroller = ListEmptyComponent.forwardRef((arg0, ref) => callback(Object.assign({}, arg0, { ref })));
        CompatAnimatedScroller.displayName = "CustomScrollView";
      }
      return ListFooterComponent.createAnimatedComponent(CompatAnimatedScroller);
    }
    CompatAnimatedScroller = ListHeaderComponent(ListHeaderComponentStyle[6]).CompatAnimatedScroller;
    if (renderScrollComponent) {
      CompatAnimatedScroller = renderScrollComponent;
    }
  }, items5);
  obj.renderStickyHeaderBackdrop = tmp5(() => {
    let tmp = null;
    if (null != stickyHeaderConfig) {
      tmp = null;
      if (stickyHeaderConfig.backdropComponent) {
        const obj = {};
        const items = [{}, invertedTransformStyle];
        obj.style = items;
        let backdropComponent;
        if (null != stickyHeaderConfig) {
          backdropComponent = stickyHeaderConfig.backdropComponent;
        }
        obj.children = ListHeaderComponent(ListHeaderComponentStyle[5]).getValidComponent(backdropComponent);
        tmp = renderScrollComponent(ListHeaderComponent(ListHeaderComponentStyle[4]).CompatView, obj);
        const obj2 = ListHeaderComponent(ListHeaderComponentStyle[5]);
        const tmp3 = renderScrollComponent;
      }
    }
    return tmp;
  }, items4);
  return obj;
};
