// Module ID: 339
// Function ID: 340
// Dependencies: [19, 21, 340, 254]
// Exports: default

// Module 339
import Fragment from "Fragment" /* 21 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 340 */;
import react from "react" /* 19 */;
import get_hairlineWidth from "get hairlineWidth" /* 254 */;

const jsx = Fragment.jsx;
get_hairlineWidth.create({ container: { position: "absolute" }, safeAreaView: { flex: 1 } });

export default function _default(arg0) {
  const width = useWindowDimensionsDefault().width;
  console.warn("<InputAccessoryView> is only supported on iOS.");
  return null;
};
