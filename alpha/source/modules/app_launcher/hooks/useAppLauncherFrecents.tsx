// Module ID: 12308
// Function ID: 12309
// Name: useAppLauncherFrecents
// Dependencies: [19, 7276, 1383, 12309, 2018, 6035, 1992, 10316, 504, 7332, 8910, 12310, 10318, 9761, 11735, 2]
// Exports: default, useAppLauncherFrecentApps

// Module 12308 (useAppLauncherFrecents)
import Server from "Server" /* 1992 */;
import Constants from "Constants" /* 2018 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7276 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7332 */;
import ApplicationCommandQueryApiAll from "ApplicationCommandQueryApi" /* 10316 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1383 */;
import AppLauncherLastUsedCommandStore from "AppLauncherLastUsedCommandStore" /* 12309 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6035 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;
let scopes;

let items;
function useFrecentApps(onlyActivityApps) {
  let closure_4;
  let context;
  let sectionDescriptors;
  ({ sectionDescriptors, context } = onlyActivityApps);
  onlyActivityApps = onlyActivityApps.onlyActivityApps;
  const includeAuthorizedAppsAndFetch = onlyActivityApps.includeAuthorizedAppsAndFetch;
  let stateFromStores;
  react = undefined;
  let memo;
  let stateFromStores1;
  let obj = context(stateFromStores[8]);
  let items = [memo];
  stateFromStores = obj.useStateFromStores(items, () => memo.getFetchState());
  const items1 = [includeAuthorizedAppsAndFetch, stateFromStores];
  const effect = react.useEffect(() => {
    const tmp = includeAuthorizedAppsAndFetch && stateFromStores === FetchState.NOT_FETCHED;
    if (tmp) {
      const obj = AuthorizedAppsActionCreatorsDefault;
      const response = obj.fetch();
    }
  }, items1);
  let obj2 = context(stateFromStores[8]);
  const items2 = [memo];
  const stateFromStoresArray = obj2.useStateFromStoresArray(items2, () => {
    let found;
    const tmp = includeAuthorizedAppsAndFetch;
    if (tmp) {
      const newestTokens = AuthorizedAppsStore.getNewestTokens();
      found = newestTokens.filter((scopes) => {
        scopes = scopes.scopes;
        return scopes.includes(context(stateFromStores[10]).OAuth2Scopes.APPLICATIONS_COMMANDS);
      });
    } else {
      found = [];
    }
    return found;
  });
  react = tmp5;
  const items3 = [tmp5];
  let found = sectionDescriptors.filter((id) => id.id !== constants.FRECENCY && id.id !== tmp.BUILT_IN);
  memo = react.useMemo(() => {
    const items = [];
    const tmp = closure_4;
    if (tmp) {
      items.push(WATCH_YOUTUBE_PROD_APP_ID);
    }
    return items;
  }, items3);
  const obj3 = context(stateFromStores[11]);
  const sortApplicationsViaFrecency = obj3.useSortApplicationsViaFrecency(found, stateFromStoresArray);
  const items4 = [stateFromStores1];
  const obj4 = context(stateFromStores[8]);
  stateFromStores1 = obj4.useStateFromStores(items4, () => {
    const currentUser = stateFromStores1.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items5 = [onlyActivityApps, sortApplicationsViaFrecency, context, memo, stateFromStores1];
  return react.useMemo(() => {
    let found2;
    function hideAgeRestricted(id) {
      const tmp = false === stateFromStores1 && onlyActivityApps(stateFromStores[12])(id.id);
      return !tmp;
    }
    let tmp = sortApplicationsViaFrecency;
    const filter = sortApplicationsViaFrecency.filter;
    if (onlyActivityApps) {
      const found = filter((application) => {
        let isActivityAppResult = null != application.application;
        if (isActivityAppResult) {
          const obj = context(stateFromStores[13]);
          isActivityAppResult = obj.isActivityApp(application.application);
        }
        if (isActivityAppResult) {
          const obj2 = context(stateFromStores[14]);
          isActivityAppResult = null != obj2.queryForPrimaryAppCommand(closure_1_0, application.id);
        }
        return isActivityAppResult;
      });
      const found1 = found.filter((id) => !memo.includes(id.id));
      found2 = found1.filter(hideAgeRestricted);
    } else {
      const found3 = filter((id) => !memo.includes(id.id));
      found2 = found3.filter(hideAgeRestricted);
    }
    return found2;
  }, items5);
}
let react = react_mod;
const FetchState = AuthorizedAppsStore2.FetchState;
const WATCH_YOUTUBE_PROD_APP_ID = Constants.WATCH_YOUTUBE_PROD_APP_ID;
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let filters = { commandTypes: items };
const DISCOVERY_COMMANDS_QUERY_LIMIT = ApplicationCommandConstants.DISCOVERY_COMMANDS_QUERY_LIMIT;
items = [Server.ApplicationCommandType.CHAT, Server.ApplicationCommandType.PRIMARY_ENTRY_POINT];
const options = { placeholderCount: 0, limit: DISCOVERY_COMMANDS_QUERY_LIMIT, includeFrecency: true };
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default function useAppLauncherFrecentCommandsAndApps(arg0) {
  let context;
  let filterSection;
  let items2;
  let lastUsedCommandId;
  let onlyActivityApps;
  let sectionDescriptors;
  ({ context, onlyActivityApps } = arg0);
  let commandsByActiveSection;
  filterSection = undefined;
  let stateFromStores;
  filters = commandsByActiveSection(filterSection[7]);
  const obj2 = { context, filters, options, allowFetch: true };
  const discovery = filters.useDiscovery(obj2);
  const commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  ({ sectionDescriptors, filterSection } = discovery);
  let items = [filterSection];
  const loading = discovery.loading;
  const effect = stateFromStores.useEffect(() => {
    filterSection(BuiltInSectionId.FRECENCY);
  }, items);
  const items1 = [AppLauncherLastUsedCommandStore];
  const obj3 = onlyActivityApps(filterSection[8]);
  stateFromStores = obj3.useStateFromStores(items1, () => lastUsedCommandId.getLastUsedCommandId());
  const obj4 = {
    loading,
    frecencyCommands: stateFromStores.useMemo(() => {
      const tmp2 = onlyActivityApps;
      if (tmp2) {
        return [];
      } else {
        const first = commandsByActiveSection[0];
        let data;
        if (first != null) {
          data = first.data;
        }
        if (data == null) {
          data = [];
        }
        const found = commands.find((id) => id.id === stateFromStores);
        let tmp8 = data;
        if (null != found) {
          const items = [found];
          HermesBuiltin.arraySpread(items, data.filter((id) => id.id !== stateFromStores), 1);
          tmp8 = items;
        }
        return tmp8;
      }
    }, items2),
    frecentApps: useFrecentApps({ sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch: true }),
    sectionDescriptors
  };
  items2 = [commands, commandsByActiveSection, stateFromStores, onlyActivityApps];
  return obj4;
};
export function useAppLauncherFrecentApps(context) {
  let allowCommandFetch;
  let includeAuthorizedAppsAndFetch;
  let onlyActivityApps;
  context = context.context;
  ({ onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = context);
  filters = ApplicationCommandQueryApiAll;
  const obj2 = { context, filters, options, allowFetch: allowCommandFetch };
  const discovery = filters.useDiscovery(obj2);
  const obj3 = { loading: discovery.loading, frecentApps: useFrecentApps(obj4) };
  return obj3;
}
