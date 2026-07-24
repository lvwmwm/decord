// Module ID: 13892
// Function ID: 106321
// Name: UserSettingsAuthedApps
// Dependencies: [31, 27, 5066, 653, 33, 689, 4130, 8997, 9062, 9064, 4086, 1557, 566, 1456, 1457, 5470, 4126, 1212, 5501, 1392, 5165, 11206, 7375, 5793, 2]
// Exports: DisclosureIcon, default

// Module 13892 (UserSettingsAuthedApps)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { FetchState } from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
let closure_6;
let closure_9;
let require = arg1;
({ View: closure_4, ActivityIndicator: closure_5, FlatList: closure_6 } = get_ActivityIndicator);
({ AnalyticsPages: closure_9, UserSettingsSections: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = jsxProd);
const PX_24 = require("_createForOfIteratorHelperLoose").space.PX_24;
_createForOfIteratorHelperLoose = { spinner: { padding: 16 }, emptyText: { marginTop: 24 }, emptyContainer: { padding: 16 } };
_createForOfIteratorHelperLoose = { paddingHorizontal: 16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerDescription = { marginTop: 12 };
_createForOfIteratorHelperLoose.appListHeader = { marginTop: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default function UserSettingsAuthedApps() {
  function renderHeader() {
    let obj = {};
    obj = {};
    obj = { color: "mobile-text-heading-primary", variant: "heading-md/semibold" };
    const intl = tmp(navigation[17]).intl;
    obj.children = intl.string(tmp(navigation[17]).t.HU3RFw);
    const items = [outer1_11(tmp(navigation[16]).Text, obj), ];
    const obj1 = { style: tmp.headerDescription, variant: "heading-sm/medium" };
    const intl2 = tmp(navigation[17]).intl;
    obj1.children = intl2.string(tmp(navigation[17]).t.Nu5Yi0);
    items[1] = outer1_11(tmp(navigation[16]).Text, obj1);
    obj.children = items;
    const items1 = [outer1_12(outer1_4, obj), ];
    const obj2 = { style: tmp.appListHeader };
    const obj3 = {};
    const intl3 = tmp(navigation[17]).intl;
    obj3.title = intl3.string(tmp(navigation[17]).t.PHjkRE);
    obj2.children = outer1_11(tmp(navigation[18]).TableRowGroupTitle, obj3);
    items1[1] = outer1_11(outer1_4, obj2);
    obj.children = items1;
    return outer1_12(outer1_13, obj);
  }
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = require(navigation[12]);
  let items = [_isNativeReflectConstruct];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetchState: outer1_7.getFetchState(), appAuthTokens: outer1_7.getNewestTokensForNonChildrenApplications() }));
  const appAuthTokens = stateFromStoresObject.appAuthTokens;
  let obj1 = require(navigation[13]);
  navigation = obj1.useNavigation();
  let obj2 = require(navigation[14]);
  const focusEffect = obj2.useFocusEffect(React.useCallback(() => appAuthTokens(navigation[15]).fetch(), []));
  let items1 = [navigation];
  React = React.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = appAuthTokens(navigation[19]);
    obj = { id: item.application.id, icon: item.application.icon };
    const applicationIconSource = obj.getApplicationIconSource(obj);
    obj = {
      icon: outer1_11(appAuthTokens(navigation[21]), { iconSource: applicationIconSource, iconBorderRadius: 6 }),
      label: item.application.name,
      onPress() {
        let obj = appAuthTokens(navigation[22]);
        obj.setSection(outer2_10.AUTHORIZED_APP);
        let obj1 = item(navigation[23]);
        obj = { destinationPane: outer2_10.AUTHORIZED_APP, source: obj, applicationId: item.application.id };
        obj = { page: outer2_9.USER_SETTINGS };
        const result = obj1.trackUserSettingsPaneViewed(obj);
        obj1 = { oauth2Token: item };
        outer1_2.push(outer2_10.AUTHORIZED_APP, obj1);
      },
      arrow: true,
      start: 0 === index,
      end: index === item.numItems - 1
    };
    return outer1_11(tmp(navigation[20]).TableRow, obj, item.id);
  }, items1);
  if (null != appAuthTokens) {
    if (stateFromStoresObject.fetchState === FetchState.FETCHED) {
      if (0 === appAuthTokens.length) {
        obj = { style: tmp.emptyContainer };
        const items2 = [renderHeader(), ];
        obj = { color: "mobile-text-heading-primary", style: tmp.emptyText, variant: "heading-md/extrabold" };
        let intl = require(navigation[17]).intl;
        obj.children = intl.string(require(navigation[17]).t["E+SM6T"]);
        items2[1] = callback(require(navigation[16]).Text, obj);
        obj.children = items2;
        let tmp8 = callback2(closure_4, obj);
      } else {
        obj1 = {};
        const items3 = [tmp.container, ];
        obj2 = { paddingBottom: appAuthTokens(navigation[11])().bottom + PX_24 };
        items3[1] = obj2;
        obj1.contentContainerStyle = items3;
        obj1.ListHeaderComponent = renderHeader();
        obj1.renderItem = function renderItem(item) {
          return callback({ item: item.item, index: item.index, numItems: appAuthTokens.length });
        };
        obj1.data = appAuthTokens.sort((id, id2) => Number(id2.id) - Number(id.id));
        tmp8 = callback(closure_6, obj1);
      }
    }
    return tmp8;
  }
  let obj3 = { style: tmp.spinner, animating: true, size: "large" };
  tmp8 = callback(closure_5, obj3);
};
export const DisclosureIcon = function DisclosureIcon(disclosure) {
  disclosure = disclosure.disclosure;
  const style = disclosure.style;
  const items = [disclosure, style];
  return React.useMemo(() => {
    if (disclosure(outer1_2[7]).ApplicationDisclosureType.IP_LOCATION === disclosure) {
      let obj = { style, size: "xs" };
      return outer1_11(disclosure(outer1_2[8]).GlobeEarthIcon, obj);
    } else if (disclosure(outer1_2[7]).ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === tmp) {
      obj = { style, size: "xs" };
      return outer1_11(disclosure(outer1_2[9]).EmbedIcon, obj);
    } else {
      obj = { style, size: "xs" };
      return outer1_11(disclosure(outer1_2[10]).CircleInformationIcon, obj);
    }
    tmp = disclosure;
  }, items);
};
