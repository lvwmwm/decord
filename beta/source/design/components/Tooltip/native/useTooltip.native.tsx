// Module ID: 10590
// Function ID: 10591
// Name: useTooltip
// Dependencies: [32, 5, 19, 21, 3, 1255, 6578, 10591, 1479, 10595, 2]
// Exports: useTooltip, useTooltipHelper

// Module 10590 (useTooltip)
import LoggerDefault from "Logger" /* 3 */;
import Fragment from "Fragment" /* 21 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import AnimatedTooltip2 from "AnimatedTooltip" /* 10591 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_2, dependencyMap, importDefault, ref2, surfaceRef;

const jsx = Fragment.jsx;
let tmp2 = new LoggerDefault("useTooltip.native");
const logger = tmp2;
const result = size.fileFinishedImporting("design/components/Tooltip/native/useTooltip.native.tsx");

export const useTooltip = function useTooltip(ref, memo) {
  let obj = react;
  const tmp2 = dependencyMap;
  const useRef = react.useRef;
  const tmp = _require;
  const obj2 = require("v1");
  ref = useRef(obj2.v4());
  _require = memo;
  const context = react.useContext(require("LayerContext").LayerContext);
  if (null == context) {
    logger.warn("Tooltip called with no layer context. It will not show without a LayerScope.");
  }
  let items = [context, memo];
  const callback = obj.useCallback((arg0, targetMeasurements, surfaceMeasurements) => {
    const AnimatedTooltip = AnimatedTooltip2.AnimatedTooltip;
    const merged = Object.assign(memo);
    context.add(arg0, <AnimatedTooltip targetMeasurements={arg1} surfaceMeasurements={arg2} />);
  }, items);
  let closure_1 = ref;
  const tmp8 = context(1479)();
  let closure_3 = tmp8;
  let closure_4 = obj.useRef(tmp8);
  const context1 = obj.useContext(tmp(6578).LayerContext);
  let closure_6 = obj.useRef(null);
  const items1 = [context1, ref];
  const effect = obj.useEffect(() => {
    let current;
    current = current.current;
    return () => {
      if (null != current) {
        context1.remove(tmp);
      }
      ref.current = null;
    };
  }, items1);
  const items2 = [context1.surfaceRef, ref, ref, callback];
  const callback1 = obj.useCallback((arg0) => {
    function measureHelper(current) {
      return obj(...arguments);
    }
    let closure_0 = arg0;
    let obj = function _measureHelper() {
      obj = _asyncToGenerator(async (arg0) => {
        ref = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (async (arg0, value) => {
          if (ref2 === 2) {
            ref2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              let closure_4;
              ref2 = 2;
              if (0 === surfaceRef) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = undefined;
                  closure_2 = undefined;
                  closure_3 = undefined;
                  closure_4 = undefined;
                  c4 = 1;
                  const obj5 = closure_2_0(closure_2_2[9]);
                  const measurements = obj5.getMeasurements(surfaceRef.surfaceRef, closure_2_0);
                  const items = [measurements, ];
                  const obj6 = closure_2_0(closure_2_2[9]);
                  items[1] = obj6.getMeasurements(closure_1, closure_2_0);
                  surfaceRef = 2;
                  ref2 = 1;
                  const obj4 = { value: Promise.all(items), done: false };
                  return obj4;
                }
              } else {
                if (1 === surfaceRef) {
                  c4 = 0;
                } else if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = value;
                  closure_2 = closure_2_3(closure_1, 2);
                  closure_3 = closure_2[0];
                  closure_4 = closure_2[1];
                  const tmp9 = null != ref.current && ref2.current === ref;
                  if (tmp9) {
                    closure_2(ref.current, closure_4, closure_3);
                  }
                  c4 = 0;
                }
                ref2 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp18) {
              closure_3 = tmp18;
              if (0 === c4) {
                ref2 = 3;
                throw tmp18;
              } else {
                surfaceRef = 1;
              }
            }
          }
        })();
      });
      return obj(...arguments);
    };
    obj = ref(callback[5]);
    ref2.current = obj.v4();
    return measureHelper(ref2.current);
  }, items2);
  const items3 = [context1, tmp8, callback1, ref];
  const effect1 = obj.useEffect(() => {
    if (ref.current !== closure_3) {
      if (null != ref.current) {
        context1.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback1(ref.current !== closure_3);
  }, items3);
  return callback1;
};
export const useTooltipHelper = function useTooltipHelper(ref, targetRef, callback) {
  let context;
  _require = ref;
  importDefault = targetRef;
  dependencyMap = callback;
  const tmp = useWindowDimensionsDefault();
  let closure_3 = tmp;
  let closure_4 = context.useRef(tmp);
  context = context.useContext(require("LayerContext").LayerContext);
  let closure_6 = context.useRef(null);
  const items = [context, ref];
  const effect = context.useEffect(() => {
    let current;
    current = current.current;
    return () => {
      if (null != current) {
        context1.remove(tmp);
      }
      ref.current = null;
    };
  }, items);
  const items1 = [context.surfaceRef, targetRef, ref, callback];
  callback = context.useCallback((arg0) => {
    function measureHelper(current) {
      return obj(...arguments);
    }
    let closure_0 = arg0;
    let obj = function _measureHelper() {
      obj = _asyncToGenerator(async (arg0) => {
        ref = arg0;
        let c5 = 0;
        let c6 = 0;
        let c4 = 0;
        return (async (arg0, value) => {
          if (ref2 === 2) {
            ref2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              return { value, done: true };
            } else {
              return { value: "HermesInternal", done: null };
            }
          } else {
            try {
              let closure_4;
              ref2 = 2;
              if (0 === surfaceRef) {
                if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = undefined;
                  closure_2 = undefined;
                  closure_3 = undefined;
                  closure_4 = undefined;
                  c4 = 1;
                  const obj5 = closure_2_0(closure_2_2[9]);
                  const measurements = obj5.getMeasurements(surfaceRef.surfaceRef, closure_2_0);
                  const items = [measurements, ];
                  const obj6 = closure_2_0(closure_2_2[9]);
                  items[1] = obj6.getMeasurements(closure_1, closure_2_0);
                  surfaceRef = 2;
                  ref2 = 1;
                  const obj4 = { value: Promise.all(items), done: false };
                  return obj4;
                }
              } else {
                if (1 === surfaceRef) {
                  c4 = 0;
                } else if (arg0 === 1) {
                  ref2 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 0;
                  ref2 = 3;
                  return { value, done: true };
                } else {
                  closure_1 = value;
                  closure_2 = closure_2_3(closure_1, 2);
                  closure_3 = closure_2[0];
                  closure_4 = closure_2[1];
                  const tmp9 = null != ref.current && ref2.current === ref;
                  if (tmp9) {
                    closure_2(ref.current, closure_4, closure_3);
                  }
                  c4 = 0;
                }
                ref2 = 3;
                return { value: "HermesInternal", done: null };
              }
            } catch (tmp18) {
              closure_3 = tmp18;
              if (0 === c4) {
                ref2 = 3;
                throw tmp18;
              } else {
                surfaceRef = 1;
              }
            }
          }
        })();
      });
      return obj(...arguments);
    };
    obj = ref(callback[5]);
    ref2.current = obj.v4();
    return measureHelper(ref2.current);
  }, items1);
  const items2 = [context, tmp, callback, ref];
  const effect1 = context.useEffect(() => {
    if (ref.current !== closure_3) {
      if (null != ref.current) {
        context1.remove(tmp4.current);
      }
      tmp.current = tmp2;
    }
    callback1(ref.current !== closure_3);
  }, items2);
  return callback;
};
