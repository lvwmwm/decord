// Module ID: 10642
// Function ID: 82982
// Name: EmbeddedActivityBackgroundImageWithOverlay
// Dependencies: [57, 31, 27, 33, 4130, 689, 10643, 2]
// Exports: default

// Module 10642 (EmbeddedActivityBackgroundImageWithOverlay)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
({ ImageBackground: closure_4, View: closure_5, StyleSheet: closure_6 } = get_ActivityIndicator);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, opacity: 0.6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BLACK };
_createForOfIteratorHelperLoose.overlay = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_9 = ["embedded_background"];
const result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  let application;
  let borderRadius;
  let dimensionsStyle;
  let resizeMode;
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  let importDefault;
  const tmp2 = callback(React.useState(false), 2);
  importDefault = tmp2[1];
  let obj = {};
  let id;
  const tmp = _createForOfIteratorHelperLoose();
  if (null != application) {
    id = application.id;
  }
  let str = "";
  if (null != id) {
    str = id;
  }
  obj.applicationId = str;
  obj.names = closure_9;
  obj.size = 1024;
  const url = importDefault(10643)(obj).url;
  let tmp10Result = null;
  if (!tmp2[0]) {
    tmp10Result = null;
    if (null != url) {
      tmp10Result = null;
      if ("" !== url) {
        obj = { resizeMode };
        obj = {};
        let tmp6;
        if (null != url) {
          tmp6 = url;
        }
        obj.uri = tmp6;
        obj.source = obj;
        if (null == dimensionsStyle) {
          dimensionsStyle = absoluteFillObject.absoluteFillObject;
        }
        obj.style = dimensionsStyle;
        const obj1 = { borderRadius };
        obj.imageStyle = obj1;
        obj.onError = function onError() {
          return callback(true);
        };
        const obj2 = {};
        const items = [tmp.overlay, ];
        const obj3 = { borderRadius };
        items[1] = obj3;
        obj2.style = items;
        obj.children = <closure_5 />;
        tmp10Result = <closure_4 />;
        const tmp10 = jsx;
        const tmp11 = closure_4;
      }
    }
  }
  return tmp10Result;
};
