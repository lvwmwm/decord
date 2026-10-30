// Module ID: 18330
// Function ID: 18331
// Name: HomeDrawerDirectMessagesRow
// Dependencies: [19, 17, 5756, 4951, 1072, 21, 5009, 575, 504, 5619, 1114, 18326, 5199, 5196, 2]
// Exports: default

// Module 18330 (HomeDrawerDirectMessagesRow)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl3 from "intl" /* 1114 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 5199 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 5756 */;
import RelationshipStore from "RelationshipStore" /* 4951 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let friendIDs;

let metroImportAll;
let metroImportDefault;
let size;
function HomeDrawerDMsRow() {
  let Text2;
  let intl;
  let intl2;
  let items1;
  let obj5;
  let obj7;
  const tmp = closure_9();
  const items = [RelationshipStore, PresenceStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => {
    let status;
    friendIDs = friendIDs.getFriendIDs();
    return friendIDs.filter((item) => status.getStatus(item) !== constants.OFFLINE).length;
  });
  let tmp5 = null;
  if (stateFromStores > 0) {
    const obj2 = { style: tmp.subtitle, children: items1 };
    const obj3 = { style: tmp.onlineDot };
    items1 = [metroImportDefault(View, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: intl.format(intl3.t.N5UIKr, obj5) };
    const Text = tmp2(5619).Text;
    intl = tmp2(1114).intl;
    obj5 = { numFriends: stateFromStores };
    items1[1] = metroImportDefault(Text, obj4);
    tmp5 = metroImportAll(View, obj2);
  }
  const obj6 = { title: metroImportDefault(Text2, obj7), subtitle: tmp5 };
  const HomeDrawerSharedItem = tmp2(18326).HomeDrawerSharedItem;
  obj7 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl2.string(intl3.t.YUU0RF) };
  Text2 = tmp2(5619).Text;
  intl2 = tmp2(1114).intl;
  return metroImportDefault(HomeDrawerSharedItem, obj6);
}
const View = react_native.View;
const StatusTypes = Constants.StatusTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { subtitle: { flexDirection: "row", alignItems: "center", gap: 4 }, onlineDot: size };
size = { width: 8, height: 8, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.TEXT_STATUS_ONLINE };
let closure_9 = createStyles.createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerDirectMessagesRow.tsx");

export default function HomeDrawerDMsRowWrapper() {
  const MobileHomeDrawerExperiment = HomeDrawerExperiment.MobileHomeDrawerExperiment;
  let tmp2 = null;
  if (MobileHomeDrawerExperiment.useConfig({ location: "dm-expanded-children" }).enableHome) {
    tmp2 = null;
    if (!tmp) {
      tmp2 = metroImportDefault(HomeDrawerDMsRow, {});
    }
  }
  return tmp2;
};
