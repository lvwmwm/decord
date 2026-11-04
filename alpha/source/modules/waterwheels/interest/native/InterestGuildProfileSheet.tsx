// Module ID: 19850
// Function ID: 19851
// Name: InterestGuildProfileSheet
// Dependencies: [32, 19, 17, 1072, 21, 5141, 575, 5377, 5732, 8882, 1493, 1627, 19851, 671, 9442, 19852, 19853, 5396, 5723, 5400, 5731, 2]
// Exports: default

// Module 19850 (InterestGuildProfileSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useThemeDefault from "useTheme" /* 5377 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5396 */;
import BottomSheetModal from "BottomSheetModal" /* 5400 */;
import LinearGradientDefault from "LinearGradient" /* 5723 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5731 */;
import InterestGuildProfileBannerDefault from "InterestGuildProfileBanner" /* 19852 */;
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton" /* 19853 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5141 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let tmp;
const GuildProfileSheetBodyDefault = tmp(9442);
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((paddingBottom, paddingBottom2) => {
  let obj3;
  let obj7;
  const obj = { body: { paddingBottom: nativeDefault.space.PX_8 }, footer: obj3, footerContent: { paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 }, footerStack: { gap: nativeDefault.space.PX_8 }, scrollView: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, scrollContent: obj7 };
  obj3 = { paddingBottom };
  ({ paddingBottom: nativeDefault.space.PX_8 });
  ({ paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16 });
  ({ gap: nativeDefault.space.PX_8 });
  obj7 = { paddingBottom: paddingBottom2 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  return obj;
});
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildProfileSheet.tsx");

export default function InterestGuildProfileSheet(guildId) {
  let _undefined;
  let _undefined2;
  let backgroundColor;
  let c7;
  let c8;
  let guildName;
  let joins;
  let sum;
  let tmp7;
  let tmp9;
  guildId = guildId.guildId;
  ({ guildName: importDefault, joins: dependencyMap } = guildId);
  c7 = undefined;
  c8 = undefined;
  let interestGuildProfileSheetLayout;
  let closure_10;
  let onLayout;
  let onLayout2;
  let colors;
  let tmp = importDefault;
  const tmp3 = useThemeDefault();
  let obj = guildId(5732);
  _slicedToArray = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp3);
  let obj2 = guildId(5732);
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj3 = guildId(8882);
  const bottomSheetRef1 = obj3.useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj4 = token;
  [tmp7, c7] = token.useState(0);
  _slicedToArray(token.useState(0), 2);
  [tmp9, c8] = token.useState(0);
  _slicedToArray(token.useState(0), 2);
  let obj5 = { windowHeight: height, contentHeight: tmp7, footerHeight: sum, safeAreaBottom: bottom };
  const getInterestGuildProfileSheetLayout = guildId(19851).getInterestGuildProfileSheetLayout;
  guildId(19851);
  if (sum <= 0) {
    sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_32;
  }
  interestGuildProfileSheetLayout = getInterestGuildProfileSheetLayout(obj5);
  closure_10 = interestGuildProfileSheetLayout(bottom, interestGuildProfileSheetLayout.reservedBottom);
  onLayout = obj4.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.height);
  }, []);
  onLayout2 = obj4.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.height);
  }, []);
  let items = [interestGuildProfileSheetLayout.height, bottomSheetRef];
  const effect = obj4.useEffect(() => {
    let ref;
    let closure_0 = requestAnimationFrame(() => {
      const current = ref.current;
      let expandActionSheetResult;
      if (current != null) {
        expandActionSheetResult = current.expandActionSheet();
      }
      return expandActionSheetResult;
    });
    return () => cancelAnimationFrame(closure_0);
  }, items);
  const items1 = [token];
  colors = obj4.useMemo(() => {
    const items = [, ];
    const obj = _modDef671(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = token;
    return items;
  }, items1);
  let obj6 = {
    guildId,
    onClose: bottomSheetClose,
    banner(guildProfile) {
      const obj = { profile: guildProfile };
      return _undefined(InterestGuildProfileBannerDefault, obj);
    },
    disableNameNavigation: true,
    footer() {
      let obj2;
      const obj = { style: closure_10.footerStack, children: metroImportDefault(InterestGuildJoinButtonDefault, obj2) };
      obj2 = { guildId, guildName: importDefault, joins: dependencyMap, fullWidth: true };
      return metroImportDefault(View, obj);
    },
    children(children, children2) {
      let items;
      let obj2;
      let obj3;
      let obj5;
      let obj7;
      let tmp;
      const obj = { ref: bottomSheetRef, scrollable: true, startExpanded: true, startHeight: interestGuildProfileSheetLayout.height, maxHeight: interestGuildProfileSheetLayout.height, handleDisabled: true, footer: metroImportDefault(tmp, obj2), children: items };
      const BottomSheet = Sheet_BottomSheet.BottomSheet;
      obj2 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: closure_10.footer, colors, children: metroImportDefault(View, obj3) };
      obj3 = { onLayout: onLayout2, style: closure_10.footerContent, children: children2 };
      tmp = LinearGradientDefault;
      const obj4 = { enableFooterMarginAdjustment: false, scrollEnabled: interestGuildProfileSheetLayout.scrollable, contentContainerStyle: closure_10.scrollContent, style: closure_10.scrollView, children: metroImportDefault(View, obj5) };
      obj5 = { onLayout, style: closure_10.body, children };
      const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
      items = [metroImportDefault(BottomSheetScrollView, obj4), ];
      const obj6 = { variant: "floating", tabStyle: obj7, onPress: bottomSheetClose };
      obj7 = { backgroundColor };
      items[1] = metroImportDefault(ActionSheetHeaderBar.ActionSheetHeaderBar, obj6);
      return metroImportAll(BottomSheet, obj);
    }
  };
  return c7(GuildProfileSheetBodyDefault, obj6);
};
