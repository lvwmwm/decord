// Module ID: 10784
// Function ID: 83742
// Dependencies: [31, 482, 33, 3840, 2, 1273]

// Module 10784
import { View } from "sum";
import { jsx } from "module_33";
import importAllResult from "module_31";
import Button from "Button";

const result = Button.fileFinishedImporting("modules/stage_channels/native/components/BlankAudienceTile.tsx");

export default require("module_31").memo(() => {
  let obj = arg1(dependencyMap[4]);
  const audienceTileStyles = obj.useAudienceTileStyles();
  obj = {};
  const items = [audienceTileStyles.container, ];
  obj = { width: arg1(dependencyMap[4]).getTileWidthStyle(importDefault(dependencyMap[3])().width) };
  items[1] = obj;
  obj.style = items;
  return <View {...obj} />;
});
