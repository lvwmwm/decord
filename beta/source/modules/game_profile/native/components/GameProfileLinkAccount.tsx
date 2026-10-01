// Module ID: 8193
// Function ID: 8194
// Name: GameProfileLinkAccount
// Dependencies: [19, 17, 5063, 1372, 21, 4836, 576, 6364, 8194, 8195, 6586, 504, 8139, 1115, 5899, 1177, 4832, 5281, 8197, 2]
// Exports: default

// Module 8193 (GameProfileLinkAccount)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import useIsWindowLargeDefault from "useIsWindowLarge" /* 6364 */;
import GameProfileAnalyticUtils from "GameProfileAnalyticUtils" /* 8139 */;
import GameProfileSection from "GameProfileSection" /* 8194 */;
import GameProfileSkeleton from "GameProfileSkeleton" /* 8195 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const GameProfileSkeletonDefault = GameProfileSkeleton;

let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let size2;
let size3;
let size4;
let size5;
let size6;
let size7;
const View = react_native.View;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let c9 = 48;
let createStyles = createStyles_mod;
let obj = { card: obj2, cardImagesContainer: obj3, ellipseGroup: obj4, ellipse: size, cardImageApplication: size1, userAvatar: obj5, cardContent: obj6, cardText: { textAlign: "center" }, skeletonCardImage: size2, skeletonUserAvatar: size3, skeletonEllipse: size4, skeletonCardContent: obj7, skeletonAnimationRoot: obj8, skeletonCardImagesContainerSmall: obj9, skeletonCardContentHeading: size5, skeletonCardContentBody: size6, skeletonCardContentBodySecondary: size7 };
obj2 = { borderRadius: nativeDefault.radii.lg, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_8, alignItems: "center", alignSelf: "center" };
obj4 = { flexDirection: "row", justifyContent: "space-between", gap: nativeDefault.space.PX_4 };
size = { width: 4, height: 4, backgroundColor: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, opacity: 0.3, borderRadius: nativeDefault.radii.round };
size1 = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj5 = { borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj6 = { gap: nativeDefault.space.PX_4, alignSelf: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_24 };
size2 = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
size3 = { width: 48, height: 48, borderRadius: nativeDefault.radii.round };
size4 = { width: nativeDefault.space.PX_4, height: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round };
obj7 = { gap: nativeDefault.space.PX_8, alignItems: "center", paddingHorizontal: nativeDefault.space.PX_24 };
obj8 = { gap: nativeDefault.space.PX_16 };
obj9 = { marginBottom: nativeDefault.space.PX_4 };
size5 = { width: "92%", height: nativeDefault.space.PX_20, borderRadius: nativeDefault.radii.xs };
size6 = { width: "83%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs };
size7 = { width: "55%", height: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.xs, marginBottom: nativeDefault.space.PX_4 };
let closure_10 = createStyles(obj);
let closure_11 = react.memo(() => {
  let GameProfileSkeletonContainer;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj2;
  const tmp = closure_10();
  const tmp4 = useIsWindowLargeDefault();
  const obj = { style: tmp.card, children: metroImportAll(GameProfileSkeletonContainer, obj2) };
  const GameProfileSectionSkeleton = GameProfileSection.GameProfileSectionSkeleton;
  const items = [tmp.cardImagesContainer, ];
  let skeletonCardImagesContainerSmall = !tmp4;
  obj2 = { style: tmp.skeletonAnimationRoot, children: items3 };
  GameProfileSkeletonContainer = GameProfileSkeleton.GameProfileSkeletonContainer;
  if (!tmp4) {
    skeletonCardImagesContainerSmall = tmp.skeletonCardImagesContainerSmall;
  }
  const obj3 = { style: items, children: items1 };
  items[1] = skeletonCardImagesContainerSmall;
  items1 = [, , ];
  const obj4 = { style: tmp.skeletonCardImage };
  items1[0] = metroImportDefault(GameProfileSkeletonDefault, obj4);
  const obj5 = { style: tmp.ellipseGroup, children: items2 };
  items2 = [, , ];
  const obj6 = { style: tmp.skeletonEllipse };
  items2[0] = metroImportDefault(GameProfileSkeletonDefault, obj6);
  const obj7 = { style: tmp.skeletonEllipse };
  items2[1] = metroImportDefault(GameProfileSkeletonDefault, obj7);
  const obj8 = { style: tmp.skeletonEllipse };
  items2[2] = metroImportDefault(GameProfileSkeletonDefault, obj8);
  items1[1] = metroImportAll(View, obj5);
  const obj9 = { style: tmp.skeletonUserAvatar };
  items1[2] = metroImportDefault(GameProfileSkeletonDefault, obj9);
  items3 = [metroImportAll(View, obj3), , ];
  const obj10 = { style: tmp.skeletonCardContent, children: items4 };
  items4 = [, , ];
  const obj11 = { style: tmp.skeletonCardContentHeading };
  items4[0] = metroImportDefault(GameProfileSkeletonDefault, obj11);
  const obj12 = { style: tmp.skeletonCardContentBody };
  items4[1] = metroImportDefault(GameProfileSkeletonDefault, obj12);
  let tmp5Result = !tmp4;
  if (tmp5Result) {
    const obj13 = { style: tmp.skeletonCardContentBodySecondary };
    tmp5Result = tmp5(tmp2(8195), obj13);
  }
  items4[2] = tmp5Result;
  const obj14 = { showViewAllSkeleton: false, skeletonTitleWidth: 90, children: metroImportDefault(View, obj) };
  items3[1] = metroImportAll(View, obj10);
  items3[2] = metroImportDefault(GameProfileSkeleton.GameProfileSkeletonButton, {});
  return metroImportDefault(GameProfileSectionSkeleton, obj14);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/game_profile/native/components/GameProfileLinkAccount.tsx");

export default function GameProfileLinkAccount(analyticsLocations) {
  let canStartAuthorization;
  let currentUser;
  let fetched;
  let game;
  let hasAlreadyLinked;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let obj14;
  let obj4;
  let trackAction;
  ({ game, trackAction } = analyticsLocations);
  analyticsLocations = analyticsLocations.analyticsLocations;
  let startAuthorization;
  const tmp = closure_10();
  const tmp4 = analyticsLocations(startAuthorization[10])(game);
  startAuthorization = tmp4.startAuthorization;
  const connectionApp = tmp4.connectionApp;
  ({ fetched, hasAlreadyLinked, canStartAuthorization } = tmp4);
  let obj = trackAction(startAuthorization[11]);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const officialApplicationId = game.getOfficialApplicationId();
  const items1 = [ApplicationStore];
  const items2 = [officialApplicationId];
  const items3 = [trackAction, startAuthorization, analyticsLocations];
  const obj2 = trackAction(startAuthorization[11]);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    const result = null != officialApplicationId && ApplicationStore.didFetchingApplicationFail(tmp);
    return result;
  }, items2);
  if (null != officialApplicationId) {
    if (!stateFromStores1) {
      if (null != stateFromStores) {
        if (null == connectionApp) {
          return closure_7(closure_11, {});
        } else {
          if (canStartAuthorization) {
            if (!hasAlreadyLinked) {
              if (fetched) {
                const iconSource = connectionApp.getIconSource(c9);
                const obj3 = { title: intl.string(trackAction(startAuthorization[13]).t["VDAhr+"]), children: closure_8(View, obj4) };
                const tmp2Result = analyticsLocations(startAuthorization[8]);
                intl = tmp5(tmp3[13]).intl;
                let tmp16Result = null;
                obj4 = { style: tmp.card, children: items6 };
                if (null != iconSource) {
                  const obj5 = { style: tmp.cardImagesContainer, children: items4 };
                  const obj6 = { source: iconSource, style: tmp.cardImageApplication };
                  items4 = [closure_7(tmp2(tmp3[14]), obj6), , ];
                  const obj7 = { style: tmp.ellipseGroup, children: items5 };
                  const obj8 = { style: tmp.ellipse };
                  items5 = [closure_7(View, obj8), , ];
                  const obj9 = { style: tmp.ellipse };
                  items5[1] = closure_7(View, obj9);
                  const obj10 = { style: tmp.ellipse };
                  items5[2] = closure_7(View, obj10);
                  items4[1] = closure_8(View, obj7);
                  const obj11 = { size: trackAction(startAuthorization[15]).AvatarSizes.LARGE_48, user: stateFromStores, guildId: "Array", style: tmp.userAvatar };
                  const Avatar = tmp5(tmp3[15]).Avatar;
                  items4[2] = closure_7(Avatar, obj11);
                  tmp16Result = tmp16(tmp17, obj5);
                }
                items6 = [tmp16Result, , ];
                const obj12 = { style: tmp.cardContent, children: items7 };
                const obj13 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp.cardText, children: intl2.formatToPlainString(trackAction(startAuthorization[13]).t.hUbQT2, obj14) };
                const Text = tmp5(tmp3[16]).Text;
                intl2 = tmp5(tmp3[13]).intl;
                obj14 = { gameName: connectionApp.name };
                items7 = [closure_7(Text, obj13), ];
                const obj15 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardText, children: intl3.string(trackAction(startAuthorization[13]).t["JKqu+4"]) };
                const Text2 = tmp5(tmp3[16]).Text;
                intl3 = tmp5(tmp3[13]).intl;
                items7[1] = closure_7(Text2, obj15);
                items6[1] = closure_8(View, obj12);
                const obj16 = { variant: "secondary", size: "md", text: intl4.string(trackAction(startAuthorization[13]).t.jynBQ5), onPress: tmp9, icon: closure_7(trackAction(startAuthorization[18]).ExperimentalGameControllerLinkIcon, { size: "sm" }) };
                const Button = tmp5(tmp3[17]).Button;
                intl4 = tmp5(tmp3[13]).intl;
                items6[2] = closure_7(Button, obj16);
                return closure_7(tmp2Result, obj3);
              } else {
                return closure_7(closure_11, {});
              }
            }
          }
          return null;
        }
      }
    }
  }
  return null;
};
