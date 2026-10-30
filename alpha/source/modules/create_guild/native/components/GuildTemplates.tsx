// Module ID: 14229
// Function ID: 14230
// Name: GuildTemplates
// Dependencies: [32, 19, 17, 14226, 7141, 1072, 21, 5009, 5581, 575, 5619, 1114, 1498, 1626, 5629, 14201, 1253, 13822, 14230, 7286, 7054, 2]
// Exports: default

// Module 14229 (GuildTemplates)
import nativeDefault from "native" /* 575 */;
import intl4 from "intl" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1253 */;
import NavigatorConstants from "NavigatorConstants" /* 5581 */;
import Text_Text from "Text/Text" /* 5619 */;
import ListSelectionItemDefault from "ListSelectionItem" /* 13822 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 14201 */;
import CreateGuildIcons from "CreateGuildIcons" /* 14230 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import CreateGuildConstants_mod from "create_guild/CreateGuildConstants" /* 14226 */;
import CreateGuildConstants_mod2 from "CreateGuildConstants" /* 7141 */;
import Constants from "Constants" /* 1072 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let closure_14;
let closure_15;
let hasOwnProperty;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let unpackModuleId;
function GuildTemplatesHeader() {
  let intl;
  let intl2;
  let items;
  const tmp = closure_16();
  const obj = { style: tmp.headerContainer, children: items };
  const obj2 = { style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t["5HZu07"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items = [authStore3(Text, obj2), ];
  const obj3 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl4.t["/k/L/j"]) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items[1] = authStore3(Text2, obj3);
  return closure_15(hasOwnProperty, obj);
}
function GuildTemplatesJoinFooter(trigger) {
  let closure_2;
  let intl3;
  let items1;
  let items2;
  let obj3;
  let stringResult;
  trigger = trigger.trigger;
  const onHeightChange = trigger.onHeightChange;
  const tmp = closure_16();
  const tmp2 = trigger;
  let obj = trigger(1498);
  dependencyMap = obj.useNavigation();
  const bottom = onHeightChange(1626)().bottom;
  if (trigger === constants3.NUF) {
    const intl2 = tmp2(1114).intl;
    stringResult = intl2.string(tmp2(1114).t.INo2NK);
  } else {
    const intl = tmp2(1114).intl;
    stringResult = intl.string(tmp2(1114).t.riOUtB);
  }
  const items = [onHeightChange];
  let obj2 = {
    style: items1,
    onLayout: react.useCallback((nativeEvent) => {
      onHeightChange(nativeEvent.nativeEvent.layout.height);
    }, items),
    children: closure_15(closure_5, obj3)
  };
  items1 = [tmp.footerSafeAreaContainer, { paddingBottom: bottom }];
  obj3 = { style: tmp.footerContainer, children: items2 };
  let obj4 = { style: tmp.footerTitle, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl3.string(tmp2(1114).t["N+Mi/U"]) };
  const Text = tmp2(5619).Text;
  intl3 = tmp2(1114).intl;
  items2 = [closure_14(Text, obj4), ];
  const obj5 = {
    variant: "primary",
    grow: true,
    text: stringResult,
    onPress() {
      if (constants2.NUF === trigger) {
        const obj = NewUserAnalyticsUtils;
        obj.trackNUFStep(unpackModuleId.STEP_GUILD_TEMPLATE, unpackModuleId.STEP_GUILD_JOIN, { skip: false });
        const obj2 = AnalyticsUtilsDefault;
        obj2.track(constants3.JOIN_GUILD_VIEWED);
      } else if (tmp2.IN_APP === tmp) {
        const obj4 = { location_section: map1.CREATE_JOIN_GUILD_MODAL };
        const obj3 = AnalyticsUtilsDefault;
        obj3.track(constants3.JOIN_GUILD_VIEWED, obj4);
      }
      closure_2.push(constants.JOIN_SERVER, {});
    }
  };
  items2[1] = closure_14(tmp2(5629).Button, obj5);
  return closure_14(closure_5, obj2);
}
function GuildTemplatesItem(guildTemplate) {
  guildTemplate = guildTemplate.guildTemplate;
  const onGuildTemplatePress = guildTemplate.onGuildTemplatePress;
  const obj = {
    Icon: CreateGuildIcons.GUILD_TEMPLATE_ICON_COMPONENTS[guildTemplate.id],
    message: guildTemplate.label,
    onPress() {
      return onGuildTemplatePress(guildTemplate);
    }
  };
  const tmp = ListSelectionItemDefault;
  return authStore3(tmp, obj);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
let CreateGuildConstants = CreateGuildConstants_mod2;
({ getGuildTemplatesMap: metroImportDefault, GuildTemplateId: metroImportAll } = CreateGuildConstants);
CreateGuildConstants = CreateGuildConstants_mod2;
({ CreateGuildModalStates: c9, GuildTemplateTriggers: c10, NUXGuildTemplatesAnalytics: unpackModuleId } = CreateGuildConstants);
({ AnalyticEvents: closure_12, AnalyticsLocations: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let createStyles = createStyles_mod;
let obj = { flex: { flex: 1 }, contentContainer: obj2, scrollContainer: obj3, sections: obj4, headerContainer: { alignItems: "center", paddingTop: 20, paddingBottom: 20, paddingHorizontal: 16 }, headerTitle: { textAlign: "center", marginBottom: 8 }, headerDescription: { lineHeight: 18, textAlign: "center" }, footerSafeAreaContainer: obj5, footerContainer: { padding: 16, gap: 16, minHeight: 110, justifyContent: "center" }, footerTitle: { alignSelf: "center", textAlign: "center" } };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, gap: 24 };
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", bottom: 0, width: "100%" };
let closure_16 = createStyles(obj);
const result = size.fileFinishedImporting("modules/create_guild/native/components/GuildTemplates.tsx");

export default function GuildTemplates(trigger) {
  let _undefined;
  let c4;
  let closure_3;
  let intl;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj2;
  let obj4;
  let obj7;
  let tmp5;
  trigger = trigger.trigger;
  const _location = trigger.location;
  const fromStep = trigger.fromStep;
  react = undefined;
  function onGuildTemplatePress(guildTemplate) {
    const obj = { guildTemplate, trigger };
    closure_3.push(constants.CREATION_INTENT, obj);
    if (trigger === constants2.IN_APP) {
      const obj3 = { template_name: guildTemplate.id };
      const obj2 = AnalyticsUtilsDefault;
      obj2.track(constants3.GUILD_TEMPLATE_SELECTED, obj3);
    }
  }
  const tmp = closure_16();
  const bottom = _location(fromStep[13])().bottom;
  let obj = trigger(fromStep[12]);
  _slicedToArray = obj.useNavigation();
  const items = [trigger, _location, fromStep];
  const effect = react.useEffect(() => {
    if (constants2.NUF === trigger) {
      let STEP_REGISTRATION = fromStep;
      const trackNUFStep = NewUserAnalyticsUtils.trackNUFStep;
      NewUserAnalyticsUtils;
      if (fromStep == null) {
        STEP_REGISTRATION = unpackModuleId.STEP_REGISTRATION;
      }
      trackNUFStep(STEP_REGISTRATION, unpackModuleId.STEP_GUILD_TEMPLATE, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      let str = _location;
      const track = AnalyticsUtilsDefault.track;
      const OPEN_MODAL = constants3.OPEN_MODAL;
      AnalyticsUtilsDefault;
      if (_location == null) {
        str = "Guild List";
      }
      const obj = { type: "Create Guild Templates", source: str };
      track(OPEN_MODAL, obj);
    }
  }, items);
  const first = _slicedToArray(react.useState(closure_7()), 1)[0];
  [tmp5, c4] = _slicedToArray(react.useState(110), 2);
  const tmp4 = _slicedToArray(react.useState(110), 2);
  const callback = react.useCallback((arg0) => {
    _undefined(arg0);
  }, []);
  const rect = { top: true, left: true, right: true, style: items1, children: closure_15(closure_5, obj2) };
  items1 = [, ];
  ({ flex: arr2[0], contentContainer: arr2[1] } = tmp);
  obj2 = { style: tmp.flex, children: items5 };
  let obj3 = { style: tmp.scrollContainer, contentContainerStyle: obj4, children: items2 };
  obj4 = { paddingBottom: tmp5 + bottom + 16 };
  const SafeAreaPaddingView = trigger(fromStep[19]).SafeAreaPaddingView;
  items2 = [closure_14(GuildTemplatesHeader, {}), ];
  const obj5 = { style: tmp.sections, children: items3 };
  const obj6 = { hasIcons: true, children: closure_14(GuildTemplatesItem, obj7) };
  obj7 = { guildTemplate: first[constants.CREATE], onGuildTemplatePress };
  const TableRowGroup = trigger(fromStep[20]).TableRowGroup;
  items3 = [closure_14(TableRowGroup, obj6), ];
  const obj8 = { title: intl.string(trigger(fromStep[11]).t.JGDkfg), hasIcons: true, children: items4 };
  const TableRowGroup2 = trigger(fromStep[20]).TableRowGroup;
  intl = trigger(fromStep[11]).intl;
  items4 = [, , , , , ];
  const obj9 = { guildTemplate: first[constants.GAMING], onGuildTemplatePress };
  items4[0] = closure_14(GuildTemplatesItem, obj9);
  const obj10 = { guildTemplate: first[constants.SCHOOL_CLUB], onGuildTemplatePress };
  items4[1] = closure_14(GuildTemplatesItem, obj10);
  const obj11 = { guildTemplate: first[constants.STUDY], onGuildTemplatePress };
  items4[2] = closure_14(GuildTemplatesItem, obj11);
  const obj12 = { guildTemplate: first[constants.FRIENDS], onGuildTemplatePress };
  items4[3] = closure_14(GuildTemplatesItem, obj12);
  const obj13 = { guildTemplate: first[constants.CREATORS], onGuildTemplatePress };
  items4[4] = closure_14(GuildTemplatesItem, obj13);
  const obj14 = { guildTemplate: first[constants.LOCAL_COMMUNITY], onGuildTemplatePress };
  items4[5] = closure_14(GuildTemplatesItem, obj14);
  items3[1] = closure_15(TableRowGroup2, obj8);
  items2[1] = closure_15(closure_5, obj5);
  items5 = [closure_15(closure_6, obj3), closure_14(GuildTemplatesJoinFooter, { trigger, onHeightChange: callback })];
  return closure_14(SafeAreaPaddingView, rect);
};
