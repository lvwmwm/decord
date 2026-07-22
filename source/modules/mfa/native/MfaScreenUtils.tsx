// Module ID: 14529
// Function ID: 109407
// Dependencies: [5, 57, 31, 27]

// Module 14529
import asyncGeneratorStep from "asyncGeneratorStep";
import get ActivityIndicator from "get ActivityIndicator";

const obj = {};
obj.useScreenStyles = asyncGeneratorStep.createStyles((arg0) => {
  let obj = {};
  obj = {};
  const NAV_BAR_HEIGHT = require(dependencyMap[1]).NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - tmp(tmp2[1]).STATUS_BAR_HEIGHT;
  }
  obj.marginTop = diff;
  const space = importDefault(dependencyMap[2]).space;
  obj.marginLeft = arg0 ? space.PX_24 : space.PX_16;
  const space2 = importDefault(dependencyMap[2]).space;
  obj.marginRight = arg0 ? space2.PX_24 : space2.PX_16;
  const space3 = importDefault(dependencyMap[2]).space;
  obj.paddingBottom = arg0 ? space3.PX_24 : space3.PX_16;
  obj.flex = 1;
  obj.flexDirection = "column";
  obj.justifyContent = "space-between";
  obj.alignItems = "stretch";
  obj.contentContainer = obj;
  obj = { <string:3814666730>: 8, <string:1280564396>: 18, paddingBottom: importDefault(dependencyMap[2]).space.PX_24 };
  obj.mfaContainerHeader = obj;
  const obj1 = {};
  let num = 0;
  if (!arg0) {
    num = importDefault(dependencyMap[2]).space.PX_32;
  }
  obj1.marginHorizontal = num;
  let num2 = 0;
  if (!arg0) {
    num2 = importDefault(dependencyMap[2]).space.PX_12;
  }
  obj1.marginTop = num2;
  obj1.textAlign = "center";
  obj.mfaContainerHeaderText = obj1;
  obj.inputContainer = {};
  obj.smsContainer = {};
  obj.smsInput = {};
  obj.radioItem = { backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[2]).radii.md };
  const obj2 = { backgroundColor: importDefault(dependencyMap[2]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[2]).radii.md };
  const tmp = require;
  const tmp2 = dependencyMap;
  obj.submit = { paddingTop: importDefault(dependencyMap[2]).space.PX_24 };
  return obj;
});
const result = get_ActivityIndicator.fileFinishedImporting("modules/mfa/native/MfaScreenUtils.tsx");

export default obj;
