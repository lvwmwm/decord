// Module ID: 1765
// Function ID: 1766
// Name: PropsRegistryGarbageCollector
// Dependencies: [1664, 1766]

// Module 1765 (PropsRegistryGarbageCollector)
import ReanimatedModule2 from "ReanimatedModule" /* 1664 */;
import _mod1766 from "module_1766" /* 1766 */;

function unprocessProps(styleProps) {
  let obj = _mod1766;
  const result = obj.unprocessColorsInProps(styleProps);
  if (Array.isArray(styleProps.boxShadow)) {
    const boxShadow = styleProps.boxShadow;
    styleProps.boxShadow = boxShadow.map((color) => {
      let obj2;
      const obj = { color: obj2.unprocessColor(color.color) };
      const merged = Object.assign(color);
      obj2 = _mod1766;
      return obj;
    });
  }
}
let obj = {
  viewsCount: 0,
  viewsMap: new Map(),
  intervalId: null,
  registerView(componentViewTag, self) {
    self = this;
    const viewsMap = this.viewsMap;
    if (!viewsMap.has(componentViewTag)) {
      const viewsMap2 = self.viewsMap;
      const result = viewsMap2.set(componentViewTag, self);
      self.viewsCount = self.viewsCount + 1;
      if (1 === self.viewsCount) {
        self.registerInterval();
      }
    }
  },
  unregisterView(componentViewTag) {
    const self = this;
    const viewsMap = this.viewsMap;
    viewsMap.delete(componentViewTag);
    this.viewsCount = this.viewsCount - 1;
    if (0 === this.viewsCount) {
      self.unregisterInterval();
    }
  },
  syncPropsBackToReact() {
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    const settledUpdates = ReanimatedModule.getSettledUpdates();
    const iter = settledUpdates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let styleProps = nextResult.styleProps;
      let viewsMap = this.viewsMap;
      let tmp3 = styleProps;
      let value = viewsMap.get(nextResult.viewTag);
      let tmp5 = unprocessProps(styleProps);
      if (value != null) {
        let result = value._syncStylePropsBackToReact(tmp3);
      }
      continue;
    }
  },
  registerInterval() {
    const syncPropsBackToReact = this.syncPropsBackToReact;
    this.intervalId = setInterval(syncPropsBackToReact.bind(this), 500);
  },
  unregisterInterval() {
    const self = this;
    if (null !== this.intervalId) {
      const _clearInterval = clearInterval;
      clearInterval(self.intervalId);
      self.intervalId = null;
    }
  }
};
new Map();

export const PropsRegistryGarbageCollector = obj;
