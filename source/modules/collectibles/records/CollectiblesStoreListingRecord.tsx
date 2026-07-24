// Module ID: 6783
// Function ID: 53443
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1858, 6784, 665, 2]

// Module 6783 (_isNativeReflectConstruct)
import tinycolor from "tinycolor";
import pad2 from "pad2";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import tmp2 from "Record";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function parseStylesResponse(background_colors) {
  let tmp = background_colors;
  if (null != background_colors) {
    const obj = {};
    background_colors = background_colors.background_colors;
    obj.backgroundColors = background_colors.map((color) => {
      const tmp = outer1_1(outer1_2[6]);
      return tmp(outer1_0(outer1_2[7]).int2hex(color));
    });
    const button_colors = background_colors.button_colors;
    obj.buttonColors = button_colors.map((color) => {
      const tmp = outer1_1(outer1_2[6]);
      return tmp(outer1_0(outer1_2[7]).int2hex(color));
    });
    const confetti_colors = background_colors.confetti_colors;
    obj.confettiColors = confetti_colors.map((color) => {
      const tmp = outer1_1(outer1_2[6]);
      return tmp(outer1_0(outer1_2[7]).int2hex(color));
    });
    tmp = obj;
  }
  return tmp;
}
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/collectibles/records/CollectiblesStoreListingRecord.tsx");

export default tmp2;
