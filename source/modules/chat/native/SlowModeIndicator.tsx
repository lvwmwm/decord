// Module ID: 11363
// Function ID: 88370
// Dependencies: []

// Module 11363
const importAllResult = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ jsx: closure_5, jsxs: closure_6 } = arg1(dependencyMap[2]));
const tmp2 = arg1(dependencyMap[2]);
let obj = { container: { width: true, marginHorizontal: true } };
obj = { marginLeft: importDefault(dependencyMap[4]).space.PX_4 };
obj.icon = obj;
let closure_7 = arg1(dependencyMap[3]).createStyles(obj);
const obj2 = arg1(dependencyMap[3]);
const memoResult = importAllResult.memo(function SlowModeIndicator(channel) {
  channel = channel.channel;
  const arg1 = channel;
  const hasTypingText = channel.hasTypingText;
  const importDefault = hasTypingText;
  const slowmodeType = channel.slowmodeType;
  const dependencyMap = slowmodeType;
  const tmp = callback3();
  let obj = arg1(dependencyMap[5]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => canBypassSlowmode.getSlowmodeCooldownGuess(channel.id, slowmodeType));
  const canBypassSlowmode = arg1(dependencyMap[6]).useCanBypassSlowmode(channel, slowmodeType);
  closure_4 = canBypassSlowmode;
  const items1 = [hasTypingText, canBypassSlowmode, stateFromStores];
  const items2 = [channel.rateLimitPerUser];
  const memo = importAllResult.useMemo(() => {
    if (hasTypingText) {
      if (!canBypassSlowmode) {
        let slowmodeIndicatorText = null;
      }
      return slowmodeIndicatorText;
    }
    slowmodeIndicatorText = channel(slowmodeType[6]).getSlowmodeIndicatorText(stateFromStores, canBypassSlowmode);
  }, items1);
  const callback = importAllResult.useCallback(() => {
    let obj = hasTypingText(slowmodeType[7]);
    obj = { key: "CHANNEL_SLOWMODE_INFO", IconComponent: channel(slowmodeType[8]).TimerIcon, content: channel(slowmodeType[6]).getSlowmodeDescription(channel.rateLimitPerUser) };
    obj.open(obj);
  }, items2);
  obj = { onPress: callback, style: tmp.container };
  const items3 = [callback(arg1(dependencyMap[10]).Text, { children: memo }), ];
  obj = { style: tmp.icon, size: "xxs" };
  items3[1] = callback(arg1(dependencyMap[8]).TimerIcon, obj);
  obj.children = items3;
  return callback2(arg1(dependencyMap[9]).PressableOpacity, obj);
});
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/chat/native/SlowModeIndicator.tsx");

export default memoResult;
