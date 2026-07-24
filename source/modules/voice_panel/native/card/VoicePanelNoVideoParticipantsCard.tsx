// Module ID: 15868
// Function ID: 122521
// Dependencies: [31, 27, 33, 4130, 689, 10046, 4323, 5515, 4126, 1212, 2]

// Module 15868
import importAllResult from "result";
import { Pressable } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding: 16, backgroundColor: require("_createForOfIteratorHelperLoose").colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = obj;
obj.label = { marginBottom: 16, textAlign: "center" };
_createForOfIteratorHelperLoose = { paddingHorizontal: 20, paddingVertical: 12, backgroundColor: "white", borderRadius: require("_createForOfIteratorHelperLoose").radii.round };
obj.button = _createForOfIteratorHelperLoose;
obj.buttonText = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_860 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const obj2 = { color: require("_createForOfIteratorHelperLoose").unsafe_rawColors.PRIMARY_860 };
const memoResult = importAllResult.memo(function VoicePanelNoVideoParticipantsCard() {
  const channelId = importAllResult.useContext(importDefault(10046)).channelId;
  const tmp = callback3();
  const items = [channelId];
  const callback = importAllResult.useCallback(() => {
    const result = outer1_1(outer1_2[6]).toggleVoiceParticipantsHidden(channelId, false);
  }, items);
  let obj = { style: tmp.container };
  obj = { style: tmp.label, variant: "text-md/semibold", color: "text-overlay-light" };
  const intl = channelId(1212).intl;
  obj.children = intl.string(channelId(1212).t["8eBJ73"]);
  const items1 = [callback(channelId(4126).Text, obj), ];
  obj = { style: tmp.button, onPress: callback, accessibilityRole: "button" };
  const intl2 = channelId(1212).intl;
  obj.accessibilityLabel = intl2.string(channelId(1212).t.kLQySL);
  const obj1 = { variant: "text-sm/semibold", style: tmp.buttonText };
  const intl3 = channelId(1212).intl;
  obj1.children = intl3.string(channelId(1212).t.kLQySL);
  obj.children = callback(channelId(4126).Text, obj1);
  items1[1] = callback(Pressable, obj);
  obj.children = items1;
  return callback2(importDefault(5515), obj);
});
let result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoVideoParticipantsCard.tsx");

export default memoResult;
