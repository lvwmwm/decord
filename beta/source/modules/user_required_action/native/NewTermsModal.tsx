// Module ID: 17286
// Function ID: 17287
// Name: NewTermsModal
// Dependencies: [5, 32, 19, 17, 2037, 1074, 21, 4836, 576, 6615, 1115, 6010, 1613, 5942, 5276, 7626, 8230, 1249, 4832, 5281, 9203, 9091, 2]
// Exports: default

// Module 17286 (NewTermsModal)
import nativeDefault from "native" /* 576 */;
import intl10 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import AuthenticationActionCreatorsDefault from "AuthenticationActionCreators" /* 6010 */;
import showSimpleActionSheet2 from "showSimpleActionSheet" /* 6615 */;
import useTrackImpressionDefault from "useTrackImpression" /* 8230 */;
import AssetRegistryDefault from "AssetRegistry" /* 9091 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9203 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserRequiredActionStore from "UserRequiredActionStore" /* 2037 */;
import Constants from "Constants" /* 1074 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c2, c3, dependencyMap;

let c10;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let unpackModuleId;
function handleTouch() {
  metroImportDefault.dismiss();
}
function handleMoreActions() {
  let intl;
  let items;
  let obj = { key: "NewTermsModalMore", options: items, hasIcons: false };
  const obj2 = {
    label: intl.string(intl10.t["2jxGer"]),
    isDestructive: true,
    onPress() {
      const obj = AuthenticationActionCreatorsDefault;
      return obj.logout("new_terms_modal");
    }
  };
  const showSimpleActionSheet = showSimpleActionSheet2.showSimpleActionSheet;
  showSimpleActionSheet2;
  intl = intl10.intl;
  items = [obj2];
  const result = showSimpleActionSheet(obj);
}
({ View: metroRequire, Keyboard: metroImportDefault, ScrollView: metroImportAll } = react_native);
({ MarketingURLs: c10, UserRequiredActions: unpackModuleId } = Constants);
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { contentContainer: obj2, scrollView: { flex: 1 }, container: obj3, description: obj4, agreementDescription: obj5, navbarRight: obj6, stickyFooter: obj7 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, flexGrow: 1, display: "flex", alignContent: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, flex: 1 };
obj4 = { marginTop: nativeDefault.space.PX_24, marginBottom: nativeDefault.space.PX_24 };
obj5 = { marginTop: nativeDefault.space.PX_24 };
obj6 = { position: "absolute", right: 0, tintColor: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj7 = { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, marginTop: nativeDefault.space.PX_24, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_14 = createStyles(obj);
let result = size.fileFinishedImporting("modules/user_required_action/native/NewTermsModal.tsx");

export default function NewTermsModal() {
  let Button;
  let action;
  let closure_1;
  let closure_2;
  let first;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj12;
  let obj14;
  let obj16;
  let obj19;
  let obj8;
  let tmp = closure_14();
  const tmp3 = dependencyMap;
  const rect = useSafeAreaInsetsDefault();
  const top = rect.top;
  const bottom = rect.bottom;
  const memo = react.useMemo(() => action.getAction(), []);
  [first, importDefault] = react.useState(false);
  let obj = memo(5942);
  obj.useNavigatorBackPressHandler(memo(5276).BackPressHandler.minimize);
  dependencyMap = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            tmp = undefined;
            tmp4(true);
            const obj2 = tmp(c2[15]);
            c2 = 1;
            c3 = 1;
            const obj5 = { value: obj2.acceptAgreements(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          closure_129_1(tmp);
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        c3 = 3;
        throw tmp14;
      }
    }
  }), []);
  let obj2 = { type: memo(1249).ImpressionTypes.VIEW, name: memo(1249).ImpressionNames.USER_AGREEMENTS, properties: { required_action: memo } };
  const tmp9 = useTrackImpressionDefault;
  tmp9(obj2, {}, []);
  let tmp11 = null;
  if (null != memo) {
    let obj3 = { style: items, children: items3 };
    items = [tmp.container, ];
    let obj4 = { paddingTop: top, paddingBottom: bottom };
    items[1] = obj4;
    const tmp14 = closure_8;
    let obj5 = { style: items1, contentContainerStyle: tmp.contentContainer, onTouchStart: handleTouch, children: items2 };
    items1 = [tmp.scrollView];
    const obj6 = { maxFontSizeMultiplier: 2, variant: "heading-xxl/bold", children: intl.string(memo(1115).t["7glvXu"]) };
    const Text = tmp7(4832).Text;
    intl = tmp7(1115).intl;
    items2 = [closure_12(Text, obj6), , , , , , ];
    const obj7 = { variant: "text-md/normal", style: tmp.description, children: intl2.format(memo(1115).t.CN0Hvb, obj8) };
    const Text2 = tmp7(4832).Text;
    intl2 = tmp7(1115).intl;
    obj8 = { url: constants.TERMS_SUMMARY };
    items2[1] = closure_12(Text2, obj7);
    const obj9 = { variant: "text-md/normal", children: intl3.format(memo(1115).t.iw0hFi, obj10) };
    const Text3 = tmp7(4832).Text;
    intl3 = tmp7(1115).intl;
    obj10 = { url: constants.TERMS };
    items2[2] = closure_12(Text3, obj9);
    const obj11 = { variant: "text-md/normal", children: intl4.format(memo(1115).t["36klnD"], obj12) };
    const Text4 = tmp7(4832).Text;
    intl4 = tmp7(1115).intl;
    obj12 = { url: constants.PAID_TERMS };
    items2[3] = closure_12(Text4, obj11);
    const obj13 = { variant: "text-md/normal", children: intl5.format(memo(1115).t.TquFBF, obj14) };
    const Text5 = tmp7(4832).Text;
    intl5 = tmp7(1115).intl;
    obj14 = { url: constants.PRIVACY };
    items2[4] = closure_12(Text5, obj13);
    const obj15 = { variant: "text-md/normal", children: intl6.format(memo(1115).t.ia96Tb, obj16) };
    const Text6 = tmp7(4832).Text;
    intl6 = tmp7(1115).intl;
    obj16 = { url: constants.GUIDELINES };
    items2[5] = closure_12(Text6, obj15);
    const obj17 = { variant: "text-md/normal", style: tmp.agreementDescription, children: intl7.string(memo(1115).t["+USXQE"]) };
    const Text7 = tmp7(4832).Text;
    intl7 = tmp7(1115).intl;
    items2[6] = closure_12(Text7, obj17);
    items3 = [closure_13(closure_8, obj5), , ];
    const obj18 = { style: tmp.stickyFooter, children: closure_12(Button, obj19) };
    obj19 = {
      loading: first,
      onPress() {
          if (memo === unpackModuleId.AGREEMENTS) {
            closure_2();
          }
        },
      text: intl8.string(memo(1115).t["+TBKL1"])
    };
    Button = tmp7(5281).Button;
    intl8 = tmp7(1115).intl;
    items3[1] = closure_12(closure_6, obj18);
    const obj20 = { style: items4, source: AssetRegistryDefault, color: tmp.navbarRight.tintColor, onPress: handleMoreActions, accessibilityRole: "button", accessibilityLabel: intl9.string(memo(1115).t["UKOtz+"]) };
    items4 = [tmp.navbarRight, ];
    const obj21 = { top };
    items4[1] = obj21;
    const tmp2Result = TouchableHitBoxDefault;
    intl9 = tmp7(1115).intl;
    items3[2] = closure_12(tmp2Result, obj20);
    tmp11 = closure_13(closure_6, obj3);
  }
  return tmp11;
};
