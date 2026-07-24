// Module ID: 11768
// Function ID: 91409
// Name: CreationIntent
// Dependencies: [31, 27, 9263, 653, 33, 4130, 5084, 689, 1456, 4528, 4539, 11739, 675, 5121, 4126, 1212, 5501, 10086, 5807, 2]
// Exports: default

// Module 11768 (CreationIntent)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_4;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
({ View: closure_4, ScrollView: closure_5 } = get_ActivityIndicator);
({ CreateGuildModalStates: closure_6, GuildTemplateTriggers: closure_7, NUXGuildTemplatesAnalytics: closure_8 } = NUXGuildTemplatesAnalytics);
({ AnalyticEvents: closure_9, AnalyticsLocations: closure_10 } = ME);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollContainer = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.headerContainer = { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.headerTitle = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.headerDescription = { lineHeight: 18, textAlign: "center" };
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.sections = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
_createForOfIteratorHelperLoose.skipDescription = { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_14 = Math.random() < 0.5;
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING };
let result = require("NUXGuildTemplatesAnalytics").fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default function CreationIntent(arg0) {
  let require;
  let trigger;
  ({ guildTemplate: require, trigger } = arg0);
  let dependencyMap;
  function onPress(isCommunityIntent) {
    let obj = trigger(arr[12]);
    obj = { skipped: null == isCommunityIntent };
    let tmp = null != isCommunityIntent;
    if (tmp) {
      tmp = isCommunityIntent;
    }
    obj.is_community = tmp;
    obj.track(outer1_9.GUILD_CREATION_INTENT_SELECTED, obj);
    obj = { guildTemplate: user, isCommunityIntent };
    arr = arr.push(outer1_6.CREATE_SERVER, obj);
    if (outer1_7.NUF === trigger) {
      let obj3 = outer1_0(arr[11]);
      const obj1 = { skip: false };
      obj3.trackNUFStep(outer1_8.STEP_CREATION_INTENT, outer1_8.STEP_GUILD_CREATE, obj1);
      const obj2 = {};
      let id;
      if (null != user) {
        id = user.id;
      }
      obj2.guild_template_name = id;
      trigger(arr[12]).track(outer1_9.CREATE_GUILD_VIEWED, obj2);
      const obj6 = trigger(arr[12]);
    } else if (outer1_7.IN_APP === tmp4) {
      obj3 = { type: "Create Guild Step 2", location_section: outer1_10.CREATE_JOIN_GUILD_MODAL };
      trigger(arr[12]).track(outer1_9.OPEN_MODAL, obj3);
      const obj8 = trigger(arr[12]);
      const obj4 = { location_section: outer1_10.CREATE_JOIN_GUILD_MODAL };
      let id1;
      if (null != user) {
        id1 = user.id;
      }
      obj4.guild_template_name = id1;
      trigger(arr[12]).track(outer1_9.CREATE_GUILD_VIEWED, obj4);
      const obj10 = trigger(arr[12]);
    }
  }
  let tmp = _createForOfIteratorHelperLoose();
  let obj = require(1456) /* useNavigation */;
  dependencyMap = obj.useNavigation();
  let obj1 = require(4528) /* SCREEN_READER_ENABLED_GETTER */;
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  const ref = isScreenReaderEnabled.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = outer1_0(arr[10]);
      obj = { ref, delay: 100 };
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = isScreenReaderEnabled.useEffect(() => {
    if (outer1_7.NUF === trigger) {
      let obj = { skip: false };
      outer1_0(arr[11]).trackNUFStep(outer1_8.STEP_GUILD_TEMPLATE, outer1_8.STEP_CREATION_INTENT, obj);
      const obj3 = outer1_0(arr[11]);
    } else if (outer1_7.IN_APP === tmp) {
      obj = trigger(arr[12]);
      obj = { type: "Server Intent Discovery" };
      obj.track(outer1_9.OPEN_MODAL, obj);
    }
  }, items1);
  obj = { top: true, style: tmp.contentContainer };
  obj = { style: tmp.scrollContainer };
  obj1 = { style: tmp.headerContainer };
  let obj2 = { ref, style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl.string(require(1212) /* getSystemLocale */.t.f3MvGS);
  const items2 = [callback(require(4126) /* Text */.Text, obj2), ];
  let obj3 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj3.children = intl2.string(require(1212) /* getSystemLocale */.t.nOzc7w);
  items2[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items2;
  const items3 = [callback2(ref, obj1), , ];
  let obj4 = { style: tmp.sections };
  const obj5 = { hasIcons: true };
  const tmp13 = trigger(10086);
  let obj6 = {};
  const tmp15 = require(5807) /* AccountAgeTier10LargeBadge */;
  if (closure_14) {
    obj6.Icon = tmp15.ChairIllocon;
    const intl5 = tmp14(1212).intl;
    obj6.message = intl5.string(tmp14(1212).t.uE7zcu);
    obj6.onPress = function onPress() {
      onPress(false);
    };
    const items4 = [tmp10(tmp13, obj6), ];
    const obj7 = {};
    let tmp11Result = tmp11(10086);
    obj7.Icon = tmp14(5807).WorldIllocon;
    const intl6 = tmp14(1212).intl;
    obj7.message = intl6.string(tmp14(1212).t.h9Q1lG);
    obj7.onPress = function onPress() {
      onPress(true);
    };
    items4[1] = tmp10(tmp11Result, obj7);
    obj5.children = items4;
    let tmp17 = obj5;
  } else {
    obj6.Icon = tmp15.WorldIllocon;
    const intl3 = tmp14(1212).intl;
    obj6.message = intl3.string(tmp14(1212).t.h9Q1lG);
    obj6.onPress = function onPress() {
      onPress(true);
    };
    const items5 = [tmp10(tmp13, obj6), ];
    let obj8 = {};
    tmp11Result = tmp11(10086);
    obj8.Icon = tmp14(5807).ChairIllocon;
    const intl4 = tmp14(1212).intl;
    obj8.message = intl4.string(tmp14(1212).t.uE7zcu);
    obj8.onPress = function onPress() {
      onPress(false);
    };
    items5[1] = tmp10(tmp11Result, obj8);
    obj5.children = items5;
    tmp17 = obj5;
  }
  obj4.children = callback2(require(5501) /* TableRowGroupTitle */.TableRowGroup, tmp17);
  items3[1] = callback(ref, obj4);
  const obj9 = { style: tmp.skipDescription, variant: "text-sm/medium", color: "text-default" };
  const intl7 = require(1212) /* getSystemLocale */.intl;
  obj9.children = intl7.format(require(1212) /* getSystemLocale */.t["SMc+Gz"], {
    onSkip(arg0) {
      onPress(null);
    }
  });
  items3[2] = callback(require(4126) /* Text */.Text, obj9);
  obj.children = items3;
  obj.children = callback2(onPress, obj);
  return callback(require(5121) /* SafeAreaPaddingView */.SafeAreaPaddingView, obj);
};
