// Module ID: 13861
// Function ID: 106105
// Name: ADD_CONNECTIONS_SHEET_SENTINEL
// Dependencies: [31, 27, 5066, 1194, 4812, 1921, 653, 33, 4130, 689, 4066, 566, 12119, 5472, 4938, 4098, 13860, 1934, 8970, 13862, 7495, 13865, 4541, 13866, 2]
// Exports: UserSettingsConnections

// Module 13861 (ADD_CONNECTIONS_SHEET_SENTINEL)
import result from "result";
import { ActivityIndicator } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import { AnalyticsLocations } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_11;
let closure_12;
const require = arg1;
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.form = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/connections/native/UserSettingsConnections.tsx");

export const ADD_CONNECTIONS_SHEET_SENTINEL = -1;
export const UserSettingsConnections = function UserSettingsConnections(selectedPlatformType) {
  let accounts;
  let fetching;
  selectedPlatformType = selectedPlatformType.selectedPlatformType;
  const tmp = _createForOfIteratorHelperLoose();
  importDefault = importDefault(4066)();
  let obj = selectedPlatformType(566);
  const items = [closure_9];
  const dependencyMap = obj.useStateFromStores(items, () => outer1_9.locale);
  let obj1 = selectedPlatformType(566);
  const items1 = [closure_8];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items1, () => ({ fetching: outer1_8.isFetching(), accounts: outer1_8.getAccounts() }));
  ({ accounts, fetching } = stateFromStoresObject);
  const items2 = [_isNativeReflectConstruct];
  const stateFromStoresObject1 = selectedPlatformType(566).useStateFromStoresObject(items2, () => ({ authorizedAppsFetchState: outer1_5.getFetchState(), authorizedApps: outer1_5.getNewestTokensForNonChildrenApplications() }));
  const authorizedAppsFetchState = stateFromStoresObject1.authorizedAppsFetchState;
  const authorizedApps = stateFromStoresObject1.authorizedApps;
  const obj3 = selectedPlatformType(566);
  const tmp4Result = importDefault(12119)(id.getId(), { includeHidden: true });
  const prop = tmp4Result.filteredAppIdentities;
  const items3 = [authorizedAppsFetchState];
  const effect = authorizedAppsFetchState.useEffect(() => {
    if (authorizedAppsFetchState === outer1_6.NOT_FETCHED) {
      const response = callback(paths[13]).fetch();
      const obj = callback(paths[13]);
    }
  }, items3);
  const effect1 = authorizedAppsFetchState.useEffect(() => {
    const response = callback(paths[14]).fetch();
  }, []);
  const items4 = [selectedPlatformType];
  const effect2 = authorizedAppsFetchState.useEffect(() => {
    if (null != selectedPlatformType) {
      if (-1 === selectedPlatformType) {
        callback(paths[15]).openLazy(selectedPlatformType(paths[17])(paths[16], paths.paths), "AddConnection");
        const obj2 = callback(paths[15]);
      } else {
        const obj = { platformType: selectedPlatformType, location: outer1_10.USER_SETTINGS };
        callback(paths[18])(obj);
      }
    }
  }, items4);
  if (!fetching) {
    if (!tmp4Result.isLoading) {
      if (0 === accounts.length) {
        if (0 === prop.length) {
          let tmp13 = callback(importDefault(13862), {});
        }
      }
      obj = { style: tmp.form };
      const items5 = [
        prop.map((application_id) => {
              let closure_0 = application_id;
              const obj = { identity: application_id, token: authorizedApps.find((application) => application.application.id === application_id.application_id) };
              return outer1_11(callback(paths[21]), obj, "" + application_id.application_id + "-" + application_id.provider_issued_user_id);
            }),

      ];
      obj = { spacing: 16, children: accounts.map((account) => outer1_11(callback(paths[23]), { theme: callback, locale: paths, account }, account.id)) };
      items5[1] = callback(selectedPlatformType(4541).Stack, obj);
      obj.children = items5;
      tmp13 = callback2(selectedPlatformType(7495).Form, obj);
    }
    return tmp13;
  }
  obj1 = { style: tmp.flex, size: "large" };
  tmp13 = callback(authorizedApps, obj1);
};
