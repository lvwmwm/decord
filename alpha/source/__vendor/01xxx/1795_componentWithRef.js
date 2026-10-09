// Module ID: 1795
// Function ID: 1796
// Name: componentWithRef
// Dependencies: [19, 1659]
// Exports: componentWithRef, isFirstReactRender, isReactRendering

// Module 1795 (componentWithRef)
import react2 from "react" /* 19 */;
import module_1659 from "module_1659" /* 1659 */;

const react = react2;

const forwardRef = react2.forwardRef;
let closure_2 = module_1659.isReact19();

export const isReactRendering = function isReactRendering() {
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
};
export const isFirstReactRender = function isFirstReactRender() {
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
};
export const componentWithRef = function componentWithRef(BottomSheet) {
  let fn;
  let closure_0 = BottomSheet;
  const tmp = closure_2;
  if (tmp) {
    fn = (ref) => closure_0(Object.assign(ref, Object.assign({ ref: 0 })), ref.ref);
  } else {
    fn = forwardRef(BottomSheet);
  }
  return fn;
};
