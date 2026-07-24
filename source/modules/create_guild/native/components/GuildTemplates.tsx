// Module ID: 11766
// Function ID: 91397
// Name: GuildTemplatesHeader
// Dependencies: [57, 31, 27, 11763, 9263, 653, 33, 4130, 5084, 689, 4126, 1212, 1456, 1557, 4543, 11739, 675, 10086, 11767, 5121, 5501, 2]
// Exports: default

// Module 11766 (GuildTemplatesHeader)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import GuildTemplateId from "GuildTemplateId";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_14;
let closure_15;
let closure_5;
let closure_6;
let closure_7;
let closure_8;
let closure_9;
const require = arg1;
function GuildTemplatesHeader() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.headerContainer };
  obj = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["5HZu07"]);
  const items = [callback3(require(4126) /* Text */.Text, obj), ];
  obj = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.children = intl2.string(require(1212) /* getSystemLocale */.t["/k/L/j"]);
  items[1] = callback3(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback4(closure_5, obj);
}
function GuildTemplatesJoinFooter(trigger) {
  trigger = trigger.trigger;
  const onHeightChange = trigger.onHeightChange;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = trigger(1456);
  const dependencyMap = obj.useNavigation();
  if (trigger === constants2.NUF) {
    const intl2 = trigger(1212).intl;
    let stringResult = intl2.string(trigger(1212).t.INo2NK);
  } else {
    const intl = trigger(1212).intl;
    stringResult = intl.string(trigger(1212).t.riOUtB);
  }
  const items = [onHeightChange];
  obj = {
    style: items1,
    onLayout: React.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items)
  };
  items1 = [tmp.footerSafeAreaContainer, { paddingBottom: onHeightChange(1557)().bottom }];
  obj = { style: tmp.footerContainer };
  const obj1 = { style: tmp.footerTitle, variant: "heading-lg/semibold", color: "mobile-text-heading-primary" };
  const intl3 = trigger(1212).intl;
  obj1.children = intl3.string(trigger(1212).t["N+Mi/U"]);
  const items2 = [callback3(trigger(4126).Text, obj1), ];
  const obj2 = {
    variant: "primary",
    grow: true,
    text: stringResult,
    onPress() {
      if (outer1_10.NUF === trigger) {
        let obj = trigger(arr[15]);
        obj = { skip: false };
        obj.trackNUFStep(outer1_11.STEP_GUILD_TEMPLATE, outer1_11.STEP_GUILD_JOIN, obj);
        onHeightChange(arr[16]).track(outer1_12.JOIN_GUILD_VIEWED);
        const obj3 = onHeightChange(arr[16]);
      } else if (outer1_10.IN_APP === tmp) {
        obj = { location_section: outer1_13.CREATE_JOIN_GUILD_MODAL };
        onHeightChange(arr[16]).track(outer1_12.JOIN_GUILD_VIEWED, obj);
        const obj4 = onHeightChange(arr[16]);
      }
      arr = arr.push(outer1_9.JOIN_SERVER, {});
    }
  };
  items2[1] = callback3(trigger(4543).Button, obj2);
  obj.children = items2;
  obj.children = callback4(closure_5, obj);
  return callback3(closure_5, obj);
}
function GuildTemplatesItem(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  const obj = {
    Icon: guildTemplate(11767).GUILD_TEMPLATE_ICON_COMPONENTS[guildTemplate.id],
    message: guildTemplate.label,
    onPress() {
      return onGuildTemplatePress(guildTemplate);
    }
  };
  return callback3(onGuildTemplatePress(10086), obj);
}
({ View: closure_5, ScrollView: closure_6 } = get_ActivityIndicator);
({ getGuildTemplatesMap: closure_7, GuildTemplateId: closure_8 } = GuildTemplateId);
({ CreateGuildModalStates: closure_9, GuildTemplateTriggers: closure_10, NUXGuildTemplatesAnalytics: closure_11 } = NUXGuildTemplatesAnalytics);
({ AnalyticEvents: closure_12, AnalyticsLocations: closure_13 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = { flex: { flex: 1 } };
_createForOfIteratorHelperLoose = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
_createForOfIteratorHelperLoose.contentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scrollContainer = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
let obj1 = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose.sections = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING, gap: 24 };
_createForOfIteratorHelperLoose.headerContainer = { alignItems: "center", paddingTop: 20, paddingBottom: 20, paddingHorizontal: 16 };
_createForOfIteratorHelperLoose.headerTitle = { textAlign: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.headerDescription = { lineHeight: 18, textAlign: "center" };
let obj3 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
_createForOfIteratorHelperLoose.footerSafeAreaContainer = obj3;
_createForOfIteratorHelperLoose.footerContainer = { padding: 16, gap: 16, minHeight: 110, justifyContent: "center" };
_createForOfIteratorHelperLoose.footerTitle = { alignSelf: "center", textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").modules.mobile.TABLE_ROW_PADDING, gap: 24 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/create_guild/native/components/GuildTemplates.tsx");

export default function GuildTemplates(trigger) {
  trigger = trigger.trigger;
  const _location = trigger.location;
  const fromStep = trigger.fromStep;
  let callback;
  function onGuildTemplatePress(guildTemplate) {
    let obj = { guildTemplate, trigger };
    if (trigger === outer1_10.IN_APP) {
      obj = { template_name: guildTemplate.id };
      _location(fromStep[16]).track(outer1_12.GUILD_TEMPLATE_SELECTED, obj);
      const obj2 = _location(fromStep[16]);
    }
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = trigger(fromStep[12]);
  callback = obj.useNavigation();
  const items = [trigger, _location, fromStep];
  const effect = React.useEffect(() => {
    if (outer1_10.NUF === trigger) {
      let obj = trigger(fromStep[15]);
      if (null != fromStep) {
        let STEP_REGISTRATION = fromStep;
      } else {
        STEP_REGISTRATION = outer1_11.STEP_REGISTRATION;
      }
      obj = { skip: false };
      obj.trackNUFStep(STEP_REGISTRATION, outer1_11.STEP_GUILD_TEMPLATE, obj);
    } else if (outer1_10.IN_APP === tmp) {
      obj = { type: "Create Guild Templates" };
      let str = "Guild List";
      if (null != _location) {
        str = _location;
      }
      obj.source = str;
      _location(fromStep[16]).track(outer1_12.OPEN_MODAL, obj);
      const obj3 = _location(fromStep[16]);
    }
  }, items);
  const first = callback(React.useState(callback2()), 1)[0];
  const tmp4 = callback(React.useState(110), 2);
  React = tmp4[1];
  callback = React.useCallback((arg0) => {
    callback(arg0);
  }, []);
  obj = { top: true, style: items1 };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  obj = { style: tmp.flex };
  const obj1 = { style: tmp.scrollContainer, contentContainerStyle: obj2 };
  const items2 = [callback3(GuildTemplatesHeader, {}), ];
  let obj3 = { style: tmp.sections };
  const obj4 = { hasIcons: true, children: callback3(GuildTemplatesItem, { guildTemplate: first[constants.CREATE], onGuildTemplatePress }) };
  const items3 = [callback3(trigger(fromStep[20]).TableRowGroup, obj4), ];
  const obj6 = {};
  const intl = trigger(fromStep[11]).intl;
  obj6.title = intl.string(trigger(fromStep[11]).t.JGDkfg);
  obj6.hasIcons = true;
  const items4 = [callback3(GuildTemplatesItem, { guildTemplate: first[constants.GAMING], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[constants.SCHOOL_CLUB], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[constants.STUDY], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[constants.FRIENDS], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[constants.CREATORS], onGuildTemplatePress }), callback3(GuildTemplatesItem, { guildTemplate: first[constants.LOCAL_COMMUNITY], onGuildTemplatePress })];
  obj6.children = items4;
  items3[1] = callback4(trigger(fromStep[20]).TableRowGroup, obj6);
  obj3.children = items3;
  items2[1] = callback4(closure_5, obj3);
  obj1.children = items2;
  const items5 = [callback4(closure_6, obj1), callback3(GuildTemplatesJoinFooter, { trigger, onHeightChange: callback })];
  obj.children = items5;
  obj.children = callback4(closure_5, obj);
  return callback3(trigger(fromStep[19]).SafeAreaPaddingView, obj);
};
