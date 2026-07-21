// Module ID: 8621
// Function ID: 68312
// Name: GameProfileView
// Dependencies: []
// Exports: default

// Module 8621 (GameProfileView)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
let obj = arg1(dependencyMap[3]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[4]).colors.BACKGROUND_BASE_LOWEST, paddingBottom: importDefault(dependencyMap[4]).space.PX_16 };
obj.container = obj;
const tmp2 = arg1(dependencyMap[2]);
obj.body = { paddingVertical: importDefault(dependencyMap[4]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_32 };
const obj1 = { paddingVertical: importDefault(dependencyMap[4]).space.PX_16, paddingHorizontal: importDefault(dependencyMap[4]).space.PX_16, gap: importDefault(dependencyMap[4]).space.PX_32 };
obj.buttonsContainer = { flexDirection: "column", gap: importDefault(dependencyMap[4]).space.PX_8 };
let closure_7 = obj.createStyles(obj);
const obj2 = { flexDirection: "column", gap: importDefault(dependencyMap[4]).space.PX_8 };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/game_profile/native/components/GameProfileView.tsx");

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
  const arg1 = onStoreLinksMeasured;
  ({ invite, onGuildInviteResolved, scrollY, onHeaderHeightMeasured, scrollOffsetRef } = arg0);
  const tmp = callback3();
  const importDefault = React.useRef(null);
  let closure_2 = React.useRef(null);
  const analyticsLocations = importDefault(closure_2[5])(importDefault(closure_2[6]).GAME_PROFILE).analyticsLocations;
  const items = [onStoreLinksMeasured];
  const React = React.useCallback(() => {
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
  const items1 = [callback(importDefault(closure_2[7]), { game, scrollY, onHeightMeasured: onHeaderHeightMeasured }), ];
  obj = {
    style: tmp.body,
    onLayout(nativeEvent) {
      closure_1.current = nativeEvent.nativeEvent.layout.y;
      callback();
    }
  };
  const items2 = [callback(importDefault(closure_2[8]), { game, viewId, source, trackAction }), , , , , , , , , , ];
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
    obj1.children = callback(importDefault(closure_2[9]), obj2);
    tmp6 = callback(View, obj1);
  }
  items2[1] = tmp6;
  items2[2] = callback(importDefault(closure_2[10]), { game, trackAction });
  items2[3] = callback(importDefault(closure_2[11]), { game, viewId, source, trackAction });
  items2[4] = callback(importDefault(closure_2[12]), { game, analyticsLocations, trackAction });
  items2[5] = callback(importDefault(closure_2[13]), { closeModal, game, onInviteResolved: onGuildInviteResolved, trackAction });
  items2[6] = callback(importDefault(closure_2[14]), { gameId: game.id, invite, closeModal, trackAction, scrollOffsetRef });
  items2[7] = callback(importDefault(closure_2[15]), { game, closeModal, trackAction });
  items2[8] = callback(importDefault(closure_2[16]), { gameId: game.id, trackAction });
  items2[9] = callback(importDefault(closure_2[17]), { game, viewId, source, trackAction });
  const obj5 = { style: tmp.buttonsContainer };
  const items3 = [callback(importDefault(closure_2[18]), { game, trackAction }), callback(importDefault(closure_2[19]), { applicationId: game.id, trackAction })];
  obj5.children = items3;
  items2[10] = callback2(View, obj5);
  obj.children = items2;
  items1[1] = callback2(View, obj);
  obj.children = items1;
  obj.children = callback2(View, obj);
  return callback(arg1(closure_2[5]).AnalyticsLocationProvider, obj);
};
