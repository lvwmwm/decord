// Module ID: 10586
// Function ID: 10587
// Name: GuildProfileActionSheet
// Dependencies: [19, 17, 1072, 21, 5243, 575, 5484, 5839, 8493, 671, 10587, 10733, 10604, 5503, 5830, 5507, 5838, 2]
// Exports: default

// Module 10586 (GuildProfileActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import Constants from "Constants" /* 1072 */;
import useThemeDefault from "useTheme" /* 5484 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 5503 */;
import BottomSheetModal from "BottomSheetModal" /* 5507 */;
import LinearGradientDefault from "LinearGradient" /* 5830 */;
import ActionSheetHeaderBar from "ActionSheetHeaderBar" /* 5838 */;
import GuildProfileSheetBodyDefault from "GuildProfileSheetBody" /* 10587 */;
import GuildProfileCTADefault from "GuildProfileCTA" /* 10733 */;
import react_mod from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5243 */;
import size from "module_2" /* 2 */;

let metroImportDefault;
let metroRequire;
let obj2;
let tmp4;
const GuildProfileCreateTagUpsellDefault = tmp4(10604);
let react = react_mod;
const View = react_native.View;
const VerticalGradient = Constants.VerticalGradient;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { footerContainer: { paddingHorizontal: 16, paddingVertical: 40 }, footerStack: { gap: 8 }, scrollView: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_profile/native/components/GuildProfileActionSheet.tsx");

export default function GuildProfileActionSheet(guildId) {
  let bottomSheetClose;
  let c5;
  let closure_3;
  let context;
  let inviteKey;
  let ref;
  guildId = guildId.guildId;
  ({ context: importDefault, inviteKey: dependencyMap } = guildId);
  c5 = undefined;
  bottomSheetClose = undefined;
  let colors;
  react = colors();
  let tmp = useThemeDefault();
  let obj = guildId(5839);
  const backgroundColor = obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_HOVER, tmp);
  let obj2 = guildId(8493);
  const bottomSheetRef = obj2.useBottomSheetRef();
  ({ bottomSheetRef: c5, bottomSheetClose } = bottomSheetRef);
  let obj3 = guildId(5839);
  const token = obj3.useToken(nativeDefault.colors.BACKGROUND_BASE_LOW);
  let items = [token];
  colors = react.useMemo(() => {
    const items = [, ];
    const obj = _modDef671(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = token;
    return items;
  }, items);
  let obj4 = {
    guildId,
    onClose: bottomSheetClose,
    footer(profile) {
      let items;
      const obj = { style: closure_3.footerStack, children: items };
      items = [, ];
      const obj2 = { profile, context: importDefault, inviteKey: dependencyMap };
      items[0] = metroRequire(GuildProfileCTADefault, obj2);
      let tmp3Result = null != profile.tag;
      const tmp = metroImportDefault;
      const tmp2 = View;
      const tmp3 = metroRequire;
      if (tmp3Result) {
        const obj3 = { guildId };
        tmp3Result = tmp3(GuildProfileCreateTagUpsellDefault, obj3);
      }
      items[1] = tmp3Result;
      return tmp(tmp2, obj);
    },
    children(children, children2) {
      let items;
      let obj2;
      let obj5;
      const obj = { ref, scrollable: true, handleDisabled: true, footer: metroRequire(LinearGradientDefault, obj2), children: items };
      const BottomSheet = Sheet_BottomSheet.BottomSheet;
      items = [, ];
      obj2 = { start: VerticalGradient.START, end: { x: 0, y: 0.5 }, style: closure_3.footerContainer, colors, children: children2 };
      const obj3 = { enableFooterMarginAdjustment: true, style: closure_3.scrollView, children };
      items[0] = metroRequire(BottomSheetModal.BottomSheetScrollView, obj3);
      const obj4 = { variant: "floating", tabStyle: obj5, onPress: bottomSheetClose };
      obj5 = { backgroundColor };
      items[1] = metroRequire(ActionSheetHeaderBar.ActionSheetHeaderBar, obj4);
      return metroImportDefault(BottomSheet, obj);
    }
  };
  return bottomSheetClose(GuildProfileSheetBodyDefault, obj4);
};
