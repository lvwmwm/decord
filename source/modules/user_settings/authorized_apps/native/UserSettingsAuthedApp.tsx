// Module ID: 13844
// Function ID: 106014
// Name: WarningLabel
// Dependencies: [31, 27, 1347, 5066, 1348, 3767, 4325, 1921, 653, 9102, 10420, 33, 4130, 689, 4086, 5459, 1456, 1457, 1212, 5472, 10525, 8960, 566, 11632, 1392, 4472, 11631, 4098, 10421, 1934, 480, 8923, 7488, 7375, 5793, 8336, 3982, 5079, 5073, 21, 11176, 4126, 9012, 5503, 5504, 5165, 2]
// Exports: default

// Module 13844 (WarningLabel)
import showAlert from "showAlert";
import get_ActivityIndicator from "showActionSheet";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import ME from "ME";
import { ChannelDetailsNavigatorScreens as closure_15 } from "ChannelDetailsNavigatorScreens";
import { BLOCK_CONFIRMATION_ACTION_SHEET_KEY as closure_16 } from "IGNORE_CONFIRMATION_ACTION_SHEET_KEY";
import jsxProd from "dispatcher";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_12;
let closure_13;
let closure_14;
let closure_17;
let closure_18;
let closure_4;
let closure_5;
const require = arg1;
function WarningLabel(text) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.warningContainer };
  obj = { size: "xs", color: importDefault(689).colors.TEXT_MUTED, style: tmp.warningIcon };
  const items = [callback(require(4086) /* CircleInformationIcon */.CircleInformationIcon, obj), ];
  obj = { color: "text-default", variant: "text-sm/medium", children: text.text };
  items[1] = callback(require(5459) /* findLinks */.TextWithIOSLinkWorkaround, obj);
  obj.children = items;
  return callback2(closure_5, obj);
}
function AuthorizedAppTwoWay(application) {
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  obj = {};
  const callback = React.useCallback(() => {
    const CommonActions = navigation(outer1_2[17]).CommonActions;
    navigation.dispatch(CommonActions.navigate({ name: outer1_12.CONNECTIONS }));
  }, items);
  const intl = navigation(1212).intl;
  obj = { applicationName: application.application.name, onConnectionPress: callback };
  obj.text = intl.format(navigation(1212).t.jUhnwb, obj);
  return callback(WarningLabel, obj);
}
function ParentApp(application) {
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = { applicationName: application.application.name };
  obj.text = intl.format(require(1212) /* getSystemLocale */.t.j4B7EW, obj);
  return callback(WarningLabel, obj);
}
function handleDeleteApp(outer1_1) {
  const application = outer1_1.application;
  let obj = importDefault(5472);
  obj.delete(outer1_1.id);
  selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
  const value = selfEmbeddedActivities.get(application.id);
  obj = {};
  let _location;
  if (null != value) {
    _location = value.location;
  }
  obj.location = _location;
  obj.applicationId = application.id;
  importDefault(10525).leaveActivity(obj);
}
({ ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ UserSettingsSections: closure_12, AnalyticsSections: closure_13, AnalyticsPages: closure_14 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingHorizontal: 16, paddingVertical: 24 }, section: { marginBottom: 24 }, header: { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, appAboutDescription: { width: "100%" } };
_createForOfIteratorHelperLoose = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_12, display: "flex", flexDirection: "row" };
_createForOfIteratorHelperLoose.warningContainer = _createForOfIteratorHelperLoose;
let obj1 = { width: 16, height: 16, marginRight: 8, color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED };
_createForOfIteratorHelperLoose.warningIcon = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApp.tsx");

