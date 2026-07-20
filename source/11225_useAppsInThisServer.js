// Module ID: 11225
// Function ID: 87414
// Name: useAppsInThisServer
// Dependencies: []
// Exports: default

// Module 11225 (useAppsInThisServer)
let closure_4 = importAll(dependencyMap[0]);
const useGuildIndexState = arg1(dependencyMap[1]).useGuildIndexState;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = arg1(dependencyMap[3]).DISCOVERY_COMMANDS_QUERY_LIMIT;
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/app_launcher/hooks/useAppsInThisServer.tsx");

export default function useAppsInThisServer(context) {
  context = context.context;
  let arg1;
  let importDefault;
  let importAll;
  let dependencyMap;
  let React;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let guild_id;
  if (null != channel) {
    guild_id = channel.guild_id;
  }
  const tmp2Result = useGuildIndexState(guild_id, true);
  arg1 = tmp2Result;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const currentUser = currentUser.getCurrentUser();
    let nsfwAllowed;
    if (null != currentUser) {
      nsfwAllowed = currentUser.nsfwAllowed;
    }
    return nsfwAllowed;
  });
  importDefault = stateFromStores;
  let obj1 = importAll(dependencyMap[5]);
  obj = { context };
  obj = {};
  const items1 = [arg1(dependencyMap[6]).ApplicationCommandType.CHAT, arg1(dependencyMap[6]).ApplicationCommandType.PRIMARY_ENTRY_POINT];
  obj.commandTypes = items1;
  obj.filters = obj;
  obj1 = { limit: closure_7 };
  obj.options = obj1;
  obj.allowFetch = true;
  const discovery = obj1.useDiscovery(obj);
  const commandsByActiveSection = discovery.commandsByActiveSection;
  importAll = commandsByActiveSection;
  const items2 = [commandsByActiveSection];
  const memo = React.useMemo(() => commandsByActiveSection.reduce((add, data) => {
    if (data.data.length > 0) {
      add.add(tmp.id);
    }
    return add;
  }, new Set()), items2);
  dependencyMap = memo;
  const result = tmp2Result.result;
  let sections;
  if (null != result) {
    sections = result.sections;
  }
  const items3 = [sections, memo];
  const memo1 = React.useMemo(() => {
    const result = tmp2Result.result;
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
      const tmp = id.id in callback(set[7]).BUILT_IN_SECTIONS;
      let hasItem = !tmp;
      if (!tmp) {
        hasItem = set.has(id.id);
      }
      return hasItem;
    });
  }, items3);
  const sortApplicationsViaFrecency = arg1(dependencyMap[8]).useSortApplicationsViaFrecency(memo1);
  React = sortApplicationsViaFrecency;
  const obj6 = arg1(dependencyMap[8]);
  const tmp2 = useGuildIndexState;
  const items4 = [stateFromStores, sortApplicationsViaFrecency];
  return {
    appsInThisServer: React.useMemo(() => {
      const obj = stateFromStores(memo[9]);
      const found = stateFromStores(memo[9]).compact(sortApplicationsViaFrecency.map((application) => application.application)).filter((id) => {
        let tmp = false === callback;
        if (tmp) {
          tmp = callback(closure_3[10])(id.id);
        }
        return !tmp;
      });
      return found.map((application) => ({ application }));
    }, items4),
    isLoading: tmp12
  };
};
