// Module ID: 12273
// Function ID: 12274
// Name: useAppsInThisServer
// Dependencies: [19, 9742, 1384, 6030, 504, 10296, 1993, 9750, 12272, 12, 10298, 2]
// Exports: default

// Module 12273 (useAppsInThisServer)
import _modDef12 from "module_12" /* 12 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 6030 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 9742 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, currentUser, set;

const useGuildIndexState = ApplicationCommandIndexStore.useGuildIndexState;
const limit = ApplicationCommandConstants.DISCOVERY_COMMANDS_QUERY_LIMIT;
let result = size.fileFinishedImporting("modules/app_launcher/hooks/useAppsInThisServer.tsx");

export default function useAppsInThisServer(context) {
  let items1;
  let items4;
  let obj3;
  let obj4;
  context = context.context;
  _require = undefined;
  let stateFromStores;
  let commandsByActiveSection;
  let memo;
  let sortApplicationsViaFrecency;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let guild_id;
  const tmp2 = useGuildIndexState;
  if (channel != null) {
    guild_id = channel.guild_id;
  }
  const tmp2Result = tmp2(guild_id, true);
  _require = tmp2Result;
  let obj = require("get initialized");
  const items = [UserStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (currentUser != null) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  const obj2 = { context, filters: obj3, options: obj4, allowFetch: true };
  obj3 = { commandTypes: items1 };
  const useDiscovery = commandsByActiveSection(memo[5]).useDiscovery;
  items1 = [, ];
  commandsByActiveSection(memo[5]);
  items1[0] = require("Server").ApplicationCommandType.CHAT;
  items1[1] = require("Server").ApplicationCommandType.PRIMARY_ENTRY_POINT;
  obj4 = { placeholderCount: 0, limit, includeFrecency: true };
  const discovery = useDiscovery(obj2);
  commandsByActiveSection = discovery.commandsByActiveSection;
  const items2 = [commandsByActiveSection];
  const loading = discovery.loading;
  const tmp6 = memo;
  memo = sortApplicationsViaFrecency.useMemo(() => {
    const reduce = commandsByActiveSection.reduce;
    set = new Set();
    return reduce((add, data) => {
      if (data.data.length > 0) {
        add.add(tmp.id);
      }
      return add;
    }, set);
  }, items2);
  let result = tmp2Result.result;
  let sections;
  const useMemo = sortApplicationsViaFrecency.useMemo;
  const obj5 = sortApplicationsViaFrecency;
  const tmp5 = _require;
  if (result != null) {
    sections = result.sections;
  }
  const items3 = [sections, memo];
  const memo1 = useMemo(() => {
    result = result.result;
    let sections;
    const _Object = Object;
    if (result != null) {
      sections = result.sections;
    }
    if (sections == null) {
      sections = {};
    }
    const values2 = values(sections);
    const mapped = values2.map((descriptor) => descriptor.descriptor);
    return mapped.filter((id) => {
      const hasItem = !(id.id in require("ApplicationCommandBuiltIns").BUILT_IN_SECTIONS) && set.has(id.id);
      return hasItem;
    });
  }, items3);
  const tmp5Result = tmp5(tmp6[8]);
  sortApplicationsViaFrecency = tmp5Result.useSortApplicationsViaFrecency(memo1);
  const obj6 = {
    appsInThisServer: obj5.useMemo(() => {
      const obj = _modDef12;
      const compactResult = obj.compact(sortApplicationsViaFrecency.map((application) => application.application));
      const found = compactResult.filter((id) => {
        const tmp = false === closure_1_1 && stateFromStores(memo[10])(id.id);
        return !tmp;
      });
      return found.map((application) => ({ application }));
    }, items4),
    isLoading: tmp2Result.fetchState.fetching || loading
  };
  items4 = [stateFromStores, sortApplicationsViaFrecency];
  return obj6;
};
