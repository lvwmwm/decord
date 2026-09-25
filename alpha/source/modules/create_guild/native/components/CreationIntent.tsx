// Module ID: 12204
// Function ID: 12205
// Name: CreationIntent
// Dependencies: [19, 17, 6394, 1074, 21, 4829, 5989, 576, 1484, 5259, 5268, 12162, 1241, 6539, 4825, 1115, 5994, 11793, 12205, 12207, 2]
// Exports: default

// Module 12204 (CreationIntent)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import useNavigation from "useNavigation" /* 1484 */;
import Text_Text from "Text/Text" /* 4825 */;
import useIsScreenReaderEnabled from "useIsScreenReaderEnabled" /* 5259 */;
import setAccessibilityFocus from "setAccessibilityFocus" /* 5268 */;
import TableRowGroup from "TableRowGroup" /* 5994 */;
import common_SafeAreaView from "common/SafeAreaView" /* 6539 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12162 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const CreateGuildConstants = fn(6394);
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: closure_7, NUXGuildTemplatesAnalytics: closure_8 } = CreateGuildConstants);
const Constants = fn(1074);
({ AnalyticEvents: closure_9, AnalyticsLocations: c10 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { contentContainer: { flex: 1, marginTop: fn(5989).NAV_BAR_HEIGHT }, scrollContainer: null, headerContainer: null, headerTitle: null, headerDescription: null, sections: null, skipDescription: null };
let obj3 = { flex: 1, marginTop: fn(5989).NAV_BAR_HEIGHT };
obj2.scrollContainer = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.headerContainer = { alignItems: "center", paddingVertical: 20, paddingHorizontal: 16 };
obj2.headerTitle = { textAlign: "center", marginBottom: 8 };
obj2.headerDescription = { lineHeight: 18, textAlign: "center" };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj2.sections = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING };
obj2.skipDescription = { marginTop: 16, paddingHorizontal: 16, lineHeight: 18, textAlign: "center" };
let closure_13 = createStyles.createStyles(obj2);
let closure_14 = Math.random() < 0.5;
const size = fn(2);
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreationIntent.tsx");

export default function CreationIntent(arg0) {
  ({ guildTemplate: require, trigger } = arg0);
  function onPress(isCommunityIntent) {
    const obj2 = { skipped: null == isCommunityIntent, is_community: null };
    let flag = isCommunityIntent;
    if (isCommunityIntent == null) {
      flag = false;
    }
    obj2.is_community = flag;
    AnalyticsUtilsDefault.track(constants4.GUILD_CREATION_INTENT_SELECTED, obj2);
    closure_2.push(constants.CREATE_SERVER, { guildTemplate, isCommunityIntent });
    if (constants2.NUF === trigger) {
      NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_CREATION_INTENT, constants3.STEP_GUILD_CREATE, { skip: false });
      let id;
      if (tmp5 != null) {
        id = tmp5.id;
      }
      const obj5 = { guild_template_name: id };
      tmp(1241).track(tmp3.CREATE_GUILD_VIEWED, obj5);
      const tmpResult = tmp(1241);
    } else if (tmp8.IN_APP === tmp7) {
      const obj6 = { type: "Create Guild Step 2", location_section: constants5.CREATE_JOIN_GUILD_MODAL };
      tmp(1241).track(tmp3.OPEN_MODAL, obj6);
      const tmpResult3 = tmp(1241);
      const obj7 = { location_section: constants5.CREATE_JOIN_GUILD_MODAL, guild_template_name: null };
      let id1;
      if (tmp5 != null) {
        id1 = tmp5.id;
      }
      obj7.guild_template_name = id1;
      tmp(1241).track(tmp3.CREATE_GUILD_VIEWED, obj7);
      const tmpResult4 = tmp(1241);
    }
  }
  let tmp = closure_13();
  dependencyMap = useNavigation.useNavigation();
  const isScreenReaderEnabled = useIsScreenReaderEnabled.useIsScreenReaderEnabled();
  const ref = isScreenReaderEnabled.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = isScreenReaderEnabled.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      const obj2 = { ref, delay: 100 };
      const result = setAccessibilityFocus.setAccessibilityFocus(obj2);
    }
  }, items);
  const items1 = [trigger];
  const effect1 = isScreenReaderEnabled.useEffect(() => {
    if (constants2.NUF === trigger) {
      NewUserAnalyticsUtils.trackNUFStep(constants3.STEP_GUILD_TEMPLATE, constants3.STEP_CREATION_INTENT, { skip: false });
    } else if (tmp2.IN_APP === tmp) {
      AnalyticsUtilsDefault.track(constants4.OPEN_MODAL, { type: "Server Intent Discovery" });
    }
  }, items1);
  const rect = { top: true, left: true, right: true, style: tmp.contentContainer, children: null };
  const obj3 = { style: tmp.scrollContainer, children: null };
  let obj4 = { style: tmp.headerContainer, children: null };
  let obj5 = { ref, style: tmp.headerTitle, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.f3MvGS);
  const items2 = [closure_11(Text_Text.Text, obj5), ];
  let obj6 = { style: tmp.headerDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj6.children = intl2.string(util.t.nOzc7w);
  items2[1] = closure_11(Text_Text.Text, obj6);
  obj4.children = items2;
  const items3 = [closure_12(ref, obj4), , ];
  let obj7 = { style: tmp.sections, children: null };
  const obj8 = { hasIcons: true, children: null };
  const tmp13 = trigger(11793);
  const obj9 = { Icon: null, message: null, onPress: null };
  if (closure_14) {
    obj9.Icon = tmp2(12205).ChairIllocon;
    const intl5 = tmp2(1115).intl;
    obj9.message = intl5.string(tmp2(1115).t.uE7zcu);
    obj9.onPress = function onPress() {
      onPress(false);
    };
    const items4 = [tmp8(tmp13, obj9), ];
    const obj10 = { Icon: tmp2(12207).WorldIllocon, message: null, onPress: null };
    const intl6 = tmp2(1115).intl;
    obj10.message = intl6.string(tmp2(1115).t.h9Q1lG);
    obj10.onPress = function onPress() {
      onPress(true);
    };
    items4[1] = tmp8(tmp12(11793), obj10);
    obj8.children = items4;
    let tmp15 = obj8;
    const tmp12Result = tmp12(11793);
  } else {
    obj9.Icon = tmp2(12207).WorldIllocon;
    const intl3 = tmp2(1115).intl;
    obj9.message = intl3.string(tmp2(1115).t.h9Q1lG);
    obj9.onPress = function onPress() {
      onPress(true);
    };
    const items5 = [tmp8(tmp13, obj9), ];
    const obj11 = { Icon: tmp2(12205).ChairIllocon, message: null, onPress: null };
    const intl4 = tmp2(1115).intl;
    obj11.message = intl4.string(tmp2(1115).t.uE7zcu);
    obj11.onPress = function onPress() {
      onPress(false);
    };
    items5[1] = tmp8(tmp12(11793), obj11);
    obj8.children = items5;
    tmp15 = obj8;
    const tmp12Result2 = tmp12(11793);
  }
  obj7.children = closure_12(TableRowGroup.TableRowGroup, tmp15);
  items3[1] = closure_11(ref, obj7);
  const obj12 = { style: tmp.skipDescription, variant: "text-sm/medium", color: "text-default", children: null };
  const intl7 = tmp2(1115).intl;
  obj12.children = intl7.format(util.t["SMc+Gz"], {
    onSkip() {
      onPress(null);
    }
  });
  items3[2] = closure_11(Text_Text.Text, obj12);
  obj3.children = items3;
  rect.children = closure_12(onPress, obj3);
  return closure_11(common_SafeAreaView.SafeAreaPaddingView, rect);
};
