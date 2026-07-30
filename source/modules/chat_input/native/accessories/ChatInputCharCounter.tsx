// Module ID: 11514
// Function ID: 11515
// Name: ChatInputCharCounter
// Dependencies: [32, 19, 1874, 676, 1876, 21, 4189, 589, 3835, 6179, 6188, 3890, 1236, 4717, 4185, 6624, 2]

// Module 11514 (ChatInputCharCounter)
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import mergeGuildAvatar from "mergeGuildAvatar";
import { UpsellTypes } from "ME";
import { PremiumUpsellTypes } from "GuildFeatures";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ container: { alignItems: "center", paddingBottom: 6 } });
const forwardRefResult = importAllResult.forwardRef((analyticsLocations, ref) => {
  let c2;
  let tmp6;
  analyticsLocations = analyticsLocations.analyticsLocations;
  let stateFromStores;
  let dependencyMap;
  let callback;
  let obj = analyticsLocations(589);
  const items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => stateFromStores(_undefined[8]).canUseIncreasedMessageLength(currentUser.getCurrentUser()));
  const tmp = callback4();
  [tmp6, c2] = callback(importAllResult.useState(0), 2);
  const tmp7 = stateFromStores(6179)();
  callback = tmp7;
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ({
    onMessageLengthChanged(length) {
      callback(Math.max(0, length - _slicedToArray));
    }
  }));
  const items1 = [analyticsLocations, stateFromStores, tmp7];
  let tmp10 = null;
  if (tmp6 > 0) {
    obj = { onPress: null, style: null, children: null };
    obj[0] = tmp9;
    obj[1] = tmp.container;
    obj = { color: "text-feedback-critical", lineClamp: 1, variant: "text-xs/medium", children: null };
    const _HermesInternal = HermesInternal;
    obj[3] = "-" + tmp6;
    const items2 = [callback2(tmp2(4185).Text, obj), callback2(tmp2(6624).NitroWheelIcon, { size: "sm" })];
    obj[2] = items2;
    tmp10 = callback3(tmp2(4717).PressableOpacity, obj);
  }
  return tmp10;
});
forwardRefResult.displayName = "ChatInputCharCounter";
const memoResult = importAllResult.memo(forwardRefResult);
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputCharCounter.tsx");

export default memoResult;
