// Module ID: 16655
// Function ID: 16656
// Name: IgnoredUsersList
// Dependencies: [19, 17, 4951, 21, 5009, 575, 7320, 7345, 1188, 16648, 1114, 7286, 5619, 7054, 16656, 504, 2]
// Exports: default

// Module 16655 (IgnoredUsersList)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import TableRowGroup2 from "TableRowGroup" /* 7054 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7286 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7320 */;
import Blocked from "Blocked" /* 16648 */;
import IgnoredUserRowDefault from "IgnoredUserRow" /* 16656 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function IgnoredUsersList(userIds) {
  let SafeAreaPaddingView;
  let intl;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let obj6;
  let tmp7;
  userIds = userIds.userIds;
  const tmp = closure_7();
  useAnalyticsLocationsDefault;
  if (0 === userIds.length) {
    let obj = { Illustration: Blocked.Blocked, body: intl.string(intl4.t.PYrWFW) };
    const EmptyState = native.EmptyState;
    intl = intl4.intl;
    tmp7 = hasOwnProperty(EmptyState, obj);
  } else {
    const obj2 = { value: tmp4, children: hasOwnProperty(SafeAreaPaddingView, obj3) };
    const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    obj3 = { bottom: true, style: tmp.list, children: metroRequire(ScrollView, obj4) };
    obj4 = { children: items };
    SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    const obj5 = { style: tmp.sectionLabelStyle, variant: "text-sm/semibold", color: "text-default", children: intl2.formatToPlainString(intl4.t.iNKUhU, obj6) };
    const Text = Text_Text.Text;
    intl2 = intl4.intl;
    obj6 = { numberOfIgnoredUsers: userIds.length };
    items = [hasOwnProperty(Text, obj5), ];
    const obj7 = {
      hasIcons: true,
      children: userIds.map((userId) => {
          const obj = { userId };
          return closure_1_5(IgnoredUserRowDefault, obj, userId);
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const intl3 = intl4.intl;
    items[1] = hasOwnProperty(TableRowGroup, obj7, intl3.string(intl4.t["93ZDWE"]));
    tmp7 = hasOwnProperty(AnalyticsLocationProvider, obj2);
  }
  return tmp7;
}
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, sectionLabelStyle: obj3 };
obj2 = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUsersList.tsx");

export default function ConnectedIgnoredUsersList() {
  let ignoredIDs;
  const items = [RelationshipStore];
  const obj = get_initialized;
  const obj2 = { userIds: obj.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs()) };
  return hasOwnProperty(IgnoredUsersList, obj2);
};
