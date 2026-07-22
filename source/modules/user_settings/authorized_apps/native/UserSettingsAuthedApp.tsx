// Module ID: 13730
// Function ID: 103858
// Name: WarningLabel
// Dependencies: []
// Exports: default

// Module 13730 (WarningLabel)
function WarningLabel(children) {
  const tmp = callback3();
  let obj = { style: tmp.warningContainer };
  obj = { size: "xs", color: importDefault(dependencyMap[13]).colors.TEXT_MUTED, style: tmp.warningIcon };
  const items = [callback(arg1(dependencyMap[14]).CircleInformationIcon, obj), callback(arg1(dependencyMap[15]).TextWithIOSLinkWorkaround, { children: children.text })];
  obj.children = items;
  return callback2(closure_5, obj);
}
function AuthorizedAppTwoWay(application) {
  let obj = arg1(dependencyMap[16]);
  const navigation = obj.useNavigation();
  const arg1 = navigation;
  const items = [navigation];
  obj = {};
  const callback = React.useCallback(() => {
    const CommonActions = navigation(closure_2[17]).CommonActions;
    navigation.dispatch(CommonActions.navigate({ name: constants.CONNECTIONS }));
  }, items);
  const intl = arg1(dependencyMap[18]).intl;
  obj = { applicationName: application.application.name, onConnectionPress: callback };
  obj.text = intl.format(arg1(dependencyMap[18]).t.jUhnwb, obj);
  return callback(WarningLabel, obj);
}
function ParentApp(application) {
  let obj = {};
  const intl = arg1(dependencyMap[18]).intl;
  obj = { applicationName: application.application.name };
  obj.text = intl.format(arg1(dependencyMap[18]).t.j4B7EW, obj);
  return callback(WarningLabel, obj);
}
function handleDeleteApp(closure_1) {
  const application = closure_1.application;
  let obj = importDefault(dependencyMap[19]);
  obj.delete(closure_1.id);
  const selfEmbeddedActivities = selfEmbeddedActivities.getSelfEmbeddedActivities();
  const value = selfEmbeddedActivities.get(application.id);
  obj = {};
  let _location;
  if (null != value) {
    _location = value.location;
  }
  obj.location = _location;
  obj.applicationId = application.id;
  importDefault(dependencyMap[20]).leaveActivity(obj);
}
let closure_3 = importAll(dependencyMap[0]);
({ ScrollView: closure_4, View: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = importDefault(dependencyMap[7]);
const tmp2 = arg1(dependencyMap[1]);
({ UserSettingsSections: closure_12, AnalyticsSections: closure_13, AnalyticsPages: closure_14 } = arg1(dependencyMap[8]));
let closure_15 = arg1(dependencyMap[9]).ChannelDetailsNavigatorScreens;
let closure_16 = arg1(dependencyMap[10]).BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_17, jsxs: closure_18 } = arg1(dependencyMap[11]));
let obj = arg1(dependencyMap[12]);
obj = { container: {}, section: { marginBottom: 24 }, header: { borderWidth: 275924203, borderColor: 234881024, position: 1929379840, top: 16 }, appAboutDescription: { width: "100%" } };
obj = { <string:3427919713>: "MAX_FAVORITE_GIFS_SIZE", <string:1374118325>: "%ArrayBuffer%", <string:1632825022>: "isArrayBuffer", marginTop: importDefault(dependencyMap[13]).space.PX_12 };
obj.warningContainer = obj;
const obj1 = { -9223372036854775808: 24, 9223372036854775807: 24, 0: null, color: importDefault(dependencyMap[13]).colors.TEXT_MUTED };
obj.warningIcon = obj1;
let closure_19 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[11]);
const result = arg1(dependencyMap[46]).fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApp.tsx");

