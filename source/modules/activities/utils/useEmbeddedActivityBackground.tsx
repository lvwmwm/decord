// Module ID: 10614
// Function ID: 82793
// Name: useEmbeddedActivityBackground
// Dependencies: [57, 31, 7820, 2]
// Exports: default

// Module 10614 (useEmbeddedActivityBackground)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
let closure_4 = ["embedded_cover", "embedded_background"];
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/activities/utils/useEmbeddedActivityBackground.tsx");

export default function useEmbeddedActivityBackground(applicationId) {
  let names;
  let size;
  applicationId = applicationId.applicationId;
  ({ size, names } = applicationId);
  if (names === undefined) {
    names = closure_4;
  }
  let str = applicationId.format;
  if (str === undefined) {
    str = "png";
  }
  let callback;
  let React;
  closure_4 = undefined;
  const tmp = callback(React.useState(null), 2);
  callback = tmp[1];
  let tmp2 = callback(React.useState(true), 2);
  React = tmp2[1];
  let obj = applicationId(names[2]);
  const assetImage = obj.getAssetImage(applicationId, tmp[0], size, str);
  let str2 = "loading";
  if (!tmp2[0]) {
    let str3 = "not-found";
    if (null != assetImage) {
      str3 = "fetched";
    }
    str2 = str3;
  }
  closure_4 = React.useRef(names);
  const effect = React.useEffect(() => {
    closure_4.current = names;
  });
  const items = [applicationId];
  const effect1 = React.useEffect(() => {
    const current = ref.current;
    if (null != current) {
      const assets = applicationId(names[2]).getAssets(current);
      assets.then((arg0) => {
        let tmp4;
        outer1_3(false);
        const entries = Object.entries(arg0);
        let num = 0;
        if (0 < entries.length) {
          while (true) {
            let tmp2 = callback;
            let tmp3 = callback(entries[num], 2);
            [r10020, tmp4] = tmp3;
            if (null != tmp4) {
              if ("" !== tmp4.id) {
                let tmp5 = current;
                if (current.includes(tmp4.name)) {
                  break;
                }
              }
            }
            num = num + 1;
          }
          outer1_2(tmp4.id);
        }
      });
      const obj = applicationId(names[2]);
    }
  }, items);
  obj = { url: assetImage, state: str2 };
  return obj;
};
