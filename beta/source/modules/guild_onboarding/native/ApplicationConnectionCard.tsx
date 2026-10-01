// Module ID: 6582
// Function ID: 6583
// Name: ApplicationConnectionCard
// Dependencies: [19, 5063, 1074, 21, 504, 6583, 6584, 1115, 6586, 6593, 1241, 5016, 6598, 2]
// Exports: default

// Module 6582 (ApplicationConnectionCard)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5016 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6584 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/guild_onboarding/native/ApplicationConnectionCard.tsx");

export default function ApplicationConnectionCard(connection) {
  let canStartAuthorization;
  let fetched;
  let hasAlreadyLinked;
  connection = connection.connection;
  const guildId = connection.guildId;
  const _location = connection.location;
  let analyticsLocations;
  let startAuthorization;
  const tmp = connection;
  let obj = connection(_location[4]);
  const items = [analyticsLocations];
  const items1 = [connection.application_id];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let application = null;
    if (null != connection.application_id) {
      application = ApplicationStore.getApplication(tmp.application_id);
    }
    return application;
  }, items1);
  analyticsLocations = guildId(_location[5])(_location).analyticsLocations;
  let obj2 = stateFromStores;
  const items2 = [stateFromStores, connection.application_id];
  const effect = stateFromStores.useEffect(() => {
    const result = null != stateFromStores || null == connection.application_id || ApplicationStore.isFetchingApplication(connection.application_id) || ApplicationStore.didFetchingApplicationFail(connection.application_id);
    if (!result) {
      const obj = ApplicationActionCreators;
      const application = obj.fetchApplication(connection.application_id);
      application.catch(() => {

      });
    }
  }, items2);
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  if (name == null) {
    const intl = tmp(tmp2[7]).intl;
    name = intl.string(tmp(tmp2[7]).t.cgPbaZ);
  }
  const tmp7 = guildId(_location[8])(stateFromStores);
  startAuthorization = tmp7.startAuthorization;
  ({ hasAlreadyLinked, canStartAuthorization, fetched } = tmp7);
  guildId(_location[9]);
  const items3 = [startAuthorization, guildId, connection.application_id, _location, analyticsLocations];
  const tmp9 = <tmp4Result game={stateFromStores} size={tmp(_location[9]).GameIconSizes.SMALL} />;
  const callback = obj2.useCallback(() => {
    let application_id;
    const obj = { connection_type: "application", application_id, location: _location };
    const track = AnalyticsUtilsDefault.track;
    const GUILD_ONBOARDING_CONNECTION_CLICKED = AnalyticEvents.GUILD_ONBOARDING_CONNECTION_CLICKED;
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    application_id = connection.application_id;
    track(GUILD_ONBOARDING_CONNECTION_CLICKED, obj);
    const obj3 = { analyticsLocations };
    startAuthorization(obj3);
  }, items3);
  return jsx(guildId(_location[12]), { displayName: name, description: connection.description, icon: tmp9, isLoading: !fetched, isConnected: hasAlreadyLinked, canConnect: canStartAuthorization, onConnect: callback });
};
