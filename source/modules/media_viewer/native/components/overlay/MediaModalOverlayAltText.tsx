// Module ID: 12267
// Function ID: 95779
// Dependencies: [31, 33, 4130, 689, 1557, 3803, 4660, 10885, 4126, 1212, 2]

// Module 12267
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

const require = arg1;
let closure_4 = _createForOfIteratorHelperLoose.createStyles((arg0) => {
  let obj = {};
  obj = { backgroundColor: importDefault(689).colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_ACTIVE, marginVertical: importDefault(689).space.PX_8, marginHorizontal: importDefault(689).space.PX_8, marginRight: importDefault(689).space.PX_8 + arg0, paddingHorizontal: importDefault(689).space.PX_8, paddingVertical: importDefault(689).space.PX_4, borderRadius: importDefault(689).radii.sm, alignSelf: "flex-end" };
  obj.container = obj;
  return obj;
});
const memoResult = require("result").memo(function MediaModalOverlayAltTextButton(description) {
  description = description.description;
  let str;
  str = "";
  if (null != description) {
    str = description;
  }
  const ViewImageDescriptions = str(3803).ViewImageDescriptions;
  let tmp2 = null;
  if (ViewImageDescriptions.useSetting()) {
    tmp2 = null;
    if (0 !== str.length) {
      let obj = {
        style: tmp.container,
        onPress() {
              const obj = {};
              const str = "";
              obj.description = str;
              outer1_1(outer1_2[7])(obj);
            },
        hitSlop: { top: 6, bottom: 6, left: 6, right: 6 }
      };
      obj = { variant: "text-xs/semibold", color: "text-overlay-light" };
      const intl = str(1212).intl;
      obj.children = intl.string(str(1212).t.Q5VqrN);
      obj.children = jsx(str(4126).Text, { variant: "text-xs/semibold", color: "text-overlay-light" });
      tmp2 = jsx(str(4660).PressableOpacity, { variant: "text-xs/semibold", color: "text-overlay-light" });
    }
  }
  return tmp2;
});
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/media_viewer/native/components/overlay/MediaModalOverlayAltText.tsx");

export default memoResult;
