// Module ID: 14335
// Function ID: 14336
// Name: BlockedUsersListV2
// Dependencies: [19, 17, 4479, 21, 4836, 576, 6583, 6603, 1177, 14336, 1115, 6544, 4832, 5999, 14340, 504, 2]
// Exports: default

// Module 14335 (BlockedUsersListV2)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6583 */;
import Blocked from "Blocked" /* 14336 */;
import BlockedUserRowV2Default from "BlockedUserRowV2" /* 14340 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
function BlockedUsersList(userIds) {
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
    let obj = { Illustration: Blocked.Blocked, body: intl.string(intl4.t.nnsFif) };
    const EmptyState = native.EmptyState;
    intl = intl4.intl;
    tmp7 = hasOwnProperty(EmptyState, obj);
  } else {
    const obj2 = { value: tmp4, children: hasOwnProperty(SafeAreaPaddingView, obj3) };
    const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
    obj3 = { bottom: true, style: tmp.list, children: metroRequire(ScrollView, obj4) };
    obj4 = { children: items };
    SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
    const obj5 = { style: tmp.sectionLabelStyle, variant: "text-sm/semibold", color: "text-default", children: intl2.formatToPlainString(intl4.t["c+JVEB"], obj6) };
    const Text = Text_Text.Text;
    intl2 = intl4.intl;
    obj6 = { numberOfBlockedUsers: userIds.length };
    items = [hasOwnProperty(Text, obj5), ];
    const obj7 = {
      hasIcons: true,
      children: userIds.map((userId) => {
          const obj = { userId };
          return closure_1_5(BlockedUserRowV2Default, obj, userId);
        })
    };
    const TableRowGroup = TableRowGroup2.TableRowGroup;
    const intl3 = intl4.intl;
    items[1] = hasOwnProperty(TableRowGroup, obj7, intl3.string(intl4.t.PFOUKW));
    tmp7 = hasOwnProperty(AnalyticsLocationProvider, obj2);
  }
  return tmp7;
}
const ScrollView = react_native.ScrollView;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { list: obj2, sectionLabelStyle: obj3 };
obj2 = { flex: 1, paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/BlockedUsersListV2.tsx");

export default function ConnectedBlockedUsersList() {
  let blockedIDs;
  const items = [RelationshipStore];
  const obj = get_initialized;
  const obj2 = { userIds: obj.useStateFromStoresArray(items, () => blockedIDs.getBlockedIDs()) };
  return hasOwnProperty(BlockedUsersList, obj2);
};
