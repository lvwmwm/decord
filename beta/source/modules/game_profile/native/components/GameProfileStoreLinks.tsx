// Module ID: 9387
// Function ID: 9388
// Name: GameProfileStoreLinks
// Dependencies: [19, 17, 21, 5014, 575, 9323, 5709, 5634, 1113, 5258, 9366, 9340, 2]
// Exports: default

// Module 9387 (GameProfileStoreLinks)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5258 */;
import components_Button_Button from "components/Button/Button" /* 5634 */;
import LinkingDefault from "Linking" /* 5709 */;
import useOpenExternalUrlFromGameProfileDefault from "useOpenExternalUrlFromGameProfile" /* 9323 */;
import GameProfileStoreLinksActionSheet from "GameProfileStoreLinksActionSheet" /* 9366 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

const GameProfileStoreLinksActionSheetDefault = GameProfileStoreLinksActionSheet;

let closure_4;
let hasOwnProperty;
let obj2;
function WebsiteGameStoreLinkButton(data) {
  data = data.data;
  const trackAction = data.trackAction;
  const tmp = useOpenExternalUrlFromGameProfileDefault;
  let closure_2 = tmp(LinkingDefault.openURL);
  const obj = {
    variant: "secondary",
    size: "md",
    text: data.title,
    icon: data.icon,
    onPress() {
      trackAction(data.action);
      closure_2(data.url);
    }
  };
  return React3(components_Button_Button.Button, obj);
}
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2 };
obj2 = { flexDirection: "column", gap: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinks.tsx");

export default function GameProfileStoreLinks(websiteButtons) {
  let game;
  let intl;
  let items;
  let items1;
  let trackAction;
  ({ game, trackAction } = websiteButtons);
  websiteButtons = websiteButtons.websiteButtons;
  let tmp = closure_6();
  let name;
  if (game != null) {
    name = game.name;
  }
  if (0 !== websiteButtons.length) {
    if (null != name) {
      if (1 === websiteButtons.length) {
        let obj2 = { data: websiteButtons[0], trackAction };
        return closure_4(WebsiteGameStoreLinkButton, obj2);
      } else if (2 === websiteButtons.length) {
        const obj3 = { style: tmp.container, children: items };
        const obj4 = { data: websiteButtons[0], trackAction };
        items = [closure_4(WebsiteGameStoreLinkButton, obj4), ];
        const obj5 = { data: websiteButtons[1], trackAction };
        items[1] = closure_4(WebsiteGameStoreLinkButton, obj5);
        return closure_5(View, obj3);
      } else {
        const obj6 = {
          variant: "secondary",
          size: "md",
          text: intl.string(trackAction(name[8]).t["/hMurx"]),
          onPress() {
                  let obj2;
                  const tmp = ActionSheetActionCreators;
                  const showActionSheet = tmp.showActionSheet;
                  const obj = { key: GameProfileStoreLinksActionSheet.ACTION_SHEET_KEY, content: React3(GameProfileStoreLinksActionSheetDefault, obj2) };
                  obj2 = { gameName: name, websiteButtons, trackAction };
                  return showActionSheet(obj);
                }
        };
        const Button = trackAction(name[7]).Button;
        intl = trackAction(name[8]).intl;
        const tmp17 = closure_4(Button, obj6);
        const first = websiteButtons[0];
        let action;
        const tmp14 = closure_4;
        const tmp15 = trackAction;
        const tmp16 = name;
        if (first != null) {
          action = first.action;
        }
        let tmp4 = tmp17;
        if (action === tmp15(tmp16[11]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
          let obj = { style: tmp.container, children: items1 };
          const obj7 = { data: websiteButtons[0], trackAction };
          items1 = [tmp14(WebsiteGameStoreLinkButton, obj7), tmp17];
          tmp4 = closure_5(View, obj);
        }
        return tmp4;
      }
    }
  }
  return null;
};