export default function UserSettingsAuthedApp(oauth2Token) {
  oauth2Token = oauth2Token.oauth2Token;
  let application;
  let navigation;
  let stateFromStores2;
  const tmp = _createForOfIteratorHelperLoose();
  application = oauth2Token.application;
  let tmp2 = application(stateFromStores[21])(application);
  let obj = oauth2Token(stateFromStores[22]);
  const items = [stateFromStores2];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores2.getNewestTokenForApplication(application.id));
  let obj1 = oauth2Token(stateFromStores[22]);
  const items1 = [closure_11];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_11.locale);
  let obj2 = oauth2Token(stateFromStores[16]);
  navigation = obj2.useNavigation();
  let obj3 = oauth2Token(stateFromStores[22]);
  const items2 = [closure_9];
  let closure_4 = obj3.useStateFromStores(items2, () => {
    let id;
    if (null != application) {
      const bot = application.bot;
      if (null != bot) {
        id = bot.id;
      }
    }
    return outer1_9.isBlocked(id);
  });
  let obj4 = oauth2Token(stateFromStores[23]);
  let shouldWarnAuthorizedAppTwoWay = obj4.useShouldWarnAuthorizedAppTwoWay(application.id);
  let obj5 = application(stateFromStores[24]);
  obj = { id: application.id, icon: application.icon };
  const items3 = [stateFromStores, navigation];
  const applicationIconSource = obj5.getApplicationIconSource(obj);
  const effect = navigation.useEffect(() => {
    if (null == stateFromStores) {
      navigation.goBack();
    }
  }, items3);
  const items4 = [application, oauth2Token];
  const callback = navigation.useCallback(() => {
    let obj = oauth2Token(stateFromStores[25]);
    obj = {
      application,
      scopes: oauth2Token.scopes,
      onDelete() {
        outer2_23(outer1_0);
      }
    };
    obj.openAlert("confirm-delete-authed-app", outer1_17(application(stateFromStores[26]), obj));
  }, items4);
  let closure_5 = navigation.useCallback((userId) => {
    let obj = application(stateFromStores[27]);
    obj = { userId, impressionName: oauth2Token(stateFromStores[30]).ImpressionNames.BLOCK_USER_CONFIRMATION };
    obj.openLazy(oauth2Token(stateFromStores[29])(stateFromStores[28], stateFromStores.paths), outer1_16, obj, "stack");
  }, []);
  let closure_6 = navigation.useCallback((outer1_3) => {
    let obj = application(stateFromStores[31]);
    obj = { location: outer1_13.SETTINGS_AUTHORIZED_APP };
    obj.unblockUser(outer1_3, obj);
    const result = application(stateFromStores[32]).showUnblockSuccessToast(outer1_3);
  }, []);
  let obj7 = oauth2Token(stateFromStores[22]);
  const items5 = [closure_8];
  stateFromStores2 = obj7.useStateFromStores(items5, () => {
    const bot = application.bot;
    let id;
    if (null != bot) {
      id = bot.id;
    }
    return outer1_8.getDMFromUserId(id);
  });
  let obj8 = oauth2Token(stateFromStores[22]);
  const items6 = [closure_10];
  const items7 = [stateFromStores2];
  const stateFromStoresObject = obj8.useStateFromStoresObject(items6, () => {
    if (null == stateFromStores2) {
      let obj = { appDMChannelMuteConfig: null, muted: false };
    } else {
      obj = { appDMChannelMuteConfig: outer1_10.getChannelMuteConfig(null, stateFromStores2), muted: outer1_10.isChannelMuted(null, stateFromStores2) };
    }
    return obj;
  }, items7);
  const appDMChannelMuteConfig = stateFromStoresObject.appDMChannelMuteConfig;
  obj = { contentContainerStyle: tmp.container };
  const description = application.description;
  let obj10 = application(stateFromStores[39]);
  obj1 = { style: items8 };
  items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  const date = new Date(obj10.extractTimestamp(oauth2Token.id));
  const tmp12 = closure_18;
  const tmp13 = closure_4;
  obj2 = { iconSource: applicationIconSource };
  const tmp15 = closure_18;
  const tmp16 = closure_5;
  const toLocaleDateStringResult = new Date(obj10.extractTimestamp(oauth2Token.id)).toLocaleDateString(stateFromStores1, { year: "numeric", month: "short", day: "numeric" });
  obj2.iconBorderRadius = application(stateFromStores[13]).radii.md;
  obj2.iconSize = 64;
  const items9 = [callback(application(stateFromStores[40]), obj2), , ];
  obj3 = { variant: "text-sm/normal", color: "text-muted" };
  let intl = oauth2Token(stateFromStores[18]).intl;
  obj3.children = intl.format(oauth2Token(stateFromStores[18]).t.yOApCK, { date: toLocaleDateStringResult });
  items9[1] = callback(oauth2Token(stateFromStores[41]).Text, obj3);
  let tmp18 = null;
  if (undefined !== description) {
    tmp18 = null;
    if ("" !== description) {
      obj4 = { style: tmp.appAboutDescription, variant: "text-sm/normal", color: "text-default" };
      let obj16 = oauth2Token(stateFromStores[42]);
      obj4.children = obj16.parseBioReactWithCachedAST(description);
      tmp18 = callback(oauth2Token(stateFromStores[41]).Text, obj4);
    }
  }
  items9[2] = tmp18;
  obj1.children = items9;
  const items10 = [tmp15(tmp16, obj1), , , , , , ];
  let tmp23Result = null;
  if (null != stateFromStores2) {
    obj5 = { style: tmp.section };
    const obj6 = { title: "Notifications", hasIcons: false };
    obj7 = { label: "Mute DMs" };
    let end_time;
    if (null != appDMChannelMuteConfig) {
      end_time = appDMChannelMuteConfig.end_time;
    }
    let formatResult;
    if (null != end_time) {
      let intl2 = oauth2Token(stateFromStores[18]).intl;
      obj8 = {};
      const _Date = Date;
      const date1 = new Date(appDMChannelMuteConfig.end_time);
      obj8.endTime = date1.toLocaleString(oauth2Token(stateFromStores[18]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" });
      formatResult = intl2.format(oauth2Token(stateFromStores[18]).t.j7h4AJ, obj8);
    }
    obj7.subLabel = formatResult;
    obj7.value = stateFromStoresObject.muted;
    obj7.onValueChange = function handleMuteChannelChange(arg0) {
      if (null != stateFromStores2) {
        if (arg0) {
          const rootNavigationRef = oauth2Token(stateFromStores[36]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              let obj = { channelId: stateFromStores2, applicationId: application.id, initialRouteName: outer1_15.MUTE, source: "authorized-apps-settings" };
              rootNavigationRef.navigate("sidebar", obj);
            }
          }
        } else {
          obj = application(stateFromStores[37]);
          obj = { muted: false };
          const result = obj.updateAppDMOverrideSettings(null, stateFromStores2, application.id, obj, oauth2Token(stateFromStores[38]).NotificationLabels.Unmuted);
        }
      }
    };
    obj6.children = callback(oauth2Token(stateFromStores[44]).TableSwitchRow, obj7);
    obj5.children = callback(oauth2Token(stateFromStores[43]).TableRowGroup, obj6);
    tmp23Result = callback(closure_5, obj5);
    const tmp23 = callback;
    const tmp24 = closure_5;
    const tmp25 = callback;
    const tmp28 = callback;
  }
  items10[1] = tmp23Result;
  const obj9 = { style: tmp.section };
  obj10 = {};
  let intl3 = oauth2Token(stateFromStores[18]).intl;
  obj10.title = intl3.string(oauth2Token(stateFromStores[18]).t["8pMev2"]);
  obj10.hasIcons = false;
  const obj11 = {};
  const intl4 = oauth2Token(stateFromStores[18]).intl;
  obj11.label = intl4.string(oauth2Token(stateFromStores[18]).t.xrmhRX);
  obj11.onPress = function handleClickPermissions() {
    let obj = application(stateFromStores[33]);
    obj.setSection(outer1_12.AUTHORIZED_APP_PERMISSIONS);
    let obj1 = oauth2Token(stateFromStores[34]);
    obj = { destinationPane: outer1_12.AUTHORIZED_APP_PERMISSIONS, source: obj, applicationId: application.id };
    obj = { page: outer1_14.USER_SETTINGS };
    const result = obj1.trackUserSettingsPaneViewed(obj);
    obj1 = { oauth2Token };
    navigation.navigate(outer1_12.AUTHORIZED_APP_PERMISSIONS, obj1);
  };
  obj11.arrow = true;
  const items11 = [callback(oauth2Token(stateFromStores[45]).TableRow, obj11), , ];
  let tmp39 = null != application.terms_of_service_url;
  if (tmp39) {
    const obj12 = {};
    const intl5 = oauth2Token(stateFromStores[18]).intl;
    obj12.label = intl5.string(oauth2Token(stateFromStores[18]).t["lx+Gec"]);
    obj12.onPress = function handleClickToS() {
      if (null != application.terms_of_service_url) {
        let obj = oauth2Token(stateFromStores[35]);
        obj = { href: application.terms_of_service_url, shouldConfirm: true };
        obj.handleClick(obj);
      }
    };
    obj12.arrow = true;
    tmp39 = callback(oauth2Token(stateFromStores[45]).TableRow, obj12);
  }
  items11[1] = tmp39;
  let tmp43 = null != application.privacy_policy_url;
  if (tmp43) {
    const obj13 = {};
    const intl6 = oauth2Token(stateFromStores[18]).intl;
    obj13.label = intl6.string(oauth2Token(stateFromStores[18]).t.okSwq9);
    obj13.onPress = function handleClickPrivacyPolicy() {
      if (null != application.privacy_policy_url) {
        let obj = oauth2Token(stateFromStores[35]);
        obj = { href: application.privacy_policy_url, shouldConfirm: true };
        obj.handleClick(obj);
      }
    };
    obj13.arrow = true;
    tmp43 = callback(oauth2Token(stateFromStores[45]).TableRow, obj13);
  }
  items11[2] = tmp43;
  obj10.children = items11;
  obj9.children = closure_18(oauth2Token(stateFromStores[43]).TableRowGroup, obj10);
  items10[2] = callback(closure_5, obj9);
  const obj14 = { style: tmp.section };
  const obj15 = {};
  const intl7 = oauth2Token(stateFromStores[18]).intl;
  obj15.title = intl7.string(oauth2Token(stateFromStores[18]).t.gAHBA7);
  obj15.hasIcons = false;
  obj16 = {};
  const intl8 = oauth2Token(stateFromStores[18]).intl;
  obj16.label = intl8.string(oauth2Token(stateFromStores[18]).t.xUqheM);
  obj16.variant = "danger";
  obj16.onPress = callback;
  obj16.arrow = true;
  obj15.children = callback(oauth2Token(stateFromStores[45]).TableRow, obj16);
  obj14.children = callback(oauth2Token(stateFromStores[43]).TableRowGroup, obj15);
  items10[3] = callback(closure_5, obj14);
  items10[4] = (() => {
    let id;
    if (null != application) {
      const bot = application.bot;
      if (null != bot) {
        id = bot.id;
      }
    }
    if (null != id) {
      let obj = {};
      const intl = oauth2Token(stateFromStores[18]).intl;
      obj.title = intl.string(oauth2Token(stateFromStores[18]).t["8msQQO"]);
      obj.hasIcons = false;
      if (closure_4) {
        obj = {};
        const intl3 = oauth2Token(stateFromStores[18]).intl;
        obj.label = intl3.string(oauth2Token(stateFromStores[18]).t.XyHpKH);
        obj.onPress = function onPress() {
          return outer1_6(id);
        };
        obj.arrow = true;
      } else {
        obj = {};
        const intl2 = oauth2Token(stateFromStores[18]).intl;
        obj.label = intl2.string(oauth2Token(stateFromStores[18]).t.l4Emac);
        obj.variant = "danger";
        obj.onPress = function onPress() {
          return outer1_5(id);
        };
        obj.arrow = true;
      }
      obj.children = outer1_17(oauth2Token(stateFromStores[45]).TableRow, obj);
      return outer1_17(oauth2Token(stateFromStores[43]).TableRowGroup, obj);
    }
  })();
  if (shouldWarnAuthorizedAppTwoWay) {
    const obj17 = { application };
    shouldWarnAuthorizedAppTwoWay = callback(AuthorizedAppTwoWay, obj17);
  }
  items10[5] = shouldWarnAuthorizedAppTwoWay;
  if (tmp2) {
    const obj18 = { application };
    tmp2 = callback(ParentApp, obj18);
  }
  items10[6] = tmp2;
  obj.children = items10;
  return tmp12(tmp13, obj);
};
export { handleDeleteApp };
