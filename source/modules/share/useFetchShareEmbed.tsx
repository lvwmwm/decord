// Module ID: 12794
// Function ID: 98013
// Name: useFetchShareEmbed
// Dependencies: []
// Exports: default

// Module 12794 (useFetchShareEmbed)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/share/useFetchShareEmbed.tsx");

export default function useFetchShareEmbed(arg0) {
  let tmp3;
  const arg1 = arg0;
  const embed = callback(React.useState(undefined), 2);
  let closure_1 = embed[1];
  [tmp3, closure_2] = callback(React.useState(false), 2);
  const hasTriedResolving = callback(React.useState(false), 2);
  let closure_3 = hasTriedResolving[1];
  const callback = React.useRef(true);
  const React = React.useRef(undefined);
  const items = [arg0];
  const effect = React.useEffect(() => {
    function unfurl() {
      return _unfurl(...arguments);
    }
    function _unfurl() {
      // CreateGeneratorClosureLongIndex (0x67)
      const obj = callback(tmp);
      const _unfurl = obj;
      return obj(...arguments);
    }
    if (null != arg0) {
      if ("" !== arg0) {
        const match = arg0.match(callback(_unfurl[3]).URL_REGEX);
        let atResult;
        if (null != match) {
          atResult = match.at(0);
        }
        const arg0 = atResult;
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
            const callback = setTimeout(unfurl, 1000);
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
