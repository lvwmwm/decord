// Module ID: 16771
// Function ID: 16772
// Name: ShopIllocon
// Dependencies: [21, 5899, 16772, 2]
// Exports: ShopIllocon

// Module 16771 (ShopIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef16772 from "module_16772" /* 16772 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/ShopIllocon.native.tsx");

export const ShopIllocon = function ShopIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const obj2 = { uri: _modDef16772 };
  FastImageDefault;
  const items = [{ width: num, height: num }];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};
