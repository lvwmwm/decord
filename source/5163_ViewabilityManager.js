// Module ID: 5163
// Function ID: 43729
// Name: ViewabilityManager
// Dependencies: []

// Module 5163 (ViewabilityManager)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);

export default () => {
  class ViewabilityManager {
    constructor(arg0) {
      self = this;
      ViewabilityManager = arg0;
      self = this;
      tmp = closure_3(this, ViewabilityManager);
      this.viewabilityHelpers = [];
      this.hasInteracted = false;
      this.dispose = () => {
        const viewabilityHelpers = self.viewabilityHelpers;
        const item = viewabilityHelpers.forEach((dispose) => dispose.dispose());
      };
      this.onVisibleIndicesChanged = (arg0) => {
        self.updateViewableItems(arg0);
      };
      this.recordInteraction = () => {
        if (!self.hasInteracted) {
          self.hasInteracted = true;
          const viewabilityHelpers = self.viewabilityHelpers;
          const item = viewabilityHelpers.forEach((arg0) => {
            arg0.hasInteracted = true;
          });
          self.updateViewableItems();
        }
      };
      this.updateViewableItems = (arg0) => {
        const rvManager = self.rvManager;
        const windowSize = rvManager.getWindowSize();
        const self = windowSize;
        if (undefined !== windowSize) {
          if (self.shouldListenToVisibleIndices) {
            const rvManager2 = self.rvManager;
            const absoluteLastScrollOffset = rvManager2.getAbsoluteLastScrollOffset();
            let num = 0;
            if (null != absoluteLastScrollOffset) {
              num = absoluteLastScrollOffset;
            }
            let closure_2 = num - self.rvManager.firstItemOffset;
            const bottomViewabilityInsetRef = self.rvManager.props.bottomViewabilityInsetRef;
            let current;
            if (null != bottomViewabilityInsetRef) {
              current = bottomViewabilityInsetRef.current;
            }
            let num2 = 0;
            if (null != current) {
              num2 = current;
            }
            const viewabilityHelpers = self.viewabilityHelpers;
            const item = viewabilityHelpers.forEach((updateViewableItems) => {
              const horizontal = windowSize.rvManager.props.horizontal;
              let tmp = null != horizontal;
              if (tmp) {
                tmp = horizontal;
              }
              updateViewableItems.updateViewableItems(tmp, closure_2, num2, windowSize, (arg0) => {
                const rvManager = rvManager.rvManager;
                return rvManager.getLayout(arg0);
              }, updateViewableItems);
            });
          }
        }
      };
      this.clearLastReportedViewableIndices = () => {
        const viewabilityHelpers = self.viewabilityHelpers;
        const item = viewabilityHelpers.forEach((clearLastReportedViewableIndices) => clearLastReportedViewableIndices.clearLastReportedViewableIndices());
      };
      this.createViewabilityHelper = (arg0, arg1) => {
        arg0 = arg1;
        function mapViewToken(index, isViewable) {
          if (undefined !== mapViewToken.rvManager.props.data[index]) {
            if (undefined !== mapViewToken.rvManager.props.keyExtractor) {
              const props = mapViewToken.rvManager.props;
              let keyExtractorResult = props.keyExtractor(tmp, index);
            }
            const obj = { index, isViewable, item: tmp, key: keyExtractorResult };
            const _Date = Date;
            obj.timestamp = Date.now();
            return obj;
          }
          keyExtractorResult = index.toString();
        }
        let tmp = arg0(mapViewToken[3]);
        tmp = new tmp(arg0, (arr, arr2, arr3) => {
          if (null != arr2) {
            const obj = { viewableItems: arr.map((arg0) => callback(arg0, true)) };
            const items = [];
            obj.changed = items.concat(callback(arr2.map((arg0) => callback(arg0, true))), callback(arr3.map((arg0) => callback(arg0, false))));
            arr2(obj);
            const tmp3 = callback(arr2.map((arg0) => callback(arg0, true)));
          }
        });
        return tmp;
      };
      this.rvManager = arg0;
      tmp2 = null !== arg0.props.onViewableItemsChanged && undefined !== arg0.props.onViewableItemsChanged;
      if (tmp2) {
        viewabilityHelpers = self.viewabilityHelpers;
        arr = viewabilityHelpers.push(self.createViewabilityHelper(arg0.props.viewabilityConfig, (arg0) => {
          if (null != arg0.props.onViewableItemsChanged) {
            const props = arg0.props;
            const result = props.onViewableItemsChanged(arg0);
          }
        }));
      }
      prop = arg0.props.viewabilityConfigCallbackPairs;
      if (null == prop) {
        prop = [];
      }
      item = prop.forEach((viewabilityConfig) => {
        viewabilityConfig = arg1;
        const viewabilityHelpers = self.viewabilityHelpers;
        viewabilityHelpers.push(self.createViewabilityHelper(viewabilityConfig.viewabilityConfig, (arg0) => {
          let prop;
          if (null != arg1.props.viewabilityConfigCallbackPairs) {
            if (null != viewabilityConfigCallbackPairs[closure_0]) {
              prop = tmp3.onViewableItemsChanged;
            }
          }
          if (null != prop) {
            prop(arg0);
          }
        }));
      });
      return;
    }
  }
  const importDefault = ViewabilityManager;
  const items = [
    {
      key: "shouldListenToVisibleIndices",
      get() {
        return this.viewabilityHelpers.length > 0;
      }
    }
  ];
  return callback(ViewabilityManager, items);
}();
