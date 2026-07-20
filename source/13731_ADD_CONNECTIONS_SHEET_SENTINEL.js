// Module ID: 13731
// Function ID: 103871
// Name: ADD_CONNECTIONS_SHEET_SENTINEL
// Dependencies: []
// Exports: UserSettingsConnections

// Module 13731 (ADD_CONNECTIONS_SHEET_SENTINEL)
let closure_3 = importAll(dependencyMap[0]);
const ActivityIndicator = arg1(dependencyMap[1]).ActivityIndicator;
let closure_5 = importDefault(dependencyMap[2]);
const FetchState = arg1(dependencyMap[2]).FetchState;
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const AnalyticsLocations = arg1(dependencyMap[6]).AnalyticsLocations;
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { flex: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, padding: importDefault(dependencyMap[9]).space.PX_16 };
obj.form = obj;
let closure_13 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_settings/connections/native/UserSettingsConnections.tsx");

export const ADD_CONNECTIONS_SHEET_SENTINEL = -1;
export const UserSettingsConnections = function UserSettingsConnections(selectedPlatformType) {
  let accounts;
  let fetching;
  selectedPlatformType = selectedPlatformType.selectedPlatformType;
  const arg1 = selectedPlatformType;
  const tmp = callback3();
  const importDefault = importDefault(closure_2[10])();
  let obj = arg1(closure_2[11]);
  const items = [closure_9];
  closure_2 = obj.useStateFromStores(items, () => locale.locale);
  let obj1 = arg1(closure_2[11]);
  const items1 = [closure_8];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ fetching: closure_8.isFetching(), accounts: closure_8.getAccounts() }));
  ({ accounts, fetching } = stateFromStoresObject);
  const items2 = [closure_5];
  const stateFromStoresObject1 = arg1(closure_2[11]).useStateFromStoresObject(items2, () => ({ authorizedAppsFetchState: authStore.getFetchState(), authorizedApps: authStore.getNewestTokensForNonChildrenApplications() }));
  const authorizedAppsFetchState = stateFromStoresObject1.authorizedAppsFetchState;
  const React = authorizedAppsFetchState;
  const ActivityIndicator = stateFromStoresObject1.authorizedApps;
  const obj3 = arg1(closure_2[11]);
  const tmp4Result = importDefault(closure_2[12])(id.getId(), { includeHidden: true });
  const prop = tmp4Result.filteredAppIdentities;
  const items3 = [authorizedAppsFetchState];
  const effect = React.useEffect(() => {
    if (authorizedAppsFetchState === constants.NOT_FETCHED) {
      const response = callback(closure_2[13]).fetch();
      const obj = callback(closure_2[13]);
    }
  }, items3);
  const effect1 = React.useEffect(() => {
    const response = callback(closure_2[14]).fetch();
  }, []);
  const items4 = [selectedPlatformType];
  const effect2 = React.useEffect(() => {
    if (null != selectedPlatformType) {
      if (-1 === selectedPlatformType) {
        callback(paths[15]).openLazy(selectedPlatformType(paths[17])(paths[16], paths.paths), "AddConnection");
        const obj2 = callback(paths[15]);
      } else {
        const obj = { platformType: selectedPlatformType, location: constants2.USER_SETTINGS };
        callback(paths[18])(obj);
      }
    }
  }, items4);
  if (!fetching) {
    if (!tmp4Result.isLoading) {
      if (0 === accounts.length) {
        if (0 === prop.length) {
          let tmp13 = callback(importDefault(closure_2[19]), {});
        }
      }
      obj = { style: tmp.form };
      const items5 = [
        prop.map((application_id) => {
              const selectedPlatformType = application_id;
              const obj = { identity: application_id, token: authorizedApps.find((application) => application.application.id === application.application_id) };
              return callback2(callback(closure_2[21]), obj, "" + application_id.application_id + "-" + application_id.provider_issued_user_id);
            }),

      ];
      obj = { spacing: 16, children: accounts.map((account) => callback2(callback(closure_2[23]), { theme: callback, locale: closure_2, account }, account.id)) };
      items5[1] = callback(arg1(closure_2[22]).Stack, obj);
      obj.children = items5;
      tmp13 = callback2(arg1(closure_2[20]).Form, obj);
    }
    return tmp13;
  }
  obj1 = { style: tmp.flex, size: "large" };
  tmp13 = callback(ActivityIndicator, obj1);
};
