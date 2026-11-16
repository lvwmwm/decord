// Module ID: 9025
// Function ID: 9026
// Name: ICYMIFiltersStore
// Dependencies: [504, 9026, 572, 2]

// Module 9025 (ICYMIFiltersStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ICYMITypes from "ICYMITypes" /* 9026 */;
import size from "module_2" /* 2 */;

let filters = {};
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class ICYMIFiltersStore extends DeviceSettingsStore {
  initialize(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    filters = obj;
  }
  filterStaffContent() {
    return true === filters.filterStaffContent;
  }
  getDoubleTapBehavior() {
    let DEFAULT = filters.doubleTapBehavior;
    if (DEFAULT == null) {
      DEFAULT = ICYMITypes.GravityICYMIDoubleTapBehavior.DEFAULT;
    }
    return DEFAULT;
  }
  getState() {
    return filters;
  }
  getUserAgnosticState() {
    return filters;
  }
}
const prototype = ICYMIFiltersStore.prototype;
ICYMIFiltersStore.displayName = "ICYMIFiltersStore";
ICYMIFiltersStore.persistKey = "ICYMIFiltersStore";
let obj = {
  SET_ICYMI_FILTERS: function handleFilters(filters) {
    filters = filters.filters;
  }
};
const iCYMIFiltersStore = new ICYMIFiltersStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/icymi/ICYMIFiltersStore.tsx");

export default iCYMIFiltersStore;
