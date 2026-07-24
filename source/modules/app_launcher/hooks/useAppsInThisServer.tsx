// Module ID: 11271
// Function ID: 87752
// Name: useAppsInThisServer
// Dependencies: [31, 8007, 1849, 4566, 566, 8233, 1881, 8017, 11270, 22, 8221, 2]
// Exports: default

// Module 11271 (useAppsInThisServer)
import result from "result";
import { useGuildIndexState } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { DISCOVERY_COMMANDS_QUERY_LIMIT as closure_7 } from "TRUE_OPTION_NAME";

const require = arg1;
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/hooks/useAppsInThisServer.tsx");

export default function useAppsInThisServer(context) {
  context = context.context;
  let _require;
  let stateFromStores;
  let commandsByActiveSection;
  let memo;
  let sortApplicationsViaFrecency;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const tmp2Result = useGuildIndexState(guild_id, true);
  _require = tmp2Result;
  let obj = _require(memo[4]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = outer1_6.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  let obj1 = commandsByActiveSection(memo[5]);
  obj = { context };
  obj = {};
  const items1 = [_require(memo[6]).ApplicationCommandType.CHAT, _require(memo[6]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj.commandTypes = items1;
  obj.filters = obj;
  obj1 = { placeholderCount: 0, limit: closure_7, includeFrecency: true };
  obj.options = obj1;
  obj.allowFetch = true;
  const discovery = obj1.useDiscovery(obj);
  commandsByActiveSection = discovery.commandsByActiveSection;
  const items2 = [commandsByActiveSection];
  memo = sortApplicationsViaFrecency.useMemo(() => commandsByActiveSection.reduce((add, data) => {
    if (data.data.length > 0) {
      add.add(tmp.id);
    }
    return add;
  }, new Set()), items2);
  let result = tmp2Result.result;
  let sections;
  if (null != result) {
    sections = result.sections;
  }
  const items3 = [sections, memo];
  const memo1 = sortApplicationsViaFrecency.useMemo(() => {
    const result = _undefined.result;
    let sections;
    if (null != result) {
      sections = result.sections;
    }
    if (null == sections) {
      sections = {};
    }
    const values = Object.values(sections);
    const mapped = values.map((descriptor) => descriptor.descriptor);
    return mapped.filter((id) => {
      const tmp = id.id in callback(memo[7]).BUILT_IN_SECTIONS;
      let hasItem = !tmp;
      if (!tmp) {
        hasItem = outer1_3.has(id.id);
      }
      return hasItem;
    });
  }, items3);
  sortApplicationsViaFrecency = _require(memo[8]).useSortApplicationsViaFrecency(memo1);
  const obj6 = _require(memo[8]);
  const tmp2 = useGuildIndexState;
  const items4 = [stateFromStores, sortApplicationsViaFrecency];
  return {
    appsInThisServer: sortApplicationsViaFrecency.useMemo(() => {
      const obj = stateFromStores(memo[9]);
      const found = stateFromStores(memo[9]).compact(sortApplicationsViaFrecency.map((application) => application.application)).filter((id) => {
        let tmp = false === outer1_1;
        if (tmp) {
          tmp = stateFromStores(memo[10])(id.id);
        }
        return !tmp;
      });
      return found.map((application) => ({ application }));
    }, items4),
    isLoading: tmp12
  };
};
