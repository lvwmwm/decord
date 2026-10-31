// Module ID: 7573
// Function ID: 7574
// Name: GiftCardMobileConsumptionActionSheet
// Dependencies: [19, 17, 4860, 21, 5014, 575, 1625, 5258, 5272, 6027, 7574, 5624, 1113, 2238, 5634, 2]
// Exports: default

// Module 7573 (GiftCardMobileConsumptionActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1625 */;
import _modDef2238 from "module_2238" /* 2238 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let BottomSheet, dependencyMap, importDefault;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let react = react_mod;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { sheet: obj2, container: obj3, illustration: obj4, body: { textAlign: "center", fontFamily: "gg sans", fontSize: 16, fontWeight: 600, lineHeight: 20, alignSelf: "center", width: 280 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { alignSelf: "stretch", alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
const result = size.fileFinishedImporting("modules/checkout/native/GiftCardMobileConsumptionActionSheet.tsx");

export default function GiftCardMobileConsumptionActionSheet(markAsDismissed) {
  let Stack;
  let closure_2;
  let closure_3;
  let intl;
  let intl2;
  let items2;
  let items3;
  let obj2;
  let obj3;
  let ref;
  markAsDismissed = markAsDismissed.markAsDismissed;
  react = undefined;
  const tmp = closure_8();
  const bottom = useSafeAreaInsetsDefault().bottom;
  importDefault = react.useRef(false);
  dependencyMap = react.useRef(markAsDismissed);
  const items = [markAsDismissed];
  const effect = react.useEffect(() => {
    closure_2.current = markAsDismissed;
  }, items);
  const effect1 = react.useEffect(() => {
    let ref2;
    return () => {
      if (!ref.current) {
        ref2.current(constants.AUTO_DISMISS);
      }
    };
  }, []);
  const items1 = [markAsDismissed];
  react = react.useCallback((arg0) => {
    if (!ref.current) {
      tmp.current = true;
      markAsDismissed(arg0);
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  }, items1);
  let obj = {
    startExpanded: true,
    backgroundStyles: tmp.sheet,
    onDismiss() {
      return closure_3(ContentDismissActionType.USER_DISMISS);
    },
    children: closure_6(View, obj2)
  };
  obj2 = { style: items2, children: closure_7(Stack, obj3) };
  items2 = [tmp.container, { paddingBottom: bottom }];
  BottomSheet = markAsDismissed(5272).BottomSheet;
  obj3 = { spacing: nativeDefault.space.PX_16, children: items3 };
  Stack = markAsDismissed(6027).Stack;
  items3 = [, , ];
  const obj4 = { style: tmp.illustration, children: closure_6(markAsDismissed(7574).LaptopSpotIllustration, { scale: 1, width: 150, height: 123 }) };
  items3[0] = closure_6(View, obj4);
  const obj5 = { variant: "text-md/medium", color: "text-default", style: tmp.body, children: intl.string(_modDef2238.V3DI1E) };
  const Text = markAsDismissed(5624).Text;
  intl = markAsDismissed(1113).intl;
  items3[1] = closure_6(Text, obj5);
  const obj6 = {
    size: "lg",
    variant: "secondary",
    grow: true,
    text: intl2.string(_modDef2238.YZePWx),
    onPress() {
      return closure_3(ContentDismissActionType.USER_DISMISS);
    }
  };
  const Button = markAsDismissed(5634).Button;
  intl2 = markAsDismissed(1113).intl;
  items3[2] = closure_6(Button, obj6);
  return closure_6(BottomSheet, obj);
};
