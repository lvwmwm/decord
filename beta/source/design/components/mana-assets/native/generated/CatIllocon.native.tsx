// Module ID: 16361
// Function ID: 16362
// Name: CatIllocon
// Dependencies: [21, 5899, 16362, 2]
// Exports: CatIllocon

// Module 16361 (CatIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef16362 from "module_16362" /* 16362 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/CatIllocon.native.tsx");

export const CatIllocon = function CatIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const obj2 = { uri: _modDef16362 };
  FastImageDefault;
  const items = [{ width: num, height: num }];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};
