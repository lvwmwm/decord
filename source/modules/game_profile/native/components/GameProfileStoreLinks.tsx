// Module ID: 8635
// Function ID: 68417
// Name: WebsiteGameStoreLinkButton
// Dependencies: [31, 27, 33, 4130, 689, 8597, 3827, 4543, 1212, 4098, 8625, 8600, 2]
// Exports: default

// Module 8635 (WebsiteGameStoreLinkButton)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function WebsiteGameStoreLinkButton(data) {
  data = data.data;
  const trackAction = data.trackAction;
  const dependencyMap = trackAction(8597)(trackAction(3827).openURL);
  const obj = { variant: "secondary", size: "md" };
  ({ title: obj.text, icon: obj.icon } = data);
  obj.onPress = function onPress() {
    trackAction(data.action);
    callback(data.url);
  };
  return callback(data(4543).Button, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinks.tsx");

export default function GameProfileStoreLinks(websiteButtons) {
  let game;
  let trackAction;
  ({ game, trackAction } = websiteButtons);
  websiteButtons = websiteButtons.websiteButtons;
  let name;
  const tmp = _createForOfIteratorHelperLoose();
  name = undefined;
  if (null != game) {
    name = game.name;
  }
  if (0 !== websiteButtons.length) {
    if (null != name) {
      if (1 === websiteButtons.length) {
        let obj = { data: websiteButtons[0], trackAction };
        return callback(WebsiteGameStoreLinkButton, obj);
      } else if (2 === websiteButtons.length) {
        obj = { style: tmp.container };
        const obj1 = { data: websiteButtons[0], trackAction };
        const items = [callback(WebsiteGameStoreLinkButton, obj1), ];
        const obj2 = { data: websiteButtons[1], trackAction };
        items[1] = callback(WebsiteGameStoreLinkButton, obj2);
        obj.children = items;
        return callback2(View, obj);
      } else {
        const obj3 = { variant: "secondary", size: "md" };
        const intl = trackAction(name[8]).intl;
        obj3.text = intl.string(trackAction(name[8]).t["/hMurx"]);
        obj3.onPress = function onPress() {
          let obj = trackAction(name[9]);
          obj = { key: trackAction(name[10]).ACTION_SHEET_KEY, content: outer1_4(websiteButtons(name[10]), obj) };
          obj = { gameName: name, websiteButtons, trackAction };
          return obj.showActionSheet(obj);
        };
        const tmp21 = callback(trackAction(name[7]).Button, obj3);
        const first = websiteButtons[0];
        let action;
        if (null != first) {
          action = first.action;
        }
        let tmp6 = tmp21;
        if (action === trackAction(name[11]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
          obj = { style: tmp.container };
          const obj4 = { data: websiteButtons[0], trackAction };
          const items1 = [callback(WebsiteGameStoreLinkButton, obj4), tmp21];
          obj.children = items1;
          tmp6 = callback2(View, obj);
        }
        return tmp6;
      }
    }
  }
  return null;
};
