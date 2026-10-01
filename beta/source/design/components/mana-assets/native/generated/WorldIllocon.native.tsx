// Module ID: 12225
// Function ID: 12226
// Name: WorldIllocon
// Dependencies: [21, 5899, 12226, 2]
// Exports: WorldIllocon

// Module 12225 (WorldIllocon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5899 */;
import _modDef12226 from "module_12226" /* 12226 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("design/components/mana-assets/native/generated/WorldIllocon.native.tsx");

export const WorldIllocon = function WorldIllocon(size) {
  let accessibilityLabel;
  let accessible;
  let resizeMode;
  let num = size.size;
  ({ accessible, accessibilityLabel, resizeMode } = size);
  if (num === undefined) {
    num = 64;
  }
  const obj2 = { uri: _modDef12226 };
  FastImageDefault;
  const items = [{ width: num, height: num }];
  return <tmp fadeDuration={0} source={obj2} style={items} accessible={accessible} accessibilityLabel={accessibilityLabel} resizeMode={resizeMode} />;
};
