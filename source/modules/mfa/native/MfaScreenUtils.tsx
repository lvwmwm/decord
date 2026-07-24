// Module ID: 14690
// Function ID: 111888
// Dependencies: [4130, 5084, 689, 2]

// Module 14690
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let obj = {};
obj.useScreenStyles = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = {};
  const NAV_BAR_HEIGHT = require(5084) /* NAV_BAR_HEIGHT */.NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - tmp(5084).STATUS_BAR_HEIGHT;
  }
  obj.marginTop = diff;
  const space = importDefault(689).space;
  obj.marginLeft = arg0 ? space.PX_24 : space.PX_16;
  const space2 = importDefault(689).space;
  obj.marginRight = arg0 ? space2.PX_24 : space2.PX_16;
  const space3 = importDefault(689).space;
  obj.paddingBottom = arg0 ? space3.PX_24 : space3.PX_16;
  obj.flex = 1;
  obj.flexDirection = "column";
  obj.justifyContent = "space-between";
  obj.alignItems = "stretch";
  obj.contentContainer = obj;
  obj = { flexDirection: "column", alignItems: "center", paddingBottom: importDefault(689).space.PX_24 };
  obj.mfaContainerHeader = obj;
  const obj1 = {};
  let num = 0;
  if (!arg0) {
    num = importDefault(689).space.PX_32;
  }
  obj1.marginHorizontal = num;
  let num2 = 0;
  if (!arg0) {
    num2 = importDefault(689).space.PX_12;
  }
  obj1.marginTop = num2;
  obj1.textAlign = "center";
  obj.mfaContainerHeaderText = obj1;
  obj.inputContainer = { flexDirection: "column", alignSelf: "stretch" };
  obj.smsContainer = { flexDirection: "column", alignSelf: "stretch" };
  obj.smsInput = { flexDirection: "row", alignSelf: "stretch" };
  obj.radioItem = { backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).radii.md };
  const obj2 = { backgroundColor: importDefault(689).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(689).radii.md };
  tmp = require;
  obj.submit = { paddingTop: importDefault(689).space.PX_24 };
  return obj;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/mfa/native/MfaScreenUtils.tsx");

export default obj;
