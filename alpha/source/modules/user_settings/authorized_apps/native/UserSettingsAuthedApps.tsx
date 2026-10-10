// Module ID: 15196
// Function ID: 15197
// Name: UserSettingsAuthedApps
// Dependencies: [19, 17, 6796, 1085, 21, 587, 5092, 558, 576, 9229, 9103, 12903, 5046, 1631, 504, 1503, 6859, 1504, 5088, 1126, 6264, 6179, 8611, 6679, 6683, 2]

// Module 15196 (UserSettingsAuthedApps)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5046 */;
import Text_Text from "Text/Text" /* 5088 */;
import TableRowGroup from "TableRowGroup" /* 6264 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6679 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6683 */;
import AuthorizedAppsStore2 from "AuthorizedAppsStore" /* 6796 */;
import GlobeEarthIcon from "GlobeEarthIcon" /* 9103 */;
import applications from "applications" /* 9229 */;
import EmbedIcon from "EmbedIcon" /* 12903 */;
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
let map1;
let metroRequire;
let obj2;
let unpackModuleId;
let react = react_mod;
({ View: closure_4, ActivityIndicator: hasOwnProperty, FlatList: metroRequire } = react_native);
const FetchState = AuthorizedAppsStore2.FetchState;
({ AnalyticsPages: c9, UserSettingsSections: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
const PX_24 = nativeDefault.space.PX_24;
let obj = { spinner: { padding: 16 }, emptyText: { marginTop: 24 }, emptyContainer: { padding: 16 }, container: obj2, headerDescription: { marginTop: 12 }, appListHeader: { marginTop: 24 } };
obj2 = { paddingHorizontal: 16, paddingTop: nativeDefault.space.PX_24 };
let closure_15 = createStyles.createStyles(obj);
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
      const tmp12 = unpackModuleId(GlobeEarthIcon.GlobeEarthIcon, obj2);
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
      const tmp9 = unpackModuleId(EmbedIcon.EmbedIcon, obj3);
      cResult[2] = style;
      cResult[3] = tmp9;
      tmp7 = tmp9;
    } else {
      tmp7 = cResult[3];
    }
    tmp4 = tmp7;
  } else if (cResult[4] !== style) {
    const obj4 = { style, size: "xs" };
    const tmp6 = unpackModuleId(CircleInformationIcon.CircleInformationIcon, obj4);
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
      return unpackModuleId(GlobeEarthIcon.GlobeEarthIcon, obj2);
    } else if (applications.ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === tmp) {
      const obj3 = { style, size: "xs" };
      return unpackModuleId(EmbedIcon.EmbedIcon, obj3);
    } else {
      const obj = { style, size: "xs" };
      return unpackModuleId(CircleInformationIcon.CircleInformationIcon, obj);
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
  const cResult = obj.c(37);
  const tmp4 = closure_15();
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
    let tmp37;
    if (cResult[4] === tmp4.headerDescription) {
      tmp12 = cResult[5];
    }
    if (cResult[6] !== navigation) {
      class H {
        constructor(arg0) {
          item = arg0.item;
          index = arg0.index;
          numItems = arg0.numItems;
          obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
          TableRow = closure_0(closure_2[21]).TableRow;
          obj1 = { application: item.application };
          obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
          obj.label = item.application.name;
          obj.onPress = function handleAppPress() {
            let obj4;
            const obj = UserSettingsModalActionCreatorsDefault;
            obj.setSection(constants2.AUTHORIZED_APP);
            const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
            obj4 = { page: constants.USER_SETTINGS };
            const obj2 = UserSettingsUtils;
            const result = obj2.trackUserSettingsPaneViewed(obj3);
            const obj5 = { oauth2Token: item };
            navigation.push(constants2.AUTHORIZED_APP, obj5);
          };
          obj.start = 0 === index;
          obj.end = index === numItems - 1;
          return closure_1_11(TableRow, obj, item.id);
        }
      }
      cResult[6] = navigation;
      cResult[7] = H;
    } else {
      class H {
        constructor(arg0) {
          item = arg0.item;
          index = arg0.index;
          numItems = arg0.numItems;
          obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
          TableRow = closure_0(closure_2[21]).TableRow;
          obj1 = { application: item.application };
          obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
          obj.label = item.application.name;
          obj.onPress = function handleAppPress() {
            let obj4;
            const obj = UserSettingsModalActionCreatorsDefault;
            obj.setSection(constants2.AUTHORIZED_APP);
            const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
            obj4 = { page: constants.USER_SETTINGS };
            const obj2 = UserSettingsUtils;
            const result = obj2.trackUserSettingsPaneViewed(obj3);
            const obj5 = { oauth2Token: item };
            navigation.push(constants2.AUTHORIZED_APP, obj5);
          };
          obj.start = 0 === index;
          obj.end = index === numItems - 1;
          return closure_1_11(TableRow, obj, item.id);
        }
      }
    }
    H = tmp13;
    if (null != appAuthTokens) {
      class H {
        constructor(arg0) {
          item = arg0.item;
          index = arg0.index;
          numItems = arg0.numItems;
          obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
          TableRow = closure_0(closure_2[21]).TableRow;
          obj1 = { application: item.application };
          obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
          obj.label = item.application.name;
          obj.onPress = function handleAppPress() {
            let obj4;
            const obj = UserSettingsModalActionCreatorsDefault;
            obj.setSection(constants2.AUTHORIZED_APP);
            const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
            obj4 = { page: constants.USER_SETTINGS };
            const obj2 = UserSettingsUtils;
            const result = obj2.trackUserSettingsPaneViewed(obj3);
            const obj5 = { oauth2Token: item };
            navigation.push(constants2.AUTHORIZED_APP, obj5);
          };
          obj.start = 0 === index;
          obj.end = index === numItems - 1;
          return closure_1_11(TableRow, obj, item.id);
        }
      }
      if (fetchState === FetchState.FETCHED) {
        class H {
          constructor(arg0) {
            item = arg0.item;
            index = arg0.index;
            numItems = arg0.numItems;
            obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
            TableRow = closure_0(closure_2[21]).TableRow;
            obj1 = { application: item.application };
            obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
            obj.label = item.application.name;
            obj.onPress = function handleAppPress() {
              let obj4;
              const obj = UserSettingsModalActionCreatorsDefault;
              obj.setSection(constants2.AUTHORIZED_APP);
              const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
              obj4 = { page: constants.USER_SETTINGS };
              const obj2 = UserSettingsUtils;
              const result = obj2.trackUserSettingsPaneViewed(obj3);
              const obj5 = { oauth2Token: item };
              navigation.push(constants2.AUTHORIZED_APP, obj5);
            };
            obj.start = 0 === index;
            obj.end = index === numItems - 1;
            return closure_1_11(TableRow, obj, item.id);
          }
        }
        if (0 === appAuthTokens.length) {
          let tmp29;
          class H {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              numItems = arg0.numItems;
              obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
              TableRow = closure_0(closure_2[21]).TableRow;
              obj1 = { application: item.application };
              obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
              obj.label = item.application.name;
              obj.onPress = function handleAppPress() {
                let obj4;
                const obj = UserSettingsModalActionCreatorsDefault;
                obj.setSection(constants2.AUTHORIZED_APP);
                const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                obj4 = { page: constants.USER_SETTINGS };
                const obj2 = UserSettingsUtils;
                const result = obj2.trackUserSettingsPaneViewed(obj3);
                const obj5 = { oauth2Token: item };
                navigation.push(constants2.AUTHORIZED_APP, obj5);
              };
              obj.start = 0 === index;
              obj.end = index === numItems - 1;
              return closure_1_11(TableRow, obj, item.id);
            }
          }
          if (cResult[10] !== tmp12) {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
            cResult[10] = tmp12;
            cResult[11] = tmp28;
          } else {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
          }
          const _Symbol = Symbol;
          const emptyText = tmp4.emptyText;
          if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
            const stringResult = obj6.string(require("intl").t["E+SM6T"]);
            cResult[12] = stringResult;
            tmp29 = stringResult;
          } else {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
          }
          if (cResult[13] !== tmp4.emptyText) {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
            let obj2 = { color: "mobile-text-heading-primary", style: emptyText, variant: "heading-md/extrabold", children: tmp29 };
            cResult[13] = tmp4.emptyText;
            cResult[14] = closure_11(require("Text/Text").Text, obj2);
            const tmp32 = closure_11(require("Text/Text").Text, obj2);
          } else {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
          }
          if (cResult[15] === tmp4.emptyContainer) {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
          }
          let obj3 = { style: tmp26, children: items1 };
          items1 = [tmp27, tmp31];
          cResult[15] = tmp4.emptyContainer;
          cResult[16] = tmp27;
          cResult[17] = tmp31;
          cResult[18] = closure_12(closure_4, obj3);
          const tmp36 = closure_12(closure_4, obj3);
        } else {
          class H {
            constructor(arg0) {
              item = arg0.item;
              index = arg0.index;
              numItems = arg0.numItems;
              obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
              TableRow = closure_0(closure_2[21]).TableRow;
              obj1 = { application: item.application };
              obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
              obj.label = item.application.name;
              obj.onPress = function handleAppPress() {
                let obj4;
                const obj = UserSettingsModalActionCreatorsDefault;
                obj.setSection(constants2.AUTHORIZED_APP);
                const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                obj4 = { page: constants.USER_SETTINGS };
                const obj2 = UserSettingsUtils;
                const result = obj2.trackUserSettingsPaneViewed(obj3);
                const obj5 = { oauth2Token: item };
                navigation.push(constants2.AUTHORIZED_APP, obj5);
              };
              obj.start = 0 === index;
              obj.end = index === numItems - 1;
              return closure_1_11(TableRow, obj, item.id);
            }
          }
          const sum = bottom + PX_24;
          if (cResult[19] !== sum) {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
            tmp16[0] = sum;
            cResult[19] = sum;
            cResult[20] = tmp16;
          } else {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
          }
          if (cResult[21] === tmp4.container) {
            class H {
              constructor(arg0) {
                item = arg0.item;
                index = arg0.index;
                numItems = arg0.numItems;
                obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                TableRow = closure_0(closure_2[21]).TableRow;
                obj1 = { application: item.application };
                obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                obj.label = item.application.name;
                obj.onPress = function handleAppPress() {
                  let obj4;
                  const obj = UserSettingsModalActionCreatorsDefault;
                  obj.setSection(constants2.AUTHORIZED_APP);
                  const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                  obj4 = { page: constants.USER_SETTINGS };
                  const obj2 = UserSettingsUtils;
                  const result = obj2.trackUserSettingsPaneViewed(obj3);
                  const obj5 = { oauth2Token: item };
                  navigation.push(constants2.AUTHORIZED_APP, obj5);
                };
                obj.start = 0 === index;
                obj.end = index === numItems - 1;
                return closure_1_11(TableRow, obj, item.id);
              }
            }
            if (cResult[24] !== tmp12) {
              class H {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  numItems = arg0.numItems;
                  obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                  TableRow = closure_0(closure_2[21]).TableRow;
                  obj1 = { application: item.application };
                  obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                  obj.label = item.application.name;
                  obj.onPress = function handleAppPress() {
                    let obj4;
                    const obj = UserSettingsModalActionCreatorsDefault;
                    obj.setSection(constants2.AUTHORIZED_APP);
                    const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                    obj4 = { page: constants.USER_SETTINGS };
                    const obj2 = UserSettingsUtils;
                    const result = obj2.trackUserSettingsPaneViewed(obj3);
                    const obj5 = { oauth2Token: item };
                    navigation.push(constants2.AUTHORIZED_APP, obj5);
                  };
                  obj.start = 0 === index;
                  obj.end = index === numItems - 1;
                  return closure_1_11(TableRow, obj, item.id);
                }
              }
              cResult[24] = tmp12;
              class M {
                constructor(item) {
                  const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                  return H(obj);
                }
              }
              cResult[25] = tmp19;
            } else {
              class H {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  numItems = arg0.numItems;
                  obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                  TableRow = closure_0(closure_2[21]).TableRow;
                  obj1 = { application: item.application };
                  obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                  obj.label = item.application.name;
                  obj.onPress = function handleAppPress() {
                    let obj4;
                    const obj = UserSettingsModalActionCreatorsDefault;
                    obj.setSection(constants2.AUTHORIZED_APP);
                    const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                    obj4 = { page: constants.USER_SETTINGS };
                    const obj2 = UserSettingsUtils;
                    const result = obj2.trackUserSettingsPaneViewed(obj3);
                    const obj5 = { oauth2Token: item };
                    navigation.push(constants2.AUTHORIZED_APP, obj5);
                  };
                  obj.start = 0 === index;
                  obj.end = index === numItems - 1;
                  return closure_1_11(TableRow, obj, item.id);
                }
              }
            }
            if (cResult[26] === appAuthTokens.length) {
              class H {
                constructor(arg0) {
                  item = arg0.item;
                  index = arg0.index;
                  numItems = arg0.numItems;
                  obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                  TableRow = closure_0(closure_2[21]).TableRow;
                  obj1 = { application: item.application };
                  obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                  obj.label = item.application.name;
                  obj.onPress = function handleAppPress() {
                    let obj4;
                    const obj = UserSettingsModalActionCreatorsDefault;
                    obj.setSection(constants2.AUTHORIZED_APP);
                    const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                    obj4 = { page: constants.USER_SETTINGS };
                    const obj2 = UserSettingsUtils;
                    const result = obj2.trackUserSettingsPaneViewed(obj3);
                    const obj5 = { oauth2Token: item };
                    navigation.push(constants2.AUTHORIZED_APP, obj5);
                  };
                  obj.start = 0 === index;
                  obj.end = index === numItems - 1;
                  return closure_1_11(TableRow, obj, item.id);
                }
              }
              if (cResult[29] !== appAuthTokens) {
                class H {
                  constructor(arg0) {
                    item = arg0.item;
                    index = arg0.index;
                    numItems = arg0.numItems;
                    obj = { icon: null, label: null, onPress: null, arrow: true, start: null, end: null };
                    TableRow = closure_0(closure_2[21]).TableRow;
                    obj1 = { application: item.application };
                    obj.icon = closure_1_11(appAuthTokens(closure_2[22]), obj1);
                    obj.label = item.application.name;
                    obj.onPress = function handleAppPress() {
                      let obj4;
                      const obj = UserSettingsModalActionCreatorsDefault;
                      obj.setSection(constants2.AUTHORIZED_APP);
                      const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
                      obj4 = { page: constants.USER_SETTINGS };
                      const obj2 = UserSettingsUtils;
                      const result = obj2.trackUserSettingsPaneViewed(obj3);
                      const obj5 = { oauth2Token: item };
                      navigation.push(constants2.AUTHORIZED_APP, obj5);
                    };
                    obj.start = 0 === index;
                    obj.end = index === numItems - 1;
                    return closure_1_11(TableRow, obj, item.id);
                  }
                }
                if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                  class V {
                    constructor(id, id2) {
                      const NumberResult = Number(id2.id);
                      return NumberResult - Number(id.id);
                    }
                  }
                  cResult[31] = V;
                  class M {
                    constructor(item) {
                      const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                      return H(obj);
                    }
                  }
                } else {
                  class V {
                    constructor(id, id2) {
                      const NumberResult = Number(id2.id);
                      return NumberResult - Number(id.id);
                    }
                  }
                }
                class M {
                  constructor(item) {
                    const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                    return H(obj);
                  }
                }
                cResult[29] = appAuthTokens;
                cResult[30] = tmp22;
              } else {
                class V {
                  constructor(id, id2) {
                    const NumberResult = Number(id2.id);
                    return NumberResult - Number(id.id);
                  }
                }
              }
              if (cResult[32] === tmp21) {
                class V {
                  constructor(id, id2) {
                    const NumberResult = Number(id2.id);
                    return NumberResult - Number(id.id);
                  }
                }
              }
              class M {
                constructor(item) {
                  const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                  return H(obj);
                }
              }
              let obj4 = { contentContainerStyle: tmp17, ListHeaderComponent: tmp18, renderItem: tmp20, data: tmp21 };
              cResult[32] = tmp21;
              cResult[33] = tmp17;
              cResult[34] = tmp18;
              cResult[35] = tmp20;
              cResult[36] = closure_11(closure_6, obj4);
              const tmp25 = closure_11(closure_6, obj4);
            }
            class M {
              constructor(item) {
                const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
                return H(obj);
              }
            }
            cResult[26] = appAuthTokens.length;
            cResult[27] = tmp13;
            cResult[28] = M;
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
        constructor(id, id2) {
          const NumberResult = Number(id2.id);
          return NumberResult - Number(id.id);
        }
      }
      let obj5 = { style: null, animating: true, size: "large" };
      class M {
        constructor(item) {
          const obj = { item: item.item, index: item.index, numItems: appAuthTokens.length };
          return H(obj);
        }
      }
      const tmp39 = closure_11(closure_5, obj5);
      cResult[8] = tmp4.spinner;
      cResult[9] = tmp39;
      tmp37 = tmp39;
    } else {
      class V {
        constructor(id, id2) {
          const NumberResult = Number(id2.id);
          return NumberResult - Number(id.id);
        }
      }
    }
    return tmp37;
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
    items = [unpackModuleId(Text, obj3), ];
    const obj4 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: intl2.string(intl4.t.Nu5Yi0) };
    const Text2 = Text_Text.Text;
    intl2 = intl4.intl;
    items[1] = unpackModuleId(Text2, obj4);
    items1 = [authStore2(React3, obj2), ];
    const obj5 = { style: closure_0.appListHeader, children: unpackModuleId(TableRowGroupTitle, obj6) };
    obj6 = { title: intl3.string(intl4.t.PHjkRE) };
    TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
    intl3 = intl4.intl;
    items1[1] = unpackModuleId(React3, obj5);
    return authStore2(map1, obj);
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
  const tmp = closure_15();
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
      icon: closure_1_11(appAuthTokens(navigation[22]), obj2),
      label: item.application.name,
      onPress: function handleAppPress() {
        let obj4;
        const obj = UserSettingsModalActionCreatorsDefault;
        obj.setSection(constants2.AUTHORIZED_APP);
        const obj3 = { destinationPane: constants2.AUTHORIZED_APP, source: obj4, applicationId: item.application.id };
        obj4 = { page: constants.USER_SETTINGS };
        const obj2 = UserSettingsUtils;
        const result = obj2.trackUserSettingsPaneViewed(obj3);
        const obj5 = { oauth2Token: item };
        navigation.push(constants2.AUTHORIZED_APP, obj5);
      },
      arrow: true,
      start: 0 === index,
      end: index === numItems - 1
    };
    const TableRow = closure_0(navigation[21]).TableRow;
    obj2 = { application: item.application };
    return closure_1_11(TableRow, obj, item.id);
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
        items = [unpackModuleId(Text, obj3), ];
        const obj4 = { style: closure_0.headerDescription, variant: "heading-sm/medium", children: intl2.string(intl4.t.Nu5Yi0) };
        const Text2 = Text_Text.Text;
        intl2 = intl4.intl;
        items[1] = unpackModuleId(Text2, obj4);
        items1 = [authStore2(React3, obj2), ];
        const obj5 = { style: closure_0.appListHeader, children: unpackModuleId(TableRowGroupTitle, obj6) };
        obj6 = { title: intl3.string(intl4.t.PHjkRE) };
        TableRowGroupTitle = TableRowGroup.TableRowGroupTitle;
        intl3 = intl4.intl;
        items1[1] = unpackModuleId(React3, obj5);
        return authStore2(map1, obj);
      }
      if (0 === appAuthTokens.length) {
        let obj4 = { style: tmp.emptyContainer, children: items2 };
        items2 = [renderHeader(), ];
        let obj5 = { color: "mobile-text-heading-primary", style: tmp.emptyText, variant: "heading-md/extrabold", children: intl.string(require("intl").t["E+SM6T"]) };
        let Text = tmp3(tmp2[18]).Text;
        intl = tmp3(tmp2[19]).intl;
        items2[1] = closure_11(Text, obj5);
        tmp10 = closure_12(closure_4, obj4);
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
                })
        };
        items3 = [tmp.container, ];
        const obj7 = { paddingBottom: bottom + PX_24 };
        items3[1] = obj7;
        tmp10 = closure_11(closure_6, obj6);
      }
    }
    return tmp10;
  }
  const obj8 = { style: tmp.spinner, animating: true, size: "large" };
  tmp10 = closure_11(closure_5, obj8);
});
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default tmp6;
export const DisclosureIcon = tmp5;
