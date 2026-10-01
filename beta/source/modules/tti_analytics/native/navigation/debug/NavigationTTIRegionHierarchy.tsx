// Module ID: 16182
// Function ID: 16183
// Name: NavigationTTIRegionHierarchy
// Dependencies: [32, 19, 3, 2]
// Exports: useNavigationTTIRegionHierarchy

// Module 16182 (NavigationTTIRegionHierarchy)
import LoggerDefault from "Logger" /* 3 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let map;

function getNavigationTTIRegionHierarchyViolation(arg0, arg1, arg2, arg3, arg4) {
  let combined;
  if ("include" === arg0) {
    if (arg3 > 0) {
      let str12 = "s";
      if (1 === arg3) {
        str12 = "";
      }
      const _HermesInternal3 = HermesInternal;
      combined = "overlaps " + arg3 + " tracked descendant" + str12;
    }
    return combined;
  }
  combined = null;
  if ("exclude" === arg0) {
    combined = null;
    if (arg2) {
      let str3;
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
        str3 = combined1;
      } else if ("included" === arg1) {
        let str5 = "declares tracked descendants but no tracked region mounted";
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
          str5 = combined2;
        }
        str3 = str5;
      } else {
        str3 = "declares mixed descendants but no tracked region mounted";
        if (0 !== arg3) {
          let str4 = null;
          if (0 === arg4) {
            str4 = "declares mixed descendants but no ignored region mounted";
          }
          str3 = str4;
        }
      }
      combined = str3;
    }
  }
}
let obj2 = new LoggerDefault("NavTTIVisualizer");
obj2.enableNativeLogger(true);
let context = react.createContext(null);
let result = size.fileFinishedImporting("modules/tti_analytics/native/navigation/debug/NavigationTTIRegionHierarchy.tsx");

export const NavigationTTIRegionHierarchyContext = context;
export { getNavigationTTIRegionHierarchyViolation };
export const useNavigationTTIRegionHierarchy = function useNavigationTTIRegionHierarchy(name) {
  let _undefined;
  let c3;
  let closure_4;
  let descendantTracking;
  let hasChildren;
  let tracking;
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
  let ref;
  let obj = regionId;
  regionId = regionId.useId();
  context = regionId.useContext(c3);
  const tmp3 = name(regionId.useState(() => {
    map = new Map();
    return map;
  }), 2);
  [obj2, c3] = tmp3;
  const tmp4 = name(regionId.useState(false), 2);
  getNavigationTTIRegionHierarchyViolation = tmp4[1];
  let num;
  const first = tmp4[0];
  if (context != null) {
    num = context.depth;
  }
  if (num == null) {
    num = -1;
  }
  depth = num + 1;
  updateChild = obj.useCallback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const tmp = _undefined((get) => {
      const value = get.get(closure_0);
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
        if (included === closure_1.included) {
          if (value.excluded === closure_1.excluded) {
            return get;
          }
        }
      }
      map = new Map(get);
      if (null == closure_1) {
        map.delete(closure_0);
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
    let obj = context;
    if (context != null) {
      obj2 = { included: num4 + sum1, excluded: num5 + sum2 };
      let updateChildResult = obj.updateChild(regionId, obj2);
    }
    return () => {
      let updateChildResult;
      const obj = context;
      if (context != null) {
        updateChildResult = obj.updateChild(regionId, null);
      }
      return updateChildResult;
    };
  }, items1);
  const effect1 = regionId.useEffect(() => {
    let closure_0 = requestAnimationFrame(() => closure_1_4(true));
    return () => cancelAnimationFrame(closure_0);
  }, []);
  violation = null;
  if (first) {
    violation = getNavigationTTIRegionHierarchyViolation(tracking, descendantTracking, hasChildren, includedDescendants, excludedDescendants);
  }
  ref = obj3.useRef(null);
  const items2 = [name, violation];
  const effect2 = obj3.useEffect(() => {
    const tmp2 = null != violation && tmp !== ref.current;
    if (tmp2) {
      ref.current = violation;
      const _HermesInternal = HermesInternal;
      obj2.warn("" + name + ": " + violation);
    }
  }, items2);
  return { regionId, contextValue, includedDescendants, excludedDescendants, depth, violation };
};
