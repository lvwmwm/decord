// Module ID: 16968
// Function ID: 16969
// Name: NavigationTTIRegionHierarchy
// Dependencies: [32, 19, 3, 2]
// Exports: useNavigationTTIRegionHierarchy

// Module 16968 (NavigationTTIRegionHierarchy)
import LoggerDefault from "Logger" /* 3 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

function getNavigationTTIRegionHierarchyViolation(arg0, arg1, arg2, arg3, arg4) {
  if ("include" === arg0) {
    if (arg3 > 0) {
      let str12 = "s";
      if (1 === arg3) {
        str12 = "";
      }
      const _HermesInternal3 = HermesInternal;
      let combined = "overlaps " + arg3 + " tracked descendant" + str12;
    }
    return combined;
  }
  combined = null;
  if ("exclude" === arg0) {
    combined = null;
    if (arg2) {
      if ("excluded" === arg1) {
        let combined1 = null;
        if (arg3 > 0) {
          let str9 = "s";
          if (1 === arg3) {
            str9 = "";
          }
          const _HermesInternal2 = HermesInternal;
          combined1 = "declares ignored descendants but contains " + arg3 + " tracked region" + str9;
        }
      } else if ("included" === arg1) {
        const str5 = "declares tracked descendants but no tracked region mounted";
        if (0 !== arg3) {
          let combined2 = null;
          if (arg4 > 0) {
            let str6 = "s";
            if (1 === arg4) {
              str6 = "";
            }
            const _HermesInternal = HermesInternal;
            combined2 = "declares tracked descendants but contains " + arg4 + " ignored region" + str6;
          }
        }
      } else {
        const str3 = "declares mixed descendants but no tracked region mounted";
        if (0 !== arg3) {
          if (0 === arg4) {
            const str4 = "declares mixed descendants but no ignored region mounted";
          }
        }
      }
    }
  }
}
let obj2 = new LoggerDefault("NavTTIVisualizer");
obj2.enableNativeLogger(true);
let context = noop.createContext(null);
const size = fn(2);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionHierarchy.tsx");

export const NavigationTTIRegionHierarchyContext = context;
export { getNavigationTTIRegionHierarchyViolation };
export const useNavigationTTIRegionHierarchy = function useNavigationTTIRegionHierarchy(name) {
  name = name.name;
  ({ tracking, descendantTracking, hasChildren } = name);
  let regionId;
  c3 = undefined;
  let depth;
  let updateChild;
  let sum1;
  let sum2;
  let num4;
  let num5;
  let violation;
  regionId = regionId.useId();
  context = regionId.useContext(c3);
  [obj2, c3] = name(regionId.useState(() => new Map()), 2);
  const tmp4 = name(regionId.useState(false), 2);
  getNavigationTTIRegionHierarchyViolation = tmp4[1];
  let num;
  if (context != null) {
    num = context.depth;
  }
  if (num == null) {
    num = -1;
  }
  depth = num + 1;
  updateChild = obj.useCallback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    _undefined((get) => {
      value = get.get(closure_0);
      if (null == closure_1) {
        if (null == value) {
          return get;
        }
      }
      if (null != closure_1) {
        let included;
        if (value != null) {
          included = value.included;
        }
        if (included === tmp3.included) {
          if (value.excluded === tmp3.excluded) {
            return get;
          }
        }
      }
      const map = new Map(get);
      if (null == closure_1) {
        map.delete(tmp);
      } else {
        const result = map.set(tmp, tmp3);
      }
      return map;
    });
  }, []);
  const items = [depth, updateChild];
  let includedDescendants = 0;
  sum1 = 0;
  let excludedDescendants = 0;
  sum2 = 0;
  const contextValue = obj.useMemo(() => ({ updateChild, depth }), items);
  const values = obj2.values();
  for (const item10049 of values) {
    sum1 = includedDescendants + item10049.included;
    includedDescendants = sum1;
    sum2 = excludedDescendants + item10049.excluded;
    excludedDescendants = sum2;
    continue;
  }
  num4 = 0;
  if ("include" === tracking) {
    num4 = 1;
  }
  num5 = 0;
  if ("exclude" === tracking) {
    num5 = 1;
  }
  const items1 = [excludedDescendants, includedDescendants, num5, num4, context, regionId];
  const effect = regionId.useEffect(() => {
    if (context != null) {
      obj2 = { included: num4 + sum1, excluded: num5 + sum2 };
      context.updateChild(regionId, obj2);
    }
    return () => {
      let updateChildResult;
      if (context != null) {
        updateChildResult = context.updateChild(regionId, null);
      }
      return updateChildResult;
    };
  }, items1);
  const effect1 = regionId.useEffect(() => {
    closure_0 = requestAnimationFrame(() => closure_1_4(true));
    return () => cancelAnimationFrame(closure_0);
  }, []);
  violation = null;
  if (tmp4[0]) {
    violation = getNavigationTTIRegionHierarchyViolation(tracking, descendantTracking, hasChildren, includedDescendants, excludedDescendants);
  }
  regionId.useRef(null);
  const items2 = [name, violation];
  const effect2 = obj3.useEffect(() => {
    let tmp2 = null != violation;
    if (tmp2) {
      tmp2 = tmp !== ref.current;
    }
    if (tmp2) {
      ref.current = tmp;
      const _HermesInternal = HermesInternal;
      obj2.warn("" + name + ": " + tmp);
    }
  }, items2);
  return { regionId, contextValue, includedDescendants, excludedDescendants, depth, violation };
};
