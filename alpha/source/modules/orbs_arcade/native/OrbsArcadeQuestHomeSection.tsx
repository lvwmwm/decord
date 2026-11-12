// Module ID: 17528
// Function ID: 17529
// Name: OrbsArcadeQuestHomeSection
// Dependencies: [19, 17529, 17532, 21, 5243, 575, 17533, 504, 6274, 7374, 5866, 1113, 17537, 17539, 10386, 2]
// Exports: default

// Module 17528 (OrbsArcadeQuestHomeSection)
import get_initialized from "get initialized" /* 504 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import GameControllerIcon from "GameControllerIcon" /* 7374 */;
import useFetchOrbsArcadeGamesDefault from "useFetchOrbsArcadeGames" /* 17533 */;
import OrbsArcadeGameTileDefault from "OrbsArcadeGameTile" /* 17537 */;
import OrbsArcadeAnalytics from "OrbsArcadeAnalytics" /* 17539 */;
import react from "react" /* 19 */;
import OrbsArcadeStore from "OrbsArcadeStore" /* 17529 */;
import OrbsArcadeNativeConstants from "OrbsArcadeNativeConstants" /* 17532 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5243 */;
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
    const Stack = tmp5(6274).Stack;
    const obj4 = { style: tmp.sectionHeader, children: items3 };
    const Stack2 = tmp5(6274).Stack;
    const obj5 = { direction: "horizontal", spacing: nativeDefault.space.PX_8, children: items2 };
    const Stack3 = tmp5(6274).Stack;
    const obj6 = { size: "custom", style: tmp.sectionIcon };
    items2 = [React3(GameControllerIcon.GameControllerIcon, obj6), ];
    const obj7 = { variant: "body-lg/semibold", color: "text-strong", children: intl.string(intl3.t["2L068F"]) };
    const Heading = tmp5(5866).Heading;
    intl = tmp5(1113).intl;
    items2[1] = React3(Heading, obj7);
    items3 = [hasOwnProperty(Stack3, obj5), ];
    const obj8 = { variant: "heading-xs/medium", color: "text-subtle", children: intl2.string(intl3.t.kMY21I) };
    const Text = tmp5(5866).Text;
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
      mapped = tmp9(tmp2(10386), obj9);
    }
    items4[1] = mapped;
    tmp8Result = tmp8(Stack, obj3);
  } else {
    tmp8Result = null;
  }
  return tmp8Result;
};
