// Module ID: 15087
// Function ID: 15088
// Name: IgnoredUsersList
// Dependencies: [19, 17, 4437, 21, 4788, 576, 7439, 7459, 1177, 15081, 1115, 7400, 4784, 5936, 15088, 504, 2]
// Exports: default

// Module 15087 (IgnoredUsersList)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4784 */;
import TableRowGroup from "TableRowGroup" /* 5936 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7400 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7439 */;
import Blocked from "Blocked" /* 15081 */;
import IgnoredUserRowDefault from "IgnoredUserRow" /* 15088 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4437 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function IgnoredUsersList(userIds) {
  userIds = userIds.userIds;
  const tmp = closure_7();
  useAnalyticsLocationsDefault;
  if (0 === userIds.length) {
    const obj = { Illustration: Blocked.Blocked, body: null };
    const intl = util.intl;
    obj.body = intl.string(util.t.PYrWFW);
    let tmp7 = hasOwnProperty(native.EmptyState, obj);
  } else {
    const obj2 = { value: tmp4, children: null };
    const obj3 = { bottom: true, style: tmp.list, children: null };
    const obj4 = { children: null };
    const obj5 = { style: tmp.sectionLabelStyle, variant: "text-sm/semibold", color: "text-default", children: null };
    const intl2 = util.intl;
    const obj6 = { numberOfIgnoredUsers: userIds.length };
    obj5.children = intl2.formatToPlainString(util.t.iNKUhU, obj6);
    const items = [hasOwnProperty(Text_Text.Text, obj5), ];
    const obj7 = { hasIcons: true, children: userIds.map((userId) => closure_1_5(IgnoredUserRowDefault, { userId }, userId)) };
    const intl3 = util.intl;
    items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj7, intl3.string(util.t["93ZDWE"]));
    obj4.children = items;
    obj3.children = timestampProducer(ScrollView, obj4);
    obj2.children = hasOwnProperty(common_SafeAreaView.SafeAreaPaddingView, obj3);
    tmp7 = hasOwnProperty(useAnalyticsLocations.AnalyticsLocationProvider, obj2);
  }
  return tmp7;
}
const ScrollView = fn(17).ScrollView;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4788);
let obj2 = { list: { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 }, sectionLabelStyle: null };
let obj3 = { marginTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.sectionLabelStyle = { marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/content_and_social/native/IgnoredUsersList.tsx");

export default function ConnectedIgnoredUsersList() {
  const items = [RelationshipStore];
  return hasOwnProperty(IgnoredUsersList, { userIds: initialize.useStateFromStoresArray(items, () => ignoredIDs.getIgnoredIDs()) });
};
