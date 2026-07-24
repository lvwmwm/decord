// Module ID: 5634
// Function ID: 48072
// Name: useCreatorMonetizationRestrictions
// Dependencies: [31, 3752, 1838, 653, 5635, 5636, 566, 3751, 2]
// Exports: useIsMonetizationReapplicationDisabled, useShouldHideGuildPurchaseEntryPoints, useShouldRestrictUpdatingCreatorMonetizationSettings

// Module 5634 (useCreatorMonetizationRestrictions)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
function useCreatorMonetizationRestrictions(has) {
  const _require = has;
  const tmp = importDefault(5635)();
  importDefault = tmp;
  const items = [has, tmp];
  const effect = React.useEffect(() => {
    let hasItem = null != has;
    if (hasItem) {
      const features = has.features;
      hasItem = features.has(outer1_9.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = outer1_5.getMonetizationRestrictionsFetchState(has.id) === outer1_6.NOT_FETCHED;
    }
    if (hasItem) {
      let obj = id(outer1_3[5]);
      obj = { signal: closure_1 };
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(has.id, obj);
    }
  }, items);
  let id;
  if (null != has) {
    id = has.id;
  }
  let obj = {};
  const items1 = [_isNativeReflectConstruct];
  obj.restrictions = _require(566).useStateFromStoresArray(items1, () => {
    let monetizationRestrictions = outer1_5.getMonetizationRestrictions(null != id ? id : outer1_8);
    if (null == monetizationRestrictions) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  const obj2 = _require(566);
  const items2 = [_isNativeReflectConstruct];
  obj.restrictionsLoading = _require(566).useStateFromStores(items2, () => outer1_5.getMonetizationRestrictionsFetchState(null != id ? id : outer1_8) === outer1_6.FETCHING);
  return obj;
}
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, GuildFeatures: closure_9 } = ME);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export const useShouldHideGuildPurchaseEntryPoints = function useShouldHideGuildPurchaseEntryPoints(id2) {
  const _require = id2;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [id2];
  let has = obj.useStateFromStores(items, () => outer1_7.getGuild(closure_0), items1);
  const tmp = useCreatorMonetizationRestrictions(has);
  const restrictionsLoading = tmp.restrictionsLoading;
  obj = {};
  let tmp2 = null;
  let hasItem;
  if (null != has) {
    const features = has.features;
    hasItem = features.has(constants.CREATOR_MONETIZABLE);
  }
  if (!hasItem) {
    let hasItem1;
    if (tmp2 != has) {
      const features2 = has.features;
      hasItem1 = features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    hasItem = hasItem1;
  }
  if (!hasItem) {
    let hasItem2;
    if (tmp2 != has) {
      const features3 = has.features;
      hasItem2 = features3.has(constants.SOCIAL_LAYER_STOREFRONT);
    }
    hasItem = hasItem2;
  }
  if (!hasItem) {
    obj.shouldHideGuildPurchaseEntryPoints = tmp9;
    obj.restrictionsLoading = restrictionsLoading;
    return obj;
  } else if (restrictionsLoading) {
    let hasItem3;
    if (tmp2 != has) {
      const features4 = has.features;
      has = features4.has;
      hasItem3 = has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    tmp2 = tmp2 == hasItem3 || hasItem3;
    let result = tmp2;
  } else {
    result = _require(3751).isRestrictedFromShowingGuildPurchaseEntryPoints(tmp.restrictions);
    const obj3 = _require(3751);
  }
};
export const useShouldRestrictUpdatingCreatorMonetizationSettings = function useShouldRestrictUpdatingCreatorMonetizationSettings(guildId) {
  const _require = guildId;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(closure_0), items1);
  const restrictionsLoading = useCreatorMonetizationRestrictions(stateFromStores).restrictionsLoading;
  if (restrictionsLoading) {
    let hasItem;
    if (null != stateFromStores) {
      const features = stateFromStores.features;
      hasItem = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    let result = null == hasItem || hasItem;
    const tmp10 = null == hasItem || hasItem;
  } else {
    result = _require(3751).isRestrictedFromUpdatingCreatorMonetizationSettings(tmp3);
    const obj2 = _require(3751);
  }
  let tmp11 = null == stateFromStores;
  if (!tmp11) {
    const features2 = stateFromStores.features;
    tmp11 = !features2.has(constants.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  obj = {};
  let tmp13 = result;
  if (!result) {
    tmp13 = !tmp11;
  }
  obj.shouldRestrictUpdatingCreatorMonetizationSettings = tmp13;
  obj.allowSelfRemoveMonetization = !result;
  obj.restrictionsLoading = restrictionsLoading;
  return obj;
};
export const useIsMonetizationReapplicationDisabled = function useIsMonetizationReapplicationDisabled(id2) {
  let restrictions;
  let restrictionsLoading;
  const _require = id2;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [id2];
  obj = {};
  ({ restrictions, restrictionsLoading } = useCreatorMonetizationRestrictions(obj.useStateFromStores(items, () => outer1_7.getGuild(closure_0), items1)));
  const tmp = useCreatorMonetizationRestrictions(obj.useStateFromStores(items, () => outer1_7.getGuild(closure_0), items1));
  obj.isMonetizationReapplicationDisabled = _require(3751).isRestrictedFromMonetizationReapplication(restrictions);
  obj.restrictionsLoading = restrictionsLoading;
  return obj;
};
