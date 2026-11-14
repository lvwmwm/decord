// Module ID: 19014
// Function ID: 19015
// Name: InterestGuildProfileSheet
// Dependencies: [32, 19, 17, 1072, 21, 5306, 575, 5547, 5902, 8559, 1496, 1630, 19015, 671, 10656, 19016, 19017, 5566, 5893, 5570, 5901, 2]
// Exports: default

// Module 19014 (InterestGuildProfileSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1630 */;
import useThemeDefault from "useTheme" /* 5547 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5566 */;
import BottomSheetModal from "BottomSheetModal" /* 5570 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5901 */;
import InterestGuildProfileBannerDefault from "InterestGuildProfileBanner" /* 19016 */;
import InterestGuildJoinButtonDefault from "InterestGuildJoinButton" /* 19017 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5306 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let tmp;
const GuildProfileSheetBodyDefault = tmp(10656);
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
  let c10;
  let c9;
  let guildName;
  let onJoinResult;
  let onJoinTapped;
  let sum;
  let tmp7;
  let tmp9;
  guildId = guildId.guildId;
  ({ guildName: importDefault, onJoinTapped: dependencyMap, onJoinResult: _slicedToArray, footerAction: react } = guildId);
  c9 = undefined;
  c10 = undefined;
  let interestGuildProfileSheetLayout;
  let closure_12;
  let onLayout;
  let onLayout2;
  let colors;
  let tmp = importDefault;
  let tmp2 = dependencyMap;
  const tmp3 = useThemeDefault();
  let obj = guildId(5902);
  const backgroundColor = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp3);
  let obj2 = guildId(5902);
  const token = obj2.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let obj3 = guildId(8559);
  const bottomSheetRef1 = obj3.useBottomSheetRef();
  const bottomSheetRef = bottomSheetRef1.bottomSheetRef;
  const bottomSheetClose = bottomSheetRef1.bottomSheetClose;
  const height = useWindowDimensionsDefault({ ignoreKeyboard: true }).height;
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj4 = react;
  [tmp7, c9] = _slicedToArray(react.useState(0), 2);
  const tmp6 = _slicedToArray(react.useState(0), 2);
  [tmp9, c10] = _slicedToArray(react.useState(0), 2);
  let obj5 = { windowHeight: height, contentHeight: tmp7, footerHeight: sum, safeAreaBottom: bottom };
  const tmp8 = _slicedToArray(react.useState(0), 2);
  const getInterestGuildProfileSheetLayout = guildId(19015).getInterestGuildProfileSheetLayout;
  guildId(19015);
  if (sum <= 0) {
    sum = nativeDefault.space.PX_48 + nativeDefault.space.PX_32;
  }
  interestGuildProfileSheetLayout = getInterestGuildProfileSheetLayout(obj5);
  closure_12 = c9(bottom, interestGuildProfileSheetLayout.reservedBottom);
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
      return bottomSheetRef(InterestGuildProfileBannerDefault, obj);
    },
    disableNameNavigation: true,
    footer() {
      let tmpResult;
      const obj = { style: closure_12.footerStack, children: tmpResult };
      tmpResult = react;
      const tmp2 = View;
      if (react == null) {
        const obj2 = { guildId, guildName: importDefault, fullWidth: true, onJoinTapped: dependencyMap, onJoinResult: _slicedToArray };
        tmpResult = tmp(InterestGuildJoinButtonDefault, obj2);
      }
      return metroImportDefault(tmp2, obj);
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
      obj2 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: closure_12.footer, colors, children: metroImportDefault(View, obj3) };
      obj3 = { onLayout: onLayout2, style: closure_12.footerContent, children: children2 };
      tmp = LinearGradientDefault;
      const obj4 = { enableFooterMarginAdjustment: false, scrollEnabled: interestGuildProfileSheetLayout.scrollable, contentContainerStyle: closure_12.scrollContent, style: closure_12.scrollView, children: metroImportDefault(View, obj5) };
      obj5 = { onLayout, style: closure_12.body, children };
      const BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
      items = [metroImportDefault(BottomSheetScrollView, obj4), ];
      const obj6 = { variant: "floating", tabStyle: obj7, onPress: bottomSheetClose };
      obj7 = { backgroundColor };
      items[1] = metroImportDefault(ActionSheetHeaderBar.ActionSheetHeaderBar, obj6);
      return metroImportAll(BottomSheet, obj);
    }
  };
  return bottomSheetRef(GuildProfileSheetBodyDefault, obj6);
};
