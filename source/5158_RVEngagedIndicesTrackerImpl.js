// Module ID: 5158
// Function ID: 43720
// Name: RVEngagedIndicesTrackerImpl
// Dependencies: []

// Module 5158 (RVEngagedIndicesTrackerImpl)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);

export const RVEngagedIndicesTrackerImpl = () => {
  class RVEngagedIndicesTrackerImpl {
    constructor() {
      tmp = closure_3(this, RVEngagedIndicesTrackerImpl);
      this.scrollOffset = 0;
      this.drawDistance = RVEngagedIndicesTrackerImpl(closure_1[3]).PlatformConfig.defaultDrawDistance;
      this.enableOffsetProjection = true;
      this.averageRenderTime = 16;
      this.forceDisableOffsetProjection = false;
      this.engagedIndices = RVEngagedIndicesTrackerImpl(closure_1[4]).ConsecutiveNumbers.EMPTY;
      this.smallMultiplier = 0.3;
      this.largeMultiplier = 0.7;
      items = ["TRACEPARENT_REGEXP", "spinnerVisibleStart", "namespaceURI"];
      items[3] = -0.1;
      items[4] = -0.1;
      this.velocityHistory = items;
      this.velocityIndex = 0;
      return;
    }
  }
  const arg1 = RVEngagedIndicesTrackerImpl;
  let obj = {
    key: "updateScrollOffset",
    value: function updateScrollOffset(scrollOffset, arg1, getWindowsSize) {
      const self = this;
      this.scrollOffset = scrollOffset;
      const size = getWindowsSize.getWindowsSize();
      const isHorizontalResult = getWindowsSize.isHorizontal();
      if (!arg1) {
        const isScrollingBackwardResult = self.isScrollingBackward();
        let projectedScrollOffset = scrollOffset;
        if (self.enableOffsetProjection) {
          projectedScrollOffset = scrollOffset;
          if (!self.forceDisableOffsetProjection) {
            projectedScrollOffset = self.getProjectedScrollOffset(scrollOffset, self.averageRenderTime);
          }
        }
        const result = 2 * self.drawDistance;
        const _Math = Math;
        const sum = projectedScrollOffset + isHorizontalResult ? size.width : size.height;
        const rounded = Math.ceil(result * isScrollingBackwardResult ? self.largeMultiplier : self.smallMultiplier);
        const _Math2 = Math;
        const _Math3 = Math;
        const rounded1 = Math.ceil(result * isScrollingBackwardResult ? self.smallMultiplier : self.largeMultiplier);
        const bound = Math.max(0, projectedScrollOffset - rounded);
        const _Math4 = Math;
        const sum1 = sum + rounded1;
        const sum2 = sum1 + Math.max(0, rounded - projectedScrollOffset);
        const size2 = getWindowsSize.getLayoutSize();
        const tmp14 = isHorizontalResult ? size2.width : size2.height;
        let bound1 = bound;
        let tmp16 = sum2;
        if (sum2 > tmp14) {
          const _Math5 = Math;
          bound1 = Math.max(0, bound - (sum2 - tmp14));
          tmp16 = tmp14;
        }
        const visibleLayouts = getWindowsSize.getVisibleLayouts(bound1, tmp16);
        self.engagedIndices = visibleLayouts;
        let tmp17;
        if (!visibleLayouts.equals(self.engagedIndices)) {
          tmp17 = visibleLayouts;
        }
        return tmp17;
      } else {
        const result1 = self.updateVelocityHistory(isHorizontalResult ? arg1.x : arg1.y);
      }
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "updateVelocityHistory",
    value: function updateVelocityHistory(arg0) {
      this.velocityHistory[this.velocityIndex] = arg0;
      this.velocityIndex = (this.velocityIndex + 1) % this.velocityHistory.length;
    }
  };
  items[1] = obj;
  obj = {
    key: "isScrollingBackward",
    value: function isScrollingBackward() {
      const self = this;
      let num = 0;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      let num5 = 0;
      if (0 < this.velocityHistory.length) {
        do {
          if (self.velocityHistory[num3] > 0) {
            let sum = num + 1;
            let sum1 = num2;
          } else {
            sum = num;
            sum1 = num2;
            if (self.velocityHistory[num3] < 0) {
              sum1 = num2 + 1;
              sum = num;
            }
          }
          num3 = num3 + 1;
          num = sum;
          num2 = sum1;
          num4 = sum;
          num5 = sum1;
        } while (num3 < self.velocityHistory.length);
      }
      return num4 < num5;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getMedianVelocity",
    value: function getMedianVelocity() {
      const sorted = callback(this.velocityHistory).sort((arg0, arg1) => arg0 - arg1);
      if (sorted.length % 2 === 1) {
        const _Math = Math;
        return sorted[Math.floor(Math, length / 2)];
      } else {
        const result = length / 2;
        return (sorted[result - 1] + sorted[result]) / 2;
      }
      const obj = callback(this.velocityHistory);
    }
  };
  items[4] = {
    key: "getProjectedScrollOffset",
    value: function getProjectedScrollOffset(scrollOffset, averageRenderTime) {
      return scrollOffset + this.getMedianVelocity() * averageRenderTime;
    }
  };
  items[5] = {
    key: "computeVisibleIndices",
    value: function computeVisibleIndices(getWindowsSize) {
      const size = getWindowsSize.getWindowsSize();
      const scrollOffset = this.scrollOffset;
      return getWindowsSize.getVisibleLayouts(scrollOffset, scrollOffset + getWindowsSize.isHorizontal() ? size.width : size.height);
    }
  };
  items[6] = {
    key: "getEngagedIndices",
    value: function getEngagedIndices() {
      return this.engagedIndices;
    }
  };
  items[7] = {
    key: "setScrollDirection",
    value: function setScrollDirection(arg0) {
      const self = this;
      if ("forward" === arg0) {
        self.velocityHistory = ["TRACEPARENT_REGEXP", "spinnerVisibleStart", "namespaceURI", "REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND", "TRACEPARENT_REGEXP"];
        self.velocityIndex = 0;
      } else {
        const items = ["TRACEPARENT_REGEXP", "spinnerVisibleStart", "namespaceURI", -0.1, -0.1];
        self.velocityHistory = items;
        self.velocityIndex = 0;
      }
    }
  };
  items[8] = {
    key: "resetVelocityHistory",
    value: function resetVelocityHistory() {
      const self = this;
      const setScrollDirection = this.setScrollDirection;
      if (this.isScrollingBackward()) {
        setScrollDirection("backward");
      } else {
        setScrollDirection("forward");
      }
    }
  };
  return callback(RVEngagedIndicesTrackerImpl, items);
}();
