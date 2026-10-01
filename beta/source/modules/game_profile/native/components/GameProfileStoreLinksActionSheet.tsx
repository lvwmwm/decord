// Module ID: 8163
// Function ID: 8164
// Name: GameProfileStoreLinksActionSheet
// Dependencies: [19, 17, 21, 4836, 576, 8136, 4525, 1613, 6618, 6045, 4832, 1115, 5281, 4800, 2]
// Exports: default

// Module 8163 (GameProfileStoreLinksActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1613 */;
import LinkingDefault from "Linking" /* 4525 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import BottomSheetModal from "BottomSheetModal" /* 6045 */;
import ActionSheet2 from "ActionSheet" /* 6618 */;
import useOpenExternalUrlFromGameProfileDefault from "useOpenExternalUrlFromGameProfile" /* 8136 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, url;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { header: obj2, headerText: { textAlign: "center" }, buttons: obj3 };
obj2 = { gap: nativeDefault.space.PX_8, paddingTop: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_12 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx");

export default function GameProfileStoreLinksActionSheet(gameName) {
  let BottomSheetScrollView;
  let closure_1;
  let intl;
  let intl2;
  let items;
  let items1;
  let obj2;
  let obj3;
  let websiteButtons;
  ({ websiteButtons, trackAction: require } = gameName);
  gameName = gameName.gameName;
  const tmp = closure_6();
  const tmp2 = useOpenExternalUrlFromGameProfileDefault;
  importDefault = tmp2(LinkingDefault.openURL);
  const bottom = useSafeAreaInsetsDefault().bottom;
  let obj = { children: closure_5(BottomSheetScrollView, obj2) };
  const ActionSheet = ActionSheet2.ActionSheet;
  obj2 = { contentContainerStyle: obj3, children: items1 };
  obj3 = { paddingBottom: bottom + nativeDefault.space.PX_16 };
  BottomSheetScrollView = BottomSheetModal.BottomSheetScrollView;
  const obj4 = { style: tmp.header, children: items };
  const obj5 = { variant: "heading-lg/semibold", color: "mobile-text-heading-primary", style: tmp.headerText, children: intl.string(intl3.t["/4gj6r"]) };
  const Text = Text_Text.Text;
  intl = intl3.intl;
  items = [closure_4(Text, obj5), ];
  const obj6 = { variant: "text-md/medium", color: "text-subtle", style: tmp.headerText, children: intl2.format(intl3.t["0acM2Y"], { gameName }) };
  const Text2 = Text_Text.Text;
  intl2 = intl3.intl;
  items[1] = closure_4(Text2, obj6);
  items1 = [closure_5(View, obj4), ];
  const obj7 = {
    style: tmp.buttons,
    children: websiteButtons.map((url) => {
      let icon;
      let title;
      url = url.url;
      const action = url.action;
      ({ icon, title } = url);
      let obj = {
        icon,
        text: title,
        variant: "secondary",
        size: "md",
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          obj.hideActionSheet();
          require(action);
          action(url);
        }
      };
      return closure_1_4(components_Button_Button.Button, obj, url);
    })
  };
  items1[1] = closure_4(View, obj7);
  return closure_4(ActionSheet, obj);
};
export const ACTION_SHEET_KEY = "game-profile-store-links";
