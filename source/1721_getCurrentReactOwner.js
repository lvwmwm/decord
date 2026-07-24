// Module ID: 1721
// Function ID: 19363
// Name: getCurrentReactOwner
// Dependencies: [29, 31, 1585]
// Exports: componentWithRef, isFirstReactRender, isReactRendering

// Module 1721 (getCurrentReactOwner)
import _objectWithoutProperties from "_objectWithoutProperties";
import result from "result";
import { forwardRef } from "result";
import isJest from "isJest";

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
let closure_0 = ["ref"];
isJest = isJest.isReact19();

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
  if (isJest) {
    let fn = (ref) => BottomSheet(outer1_1(ref, BottomSheet), ref.ref);
  } else {
    fn = forwardRef(BottomSheet);
  }
  return fn;
};
