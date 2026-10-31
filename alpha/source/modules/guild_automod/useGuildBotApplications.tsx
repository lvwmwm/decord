// Module ID: 19691
// Function ID: 19692
// Name: useGuildBotApplications
// Dependencies: [19, 9075, 504, 9080, 19692, 1379, 2]
// Exports: useGuildBotApplications

// Module 19691 (useGuildBotApplications)
import GlobalUtils from "GlobalUtils" /* 1379 */;
import GuildSettingsFetchActionCreators from "GuildSettingsFetchActionCreators" /* 9080 */;
import react from "react" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9075 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("modules/guild_automod/useGuildBotApplications.tsx");

export function useGuildBotApplications(guildId) {
  let props;
  let stateFromStores;
  _require = guildId;
  let obj = require("get initialized");
  const items = [GuildSettingsStore];
  stateFromStores = obj.useStateFromStores(items, () => props.getProps().integrations);
  const items1 = [guildId, stateFromStores];
  const effect = react.useEffect(() => {
    if (null == stateFromStores) {
      const obj = GuildSettingsFetchActionCreators;
      const guildIntegrationsApplications = obj.fetchGuildIntegrationsApplications(guildId);
    }
  }, items1);
  const items2 = [stateFromStores];
  return react.useMemo(() => {
    let found1 = null;
    const arr = stateFromStores;
    if (null != stateFromStores) {
      const found = arr.filter((type) => type.type === guildId(stateFromStores[4]).IntegrationTypes.DISCORD);
      const mapped = found.map((application) => application.application);
      found1 = mapped.filter(GlobalUtils.isNotNullish);
    }
    return found1;
  }, items2);
}
