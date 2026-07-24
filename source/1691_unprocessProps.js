// Module ID: 1691
// Function ID: 18714
// Name: unprocessProps
// Dependencies: [1590, 1692]

// Module 1691 (unprocessProps)
const require = arg1;
const dependencyMap = arg6;
function unprocessProps(styleProps) {
  const result = require(1692) /* pnpm_colorsTs1 */.unprocessColorsInProps(styleProps);
  (function unprocessBoxShadow(boxShadow) {
    if (Array.isArray(boxShadow.boxShadow)) {
      boxShadow = boxShadow.boxShadow;
      boxShadow.boxShadow = boxShadow.map((color) => {
        const obj = { color: outer2_0(outer2_1[1]).unprocessColor(color.color) };
        return Object.assign({}, color, obj);
      });
    }
  })(styleProps);
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
  unregisterView(portal) {
    const self = this;
    const viewsMap = this.viewsMap;
    viewsMap.delete(portal);
    this.viewsCount = this.viewsCount - 1;
    if (0 === this.viewsCount) {
      self.unregisterInterval();
    }
  },
  syncPropsBackToReact() {
    const ReanimatedModule = require(1590) /* ReanimatedModule */.ReanimatedModule;
    const settledUpdates = ReanimatedModule.getSettledUpdates();
    const iter = settledUpdates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let styleProps = nextResult.styleProps;
      let viewsMap = this.viewsMap;
      let tmp3 = styleProps;
      let value = viewsMap.get(nextResult.viewTag);
      let obj = value;
      let tmp5 = unprocessProps;
      let tmp6 = unprocessProps(styleProps);
      if (null != value) {
        let tmp7 = value;
        let tmp8 = styleProps;
        let result = obj._syncStylePropsBackToReact(tmp3);
      }
      continue;
    }
  },
  registerInterval(arg0) {
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
arg5.PropsRegistryGarbageCollector = obj;
