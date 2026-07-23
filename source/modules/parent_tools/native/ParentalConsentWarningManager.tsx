// Module ID: 16150
// Function ID: 125203
// Name: _isNativeReflectConstruct
// Dependencies: [7, 6, 15, 17, 18, 3823, 6769, 13770, 6770, 653, 13771, 4098, 16151, 1934, 16153, 5078, 2]

// Module 16150 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import AutomaticLifecycleManager from "AutomaticLifecycleManager";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import items from "items";
import { AppStates } from "ME";
import tmp3 from "AutomaticLifecycleManager";

let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function hasActiveParentLink(arr) {
  return arr.some((link_status) => {
    let tmp = link_status.link_status === outer1_11.ACTIVE;
    if (tmp) {
      tmp = link_status.link_type === outer1_12.PARENT;
    }
    return tmp;
  });
}
function maybePresentModal(warning) {
  let daysRemaining;
  if (null != warning) {
    daysRemaining = warning.daysRemaining;
  }
  let hasItem;
  if (null != warning) {
    const surfaces = warning.surfaces;
    if (null != surfaces) {
      hasItem = surfaces.includes(require(13771) /* frozen */.ParentalConsentWarningSurface.MODAL);
    }
  }
  let tmp5 = true === hasItem && null != daysRemaining;
  if (tmp5) {
    tmp5 = daysRemaining >= 0;
  }
  if (tmp5) {
    tmp5 = !closure_10.hasShownModalToday();
  }
  if (tmp5) {
    const _Object = Object;
    tmp5 = !hasActiveParentLink(Object.values(linkedUsers.getLinkedUsers()));
  }
  if (tmp5) {
    tmp5 = !open.isOpen();
  }
  if (tmp5) {
    let obj = importDefault(4098);
    obj = { daysRemaining };
    obj.openLazy(require(1934) /* maybeLoadBundle */(16151, dependencyMap.paths), "ParentalConsentWarningModal", obj);
  }
}
function maybePresentFromCache() {
  if (!closure_10.shouldFetchToday()) {
    maybePresentModal(closure_10.getWarning());
  }
}
({ UserLinkStatus: closure_11, UserLinkType: closure_12 } = items);
tmp3 = new tmp3();
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/parent_tools/native/ParentalConsentWarningManager.tsx");

export default tmp3;
