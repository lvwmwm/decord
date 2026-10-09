// Module ID: 14001
// Function ID: 14002
// Name: ContactSyncUpsellCTA
// Dependencies: [19, 12357, 1085, 21, 5091, 587, 558, 576, 1265, 12354, 6884, 1126, 8563, 14002, 2]

// Module 14001 (ContactSyncUpsellCTA)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12354 */;
import ContactSyncPersistedStore from "ContactSyncPersistedStore" /* 12357 */;
import AssetRegistryDefault from "AssetRegistry" /* 14002 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
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
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function ContactSyncUpsellCTA(arg0) {
  let _location;
  let style;
  let tmp5;
  let tmp6;
  let tmp = _location;
  let obj = _location(576);
  const cResult = obj.c(11);
  ({ style, location: _location } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== _location) {
    function handleOpen() {
      let str2;
      let str = _location;
      const obj = { type: hasOwnProperty.CONTACT_SYNC_MODAL, location: { page: str2 } };
      str2 = _location;
      const track = AnalyticsUtilsDefault.track;
      const OPEN_MODAL = constants.OPEN_MODAL;
      AnalyticsUtilsDefault;
      if (_location == null) {
        str2 = "Friends List Upsell";
      }
      track(OPEN_MODAL, obj);
      const openContactSyncModal = ContactSyncModalActionCreators.openContactSyncModal;
      ContactSyncModalActionCreators;
      if (str == null) {
        str = "Friends List Upsell";
      }
      openContactSyncModal({}, { page: str });
    }
    cResult[0] = _location;
    cResult[1] = handleOpen;
    tmp5 = handleOpen;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    function openDismissOption() {
      let intl;
      let items;
      const obj = { key: "ContactSyncUpsellLongPress", options: items, hasIcons: false };
      const tmp = _location(dependencyMap[10]);
      const showSimpleActionSheet = tmp.showSimpleActionSheet;
      const obj2 = {
        label: intl.string(_location(dependencyMap[11]).t.WAI6xu),
        onPress() {
          closure_1_3();
        }
      };
      intl = _location(dependencyMap[11]).intl;
      items = [obj2];
      const result = showSimpleActionSheet(obj);
    }
    cResult[2] = openDismissOption;
    tmp6 = openDismissOption;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === style) {
    let tmp7;
    let tmp9;
    let tmp8;
    if (cResult[4] === tmp4.container) {
      tmp7 = cResult[5];
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      let intl = tmp(1126).intl;
      const stringResult = intl.string(tmp(1126).t.T6Rfd9);
      const intl2 = tmp(1126).intl;
      const stringResult1 = intl2.string(tmp(1126).t.c6KIpg);
      cResult[6] = stringResult;
      cResult[7] = stringResult1;
      tmp9 = stringResult1;
      tmp8 = stringResult;
    } else {
      tmp8 = cResult[6];
      tmp9 = cResult[7];
    }
    if (cResult[8] === tmp5) {
      let tmp12;
      if (cResult[9] === tmp7) {
        tmp12 = cResult[10];
      }
      return tmp12;
    }
    const FormCTA = tmp(8563).FormCTA;
    const tmp15 = <FormCTA onPress={tmp5} onLongPress={tmp6} style={tmp7} iconSource={AssetRegistryDefault} title={tmp8} subtitle={tmp9} />;
    cResult[8] = tmp5;
    cResult[9] = tmp7;
    cResult[10] = tmp15;
    tmp12 = tmp15;
  }
  let items = [tmp4.container, style];
  cResult[3] = style;
  cResult[4] = tmp4.container;
  cResult[5] = items;
  tmp7 = items;
}) : (function ContactSyncUpsellCTA(location) {
  location = location.location;
  const style = location.style;
  let tmp = closure_7();
  let items = [tmp.container, style];
  const FormCTA = location(8563).FormCTA;
  let intl = location(1126).intl;
  const intl2 = location(1126).intl;
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
    const tmp = location(dependencyMap[10]);
    const showSimpleActionSheet = tmp.showSimpleActionSheet;
    const obj2 = {
      label: intl.string(location(dependencyMap[11]).t.WAI6xu),
      onPress() {
        closure_1_3();
      }
    };
    intl = location(dependencyMap[11]).intl;
    items = [obj2];
    const result = showSimpleActionSheet(obj);
  }} style={items} iconSource={AssetRegistryDefault} title={intl.string(location(1126).t.T6Rfd9)} subtitle={intl2.string(location(1126).t.c6KIpg)} />;
}));
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default memoResult;
