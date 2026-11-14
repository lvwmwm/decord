// Module ID: 18624
// Function ID: 18625
// Name: EffectiveNotifSettingsLayout
// Dependencies: [19, 1231, 502, 16163, 21, 5306, 575, 18625, 6337, 8159, 1113, 3029, 16177, 504, 572, 17213, 2]
// Exports: default

// Module 18624 (EffectiveNotifSettingsLayout)
import DispatcherDefault from "Dispatcher" /* 572 */;
import nativeDefault from "native" /* 575 */;
import _modDef3029 from "module_3029" /* 3029 */;
import EffectiveNotifSettingsActionCreators from "EffectiveNotifSettingsActionCreators" /* 18625 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 16163 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
function EffectiveSettingsHeader() {
  let Header;
  let InlineNotice;
  let intl2;
  let loading;
  let obj2;
  let obj3;
  let string;
  let tmp13;
  let tmp = closure_10();
  const context = react.useContext(closure_11);
  ({ Header, loading } = context);
  const items = [loading];
  const unavailable = context.unavailable;
  let tmp6 = null;
  const callback = react.useCallback(() => {
    const tmp = loading;
    if (!tmp) {
      const obj = EffectiveNotifSettingsActionCreators;
      const result = obj.retryEffectiveNotifSettings();
    }
  }, items);
  const tmp4 = closure_9;
  const tmp5 = closure_8;
  if (null != Header) {
    tmp6 = closure_7(Header, {});
  }
  const children = [tmp6, ];
  let tmp9Result = null;
  if (unavailable) {
    let obj = { style: tmp.notice, children: closure_7(InlineNotice, obj2) };
    const Stack = loading(6337).Stack;
    let str = "warning";
    InlineNotice = loading(8159).InlineNotice;
    if (loading) {
      str = "info";
    }
    obj2 = { type: str, role: "status", message: string(loading ? tmp13.Ns127F : tmp13.Nu2TMI), action: obj3 };
    const intl = tmp10(1113).intl;
    string = intl.string;
    tmp13 = _modDef3029;
    obj3 = { text: intl2.string(loading(1113).t["5911Lb"]), onPress: callback, loading };
    intl2 = tmp10(1113).intl;
    tmp9Result = tmp9(Stack, obj);
  }
  children[1] = tmp9Result;
  return tmp4(tmp5, { children });
}
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let obj = { notice: obj2 };
obj2 = { paddingTop: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
const redux = react.createContext({ unavailable: false, loading: false });
let result = size.fileFinishedImporting("modules/notifications/settings/native/EffectiveNotifSettingsLayout.tsx");

export default function EffectiveNotifSettingsLayout(node) {
  let obj5;
  let tmp9Result;
  node = node.node;
  const unavailableNode = node.unavailableNode;
  let isDeclarativeNotificationSettingsRedesignEnabled;
  let stateFromStores1;
  let memo;
  let tmp = isDeclarativeNotificationSettingsRedesignEnabled;
  let obj = node(isDeclarativeNotificationSettingsRedesignEnabled[12]);
  isDeclarativeNotificationSettingsRedesignEnabled = obj.useIsDeclarativeNotificationSettingsRedesignEnabled("EffectiveNotifSettingsLayout");
  const items = [NotifSettingsProtoStore, memo, stateFromStores1];
  const obj2 = node(isDeclarativeNotificationSettingsRedesignEnabled[13]);
  const stateFromStores = obj2.useStateFromStores(items, () => NotifSettingsProtoStore.hasValidEffectiveSettings);
  const items1 = [NotifSettingsProtoStore];
  const obj3 = node(isDeclarativeNotificationSettingsRedesignEnabled[13]);
  stateFromStores1 = obj3.useStateFromStores(items1, () => NotifSettingsProtoStore.isEffectiveSettingsLoading);
  const items2 = [isDeclarativeNotificationSettingsRedesignEnabled];
  const effect = stateFromStores.useEffect(() => {
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      let obj = DispatcherDefault;
      obj.dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN" });
      return () => {
        const obj = unavailableNode(isDeclarativeNotificationSettingsRedesignEnabled[14]);
        obj.dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_CLOSE" });
      };
    }
  }, items2);
  const items3 = [stateFromStores, node, unavailableNode];
  memo = stateFromStores.useMemo(() => {
    let tmp2;
    const tmp = stateFromStores;
    if (tmp) {
      tmp2 = node;
    } else {
      tmp2 = unavailableNode;
      if (unavailableNode == null) {
        const obj = { sections: [] };
        const merged = Object.assign(node);
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items3);
  const items4 = [memo];
  const items5 = [memo.ListHeaderComponent, stateFromStores, stateFromStores1];
  const memo1 = stateFromStores.useMemo(() => {
    const obj = { ListHeaderComponent: EffectiveSettingsHeader };
    const merged = Object.assign(memo);
    return obj;
  }, items4);
  if (isDeclarativeNotificationSettingsRedesignEnabled) {
    const Provider = redux.Provider;
    const obj4 = { value: tmp8, children: closure_7(unavailableNode(tmp[15]), obj5) };
    obj5 = { node: memo1 };
    tmp9Result = tmp9(Provider, obj4);
  } else {
    const obj6 = { node };
    tmp9Result = tmp9(unavailableNode(tmp[15]), obj6);
  }
  return tmp9Result;
};
