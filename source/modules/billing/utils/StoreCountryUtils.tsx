// Module ID: 1871
// Function ID: 20855
// Name: parseStoreCountry
// Dependencies: [284214097]
// Exports: parseStoreCountry

// Module 1871 (parseStoreCountry)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/billing/utils/StoreCountryUtils.tsx");

export const parseStoreCountry = function parseStoreCountry(storeCountry) {
  let set_at;
  let tmp = storeCountry;
  if (null != storeCountry) {
    const obj = {};
    ({ country: obj.country, set_at } = storeCountry);
    if (null == set_at) {
      set_at = storeCountry.setAt;
    }
    let tmp2 = null;
    if (null != set_at) {
      tmp2 = set_at;
    }
    obj.setAt = tmp2;
    let isLocked = storeCountry.is_locked;
    if (null == isLocked) {
      isLocked = storeCountry.isLocked;
    }
    obj.isLocked = null != isLocked && isLocked;
    tmp = obj;
  }
  return tmp;
};
