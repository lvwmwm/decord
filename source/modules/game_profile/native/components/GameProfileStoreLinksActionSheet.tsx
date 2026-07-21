// Module ID: 8617
// Function ID: 68292
// Name: GameProfileStoreLinksActionSheet
// Dependencies: []
// Exports: default

// Module 8617 (GameProfileStoreLinksActionSheet)
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_4, jsxs: closure_5 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { gap: importDefault(dependencyMap[4]).space.PX_8, paddingTop: importDefault(dependencyMap[4]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, paddingBottom: importDefault(dependencyMap[4]).space.PX_24 };
obj.header = obj;
obj.headerText = { textAlign: "center" };
const tmp3 = arg1(dependencyMap[2]);
obj.buttons = { gap: importDefault(dependencyMap[4]).space.PX_12 };
let closure_6 = obj.createStyles(obj);
const obj1 = { gap: importDefault(dependencyMap[4]).space.PX_12 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/game_profile/native/components/GameProfileStoreLinksActionSheet.tsx");

export default function GameProfileStoreLinksActionSheet(gameName) {
  let websiteButtons;
  ({ websiteButtons, trackAction: closure_0 } = gameName);
  const tmp = callback3();
  const importDefault = importDefault(dependencyMap[5])(importDefault(dependencyMap[6]).openURL);
  let obj = {};
  obj = {};
  obj = { paddingBottom: importDefault(dependencyMap[7])().bottom + importDefault(dependencyMap[4]).space.PX_16 };
  obj.contentContainerStyle = obj;
  const obj1 = { style: tmp.header };
  const obj2 = { style: tmp.headerText };
  const intl = arg1(dependencyMap[11]).intl;
  obj2.children = intl.string(arg1(dependencyMap[11]).t./4gj6r);
  const items = [callback(arg1(dependencyMap[10]).Text, obj2), ];
  const obj3 = { style: tmp.headerText };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj3.children = intl2.format(arg1(dependencyMap[11]).t.0acM2Y, { gameName: gameName.gameName });
  items[1] = callback(arg1(dependencyMap[10]).Text, obj3);
  obj1.children = items;
  const items1 = [callback2(View, obj1), ];
  const tmp2 = importDefault(dependencyMap[5]);
  items1[1] = callback(View, {
    style: tmp.buttons,
    children: websiteButtons.map((url) => {
      let icon;
      let title;
      url = url.url;
      const action = url.action;
      ({ icon, title } = url);
      return callback(url(closure_2[12]).Button, {
        icon,
        text: title,
        variant: "secondary",
        size: "md",
        onPress() {
          action(closure_2[13]).hideActionSheet();
          url(action);
          action(url);
        }
      }, url);
    })
  });
  obj.children = items1;
  obj.children = callback2(arg1(dependencyMap[9]).BottomSheetScrollView, obj);
  return callback(arg1(dependencyMap[8]).ActionSheet, obj);
};
export const ACTION_SHEET_KEY = "game-profile-store-links";
