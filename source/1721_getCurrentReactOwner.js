// Module ID: 1721
// Function ID: 19356
// Name: getCurrentReactOwner
// Dependencies: []
// Exports: componentWithRef, isFirstReactRender, isReactRendering

// Module 1721 (getCurrentReactOwner)
function getCurrentReactOwner() {
  const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = constants.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  let owner;
  if (null != __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
    const A = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
    if (null != A) {
      if (null != A.getOwner) {
        owner = A.getOwner();
      }
    }
  }
  if (!owner) {
    const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = constants.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let current;
    if (null != __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) {
      const ReactCurrentOwner = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      if (null != ReactCurrentOwner) {
        current = ReactCurrentOwner.current;
      }
    }
    owner = current;
  }
  if (!owner) {
    const __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = constants.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    let current1;
    if (null != __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE) {
      const ReactCurrentOwner2 = __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.ReactCurrentOwner;
      if (null != ReactCurrentOwner2) {
        current1 = ReactCurrentOwner2.current;
      }
    }
    owner = current1;
  }
  return owner;
}
let closure_0 = [null];
let closure_1 = importDefault(dependencyMap[0]);
let closure_2 = importDefault(dependencyMap[1]);
const forwardRef = arg1(dependencyMap[1]).forwardRef;
let closure_4 = arg1(dependencyMap[2]).isReact19();

export const isReactRendering = function isReactRendering() {
  return getCurrentReactOwner();
};
export const isFirstReactRender = function isFirstReactRender() {
  const tmp = getCurrentReactOwner();
  let tmp2 = tmp;
  if (tmp) {
    tmp2 = !(null != tmp && tmp.alternate);
    const tmp4 = null != tmp && tmp.alternate;
  }
  return tmp2;
};
export const componentWithRef = function componentWithRef(BottomSheet) {
  let closure_0 = BottomSheet;
  if (closure_4) {
    let fn = (ref) => ref(callback(ref, ref), ref.ref);
  } else {
    fn = forwardRef(BottomSheet);
  }
  return fn;
};
