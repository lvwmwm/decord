// Module ID: 1414
// Function ID: 1415
// Name: StoreCountryUtils
// Dependencies: [2]
// Exports: parseStoreCountry

// Module 1414 (StoreCountryUtils)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/billing/utils/StoreCountryUtils.tsx");

export const parseStoreCountry = function parseStoreCountry(storeCountry) {
  let flag;
  let set_at;
  let tmp = storeCountry;
  if (null != storeCountry) {
    const obj = { country: null, setAt: set_at, isLocked: flag };
    ({ country: obj.country, set_at } = storeCountry);
    if (set_at == null) {
      set_at = storeCountry.setAt;
    }
    if (set_at == null) {
      set_at = null;
    }
    flag = storeCountry.is_locked;
    if (flag == null) {
      flag = storeCountry.isLocked;
    }
    if (flag == null) {
      flag = false;
    }
    tmp = obj;
  }
  return tmp;
};
