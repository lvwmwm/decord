// Module ID: 11545
// Function ID: 89890
// Name: GuildPowerupsImage
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 11545 (GuildPowerupsImage)
import closure_3 from "result";
import { jsx } from "result";
import result from "result";
import result from "result";

let closure_5 = result.createStyles({ image: { backgroundColor: "<string:1124139010>", borderRadius: "a862b6233b8adb8343f06086abc5314a", height: "cs.messages.a862b6233b8adb8343f06086abc5314a.compiled.messages", overflow: "jsona" } });
result = result.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsImage.tsx");

export default function GuildPowerupsImage(style) {
  let imageUrl;
  let isAnimated;
  ({ imageUrl, isAnimated } = style);
  if (isAnimated === undefined) {
    isAnimated = true;
  }
  style = style.style;
  const tmp = callback();
  let obj = arg1(dependencyMap[3]);
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (obj2.isAndroid()) {
    if (isAnimated) {
      if (!stateFromStores) {
        obj = {};
        const items1 = [tmp.image, style];
        obj.style = items1;
        obj.url = imageUrl;
        let tmp6 = jsx(importDefault(dependencyMap[5]), obj);
      }
      return tmp6;
    }
  }
  const items2 = [tmp.image, style];
  tmp6 = jsx(importDefault(dependencyMap[6]), { style: items2, source: { uri: imageUrl } });
};
