// Module ID: 18220
// Function ID: 18221
// Name: EffectiveNotifSettingsLayout
// Dependencies: [19, 1231, 502, 15801, 21, 5141, 15815, 504, 572, 16835, 6162, 5761, 1113, 2995, 5768, 18221, 2]
// Exports: default

// Module 18220 (EffectiveNotifSettingsLayout)
import DispatcherDefault from "Dispatcher" /* 572 */;
import _modDef2995 from "module_2995" /* 2995 */;
import SettingLayoutDefault from "SettingLayout" /* 16835 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15801 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ root: { flex: 1 } });
const result = size.fileFinishedImporting("modules/notifications/settings/native/EffectiveNotifSettingsLayout.tsx");

export default function EffectiveNotifSettingsLayout(unavailableNode) {
  let intl2;
  let items3;
  unavailableNode = unavailableNode.unavailableNode;
  let isDeclarativeNotificationSettingsRedesignEnabled;
  const node = unavailableNode.node;
  const tmp = closure_9();
  let obj = isDeclarativeNotificationSettingsRedesignEnabled(15815);
  isDeclarativeNotificationSettingsRedesignEnabled = obj.useIsDeclarativeNotificationSettingsRedesignEnabled("EffectiveNotifSettingsLayout");
  const items = [NotifSettingsProtoStore, AuthenticationStore, UserSettingsProtoStore];
  const obj2 = isDeclarativeNotificationSettingsRedesignEnabled(504);
  const stateFromStores = obj2.useStateFromStores(items, () => NotifSettingsProtoStore.hasValidEffectiveSettings);
  const items1 = [NotifSettingsProtoStore];
  const obj3 = isDeclarativeNotificationSettingsRedesignEnabled(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => NotifSettingsProtoStore.isEffectiveSettingsLoading);
  const items2 = [isDeclarativeNotificationSettingsRedesignEnabled];
  const effect = react.useEffect(() => {
    if (isDeclarativeNotificationSettingsRedesignEnabled) {
      let obj = DispatcherDefault;
      obj.dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN" });
      return () => {
        const obj = closure_1_1(closure_1_2[8]);
        obj.dispatch({ type: "EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_CLOSE" });
      };
    }
  }, items2);
  if (isDeclarativeNotificationSettingsRedesignEnabled) {
    let tmp8Result;
    if (!stateFromStores) {
      let Nu2TMI;
      let tmp12;
      const obj4 = { style: tmp.root, children: items3 };
      const Stack = tmp2(6162).Stack;
      const Text = tmp2(5761).Text;
      const intl = tmp2(1113).intl;
      const string = intl.string;
      const tmp11 = _modDef2995;
      const tmp8 = closure_8;
      if (stateFromStores1) {
        Nu2TMI = tmp11.Ns127F;
        tmp12 = tmp10;
      } else {
        Nu2TMI = tmp11.Nu2TMI;
        tmp12 = tmp10;
      }
      const obj5 = { variant: "body-md/medium", accessibilityLiveRegion: "polite", children: string(Nu2TMI) };
      items3 = [closure_7(Text, obj5), , ];
      const obj6 = { text: intl2.string(isDeclarativeNotificationSettingsRedesignEnabled(1113).t["5911Lb"]), variant: "secondary", disabled: stateFromStores1, onPress: isDeclarativeNotificationSettingsRedesignEnabled(18221).retryEffectiveNotifSettings };
      const Button = tmp2(5768).Button;
      intl2 = tmp2(1113).intl;
      items3[1] = closure_7(Button, obj6);
      let tmp9Result = null;
      if (null != unavailableNode) {
        const obj7 = { node: unavailableNode };
        tmp9Result = tmp9(tmp12(16835), obj7);
      }
      items3[2] = tmp9Result;
      tmp8Result = tmp8(Stack, obj4);
    }
    return tmp8Result;
  }
  tmp8Result = closure_7(SettingLayoutDefault, { node });
};
