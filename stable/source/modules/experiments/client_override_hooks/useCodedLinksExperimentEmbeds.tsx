// Module ID: 10883
// Function ID: 10884
// Name: useCodedLinksExperimentEmbeds
// Dependencies: [32, 19, 1378, 4752, 1247, 558, 576, 504, 10884, 10885, 2]
// Exports: canSeeExperimentEmbeds

// Module 10883 (useCodedLinksExperimentEmbeds)
import react2 from "react" /* 576 */;
import useLegacyExperiments from "useLegacyExperiments" /* 10884 */;
import useApexExperiments from "useApexExperiments" /* 10885 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1378 */;
import ExperimentStore from "ExperimentStore" /* 4752 */;
import ApexExperimentStore from "ApexExperimentStore" /* 1247 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let tmp;
const get_initialized = tmp(504);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp4;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    const fn = function s() {
      const items = [UserStore];
      const first = _slicedToArray(items, 1)[0];
      const currentUser = first.getCurrentUser();
      let isStaffResult;
      if (currentUser != null) {
        isStaffResult = currentUser.isStaff();
      }
      if (!isStaffResult) {
        const currentUser1 = first.getCurrentUser();
        let isStaffPersonalResult;
        if (currentUser1 != null) {
          isStaffPersonalResult = currentUser1.isStaffPersonal();
        }
        isStaffResult = isStaffPersonalResult;
      }
      return isStaffResult;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  return tmpResult.useStateFromStores(tmp4, tmp5);
}) : (() => {
  let items = [UserStore];
  const obj = get_initialized;
  return obj.useStateFromStores(items, () => {
    const items = [UserStore];
    const first = _slicedToArray(items, 1)[0];
    const currentUser = first.getCurrentUser();
    let isStaffResult;
    if (currentUser != null) {
      isStaffResult = currentUser.isStaff();
    }
    if (!isStaffResult) {
      const currentUser1 = first.getCurrentUser();
      let isStaffPersonalResult;
      if (currentUser1 != null) {
        isStaffPersonalResult = currentUser1.isStaffPersonal();
      }
      isStaffResult = isStaffPersonalResult;
    }
    return isStaffResult;
  });
});
let closure_7 = tmp2;
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = { legacyExperiments: {}, legacyOverridesInfo: {}, apexExperiments: {}, apexOverridesInfo: {} };
ReactCompilerGating = ReactCompilerGating_mod;
function canSeeExperimentEmbeds() {
  let tmp = arg0;
  if (arg0 === undefined) {
    const items = [UserStore];
    tmp = items;
  }
  const first = _slicedToArray(tmp, 1)[0];
  const currentUser = first.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  if (!isStaffResult) {
    const currentUser1 = first.getCurrentUser();
    let isStaffPersonalResult;
    if (currentUser1 != null) {
      isStaffPersonalResult = currentUser1.isStaffPersonal();
    }
    isStaffResult = isStaffPersonalResult;
  }
  return isStaffResult;
}
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let closure_0;
  let first;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp16;
  let tmp17;
  let tmp20;
  let tmp21;
  let tmp24;
  let tmp7;
  let tmp9;
  let tmp = _require;
  const obj = require("react");
  const cResult = obj.c(22);
  const tmp4 = closure_7();
  _require = tmp4;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ExperimentStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4) {
    const fn = function s() {
      let registeredExperiments;
      const tmp = closure_0;
      if (tmp) {
        registeredExperiments = ExperimentStore.getRegisteredExperiments();
      } else {
        registeredExperiments = closure_8;
      }
      return registeredExperiments;
    };
    cResult[1] = tmp4;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ExperimentStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp4) {
    class O {
      constructor() {
        let allExperimentOverrideDescriptors;
        const tmp = closure_0;
        if (tmp) {
          allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      }
    }
    cResult[4] = tmp4;
    cResult[5] = O;
    tmp11 = O;
  } else {
    class O {
      constructor() {
        let allExperimentOverrideDescriptors;
        const tmp = closure_0;
        if (tmp) {
          allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      }
    }
  }
  const tmpResult9 = tmp(504);
  const stateFromStoresObject1 = tmpResult9.useStateFromStoresObject(tmp9, tmp11);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor() {
        let allExperimentOverrideDescriptors;
        const tmp = closure_0;
        if (tmp) {
          allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      }
    }
    const items2 = [ApexExperimentStore];
    cResult[6] = items2;
    tmp13 = items2;
  } else {
    class O {
      constructor() {
        let allExperimentOverrideDescriptors;
        const tmp = closure_0;
        if (tmp) {
          allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
        } else {
          allExperimentOverrideDescriptors = closure_9;
        }
        return allExperimentOverrideDescriptors;
      }
    }
  }
  if (cResult[7] !== tmp4) {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    cResult[7] = tmp4;
    cResult[8] = F;
    tmp14 = F;
  } else {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  const tmpResult10 = tmp(504);
  const stateFromStores = tmpResult10.useStateFromStores(tmp13, tmp14);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    const items3 = [ApexExperimentStore];
    cResult[9] = items3;
    tmp16 = items3;
  } else {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  if (cResult[10] !== tmp4) {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    cResult[10] = tmp4;
    cResult[11] = tmp18;
    tmp17 = tmp18;
  } else {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  const tmpResult11 = tmp(504);
  const stateFromStores1 = tmpResult11.useStateFromStores(tmp16, tmp17);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    const items4 = [ApexExperimentStore];
    cResult[12] = items4;
    tmp20 = items4;
  } else {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  if (cResult[13] !== tmp4) {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    cResult[13] = tmp4;
    cResult[14] = tmp22;
    tmp21 = tmp22;
  } else {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  const tmpResult12 = tmp(504);
  const stateFromStores2 = tmpResult12.useStateFromStores(tmp20, tmp21);
  if (cResult[15] === stateFromStores2) {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  if (tmp4) {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
    const tmpResult13 = tmp(10884);
    tmp25[0] = tmpResult13.parseRegisteredExperiments(stateFromStoresObject);
    const tmpResult14 = tmp(10884);
    tmp25[1] = tmpResult14.getLegacyOverridesInfo(stateFromStoresObject1);
    const tmpResult15 = tmp(10885);
    tmp25[2] = tmpResult15.mergeApexExperiments(stateFromStores, stateFromStores1);
    const tmpResult16 = tmp(10885);
    tmp25[3] = tmpResult16.getApexExperimentOverridesInfo(stateFromStores2);
    tmp24 = tmp25;
  } else {
    class F {
      constructor() {
        let experimentsMetadata;
        const tmp = closure_0;
        if (tmp) {
          experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
        } else {
          experimentsMetadata = closure_10;
        }
        return experimentsMetadata;
      }
    }
  }
  cResult[15] = stateFromStores2;
  cResult[16] = stateFromStores;
  cResult[17] = stateFromStores1;
  cResult[18] = tmp4;
  cResult[19] = stateFromStoresObject1;
  cResult[20] = stateFromStoresObject;
  cResult[21] = tmp24;
}) : (() => {
  let closure_0;
  let stateFromStores2;
  let stateFromStoresObject;
  let tmp = closure_7();
  _require = tmp;
  let obj = require("get initialized");
  const items = [stateFromStores2];
  stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let registeredExperiments;
    const tmp = closure_0;
    if (tmp) {
      registeredExperiments = ExperimentStore.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_8;
    }
    return registeredExperiments;
  });
  let obj2 = require("get initialized");
  const items1 = [stateFromStores2];
  const stateFromStoresObject1 = obj2.useStateFromStoresObject(items1, () => {
    let allExperimentOverrideDescriptors;
    const tmp = closure_0;
    if (tmp) {
      allExperimentOverrideDescriptors = ExperimentStore.getAllExperimentOverrideDescriptors();
    } else {
      allExperimentOverrideDescriptors = closure_9;
    }
    return allExperimentOverrideDescriptors;
  });
  let obj3 = require("get initialized");
  const items2 = [ApexExperimentStore];
  const stateFromStores = obj3.useStateFromStores(items2, () => {
    let experimentsMetadata;
    const tmp = closure_0;
    if (tmp) {
      experimentsMetadata = ApexExperimentStore.getExperimentsMetadata();
    } else {
      experimentsMetadata = closure_10;
    }
    return experimentsMetadata;
  });
  let obj4 = require("get initialized");
  const items3 = [ApexExperimentStore];
  const stateFromStores1 = obj4.useStateFromStores(items3, () => {
    let registeredExperiments;
    const tmp = closure_0;
    if (tmp) {
      registeredExperiments = ApexExperimentStore.getRegisteredExperiments();
    } else {
      registeredExperiments = closure_11;
    }
    return registeredExperiments;
  });
  let obj5 = require("get initialized");
  const items4 = [ApexExperimentStore];
  stateFromStores2 = obj5.useStateFromStores(items4, () => {
    let clientOverrides;
    const tmp = closure_0;
    if (tmp) {
      clientOverrides = ApexExperimentStore.getClientOverrides();
    } else {
      clientOverrides = closure_12;
    }
    return clientOverrides;
  });
  const items5 = [tmp, stateFromStoresObject, stateFromStoresObject1, stateFromStores, stateFromStores1, stateFromStores2];
  return stateFromStores.useMemo(() => {
    let obj2;
    let obj3;
    let obj4;
    let obj5;
    let tmp2;
    const tmp = closure_0;
    if (tmp) {
      const obj = { legacyExperiments: obj2.parseRegisteredExperiments(stateFromStoresObject), legacyOverridesInfo: obj3.getLegacyOverridesInfo(stateFromStoresObject1), apexExperiments: obj4.mergeApexExperiments(stateFromStores, stateFromStores1), apexOverridesInfo: obj5.getApexExperimentOverridesInfo(stateFromStores2) };
      obj2 = useLegacyExperiments;
      obj3 = useLegacyExperiments;
      obj4 = useApexExperiments;
      tmp2 = obj;
      obj5 = useApexExperiments;
    } else {
      tmp2 = closure_13;
    }
    return tmp2;
  }, items5);
});
const result = size.fileFinishedImporting("modules/experiments/client_override_hooks/useCodedLinksExperimentEmbeds.tsx");

export { canSeeExperimentEmbeds };
export const useCanSeeExperimentEmbeds = tmp2;
export const useCodedLinksExperimentEmbeds = tmp3;
