// Module ID: 15676
// Function ID: 15677
// Name: ContactSyncUpsellCTA
// Dependencies: [19, 14235, 1072, 21, 5014, 575, 8177, 1252, 14232, 7363, 1113, 15677, 2]

// Module 15676 (ContactSyncUpsellCTA)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 14232 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 14235 */;
import AssetRegistryDefault from "AssetRegistry" /* 15677 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const dismissUpsellCTA = ContactSyncPersistedStore.dismissUpsellCTA;
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { padding: 12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_7 = createStyles.createStyles(obj);
const memoResult = react.memo(function ContactSyncUpsellCTA(location) {
  location = location.location;
  const style = location.style;
  let tmp = closure_7();
  let items = [tmp.container, style];
  const FormCTA = location(8177).FormCTA;
  let intl = location(1113).intl;
  const intl2 = location(1113).intl;
  return <FormCTA onPress={function handleOpen() {
    let str2;
    let str = location;
    const obj = { type: hasOwnProperty.CONTACT_SYNC_MODAL, location: { page: str2 } };
    str2 = location;
    const track = AnalyticsUtilsDefault.track;
    const OPEN_MODAL = constants.OPEN_MODAL;
    AnalyticsUtilsDefault;
    if (location == null) {
      str2 = "Friends List Upsell";
    }
    track(OPEN_MODAL, obj);
    const openContactSyncModal = ContactSyncModalActionCreators.openContactSyncModal;
    ContactSyncModalActionCreators;
    if (str == null) {
      str = "Friends List Upsell";
    }
    openContactSyncModal({}, { page: str });
  }} onLongPress={function openDismissOption() {
    let intl;
    let items;
    const obj = { key: "ContactSyncUpsellLongPress", options: items, hasIcons: false };
    const tmp = location(dependencyMap[9]);
    const showSimpleActionSheet = tmp.showSimpleActionSheet;
    const obj2 = {
      label: intl.string(location(dependencyMap[10]).t.WAI6xu),
      onPress() {
        closure_1_3();
      }
    };
    intl = location(dependencyMap[10]).intl;
    items = [obj2];
    const result = showSimpleActionSheet(obj);
  }} style={items} iconSource={AssetRegistryDefault} title={intl.string(location(1113).t.T6Rfd9)} subtitle={intl2.string(location(1113).t.c6KIpg)} />;
});
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default memoResult;
