// Module ID: 20089
// Function ID: 20090
// Name: useIntegrationPermissionCommandSearch
// Dependencies: [32, 19, 20068, 504, 5658, 2118, 20084, 2]
// Exports: useIntegrationPermissionCommandSearch

// Module 20089 (useIntegrationPermissionCommandSearch)
import fuzzysearch from "fuzzysearch" /* 20084 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import IntegrationPermissionStore from "IntegrationPermissionStore" /* 20068 */;
import size from "module_2" /* 2 */;

let integration_types, type;

function commandTerms(id) {
  let items;
  const obj = { id: id.id, names: items };
  items = [id.displayName];
  return obj;
}
const result = size.fileFinishedImporting("modules/guild_settings/integrations/permission/useIntegrationPermissionCommandSearch.tsx");

export function useIntegrationPermissionCommandSearch() {
  let memo;
  let memo1;
  let memo2;
  let query;
  let stateFromStoresObject;
  let obj = stateFromStoresObject(query[3]);
  let items = [memo2];
  const stateFromStores = obj.useStateFromStores(items, () => null != memo2.getCommands());
  const items1 = [memo2];
  const obj2 = stateFromStoresObject(query[3]);
  stateFromStoresObject = obj2.useStateFromStoresObject(items1, () => {
    const _Object = Object;
    let commands = memo2.getCommands();
    if (commands == null) {
      commands = {};
    }
    return values(commands);
  });
  const tmp2 = memo(memo1.useState(""), 2);
  query = tmp2[0];
  const items2 = [stateFromStoresObject];
  let tmp4 = tmp2[1];
  memo = memo1.useMemo(() => stateFromStoresObject.filter((integration_types) => {
    let hasItem = null == integration_types.integration_types;
    if (!hasItem) {
      integration_types = integration_types.integration_types;
      hasItem = integration_types.includes(stateFromStoresObject(query[4]).ApplicationIntegrationType.GUILD_INSTALL);
    }
    if (hasItem) {
      let tmp4 = null == integration_types.contexts;
      if (!tmp4) {
        const contexts = integration_types.contexts;
        let hasItem1;
        if (contexts != null) {
          hasItem1 = contexts.includes(stateFromStoresObject(query[5]).InteractionContextType.GUILD);
        }
        tmp4 = hasItem1;
      }
      hasItem = tmp4;
    }
    return hasItem;
  }), items2);
  const items3 = [memo];
  memo1 = memo1.useMemo(() => {
    const items = [...memo];
    return items.sort((type, type2) => {
      type = stateFromStoresObject(query[5]).ApplicationCommandType.CHAT + 1;
      type2 = type;
      if (type2.type <= type) {
        type2 = type2.type;
      }
      if (type.type <= type) {
        type = type.type;
      }
      let diff = type2 - type;
      if (0 === diff) {
        const untranslatedName = type.untranslatedName;
        diff = untranslatedName.localeCompare(type2.untranslatedName);
      }
      return diff;
    });
  }, items3);
  const items4 = [query, memo1];
  memo2 = memo1.useMemo(() => {
    let found;
    if (first.startsWith("/")) {
      found = arr.filter((type) => type.type === stateFromStoresObject(query[5]).ApplicationCommandType.CHAT);
    } else {
      found = arr;
    }
    return found;
  }, items4);
  const items5 = [query];
  const memo3 = memo1.useMemo(() => {
    let substr = first;
    const str = first;
    if (first.startsWith("/")) {
      substr = str.substring(1);
    }
    return substr;
  }, items5);
  const items6 = [memo2, memo3];
  const obj3 = {
    query,
    results: memo1.useMemo(() => {
      const obj = fuzzysearch;
      return obj.filterPermissionSearchItems(memo2, commandTerms, memo3);
    }, items6),
    setQuery: tmp4,
    unfilteredCount: stateFromStoresObject.length,
    isLoaded: stateFromStores
  };
  return obj3;
}
