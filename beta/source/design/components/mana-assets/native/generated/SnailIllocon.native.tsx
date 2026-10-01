// Module ID: 16353
// Function ID: 16354
// Name: SnailIllocon
// Dependencies: [21, 5899, 16354, 2]
// Exports: SnailIllocon

// Module 16353 (SnailIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef16354 from "module_16354" /* 16354 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/SnailIllocon.native.tsx");

export const SnailIllocon = function SnailIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const obj2 = { uri: _modDef16354 };
  FastImageDefault;
  const items = [{ width: num, height: num }];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};
