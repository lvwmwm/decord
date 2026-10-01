// Module ID: 13402
// Function ID: 13403
// Name: ContactSyncUpsellCTA
// Dependencies: [19, 12176, 1074, 21, 4836, 576, 8053, 1241, 12173, 6615, 1115, 13403, 2]

// Module 13402 (ContactSyncUpsellCTA)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12173 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12176 */;
import AssetRegistryDefault from "AssetRegistry" /* 13403 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
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
  const FormCTA = location(8053).FormCTA;
  let intl = location(1115).intl;
  const intl2 = location(1115).intl;
  return <FormCTA onPress={function onPress() {
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
  }} onLongPress={function onLongPress() {
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
  }} style={items} iconSource={AssetRegistryDefault} title={intl.string(location(1115).t.T6Rfd9)} subtitle={intl2.string(location(1115).t.c6KIpg)} />;
});
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default memoResult;
