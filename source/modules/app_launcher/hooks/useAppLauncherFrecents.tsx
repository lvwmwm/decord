// Module ID: 11222
// Function ID: 87364
// Name: useFrecentApps
// Dependencies: []
// Exports: default, useAppLauncherFrecentApps

// Module 11222 (useFrecentApps)
function useFrecentApps(onlyActivityApps) {
  let context;
  let sectionDescriptors;
  ({ sectionDescriptors, context } = onlyActivityApps);
  const arg1 = context;
  onlyActivityApps = onlyActivityApps.onlyActivityApps;
  const importDefault = onlyActivityApps;
  const includeAuthorizedAppsAndFetch = onlyActivityApps.includeAuthorizedAppsAndFetch;
  const importAll = includeAuthorizedAppsAndFetch;
  const items = [closure_5];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items, () => memo.getFetchState());
  const dependencyMap = stateFromStores;
  const items1 = [includeAuthorizedAppsAndFetch, stateFromStores];
  const effect = React.useEffect(() => {
    let tmp = includeAuthorizedAppsAndFetch;
    if (includeAuthorizedAppsAndFetch) {
      tmp = stateFromStores === sortApplicationsViaFrecency.NOT_FETCHED;
    }
    if (tmp) {
      const response = onlyActivityApps(stateFromStores[9]).fetch();
      const obj = onlyActivityApps(stateFromStores[9]);
    }
  }, items1);
  const obj = arg1(dependencyMap[8]);
  const items2 = [closure_5];
  const stateFromStoresArray = arg1(dependencyMap[8]).useStateFromStoresArray(items2, () => {
    if (includeAuthorizedAppsAndFetch) {
      const newestTokens = memo.getNewestTokens();
      let found = newestTokens.filter((scopes) => {
        scopes = scopes.scopes;
        return scopes.includes(callback(closure_3[10]).OAuth2Scopes.APPLICATIONS_COMMANDS);
      });
    } else {
      found = [];
    }
    return found;
  });
  const React = tmp5;
  const items3 = ["contextless" === context.type];
  const found = sectionDescriptors.filter((id) => {
    let tmp = id.id !== constants.FRECENCY;
    if (tmp) {
      tmp = id.id !== constants.BUILT_IN;
    }
    return tmp;
  });
  const memo = React.useMemo(() => {
    const items = [];
    if (tmp5) {
      items.push(closure_9);
    }
    return items;
  }, items3);
  closure_5 = memo;
  const obj2 = arg1(dependencyMap[8]);
  const sortApplicationsViaFrecency = arg1(dependencyMap[11]).useSortApplicationsViaFrecency(found, stateFromStoresArray);
  const FetchState = sortApplicationsViaFrecency;
  const obj3 = arg1(dependencyMap[11]);
  const items4 = [closure_7];
  const stateFromStores1 = arg1(dependencyMap[8]).useStateFromStores(items4, () => {
    const currentUser = stateFromStores1.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  closure_7 = stateFromStores1;
  const items5 = [onlyActivityApps, sortApplicationsViaFrecency, context, memo, stateFromStores1];
  return React.useMemo(() => {
    function hideAgeRestricted(id) {
      let tmp = false === closure_7;
      if (tmp) {
        tmp = callback2(closure_3[12])(id.id);
      }
      return !tmp;
    }
    const filter = sortApplicationsViaFrecency.filter;
    if (onlyActivityApps) {
      const found = filter((application) => {
        let isEmbeddedAppResult = null != application.application;
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = callback(closure_3[13]).isEmbeddedApp(application.application);
          const obj = callback(closure_3[13]);
        }
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = null != callback(closure_3[14]).queryForPrimaryAppCommand(callback, application.id);
          const obj2 = callback(closure_3[14]);
        }
        return isEmbeddedAppResult;
      });
      const found1 = found.filter((id) => !closure_5.includes(id.id));
      let found2 = found1.filter(hideAgeRestricted);
    } else {
      const found3 = filter((id) => !closure_5.includes(id.id));
      found2 = found3.filter(hideAgeRestricted);
    }
    return found2;
  }, items5);
}
let closure_4 = importAll(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
const FetchState = arg1(dependencyMap[1]).FetchState;
let closure_7 = importDefault(dependencyMap[2]);
let closure_8 = importDefault(dependencyMap[3]);
const WATCH_YOUTUBE_PROD_APP_ID = arg1(dependencyMap[4]).WATCH_YOUTUBE_PROD_APP_ID;
const tmp2 = arg1(dependencyMap[5]);
const BuiltInSectionId = tmp2.BuiltInSectionId;
const obj = {};
const items = [arg1(dependencyMap[6]).ApplicationCommandType.CHAT, arg1(dependencyMap[6]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
obj.commandTypes = items;
let closure_12 = { limit: tmp2.DISCOVERY_COMMANDS_QUERY_LIMIT };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default function useAppLauncherFrecentCommandsAndApps(arg0) {
  let context;
  let filterSection;
  let onlyActivityApps;
  let sectionDescriptors;
  ({ context, onlyActivityApps } = arg0);
  const arg1 = onlyActivityApps;
  let obj = importAll(dependencyMap[7]);
  obj = { context, filters: obj, options: closure_12, allowFetch: true };
  const discovery = obj.useDiscovery(obj);
  const commands = discovery.commands;
  const importDefault = commands;
  const commandsByActiveSection = discovery.commandsByActiveSection;
  const importAll = commandsByActiveSection;
  ({ sectionDescriptors, filterSection } = discovery);
  const dependencyMap = filterSection;
  const items = [filterSection];
  const effect = React.useEffect(() => {
    filterSection(constants.FRECENCY);
  }, items);
  const items1 = [closure_8];
  const stateFromStores = arg1(dependencyMap[8]).useStateFromStores(items1, () => lastUsedCommandId.getLastUsedCommandId());
  const React = stateFromStores;
  obj = {
    loading: discovery.loading,
    frecencyCommands: React.useMemo(() => {
      if (onlyActivityApps) {
        return [];
      } else {
        const first = commandsByActiveSection[0];
        let data;
        if (null != first) {
          data = first.data;
        }
        if (null == data) {
          data = [];
        }
        const found = commands.find((id) => id.id === closure_4);
        let tmp6 = data;
        if (null != found) {
          const items = [found];
          HermesBuiltin.arraySpread(data.filter((id) => id.id !== closure_4), 1);
          tmp6 = items;
        }
        return tmp6;
      }
    }, items2),
    frecentApps: useFrecentApps({ sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch: true }),
    sectionDescriptors
  };
  const items2 = [commands, commandsByActiveSection, stateFromStores, onlyActivityApps];
  return obj;
};
export const useAppLauncherFrecentApps = function useAppLauncherFrecentApps(context) {
  let allowCommandFetch;
  let includeAuthorizedAppsAndFetch;
  let onlyActivityApps;
  context = context.context;
  ({ onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = context);
  let obj = importAll(dependencyMap[7]);
  obj = { context, filters: obj, options: closure_12, allowFetch: allowCommandFetch };
  const discovery = obj.useDiscovery(obj);
  obj = { loading: discovery.loading, frecentApps: useFrecentApps(obj1) };
  return obj;
};
