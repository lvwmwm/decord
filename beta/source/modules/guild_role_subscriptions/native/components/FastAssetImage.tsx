// Module ID: 14781
// Function ID: 14782
// Name: FastAssetImage
// Dependencies: [32, 19, 21, 5092, 5899, 2]
// Exports: default

// Module 14781 (FastAssetImage)
import Fragment from "Fragment" /* 21 */;
import StoreUtils from "StoreUtils" /* 5092 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let _slicedToArray = _slicedToArray_mod;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FastAssetImage.tsx");

export default function FastAssetImage(applicationId) {
  let closure_3;
  let first;
  let tmp3;
  applicationId = applicationId.applicationId;
  const asset = applicationId.asset;
  first = undefined;
  const style = applicationId.style;
  [first, tmp3] = react.useState();
  _slicedToArray = tmp3;
  const items = [tmp3];
  const items1 = [applicationId, asset, first];
  const onLayout = react.useCallback((nativeEvent) => {
    closure_3(nativeEvent.nativeEvent.layout.width);
  }, items);
  const source = react.useMemo(() => {
    let application_id;
    if (asset != null) {
      application_id = tmp.application_id;
    }
    if (application_id == null) {
      application_id = applicationId;
    }
    let uri = "";
    if (null != asset) {
      uri = "";
      if (null != application_id) {
        uri = "";
        if (null != first) {
          const obj = StoreUtils;
          uri = obj.getAssetURL(application_id, tmp, tmp3);
        }
      }
    }
    return { uri };
  }, items1);
  return jsx(asset(first[4]), { style, onLayout, source });
};
