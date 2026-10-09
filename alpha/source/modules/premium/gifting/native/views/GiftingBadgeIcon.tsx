// Module ID: 10076
// Function ID: 10077
// Name: GiftingBadgeIcon
// Dependencies: [19, 21, 558, 576, 6163, 2]

// Module 10076 (GiftingBadgeIcon)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import FastImageDefault from "FastImage" /* 6163 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function GiftingBadgeIcon(arg0) {
  let icon;
  let style;
  let tmp3;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(10);
  ({ icon, size, style } = arg0);
  if (cResult[0] !== icon) {
    const obj2 = { uri: icon };
    cResult[0] = icon;
    cResult[1] = obj2;
    tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] !== size) {
    const size1 = { width: size, height: size };
    cResult[2] = size;
    cResult[3] = size1;
    tmp4 = size1;
  } else {
    tmp4 = cResult[3];
  }
  if (cResult[4] === style) {
    let tmp5;
    if (cResult[5] === tmp4) {
      tmp5 = cResult[6];
    }
    if (cResult[7] === tmp3) {
      let tmp6;
      if (cResult[8] === tmp5) {
        tmp6 = cResult[9];
      }
      return tmp6;
    }
    const tmp9 = jsx(FastImageDefault, { source: tmp3, resizeMode: "contain", style: tmp5 });
    cResult[7] = tmp3;
    cResult[8] = tmp5;
    cResult[9] = tmp9;
    tmp6 = tmp9;
  }
  const items = [tmp4, style];
  cResult[4] = style;
  cResult[5] = tmp4;
  cResult[6] = items;
  tmp5 = items;
}) : (function GiftingBadgeIcon(size) {
  let icon;
  let style;
  size = size.size;
  ({ icon, style } = size);
  const items = [{ width: size, height: size }, style];
  return jsx(FastImageDefault, { source: { uri: icon }, resizeMode: "contain", style: items });
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default tmp3;
