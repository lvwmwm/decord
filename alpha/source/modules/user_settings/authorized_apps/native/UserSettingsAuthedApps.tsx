// Module ID: 15540
// Function ID: 15541
// Name: UserSettingsAuthedApps
// Dependencies: [19, 17, 6797, 1085, 21, 587, 5092, 558, 576, 9230, 9104, 13397, 5046, 1631, 504, 1503, 6860, 1504, 5088, 1126, 6265, 6180, 8612, 6680, 6684, 8625, 2]

// Module 15540 (UserSettingsAuthedApps)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import Text_Text from "Text/Text" /* 5088 */;
import TableRowGroup from "TableRowGroup" /* 6265 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6680 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6684 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6797 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9104 */;
import applications from "applications" /* 9230 */;
import EmbedIcon from "EmbedIcon" /* 13397 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const AuthorizedAppsStore = AuthorizedAppsStore2;
let _require, navigation, obj1;

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
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function DisclosureIcon(arg0) {
  let disclosure;
  let style;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(6);
  ({ disclosure, style } = arg0);
  if (applications.ApplicationDisclosureType.IP_LOCATION === disclosure) {
    let tmp10;
    if (cResult[0] !== style) {
      const obj2 = { style, size: "xs" };
      const tmp12 = authStore(GlobeEarthIcon.GlobeEarthIcon, obj2);
      cResult[0] = style;
      cResult[1] = tmp12;
      tmp10 = tmp12;
    } else {
      tmp10 = cResult[1];
    }
    tmp4 = tmp10;
  } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === disclosure) {
    let tmp7;
    if (cResult[2] !== style) {
      const obj3 = { style, size: "xs" };
      const tmp9 = authStore(EmbedIcon.EmbedIcon, obj3);
      cResult[2] = style;
      cResult[3] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    tmp4 = tmp7;
  } else if (cResult[4] !== style) {
    const obj4 = { style, size: "xs" };
    const tmp6 = authStore(CircleInformationIcon.CircleInformationIcon, obj4);
    cResult[4] = style;
    cResult[5] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[5];
  }
  return tmp4;
}) : (function DisclosureIcon(disclosure) {
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
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (function UserSettingsAuthedApps() {
  let appAuthTokens;
  let closure_0;
  let items1;
  let obj6;
  let tmp10;
  let tmp5;
  let tmp6;
  let obj = require("react");
  const cResult = obj.c(38);
  const tmp4 = closure_14();
  _require = tmp4;
  const bottom = appAuthTokens(navigation[13])().bottom;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AuthorizedAppsStore];
    const fn = function n() {
      const obj = { fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() };
      return obj;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp5, tmp6);
  appAuthTokens = stateFromStoresObject.appAuthTokens;
  const fetchState = stateFromStoresObject.fetchState;
  const tmpResult3 = require("useNavigation");
  navigation = tmpResult3.useNavigation();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function x() {
      const obj = appAuthTokens(navigation[16]);
      return obj.fetch();
    };
    cResult[2] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[2];
  }
  const tmpResult4 = require("Link");
  const focusEffect = tmpResult4.useFocusEffect(tmp10);
  if (cResult[3] === tmp4.appListHeader) {
    let tmp12;
    let tmp39;
    if (cResult[4] === tmp4.headerDescription) {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== navigation) {
      class D {
        constructor(arg0) {
          item = arg0.item;
          index = arg0.index;
          numItems = arg0.numItems;
          obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
          TableRow = closure_0(closure_2[21]).TableRow;
          obj1 = { application: item.application };
          obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
          obj.label = item.application.name;
          obj.onPress = function handleAppPress() {
            let obj4;
            const obj = UserSettingsModalActionCreatorsDefault;
            obj.setSection(constants.AUTHORIZED_APP);
            const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
            obj4 = { page: metroImportAll.USER_SETTINGS };
            const obj2 = UserSettingsUtils;
            const result = obj2.trackUserSettingsPaneViewed(obj3);
            const obj5 = { oauth2Token: item };
            navigation.push(constants.AUTHORIZED_APP, obj5);
          };
          obj.start = 0 === index;
          obj.end = index === numItems - 1;
          return closure_1_10(TableRow, obj);
        }
      }
      cResult[6] = navigation;
      cResult[7] = D;
    } else {
      class D {
        constructor(arg0) {
          item = arg0.item;
          index = arg0.index;
          numItems = arg0.numItems;
          obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
          TableRow = closure_0(closure_2[21]).TableRow;
          obj1 = { application: item.application };
          obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
          obj.label = item.application.name;
          obj.onPress = function handleAppPress() {
            let obj4;
            const obj = UserSettingsModalActionCreatorsDefault;
            obj.setSection(constants.AUTHORIZED_APP);
            const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
            obj4 = { page: metroImportAll.USER_SETTINGS };
            const obj2 = UserSettingsUtils;
            const result = obj2.trackUserSettingsPaneViewed(obj3);
            const obj5 = { oauth2Token: item };
            navigation.push(constants.AUTHORIZED_APP, obj5);
          };
          obj.start = 0 === index;
          obj.end = index === numItems - 1;
          return closure_1_10(TableRow, obj);
        }
      }
    }
    D = tmp13;
    if (null != appAuthTokens) {
      class D {
        constructor(arg0) {
          item = arg0.item;
          index = arg0.index;
          numItems = arg0.numItems;
          obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
          TableRow = closure_0(closure_2[21]).TableRow;
          obj1 = { application: item.application };
          obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
          obj.label = item.application.name;
          obj.onPress = function handleAppPress() {
            let obj4;
            const obj = UserSettingsModalActionCreatorsDefault;
            obj.setSection(constants.AUTHORIZED_APP);
            const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
            obj4 = { page: metroImportAll.USER_SETTINGS };
            const obj2 = UserSettingsUtils;
            const result = obj2.trackUserSettingsPaneViewed(obj3);
            const obj5 = { oauth2Token: item };
            navigation.push(constants.AUTHORIZED_APP, obj5);
          };
          obj.start = 0 === index;
          obj.end = index === numItems - 1;
          return closure_1_10(TableRow, obj);
        }
      }
      if (fetchState === FetchState.FETCHED) {
        class D {
          constructor(arg0) {
            item = arg0.item;
            index = arg0.index;
            numItems = arg0.numItems;
            obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
            TableRow = closure_0(closure_2[21]).TableRow;
            obj1 = { application: item.application };
            obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
            obj.label = item.application.name;
            obj.onPress = function handleAppPress() {
              let obj4;
              const obj = UserSettingsModalActionCreatorsDefault;
              obj.setSection(constants.AUTHORIZED_APP);
              const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
              obj4 = { page: metroImportAll.USER_SETTINGS };
              const obj2 = UserSettingsUtils;
              const result = obj2.trackUserSettingsPaneViewed(obj3);
              const obj5 = { oauth2Token: item };
              navigation.push(constants.AUTHORIZED_APP, obj5);
            };
            obj.start = 0 === index;
            obj.end = index === numItems - 1;
            return closure_1_10(TableRow, obj);
          }
        }
        if (0 === appAuthTokens.length) {
          let tmp31;
          class D {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              numItems = arg0.numItems;
              obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
              TableRow = closure_0(closure_2[21]).TableRow;
              obj1 = { application: item.application };
              obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
              obj.label = item.application.name;
              obj.onPress = function handleAppPress() {
                let obj4;
                const obj = UserSettingsModalActionCreatorsDefault;
                obj.setSection(constants.AUTHORIZED_APP);
                const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                obj4 = { page: metroImportAll.USER_SETTINGS };
                const obj2 = UserSettingsUtils;
                const result = obj2.trackUserSettingsPaneViewed(obj3);
                const obj5 = { oauth2Token: item };
                navigation.push(constants.AUTHORIZED_APP, obj5);
              };
              obj.start = 0 === index;
              obj.end = index === numItems - 1;
              return closure_1_10(TableRow, obj);
            }
          }
          if (cResult[10] !== tmp12) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
            cResult[10] = tmp12;
            cResult[11] = tmp30;
          } else {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
          }
          const _Symbol2 = Symbol;
          const emptyText = tmp4.emptyText;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
            const stringResult = obj6.string(require("intl").t["E+SM6T"]);
            cResult[12] = stringResult;
            tmp31 = stringResult;
          } else {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
          }
          if (cResult[13] !== tmp4.emptyText) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
            let obj2 = { color: "mobile-text-heading-primary", style: emptyText, variant: "heading-md/extrabold", children: tmp31 };
            cResult[13] = tmp4.emptyText;
            cResult[14] = closure_10(require("Text/Text").Text, obj2);
            const tmp34 = closure_10(require("Text/Text").Text, obj2);
          } else {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
          }
          if (cResult[15] === tmp4.emptyContainer) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
          }
          let obj3 = { style: tmp28, children: items1 };
          items1 = [tmp29, tmp33];
          cResult[15] = tmp4.emptyContainer;
          cResult[16] = tmp29;
          cResult[17] = tmp33;
          cResult[18] = closure_11(closure_4, obj3);
          const tmp38 = closure_11(closure_4, obj3);
        } else {
          class D {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              numItems = arg0.numItems;
              obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
              TableRow = closure_0(closure_2[21]).TableRow;
              obj1 = { application: item.application };
              obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
              obj.label = item.application.name;
              obj.onPress = function handleAppPress() {
                let obj4;
                const obj = UserSettingsModalActionCreatorsDefault;
                obj.setSection(constants.AUTHORIZED_APP);
                const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                obj4 = { page: metroImportAll.USER_SETTINGS };
                const obj2 = UserSettingsUtils;
                const result = obj2.trackUserSettingsPaneViewed(obj3);
                const obj5 = { oauth2Token: item };
                navigation.push(constants.AUTHORIZED_APP, obj5);
              };
              obj.start = 0 === index;
              obj.end = index === numItems - 1;
              return closure_1_10(TableRow, obj);
            }
          }
          const sum = bottom + PX_24;
          if (cResult[19] !== sum) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
            tmp16[0] = sum;
            cResult[19] = sum;
            cResult[20] = tmp16;
          } else {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
          }
          if (cResult[21] === tmp4.container) {
            class D {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: metroImportAll.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_10(TableRow, obj);
              }
            }
            if (cResult[24] !== tmp12) {
              class D {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  numItems = arg0.numItems;
                  obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                  TableRow = closure_0(closure_2[21]).TableRow;
                  obj1 = { application: item.application };
                  obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                  obj.label = item.application.name;
                  obj.onPress = function handleAppPress() {
                    let obj4;
                    const obj = UserSettingsModalActionCreatorsDefault;
                    obj.setSection(constants.AUTHORIZED_APP);
                    const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                    obj4 = { page: metroImportAll.USER_SETTINGS };
                    const obj2 = UserSettingsUtils;
                    const result = obj2.trackUserSettingsPaneViewed(obj3);
                    const obj5 = { oauth2Token: item };
                    navigation.push(constants.AUTHORIZED_APP, obj5);
                  };
                  obj.start = 0 === index;
                  obj.end = index === numItems - 1;
                  return closure_1_10(TableRow, obj);
                }
              }
              cResult[24] = tmp12;
              class G {
                constructor(item) {
                  const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                  return D(obj);
                }
              }
              cResult[25] = tmp19;
            } else {
              class D {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  numItems = arg0.numItems;
                  obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                  TableRow = closure_0(closure_2[21]).TableRow;
                  obj1 = { application: item.application };
                  obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                  obj.label = item.application.name;
                  obj.onPress = function handleAppPress() {
                    let obj4;
                    const obj = UserSettingsModalActionCreatorsDefault;
                    obj.setSection(constants.AUTHORIZED_APP);
                    const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                    obj4 = { page: metroImportAll.USER_SETTINGS };
                    const obj2 = UserSettingsUtils;
                    const result = obj2.trackUserSettingsPaneViewed(obj3);
                    const obj5 = { oauth2Token: item };
                    navigation.push(constants.AUTHORIZED_APP, obj5);
                  };
                  obj.start = 0 === index;
                  obj.end = index === numItems - 1;
                  return closure_1_10(TableRow, obj);
                }
              }
            }
            if (cResult[26] === appAuthTokens.length) {
              class D {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  numItems = arg0.numItems;
                  obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                  TableRow = closure_0(closure_2[21]).TableRow;
                  obj1 = { application: item.application };
                  obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                  obj.label = item.application.name;
                  obj.onPress = function handleAppPress() {
                    let obj4;
                    const obj = UserSettingsModalActionCreatorsDefault;
                    obj.setSection(constants.AUTHORIZED_APP);
                    const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                    obj4 = { page: metroImportAll.USER_SETTINGS };
                    const obj2 = UserSettingsUtils;
                    const result = obj2.trackUserSettingsPaneViewed(obj3);
                    const obj5 = { oauth2Token: item };
                    navigation.push(constants.AUTHORIZED_APP, obj5);
                  };
                  obj.start = 0 === index;
                  obj.end = index === numItems - 1;
                  return closure_1_10(TableRow, obj);
                }
              }
              if (cResult[29] !== appAuthTokens) {
                class D {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    numItems = arg0.numItems;
                    obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                    TableRow = closure_0(closure_2[21]).TableRow;
                    obj1 = { application: item.application };
                    obj.icon = closure_1_10(appAuthTokens(closure_2[22]), obj1);
                    obj.label = item.application.name;
                    obj.onPress = function handleAppPress() {
                      let obj4;
                      const obj = UserSettingsModalActionCreatorsDefault;
                      obj.setSection(constants.AUTHORIZED_APP);
                      const obj3 = { destinationPane: constants.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                      obj4 = { page: metroImportAll.USER_SETTINGS };
                      const obj2 = UserSettingsUtils;
                      const result = obj2.trackUserSettingsPaneViewed(obj3);
                      const obj5 = { oauth2Token: item };
                      navigation.push(constants.AUTHORIZED_APP, obj5);
                    };
                    obj.start = 0 === index;
                    obj.end = index === numItems - 1;
                    return closure_1_10(TableRow, obj);
                  }
                }
                if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                  class Z {
                    constructor(id, id2) {
                      const NumberResult = Number(id2.id);
                      return NumberResult - Number(id.id);
                    }
                  }
                  cResult[31] = Z;
                  class G {
                    constructor(item) {
                      const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                      return D(obj);
                    }
                  }
                } else {
                  class Z {
                    constructor(id, id2) {
                      const NumberResult = Number(id2.id);
                      return NumberResult - Number(id.id);
                    }
                  }
                }
                class G {
                  constructor(item) {
                    const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                    return D(obj);
                  }
                }
                cResult[29] = appAuthTokens;
                cResult[30] = tmp22;
              } else {
                class Z {
                  constructor(id, id2) {
                    const NumberResult = Number(id2.id);
                    return NumberResult - Number(id.id);
                  }
                }
              }
              const _Symbol = Symbol;
              class G {
                constructor(item) {
                  const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                  return D(obj);
                }
              }
              if (tmp23 === Symbol.for("react.memo_cache_sentinel")) {
                class V {
                  constructor(id) {
                    return id.id;
                  }
                }
                cResult[32] = V;
                class G {
                  constructor(item) {
                    const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                    return D(obj);
                  }
                }
              } else {
                class V {
                  constructor(id) {
                    return id.id;
                  }
                }
              }
              if (cResult[33] === tmp21) {
                class V {
                  constructor(id) {
                    return id.id;
                  }
                }
              }
              let obj4 = { contentContainerStyle: tmp17, ListHeaderComponent: tmp18, renderItem: tmp20, data: tmp21, keyExtractor: tmp24 };
              cResult[33] = tmp21;
              cResult[34] = tmp17;
              cResult[35] = tmp18;
              cResult[36] = tmp20;
              cResult[37] = closure_10(require("defaultMVCPConfig").FlashList, obj4);
              const tmp27 = closure_10(require("defaultMVCPConfig").FlashList, obj4);
            }
            class G {
              constructor(item) {
                const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                return D(obj);
              }
            }
            cResult[26] = appAuthTokens.length;
            cResult[27] = tmp13;
            cResult[28] = G;
          }
          const items2 = [tmp4.container, tmp15];
          cResult[21] = tmp4.container;
          cResult[22] = tmp15;
          cResult[23] = items2;
        }
      }
    }
    if (cResult[8] !== tmp4.spinner) {
      class V {
        constructor(id) {
          return id.id;
        }
      }
      let obj5 = { style: null, animating: true, size: "large" };
      class G {
        constructor(item) {
          const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
          return D(obj);
        }
      }
      const tmp41 = closure_10(closure_5, obj5);
      cResult[8] = tmp4.spinner;
      cResult[9] = tmp41;
      tmp39 = tmp41;
    } else {
      class V {
        constructor(id) {
          return id.id;
        }
      }
    }
    return tmp39;
  }
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
  cResult[3] = tmp4.appListHeader;
  cResult[4] = tmp4.headerDescription;
  cResult[5] = renderHeader;
  tmp12 = renderHeader;
}) : (function UserSettingsAuthedApps() {
  let appAuthTokens;
  let closure_0;
  let closure_3;
  let intl;
  let items2;
  let items3;
  const tmp = closure_14();
  _require = tmp;
  const bottom = appAuthTokens(navigation[13])().bottom;
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
    const obj = appAuthTokens(navigation[16]);
    return obj.fetch();
  }, []));
  let items1 = [navigation];
  react = react.useCallback((item) => {
    let obj2;
    item = item.item;
    const index = item.index;
    const numItems = item.numItems;
    let obj = {
      icon: closure_1_10(appAuthTokens(navigation[22]), obj2),
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
    const TableRow = closure_0(navigation[21]).TableRow;
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
        let Text = tmp3(tmp2[18]).Text;
        intl = tmp3(tmp2[19]).intl;
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
        const FlashList = tmp3(tmp2[25]).FlashList;
        tmp10 = closure_10(FlashList, obj6);
      }
    }
    return tmp10;
  }
  const obj8 = { style: tmp.spinner, animating: true, size: "large" };
  tmp10 = closure_10(closure_5, obj8);
});
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default tmp6;
export const DisclosureIcon = tmp5;
