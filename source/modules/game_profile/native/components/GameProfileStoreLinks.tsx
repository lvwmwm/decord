// Module ID: 8627
// Function ID: 68354
// Name: WebsiteGameStoreLinkButton
// Dependencies: []
// Exports: default

// Module 8627 (WebsiteGameStoreLinkButton)
function WebsiteGameStoreLinkButton(data) {
  data = data.data;
  const arg1 = data;
  const importDefault = data.trackAction;
  closure_2 = importDefault(closure_2[5])(importDefault(closure_2[6]).openURL);
  const obj = { 9223372036854775807: null, -9223372036854775808: null };
  ({ title: obj.text, icon: obj.icon } = data);
  obj.onPress = function onPress() {
    trackAction(data.action);
    callback(data.url);
  };
  return callback(arg1(closure_2[7]).Button, obj);
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flexDirection: "column", gap: importDefault(dependencyMap[4]).space.PX_8 };
obj.container = obj;
let closure_6 = obj.createStyles(obj);
const tmp3 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[12]).fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinks.tsx");

export default function GameProfileStoreLinks(websiteButtons) {
  let game;
  let trackAction;
  ({ game, trackAction } = websiteButtons);
  const arg1 = trackAction;
  websiteButtons = websiteButtons.websiteButtons;
  const importDefault = websiteButtons;
  let dependencyMap;
  const tmp = callback3();
  let name;
  if (null != game) {
    name = game.name;
  }
  dependencyMap = name;
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
        const obj3 = { 9223372036854775807: null, -9223372036854775808: null };
        const intl = arg1(dependencyMap[8]).intl;
        obj3.text = intl.string(arg1(dependencyMap[8]).t./hMurx);
        obj3.onPress = function onPress() {
          let obj = trackAction(name[9]);
          obj = { key: trackAction(name[10]).ACTION_SHEET_KEY, content: callback(websiteButtons(name[10]), obj) };
          obj = { gameName: name, websiteButtons, trackAction };
          return obj.showActionSheet(obj);
        };
        const tmp21 = callback(arg1(dependencyMap[7]).Button, obj3);
        const first = websiteButtons[0];
        let action;
        if (null != first) {
          action = first.action;
        }
        let tmp6 = tmp21;
        if (action === arg1(dependencyMap[11]).GameProfileTrackActionActions.XboxGamePassStoreLink) {
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
