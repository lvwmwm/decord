// Module ID: 16790
// Function ID: 16791
// Name: UserSettingsAuthedApps
// Dependencies: [19, 17, 7270, 1072, 21, 575, 5009, 9726, 9574, 14571, 5730, 1626, 504, 1498, 1499, 7326, 5619, 1114, 7054, 6969, 9030, 7155, 7159, 7288, 2]
// Exports: DisclosureIcon, default

// Module 16790 (UserSettingsAuthedApps)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import Text_Text from "Text/Text" /* 5619 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5730 */;
import TableRowGroup from "TableRowGroup" /* 7054 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7155 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7159 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 7270 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9574 */;
import applications from "applications" /* 9726 */;
import EmbedIcon from "EmbedIcon" /* 14571 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require, navigation;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, ActivityIndicator: hasOwnProperty } = react_native);
const FetchState = AuthorizedAppsStore2.FetchState;
({ AnalyticsPages: metroImportAll, UserSettingsSections: c9 } = Constants);
({ jsx: c10, jsxs: unpackModuleId, Fragment: closure_12 } = Fragment);
const PX_24 = nativeDefault.space.PX_24;
let obj = { spinner: { padding: 16 }, emptyText: { marginTop: 24 }, emptyContainer: { padding: 16 }, container: obj2, headerDescription: { marginTop: 12 }, appListHeader: { marginTop: 24 } };
obj2 = { paddingHorizontal: 16, paddingTop: nativeDefault.space.PX_24 };
let closure_14 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default function UserSettingsAuthedApps() {
  let appAuthTokens;
  let closure_0;
  let closure_3;
  let intl;
  let items2;
  let items3;
  const tmp = closure_14();
  _require = tmp;
  const bottom = appAuthTokens(navigation[11])().bottom;
  let obj = require("get initialized");
  let items = [AuthorizedAppsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() };
    return obj;
  });
  appAuthTokens = stateFromStoresObject.appAuthTokens;
  const fetchState = stateFromStoresObject.fetchState;
  let obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  let obj3 = require("Link");
  const focusEffect = obj3.useFocusEffect(react.useCallback(() => {
    const obj = appAuthTokens(navigation[15]);
    return obj.fetch();
  }, []));
  let items1 = [navigation];
  react = react.useCallback((item) => {
    let obj2;
    item = item.item;
    const index = item.index;
    const numItems = item.numItems;
    let obj = {
      icon: closure_1_10(appAuthTokens(navigation[20]), obj2),
      label: item.application.name,
      onPress: function handleAppPress() {
        let obj4;
        const obj = UserSettingsModalActionCreatorsDefault;
        obj.setSection(constants.AUTHORIZED_APP);
        const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
        obj4 = { page: metroImportAll.USER_SETTINGS };
        const obj2 = UserSettingsUtils;
        const result = obj2.trackUserSettingsPaneViewed(obj3);
        const obj5 = { oauth2Token: item };
        navigation.push(constants.AUTHORIZED_APP, obj5);
      },
      arrow: true,
      start: 0 === index,
      end: index === numItems - 1
    };
    const TableRow = closure_0(navigation[19]).TableRow;
    obj2 = { application: item.application };
    return closure_1_10(TableRow, obj);
  }, items1);
  if (null != appAuthTokens) {
    let tmp10;
    if (fetchState === FetchState.FETCHED) {
      function renderHeader() {
        let TableRowGroupTitle;
        let intl;
        let intl2;
        let intl3;
        let items;
        let items1;
        let obj6;
        const obj = { children: items1 };
        const obj2 = { children: items };
        const obj3 = { color: "mobile-text-heading-primary", variant: "heading-md/semibold", children: intl.string(intl4.t.HU3RFw) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        items = [authStore(Text, obj3), ];
        const obj4 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: intl2.string(intl4.t.Nu5Yi0) };
        const Text2 = Text_Text.Text;
        intl2 = intl4.intl;
        items[1] = authStore(Text2, obj4);
        items1 = [unpackModuleId(React3, obj2), ];
        const obj5 = { style: closure_0.appListHeader, children: authStore(TableRowGroupTitle, obj6) };
        obj6 = { title: intl3.string(intl4.t.PHjkRE) };
        TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
        intl3 = intl4.intl;
        items1[1] = authStore(React3, obj5);
        return unpackModuleId(authStore2, obj);
      }
      if (0 === appAuthTokens.length) {
        let obj4 = { style: tmp.emptyContainer, children: items2 };
        items2 = [renderHeader(), ];
        let obj5 = { color: "mobile-text-heading-primary", style: tmp.emptyText, variant: "heading-md/extrabold", children: intl.string(require("intl").t["E+SM6T"]) };
        let Text = tmp3(tmp2[16]).Text;
        intl = tmp3(tmp2[17]).intl;
        items2[1] = closure_10(Text, obj5);
        tmp10 = closure_11(closure_4, obj4);
      } else {
        let obj6 = {
          contentContainerStyle: items3,
          ListHeaderComponent: renderHeader(),
          renderItem(item) {
                  const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                  return closure_3(obj);
                },
          data: appAuthTokens.sort((id, id2) => {
                  const NumberResult = Number(id2.id);
                  return NumberResult - Number(id.id);
                }),
          keyExtractor(id) {
                  return id.id;
                }
        };
        items3 = [tmp.container, ];
        const obj7 = { paddingBottom: bottom + PX_24 };
        items3[1] = obj7;
        const FlashList = tmp3(tmp2[23]).FlashList;
        tmp10 = closure_10(FlashList, obj6);
      }
    }
    return tmp10;
  }
  const obj8 = { style: tmp.spinner, animating: true, size: "large" };
  tmp10 = closure_10(closure_5, obj8);
};
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
