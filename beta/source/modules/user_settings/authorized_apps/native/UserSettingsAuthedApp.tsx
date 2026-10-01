// Module ID: 14477
// Function ID: 14478
// Name: UserSettingsAuthedApp
// Dependencies: [19, 17, 2044, 6528, 2045, 4479, 5017, 2112, 1074, 10377, 10926, 21, 4836, 576, 4787, 4832, 1485, 1486, 1115, 6591, 8765, 8522, 504, 12095, 1397, 5205, 12094, 4800, 10927, 1981, 1249, 9195, 7852, 6411, 6416, 7818, 4693, 6540, 6535, 11, 11538, 8722, 5999, 6621, 5917, 2]
// Exports: default, handleDeleteApp

// Module 14477 (UserSettingsAuthedApp)
import nativeDefault from "native" /* 576 */;
import intl12 from "intl" /* 1115 */;
import Link from "Link" /* 1486 */;
import RootNavigationRef from "RootNavigationRef" /* 4693 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4787 */;
import Text_Text from "Text/Text" /* 4832 */;
import useAlertStore from "useAlertStore" /* 5205 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 6411 */;
import UserSettingsUtils from "UserSettingsUtils" /* 6416 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 6535 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 6540 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 6591 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 7818 */;
import EmbeddedActivitiesNativeManagerDefault from "EmbeddedActivitiesNativeManager" /* 8765 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10377 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 10926 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 12094 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 6528 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5017 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let closure_12;
let closure_14;
let closure_17;
let closure_18;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let size;
function WarningLabel(text) {
  let items;
  text = text.text;
  const tmp = closure_19();
  const obj = { style: tmp.warningContainer, children: items };
  const obj2 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED, style: tmp.warningIcon };
  const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
  items = [closure_17(CircleInformationIcon, obj2), closure_17(Text_Text.Text, { color: "text-default", variant: "text-sm/medium", children: text })];
  return authStore4(hasOwnProperty, obj);
}
function AuthorizedAppTwoWay(application) {
  let intl;
  let obj3;
  navigation = undefined;
  application = application.application;
  const obj = navigation(1485);
  navigation = obj.useNavigation();
  const items = [navigation];
  const obj2 = { text: intl.format(navigation(1115).t.jUhnwb, obj3) };
  const callback = react.useCallback(() => {
    const dispatch = navigation.dispatch;
    const CommonActions = Link.CommonActions;
    dispatch(CommonActions.navigate(constants.CONNECTIONS));
  }, items);
  intl = navigation(1115).intl;
  obj3 = { applicationName: application.name, onConnectionPress: callback };
  return closure_17(WarningLabel, obj2);
}
function ParentApp(application) {
  let intl;
  let obj2;
  application = application.application;
  const obj = { text: intl.format(intl12.t.j4B7EW, obj2) };
  intl = intl12.intl;
  obj2 = { applicationName: application.name };
  return closure_17(WarningLabel, obj);
}
({ ScrollView: closure_4, View: hasOwnProperty } = react_native);
({ UserSettingsSections: closure_12, AnalyticsSections: map1, AnalyticsPages: closure_14 } = Constants);
let closure_15 = ChannelDetailsConstants.ChannelDetailsNavigatorScreens;
let closure_16 = RestrictionConfirmationConstants.BLOCK_CONFIRMATION_ACTION_SHEET_KEY;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingHorizontal: 16, paddingVertical: 24 }, section: { marginBottom: 24 }, header: { flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12 }, appAboutDescription: { width: "100%" }, warningContainer: obj2, warningIcon: size };
obj2 = { marginTop: nativeDefault.space.PX_12, display: "flex", flexDirection: "row" };
createStyles = createStyles.createStyles;
size = { width: 16, height: 16, marginRight: 8, color: nativeDefault.colors.TEXT_MUTED };
let closure_19 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApp.tsx");

export default function UserSettingsAuthedApp(oauth2Token) {
  let TableRow4;
  let TableRow5;
  let TableRowGroup;
  let TableRowGroup2;
  let TableRowGroup3;
  let date1;
  let intl;
  let intl10;
  let intl11;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items10;
  let items11;
  let items8;
  let items9;
  let locale;
  let obj18;
  let obj19;
  let obj21;
  let obj26;
  let obj27;
  let obj30;
  let tmp4Result;
  oauth2Token = oauth2Token.oauth2Token;
  let stateFromStores;
  const tmp = closure_19();
  let application = oauth2Token.application;
  let tmp2 = stateFromStores;
  let tmp19Result10 = application(stateFromStores[21])(application);
  let obj = oauth2Token(stateFromStores[22]);
  const items = [AuthorizedAppsStore];
  stateFromStores = obj.useStateFromStores(items, () => AuthorizedAppsStore.getNewestTokenForApplication(application.id));
  let obj2 = oauth2Token(stateFromStores[22]);
  const items1 = [LocaleStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => locale.locale);
  let obj3 = oauth2Token(stateFromStores[16]);
  navigation = obj3.useNavigation();
  let obj4 = oauth2Token(stateFromStores[22]);
  const items2 = [RelationshipStore];
  const stateFromStores2 = obj4.useStateFromStores(items2, () => {
    let id;
    const isBlocked = RelationshipStore.isBlocked;
    if (application != null) {
      const bot = application.bot;
      if (bot != null) {
        id = bot.id;
      }
    }
    return isBlocked(id);
  });
  let obj5 = oauth2Token(stateFromStores[23]);
  let shouldWarnAuthorizedAppTwoWay = obj5.useShouldWarnAuthorizedAppTwoWay(application.id);
  const items3 = [, ];
  const obj7 = { id: application.id, icon: application.icon };
  items3[0] = stateFromStores;
  items3[1] = navigation;
  const obj6 = application(stateFromStores[24]);
  const applicationIconSource = obj6.getApplicationIconSource(obj7);
  const effect = navigation.useEffect(() => {
    if (null == stateFromStores) {
      navigation.goBack();
    }
  }, items3);
  const items4 = [application, oauth2Token];
  const callback = navigation.useCallback(() => {
    let obj = useAlertStore;
    let obj2 = {
      application,
      scopes: oauth2Token.scopes,
      onDelete() {
        application = oauth2Token.application;
        const id = oauth2Token.id;
        const obj = application(stateFromStores[19]);
        obj.delete(id);
        const selfEmbeddedActivities = stateFromStores3.getSelfEmbeddedActivities();
        const value = selfEmbeddedActivities.get(application.id);
        let _location;
        const leaveActivity = application(stateFromStores[20]).leaveActivity;
        application(stateFromStores[20]);
        if (value != null) {
          _location = value.location;
        }
        const obj2 = { location: _location, applicationId: application.id };
        leaveActivity(obj2);
      }
    };
    obj.openAlert("confirm-delete-authed-app", closure_17(UserSettingsAuthedAppDeleteWarningModalDefault, obj2));
  }, items4);
  let closure_4 = navigation.useCallback((userId) => {
    const openLazy = application(stateFromStores[27]).openLazy;
    application(stateFromStores[27]);
    const tmp2 = oauth2Token(stateFromStores[29])(stateFromStores[28], stateFromStores.paths);
    const obj = { userId, impressionName: oauth2Token(stateFromStores[30]).ImpressionNames.BLOCK_USER_CONFIRMATION };
    openLazy(tmp2, closure_1_16, obj, "stack");
  }, []);
  let closure_5 = navigation.useCallback((id2) => {
    const obj = application(stateFromStores[31]);
    const obj2 = { location: constants.SETTINGS_AUTHORIZED_APP };
    obj.unblockUser(id2, obj2);
    const obj3 = application(stateFromStores[32]);
    const result = obj3.showUnblockSuccessToast(id2);
  }, []);
  const items5 = [ChannelStore];
  const obj8 = oauth2Token(stateFromStores[22]);
  const stateFromStores3 = obj8.useStateFromStores(items5, () => {
    const bot = application.bot;
    let id;
    const getDMFromUserId = ChannelStore.getDMFromUserId;
    if (bot != null) {
      id = bot.id;
    }
    return getDMFromUserId(id);
  });
  const items6 = [UserGuildSettingsStore];
  const items7 = [stateFromStores3];
  const obj9 = oauth2Token(stateFromStores[22]);
  const stateFromStoresObject = obj9.useStateFromStoresObject(items6, () => {
    let obj;
    if (null == stateFromStores3) {
      obj = { appDMChannelMuteConfig: null, muted: false };
    } else {
      obj = { appDMChannelMuteConfig: UserGuildSettingsStore.getChannelMuteConfig(null, stateFromStores3), muted: UserGuildSettingsStore.isChannelMuted(null, stateFromStores3) };
    }
    return obj;
  }, items7);
  const appDMChannelMuteConfig = stateFromStoresObject.appDMChannelMuteConfig;
  const description = application.description;
  const muted = stateFromStoresObject.muted;
  let tmp16 = closure_4;
  const obj10 = { contentContainerStyle: tmp.container, children: items10 };
  const obj12 = { style: items8, children: items9 };
  items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  const obj11 = application(stateFromStores[39]);
  const date = new Date(obj11.extractTimestamp(oauth2Token.id));
  const obj13 = { iconSource: applicationIconSource, iconBorderRadius: application(stateFromStores[13]).radii.md, iconSize: 64 };
  const toLocaleDateStringResult = date.toLocaleDateString(stateFromStores1, { year: "numeric", month: "short", day: "numeric" });
  const tmp20 = application(stateFromStores[40]);
  items9 = [closure_17(tmp20, obj13), , ];
  const obj14 = { variant: "text-sm/normal", color: "text-muted", children: intl.format(oauth2Token(stateFromStores[18]).t.yOApCK, { date: toLocaleDateStringResult }) };
  const Text = oauth2Token(stateFromStores[15]).Text;
  intl = oauth2Token(stateFromStores[18]).intl;
  items9[1] = closure_17(Text, obj14);
  let tmp19Result = null;
  if (undefined !== description) {
    tmp19Result = null;
    if ("" !== description) {
      const obj15 = { style: tmp.appAboutDescription, variant: "text-sm/normal", color: "text-default", children: tmp4Result.parseBioReactWithCachedAST(description) };
      const Text2 = tmp4(tmp2[15]).Text;
      tmp4Result = oauth2Token(tmp2[41]);
      tmp19Result = tmp19(Text2, obj15);
    }
  }
  items9[2] = tmp19Result;
  items10 = [closure_18(closure_5, obj12), , , , , , ];
  let tmp19Result6 = null;
  if (null != stateFromStores3) {
    const obj16 = { style: tmp.section, children: closure_17(TableRowGroup, obj18) };
    TableRowGroup = tmp4(tmp2[42]).TableRowGroup;
    let end_time;
    const TableSwitchRow = tmp4(tmp2[43]).TableSwitchRow;
    if (appDMChannelMuteConfig != null) {
      end_time = appDMChannelMuteConfig.end_time;
    }
    let formatResult;
    if (null != end_time) {
      const intl2 = tmp4(tmp2[18]).intl;
      const format = intl2.format;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const obj17 = { endTime: date1.toLocaleString(oauth2Token(tmp2[18]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
      const j7h4AJ = tmp4(tmp2[18]).t.j7h4AJ;
      date1 = new Date(appDMChannelMuteConfig.end_time);
      formatResult = format(j7h4AJ, obj17);
    }
    obj18 = { title: "Notifications", hasIcons: false, children: closure_17(TableSwitchRow, obj19) };
    obj19 = {
      label: "Mute DMs",
      subLabel: formatResult,
      value: muted,
      onValueChange: function handleMuteChannelChange(arg0) {
          if (null != stateFromStores3) {
            const tmp16 = arg0;
            if (tmp16) {
              const obj2 = RootNavigationRef;
              const rootNavigationRef = obj2.getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  const obj3 = { channelId: stateFromStores3, applicationId: application.id, initialRouteName: constants2.MUTE, source: "authorized-apps-settings" };
                  rootNavigationRef.navigate("sidebar", obj3);
                }
              }
            } else {
              const obj = NotificationSettingsModalActionCreatorsDefault;
              const result = obj.updateAppDMOverrideSettings(null, tmp, application.id, { muted: false }, NotificationSettingsUtils.NotificationLabels.Unmuted);
            }
          }
        }
    };
    tmp19Result6 = tmp19(tmp18, obj16);
  }
  items10[1] = tmp19Result6;
  function handleClickPermissions() {
    let obj4;
    const obj = UserSettingsModalActionCreatorsDefault;
    obj.setSection(constants.AUTHORIZED_APP_PERMISSIONS);
    const obj3 = { destinationPane: constants.AUTHORIZED_APP_PERMISSIONS, source: obj4, applicationId: application.id };
    obj4 = { page: constants2.USER_SETTINGS };
    const obj2 = UserSettingsUtils;
    const result = obj2.trackUserSettingsPaneViewed(obj3);
    const obj5 = { oauth2Token };
    navigation.navigate(constants.AUTHORIZED_APP_PERMISSIONS, obj5);
  }
  const obj20 = { style: tmp.section, children: closure_18(TableRowGroup2, obj21) };
  obj21 = { title: intl3.string(oauth2Token(tmp2[18]).t["8pMev2"]), hasIcons: false, children: items11 };
  TableRowGroup2 = tmp4(tmp2[42]).TableRowGroup;
  intl3 = tmp4(tmp2[18]).intl;
  const obj22 = { label: intl4.string(oauth2Token(tmp2[18]).t.xrmhRX), onPress: handleClickPermissions, arrow: true };
  const TableRow = tmp4(tmp2[44]).TableRow;
  intl4 = tmp4(tmp2[18]).intl;
  items11 = [closure_17(TableRow, obj22), , ];
  let tmp19Result7 = null != application.terms_of_service_url;
  if (tmp19Result7) {
    function handleClickToS() {
      if (null != application.terms_of_service_url) {
        const obj2 = { href: tmp.terms_of_service_url, shouldConfirm: true };
        const obj = MaskedLinkUtils;
        obj.handleClick(obj2);
      }
    }
    const obj23 = { label: intl5.string(oauth2Token(tmp2[18]).t["lx+Gec"]), onPress: handleClickToS, arrow: true };
    const TableRow2 = tmp4(tmp2[44]).TableRow;
    intl5 = tmp4(tmp2[18]).intl;
    tmp19Result7 = tmp19(TableRow2, obj23);
  }
  items11[1] = tmp19Result7;
  let tmp19Result8 = null != application.privacy_policy_url;
  if (tmp19Result8) {
    function handleClickPrivacyPolicy() {
      if (null != application.privacy_policy_url) {
        const obj2 = { href: tmp.privacy_policy_url, shouldConfirm: true };
        const obj = MaskedLinkUtils;
        obj.handleClick(obj2);
      }
    }
    const obj24 = { label: intl6.string(oauth2Token(tmp2[18]).t.okSwq9), onPress: handleClickPrivacyPolicy, arrow: true };
    const TableRow3 = tmp4(tmp2[44]).TableRow;
    intl6 = tmp4(tmp2[18]).intl;
    tmp19Result8 = tmp19(TableRow3, obj24);
  }
  items11[2] = tmp19Result8;
  items10[2] = closure_17(closure_5, obj20);
  const obj25 = { style: tmp.section, children: closure_17(TableRowGroup3, obj26) };
  obj26 = { title: intl7.string(oauth2Token(tmp2[18]).t.gAHBA7), hasIcons: false, children: closure_17(TableRow4, obj27) };
  TableRowGroup3 = tmp4(tmp2[42]).TableRowGroup;
  intl7 = tmp4(tmp2[18]).intl;
  obj27 = { label: intl8.string(oauth2Token(tmp2[18]).t.xUqheM), variant: "danger", onPress: callback, arrow: true };
  TableRow4 = tmp4(tmp2[44]).TableRow;
  intl8 = tmp4(tmp2[18]).intl;
  items10[3] = closure_17(closure_5, obj25);
  let id;
  if (application != null) {
    let bot = application.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  let tmp19Result9;
  if (null != id) {
    const obj28 = { title: intl9.string(oauth2Token(tmp2[18]).t["8msQQO"]), hasIcons: false, children: closure_17(TableRow5, obj30) };
    const TableRowGroup4 = tmp4(tmp2[42]).TableRowGroup;
    intl9 = tmp4(tmp2[18]).intl;
    TableRow5 = tmp4(tmp2[44]).TableRow;
    if (stateFromStores2) {
      const obj29 = {
        label: intl11.string(oauth2Token(tmp2[18]).t.XyHpKH),
        onPress() {
              return closure_5(id);
            },
        arrow: true
      };
      intl11 = tmp4(tmp2[18]).intl;
      obj30 = obj29;
    } else {
      obj30 = {
        label: intl10.string(tmp4(tmp2[18]).t.l4Emac),
        variant: "danger",
        onPress() {
              return closure_4(id);
            },
        arrow: true
      };
      intl10 = tmp4(tmp2[18]).intl;
    }
    tmp19Result9 = tmp19(TableRowGroup4, obj28);
  }
  items10[4] = tmp19Result9;
  if (shouldWarnAuthorizedAppTwoWay) {
    const obj31 = { application };
    shouldWarnAuthorizedAppTwoWay = tmp19(AuthorizedAppTwoWay, obj31);
  }
  items10[5] = shouldWarnAuthorizedAppTwoWay;
  if (tmp19Result10) {
    const obj32 = { application };
    tmp19Result10 = tmp19(ParentApp, obj32);
  }
  items10[6] = tmp19Result10;
  return closure_18(tmp16, obj10);
};
export const handleDeleteApp = function handleDeleteApp(application) {
  application = application.application;
  const id = application.id;
  const obj = AuthorizedAppsActionCreatorsDefault;
  obj.delete(id);
  const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
  const value = selfEmbeddedActivities.get(application.id);
  let _location;
  const leaveActivity = EmbeddedActivitiesNativeManagerDefault.leaveActivity;
  EmbeddedActivitiesNativeManagerDefault;
  if (value != null) {
    _location = value.location;
  }
  const obj2 = { location: _location, applicationId: application.id };
  leaveActivity(obj2);
};
