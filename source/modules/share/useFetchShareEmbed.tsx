// Module ID: 12960
// Function ID: 100492
// Name: useFetchShareEmbed
// Dependencies: [5, 57, 31, 1443, 11047, 682, 2]
// Exports: default

// Module 12960 (useFetchShareEmbed)
import batchUpdates from "batchUpdates";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/share/useFetchShareEmbed.tsx");

export default function useFetchShareEmbed(arg0) {
  let dependencyMap;
  let tmp3;
  let closure_0 = arg0;
  const embed = callback(React.useState(undefined), 2);
  let closure_1 = embed[1];
  [tmp3, dependencyMap] = callback(React.useState(false), 2);
  const hasTriedResolving = callback(React.useState(false), 2);
  let batchUpdates = hasTriedResolving[1];
  callback = React.useRef(true);
  React = React.useRef(undefined);
  const items = [arg0];
  const effect = React.useEffect(() => {
    function unfurl() {
      return _unfurl(...arguments);
    }
    function _unfurl() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      return obj(...arguments);
    }
    if (null != closure_0) {
      if ("" !== closure_0) {
        const match = closure_0.match(callback(outer1_2[3]).URL_REGEX);
        let atResult;
        if (null != match) {
          atResult = match.at(0);
        }
        closure_0 = atResult;
        if (atResult !== ref2.current) {
          ref2.current = atResult;
          if (null == atResult) {
            callback(undefined);
            ref.current = false;
          } else {
            if (ref.current) {
              ref.current = false;
              unfurl();
            }
            const _setTimeout = setTimeout;
            callback = setTimeout(unfurl, 1000);
            return () => {
              clearTimeout(closure_1);
            };
          }
        }
      }
    }
    ref.current = false;
    callback(undefined);
  }, items);
  return { embed: embed[0], isLoading, hasTriedResolving: hasTriedResolving[0] };
};
