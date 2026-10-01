// Module ID: 8933
// Function ID: 8934
// Name: useEmbeddedActivityBackground
// Dependencies: [32, 19, 7595, 2]
// Exports: default

// Module 8933 (useEmbeddedActivityBackground)
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
let closure_4 = ["embedded_cover", "embedded_background"];
const result = size.fileFinishedImporting("modules/activities/utils/useEmbeddedActivityBackground.tsx");

export default function useEmbeddedActivityBackground(applicationId) {
  let c2;
  let closure_3;
  let first;
  let names;
  let ref;
  let tmp2;
  applicationId = applicationId.applicationId;
  ({ size, names } = applicationId);
  if (names === undefined) {
    names = ref;
  }
  let str = applicationId.format;
  if (str === undefined) {
    str = "png";
  }
  _slicedToArray = undefined;
  react = undefined;
  ref = undefined;
  let obj = react;
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, c2] = tmp;
  [first, react] = react.useState(true);
  const obj2 = applicationId(names[2]);
  const url = obj2.getAssetImage(applicationId, tmp2, size, str);
  let state = "loading";
  if (!first) {
    let str3 = "not-found";
    if (null != url) {
      str3 = "fetched";
    }
    state = str3;
  }
  ref = obj.useRef(names);
  const effect = obj.useEffect(() => {
    ref.current = names;
  });
  const items = [applicationId];
  const effect1 = obj.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      const tmp3 = names;
      let obj = applicationId(names[2]);
      const assets = obj.getAssets(tmp);
      assets.then((result) => {
        let tmp6;
        closure_3(false);
        const entries = Object.entries(result);
        const obj = entries[Symbol.iterator]();
        while (obj !== undefined) {
          let tmp5 = _slicedToArray(tmp3, 2);
          [r10020, tmp6] = tmp5;
          let tmp7 = tmp6;
          if (null != tmp6) {
            if ("" !== tmp7.id) {
              if (current.includes(tmp7.name)) {
                let tmp12 = c2(tmp6.id);
                obj.return();
              }
            }
          }
          continue;
        }
      });
    }
  }, items);
  return { url, state };
};
