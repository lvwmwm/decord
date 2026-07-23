// Module ID: 11373
// Function ID: 88420
// Dependencies: [31, 6928, 33, 4130, 689, 566, 6929, 3831, 10875, 4660, 4126, 2]

// Module 11373
import importAllResult from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { container: { alignItems: "center", flexDirection: "row" } };
obj = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
obj.icon = obj;
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = importAllResult.memo(function SlowModeIndicator(channel) {
  channel = channel.channel;
  const hasTypingText = channel.hasTypingText;
  const slowmodeType = channel.slowmodeType;
  const tmp = callback3();
  let obj = channel(slowmodeType[5]);
  const items = [canBypassSlowmode];
  const stateFromStores = obj.useStateFromStores(items, () => canBypassSlowmode.getSlowmodeCooldownGuess(channel.id, slowmodeType));
  let obj1 = channel(slowmodeType[6]);
  canBypassSlowmode = obj1.useCanBypassSlowmode(channel, slowmodeType);
  const items1 = [hasTypingText, canBypassSlowmode, stateFromStores];
  const items2 = [channel.rateLimitPerUser];
  const memo = stateFromStores.useMemo(() => {
    if (hasTypingText) {
      if (!canBypassSlowmode) {
        let slowmodeIndicatorText = null;
      }
      return slowmodeIndicatorText;
    }
    slowmodeIndicatorText = channel(slowmodeType[6]).getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode);
  }, items1);
  const callback = stateFromStores.useCallback(() => {
    let obj = hasTypingText(slowmodeType[7]);
    obj = { key: "CHANNEL_SLOWMODE_INFO", IconComponent: channel(slowmodeType[8]).TimerIcon, content: channel(slowmodeType[6]).getSlowmodeDescription(channel.rateLimitPerUser) };
    obj.open(obj);
  }, items2);
  obj = { onPress: callback, style: tmp.container };
  obj = { lineClamp: 1, allowFontScaling: false, variant: "text-xs/medium", color: "interactive-text-default", children: memo };
  const items3 = [callback(channel(slowmodeType[10]).Text, obj), ];
  obj1 = { style: tmp.icon, size: "xxs" };
  items3[1] = callback(channel(slowmodeType[8]).TimerIcon, obj1);
  obj.children = items3;
  return callback2(channel(slowmodeType[9]).PressableOpacity, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default memoResult;
