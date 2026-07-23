// Module ID: 15203
// Function ID: 115733
// Name: WordTopic
// Dependencies: [5, 57, 31, 27, 15197, 15204, 33, 8940, 9070, 4645, 15205, 9076, 4633, 13547, 11069, 9029, 15206, 9411, 15208, 9413, 9834, 4130, 689, 3848, 4543, 1557, 1456, 15210, 1934, 8321, 3831, 1212, 566, 8330, 4126, 2]
// Exports: default

// Module 15203 (WordTopic)
import GuildPrimaryCategory from "GuildPrimaryCategory";
import _slicedToArray from "_slicedToArray";
import getSystemLocale from "getSystemLocale";
import get_ActivityIndicator from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { GuildPrimaryCategory } from "GuildPrimaryCategory";
import jsxProd from "listItemToType";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_6;
let closure_7;
const require = arg1;
function WordTopic(categoryid) {
  let importDefault;
  let selected;
  categoryid = categoryid.categoryid;
  ({ selected, handlePress: importDefault } = categoryid);
  if (GuildPrimaryCategory.GAMING === categoryid) {
    let tmp = callback2(categoryid(8940).GameControllerIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.ENTERTAINMENT === categoryid) {
    tmp = callback2(categoryid(9070).TvIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.GENERAL_CHATTING === categoryid) {
    tmp = callback2(categoryid(4645).ForumIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.SCIENCE_AND_TECH === categoryid) {
    tmp = callback2(categoryid(15205).ScienceIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.MUSIC === categoryid) {
    tmp = callback2(categoryid(9076).MusicIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.EDUCATION === categoryid) {
    tmp = callback2(categoryid(4633).BookCheckIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.CREATIVE_ARTS === categoryid) {
    tmp = callback2(categoryid(13547).PaintPaletteIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FINANCE === categoryid) {
    tmp = callback2(categoryid(11069).PiggyBankIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.BOTS === categoryid) {
    tmp = callback2(categoryid(9029).RobotIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.SPORTS === categoryid) {
    tmp = callback2(categoryid(15206).MedalIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.TRAVEL_AND_FOOD === categoryid) {
    tmp = callback2(categoryid(9411).FoodIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FASHION_AND_BEAUTY === categoryid) {
    tmp = callback2(categoryid(15208).PaintbrushThinIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (GuildPrimaryCategory.FITNESS_AND_HEALTH === categoryid) {
    tmp = callback2(categoryid(9413).BicycleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  } else if (16 === categoryid) {
    tmp = callback2(categoryid(9834).PencilSparkleIcon, { size: "md", color: "redesign-button-tertiary-text" });
  }
  let obj = categoryid(3848);
  const checkboxA11yNative = obj.useCheckboxA11yNative({ checked: selected });
  let tmp45Result = null;
  if (null != tmp) {
    obj = { accessibilityRole: tmp42, accessibilityState: tmp43 };
    let str = "tertiary";
    if (selected) {
      str = "primary";
    }
    obj.variant = str;
    obj.text = categoryid.topic;
    obj.onPress = function onPress() {
      return callback(categoryid);
    };
    obj.icon = tmp;
    tmp45Result = callback2(categoryid(4543).Button, obj);
    const tmp45 = callback2;
  }
  return tmp45Result;
}
({ View: closure_6, ScrollView: closure_7 } = get_ActivityIndicator);
({ jsx: closure_10, Fragment: closure_11, jsxs: closure_12 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER, flex: 1 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { position: "absolute", bottom: 0, left: require("_createForOfIteratorHelperLoose").space.PX_24, right: require("_createForOfIteratorHelperLoose").space.PX_24, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.footer = obj1;
_createForOfIteratorHelperLoose.title = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_24, marginBottom: require("_createForOfIteratorHelperLoose").space.PX_8, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.subtitle = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
let obj3 = { marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.separator = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
const obj5 = { flex: 1, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, flexWrap: "wrap", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.topicsContainer = obj5;
let obj4 = { height: get_ActivityIndicator.StyleSheet.hairlineWidth, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE };
_createForOfIteratorHelperLoose.scrollContentContainer = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj6 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_24 };
let result = require("result").fileFinishedImporting("modules/icymi/native/info_modal/ICYMITopicsScreen.tsx");

export default function ICYMITopicsScreen() {
  const tmp = _createForOfIteratorHelperLoose();
  const bottom = importDefault(1557)().bottom;
  const tmp3 = callback(React.useState(new Set()), 2);
  const first = tmp3[0];
  importDefault = tmp3[1];
  const tmp5 = callback(React.useState(false), 2);
  const dependencyMap = tmp5[1];
  const set = new Set();
  const useNavigation = first(1456).useNavigation;
  const navigation = useNavigation();
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [navigation, first];
  callback = React.useCallback(navigation(useNavigation), items);
  let obj = first(566);
  const items1 = [_isNativeReflectConstruct];
  const stateFromStoresArray = obj.useStateFromStoresArray(items1, () => outer1_8.getAllCategories());
  const items2 = [first];
  callback = React.useCallback((categoryId) => {
    const ICYMIAnalytics = first(table[33]).ICYMIAnalytics;
    const result = ICYMIAnalytics.trackFeedOnboardingCategoryToggled({ categoryId, toggled: !categoryId.has(categoryId) });
    if (categoryId.has(categoryId)) {
      tmp2((items) => {
        items.delete(closure_0);
        return new Set(items);
      });
    } else {
      tmp2((add) => {
        add.add(closure_0);
        return new Set(add);
      });
    }
  }, items2);
  obj = {};
  obj = { variant: "heading-xl/semibold", color: "mobile-text-heading-primary", style: tmp.title };
  const intl = first(1212).intl;
  obj.children = intl.string(first(1212).t.Y5d99L);
  const items3 = [callback2(first(4126).Text, obj), , , , ];
  const obj1 = { variant: "text-sm/normal", color: "text-muted", style: tmp.subtitle };
  const intl2 = first(1212).intl;
  obj1.children = intl2.string(first(1212).t.MGZsfv);
  items3[1] = callback2(first(4126).Text, obj1);
  items3[2] = callback2(closure_6, { style: tmp.separator });
  const obj3 = { showsVerticalScrollIndicator: false, style: tmp.container, contentContainerStyle: tmp.scrollContentContainer, contentInset: obj4 };
  const obj2 = { style: tmp.separator };
  obj4 = { bottom: 72 + bottom };
  const tmp10 = closure_11;
  const tmp6 = first(1456);
  const tmp9 = closure_12;
  obj3.children = callback2(closure_6, { style: tmp.topicsContainer, children: stateFromStoresArray.map((categoryId) => outer1_10(outer1_14, { selected: first.has(categoryId.categoryId), topic: categoryId.name, categoryid: categoryId.categoryId, handlePress: _slicedToArray }, categoryId.categoryId)) });
  items3[3] = callback2(closure_7, obj3);
  let tmp11 = first.size > 0;
  if (tmp11) {
    const obj6 = {};
    const obj7 = { marginBottom: bottom };
    const items4 = [obj7, tmp.footer];
    obj6.style = items4;
    const obj8 = { loading: tmp5[0], size: "lg" };
    const intl3 = first(1212).intl;
    obj8.text = intl3.string(first(1212).t.PDTjLN);
    obj8.onPress = callback;
    obj6.children = callback2(first(4543).Button, obj8);
    tmp11 = callback2(closure_6, obj6);
  }
  items3[4] = tmp11;
  obj.children = items3;
  return tmp9(tmp10, obj);
};
