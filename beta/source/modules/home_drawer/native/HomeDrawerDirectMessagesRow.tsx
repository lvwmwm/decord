// Module ID: 15946
// Function ID: 15947
// Name: HomeDrawerDirectMessagesRow
// Dependencies: [19, 17, 4876, 4479, 1074, 21, 4836, 576, 504, 4832, 1115, 15942, 4698, 4695, 2]
// Exports: default

// Module 15946 (HomeDrawerDirectMessagesRow)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl3 from "intl" /* 1115 */;
import HomeDrawerExperiment from "HomeDrawerExperiment" /* 4698 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4876 */;
import RelationshipStore from "RelationshipStore" /* 4479 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
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
    const Text = tmp2(4832).Text;
    intl = tmp2(1115).intl;
    obj5 = { numFriends: stateFromStores };
    items1[1] = metroImportDefault(Text, obj4);
    tmp5 = metroImportAll(View, obj2);
  }
  const obj6 = { title: metroImportDefault(Text2, obj7), subtitle: tmp5 };
  const HomeDrawerSharedItem = tmp2(15942).HomeDrawerSharedItem;
  obj7 = { variant: "text-md/medium", color: "text-default", lineClamp: 1, children: intl2.string(intl3.t.YUU0RF) };
  Text2 = tmp2(4832).Text;
  intl2 = tmp2(1115).intl;
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
