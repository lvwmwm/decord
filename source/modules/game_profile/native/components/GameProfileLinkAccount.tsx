// Module ID: 8688
// Function ID: 68669
// Name: GameProfileLinkAccount
// Dependencies: [31, 27, 1849, 33, 4130, 689, 5465, 566, 8642, 4126, 1212, 5085, 1273, 4543, 8689, 2]
// Exports: default

// Module 8688 (GameProfileLinkAccount)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6;
let closure_7;
const require = arg1;
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.headerText = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.card = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
let obj3 = { flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8, alignItems: "center", alignSelf: "center" };
_createForOfIteratorHelperLoose.cardImagesContainer = obj3;
let obj4 = { flexDirection: "row", justifyContent: "space-between", gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.ellipseGroup = obj4;
let obj5 = { width: 4, height: 4, backgroundColor: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.3, borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
_createForOfIteratorHelperLoose.ellipse = obj5;
let obj6 = { width: 48, height: 48, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.cardImageApplication = obj6;
let obj7 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4, alignSelf: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_24 };
_createForOfIteratorHelperLoose.cardContent = obj7;
_createForOfIteratorHelperLoose.cardText = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, padding: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default function GameProfileLinkAccount(trackAction) {
  let canStartAuthorization;
  let fetched;
  let hasAlreadyLinked;
  trackAction = trackAction.trackAction;
  const analyticsLocations = trackAction.analyticsLocations;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = analyticsLocations(startAuthorization[6])(trackAction.game);
  startAuthorization = tmp2.startAuthorization;
  const connectionApp = tmp2.connectionApp;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp2);
  let obj = trackAction(startAuthorization[7]);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getCurrentUser());
  const items1 = [trackAction, startAuthorization, analyticsLocations];
  if (fetched) {
    if (null != connectionApp) {
      if (canStartAuthorization) {
        if (!hasAlreadyLinked) {
          if (null != stateFromStores) {
            const iconSource = connectionApp.getIconSource(48);
            obj = { style: tmp.container };
            obj = { variant: "heading-sm/semibold", color: "mobile-text-heading-primary", style: tmp.headerText };
            const intl4 = trackAction(startAuthorization[10]).intl;
            obj.children = intl4.string(trackAction(startAuthorization[10]).t["VDAhr+"]);
            const items2 = [callback(trackAction(startAuthorization[9]).Text, obj), ];
            const obj1 = { style: tmp.card };
            let tmp12 = null;
            if (null != iconSource) {
              const obj2 = { style: tmp.cardImagesContainer };
              const obj3 = { source: iconSource, style: tmp.cardImageApplication };
              const items3 = [callback(analyticsLocations(startAuthorization[11]), obj3), , ];
              const obj4 = { style: tmp.ellipseGroup };
              const obj5 = { style: tmp.ellipse };
              const items4 = [callback(View, obj5), , ];
              const obj6 = { style: tmp.ellipse };
              items4[1] = callback(View, obj6);
              const obj7 = { style: tmp.ellipse };
              items4[2] = callback(View, obj7);
              obj4.children = items4;
              items3[1] = callback2(View, obj4);
              const obj8 = { size: trackAction(startAuthorization[12]).AvatarSizes.LARGE_48, user: stateFromStores, guildId: undefined };
              items3[2] = callback(trackAction(startAuthorization[12]).Avatar, obj8);
              obj2.children = items3;
              tmp12 = callback2(View, obj2);
            }
            const items5 = [tmp12, , ];
            const obj9 = { style: tmp.cardContent };
            const obj10 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp.cardText };
            const intl = trackAction(startAuthorization[10]).intl;
            const obj11 = { gameName: connectionApp.name };
            obj10.children = intl.formatToPlainString(trackAction(startAuthorization[10]).t.hUbQT2, obj11);
            const items6 = [callback(trackAction(startAuthorization[9]).Text, obj10), ];
            const obj12 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardText };
            const intl2 = trackAction(startAuthorization[10]).intl;
            obj12.children = intl2.string(trackAction(startAuthorization[10]).t["JKqu+4"]);
            items6[1] = callback(trackAction(startAuthorization[9]).Text, obj12);
            obj9.children = items6;
            items5[1] = callback2(View, obj9);
            const obj13 = { variant: "secondary", size: "md" };
            const intl3 = trackAction(startAuthorization[10]).intl;
            obj13.text = intl3.string(trackAction(startAuthorization[10]).t.jynBQ5);
            obj13.onPress = tmp4;
            const obj14 = { size: "sm" };
            obj13.icon = callback(trackAction(startAuthorization[14]).ExperimentalGameControllerLinkIcon, obj14);
            items5[2] = callback(trackAction(startAuthorization[13]).Button, obj13);
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
