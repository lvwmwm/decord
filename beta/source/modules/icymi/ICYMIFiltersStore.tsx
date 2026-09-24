// Module ID: 8655
// Function ID: 8656
// Name: ICYMIFiltersStore
// Dependencies: [504, 8656, 577, 2]

// Module 8655 (ICYMIFiltersStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 577 */;
import ICYMITypes from "ICYMITypes" /* 8656 */;

require = fn;
let filters = {};
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ICYMIFiltersStore extends DeviceSettingsStore {
}
const prototype = ICYMIFiltersStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let obj = arg0;
  if (arg0 == null) {
    obj = {};
  }
  filters = obj;
};
prototype["filterStaffContent"] = function filterStaffContent() {
  return true === filters.filterStaffContent;
};
prototype["getDoubleTapBehavior"] = function getDoubleTapBehavior() {
  let DEFAULT = filters.doubleTapBehavior;
  if (DEFAULT == null) {
    DEFAULT = ICYMITypes.GravityICYMIDoubleTapBehavior.DEFAULT;
  }
  return DEFAULT;
};
prototype["getState"] = function getState() {
  return filters;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return filters;
};
ICYMIFiltersStore.displayName = "ICYMIFiltersStore";
ICYMIFiltersStore.persistKey = "ICYMIFiltersStore";
const iCYMIFiltersStore = new ICYMIFiltersStore(DispatcherDefault, {
  SET_ICYMI_FILTERS: function handleFilters(filters) {
    filters = filters.filters;
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/ICYMIFiltersStore.tsx");

export default iCYMIFiltersStore;
