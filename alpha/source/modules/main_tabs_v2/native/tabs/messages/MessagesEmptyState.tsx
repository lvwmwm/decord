// Module ID: 18097
// Function ID: 18098
// Name: MessagesEmptyState
// Dependencies: [19, 17, 21, 5014, 1497, 6028, 1260, 8773, 17064, 18098, 5624, 1113, 5634, 2]
// Exports: default

// Module 18097 (MessagesEmptyState)
import intl4 from "intl" /* 1113 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import useNavigation from "useNavigation" /* 1497 */;
import useTrackImpressionDefault from "useTrackImpression" /* 6028 */;
import useIsScreenLandscape from "useIsScreenLandscape" /* 8773 */;
import useYouBarTotalHeight from "useYouBarTotalHeight" /* 17064 */;
import ActivitiesTogetherSpotIllustration from "ActivitiesTogetherSpotIllustration" /* 18098 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let closure_8 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center" }, scrollViewContentContainer: { flexGrow: 2 }, innerContainer: { alignItems: "center", justifyContent: "center" }, imageContainer: { alignItems: "center", marginBottom: 24 }, textWrapper: { paddingHorizontal: 48 }, body: { marginBottom: 24, textAlign: "center" }, title: { textAlign: "center", fontSize: 18, marginBottom: 8 }, buttonWrapper: { paddingHorizontal: 16, paddingBottom: 16 } });
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/messages/MessagesEmptyState.tsx");

export default function MessagesEmptyState() {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let items4;
  let obj13;
  let obj6;
  const tmp = closure_8();
  const obj = useNavigation;
  navigation = obj.useNavigation();
  const items = [navigation];
  const callback = react.useCallback(() => {
    navigation.navigate("friends", { screen: "add-friends", params: { sourcePage: "Messages Empty State", presentation: "card" } });
  }, items);
  const obj2 = { type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, name: discord_common_AnalyticsUtils.ImpressionNames.MESSAGES_EMPTY_NUX };
  const tmp6 = useTrackImpressionDefault;
  tmp6(obj2);
  const obj3 = useIsScreenLandscape;
  const isScreenLandscape = obj3.useIsScreenLandscape();
  useYouBarTotalHeight;
  const items1 = [tmp.scrollViewContentContainer, ];
  let tmp13;
  const tmp12 = hasOwnProperty;
  if (isScreenLandscape) {
    tmp13 = { paddingBottom: tmp10 };
    const obj4 = { paddingBottom: tmp10 };
  }
  items1[1] = tmp13;
  const obj5 = { alwaysBounceVertical: false, bounces: false, contentContainerStyle: items1, children: metroImportDefault(React3, obj6) };
  const obj7 = { style: tmp.innerContainer, children: items2 };
  items2 = [, ];
  obj6 = { style: tmp.container, children: items4 };
  const obj8 = { style: tmp.imageContainer, children: metroRequire(ActivitiesTogetherSpotIllustration.ActivitiesTogetherSpotIllustration, { width: 230, accessible: false }) };
  items2[0] = metroRequire(React3, obj8);
  const obj9 = { style: tmp.textWrapper, children: items3 };
  const obj10 = { color: "mobile-text-heading-primary", variant: "heading-md/bold", style: tmp.title, children: intl.string(intl4.t["8JZof8"]) };
  const Heading = tmp2(5624).Heading;
  intl = tmp2(1113).intl;
  items3 = [metroRequire(Heading, obj10), ];
  const obj11 = { color: "text-default", variant: "text-md/medium", style: tmp.body, children: intl2.string(intl4.t["qm+H7x"]) };
  const Text = tmp2(5624).Text;
  intl2 = tmp2(1113).intl;
  items3[1] = metroRequire(Text, obj11);
  items2[1] = metroImportDefault(React3, obj9);
  items4 = [metroImportDefault(React3, obj7), ];
  const obj12 = { style: tmp.buttonWrapper, children: metroRequire(Button, obj13) };
  obj13 = { text: intl3.string(intl4.t.zIJnA6), onPress: callback, size: "lg" };
  Button = tmp2(5634).Button;
  intl3 = tmp2(1113).intl;
  items4[1] = metroRequire(React3, obj12);
  return metroRequire(tmp12, obj5);
};
