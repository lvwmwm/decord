// Module ID: 5628
// Function ID: 47977
// Name: useCreatorMonetizationRestrictions
// Dependencies: []
// Exports: useIsMonetizationReapplicationDisabled, useShouldHideGuildPurchaseEntryPoints, useShouldRestrictUpdatingCreatorMonetizationSettings

// Module 5628 (useCreatorMonetizationRestrictions)
function useCreatorMonetizationRestrictions(has) {
  const arg1 = has;
  const tmp = importDefault(dependencyMap[4])();
  const importDefault = tmp;
  const items = [has, tmp];
  const effect = React.useEffect((self) => {
    let hasItem = null != self;
    if (hasItem) {
      const features = self.features;
      hasItem = features.has(constants2.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = store.getMonetizationRestrictionsFetchState(self.id) === constants.NOT_FETCHED;
    }
    if (hasItem) {
      let obj = id(closure_3[5]);
      obj = { signal: tmp };
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(self.id, obj);
    }
  }, items);
  let id;
  if (null != has) {
    id = has.id;
  }
  const importAll = id;
  const obj = {};
  const items1 = [closure_5];
  obj.restrictions = arg1(dependencyMap[6]).useStateFromStoresArray(items1, () => {
    let monetizationRestrictions = store.getMonetizationRestrictions(null != id ? id : closure_8);
    if (null == monetizationRestrictions) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  const obj2 = arg1(dependencyMap[6]);
  const items2 = [closure_5];
  obj.restrictionsLoading = arg1(dependencyMap[6]).useStateFromStores(items2, () => store.getMonetizationRestrictionsFetchState(null != id ? id : closure_8) === constants.FETCHING);
  return obj;
}
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const FetchState = arg1(dependencyMap[1]).FetchState;
let closure_7 = importDefault(dependencyMap[2]);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, GuildFeatures: closure_9 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export const useShouldHideGuildPurchaseEntryPoints = function useShouldHideGuildPurchaseEntryPoints(id2) {
  const arg1 = id2;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_7];
  const items1 = [id2];
  let has = obj.useStateFromStores(items, () => guild.getGuild(arg0), items1);
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
    result = arg1(dependencyMap[7]).isRestrictedFromShowingGuildPurchaseEntryPoints(tmp.restrictions);
    const obj3 = arg1(dependencyMap[7]);
  }
};
export const useShouldRestrictUpdatingCreatorMonetizationSettings = function useShouldRestrictUpdatingCreatorMonetizationSettings(guildId) {
  const arg1 = guildId;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_7];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(arg0), items1);
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
    result = arg1(dependencyMap[7]).isRestrictedFromUpdatingCreatorMonetizationSettings(tmp3);
    const obj2 = arg1(dependencyMap[7]);
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
  const arg1 = id2;
  let obj = arg1(dependencyMap[6]);
  const items = [closure_7];
  const items1 = [id2];
  obj = {};
  ({ restrictions, restrictionsLoading } = useCreatorMonetizationRestrictions(obj.useStateFromStores(items, () => guild.getGuild(arg0), items1)));
  const tmp = useCreatorMonetizationRestrictions(obj.useStateFromStores(items, () => guild.getGuild(arg0), items1));
  obj.isMonetizationReapplicationDisabled = arg1(dependencyMap[7]).isRestrictedFromMonetizationReapplication(restrictions);
  obj.restrictionsLoading = restrictionsLoading;
  return obj;
};
