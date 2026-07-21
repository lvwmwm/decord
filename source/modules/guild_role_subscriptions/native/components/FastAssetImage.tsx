// Module ID: 14004
// Function ID: 106536
// Name: FastAssetImage
// Dependencies: []
// Exports: default

// Module 14004 (FastAssetImage)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/FastAssetImage.tsx");

export default function FastAssetImage(style) {
  const applicationId = style.applicationId;
  const arg1 = applicationId;
  const asset = style.asset;
  const importDefault = asset;
  const tmp = callback(React.useState(), 2);
  const first = tmp[0];
  const dependencyMap = first;
  const callback = tmp3;
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
  return jsx(importDefault(dependencyMap[4]), { style: style.style, onLayout, source });
};
