// Module ID: 12222
// Function ID: 12223
// Name: CreationIntent
// Dependencies: [19, 17, 6399, 1074, 21, 4836, 5994, 576, 1485, 5266, 5275, 12180, 1241, 6544, 4832, 1115, 5999, 11807, 12223, 12225, 2]
// Exports: default

// Module 12222 (CreationIntent)
import nativeDefault from "native" /* 576 */;
import intl8 from "intl" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useNavigation from "useNavigation" /* 1485 */;
import Text_Text from "Text/Text" /* 4832 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5266 */;
import react_native from "react-native" /* 5275 */;
import NavigatorConstants from "NavigatorConstants" /* 5994 */;
import TableRowGroup2 from "TableRowGroup" /* 5999 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6544 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12180 */;
import react from "react" /* 19 */;
import react_native2 from "react-native" /* 17 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6399 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let tmp2;
let unpackModuleId;
const ChairIllocon = tmp2(12223);
const WorldIllocon = tmp2(12225);
({ View: closure_4, ScrollView: hasOwnProperty } = react_native2);
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: metroImportDefault, NUXGuildTemplatesAnalytics: metroImportAll } = CreateGuildConstants);
({ AnalyticEvents: c9, AnalyticsLocations: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: obj2, scrollContainer: obj3, headerContainer: { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 }, headerTitle: { textAlign: "center", marginBottom: 8 }, headerDescription: { lineHeight: 18, textAlign: "center" }, sections: obj4, skipDescription: { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" } };
obj2 = { flex: 1, marginTop: NavigatorConstants.NAV_BAR_HEIGHT };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj4 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
let closure_13 = createStyles(obj);
let closure_14 = Math.random() < 0.5;
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default function CreationIntent(arg0) {
  let TableRowGroup;
  let closure_2;
  let guildTemplate;
  let intl;
  let intl2;
  let intl4;
  let intl6;
  let intl7;
  let items2;
  let items3;
  let obj13;
  let obj3;
  let tmp10;
  let tmp15;
  let tmp9;
  let trigger;
  ({ guildTemplate: require, trigger } = arg0);
  dependencyMap = undefined;
  function onPress(isCommunityIntent) {
    let flag;
    let id1;
    const obj = { skipped: null == isCommunityIntent, is_community: flag };
    flag = isCommunityIntent;
    const track = AnalyticsUtilsDefault.track;
    const GUILD_CREATION_INTENT_SELECTED = constants.GUILD_CREATION_INTENT_SELECTED;
    AnalyticsUtilsDefault;
    if (isCommunityIntent == null) {
      flag = false;
    }
    track(GUILD_CREATION_INTENT_SELECTED, obj);
    const obj2 = { guildTemplate: require, isCommunityIntent };
    closure_2.push(metroRequire.CREATE_SERVER, obj2);
    if (metroImportDefault.NUF === trigger) {
      const obj3 = NewUserAnalyticsUtils;
      obj3.trackNUFStep(metroImportAll.STEP_CREATION_INTENT, metroImportAll.STEP_GUILD_CREATE, { skip: false });
      let id;
      const track2 = AnalyticsUtilsDefault.track;
      const CREATE_GUILD_VIEWED = tmp4.CREATE_GUILD_VIEWED;
      AnalyticsUtilsDefault;
      if (require != null) {
        id = tmp6.id;
      }
      const obj4 = { guild_template_name: id };
      track2(CREATE_GUILD_VIEWED, obj4);
    } else if (tmp9.IN_APP === tmp8) {
      const obj5 = { type: "Create Guild Step 2", location_section: constants2.CREATE_JOIN_GUILD_MODAL };
      const tmpResult3 = AnalyticsUtilsDefault;
      tmpResult3.track(constants.OPEN_MODAL, obj5);
      const obj6 = { location_section: constants2.CREATE_JOIN_GUILD_MODAL, guild_template_name: id1 };
      id1 = undefined;
      const track3 = AnalyticsUtilsDefault.track;
      const CREATE_GUILD_VIEWED2 = tmp4.CREATE_GUILD_VIEWED;
      AnalyticsUtilsDefault;
      if (require != null) {
        id1 = tmp6.id;
      }
      track3(CREATE_GUILD_VIEWED2, obj6);
    }
  }
  let tmp = closure_13();
  const tmp2 = require;
  let obj = useNavigation;
  dependencyMap = obj.useNavigation();
  let obj2 = useIsScreenReaderEnabled;
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const ref = isScreenReaderEnabled.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    const tmp = isScreenReaderEnabled && null != ref.current;
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const obj = react_native;
      const result = obj.setAccessibilityFocus(obj2);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = isScreenReaderEnabled.useEffect(() => {
    if (metroImportDefault.NUF === trigger) {
      const obj2 = NewUserAnalyticsUtils;
      obj2.trackNUFStep(metroImportAll.STEP_GUILD_TEMPLATE, metroImportAll.STEP_CREATION_INTENT, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.OPEN_MODAL, { type: "Server Intent Discovery" });
    }
  }, items1);
  const tmp8 = closure_11;
  const rect = { top: true, left: true, right: true, style: tmp.contentContainer, children: tmp9(tmp10, obj3) };
  tmp9 = closure_12;
  obj3 = { style: tmp.scrollContainer, children: items3 };
  let obj4 = { style: tmp.headerContainer, children: items2 };
  const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
  let obj5 = { ref, style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl8.t.f3MvGS) };
  const Text = Text_Text.Text;
  intl = intl8.intl;
  items2 = [closure_11(Text, obj5), ];
  let obj6 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: intl2.string(intl8.t.nOzc7w) };
  const Text2 = Text_Text.Text;
  intl2 = intl8.intl;
  items2[1] = closure_11(Text2, obj6);
  items3 = [closure_12(ref, obj4), , ];
  const obj8 = { hasIcons: true, children: null };
  const obj7 = { style: tmp.sections, children: tmp9(TableRowGroup, tmp15) };
  TableRowGroup = TableRowGroup2.TableRowGroup;
  const tmp13 = trigger(11807);
  const obj9 = { Icon: null, message: null, onPress: null };
  tmp10 = onPress;
  const tmp11 = ref;
  if (closure_14) {
    obj9.Icon = ChairIllocon.ChairIllocon;
    const intl5 = intl8.intl;
    obj9.message = intl5.string(intl8.t.uE7zcu);
    obj9.onPress = function onPress() {
      onPress(false);
    };
    const items4 = [tmp8(tmp13, obj9), ];
    const obj10 = {
      Icon: WorldIllocon.WorldIllocon,
      message: intl6.string(intl8.t.h9Q1lG),
      onPress() {
          onPress(true);
        }
    };
    const tmp12Result = trigger(11807);
    intl6 = intl8.intl;
    items4[1] = tmp8(tmp12Result, obj10);
    obj8.children = items4;
    tmp15 = obj8;
  } else {
    obj9.Icon = WorldIllocon.WorldIllocon;
    const intl3 = intl8.intl;
    obj9.message = intl3.string(intl8.t.h9Q1lG);
    obj9.onPress = function onPress() {
      onPress(true);
    };
    const items5 = [tmp8(tmp13, obj9), ];
    const obj11 = {
      Icon: ChairIllocon.ChairIllocon,
      message: intl4.string(intl8.t.uE7zcu),
      onPress() {
          onPress(false);
        }
    };
    const tmp12Result2 = trigger(11807);
    intl4 = intl8.intl;
    items5[1] = tmp8(tmp12Result2, obj11);
    obj8.children = items5;
    tmp15 = obj8;
  }
  items3[1] = tmp8(tmp11, obj7);
  const obj12 = { style: tmp.skipDescription, variant: "text-sm/medium", color: "text-default", children: intl7.format(intl8.t["SMc+Gz"], obj13) };
  const Text3 = Text_Text.Text;
  intl7 = intl8.intl;
  obj13 = {
    onSkip() {
      onPress(null);
    }
  };
  items3[2] = tmp8(Text3, obj12);
  return tmp8(SafeAreaPaddingView, rect);
};
