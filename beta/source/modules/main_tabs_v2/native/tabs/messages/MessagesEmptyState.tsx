// Module ID: 15686
// Function ID: 15687
// Name: MessagesEmptyState
// Dependencies: [32, 19, 17, 21, 4836, 1479, 1485, 8230, 1249, 5438, 14629, 15687, 4832, 1115, 5281, 2]
// Exports: default

// Module 15686 (MessagesEmptyState)
import intl4 from "intl" /* 1115 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useNavigation from "useNavigation" /* 1485 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 5438 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8230 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 14629 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let navigation;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let tmp2;
const AssetRegistryDefault = tmp2(15687);
({ View: hasOwnProperty, Image: metroRequire, ScrollView: metroImportDefault } = react_native);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
let size = size_mod;
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default function MessagesEmptyState() {
  let Button;
  let closure_129_0;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj5;
  let obj8;
  let tmp21;
  let tmp5;
  const tmp = closure_10();
  let width = useWindowDimensionsDefault().width;
  [tmp5, closure_129_0] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const callback = react.useCallback((nativeEvent) => {
    closure_1_0(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback1 = react.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX };
  const tmp10 = useTrackImpressionDefault;
  tmp10(obj2);
  if (tmp5 > 0) {
    width = tmp5;
  }
  const result = 0.9 * width;
  const tmp7Result = useIsScreenLandscape;
  const isScreenLandscape = tmp7Result.useIsScreenLandscape();
  useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp18;
  const tmp17 = metroImportDefault;
  if (isScreenLandscape) {
    tmp18 = { paddingBottom: tmp15 };
    const obj3 = { paddingBottom: tmp15 };
  }
  items1[1] = tmp18;
  const obj4 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: React4(hasOwnProperty, obj5) };
  obj5 = { style: tmp.container, onLayout: callback, children: items4 };
  const obj6 = { style: tmp.innerContainer, children: items2 };
  const obj7 = { style: tmp.imageContainer, children: metroImportAll(tmp21, obj8) };
  let num = 350;
  obj8 = { resizeMode: "contain", source: AssetRegistryDefault, style: size };
  tmp21 = metroRequire;
  if (result < 622) {
    num = result / 622 * 350;
  }
  size = { height: num, width: Math.min(result, 622) };
  items2 = [metroImportAll(hasOwnProperty, obj7), ];
  const obj9 = { style: tmp.textWrapper, children: items3 };
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: intl.string(intl4.t["8JZof8"]) };
  const Heading = tmp7(4832).Heading;
  intl = tmp7(1115).intl;
  items3 = [metroImportAll(Heading, obj10), ];
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: intl2.string(intl4.t["qm+H7x"]) };
  const Text = tmp7(4832).Text;
  intl2 = tmp7(1115).intl;
  items3[1] = metroImportAll(Text, obj11);
  items2[1] = React4(hasOwnProperty, obj9);
  items4 = [React4(hasOwnProperty, obj6), ];
  const obj12 = { style: tmp.buttonWrapper, children: metroImportAll(Button, obj13) };
  obj13 = { text: intl3.string(intl4.t.zIJnA6), onPress: callback1, size: "lg" };
  Button = tmp7(5281).Button;
  intl3 = tmp7(1115).intl;
  items4[1] = metroImportAll(hasOwnProperty, obj12);
  return metroImportAll(tmp17, obj4);
};
