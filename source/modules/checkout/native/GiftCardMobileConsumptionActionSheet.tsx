// Module ID: 5801
// Function ID: 49617
// Name: GiftCardMobileConsumptionActionSheet
// Dependencies: []
// Exports: default

// Module 5801 (GiftCardMobileConsumptionActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const ContentDismissActionType = arg1(dependencyMap[2]).ContentDismissActionType;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW };
obj.sheet = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.container = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
const obj2 = { 663976015: "handleHeaderLayout", 664037462: "gay-Latn-ID", paddingTop: importDefault(dependencyMap[5]).space.PX_12 };
obj.illustration = obj2;
obj.body = { 1616111827: 69, -1290341649: null, -657693324: 1, -1225038868: null, mn: "\u{1F9D4}\u200D\u2642\uFE0F", current: true, round: 13.1 };
let closure_8 = obj.createStyles(obj);
const obj1 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_16 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const arg1 = markAsDismissed;
  const tmp = callback3();
  const importDefault = React.useRef(false);
  let closure_2 = React.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = React.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = React.useEffect(() => () => {
    if (!ref.current) {
      ref2.current(constants.AUTO_DISMISS);
    }
  }, []);
  const items1 = [markAsDismissed];
  const React = React.useCallback((arg0) => {
    if (!ref.current) {
      ref.current = true;
      markAsDismissed(arg0);
      ref(closure_2[7]).hideActionSheet();
      const obj = ref(closure_2[7]);
    }
  }, items1);
  let obj = {
    startExpanded: true,
    backgroundStyles: tmp.sheet,
    onDismiss() {
      return callback(constants.USER_DISMISS);
    }
  };
  obj = { style: items2 };
  const items2 = [tmp.container, { paddingBottom: importDefault(closure_2[6])().bottom }];
  obj = { spacing: importDefault(closure_2[5]).space.PX_16 };
  const items3 = [callback(View, { style: tmp.illustration, children: callback(arg1(closure_2[10]).LaptopSpotIllustration, {}) }), , ];
  const obj2 = { style: tmp.body };
  const intl = arg1(closure_2[12]).intl;
  obj2.children = intl.string(importDefault(closure_2[13]).V3DI1E);
  items3[1] = callback(arg1(closure_2[11]).Text, obj2);
  const obj3 = {};
  const intl2 = arg1(closure_2[12]).intl;
  obj3.text = intl2.string(importDefault(closure_2[13]).YZePWx);
  obj3.onPress = function onPress() {
    return callback(constants.USER_DISMISS);
  };
  items3[2] = callback(arg1(closure_2[14]).Button, obj3);
  obj.children = items3;
  obj.children = callback2(arg1(closure_2[9]).Stack, obj);
  obj.children = callback(View, obj);
  return callback(arg1(closure_2[8]).BottomSheet, obj);
};
