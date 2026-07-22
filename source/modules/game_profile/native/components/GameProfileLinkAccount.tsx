// Module ID: 8640
// Function ID: 68409
// Name: GameProfileLinkAccount
// Dependencies: []
// Exports: default

// Module 8640 (GameProfileLinkAccount)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
let obj = arg1(dependencyMap[4]);
obj = {};
obj = { gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[3]);
obj.headerText = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[5]).space.PX_8 };
obj.card = { borderRadius: importDefault(dependencyMap[5]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, padding: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_16 };
const obj2 = { borderRadius: importDefault(dependencyMap[5]).radii.lg, borderWidth: 1, borderColor: importDefault(dependencyMap[5]).colors.BORDER_SUBTLE, backgroundColor: importDefault(dependencyMap[5]).colors.BACKGROUND_BASE_LOW, padding: importDefault(dependencyMap[5]).space.PX_16, gap: importDefault(dependencyMap[5]).space.PX_16 };
obj.cardImagesContainer = { gap: importDefault(dependencyMap[5]).space.PX_8 };
const obj4 = { "Bool(false)": false, "Bool(false)": 0, gap: importDefault(dependencyMap[5]).space.PX_4 };
obj.ellipseGroup = obj4;
const obj3 = { gap: importDefault(dependencyMap[5]).space.PX_8 };
obj.ellipse = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, borderRadius: importDefault(dependencyMap[5]).radii.round };
const obj5 = { backgroundColor: importDefault(dependencyMap[5]).colors.MOBILE_TEXT_HEADING_PRIMARY, borderRadius: importDefault(dependencyMap[5]).radii.round };
obj.cardImageApplication = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
const obj6 = { borderRadius: importDefault(dependencyMap[5]).radii.sm };
obj.cardContent = { gap: importDefault(dependencyMap[5]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24 };
obj.cardText = { textAlign: "center" };
let closure_8 = obj.createStyles(obj);
const obj7 = { gap: importDefault(dependencyMap[5]).space.PX_4, paddingHorizontal: importDefault(dependencyMap[5]).space.PX_24 };
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default function GameProfileLinkAccount(trackAction) {
  let canStartAuthorization;
  let fetched;
  let hasAlreadyLinked;
  trackAction = trackAction.trackAction;
  const arg1 = trackAction;
  const analyticsLocations = trackAction.analyticsLocations;
  const importDefault = analyticsLocations;
  const tmp = callback3();
  const tmp2 = importDefault(dependencyMap[6])(trackAction.game);
  const startAuthorization = tmp2.startAuthorization;
  const dependencyMap = startAuthorization;
  const connectionApp = tmp2.connectionApp;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp2);
  let obj = arg1(dependencyMap[7]);
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [trackAction, startAuthorization, analyticsLocations];
  if (fetched) {
    if (null != connectionApp) {
      if (canStartAuthorization) {
        if (!hasAlreadyLinked) {
          if (null != stateFromStores) {
            const iconSource = connectionApp.getIconSource(48);
            obj = { style: tmp.container };
            obj = { cachedAt: "polite", edpbxy: "column", style: tmp.headerText };
            const intl4 = arg1(dependencyMap[10]).intl;
            obj.children = intl4.string(arg1(dependencyMap[10]).t.VDAhr+);
            const items2 = [callback(arg1(dependencyMap[9]).Text, obj), ];
            const obj1 = { style: tmp.card };
            let tmp12 = null;
            if (null != iconSource) {
              const obj2 = { style: tmp.cardImagesContainer };
              const obj3 = { source: iconSource, style: tmp.cardImageApplication };
              const items3 = [callback(importDefault(dependencyMap[11]), obj3), , ];
              const obj4 = { style: tmp.ellipseGroup };
              const obj5 = { style: tmp.ellipse };
              const items4 = [callback(View, obj5), , ];
              const obj6 = { style: tmp.ellipse };
              items4[1] = callback(View, obj6);
              const obj7 = { style: tmp.ellipse };
              items4[2] = callback(View, obj7);
              obj4.children = items4;
              items3[1] = callback2(View, obj4);
              const obj8 = { size: arg1(dependencyMap[12]).AvatarSizes.LARGE_48, user: stateFromStores, guildId: undefined };
              items3[2] = callback(arg1(dependencyMap[12]).Avatar, obj8);
              obj2.children = items3;
              tmp12 = callback2(View, obj2);
            }
            const items5 = [tmp12, , ];
            const obj9 = { style: tmp.cardContent };
            const obj10 = { style: tmp.cardText };
            const intl = arg1(dependencyMap[10]).intl;
            const obj11 = { gameName: connectionApp.name };
            obj10.children = intl.formatToPlainString(arg1(dependencyMap[10]).t.hUbQT2, obj11);
            const items6 = [callback(arg1(dependencyMap[9]).Text, obj10), ];
            const obj12 = { style: tmp.cardText };
            const intl2 = arg1(dependencyMap[10]).intl;
            obj12.children = intl2.string(arg1(dependencyMap[10]).t.JKqu+4);
            items6[1] = callback(arg1(dependencyMap[9]).Text, obj12);
            obj9.children = items6;
            items5[1] = callback2(View, obj9);
            const obj13 = {};
            const intl3 = arg1(dependencyMap[10]).intl;
            obj13.text = intl3.string(arg1(dependencyMap[10]).t.jynBQ5);
            obj13.onPress = tmp4;
            const obj14 = { size: "sm" };
            obj13.icon = callback(arg1(dependencyMap[14]).ExperimentalGameControllerLinkIcon, obj14);
            items5[2] = callback(arg1(dependencyMap[13]).Button, obj13);
            obj1.children = items5;
            items2[1] = callback2(View, obj1);
            obj.children = items2;
            return callback2(View, obj);
          }
        }
      }
    }
  }
  return null;
};
