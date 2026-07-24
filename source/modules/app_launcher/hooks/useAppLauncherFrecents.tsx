// Module ID: 11268
// Function ID: 87702
// Name: useFrecentApps
// Dependencies: [31, 5066, 1849, 11269, 4155, 4566, 1881, 8233, 566, 5470, 8354, 11270, 8221, 8006, 10859, 2]
// Exports: default, useAppLauncherFrecentApps

// Module 11268 (useFrecentApps)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import { WATCH_YOUTUBE_PROD_APP_ID } from "items3";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";

const require = arg1;
function useFrecentApps(onlyActivityApps) {
  let context;
  let sectionDescriptors;
  ({ sectionDescriptors, context } = onlyActivityApps);
  onlyActivityApps = onlyActivityApps.onlyActivityApps;
  const includeAuthorizedAppsAndFetch = onlyActivityApps.includeAuthorizedAppsAndFetch;
  let items = [memo];
  stateFromStores = context(stateFromStores[8]).useStateFromStores(items, () => memo.getFetchState());
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
  let obj = context(stateFromStores[8]);
  const items2 = [memo];
  const stateFromStoresArray = context(stateFromStores[8]).useStateFromStoresArray(items2, () => {
    if (includeAuthorizedAppsAndFetch) {
      const newestTokens = memo.getNewestTokens();
      let found = newestTokens.filter((scopes) => {
        scopes = scopes.scopes;
        return scopes.includes(context(stateFromStores[10]).OAuth2Scopes.APPLICATIONS_COMMANDS);
      });
    } else {
      found = [];
    }
    return found;
  });
  React = tmp5;
  const items3 = ["contextless" === context.type];
  let found = sectionDescriptors.filter((id) => {
    let tmp = id.id !== outer1_10.FRECENCY;
    if (tmp) {
      tmp = id.id !== outer1_10.BUILT_IN;
    }
    return tmp;
  });
  memo = React.useMemo(() => {
    const items = [];
    if (result) {
      items.push(outer1_9);
    }
    return items;
  }, items3);
  let obj2 = context(stateFromStores[8]);
  const sortApplicationsViaFrecency = context(stateFromStores[11]).useSortApplicationsViaFrecency(found, stateFromStoresArray);
  const obj3 = context(stateFromStores[11]);
  const items4 = [stateFromStores1];
  stateFromStores1 = context(stateFromStores[8]).useStateFromStores(items4, () => {
    const currentUser = stateFromStores1.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const items5 = [onlyActivityApps, sortApplicationsViaFrecency, context, memo, stateFromStores1];
  return React.useMemo(() => {
    function hideAgeRestricted(id) {
      let tmp = false === outer1_7;
      if (tmp) {
        tmp = onlyActivityApps(stateFromStores[12])(id.id);
      }
      return !tmp;
    }
    const filter = sortApplicationsViaFrecency.filter;
    if (onlyActivityApps) {
      const found = filter((application) => {
        let isEmbeddedAppResult = null != application.application;
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = context(stateFromStores[13]).isEmbeddedApp(application.application);
          const obj = context(stateFromStores[13]);
        }
        if (isEmbeddedAppResult) {
          isEmbeddedAppResult = null != context(stateFromStores[14]).queryForPrimaryAppCommand(outer1_0, application.id);
          const obj2 = context(stateFromStores[14]);
        }
        return isEmbeddedAppResult;
      });
      const found1 = found.filter((id) => !outer1_5.includes(id.id));
      let found2 = found1.filter(hideAgeRestricted);
    } else {
      const found3 = filter((id) => !outer1_5.includes(id.id));
      found2 = found3.filter(hideAgeRestricted);
    }
    return found2;
  }, items5);
}
const BuiltInSectionId = TRUE_OPTION_NAME.BuiltInSectionId;
let obj = {};
let items = [require("PermissionOverwriteType").ApplicationCommandType.CHAT, require("PermissionOverwriteType").ApplicationCommandType.PRIMARY_ENTRY_POINT];
obj.commandTypes = items;
obj = { placeholderCount: 0, limit: TRUE_OPTION_NAME.DISCOVERY_COMMANDS_QUERY_LIMIT, includeFrecency: true };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/hooks/useAppLauncherFrecents.tsx");

export default function useAppLauncherFrecentCommandsAndApps(arg0) {
  let context;
  let filterSection;
  let onlyActivityApps;
  let sectionDescriptors;
  ({ context, onlyActivityApps } = arg0);
  let obj = commandsByActiveSection(filterSection[7]);
  obj = { context, filters: obj, options: obj, allowFetch: true };
  const discovery = obj.useDiscovery(obj);
  const commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  ({ sectionDescriptors, filterSection } = discovery);
  let items = [filterSection];
  const effect = stateFromStores.useEffect(() => {
    filterSection(outer1_10.FRECENCY);
  }, items);
  const items1 = [closure_8];
  stateFromStores = onlyActivityApps(filterSection[8]).useStateFromStores(items1, () => outer1_8.getLastUsedCommandId());
  obj = {
    loading: discovery.loading,
    frecencyCommands: stateFromStores.useMemo(() => {
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
        const found = commands.find((id) => id.id === outer1_4);
        let tmp6 = data;
        if (null != found) {
          const items = [found];
          HermesBuiltin.arraySpread(data.filter((id) => id.id !== outer1_4), 1);
          tmp6 = items;
        }
        return tmp6;
      }
    }, items2),
    frecentApps: useFrecentApps({ sectionDescriptors, context, onlyActivityApps, includeAuthorizedAppsAndFetch: true }),
    sectionDescriptors
  };
  items2 = [commands, commandsByActiveSection, stateFromStores, onlyActivityApps];
  return obj;
};
export const useAppLauncherFrecentApps = function useAppLauncherFrecentApps(context) {
  let allowCommandFetch;
  let includeAuthorizedAppsAndFetch;
  let onlyActivityApps;
  context = context.context;
  ({ onlyActivityApps, allowCommandFetch, includeAuthorizedAppsAndFetch } = context);
  let obj = importAll(8233);
  obj = { context, filters: obj, options: obj, allowFetch: allowCommandFetch };
  const discovery = obj.useDiscovery(obj);
  obj = { loading: discovery.loading, frecentApps: useFrecentApps(obj1) };
  return obj;
};
