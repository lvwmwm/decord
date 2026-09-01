// Module ID: 16314
// Function ID: 16315
// Name: useChannelTopicGradientBackground
// Dependencies: [19, 4197, 712, 689, 2]
// Exports: useChannelTopicGradientBackground

// Module 16314 (useChannelTopicGradientBackground)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsTopicGradient.tsx");

export const useChannelTopicGradientBackground = function useChannelTopicGradientBackground() {
  token = token(4197).useToken(ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  return React.useMemo(() => {
    const obj = closure_1_1(closure_1_2[3])(token);
    const items = [closure_1_1(closure_1_2[3])(token).alpha(0).hex(), token];
    return items;
  }, items);
};
