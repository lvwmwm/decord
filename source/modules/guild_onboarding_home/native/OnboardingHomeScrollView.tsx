// Module ID: 15152
// Function ID: 114296
// Name: OnboardingHomeScrollView
// Dependencies: []
// Exports: default

// Module 15152 (OnboardingHomeScrollView)
let closure_2 = importAll(dependencyMap[0]);
const ScrollView = arg1(dependencyMap[1]).ScrollView;
const jsx = arg1(dependencyMap[2]).jsx;
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH };
obj.guildFeedBackground = obj;
let closure_5 = obj.createStyles(obj);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx");

export default function OnboardingHomeScrollView(children) {
  let guildId;
  let headerOffset;
  ({ guildId, headerOffset } = children);
  if (headerOffset === undefined) {
    headerOffset = 0;
  }
  const importDefault = headerOffset;
  const dependencyMap = children.scrollValue;
  let React;
  let ScrollView;
  let jsx;
  let callback;
  React = React.useRef(false);
  const ref = React.useRef(null);
  ScrollView = ref;
  const bottom = importDefault(dependencyMap[5])().bottom;
  jsx = bottom;
  const items = [guildId];
  const effect = React.useEffect(() => {
    closure_2.current = false;
  }, items);
  callback = React.useRef(true);
  const items1 = [guildId];
  const effect1 = React.useEffect(() => {
    let current = null == ref.current;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const current2 = ref.current;
      current2.scrollTo({ isArray: "<string:1196490754>", width: "<string:3310486038>" });
    }
    ref.current = false;
  }, items1);
  const items2 = [bottom, headerOffset];
  const tmp = callback();
  return <ScrollView ref={ref} scrollIndicatorInsets={{ right: 1 }} onScroll={function onScroll(nativeEvent) {
    const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
  }} scrollEventThrottle={16} style={callback().guildFeedBackground} contentContainerStyle={React.useMemo(() => ({ paddingBottom: 16 + bottom, marginTop: headerOffset }), items2)}>{arg0.children}</ScrollView>;
};
