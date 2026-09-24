// Module ID: 14166
// Function ID: 14167
// Name: ContactSyncUpsellCTA
// Dependencies: [19, 12862, 1078, 21, 4790, 580, 558, 568, 1245, 12859, 7473, 1119, 8908, 14167, 2]

// Module 14166 (ContactSyncUpsellCTA)
import nativeDefault from "native" /* 580 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1245 */;
import ContactSyncModalActionCreators from "ContactSyncModalActionCreators" /* 12859 */;
import _modDef14167 from "module_14167" /* 14167 */;
import noop from "module_19" /* 19 */;

require = fn;
const dismissUpsellCTA = fn(12862).dismissUpsellCTA;
const Constants = fn(1078);
({ AnalyticEvents: closure_4, AnalyticsSections: hasOwnProperty } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj = { container: { padding: 12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
let obj3 = { padding: 12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const size = fn(2);
let result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncUpsellCTA.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = _location(568).c(11);
  ({ style, location: _location } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] !== _location) {
    const fn = function o() {
      const obj2 = { type: constants2.CONTACT_SYNC_MODAL, location: null };
      let str = _location;
      let str2 = _location;
      if (_location == null) {
        str2 = "Friends List Upsell";
      }
      obj2.location = { page: str2 };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      if (str == null) {
        str = "Friends List Upsell";
      }
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: str });
    };
    cResult[0] = _location;
    cResult[1] = fn;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        obj = location(closure_1_2[10]);
        obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
        obj4 = { label: null, onPress: null };
        intl = location(closure_1_2[11]).intl;
        obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
        obj4.onPress = function onPress() {
          closure_1_3();
        };
        items = [];
        items[0] = obj4;
        obj1.options = items;
        result = obj.showSimpleActionSheet(obj1);
        return;
      }
    }
    cResult[2] = S;
    const tmp6 = S;
  } else {
    class S {
      constructor() {
        obj = location(closure_1_2[10]);
        obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
        obj4 = { label: null, onPress: null };
        intl = location(closure_1_2[11]).intl;
        obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
        obj4.onPress = function onPress() {
          closure_1_3();
        };
        items = [];
        items[0] = obj4;
        obj1.options = items;
        result = obj.showSimpleActionSheet(obj1);
        return;
      }
    }
  }
  if (cResult[3] === style) {
    class S {
      constructor() {
        obj = location(closure_1_2[10]);
        obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
        obj4 = { label: null, onPress: null };
        intl = location(closure_1_2[11]).intl;
        obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
        obj4.onPress = function onPress() {
          closure_1_3();
        };
        items = [];
        items[0] = obj4;
        obj1.options = items;
        result = obj.showSimpleActionSheet(obj1);
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class S {
        constructor() {
          obj = location(closure_1_2[10]);
          obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
          obj4 = { label: null, onPress: null };
          intl = location(closure_1_2[11]).intl;
          obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
          obj4.onPress = function onPress() {
            closure_1_3();
          };
          items = [];
          items[0] = obj4;
          obj1.options = items;
          result = obj.showSimpleActionSheet(obj1);
          return;
        }
      }
      const stringResult = obj2.string(tmp(1119).t.T6Rfd9);
      let intl = tmp(1119).intl;
      const stringResult1 = intl.string(tmp(1119).t.c6KIpg);
      cResult[6] = stringResult;
      cResult[7] = stringResult1;
      let tmp9 = stringResult1;
      const tmp8 = stringResult;
    } else {
      class S {
        constructor() {
          obj = location(closure_1_2[10]);
          obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
          obj4 = { label: null, onPress: null };
          intl = location(closure_1_2[11]).intl;
          obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
          obj4.onPress = function onPress() {
            closure_1_3();
          };
          items = [];
          items[0] = obj4;
          obj1.options = items;
          result = obj.showSimpleActionSheet(obj1);
          return;
        }
      }
      tmp9 = cResult[7];
    }
    if (cResult[8] === tmp5) {
      class S {
        constructor() {
          obj = location(closure_1_2[10]);
          obj1 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
          obj4 = { label: null, onPress: null };
          intl = location(closure_1_2[11]).intl;
          obj4.label = intl.string(location(closure_1_2[11]).t.WAI6xu);
          obj4.onPress = function onPress() {
            closure_1_3();
          };
          items = [];
          items[0] = obj4;
          obj1.options = items;
          result = obj.showSimpleActionSheet(obj1);
          return;
        }
      }
      return tmp12;
    }
    let obj3 = { onPress: tmp5, onLongPress: tmp6, style: tmp7, iconSource: _modDef14167, title: tmp8, subtitle: tmp9 };
    const tmp15 = jsx(tmp(8908).FormCTA, { onPress: tmp5, onLongPress: tmp6, style: tmp7, iconSource: _modDef14167, title: tmp8, subtitle: tmp9 });
    cResult[8] = tmp5;
    cResult[9] = tmp7;
    cResult[10] = tmp15;
    tmp12 = tmp15;
  }
  let items = [tmp4.container, style];
  cResult[3] = style;
  cResult[4] = tmp4.container;
  cResult[5] = items;
}) : ((location) => {
  location = location.location;
  let obj = {
    onPress() {
      const obj2 = { type: constants2.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj2.location = { page: str2 };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      if (str == null) {
        str = "Friends List Upsell";
      }
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: str });
    },
    onLongPress() {
      const obj2 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      const obj3 = { label: null, onPress: null };
      const intl = location(1119).intl;
      obj3.label = intl.string(location(1119).t.WAI6xu);
      obj3.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj3];
      obj2.options = items;
      const result = location(7473).showSimpleActionSheet(obj2);
    },
    style: null,
    iconSource: _modDef14167,
    title: null,
    subtitle: null
  };
  let items = [closure_7().container, location.style];
  obj.style = items;
  let intl = location(1119).intl;
  obj.title = intl.string(location(1119).t.T6Rfd9);
  const intl2 = location(1119).intl;
  obj.subtitle = intl2.string(location(1119).t.c6KIpg);
  return jsx(location(8908).FormCTA, {
    onPress() {
      const obj2 = { type: constants2.CONTACT_SYNC_MODAL, location: null };
      let str = location;
      let str2 = location;
      if (location == null) {
        str2 = "Friends List Upsell";
      }
      obj2.location = { page: str2 };
      AnalyticsUtilsDefault.track(constants.OPEN_MODAL, obj2);
      if (str == null) {
        str = "Friends List Upsell";
      }
      ContactSyncModalActionCreators.openContactSyncModal({}, { page: str });
    },
    onLongPress() {
      const obj2 = { key: "ContactSyncUpsellLongPress", options: null, hasIcons: false };
      const obj3 = { label: null, onPress: null };
      const intl = location(1119).intl;
      obj3.label = intl.string(location(1119).t.WAI6xu);
      obj3.onPress = function onPress() {
        closure_1_3();
      };
      const items = [obj3];
      obj2.options = items;
      const result = location(7473).showSimpleActionSheet(obj2);
    },
    style: null,
    iconSource: _modDef14167,
    title: null,
    subtitle: null
  });
}));
