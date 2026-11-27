// Module ID: 20065
// Function ID: 20066
// Name: useGuildSettingsAppIntegration
// Dependencies: [8575, 504, 2]
// Exports: default

// Module 20065 (useGuildSettingsAppIntegration)
import GuildSettingsStore from "GuildSettingsStore" /* 8575 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, application;

const result = size.fileFinishedImporting("modules/guild_settings/integrations/useGuildSettingsAppIntegration.tsx");

export default function useGuildSettingsAppIntegration(arg0) {
  let closure_0;
  _require = arg0;
  const items = [GuildSettingsStore];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => GuildSettingsStore.getGuild(), []);
  const items1 = [GuildSettingsStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => GuildSettingsStore.getProps().integrations);
  let found;
  if (stateFromStores1 != null) {
    found = stateFromStores1.find((application) => {
      application = application.application;
      let tmp = "discord" === application.type;
      if (tmp) {
        let id;
        if (application != null) {
          id = application.id;
        }
        tmp = id === closure_0;
      }
      return tmp;
    });
  }
  return { guild: stateFromStores, integration: found, isRemoved: null != stateFromStores1 && null == found };
};
