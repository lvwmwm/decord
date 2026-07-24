// Module ID: 14175
// Function ID: 109055
// Name: FastAssetImage
// Dependencies: [57, 31, 33, 4369, 5085, 2]
// Exports: default

// Module 14175 (FastAssetImage)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FastAssetImage.tsx");

export default function FastAssetImage(style) {
  const applicationId = style.applicationId;
  const asset = style.asset;
  const tmp = callback(React.useState(), 2);
  const first = tmp[0];
  callback = tmp3;
  const items = [tmp[1]];
  const items1 = [applicationId, asset, first];
  const onLayout = React.useCallback((nativeEvent) => {
    tmp3(nativeEvent.nativeEvent.layout.width);
  }, items);
  const source = React.useMemo(() => {
    let application_id;
    if (null != asset) {
      application_id = asset.application_id;
    }
    if (null == application_id) {
      application_id = applicationId;
    }
    const obj = {};
    let str = "";
    if (null != asset) {
      str = "";
      if (null != application_id) {
        str = "";
        if (null != first) {
          str = applicationId(first[3]).getAssetURL(application_id, asset, first);
          const obj2 = applicationId(first[3]);
        }
      }
    }
    obj.uri = str;
    return obj;
  }, items1);
  return jsx(asset(first[4]), { style: style.style, onLayout, source });
};
