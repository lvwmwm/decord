// Module ID: 10652
// Function ID: 10653
// Name: BadgeCatalogIcon
// Dependencies: [32, 19, 17, 21, 5899, 2]
// Exports: default

// Module 10652 (BadgeCatalogIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/badges/native/BadgeCatalogIcon.tsx");

export default function BadgeCatalogIcon(style) {
  let badge;
  let obj3;
  let tmp3;
  let tmp4;
  ({ badge, size } = style);
  const items = [, , ];
  ({ simple_icon_raster_url: arr[0], complex_icon_static_url: arr[1], complex_icon_animated_url: arr[2] } = badge);
  style = style.style;
  const found = items.filter((item) => null != item);
  const joined = found.join("|");
  [tmp3, tmp4] = react.useState({ urlsKey: joined, candidateIndex: 0 });
  let c0 = tmp4;
  _slicedToArray(react.useState({ urlsKey: joined, candidateIndex: 0 }), 2);
  if (tmp3.urlsKey !== joined) {
    const obj = { urlsKey: joined, candidateIndex: 0 };
    tmp4(obj);
  }
  [][0] = tmp4;
  const items1 = [{ width: size, height: size }, style];
  if (null == found[tmp3.candidateIndex]) {
    obj3 = { style: items1, "aria-hidden": true };
    const obj2 = { style: items1, "aria-hidden": true };
  } else {
    obj3 = { style: items1, "aria-hidden": true, children: null };
    const size1 = { width: size, height: size };
    const obj5 = { uri: found[tmp3.candidateIndex] };
  }
  return <tmp9 {...obj3} />;
};
