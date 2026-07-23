// Module ID: 15829
// Function ID: 122252
// Dependencies: [57, 31, 27, 33, 4130, 5517, 11204, 2]

// Module 15829
import _slicedToArray from "_slicedToArray";
import importAllResult from "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_6 = _createForOfIteratorHelperLoose.createStyles((aspectRatio) => {
  const activityImage = { width: "100%", aspectRatio };
  return { previewImage: { alignItems: "center", justifyContent: "center", backgroundColor: "black" }, activityImage };
});
const memoResult = importAllResult.memo(function ActivityShelfItemBackground(aspectRatio) {
  let accessibilityLabel;
  let imageBackground;
  ({ imageBackground, accessibilityLabel } = aspectRatio);
  const tmp = callback2(aspectRatio.aspectRatio);
  const tmp2 = callback(importAllResult.useState(false), 2);
  const importDefault = tmp2[1];
  if ("not-found" !== imageBackground.state) {
    if (!tmp2[0]) {
      if ("loading" !== imageBackground.state) {
        if (null != imageBackground.url) {
          let obj = { style: tmp.previewImage };
          obj = {
            onError() {
                      return callback(true);
                    }
          };
          const obj1 = { uri: imageBackground.url };
          obj.source = obj1;
          obj.style = tmp.activityImage;
          obj.accessibilityRole = "image";
          let str2 = "";
          if (null != accessibilityLabel) {
            str2 = accessibilityLabel;
          }
          obj.accessibilityLabel = str2;
          obj.children = <Image onError={function onError() {
            return callback(true);
          }} />;
          let tmp9Result = tmp9(importDefault(5517), obj);
          const tmp12 = importDefault(5517);
          const tmp13 = Image;
        }
      }
      obj = { style: tmp.previewImage };
      tmp9Result = jsx(importDefault(5517), { style: tmp.previewImage });
    }
    return tmp9Result;
  }
  const obj2 = { style: tmp.previewImage, children: jsx(importDefault(11204), {}) };
  tmp9Result = jsx(importDefault(5517), { style: tmp.previewImage, children: jsx(importDefault(11204), {}) });
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/voice_panel/native/controls/activities/ActivityShelfItemBackground.tsx");

export default memoResult;
