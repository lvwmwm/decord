// Module ID: 19889
// Function ID: 19890
// Name: InterestGuildProfileSheet
// Dependencies: [32, 19, 17, 1072, 21, 5170, 575, 5399, 5754, 8833, 1493, 1627, 19890, 671, 9395, 19891, 19892, 5418, 5745, 5422, 5753, 2]
// Exports: default

// Module 19889 (InterestGuildProfileSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import useThemeDefault from "useTheme" /* 5399 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5418 */;
import BottomSheetModal from "BottomSheetModal" /* 5422 */;
import LinearGradientDefault from "LinearGradient" /* 5745 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5753 */;
import InterestGuildProfileBannerDefault from "InterestGuildProfileBanner" /* 19891 */;
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton" /* 19892 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let tmp;
const GuildProfileSheetBodyDefault = tmp(9395);
let react = react_mod;
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
  let c8;
  let c9;
  let guildName;
  let onJoinResult;
  let onJoinTapped;
  let sum;
  let tmp7;
  let tmp9;
  guildId = guildId.guildId;
  ({ guildName: importDefault, onJoinTapped: dependencyMap, onJoinResult: _slicedToArray } = guildId);
  c8 = undefined;
  c9 = undefined;
  let interestGuildProfileSheetLayout;
  let closure_11;
  let onLayout;
  let onLayout2;
  let colors;
  let tmp = importDefault;
  const tmp3 = useThemeDefault();
  let obj = guildId(5754);
  react = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp3);
  let obj2 = guildId(5754);
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj3 = guildId(8833);
  const bottomSheetRef1 = obj3.useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj4 = react;
  [tmp7, c8] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  [tmp9, c9] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  let obj5 = { windowHeight: height, contentHeight: tmp7, footerHeight: sum, safeAreaBottom: bottom };
  const getInterestGuildProfileSheetLayout = guildId(19890).getInterestGuildProfileSheetLayout;
  guildId(19890);
  if (sum <= 0) {
    sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_32;
  }
  interestGuildProfileSheetLayout = getInterestGuildProfileSheetLayout(obj5);
  closure_11 = c9(bottom, interestGuildProfileSheetLayout.reservedBottom);
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
      return bottomSheetClose(InterestGuildProfileBannerDefault, obj);
    },
    disableNameNavigation: true,
    footer() {
      let obj2;
      const obj = { style: closure_11.footerStack, children: metroImportDefault(InterestGuildJoinButtonDefault, obj2) };
      obj2 = { guildId, guildName: importDefault, fullWidth: true, onJoinTapped: dependencyMap, onJoinResult: _slicedToArray };
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
      obj2 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: closure_11.footer, colors, children: metroImportDefault(View, obj3) };
      obj3 = { onLayout: onLayout2, style: closure_11.footerContent, children: children2 };
      tmp = LinearGradientDefault;
      const obj4 = { enableFooterMarginAdjustment: false, scrollEnabled: interestGuildProfileSheetLayout.scrollable, contentContainerStyle: closure_11.scrollContent, style: closure_11.scrollView, children: metroImportDefault(View, obj5) };
      obj5 = { onLayout, style: closure_11.body, children };
      const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
      items = [metroImportDefault(BottomSheetScrollView, obj4), ];
      const obj6 = { variant: "floating", tabStyle: obj7, onPress: bottomSheetClose };
      obj7 = { backgroundColor };
      items[1] = metroImportDefault(ActionSheetHeaderBar.ActionSheetHeaderBar, obj6);
      return metroImportAll(BottomSheet, obj);
    }
  };
  return bottomSheetClose(GuildProfileSheetBodyDefault, obj6);
};
