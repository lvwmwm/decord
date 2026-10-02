// Module ID: 16201
// Function ID: 16202
// Name: ChangeSubscriptionCard
// Dependencies: [32, 19, 17, 1086, 21, 4837, 588, 4833, 1619, 14760, 4424, 6572, 1127, 1189, 16194, 5040, 16202, 1987, 4801, 2]
// Exports: default

// Module 16201 (ChangeSubscriptionCard)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import Constants from "Constants" /* 1086 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1619 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import _modDef4424 from "module_4424" /* 4424 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import Text_Text from "Text/Text" /* 4833 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5040 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 14760 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

let BottomSheet;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
function emphasisHook(children) {
  const obj = { variant: "text-sm/medium", color: "text-default", children };
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
  let obj3 = _modDef4424(activeSubscription.currentPeriodEnd);
  const status = activeSubscription.status;
  const CANCELED = SubscriptionStatusTypes.CANCELED;
  const obj4 = { style: items, children: items1 };
  items = [tmp.container, ];
  const obj5 = { paddingBottom: 16 + bottom };
  items[1] = obj5;
  const formatResult = obj3.format("MMMM Do");
  BottomSheet = activeSubscription(6572).BottomSheet;
  const obj6 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.format(activeSubscription(1127).t.l3uCCX, { activeListingName: first }) };
  const Text = activeSubscription(4833).Text;
  intl = activeSubscription(1127).intl;
  items1 = [closure_7(Text, obj6), closure_7(activeSubscription(1189).Spacer, { size: 16 }), , ];
  const obj7 = { variant: "text-sm/normal", color: "text-default", children: items2 };
  const Text2 = activeSubscription(4833).Text;
  const intl2 = activeSubscription(1127).intl;
  items2 = [, , ];
  const obj8 = { activeListingName: first, changeToListingName: first1, billingEndDate: formatResult, emphasisHook };
  items2[0] = intl2.format(activeSubscription(1127).t.Zmtrs2, obj8);
  items2[1] = "\n\n";
  const intl3 = activeSubscription(1127).intl;
  const obj9 = { emphasisHook };
  items2[2] = intl3.format(activeSubscription(1127).t.KIiWca, obj9);
  items1[2] = closure_8(Text2, obj7);
  let tmp8Result = null;
  const tmp9 = View;
  if (status !== CANCELED) {
    const obj10 = { children: items3 };
    items3 = [closure_7(activeSubscription(1189).Spacer, { size: 16 }), ];
    const obj11 = {
      text: intl4.string(activeSubscription(1127).t.UwHVxr),
      onPress() {
          const obj = ModalActionCreatorsDefault;
          const obj2 = { subscriptionId: activeSubscription.id };
          obj.pushLazy(asyncRequire(16202, dependencyMap.paths), obj2);
          const obj3 = ActionSheetActionCreatorsDefault;
          obj3.hideActionSheet();
        }
    };
    const ArrowButton = tmp7(16194).ArrowButton;
    intl4 = tmp7(1127).intl;
    items3[1] = closure_7(ArrowButton, obj11);
    tmp8Result = tmp8(closure_9, obj10);
  }
  items1[3] = tmp8Result;
  const obj12 = { startExpanded: true, children: closure_8(tmp9, obj4) };
  return closure_7(BottomSheet, obj12);
};
