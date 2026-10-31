// Module ID: 16843
// Function ID: 16844
// Name: UserSettingsAuthedApps
// Dependencies: [19, 17, 7276, 1072, 21, 5014, 575, 9746, 9050, 14609, 5735, 504, 1498, 7332, 5624, 1113, 1497, 6975, 9041, 7161, 7165, 2]
// Exports: AuthorizedAppRow, AuthorizedAppsEmpty, AuthorizedAppsHeader, DisclosureIcon, useAuthorizedApps

// Module 16843 (UserSettingsAuthedApps)
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5735 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7161 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7165 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7276 */;
import TableRowApplicationIconDefault from "TableRowApplicationIcon" /* 9041 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9050 */;
import applications from "applications" /* 9746 */;
import EmbedIcon from "EmbedIcon" /* 14609 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const AuthorizedAppsStore = AuthorizedAppsStore2;
let importDefault;

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
const FetchState = AuthorizedAppsStore2.FetchState;
({ AnalyticsPages: metroImportAll, UserSettingsSections: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { spinner: obj2, emptyText: obj3, headerDescription: obj4, appListHeader: obj5 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
obj4 = { marginTop: nativeDefault.space.PX_8 };
obj5 = { marginBottom: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export function DisclosureIcon(disclosure) {
  disclosure = disclosure.disclosure;
  const style = disclosure.style;
  const items = [disclosure, style];
  return react.useMemo(() => {
    const tmp = disclosure;
    if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
      const obj2 = { style, size: "xs" };
      return authStore(GlobeEarthIcon.GlobeEarthIcon, obj2);
    } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === tmp) {
      const obj3 = { style, size: "xs" };
      return authStore(EmbedIcon.EmbedIcon, obj3);
    } else {
      const obj = { style, size: "xs" };
      return authStore(CircleInformationIcon.CircleInformationIcon, obj);
    }
  }, items);
}
export function useAuthorizedApps() {
  let appAuthTokens;
  let obj = appAuthTokens(504);
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() };
    return obj;
  });
  appAuthTokens = stateFromStoresObject.appAuthTokens;
  const fetchState = stateFromStoresObject.fetchState;
  const obj2 = appAuthTokens(1498);
  const focusEffect = obj2.useFocusEffect(react.useCallback(() => {
    const obj = closure_1(dependencyMap[13]);
    return obj.fetch();
  }, []));
  let closure_1 = tmp3;
  const items1 = [appAuthTokens, tmp3];
  const obj3 = {
    loading: fetchState !== FetchState.FETCHED,
    apps: react.useMemo(() => {
      let sorted;
      const items = [];
      if (closure_1) {
        sorted = items;
      } else {
        HermesBuiltin.arraySpread(items, appAuthTokens, 0);
        sorted = items.sort((id, id2) => {
          const NumberResult = Number(id2.id);
          return NumberResult - Number(id.id);
        });
      }
      return sorted;
    }, items1)
  };
  return obj3;
}
export function AuthorizedAppsHeader() {
  let intl;
  let intl2;
  let items;
  const tmp = closure_12();
  const obj = { style: tmp.appListHeader, children: items };
  const obj2 = { color: "text-strong", variant: "heading-md/semibold", children: intl.string(intl3.t["f6kk+r"]) };
  const Heading = Text_Text.Heading;
  intl = intl3.intl;
  items = [authStore(Heading, obj2), ];
  const obj3 = { style: tmp.headerDescription, color: "text-default", variant: "text-sm/normal", children: intl2.string(intl3.t.G9JfLg) };
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = authStore(Text, obj3);
  return unpackModuleId(React3, obj);
}
export function AuthorizedAppsEmpty(loading) {
  let intl;
  let tmp2Result;
  loading = loading.loading;
  const tmp = closure_12();
  if (loading) {
    const obj2 = { style: tmp.spinner, animating: true, size: "large" };
    tmp2Result = tmp2(hasOwnProperty, obj2);
  } else {
    const obj = { color: "text-default", style: tmp.emptyText, variant: "text-sm/normal", children: intl.string(intl3.t["E+SM6T"]) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    tmp2Result = tmp2(Text, obj);
  }
  return tmp2Result;
}
export function AuthorizedAppRow(app) {
  let closure_1;
  let end;
  let obj3;
  let start;
  app = app.app;
  ({ start, end } = app);
  let obj = app(1497);
  importDefault = obj.useNavigation();
  let obj2 = {
    icon: closure_10(TableRowApplicationIconDefault, obj3),
    label: app.application.name,
    onPress: function handleAppPress() {
      let obj4;
      const obj = UserSettingsModalActionCreatorsDefault;
      obj.setSection(constants.AUTHORIZED_APP);
      const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: app.application.id };
      obj4 = { page: metroImportAll.USER_SETTINGS };
      const obj2 = UserSettingsUtils;
      const result = obj2.trackUserSettingsPaneViewed(obj3);
      const obj5 = { oauth2Token: app };
      closure_1.push(constants.AUTHORIZED_APP, obj5);
    },
    arrow: true,
    start,
    end
  };
  const TableRow = app(6975).TableRow;
  obj3 = { application: app.application };
  return closure_10(TableRow, obj2);
}
