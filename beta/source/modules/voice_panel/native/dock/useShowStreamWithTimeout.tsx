// Module ID: 19688
// Function ID: 19689
// Name: useShowStreamWithTimeout
// Dependencies: [32, 19, 4984, 2]
// Exports: default

// Module 19688 (useShowStreamWithTimeout)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/dock/useShowStreamWithTimeout.tsx");

export default function useShowStreamWithTimeout(streamKey) {
  let c2;
  let tmp2;
  let tmp3;
  streamKey = streamKey.streamKey;
  const isWatching = streamKey.isWatching;
  let hasEnded = streamKey.hasEnded;
  _slicedToArray = undefined;
  let first;
  let showStream;
  let tmp = _slicedToArray(first.useState(() => {
    let tmp;
    if (isWatching) {
      tmp = streamKey;
    }
    return tmp;
  }), 2);
  [tmp2, tmp3] = tmp;
  _slicedToArray = tmp3;
  first = _slicedToArray(first.useState(() => {
    const timeout = new streamKey(isWatching[2]).Timeout();
    return timeout;
  }), 1)[0];
  const tmp5 = isWatching || null == tmp2;
  if (!tmp5) {
    tmp3(undefined);
  }
  showStream = isWatching;
  if (showStream) {
    if (!hasEnded) {
      hasEnded = null != streamKey && tmp2 === streamKey;
    }
    showStream = hasEnded;
  }
  const items = [first, streamKey];
  const items1 = [first, streamKey, isWatching];
  const onStreamReady = obj.useCallback(() => {
    first.start(100, () => closure_1_2(streamKey));
  }, items);
  const effect = obj.useEffect(() => () => first.stop(), items1);
  const items2 = [isWatching, showStream, streamKey];
  const effect1 = obj.useEffect(() => {
    let closure_0;
    const tmp = isWatching;
    if (tmp) {
      const tmp2 = showStream;
      if (!tmp2) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => closure_1_2(closure_0), 3000);
        return () => clearTimeout(closure_0);
      }
    }
  }, items2);
  return { showStream, onStreamReady };
};
