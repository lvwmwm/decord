// Module ID: 16202
// Function ID: 16203
// Name: OnboardingHomeScrollView
// Dependencies: [19, 17, 21, 4836, 576, 1613, 2]
// Exports: default

// Module 16202 (OnboardingHomeScrollView)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const ScrollView = react_native.ScrollView;
const jsx = Fragment.jsx;
const obj = { guildFeedBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH } };
({ backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
let closure_5 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx");

export default function OnboardingHomeScrollView(scrollValue) {
  let guildId;
  let headerOffset;
  ({ guildId, headerOffset } = scrollValue);
  if (headerOffset === undefined) {
    headerOffset = 0;
  }
  scrollValue = scrollValue.scrollValue;
  closure_5 = undefined;
  const children = scrollValue.children;
  let tmp = closure_5();
  let closure_2 = react.useRef(false);
  const ref = react.useRef(null);
  const bottom = useSafeAreaInsetsDefault().bottom;
  const items = [guildId];
  const effect = react.useEffect(() => {
    closure_2.current = false;
  }, items);
  closure_5 = react.useRef(true);
  const items1 = [guildId];
  const effect1 = react.useEffect(() => {
    let current = null == ref.current;
    const tmp = ref;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const current2 = tmp.current;
      current2.scrollTo({ animated: false, y: 0 });
    }
    ref.current = false;
  }, items1);
  const items2 = [bottom, headerOffset];
  return <ScrollView ref={ref} scrollIndicatorInsets={{ right: 1 }} onScroll={function onScroll(nativeEvent) {
    const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
  }} scrollEventThrottle={16} style={tmp.guildFeedBackground} contentContainerStyle={react.useMemo(() => ({ paddingBottom: 16 + bottom, marginTop: headerOffset }), items2)}>{children}</ScrollView>;
};
