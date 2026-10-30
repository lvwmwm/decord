// Module ID: 18767
// Function ID: 18768
// Name: ChannelDetailsTopicGradient
// Dependencies: [19, 5591, 575, 671, 2]
// Exports: useChannelTopicGradientBackground

// Module 18767 (ChannelDetailsTopicGradient)
import nativeDefault from "native" /* 575 */;
import _modDef671 from "module_671" /* 671 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx");

export function useChannelTopicGradientBackground() {
  let token;
  let obj = token(5591);
  token = obj.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return react.useMemo(() => {
    const items = [, ];
    const obj = _modDef671(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = token;
    return items;
  }, items);
}
