// Module ID: 1870
// Function ID: 1871
// Name: PropsRegistryGarbageCollector
// Dependencies: [1666, 1682]

// Module 1870 (PropsRegistryGarbageCollector)
import ReanimatedModule2 from "ReanimatedModule" /* 1666 */;
import colors from "colors" /* 1682 */;

let colorStops;

function unprocessProps(boxShadow) {
  function unprocessBackgroundImage(boxShadow) {
    const items = ["backgroundImage", "experimental_backgroundImage"];
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = boxShadow[nextResult];
      let arr2 = tmp3;
      let _Array = Array;
      let tmp2 = nextResult;
      if (Array.isArray(tmp3)) {
        boxShadow[tmp2] = arr2.map((colorStops) => {
          let combined;
          let obj;
          colorStops = colorStops.colorStops;
          const mapped = colorStops.map(closure_1_3);
          if ("linear-gradient" === colorStops.type) {
            const obj2 = { direction: combined, colorStops: mapped };
            const merged = Object.assign(colorStops);
            const value = iter.value;
            combined = value;
            if ("angle" === colorStops.direction.type) {
              const _HermesInternal = HermesInternal;
              combined = "" + value + "deg";
            }
            obj = obj2;
          } else {
            obj = { colorStops: mapped };
            const merged1 = Object.assign(colorStops);
          }
          return obj;
        });
      }
      continue;
    }
  }
  let obj = colors;
  const result = obj.unprocessColorsInProps(boxShadow);
  if (Array.isArray(boxShadow.boxShadow)) {
    boxShadow = boxShadow.boxShadow;
    boxShadow.boxShadow = boxShadow.map((color) => {
      let obj2;
      const obj = { color: obj2.unprocessColor(color.color) };
      const merged = Object.assign(color);
      obj2 = colors;
      return obj;
    });
  }
  let tmp2 = unprocessBackgroundImage(boxShadow);
}
function unprocessColorStop(arg0) {
  let color;
  let position;
  let tmp4;
  ({ color, position } = arg0);
  let unprocessColorResult = null;
  if (null !== color) {
    const obj = colors;
    unprocessColorResult = obj.unprocessColor(color);
  }
  const obj2 = { color: unprocessColorResult, positions: tmp4 };
  tmp4 = undefined;
  if (null !== position) {
    const items = [position];
    tmp4 = items;
  }
  return obj2;
}
let obj = {
  viewsMap: new Map(),
  intervalId: null,
  registerView(componentViewTag, self) {
    self = this;
    const viewsMap = this.viewsMap;
    if (!viewsMap.has(componentViewTag)) {
      const viewsMap2 = self.viewsMap;
      const result = viewsMap2.set(componentViewTag, self);
      if (1 === self.viewsMap.size) {
        self.registerInterval();
      }
    }
  },
  unregisterView(componentViewTag) {
    const self = this;
    const viewsMap = this.viewsMap;
    const deleteResult = viewsMap.delete(componentViewTag) && 0 === self.viewsMap.size;
    if (deleteResult) {
      self.unregisterInterval();
    }
  },
  syncPropsBackToReact() {
    let styleProps;
    let viewTag;
    const ReanimatedModule = ReanimatedModule2.ReanimatedModule;
    const viewsMap = this.viewsMap;
    const items = [...viewsMap.keys()];
    const settledUpdates = ReanimatedModule.getSettledUpdates(items);
    const iter = settledUpdates[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ viewTag, styleProps } = nextResult);
      let tmp3 = styleProps;
      if (null !== styleProps) {
        let viewsMap2 = this.viewsMap;
        let value = viewsMap2.get(viewTag);
        let tmp7 = unprocessProps(tmp3);
        if (value != null) {
          let result = value._syncStylePropsBackToReact(tmp3);
        }
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
export { unprocessProps };
