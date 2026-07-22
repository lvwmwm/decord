// Module ID: 10604
// Function ID: 82743
// Name: useEmbeddedActivityBackground
// Dependencies: [0, 0, 0, 0]
// Exports: default

// Module 10604 (useEmbeddedActivityBackground)
import __exportStarResult1 from "__exportStarResult1";
import closure_3 from "__exportStarResult1";

let closure_4 = [null, null];
const result = require("__exportStarResult1").fileFinishedImporting("modules/activities/utils/useEmbeddedActivityBackground.tsx");

export default function useEmbeddedActivityBackground(applicationId) {
  let names;
  let size;
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  ({ size, names } = applicationId);
  if (names === undefined) {
    names = closure_4;
  }
  const dependencyMap = names;
  let str = applicationId.format;
  if (str === undefined) {
    str = "png";
  }
  let callback;
  let React;
  closure_4 = undefined;
  const tmp = callback(React.useState(null), 2);
  callback = tmp[1];
  const tmp2 = callback(React.useState(true), 2);
  React = tmp2[1];
  let obj = arg1(dependencyMap[2]);
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
    const applicationId = ref.current;
    if (null != applicationId) {
      const assets = applicationId(names[2]).getAssets(applicationId);
      assets.then((arg0) => {
        let tmp4;
        callback2(false);
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
          callback(tmp4.id);
        }
      });
      const obj = applicationId(names[2]);
    }
  }, items);
  obj = { url: assetImage, state: str2 };
  return obj;
};
