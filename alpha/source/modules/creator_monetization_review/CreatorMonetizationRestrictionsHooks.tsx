// Module ID: 7427
// Function ID: 7428
// Name: CreatorMonetizationRestrictionsHooks
// Dependencies: [19, 4939, 4885, 1072, 7428, 7429, 504, 4938, 2]
// Exports: useIsMonetizationReapplicationDisabled, useShouldHideGuildPurchaseEntryPoints, useShouldRestrictUpdatingCreatorMonetizationSettings

// Module 7427 (CreatorMonetizationRestrictionsHooks)
import GuildRoleSubscriptionsStore2 from "GuildRoleSubscriptionsStore" /* 4939 */;
import useUnmountAbortSignalDefault from "useUnmountAbortSignal" /* 7428 */;
import GuildRoleSubscriptionsActionCreatorsAll from "GuildRoleSubscriptionsActionCreators" /* 7429 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4885 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildRoleSubscriptionsStore = GuildRoleSubscriptionsStore2;
let _require;

let c9;
let metroImportAll;
const FetchState = GuildRoleSubscriptionsStore2.FetchState;
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, GuildFeatures: c9 } = Constants);
let result = size.fileFinishedImporting("modules/creator_monetization_review/CreatorMonetizationRestrictionsHooks.tsx");

export function useShouldHideGuildPurchaseEntryPoints(id2) {
  _require = id2;
  const items = [GuildStore];
  const items1 = [id2];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(id2), items1);
  const tmp4 = useUnmountAbortSignalDefault();
  let closure_1 = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = react.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(constants2.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = monetizationRestrictionsFetchState.getMonetizationRestrictionsFetchState(tmp.id) === constants.NOT_FETCHED;
    }
    if (hasItem) {
      const obj2 = { signal };
      const obj = GuildRoleSubscriptionsActionCreatorsAll;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj2);
    }
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items3 = [GuildRoleSubscriptionsStore];
  const tmpResult = require("get initialized");
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    const getMonetizationRestrictions = monetizationRestrictionsFetchState.getMonetizationRestrictions;
    if (id == null) {
      tmp2 = closure_2_8;
    }
    let monetizationRestrictions = getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  const items4 = [GuildRoleSubscriptionsStore];
  const tmpResult3 = require("get initialized");
  const restrictionsLoading = tmpResult3.useStateFromStores(items4, () => {
    let tmp2 = id;
    const getMonetizationRestrictionsFetchState = monetizationRestrictionsFetchState.getMonetizationRestrictionsFetchState;
    if (id == null) {
      tmp2 = closure_2_8;
    }
    return getMonetizationRestrictionsFetchState(tmp2) === constants.FETCHING;
  });
  let hasItem;
  if (stateFromStores != null) {
    const features = stateFromStores.features;
    hasItem = features.has(constants.CREATOR_MONETIZABLE);
  }
  if (!hasItem) {
    let hasItem1;
    if (stateFromStores != null) {
      const features2 = stateFromStores.features;
      hasItem1 = features2.has(constants.CREATOR_MONETIZABLE_PROVISIONAL);
    }
    hasItem = hasItem1;
  }
  let shouldHideGuildPurchaseEntryPoints = !hasItem;
  if (hasItem) {
    let result;
    if (restrictionsLoading) {
      let flag;
      if (stateFromStores != null) {
        const features3 = stateFromStores.features;
        flag = features3.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
      }
      if (flag == null) {
        flag = true;
      }
      result = flag;
    } else {
      const tmpResult4 = require("CreatorMonetizationRestrictionsUtils");
      result = tmpResult4.isRestrictedFromShowingGuildPurchaseEntryPoints(stateFromStoresArray);
    }
    shouldHideGuildPurchaseEntryPoints = result;
  }
  return { shouldHideGuildPurchaseEntryPoints, restrictionsLoading };
}
export function useShouldRestrictUpdatingCreatorMonetizationSettings(guildId) {
  let result;
  _require = guildId;
  const items = [GuildStore];
  const items1 = [guildId];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId), items1);
  const tmp4 = useUnmountAbortSignalDefault();
  let closure_1 = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = react.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(constants2.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = monetizationRestrictionsFetchState.getMonetizationRestrictionsFetchState(tmp.id) === constants.NOT_FETCHED;
    }
    if (hasItem) {
      const obj2 = { signal };
      const obj = GuildRoleSubscriptionsActionCreatorsAll;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj2);
    }
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items3 = [GuildRoleSubscriptionsStore];
  const tmpResult = require("get initialized");
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    const getMonetizationRestrictions = monetizationRestrictionsFetchState.getMonetizationRestrictions;
    if (id == null) {
      tmp2 = closure_2_8;
    }
    let monetizationRestrictions = getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  const items4 = [GuildRoleSubscriptionsStore];
  const tmpResult3 = require("get initialized");
  const stateFromStores1 = tmpResult3.useStateFromStores(items4, () => {
    let tmp2 = id;
    const getMonetizationRestrictionsFetchState = monetizationRestrictionsFetchState.getMonetizationRestrictionsFetchState;
    if (id == null) {
      tmp2 = closure_2_8;
    }
    return getMonetizationRestrictionsFetchState(tmp2) === constants.FETCHING;
  });
  if (stateFromStores1) {
    let flag;
    if (stateFromStores != null) {
      const features = stateFromStores.features;
      flag = features.has(constants.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (flag == null) {
      flag = true;
    }
    result = flag;
  } else {
    const tmpResult4 = require("CreatorMonetizationRestrictionsUtils");
    result = tmpResult4.isRestrictedFromUpdatingCreatorMonetizationSettings(stateFromStoresArray);
  }
  let hasItem;
  if (stateFromStores != null) {
    const features2 = stateFromStores.features;
    hasItem = features2.has(constants.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING);
  }
  return { shouldRestrictUpdatingCreatorMonetizationSettings: result || hasItem, allowSelfRemoveMonetization: !result, restrictionsLoading: stateFromStores1 };
}
export function useIsMonetizationReapplicationDisabled(id2) {
  let constants2;
  let monetizationRestrictionsFetchState;
  let stateFromStores1;
  let tmpResult4;
  _require = id2;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [GuildStore];
  const items1 = [id2];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(id2), items1);
  const tmp4 = useUnmountAbortSignalDefault();
  let closure_1 = tmp4;
  const items2 = [stateFromStores, tmp4];
  const effect = react.useEffect(() => {
    let hasItem = null != stateFromStores;
    if (hasItem) {
      const features = tmp.features;
      hasItem = features.has(constants2.CREATOR_MONETIZABLE_RESTRICTED);
    }
    if (hasItem) {
      hasItem = monetizationRestrictionsFetchState.getMonetizationRestrictionsFetchState(tmp.id) === constants.NOT_FETCHED;
    }
    if (hasItem) {
      const obj2 = { signal };
      const obj = GuildRoleSubscriptionsActionCreatorsAll;
      const monetizationRestrictions = obj.fetchMonetizationRestrictions(tmp.id, obj2);
    }
  }, items2);
  let id;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items3 = [GuildRoleSubscriptionsStore];
  const tmpResult = tmp(504);
  const stateFromStoresArray = tmpResult.useStateFromStoresArray(items3, () => {
    let tmp2 = id;
    const getMonetizationRestrictions = monetizationRestrictionsFetchState.getMonetizationRestrictions;
    if (id == null) {
      tmp2 = closure_2_8;
    }
    let monetizationRestrictions = getMonetizationRestrictions(tmp2);
    if (monetizationRestrictions == null) {
      monetizationRestrictions = [];
    }
    return monetizationRestrictions;
  });
  const items4 = [GuildRoleSubscriptionsStore];
  let obj2 = { isMonetizationReapplicationDisabled: tmpResult4.isRestrictedFromMonetizationReapplication(stateFromStoresArray), restrictionsLoading: stateFromStores1 };
  const tmpResult3 = tmp(504);
  stateFromStores1 = tmpResult3.useStateFromStores(items4, () => {
    let tmp2 = id;
    const getMonetizationRestrictionsFetchState = monetizationRestrictionsFetchState.getMonetizationRestrictionsFetchState;
    if (id == null) {
      tmp2 = closure_2_8;
    }
    return getMonetizationRestrictionsFetchState(tmp2) === constants.FETCHING;
  });
  tmpResult4 = tmp(4938);
  return obj2;
}
