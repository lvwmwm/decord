// Module ID: 5477
// Function ID: 46765
// Name: ProviderConnectionCard
// Dependencies: []
// Exports: default

// Module 5477 (ProviderConnectionCard)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/guild_onboarding/native/ProviderConnectionCard.tsx");

export default function ProviderConnectionCard(connection) {
  let canConnect;
  let hasConnection;
  let loading;
  connection = connection.connection;
  const arg1 = connection;
  const guildId = connection.guildId;
  const importDefault = guildId;
  const _location = connection.location;
  const dependencyMap = _location;
  let React;
  const tmp = importDefault(dependencyMap[4])();
  let callback = tmp;
  let stringResult = null;
  if (null != connection.provider_id) {
    let obj = importDefault(dependencyMap[5]);
    const value = obj.get(connection.provider_id);
    let name;
    if (null != value) {
      name = value.name;
    }
    stringResult = name;
  }
  if (null == stringResult) {
    const intl = arg1(dependencyMap[6]).intl;
    stringResult = intl.string(arg1(dependencyMap[6]).t.NzCoRx);
  }
  if (null != connection.description) {
    if (connection.description.length > 0) {
      let description = connection.description;
    }
    const startProviderConnection = arg1(dependencyMap[8]).useStartProviderConnection(connection.provider_id);
    const startConnection = startProviderConnection.startConnection;
    React = startConnection;
    ({ hasConnection, canConnect, loading } = startProviderConnection);
    const items = [startConnection, guildId, connection.provider_id, _location];
    const items1 = [connection.provider_id, tmp];
    callback = React.useCallback(callback(async () => {
      let obj = callback(closure_2[9]);
      obj = {};
      const merged = Object.assign(lib(closure_2[10]).collectGuildAnalyticsMetadata(callback));
      obj["connection_type"] = "provider";
      const provider_id = lib.provider_id;
      let tmp2;
      if (null != provider_id) {
        tmp2 = provider_id;
      }
      obj["provider_id"] = tmp2;
      obj["location"] = closure_2;
      obj.track(constants.GUILD_ONBOARDING_CONNECTION_CLICKED, obj);
      yield closure_4("Guild Onboarding");
    }), items);
    const memo = React.useMemo(() => {
      if (null != connection.provider_id) {
        let obj = guildId(_location[5]);
        const value = obj.get(connection.provider_id);
        let icon;
        if (null != value) {
          icon = value.icon;
        }
        if (null == icon) {
          const source = obj2.makeSource(null);
          obj = { source, style: { "Null": true, "Null": true }, disableColor: true };
          return callback(connection(_location[13]).Icon, obj);
        } else {
          icon = value.icon;
          connection(_location[12]).isThemeDark(tmp) ? icon.darkPNG : icon.lightPNG;
          const obj3 = connection(_location[12]);
        }
        const obj2 = connection(_location[11]);
      } else {
        return callback(connection(_location[14]).LinkIcon, { "Bool(false)": false, "Bool(false)": false });
      }
    }, items1);
    obj = { displayName: stringResult, description, icon: memo, isLoading: loading, isConnected: hasConnection, canConnect, onConnect: callback };
    return jsx(importDefault(dependencyMap[15]), obj);
  }
  description = importDefault(dependencyMap[7])(connection.provider_id);
};
