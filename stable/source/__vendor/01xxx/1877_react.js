// Module ID: 1877
// Function ID: 1878
// Name: react
// Dependencies: [19]
// Exports: assignRef, isFirstReactRender, isReactRendering, mergeRefs

// Module 1877 (react)
import react from "react" /* 19 */;


export function assignRef(fn, current) {
  if (typeof fn === "function") {
    const tmp = fn(current);
    let tmp2;
    if (typeof tmp === "function") {
      tmp2 = tmp;
    }
    return tmp2;
  } else if (fn) {
    fn.current = current;
  }
}
export function mergeRefs() {
  let closure_0 = [...arguments];
  return (arg0) => {
    closure_0 = arg0;
    let closure_1 = closure_0.map((fn) => {
      current = fn;
      if (typeof fn === "function") {
        const tmp2 = fn(current);
        let tmp3;
        if (typeof tmp2 === "function") {
          tmp3 = tmp2;
        }
        fn = tmp3;
      } else if (fn) {
        fn.current = current;
      }
      if (fn == null) {
        fn = () => {
          let tmp3;
          if (typeof closure_0 === "function") {
            const tmpResult = closure_0(null);
            let tmp6;
            if (typeof tmpResult === "function") {
              tmp6 = tmpResult;
            }
            tmp3 = tmp6;
          } else if (closure_0) {
            closure_0.current = null;
          }
          return tmp3;
        };
      }
      return fn;
    });
    return () => closure_1.forEach((fn) => fn());
  };
}
export function isReactRendering() {
  const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = react.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  let owner;
  if (__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE != null) {
    const A = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
    if (A != null) {
      const getOwner = A.getOwner;
      if (getOwner != null) {
        owner = getOwner();
      }
    }
  }
  if (!owner) {
    const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tmp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let current;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED != null) {
      const ReactCurrentOwner = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      if (ReactCurrentOwner != null) {
        current = ReactCurrentOwner.current;
      }
    }
    owner = current;
  }
  if (!owner) {
    const __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tmp.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    let current1;
    if (__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE != null) {
      const ReactCurrentOwner2 = __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.ReactCurrentOwner;
      if (ReactCurrentOwner2 != null) {
        current1 = ReactCurrentOwner2.current;
      }
    }
    owner = current1;
  }
  return owner;
}
export function isFirstReactRender() {
  const __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = react.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  let owner;
  if (__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE != null) {
    const A = __CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.A;
    if (A != null) {
      const getOwner = A.getOwner;
      if (getOwner != null) {
        owner = getOwner();
      }
    }
  }
  if (!owner) {
    const __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tmp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    let current;
    if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED != null) {
      const ReactCurrentOwner = __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
      if (ReactCurrentOwner != null) {
        current = ReactCurrentOwner.current;
      }
    }
    owner = current;
  }
  if (!owner) {
    const __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = tmp.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    let current1;
    if (__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE != null) {
      const ReactCurrentOwner2 = __SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE.ReactCurrentOwner;
      if (ReactCurrentOwner2 != null) {
        current1 = ReactCurrentOwner2.current;
      }
    }
    owner = current1;
  }
  let tmp5 = owner;
  if (tmp5) {
    let alternate;
    if (owner != null) {
      alternate = owner.alternate;
    }
    tmp5 = !alternate;
  }
  return tmp5;
}
