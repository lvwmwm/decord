// Module ID: 5461
// Function ID: 46642
// Name: ApplicationConnectionCard
// Dependencies: []
// Exports: default

// Module 5461 (ApplicationConnectionCard)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const AnalyticEvents = arg1(dependencyMap[2]).AnalyticEvents;
const jsx = arg1(dependencyMap[3]).jsx;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/guild_onboarding/native/ApplicationConnectionCard.tsx");

export default function ApplicationConnectionCard(connection) {
  let canStartAuthorization;
  let fetched;
  let hasAlreadyLinked;
  connection = connection.connection;
  const arg1 = connection;
  const guildId = connection.guildId;
  const importDefault = guildId;
  const _location = connection.location;
  const dependencyMap = _location;
  let AnalyticEvents;
  let obj = arg1(dependencyMap[4]);
  const items = [closure_4];
  const items1 = [connection.application_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let application = null;
    if (null != connection.application_id) {
      application = analyticsLocations.getApplication(connection.application_id);
    }
    return application;
  }, items1);
  const React = stateFromStores;
  const analyticsLocations = importDefault(dependencyMap[5])(_location).analyticsLocations;
  closure_4 = analyticsLocations;
  const items2 = [stateFromStores, connection.application_id];
  const effect = React.useEffect(() => {
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
    const intl = arg1(dependencyMap[7]).intl;
    name = intl.string(arg1(dependencyMap[7]).t.cgPbaZ);
  }
  const tmp6 = importDefault(dependencyMap[8])(stateFromStores);
  const startAuthorization = tmp6.startAuthorization;
  AnalyticEvents = startAuthorization;
  ({ hasAlreadyLinked, canStartAuthorization, fetched } = tmp6);
  obj = { game: stateFromStores, size: arg1(dependencyMap[9]).GameIconSizes.SMALL };
  const items3 = [startAuthorization, guildId, connection.application_id, _location, analyticsLocations];
  const tmp7 = importDefault(dependencyMap[9]);
  const callback = React.useCallback(() => {
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
  obj.icon = jsx(importDefault(dependencyMap[9]), obj);
  obj.isLoading = !fetched;
  obj.isConnected = hasAlreadyLinked;
  obj.canConnect = canStartAuthorization;
  obj.onConnect = callback;
  return jsx(importDefault(dependencyMap[12]), obj);
};
