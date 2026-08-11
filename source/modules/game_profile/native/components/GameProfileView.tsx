// Module ID: 9317
// Function ID: 9318
// Name: GameProfileView
// Dependencies: [19, 17, 21, 4303, 712, 5728, 5748, 9318, 9321, 9322, 9323, 9333, 9334, 9337, 9340, 9349, 12181, 12183, 12200, 12201, 2]
// Exports: default

// Module 9317 (GameProfileView)
import GameProfileReportButton from "GameProfileReportButton";
import { View } from "GameProfileWebsiteButton";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, body: null, buttonsContainer: null };
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWEST, paddingBottom: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexDirection: "column", paddingVertical: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_32, maxWidth: 520, alignSelf: "center", width: "100%" };
let obj1 = { flexDirection: "column", paddingVertical: require("Themes").space.PX_16, paddingHorizontal: require("Themes").space.PX_16, gap: require("Themes").space.PX_32, maxWidth: 520, alignSelf: "center", width: "100%" };
createCacheKey[2] = { flexDirection: "column", gap: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj2 = { flexDirection: "column", gap: require("Themes").space.PX_8 };
const result = require("jsxProd").fileFinishedImporting("modules/game_profile/native/components/GameProfileView.tsx");

export default function GameProfileView(arg0) {
  let closeModal;
  let game;
  let invite;
  let onGuildInviteResolved;
  let onHeaderHeightMeasured;
  let onStoreLinksMeasured;
  let scrollOffsetRef;
  let scrollY;
  let source;
  let trackAction;
  let viewId;
  let websiteButtons;
  ({ game, viewId, source, trackAction, closeModal, websiteButtons, onStoreLinksMeasured } = arg0);
  let importDefault;
  let dependencyMap;
  let React;
  ({ invite, onGuildInviteResolved, scrollY, onHeaderHeightMeasured, scrollOffsetRef } = arg0);
  const tmp = createCacheKey();
  importDefault = React.useRef(null);
  dependencyMap = React.useRef(null);
  const analyticsLocations = importDefault(5728)(importDefault(5748).GAME_PROFILE).analyticsLocations;
  const items = [onStoreLinksMeasured];
  React = React.useCallback(() => {
    const current = ref.current;
    const current2 = ref2.current;
    if (tmp) {
      if (onStoreLinksMeasured != null) {
        tmp2(current + current2);
      }
    }
  }, items);
  let obj = { value: analyticsLocations, children: null };
  obj = { style: tmp.container, children: null };
  const items1 = [callback(importDefault(9318), { game, scrollY, onHeightMeasured: onHeaderHeightMeasured }), ];
  obj = {
    style: tmp.body,
    onLayout(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.layout.y;
      callback();
    },
    children: null
  };
  const items2 = [callback(importDefault(9321), { game, viewId, source, trackAction }), , , , , , , , , , ];
  let tmp5Result = websiteButtons.length > 0;
  if (tmp5Result) {
    const obj1 = { onLayout: null, children: null };
    obj1[0] = function onLayout(nativeEvent) {
      const layout = nativeEvent.nativeEvent.layout;
      closure_2.current = layout.y + layout.height;
      callback();
    };
    const obj2 = { game: null, websiteButtons: null, trackAction: null };
    obj2[0] = game;
    obj2[1] = websiteButtons;
    obj2[2] = trackAction;
    obj1[1] = tmp5(tmp2(9322), obj2);
    tmp5Result = tmp5(tmp7, obj1);
  }
  items2[1] = tmp5Result;
  items2[2] = callback(importDefault(9323), { game, trackAction });
  items2[3] = callback(importDefault(9333), { game, viewId, source, trackAction });
  items2[4] = callback(importDefault(9334), { game, analyticsLocations, trackAction });
  items2[5] = callback(importDefault(9337), { closeModal, game, onInviteResolved: onGuildInviteResolved, trackAction });
  items2[6] = callback(importDefault(9340), { gameId: game.id, invite, closeModal, trackAction, scrollOffsetRef });
  items2[7] = callback(importDefault(9349), { game, closeModal, trackAction });
  items2[8] = callback(importDefault(12181), { gameId: game.id, trackAction });
  items2[9] = callback(importDefault(12183), { game, viewId, source, trackAction });
  const obj5 = { style: tmp.buttonsContainer, children: null };
  const items3 = [callback(importDefault(12200), { game, trackAction }), callback(importDefault(12201), { applicationId: game.id, trackAction })];
  obj5[1] = items3;
  items2[10] = closure_6(View, obj5);
  obj[2] = items2;
  items1[1] = closure_6(View, obj);
  obj[1] = items1;
  obj[1] = closure_6(View, obj);
  return callback(onStoreLinksMeasured(5728).AnalyticsLocationProvider, obj);
};
