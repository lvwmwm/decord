// Module ID: 17340
// Function ID: 17341
// Name: OrbsArcadeQuestHomeSection
// Dependencies: [19, 17341, 17344, 21, 5140, 575, 17345, 504, 6159, 9817, 5751, 1113, 17349, 17351, 9665, 2]
// Exports: default

// Module 17340 (OrbsArcadeQuestHomeSection)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import GameControllerIcon from "GameControllerIcon" /* 9817 */;
import useFetchOrbsArcadeGamesDefault from "useFetchOrbsArcadeGames" /* 17345 */;
import OrbsArcadeGameTileDefault from "OrbsArcadeGameTile" /* 17349 */;
import OrbsArcadeAnalytics from "OrbsArcadeAnalytics" /* 17351 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17341 */;
import OrbsArcadeNativeConstants from "OrbsArcadeNativeConstants" /* 17344 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5140 */;
import size_mod from "module_2" /* 2 */;

let ORBS_ARCADE_GAME_TILE_MAX_WIDTH;
let ORBS_ARCADE_GAME_TILE_MIN_HEIGHT;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let size;
({ ORBS_ARCADE_GAME_TILE_MAX_WIDTH, ORBS_ARCADE_GAME_TILE_MIN_HEIGHT } = OrbsArcadeNativeConstants);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { section: obj2, sectionHeader: obj3, sectionIcon: { width: 20, height: 20 }, skeletonTile: size };
obj2 = { marginBottom: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: 2, paddingHorizontal: 4, paddingBottom: nativeDefault.space.PX_4 };
size = { width: "100%", maxWidth: ORBS_ARCADE_GAME_TILE_MAX_WIDTH, alignSelf: "center", height: ORBS_ARCADE_GAME_TILE_MIN_HEIGHT, borderRadius: nativeDefault.radii.md };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/orbs_arcade/native/OrbsArcadeQuestHomeSection.tsx");

export default function OrbsArcadeQuestHomeSection(location) {
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let tmp8Result;
  const _location = location.location;
  let tmp = closure_6();
  useFetchOrbsArcadeGamesDefault(_location);
  let obj = get_initialized;
  const items = [OrbsArcadeStore];
  const stateFromStores = obj.useStateFromStores(items, () => OrbsArcadeStore.orbsArcadeGames);
  const items1 = [OrbsArcadeStore];
  const obj2 = get_initialized;
  const stateFromStores1 = obj2.useStateFromStores(items1, () => null != OrbsArcadeStore.lastFetchedOrbsArcadeGamesAt || OrbsArcadeStore.hasFetchFailed);
  if (!stateFromStores1) {
    let mapped;
    const obj3 = { spacing: nativeDefault.space.PX_8, style: tmp.section, children: items4 };
    const Stack = tmp5(6159).Stack;
    const obj4 = { style: tmp.sectionHeader, children: items3 };
    const Stack2 = tmp5(6159).Stack;
    const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items2 };
    const Stack3 = tmp5(6159).Stack;
    const obj6 = { size: "custom", style: tmp.sectionIcon };
    items2 = [React3(GameControllerIcon.GameControllerIcon, obj6), ];
    const obj7 = { variant: "body-lg/semibold", color: "text-strong", children: intl.string(intl3.t["2L068F"]) };
    const Heading = tmp5(5751).Heading;
    intl = tmp5(1113).intl;
    items2[1] = React3(Heading, obj7);
    items3 = [hasOwnProperty(Stack3, obj5), ];
    const obj8 = { variant: "heading-xs/medium", color: "text-subtle", children: intl2.string(intl3.t.kMY21I) };
    const Text = tmp5(5751).Text;
    intl2 = tmp5(1113).intl;
    items3[1] = React3(Text, obj8);
    items4 = [hasOwnProperty(Stack2, obj4), ];
    const tmp8 = hasOwnProperty;
    const tmp9 = React3;
    if (stateFromStores1) {
      mapped = stateFromStores.map((game) => {
        const obj = { game, surface: OrbsArcadeAnalytics.OrbsArcadeSurface.QUEST_HOME };
        const tmp = OrbsArcadeGameTileDefault;
        return closure_1_4(tmp, obj, game.id);
      });
    } else {
      const obj9 = { style: tmp.skeletonTile };
      mapped = tmp9(tmp2(9665), obj9);
    }
    items4[1] = mapped;
    tmp8Result = tmp8(Stack, obj3);
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
};
