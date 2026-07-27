// Module ID: 8447
// Function ID: 67320
// Name: GameProfileView
// Dependencies: [31, 27, 33, 4131, 689, 5462, 5482, 8448, 8451, 8452, 8453, 8575, 8576, 8579, 8582, 8591, 11855, 11857, 11874, 11875, 2]
// Exports: default

// Module 8447 (GameProfileView)
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flexDirection: "column", paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, gap: require("_createForOfIteratorHelperLoose").space.PX_32, maxWidth: 520, alignSelf: "center", width: "100%" };
_createForOfIteratorHelperLoose.body = obj1;
_createForOfIteratorHelperLoose.buttonsContainer = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { flexDirection: "column", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
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
  ({ invite, onGuildInviteResolved, scrollY, onHeaderHeightMeasured, scrollOffsetRef } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  const importDefault = React.useRef(null);
  const dependencyMap = React.useRef(null);
  const analyticsLocations = importDefault(5462)(importDefault(5482).GAME_PROFILE).analyticsLocations;
  const items = [onStoreLinksMeasured];
  React = React.useCallback(() => {
    const current = ref.current;
    const current2 = ref2.current;
    if (tmp) {
      if (null != onStoreLinksMeasured) {
        onStoreLinksMeasured(current + current2);
      }
    }
  }, items);
  let obj = { value: analyticsLocations };
  obj = { style: tmp.container };
  const items1 = [callback(importDefault(8448), { game, scrollY, onHeightMeasured: onHeaderHeightMeasured }), ];
  obj = {
    style: tmp.body,
    onLayout(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.layout.y;
      callback();
    }
  };
  const items2 = [callback(importDefault(8451), { game, viewId, source, trackAction }), , , , , , , , , , ];
  let tmp6 = websiteButtons.length > 0;
  if (tmp6) {
    const obj1 = {
      onLayout(nativeEvent) {
          const layout = nativeEvent.nativeEvent.layout;
          closure_2.current = layout.y + layout.height;
          callback();
        }
    };
    const obj2 = { game, websiteButtons, trackAction };
    obj1.children = callback(importDefault(8452), obj2);
    tmp6 = callback(View, obj1);
  }
  items2[1] = tmp6;
  items2[2] = callback(importDefault(8453), { game, trackAction });
  items2[3] = callback(importDefault(8575), { game, viewId, source, trackAction });
  items2[4] = callback(importDefault(8576), { game, analyticsLocations, trackAction });
  items2[5] = callback(importDefault(8579), { closeModal, game, onInviteResolved: onGuildInviteResolved, trackAction });
  items2[6] = callback(importDefault(8582), { gameId: game.id, invite, closeModal, trackAction, scrollOffsetRef });
  items2[7] = callback(importDefault(8591), { game, closeModal, trackAction });
  items2[8] = callback(importDefault(11855), { gameId: game.id, trackAction });
  items2[9] = callback(importDefault(11857), { game, viewId, source, trackAction });
  const obj5 = { style: tmp.buttonsContainer };
  const items3 = [callback(importDefault(11874), { game, trackAction }), callback(importDefault(11875), { applicationId: game.id, trackAction })];
  obj5.children = items3;
  items2[10] = callback2(View, obj5);
  obj.children = items2;
  items1[1] = callback2(View, obj);
  obj.children = items1;
  obj.children = callback2(View, obj);
  return callback(onStoreLinksMeasured(5462).AnalyticsLocationProvider, obj);
};
