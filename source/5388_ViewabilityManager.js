// Module ID: 5388
// Function ID: 46166
// Name: ViewabilityManager
// Dependencies: [5382, 5368, 5369, 5389]

// Module 5388 (ViewabilityManager)
import _toConsumableArray from "_toConsumableArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export default (() => {
  class ViewabilityManager {
    constructor(arg0) {
      self = this;
      closure_0 = arg0;
      self = this;
      tmp = outer1_3(this, closure_0);
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
        let closure_0 = arg0;
        let rvManager = windowSize.rvManager;
        windowSize = rvManager.getWindowSize();
        if (undefined !== windowSize) {
          if (windowSize.shouldListenToVisibleIndices) {
            const rvManager2 = windowSize.rvManager;
            const absoluteLastScrollOffset = rvManager2.getAbsoluteLastScrollOffset();
            let num = 0;
            if (null != absoluteLastScrollOffset) {
              num = absoluteLastScrollOffset;
            }
            let _toConsumableArray = num - windowSize.rvManager.firstItemOffset;
            const bottomViewabilityInsetRef = windowSize.rvManager.props.bottomViewabilityInsetRef;
            let current;
            if (null != bottomViewabilityInsetRef) {
              current = bottomViewabilityInsetRef.current;
            }
            let num2 = 0;
            if (null != current) {
              num2 = current;
            }
            const viewabilityHelpers = windowSize.viewabilityHelpers;
            const item = viewabilityHelpers.forEach((updateViewableItems) => {
              const horizontal = windowSize.rvManager.props.horizontal;
              let tmp = null != horizontal;
              if (tmp) {
                tmp = horizontal;
              }
              updateViewableItems.updateViewableItems(tmp, _toConsumableArray, num2, windowSize, (arg0) => {
                const rvManager = windowSize.rvManager;
                return rvManager.getLayout(arg0);
              }, closure_0);
            });
          }
        }
      };
      this.clearLastReportedViewableIndices = () => {
        const viewabilityHelpers = self.viewabilityHelpers;
        const item = viewabilityHelpers.forEach((clearLastReportedViewableIndices) => clearLastReportedViewableIndices.clearLastReportedViewableIndices());
      };
      this.createViewabilityHelper = (arg0, arg1) => {
        let closure_0 = arg1;
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
        let tmp = ViewabilityManager(outer2_1[3]);
        tmp = new tmp(arg0, (arr, arr2, arr3) => {
          if (null != callback) {
            const obj = { viewableItems: arr.map((arg0) => outer1_1(arg0, true)) };
            const items = [];
            obj.changed = items.concat(outer3_2(arr2.map((arg0) => outer1_1(arg0, true))), outer3_2(arr3.map((arg0) => outer1_1(arg0, false))));
            callback(obj);
            const tmp3 = outer3_2(arr2.map((arg0) => outer1_1(arg0, true)));
          }
        });
        return tmp;
      };
      this.rvManager = arg0;
      tmp2 = null !== arg0.props.onViewableItemsChanged && undefined !== arg0.props.onViewableItemsChanged;
      if (tmp2) {
        viewabilityHelpers = self.viewabilityHelpers;
        arr = viewabilityHelpers.push(self.createViewabilityHelper(arg0.props.viewabilityConfig, (arg0) => {
          if (null != closure_0.props.onViewableItemsChanged) {
            const props = closure_0.props;
            const result = props.onViewableItemsChanged(arg0);
          }
        }));
      }
      prop = arg0.props.viewabilityConfigCallbackPairs;
      if (null == prop) {
        prop = [];
      }
      item = prop.forEach((viewabilityConfig) => {
        let closure_0 = arg1;
        const viewabilityHelpers = self.viewabilityHelpers;
        viewabilityHelpers.push(self.createViewabilityHelper(viewabilityConfig.viewabilityConfig, (arg0) => {
          let prop;
          if (null != props.props.viewabilityConfigCallbackPairs) {
            if (null != viewabilityConfigCallbackPairs[props]) {
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
  let items = [
    {
      key: "shouldListenToVisibleIndices",
      get() {
        return this.viewabilityHelpers.length > 0;
      }
    }
  ];
  return callback(ViewabilityManager, items);
})();
