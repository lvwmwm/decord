// Module ID: 5480
// Function ID: 46788
// Name: ProviderConnectionCard
// Dependencies: [5, 31, 653, 33, 4066, 4814, 1212, 5481, 5482, 675, 4324, 1392, 3976, 1273, 4074, 5479, 2]
// Exports: default

// Module 5480 (ProviderConnectionCard)
import getPlatformUserUrl from "getPlatformUserUrl";
import result from "result";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("ME").fileFinishedImporting("modules/guild_onboarding/native/ProviderConnectionCard.tsx");

export default function ProviderConnectionCard(connection) {
  let canConnect;
  let hasConnection;
  let loading;
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let startConnection;
  const tmp = guildId(_location[4])();
  let callback = tmp;
  let stringResult = null;
  if (null != connection.provider_id) {
    let obj = guildId(_location[5]);
    let value = obj.get(connection.provider_id);
    let name;
    if (null != value) {
      name = value.name;
    }
    stringResult = name;
  }
  if (null == stringResult) {
    const intl = connection(_location[6]).intl;
    stringResult = intl.string(connection(_location[6]).t.NzCoRx);
  }
  if (null != connection.description) {
    if (connection.description.length > 0) {
      let description = connection.description;
    }
    const startProviderConnection = connection(_location[8]).useStartProviderConnection(connection.provider_id);
    startConnection = startProviderConnection.startConnection;
    ({ hasConnection, canConnect, loading } = startProviderConnection);
    const items = [startConnection, guildId, connection.provider_id, _location];
    const items1 = [connection.provider_id, tmp];
    callback = startConnection.useCallback(callback(async () => {
      let obj = guildId(_location[9]);
      obj = {};
      const merged = Object.assign(connection(_location[10]).collectGuildAnalyticsMetadata(outer1_1));
      obj["connection_type"] = "provider";
      const provider_id = outer1_0.provider_id;
      let tmp2;
      if (null != provider_id) {
        tmp2 = provider_id;
      }
      obj["provider_id"] = tmp2;
      obj["location"] = outer1_2;
      obj.track(outer2_5.GUILD_ONBOARDING_CONNECTION_CLICKED, obj);
      yield outer1_4("Guild Onboarding");
    }), items);
    const memo = startConnection.useMemo(() => {
      if (null != connection.provider_id) {
        let obj = guildId(_location[5]);
        const value = obj.get(connection.provider_id);
        let icon;
        if (null != value) {
          icon = value.icon;
        }
        if (null == icon) {
          const source = obj2.makeSource(null);
          obj = { source, style: { width: 32, height: 32 }, disableColor: true };
          return outer1_6(connection(_location[13]).Icon, obj);
        } else {
          icon = value.icon;
          connection(_location[12]).isThemeDark(getPlatformUserUrl) ? icon.darkPNG : icon.lightPNG;
          const obj3 = connection(_location[12]);
        }
        obj2 = connection(_location[11]);
      } else {
        return outer1_6(connection(_location[14]).LinkIcon, { size: "lg", color: "text-subtle" });
      }
    }, items1);
    obj = { displayName: stringResult, description, icon: memo, isLoading: loading, isConnected: hasConnection, canConnect, onConnect: callback };
    return jsx(guildId(_location[15]), { displayName: stringResult, description, icon: memo, isLoading: loading, isConnected: hasConnection, canConnect, onConnect: callback });
  }
  description = guildId(_location[7])(connection.provider_id);
};
