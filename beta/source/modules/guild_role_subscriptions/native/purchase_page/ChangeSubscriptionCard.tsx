// Module ID: 18206
// Function ID: 18207
// Name: ChangeSubscriptionCard
// Dependencies: [32, 19, 17, 1071, 21, 4913, 575, 5504, 1628, 16638, 2168, 5141, 1112, 1186, 18199, 6429, 18207, 2119, 5127, 2]
// Exports: default

// Module 18206 (ChangeSubscriptionCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1628 */;
import asyncRequire from "asyncRequire" /* 2119 */;
import _modDef2168 from "module_2168" /* 2168 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5127 */;
import Text_Text from "Text/Text" /* 5504 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6429 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 16638 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
function emphasisHook(children) {
  const obj = { variant: "body-sm/medium", color: "text-default", children };
  return metroImportDefault(Text_Text.Text, obj);
}
const View = react_native.View;
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let obj = { container: obj2 };
obj2 = { paddingVertical: 16, paddingHorizontal: 24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_10 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/purchase_page/ChangeSubscriptionCard.tsx");

export default function ChangeSubscriptionCard(activeSubscription) {
  let activeListingId;
  let changeToListingId;
  let intl;
  let intl4;
  let items;
  let items1;
  let items2;
  let items3;
  activeSubscription = activeSubscription.activeSubscription;
  ({ activeListingId, changeToListingId } = activeSubscription);
  const tmp = closure_10();
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj.useName(activeListingId), 1)[0];
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj2.useName(changeToListingId), 1)[0];
  let obj3 = _modDef2168(activeSubscription.currentPeriodEnd);
  const status = activeSubscription.status;
  const CANCELED = SubscriptionStatusTypes.CANCELED;
  const obj4 = { style: items, children: items1 };
  items = [tmp.container, ];
  const obj5 = { paddingBottom: 16 + bottom };
  items[1] = obj5;
  const formatResult = obj3.format("MMMM Do");
  const BottomSheet = activeSubscription(5141).BottomSheet;
  const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.format(activeSubscription(1112).t.l3uCCX, { activeListingName: first }) };
  const Text = activeSubscription(5504).Text;
  intl = activeSubscription(1112).intl;
  items1 = [closure_7(Text, obj6), closure_7(activeSubscription(1186).Spacer, { size: 16 }), , ];
  const obj7 = { variant: "body-sm/normal", color: "text-default", children: items2 };
  const Text2 = activeSubscription(5504).Text;
  const intl2 = activeSubscription(1112).intl;
  items2 = [, , ];
  const obj8 = { activeListingName: first, changeToListingName: first1, billingEndDate: formatResult, emphasisHook };
  items2[0] = intl2.format(activeSubscription(1112).t.Zmtrs2, obj8);
  items2[1] = "\n\n";
  const intl3 = activeSubscription(1112).intl;
  const obj9 = { emphasisHook };
  items2[2] = intl3.format(activeSubscription(1112).t.KIiWca, obj9);
  items1[2] = closure_8(Text2, obj7);
  let tmp8Result = null;
  const tmp9 = View;
  if (status !== CANCELED) {
    const obj10 = { children: items3 };
    items3 = [closure_7(activeSubscription(1186).Spacer, { size: 16 }), ];
    const obj11 = {
      text: intl4.string(activeSubscription(1112).t.UwHVxr),
      onPress: function handleCancelSubscription() {
          const obj = ModalActionCreatorsDefault;
          const obj2 = { subscriptionId: activeSubscription.id };
          obj.pushLazy(asyncRequire(18207, dependencyMap.paths), obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
        }
    };
    const ArrowButton = tmp7(18199).ArrowButton;
    intl4 = tmp7(1112).intl;
    items3[1] = closure_7(ArrowButton, obj11);
    tmp8Result = tmp8(closure_9, obj10);
  }
  items1[3] = tmp8Result;
  const obj12 = { startExpanded: true, children: closure_8(tmp9, obj4) };
  return closure_7(BottomSheet, obj12);
};
