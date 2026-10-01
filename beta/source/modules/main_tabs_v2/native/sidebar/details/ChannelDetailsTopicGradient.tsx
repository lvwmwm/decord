// Module ID: 16560
// Function ID: 16561
// Name: ChannelDetailsTopicGradient
// Dependencies: [19, 4531, 576, 672, 2]
// Exports: useChannelTopicGradientBackground

// Module 16560 (ChannelDetailsTopicGradient)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx");

export const useChannelTopicGradientBackground = function useChannelTopicGradientBackground() {
  let token;
  let obj = token(4531);
  token = obj.useToken(nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return react.useMemo(() => {
    const items = [, ];
    const obj = _modDef672(token);
    const alphaResult = obj.alpha(0);
    items[0] = alphaResult.hex();
    items[1] = token;
    return items;
  }, items);
};
