// Module ID: 10036
// Function ID: 10037
// Name: ICYMIFiltersStore
// Dependencies: [504, 10037, 572, 2]

// Module 10036 (ICYMIFiltersStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import ICYMITypes from "ICYMITypes" /* 10037 */;
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
