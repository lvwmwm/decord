// Module ID: 12089
// Function ID: 12090
// Name: AbstractSearchFetchManager
// Dependencies: [2]

// Module 12089 (AbstractSearchFetchManager)
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/search/managers/AbstractSearchFetchManager.tsx");
class AbstractSearchFetchManager {
  constructor() {
    const merged = Object.assign({ searchFetchers: null });
    merged[0] = new Map();
    new Map();
    return merged;
  }
  cleanUp(arg0) {
    this.cancel(arg0);
    this.delete(arg0);
  }
  cancel(arg0) {
    const searchFetchers = this.searchFetchers;
    const value = searchFetchers.get(arg0);
    if (value != null) {
      value.cancel();
    }
  }
  delete(arg0) {
    const searchFetchers = this.searchFetchers;
    searchFetchers.delete(arg0);
  }
  get(arg0) {
    const searchFetchers = this.searchFetchers;
    return searchFetchers.get(arg0);
  }
  set(arg0, arg1) {
    const searchFetchers = this.searchFetchers;
    const result = searchFetchers.set(arg0, arg1);
  }
}
const prototype = AbstractSearchFetchManager.prototype;

export { AbstractSearchFetchManager };