export default function UserSettingsAuthedApp(oauth2Token) {
  oauth2Token = oauth2Token.oauth2Token;
  const arg1 = oauth2Token;
  let importDefault;
  let React;
  let closure_7;
  const tmp = callback3();
  const application = oauth2Token.application;
  importDefault = application;
  let tmp2 = importDefault(dependencyMap[21])(application);
  let obj = arg1(dependencyMap[22]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => stateFromStores2.getNewestTokenForApplication(application.id));
  const dependencyMap = stateFromStores;
  let obj1 = arg1(dependencyMap[22]);
  const items1 = [closure_11];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => locale.locale);
  let obj2 = arg1(dependencyMap[16]);
  const navigation = obj2.useNavigation();
  React = navigation;
  let obj3 = arg1(dependencyMap[22]);
  const items2 = [closure_9];
  let closure_4 = obj3.useStateFromStores(items2, () => {
    let id;
    if (null != application) {
      const bot = application.bot;
      if (null != bot) {
        id = bot.id;
      }
    }
    return blocked.isBlocked(id);
  });
  let obj4 = arg1(dependencyMap[23]);
  let shouldWarnAuthorizedAppTwoWay = obj4.useShouldWarnAuthorizedAppTwoWay(application.id);
  let obj5 = importDefault(dependencyMap[24]);
  obj = { id: application.id, icon: application.icon };
  const items3 = [stateFromStores, navigation];
  const applicationIconSource = obj5.getApplicationIconSource(obj);
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      navigation.goBack();
    }
  }, items3);
  const items4 = [application, oauth2Token];
  const callback = React.useCallback(() => {
    let obj = oauth2Token(stateFromStores[25]);
    obj = {
      application,
      scopes: oauth2Token.scopes,
      onDelete() {
        callback(closure_0);
      }
    };
    obj.openAlert("confirm-delete-authed-app", callback(application(stateFromStores[26]), obj));
  }, items4);
  let closure_5 = React.useCallback((userId) => {
    let obj = application(stateFromStores[27]);
    obj = { userId, impressionName: oauth2Token(stateFromStores[30]).ImpressionNames.BLOCK_USER_CONFIRMATION };
    obj.openLazy(oauth2Token(stateFromStores[29])(stateFromStores[28], stateFromStores.paths), closure_16, obj, "stack");
  }, []);
  let closure_6 = React.useCallback((closure_3) => {
    let obj = application(stateFromStores[31]);
    obj = { location: constants2.SETTINGS_AUTHORIZED_APP };
    obj.unblockUser(closure_3, obj);
    const result = application(stateFromStores[32]).showUnblockSuccessToast(closure_3);
  }, []);
  let obj7 = arg1(dependencyMap[22]);
  const items5 = [closure_8];
  const stateFromStores2 = obj7.useStateFromStores(items5, () => {
    const bot = application.bot;
    let id;
    if (null != bot) {
      id = bot.id;
    }
    return dMFromUserId.getDMFromUserId(id);
  });
  closure_7 = stateFromStores2;
  let obj8 = arg1(dependencyMap[22]);
  const items6 = [closure_10];
  const items7 = [stateFromStores2];
  const stateFromStoresObject = obj8.useStateFromStoresObject(items6, () => {
    if (null == stateFromStores2) {
      let obj = { position: "<string:1243348993>", bottom: "<string:2137063425>" };
    } else {
      obj = { appDMChannelMuteConfig: closure_10.getChannelMuteConfig(null, stateFromStores2), muted: closure_10.isChannelMuted(null, stateFromStores2) };
    }
    return obj;
  }, items7);
  const appDMChannelMuteConfig = stateFromStoresObject.appDMChannelMuteConfig;
  obj = { contentContainerStyle: tmp.container };
  const description = application.description;
  let obj10 = importDefault(dependencyMap[39]);
  obj1 = { style: items8 };
  const items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  const date = new Date(obj10.extractTimestamp(oauth2Token.id));
  const tmp12 = closure_18;
  const tmp13 = closure_4;
  obj2 = { iconSource: applicationIconSource };
  const tmp15 = closure_18;
  const tmp16 = closure_5;
  const toLocaleDateStringResult = new Date(obj10.extractTimestamp(oauth2Token.id)).toLocaleDateString(stateFromStores1, {});
  obj2.iconBorderRadius = importDefault(dependencyMap[13]).radii.md;
  obj2.iconSize = 64;
  const items9 = [callback(importDefault(dependencyMap[40]), obj2), , ];
  obj3 = { cachedAt: 400, edpbxy: 20 };
  const intl = arg1(dependencyMap[18]).intl;
  obj3.children = intl.format(arg1(dependencyMap[18]).t.yOApCK, { date: toLocaleDateStringResult });
  items9[1] = callback(arg1(dependencyMap[41]).Text, obj3);
  let tmp18 = null;
  if (undefined !== description) {
    tmp18 = null;
    if ("" !== description) {
      obj4 = { "Null": 1, "Null": "tail", alignItems: null, style: tmp.appAboutDescription };
      let obj16 = arg1(dependencyMap[42]);
      obj4.children = obj16.parseBioReactWithCachedAST(description);
      tmp18 = callback(arg1(dependencyMap[41]).Text, obj4);
    }
  }
  items9[2] = tmp18;
  obj1.children = items9;
  const items10 = [tmp15(tmp16, obj1), , , , , , ];
  let tmp23Result = null;
  if (null != stateFromStores2) {
    obj5 = { style: tmp.section };
    const obj6 = { -9223372036854775808: true, 9223372036854775807: true };
    obj7 = { label: "Mute DMs" };
    let end_time;
    if (null != appDMChannelMuteConfig) {
      end_time = appDMChannelMuteConfig.end_time;
    }
    let formatResult;
    if (null != end_time) {
      const intl2 = arg1(dependencyMap[18]).intl;
      obj8 = {};
      const _Date = Date;
      const date1 = new Date(appDMChannelMuteConfig.end_time);
      obj8.endTime = date1.toLocaleString(arg1(dependencyMap[18]).intl.currentLocale, {});
      formatResult = intl2.format(arg1(dependencyMap[18]).t.j7h4AJ, obj8);
    }
    obj7.subLabel = formatResult;
    obj7.value = stateFromStoresObject.muted;
    obj7.onValueChange = function handleMuteChannelChange(arg0) {
      if (null != stateFromStores2) {
        if (arg0) {
          const rootNavigationRef = oauth2Token(stateFromStores[36]).getRootNavigationRef();
          if (null != rootNavigationRef) {
            if (rootNavigationRef.isReady()) {
              let obj = { channelId: stateFromStores2, applicationId: application.id, initialRouteName: constants4.MUTE, source: "authorized-apps-settings" };
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
    obj6.children = callback(arg1(dependencyMap[44]).TableSwitchRow, obj7);
    obj5.children = callback(arg1(dependencyMap[43]).TableRowGroup, obj6);
    tmp23Result = callback(closure_5, obj5);
    const tmp23 = callback;
    const tmp24 = closure_5;
    const tmp25 = callback;
    const tmp28 = callback;
  }
  items10[1] = tmp23Result;
  const obj9 = { style: tmp.section };
  obj10 = {};
  const intl3 = arg1(dependencyMap[18]).intl;
  obj10.title = intl3.string(arg1(dependencyMap[18]).t.8pMev2);
  obj10.hasIcons = false;
  const obj11 = {};
  const intl4 = arg1(dependencyMap[18]).intl;
  obj11.label = intl4.string(arg1(dependencyMap[18]).t.xrmhRX);
  obj11.onPress = function handleClickPermissions() {
    let obj = application(stateFromStores[33]);
    obj.setSection(constants.AUTHORIZED_APP_PERMISSIONS);
    let obj1 = oauth2Token(stateFromStores[34]);
    obj = { destinationPane: constants.AUTHORIZED_APP_PERMISSIONS, source: obj, applicationId: application.id };
    obj = { page: constants3.USER_SETTINGS };
    const result = obj1.trackUserSettingsPaneViewed(obj);
    obj1 = { oauth2Token };
    navigation.navigate(constants.AUTHORIZED_APP_PERMISSIONS, obj1);
  };
  obj11.arrow = true;
  const items11 = [callback(arg1(dependencyMap[45]).TableRow, obj11), , ];
  let tmp39 = null != application.terms_of_service_url;
  if (tmp39) {
    const obj12 = {};
    const intl5 = arg1(dependencyMap[18]).intl;
    obj12.label = intl5.string(arg1(dependencyMap[18]).t.lx+Gec);
    obj12.onPress = function handleClickToS() {
      if (null != application.terms_of_service_url) {
        let obj = oauth2Token(stateFromStores[35]);
        obj = { href: application.terms_of_service_url, shouldConfirm: true };
        obj.handleClick(obj);
      }
    };
    obj12.arrow = true;
    tmp39 = callback(arg1(dependencyMap[45]).TableRow, obj12);
  }
  items11[1] = tmp39;
  let tmp43 = null != application.privacy_policy_url;
  if (tmp43) {
    const obj13 = {};
    const intl6 = arg1(dependencyMap[18]).intl;
    obj13.label = intl6.string(arg1(dependencyMap[18]).t.okSwq9);
    obj13.onPress = function handleClickPrivacyPolicy() {
      if (null != application.privacy_policy_url) {
        let obj = oauth2Token(stateFromStores[35]);
        obj = { href: application.privacy_policy_url, shouldConfirm: true };
        obj.handleClick(obj);
      }
    };
    obj13.arrow = true;
    tmp43 = callback(arg1(dependencyMap[45]).TableRow, obj13);
  }
  items11[2] = tmp43;
  obj10.children = items11;
  obj9.children = closure_18(arg1(dependencyMap[43]).TableRowGroup, obj10);
  items10[2] = callback(closure_5, obj9);
  const obj14 = { style: tmp.section };
  const obj15 = {};
  const intl7 = arg1(dependencyMap[18]).intl;
  obj15.title = intl7.string(arg1(dependencyMap[18]).t.gAHBA7);
  obj15.hasIcons = false;
  obj16 = {};
  const intl8 = arg1(dependencyMap[18]).intl;
  obj16.label = intl8.string(arg1(dependencyMap[18]).t.xUqheM);
  obj16.variant = "danger";
  obj16.onPress = callback;
  obj16.arrow = true;
  obj15.children = callback(arg1(dependencyMap[45]).TableRow, obj16);
  obj14.children = callback(arg1(dependencyMap[43]).TableRowGroup, obj15);
  items10[3] = callback(closure_5, obj14);
  items10[4] = () => {
    let id;
    if (null != application) {
      const bot = application.bot;
      if (null != bot) {
        id = bot.id;
      }
    }
    const oauth2Token = id;
    if (null != id) {
      let obj = {};
      const intl = oauth2Token(stateFromStores[18]).intl;
      obj.title = intl.string(oauth2Token(stateFromStores[18]).t.8msQQO);
      obj.hasIcons = false;
      if (closure_4) {
        obj = {};
        const intl3 = oauth2Token(stateFromStores[18]).intl;
        obj.label = intl3.string(oauth2Token(stateFromStores[18]).t.XyHpKH);
        obj.onPress = function onPress() {
          return callback2(id);
        };
        obj.arrow = true;
      } else {
        obj = {};
        const intl2 = oauth2Token(stateFromStores[18]).intl;
        obj.label = intl2.string(oauth2Token(stateFromStores[18]).t.l4Emac);
        obj.variant = "danger";
        obj.onPress = function onPress() {
          return callback(id);
        };
        obj.arrow = true;
      }
      obj.children = closure_17(oauth2Token(stateFromStores[45]).TableRow, obj);
      return closure_17(oauth2Token(stateFromStores[43]).TableRowGroup, obj);
    }
  }();
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
