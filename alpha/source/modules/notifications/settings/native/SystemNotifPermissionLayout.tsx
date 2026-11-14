// Module ID: 18619
// Function ID: 18620
// Name: SystemNotifPermissionLayout
// Dependencies: [5, 32, 19, 14825, 18620, 1072, 6902, 14826, 21, 3029, 5306, 575, 14835, 18106, 504, 1380, 1256, 14827, 12923, 6337, 7445, 10994, 5929, 1113, 5936, 18623, 8199, 14828, 18624, 2]
// Exports: default

// Module 18619 (SystemNotifPermissionLayout)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1256 */;
import _modDef3029 from "module_3029" /* 3029 */;
import NativePermissionConstants from "NativePermissionConstants" /* 6902 */;
import NotificationPermissionUtil from "NotificationPermissionUtil" /* 14827 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import PushNotificationPermissionStore from "PushNotificationPermissionStore" /* 14825 */;
import DeclarativeSystemNotifPermissionStore from "DeclarativeSystemNotifPermissionStore" /* 18620 */;
import Constants from "Constants" /* 1072 */;
import NotificationPermissionConstants from "NotificationPermissionConstants" /* 14826 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5306 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let authorizationStatus, c4, importDefault;

let c9;
let closure_12;
let closure_14;
let closure_15;
let closure_16;
let map1;
let metroImportAll;
let obj4;
let obj5;
let obj6;
let size;
let tmp;
let unpackModuleId;
const react_nativeDefault = tmp(12923);
function SystemNotifPermissionHeader() {
  let BellSlashIcon;
  let Button;
  let Card;
  let NOTIFICATION_SETTINGS_PERMISSION_HEADER;
  let QhXeCd;
  let Stack2;
  let items4;
  let items5;
  let obj10;
  let obj15;
  let obj7;
  let obj8;
  let string;
  let stringResult;
  let tmp = closure_20();
  obj = react;
  const context = react.useContext(closure_19);
  obj2 = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[12]);
  const isTeenInStrictCountry = obj2.useIsTeenInStrictCountry();
  let obj3 = require("ContextualOptInNudgeHoldoutExperiment");
  const inHoldout = obj3.useConfig({ location: "SettingsNotificationsScreen" }).inHoldout;
  const items = [PushNotificationPermissionStore];
  const obj4 = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[14]);
  const stateFromStores = obj4.useStateFromStores(items, () => {
    authorizationStatus = authorizationStatus.authorizationStatus;
    return authorizationStatus === constants.DENIED || authorizationStatus === constants.UNDETERMINED;
  });
  const items1 = [DeclarativeSystemNotifPermissionStore];
  let tmp9 = !inHoldout;
  const obj5 = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[14]);
  const stateFromStores1 = obj5.useStateFromStores(items1, () => {
    const isCategoryDisabledResult = null != context && DeclarativeSystemNotifPermissionStore.isCategoryDisabled(tmp);
    return isCategoryDisabledResult;
  });
  if (!inHoldout) {
    tmp9 = !isTeenInStrictCountry;
  }
  if (tmp9) {
    let tmp11 = stateFromStores;
    if (null != context) {
      const tmp3Result = context(NOTIFICATION_SETTINGS_PERMISSION_HEADER[15]);
      let isAndroidResult = tmp3Result.isAndroid();
      if (isAndroidResult) {
        isAndroidResult = stateFromStores || stateFromStores1;
      }
      tmp11 = isAndroidResult;
    }
    tmp9 = tmp11;
  }
  importDefault = tmp9;
  if (null == context) {
    NOTIFICATION_SETTINGS_PERMISSION_HEADER = constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER;
  } else {
    const _HermesInternal = HermesInternal;
    NOTIFICATION_SETTINGS_PERMISSION_HEADER = "" + constants5.NOTIFICATION_SETTINGS_PERMISSION_HEADER + "_" + context;
  }
  const items2 = [tmp9, NOTIFICATION_SETTINGS_PERMISSION_HEADER];
  const effect = obj.useEffect(() => {
    const tmp = importDefault;
    if (tmp) {
      obj2 = { action: map1.IMPRESSION, prompt_type: NOTIFICATION_SETTINGS_PERMISSION_HEADER };
      obj = AnalyticsUtilsDefault;
      obj.track(metroImportAll.CONTEXTUAL_REMINDER_ACTION, obj2);
    }
  }, items2);
  const items3 = [context, NOTIFICATION_SETTINGS_PERMISSION_HEADER];
  let tmp20Result = null;
  if (tmp9) {
    let stringResult1;
    const obj6 = { style: tmp.container, children: closure_15(Card, obj7) };
    const Stack = tmp3(tmp4[19]).Stack;
    obj7 = { border: "none", shadow: "none", radius: 16, style: tmp.card, children: closure_16(Stack2, obj8) };
    Card = tmp3(tmp4[20]).Card;
    obj8 = { spacing: require("native").space.PX_12, children: items4 };
    Stack2 = tmp3(tmp4[19]).Stack;
    const obj9 = { style: tmp.iconCircle, justify: "center", align: "center", children: closure_15(BellSlashIcon, obj10) };
    const Stack3 = tmp3(tmp4[19]).Stack;
    obj10 = { size: "md", color: require("native").colors.ICON_STRONG };
    BellSlashIcon = tmp3(tmp4[21]).BellSlashIcon;
    items4 = [closure_15(Stack3, obj9), , ];
    const obj11 = { spacing: require("native").space.PX_8, children: items5 };
    const Stack4 = tmp3(tmp4[19]).Stack;
    const obj12 = { variant: "heading-lg/semibold", color: "text-default", style: tmp.centeredText, children: stringResult };
    const Heading = tmp3(tmp4[22]).Heading;
    if (null == context) {
      const intl2 = tmp3(tmp4[23]).intl;
      stringResult = intl2.string(tmp6(tmp4[9])["4QQ7/n"]);
    } else {
      const intl = tmp3(tmp4[23]).intl;
      stringResult = intl.string(obj[context]);
    }
    items5 = [closure_15(Heading, obj12), ];
    const obj13 = { variant: "body-sm/normal", color: "text-muted", style: tmp.centeredText, children: string(QhXeCd) };
    const Text = tmp3(tmp4[22]).Text;
    const intl3 = tmp3(tmp4[23]).intl;
    string = intl3.string;
    if (null == context) {
      QhXeCd = tmp6(tmp4[9]).QhXeCd;
    } else {
      QhXeCd = obj2[context];
    }
    items5[1] = closure_15(Text, obj13);
    items4[1] = closure_16(Stack4, obj11);
    const obj14 = { style: tmp.button, children: closure_15(Button, obj15) };
    const Stack5 = tmp3(tmp4[19]).Stack;
    Button = tmp3(tmp4[24]).Button;
    if (null == context) {
      const intl5 = tmp3(tmp4[23]).intl;
      stringResult1 = intl5.string(tmp3(tmp4[23]).t["5xWOXv"]);
    } else {
      const intl4 = tmp3(tmp4[23]).intl;
      stringResult1 = intl4.string(tmp6(tmp4[9]).FyqnR3);
    }
    obj15 = { variant: "primary", size: "lg", grow: true, text: stringResult1, onPress: tmp18 };
    items4[2] = closure_15(Stack5, obj14);
    tmp20Result = tmp20(Stack, obj6);
  }
  return tmp20Result;
}
({ AnalyticEvents: metroImportAll, NOOP: c9 } = Constants);
let closure_10 = NativePermissionConstants.NotificationAuthorizationStatus;
({ EventActionLocation: unpackModuleId, EventActionType: closure_12, NotificationNudgeAnalyticsAction: map1, NotificationNudgeSurface: closure_14 } = NotificationPermissionConstants);
({ jsx: closure_15, jsxs: closure_16 } = Fragment);
let obj = { "111_realtime": _modDef3029.dF4FmA, "222_social": _modDef3029.tgF0IR, "333_server": _modDef3029.rwJXCw, "444_other": _modDef3029["8gfmjs"] };
let obj2 = { "111_realtime": _modDef3029.HszTZQ, "222_social": _modDef3029.UbGSlJ, "333_server": _modDef3029.Jweb0a, "444_other": _modDef3029.NQH8GA };
const redux = react.createContext(undefined);
let createStyles = createStyles_mod;
let obj3 = { container: obj4, card: obj5, iconCircle: size, centeredText: { textAlign: "center" }, button: obj6 };
obj4 = { paddingTop: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj5 = { padding: nativeDefault.space.PX_20 };
size = { width: nativeDefault.space.PX_48, height: nativeDefault.space.PX_48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center", alignSelf: "center" };
obj6 = { borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let closure_20 = createStyles(obj3);
size = size_mod;
let result = size.fileFinishedImporting("modules/notifications/settings/native/SystemNotifPermissionLayout.tsx");

export default function SystemNotifPermissionLayout(node) {
  let c3;
  let intl;
  let obj3;
  let tmp2;
  let tmp6Result;
  node = node.node;
  const unavailableNode = node.unavailableNode;
  const category = node.category;
  c3 = undefined;
  let tmp = _slicedToArray(react.useState(false), 2);
  [tmp2, c3] = tmp;
  const effect = react.useEffect(() => {
    let _false;
    function loadPermissionStatus() {
      return obj(...arguments);
    }
    obj = function _loadPermissionStatus() {
      obj = _asyncToGenerator(async (arg0, value) => {
        let obj3;
        let v1;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          let c2;
          try {
            let closure_0;
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj4 = { value, done: true };
                return obj4;
              } else {
                let closure_1 = tmp;
                closure_0 = undefined;
                c2 = 1;
                c3 = 2;
                c4 = 1;
                const obj5 = { value: obj3.getNotificationAuthorizationStatus(), done: false };
                obj3 = closure_2_1(category[26]);
                return obj5;
              }
            } else {
              if (1 === c3) {
                c2 = 0;
                const tmp19 = closure_129_0;
                if (tmp19) {
                  c3(true);
                }
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 0;
                c4 = 3;
                const obj6 = { value, done: true };
                return obj6;
              } else {
                closure_0 = value;
                const tmp7 = closure_129_0;
                if (tmp7) {
                  if (null != closure_0) {
                    obj = _false(category[27]);
                    const result = obj.updateNotificationAuthorizationStatus(closure_0);
                  }
                  c3(true);
                  c2 = 0;
                } else {
                  c2 = 0;
                  c4 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
              c4 = 3;
              return { value: "HermesInternal", done: null };
            }
          } catch (tmp24) {
            if (0 === c2) {
              c4 = 3;
              throw tmp24;
            } else {
              c3 = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    let c0 = true;
    obj = node(category[25]);
    let result = obj.refreshSystemNotifPermissionsAsync("notification_settings_screen");
    loadPermissionStatus();
    return () => {
      let c0 = false;
    };
  }, []);
  const items = [node, category];
  const items1 = [node, unavailableNode];
  const memo = react.useMemo(() => {
    let sections;
    obj = {
      sections: sections.map((label, index) => {
        let intl;
        let tmp = label;
        if (null != closure_1_2) {
          tmp = label;
          if (0 === index) {
            tmp = label;
            if (null == label.label) {
              obj = { label: intl.string(unavailableNode(category[9])["/UdAvP"]) };
              const merged = Object.assign(label);
              intl = node(category[23]).intl;
              tmp = obj;
            }
          }
        }
        return tmp;
      }),
      ListHeaderComponent: SystemNotifPermissionHeader
    };
    let merged = Object.assign(node);
    sections = node.sections;
    return obj;
  }, items);
  if (tmp2) {
    obj2 = { value: category, children: tmp6(unavailableNode(category[28]), obj3) };
    const Provider = redux.Provider;
    obj3 = { node: memo, unavailableNode: tmp5 };
    tmp6Result = tmp6(Provider, obj2);
  } else {
    let tmp7 = node;
    obj = { variant: "body-md/medium", children: intl.string(unavailableNode(category[9]).Ns127F) };
    const Text = node(category[22]).Text;
    intl = node(category[23]).intl;
    tmp6Result = tmp6(Text, obj);
  }
  return tmp6Result;
};
