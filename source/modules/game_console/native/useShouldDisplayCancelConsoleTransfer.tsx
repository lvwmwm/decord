// Module ID: 15852
// Function ID: 122528
// Name: shouldDisplayCancel
// Dependencies: [57, 31, 2]
// Exports: default

// Module 15852 (shouldDisplayCancel)
import _slicedToArray from "_slicedToArray";
import result from "result";

function shouldDisplayCancel(startedAt) {
  let tmp = null != startedAt;
  if (tmp) {
    const _Date = Date;
    tmp = Date.now() - startedAt.startedAt > 6000;
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/game_console/native/useShouldDisplayCancelConsoleTransfer.tsx");

export default function useShouldDisplayCancelConsoleTransfer(arg0) {
  const callback = arg0;
  let tmp = callback(React.useState(() => outer1_2(_slicedToArray)), 2);
  React = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    const tmp = outer1_2(startedAt);
    callback(tmp);
    if (null != startedAt) {
      if (!tmp) {
        const _setTimeout = setTimeout;
        const _Date = Date;
        startedAt = setTimeout(() => outer1_1(outer2_2(_slicedToArray)), 6000 - (Date.now() - startedAt.startedAt));
        return () => {
          clearTimeout(_slicedToArray);
        };
      }
    }
  }, items);
  return tmp[0];
};
