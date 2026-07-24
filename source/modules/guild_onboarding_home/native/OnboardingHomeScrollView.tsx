// Module ID: 15325
// Function ID: 116864
// Name: OnboardingHomeScrollView
// Dependencies: [31, 27, 33, 4130, 689, 1557, 2]
// Exports: default

// Module 15325 (OnboardingHomeScrollView)
import result from "result";
import { ScrollView } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.guildFeedBackground = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/guild_onboarding_home/native/OnboardingHomeScrollView.tsx");

export default function OnboardingHomeScrollView(children) {
  let guildId;
  let headerOffset;
  ({ guildId, headerOffset } = children);
  if (headerOffset === undefined) {
    headerOffset = 0;
  }
  const scrollValue = children.scrollValue;
  let React;
  let ref;
  let bottom;
  let _createForOfIteratorHelperLoose;
  React = React.useRef(false);
  ref = React.useRef(null);
  bottom = headerOffset(scrollValue[5])().bottom;
  const items = [guildId];
  const effect = React.useEffect(() => {
    result.current = false;
  }, items);
  _createForOfIteratorHelperLoose = React.useRef(true);
  const items1 = [guildId];
  const effect1 = React.useEffect(() => {
    let current = null == ref.current;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      const current2 = ref.current;
      current2.scrollTo({ animated: false, y: 0 });
    }
    ref.current = false;
  }, items1);
  const items2 = [bottom, headerOffset];
  const tmp = _createForOfIteratorHelperLoose();
  return bottom(ref, {
    ref,
    scrollIndicatorInsets: { right: 1 },
    onScroll(nativeEvent) {
      const result = scrollValue.set(nativeEvent.nativeEvent.contentOffset.y);
    },
    scrollEventThrottle: 16,
    style: _createForOfIteratorHelperLoose().guildFeedBackground,
    contentContainerStyle: React.useMemo(() => ({ paddingBottom: 16 + bottom, marginTop: headerOffset }), items2),
    children: children.children
  });
};
