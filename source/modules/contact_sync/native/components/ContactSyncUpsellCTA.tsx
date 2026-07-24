// Module ID: 12916
// Function ID: 100277
// Dependencies: [31, 11735, 653, 33, 4130, 689, 7636, 675, 11732, 5495, 1212, 12917, 2]

// Module 12916
import { dismissUpsellCTA } from "setStoredContacts";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ AnalyticEvents: closure_4, AnalyticsSections: closure_5 } = ME);
let obj = {};
obj = { padding: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.container = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function ContactSyncUpsellCTA(location) {
  location = location.location;
  let obj = {
    onPress() {
      let obj = outer1_1(outer1_2[7]);
      obj = { type: outer1_5.CONTACT_SYNC_MODAL };
      obj = {};
      let str = "Friends List Upsell";
      let str2 = "Friends List Upsell";
      if (null != location) {
        str2 = location;
      }
      obj.page = str2;
      obj.location = obj;
      obj.track(outer1_4.OPEN_MODAL, obj);
      const obj1 = {};
      if (null != location) {
        str = location;
      }
      obj1.page = str;
      location(outer1_2[8]).openContactSyncModal({}, obj1);
    },
    onLongPress() {
      let obj = location(outer1_2[9]);
      obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      obj = {};
      const intl = location(outer1_2[10]).intl;
      obj.label = intl.string(location(outer1_2[10]).t.WAI6xu);
      obj.onPress = function onPress() {
        outer2_3();
      };
      const items = [obj];
      obj.options = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: items
  };
  items = [callback().container, location.style];
  obj.iconSource = importDefault(12917);
  let intl = location(1212).intl;
  obj.title = intl.string(location(1212).t.T6Rfd9);
  const intl2 = location(1212).intl;
  obj.subtitle = intl2.string(location(1212).t.c6KIpg);
  return jsx(location(7636).FormCTA, {
    onPress() {
      let obj = outer1_1(outer1_2[7]);
      obj = { type: outer1_5.CONTACT_SYNC_MODAL };
      obj = {};
      let str = "Friends List Upsell";
      let str2 = "Friends List Upsell";
      if (null != location) {
        str2 = location;
      }
      obj.page = str2;
      obj.location = obj;
      obj.track(outer1_4.OPEN_MODAL, obj);
      const obj1 = {};
      if (null != location) {
        str = location;
      }
      obj1.page = str;
      location(outer1_2[8]).openContactSyncModal({}, obj1);
    },
    onLongPress() {
      let obj = location(outer1_2[9]);
      obj = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      obj = {};
      const intl = location(outer1_2[10]).intl;
      obj.label = intl.string(location(outer1_2[10]).t.WAI6xu);
      obj.onPress = function onPress() {
        outer2_3();
      };
      const items = [obj];
      obj.options = items;
      const result = obj.showSimpleActionSheet(obj);
    },
    style: items
  });
});
let result = require("ME").fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default memoResult;
