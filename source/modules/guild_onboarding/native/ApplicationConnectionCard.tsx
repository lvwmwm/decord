// Module ID: 5461
// Function ID: 46666
// Name: ApplicationConnectionCard
// Dependencies: [31, 4167, 653, 33, 566, 5462, 5463, 1212, 5465, 5472, 675, 4324, 5477, 2]
// Exports: default

// Module 5461 (ApplicationConnectionCard)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
let result = require("ME").fileFinishedImporting("modules/guild_onboarding/native/ApplicationConnectionCard.tsx");

export default function ApplicationConnectionCard(connection) {
  let canStartAuthorization;
  let fetched;
  let hasAlreadyLinked;
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let startAuthorization;
  let obj = connection(_location[4]);
  const items = [analyticsLocations];
  const items1 = [connection.application_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let application = null;
    if (null != connection.application_id) {
      application = analyticsLocations.getApplication(connection.application_id);
    }
    return application;
  }, items1);
  analyticsLocations = guildId(_location[5])(_location).analyticsLocations;
  const items2 = [stateFromStores, connection.application_id];
  const effect = stateFromStores.useEffect(() => {
    let result = null != stateFromStores;
    if (!result) {
      result = null == connection.application_id;
    }
    if (!result) {
      result = analyticsLocations.isFetchingApplication(connection.application_id);
    }
    if (!result) {
      result = analyticsLocations.didFetchingApplicationFail(connection.application_id);
    }
    if (!result) {
      const application = connection(_location[6]).fetchApplication(connection.application_id);
      application.catch(() => {

      });
      const obj = connection(_location[6]);
    }
  }, items2);
  let name;
  if (null != stateFromStores) {
    name = stateFromStores.name;
  }
  if (null == name) {
    const intl = connection(_location[7]).intl;
    name = intl.string(connection(_location[7]).t.cgPbaZ);
  }
  const tmp6 = guildId(_location[8])(stateFromStores);
  startAuthorization = tmp6.startAuthorization;
  ({ hasAlreadyLinked, canStartAuthorization, fetched } = tmp6);
  obj = { game: stateFromStores, size: connection(_location[9]).GameIconSizes.SMALL };
  const items3 = [startAuthorization, guildId, connection.application_id, _location, analyticsLocations];
  const tmp7 = guildId(_location[9]);
  const callback = stateFromStores.useCallback(() => {
    let obj = guildId(_location[10]);
    obj = {};
    const merged = Object.assign(connection(_location[11]).collectGuildAnalyticsMetadata(guildId));
    obj["connection_type"] = "application";
    const application_id = connection.application_id;
    let tmp2;
    if (null != application_id) {
      tmp2 = application_id;
    }
    obj["application_id"] = tmp2;
    obj["location"] = _location;
    obj.track(startAuthorization.GUILD_ONBOARDING_CONNECTION_CLICKED, obj);
    obj = { analyticsLocations };
    startAuthorization(obj);
  }, items3);
  obj = { displayName: name, description: connection.description };
  obj.icon = jsx(guildId(_location[9]), { displayName: name, description: connection.description });
  obj.isLoading = !fetched;
  obj.isConnected = hasAlreadyLinked;
  obj.canConnect = canStartAuthorization;
  obj.onConnect = callback;
  return jsx(guildId(_location[12]), { displayName: name, description: connection.description });
};
