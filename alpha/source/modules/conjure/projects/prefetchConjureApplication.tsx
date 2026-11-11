// Module ID: 10478
// Function ID: 10479
// Name: prefetchConjureApplication
// Dependencies: [5, 2162, 6992, 2]
// Exports: default

// Module 10478 (prefetchConjureApplication)
import ApplicationActionCreatorsDefault from "ApplicationActionCreators" /* 6992 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ApplicationStore from "ApplicationStore" /* 2162 */;
import size from "module_2" /* 2 */;

let c1, c2;

function fetchBatch() {
  return obj(...arguments);
}
let obj = function _fetchBatch() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let obj2;
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c3;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c3 = 1;
            c2 = 2;
            c1 = 1;
            const obj5 = { value: obj2.fetchApplications(closure_0, false), done: false };
            obj2 = ApplicationActionCreatorsDefault;
            return obj5;
          }
        } else {
          if (1 === tmp3) {
            c3 = 0;
          } else if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c1 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            c3 = 0;
          }
          c1 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp7) {
        if (0 === c3) {
          c1 = 3;
          throw tmp7;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
function flush() {
  let length;
  let sum;
  closure_5 = null;
  const items = [...set];
  let num = 0;
  set.clear();
  if (0 < items.length) {
    do {
      sum = num + 50;
      let tmp4 = fetchBatch(items.slice(num, sum));
      num = sum;
      length = items.length;
    } while (sum < length);
  }
}
const set = new Set();
let closure_5 = null;
const result = size.fileFinishedImporting("modules/conjure/projects/prefetchConjureApplication.tsx");

export default function prefetchConjureApplication(application_id) {
  let timeout;
  const isHydratedResult = null == application_id || ApplicationStore.isHydrated(application_id) || ApplicationStore.isFetchingApplication(application_id) || ApplicationStore.didFetchingApplicationFail(application_id);
  if (!isHydratedResult) {
    set.add(application_id);
    if (timeout == null) {
      const _setTimeout = setTimeout;
      timeout = setTimeout(flush, 0);
    }
  }
};
