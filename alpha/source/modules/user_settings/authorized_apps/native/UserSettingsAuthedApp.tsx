// Module ID: 16841
// Function ID: 16842
// Name: UserSettingsAuthedApp
// Dependencies: [19, 17, 4862, 7276, 4863, 4956, 6775, 2062, 1072, 10137, 11287, 21, 5014, 575, 5735, 5624, 1497, 1498, 1113, 7332, 10932, 9748, 504, 14158, 1409, 5960, 14157, 5258, 11288, 1994, 1260, 7488, 7496, 7161, 7165, 8940, 5199, 7288, 7283, 11, 12244, 11493, 7060, 7369, 2139, 6975, 2]
// Exports: default, handleDeleteApp

// Module 16841 (UserSettingsAuthedApp)
import nativeDefault from "native" /* 575 */;
import intl14 from "intl" /* 1113 */;
import Link from "Link" /* 1498 */;
import RootNavigationRef from "RootNavigationRef" /* 5199 */;
import Text_Text from "Text/Text" /* 5624 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 5735 */;
import useAlertStore from "useAlertStore" /* 5960 */;
import UserSettingsModalActionCreatorsDefault from "UserSettingsModalActionCreators" /* 7161 */;
import UserSettingsUtils from "UserSettingsUtils" /* 7165 */;
import NotificationSettingsUtils from "NotificationSettingsUtils" /* 7283 */;
import NotificationSettingsModalActionCreatorsDefault from "NotificationSettingsModalActionCreators" /* 7288 */;
import AuthorizedAppsActionCreatorsDefault from "AuthorizedAppsActionCreators" /* 7332 */;
import MaskedLinkUtils from "MaskedLinkUtils" /* 8940 */;
import ChannelDetailsConstants from "ChannelDetailsConstants" /* 10137 */;
import leaveEmbeddedActivity2 from "leaveEmbeddedActivity" /* 10932 */;
import RestrictionConfirmationConstants from "RestrictionConfirmationConstants" /* 11287 */;
import UserSettingsAuthedAppDeleteWarningModalDefault from "UserSettingsAuthedAppDeleteWarningModal" /* 14157 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4862 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7276 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
  return authStore5(hasOwnProperty, obj);
}
function AuthorizedAppTwoWay(application) {
  let intl;
  let obj3;
  navigation = undefined;
  application = application.application;
  const obj = navigation(1497);
  navigation = obj.useNavigation();
  const items = [navigation];
  const obj2 = { text: intl.format(navigation(1113).t.jUhnwb, obj3) };
  const callback = react.useCallback(() => {
    const dispatch = navigation.dispatch;
    const CommonActions = Link.CommonActions;
    dispatch(CommonActions.navigate(constants.CONNECTIONS));
  }, items);
  intl = navigation(1113).intl;
  obj3 = { applicationName: application.name, onConnectionPress: callback };
  return closure_17(WarningLabel, obj2);
}
function ParentApp(application) {
  let intl;
  let obj2;
  application = application.application;
  const obj = { text: intl.format(intl14.t.j4B7EW, obj2) };
  intl = intl14.intl;
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
  let TableSwitchRow;
  let date1;
  let formatResult;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl2;
  let intl3;
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
  let obj17;
  let obj18;
  let obj21;
  let obj26;
  let obj27;
  let obj30;
  let tmp5Result;
  oauth2Token = oauth2Token.oauth2Token;
  let stateFromStores;
  const tmp = closure_19();
  let application = oauth2Token.application;
  const tmp3 = stateFromStores;
  let tmp2 = application;
  let tmp20Result10 = application(stateFromStores[21])(application);
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
        application = closure_1_0.application;
        const id = closure_1_0.id;
        const obj = application(stateFromStores[19]);
        obj.delete(id);
        const selfEmbeddedActivities = stateFromStores3.getSelfEmbeddedActivities();
        const value = selfEmbeddedActivities.get(application.id);
        let _location;
        const leaveEmbeddedActivity = oauth2Token(stateFromStores[20]).leaveEmbeddedActivity;
        oauth2Token(stateFromStores[20]);
        if (value != null) {
          _location = value.location;
        }
        const obj2 = { location: _location, applicationId: application.id };
        const result = leaveEmbeddedActivity(obj2);
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
  let closure_5 = navigation.useCallback((id) => {
    const obj = application(stateFromStores[31]);
    const obj2 = { location: constants.SETTINGS_AUTHORIZED_APP };
    obj.unblockUser(id, obj2);
    const obj3 = application(stateFromStores[32]);
    const result = obj3.showUnblockSuccessToast(id);
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
  let tmp16 = closure_18;
  const description = application.description;
  const muted = stateFromStoresObject.muted;
  const obj10 = { contentContainerStyle: tmp.container, children: items10 };
  const obj12 = { style: items8, children: items9 };
  items8 = [, ];
  ({ header: arr9[0], section: arr9[1] } = tmp);
  const obj11 = application(stateFromStores[39]);
  const date = new Date(obj11.extractTimestamp(oauth2Token.id));
  const obj13 = { iconSource: applicationIconSource, iconBorderRadius: application(stateFromStores[13]).radii.md, iconSize: 64 };
  const toLocaleDateStringResult = date.toLocaleDateString(stateFromStores1, { year: "numeric", month: "short", day: "numeric" });
  const tmp21 = application(stateFromStores[40]);
  items9 = [closure_17(tmp21, obj13), , ];
  const obj14 = { variant: "text-sm/normal", color: "text-muted", children: intl.format(oauth2Token(stateFromStores[18]).t.yOApCK, { date: toLocaleDateStringResult }) };
  const Text = oauth2Token(stateFromStores[15]).Text;
  intl = oauth2Token(stateFromStores[18]).intl;
  items9[1] = closure_17(Text, obj14);
  let tmp20Result = null;
  const tmp17 = closure_4;
  if (undefined !== description) {
    tmp20Result = null;
    if ("" !== description) {
      const obj15 = { style: tmp.appAboutDescription, variant: "text-sm/normal", color: "text-default", children: tmp5Result.parseBioReactWithCachedAST(description) };
      const Text2 = tmp5(tmp3[15]).Text;
      tmp5Result = oauth2Token(tmp3[41]);
      tmp20Result = tmp20(Text2, obj15);
    }
  }
  items9[2] = tmp20Result;
  items10 = [tmp16(closure_5, obj12), , , , , , ];
  let tmp20Result6 = null;
  if (null != stateFromStores3) {
    const obj16 = { style: tmp.section, children: closure_17(TableRowGroup, obj17) };
    obj17 = { title: intl2.string(oauth2Token(tmp3[18]).t.NaZyYC), hasIcons: false, children: closure_17(TableSwitchRow, obj18) };
    TableRowGroup = tmp5(tmp3[42]).TableRowGroup;
    intl2 = tmp5(tmp3[18]).intl;
    obj18 = {
      label: intl3.string(tmp2(tmp3[44]).yPlyEn),
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
    TableSwitchRow = tmp5(tmp3[43]).TableSwitchRow;
    intl3 = tmp5(tmp3[18]).intl;
    let end_time;
    if (appDMChannelMuteConfig != null) {
      end_time = appDMChannelMuteConfig.end_time;
    }
    formatResult = undefined;
    if (null != end_time) {
      const intl4 = tmp5(tmp3[18]).intl;
      const format = intl4.format;
      const _Date = Date;
      const self = this;
      const self2 = this;
      const obj19 = { endTime: date1.toLocaleString(oauth2Token(tmp3[18]).intl.currentLocale, { month: "numeric", day: "numeric", hour: "numeric", minute: "2-digit" }) };
      const j7h4AJ = tmp5(tmp3[18]).t.j7h4AJ;
      date1 = new Date(appDMChannelMuteConfig.end_time);
      formatResult = format(j7h4AJ, obj19);
    }
    tmp20Result6 = tmp20(tmp19, obj16);
  }
  items10[1] = tmp20Result6;
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
  const obj20 = { style: tmp.section, children: tmp16(TableRowGroup2, obj21) };
  obj21 = { title: intl5.string(oauth2Token(tmp3[18]).t["8pMev2"]), hasIcons: false, children: items11 };
  TableRowGroup2 = tmp5(tmp3[42]).TableRowGroup;
  intl5 = tmp5(tmp3[18]).intl;
  const obj22 = { label: intl6.string(oauth2Token(tmp3[18]).t.xrmhRX), onPress: handleClickPermissions, arrow: true };
  const TableRow = tmp5(tmp3[45]).TableRow;
  intl6 = tmp5(tmp3[18]).intl;
  items11 = [closure_17(TableRow, obj22), , ];
  let tmp20Result7 = null != application.terms_of_service_url;
  if (tmp20Result7) {
    function handleClickToS() {
      if (null != application.terms_of_service_url) {
        const obj2 = { href: tmp.terms_of_service_url, shouldConfirm: true };
        const obj = MaskedLinkUtils;
        obj.handleClick(obj2);
      }
    }
    const obj23 = { label: intl7.string(oauth2Token(tmp3[18]).t["lx+Gec"]), onPress: handleClickToS, arrow: true };
    const TableRow2 = tmp5(tmp3[45]).TableRow;
    intl7 = tmp5(tmp3[18]).intl;
    tmp20Result7 = tmp20(TableRow2, obj23);
  }
  items11[1] = tmp20Result7;
  let tmp20Result8 = null != application.privacy_policy_url;
  if (tmp20Result8) {
    function handleClickPrivacyPolicy() {
      if (null != application.privacy_policy_url) {
        const obj2 = { href: tmp.privacy_policy_url, shouldConfirm: true };
        const obj = MaskedLinkUtils;
        obj.handleClick(obj2);
      }
    }
    const obj24 = { label: intl8.string(oauth2Token(tmp3[18]).t.okSwq9), onPress: handleClickPrivacyPolicy, arrow: true };
    const TableRow3 = tmp5(tmp3[45]).TableRow;
    intl8 = tmp5(tmp3[18]).intl;
    tmp20Result8 = tmp20(TableRow3, obj24);
  }
  items11[2] = tmp20Result8;
  items10[2] = closure_17(closure_5, obj20);
  const obj25 = { style: tmp.section, children: closure_17(TableRowGroup3, obj26) };
  obj26 = { title: intl9.string(oauth2Token(tmp3[18]).t.gAHBA7), hasIcons: false, children: closure_17(TableRow4, obj27) };
  TableRowGroup3 = tmp5(tmp3[42]).TableRowGroup;
  intl9 = tmp5(tmp3[18]).intl;
  obj27 = { label: intl10.string(oauth2Token(tmp3[18]).t.xUqheM), variant: "danger", onPress: callback, arrow: true };
  TableRow4 = tmp5(tmp3[45]).TableRow;
  intl10 = tmp5(tmp3[18]).intl;
  items10[3] = closure_17(closure_5, obj25);
  let id;
  if (application != null) {
    let bot = application.bot;
    if (bot != null) {
      id = bot.id;
    }
  }
  let tmp20Result9;
  if (null != id) {
    const obj28 = { title: intl11.string(oauth2Token(tmp3[18]).t["8msQQO"]), hasIcons: false, children: closure_17(TableRow5, obj30) };
    const TableRowGroup4 = tmp5(tmp3[42]).TableRowGroup;
    intl11 = tmp5(tmp3[18]).intl;
    TableRow5 = tmp5(tmp3[45]).TableRow;
    if (stateFromStores2) {
      const obj29 = {
        label: intl13.string(oauth2Token(tmp3[18]).t.XyHpKH),
        onPress() {
              return closure_5(id);
            },
        arrow: true
      };
      intl13 = tmp5(tmp3[18]).intl;
      obj30 = obj29;
    } else {
      obj30 = {
        label: intl12.string(tmp5(tmp3[18]).t.l4Emac),
        variant: "danger",
        onPress() {
              return closure_4(id);
            },
        arrow: true
      };
      intl12 = tmp5(tmp3[18]).intl;
    }
    tmp20Result9 = tmp20(TableRowGroup4, obj28);
  }
  items10[4] = tmp20Result9;
  if (shouldWarnAuthorizedAppTwoWay) {
    const obj31 = { application };
    shouldWarnAuthorizedAppTwoWay = tmp20(AuthorizedAppTwoWay, obj31);
  }
  items10[5] = shouldWarnAuthorizedAppTwoWay;
  if (tmp20Result10) {
    const obj32 = { application };
    tmp20Result10 = tmp20(ParentApp, obj32);
  }
  items10[6] = tmp20Result10;
  return tmp16(tmp17, obj10);
};
export function handleDeleteApp(application) {
  application = application.application;
  const id = application.id;
  const obj = AuthorizedAppsActionCreatorsDefault;
  obj.delete(id);
  const selfEmbeddedActivities = EmbeddedActivitiesStore.getSelfEmbeddedActivities();
  const value = selfEmbeddedActivities.get(application.id);
  let _location;
  const leaveEmbeddedActivity = leaveEmbeddedActivity2.leaveEmbeddedActivity;
  leaveEmbeddedActivity2;
  if (value != null) {
    _location = value.location;
  }
  const obj2 = { location: _location, applicationId: application.id };
  const result = leaveEmbeddedActivity(obj2);
}
