// Module ID: 5243
// Function ID: 44371
// Name: result
// Dependencies: []

// Module 5243 (result)
const Platform = require(dependencyMap[0]).Platform;
const _module = require(dependencyMap[1]);
const result = _module.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.PRIMARY_230;
});
const _module1 = require(dependencyMap[1]);
const result1 = _module1.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_660;
});
const _module2 = require(dependencyMap[1]);
const result2 = _module2.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.BLACK : unsafe_rawColors.PRIMARY_100;
});
const _module3 = require(dependencyMap[1]);
const result3 = _module3.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_400;
});
const _module4 = require(dependencyMap[1]);
const result4 = _module4.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_600;
});
const _module5 = require(dependencyMap[1]);
const result5 = _module5.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.PRIMARY_100;
});
const _module6 = require(dependencyMap[1]);
const result6 = _module6.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.BLACK;
});
const _module7 = require(dependencyMap[1]);
const result7 = _module7.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_700 : unsafe_rawColors.PRIMARY_100;
});
const _module8 = require(dependencyMap[1]);
const result8 = _module8.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_300 : unsafe_rawColors.PRIMARY_500;
});
const _module9 = require(dependencyMap[1]);
const result9 = _module9.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_100 : unsafe_rawColors.PRIMARY_500;
});
const _module10 = require(dependencyMap[1]);
const result10 = _module10.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_100;
});
const _module11 = require(dependencyMap[1]);
const result11 = _module11.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_430;
});
const _module12 = require(dependencyMap[1]);
const result12 = _module12.experimental_createToken((primaryColor) => {
  if (null == primaryColor.primaryColor) {
    let PROFILE_GRADIENT_ROLE_PILL_BORDER = importDefault(dependencyMap[3]).colors.BORDER_SUBTLE;
  } else {
    PROFILE_GRADIENT_ROLE_PILL_BORDER = importDefault(dependencyMap[3]).colors.PROFILE_GRADIENT_ROLE_PILL_BORDER;
  }
  return PROFILE_GRADIENT_ROLE_PILL_BORDER;
});
const _module13 = require(dependencyMap[1]);
const result13 = _module13.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_260 : unsafe_rawColors.BRAND_200;
});
const _module14 = require(dependencyMap[1]);
const result14 = _module14.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_700 : unsafe_rawColors.PRIMARY_260;
});
const _module15 = require(dependencyMap[1]);
const result15 = _module15.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_160 = require(dependencyMap[4]).hexWithOpacity(importDefault(dependencyMap[3]).unsafe_rawColors.WHITE, 0.25);
    const obj2 = require(dependencyMap[4]);
  } else {
    PRIMARY_160 = importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_160;
  }
  return PRIMARY_160;
});
const _module16 = require(dependencyMap[1]);
const result16 = _module16.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.GUILD_BOOSTING_PINK;
});
const _module17 = require(dependencyMap[1]);
const result17 = _module17.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_360 : unsafe_rawColors.PRIMARY_400;
});
const _module18 = require(dependencyMap[1]);
const result18 = _module18.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.WHITE;
});
const _module19 = require(dependencyMap[1]);
const result19 = _module19.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_400;
});
const _module20 = require(dependencyMap[1]);
const result20 = _module20.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_400 : unsafe_rawColors.PRIMARY_360;
});
const _module21 = require(dependencyMap[1]);
const result21 = _module21.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.BRAND_330 : unsafe_rawColors.BRAND_530;
});
const _module22 = require(dependencyMap[1]);
const result22 = _module22.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.BLACK : unsafe_rawColors.PRIMARY_400;
});
const _module23 = require(dependencyMap[1]);
const result23 = _module23.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_700 : unsafe_rawColors.WHITE;
});
const _module24 = require(dependencyMap[1]);
const result24 = _module24.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let BACKGROUND_BASE_LOW = require(dependencyMap[4]).hexWithOpacity(importDefault(dependencyMap[3]).unsafe_rawColors.WHITE, 0.24);
    const obj2 = require(dependencyMap[4]);
  } else {
    BACKGROUND_BASE_LOW = importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOW;
  }
  return BACKGROUND_BASE_LOW;
});
const _module25 = require(dependencyMap[1]);
const result25 = _module25.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.WHITE;
});
const _module26 = require(dependencyMap[1]);
const result26 = _module26.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PLATFORM_PLAYSTATION;
});
const _module27 = require(dependencyMap[1]);
const result27 = _module27.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let WHITE = require(dependencyMap[4]).hexWithOpacity(importDefault(dependencyMap[3]).unsafe_rawColors.WHITE, 0.24);
    const obj2 = require(dependencyMap[4]);
  } else {
    WHITE = importDefault(dependencyMap[3]).unsafe_rawColors.WHITE;
  }
  return WHITE;
});
const _module28 = require(dependencyMap[1]);
const result28 = _module28.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.RED_500 : unsafe_rawColors.RED_400;
});
const _module29 = require(dependencyMap[1]);
const result29 = _module29.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.RED_400 : unsafe_rawColors.RED_360;
});
const _module30 = require(dependencyMap[1]);
const result30 = _module30.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_700 : unsafe_rawColors.PRIMARY_230;
});
const _module31 = require(dependencyMap[1]);
const result31 = _module31.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_200;
});
const _module32 = require(dependencyMap[1]);
const result32 = _module32.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.YELLOW_460 : unsafe_rawColors.YELLOW_200;
});
const _module33 = require(dependencyMap[1]);
const result33 = _module33.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_400 : unsafe_rawColors.PRIMARY_300;
});
const _module34 = require(dependencyMap[1]);
const result34 = _module34.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_300;
});
const _module35 = require(dependencyMap[1]);
const result35 = _module35.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_200 : unsafe_rawColors.PRIMARY_400;
});
const _module36 = require(dependencyMap[1]);
const result36 = _module36.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.WHITE : unsafe_rawColors.PRIMARY_500;
});
const _module37 = require(dependencyMap[1]);
const result37 = _module37.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_330 : unsafe_rawColors.PRIMARY_460;
});
const _module38 = require(dependencyMap[1]);
const result38 = _module38.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_200;
});
const _module39 = require(dependencyMap[1]);
const result39 = _module39.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_500 : unsafe_rawColors.PRIMARY_230;
});
const _module40 = require(dependencyMap[1]);
const result40 = _module40.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_600 : unsafe_rawColors.PRIMARY_130;
});
const _module41 = require(dependencyMap[1]);
const result41 = _module41.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_130;
});
const _module42 = require(dependencyMap[1]);
const result42 = _module42.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_800 : unsafe_rawColors.PRIMARY_300;
});
const _module43 = require(dependencyMap[1]);
const result43 = _module43.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_660 : unsafe_rawColors.PRIMARY_300;
});
const _module44 = require(dependencyMap[1]);
const result44 = _module44.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.TRANSPARENT;
});
const _module45 = require(dependencyMap[1]);
const result45 = _module45.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.TRANSPARENT : unsafe_rawColors.WHITE;
});
const _module46 = require(dependencyMap[1]);
const result46 = _module46.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  return require(dependencyMap[2]).isThemeDark(theme.theme) ? unsafe_rawColors.PRIMARY_630 : unsafe_rawColors.PRIMARY_160;
});
const _module47 = require(dependencyMap[1]);
const result47 = _module47.experimental_createToken((theme) => {
  let str = "#dee0e4";
  if (obj.isThemeDark(theme.theme)) {
    str = "#393c42";
  }
  return str;
});
const _module48 = require(dependencyMap[1]);
const result48 = _module48.experimental_createToken((theme) => {
  let num = 1;
  if (obj.isThemeDark(theme.theme)) {
    num = 0;
  }
  return num;
});
const _module49 = require(dependencyMap[1]);
const result49 = _module49.experimental_createToken((theme) => {
  let num = 0.8;
  if (obj.isThemeDark(theme.theme)) {
    num = 1;
  }
  return num;
});
const _module50 = require(dependencyMap[1]);
const result50 = _module50.experimental_createToken((theme) => {
  let num = 0.4;
  if (obj.isThemeDark(theme.theme)) {
    num = 1;
  }
  return num;
});
const _module51 = require(dependencyMap[1]);
const result51 = _module51.experimental_createToken((theme) => {
  let num = 0.2;
  if (obj.isThemeDark(theme.theme)) {
    num = 0.3;
  }
  return num;
});
const _module52 = require(dependencyMap[1]);
const result52 = _module52.experimental_createToken((theme) => {
  let num = 0.16;
  if (obj.isThemeDark(theme.theme)) {
    num = 0.24;
  }
  return num;
});
const _module53 = require(dependencyMap[1]);
const result53 = _module53.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  if (isThemeDarkResult) {
    const PRIMARY_200 = unsafe_rawColors.PRIMARY_200;
  } else {
    const PRIMARY_500 = unsafe_rawColors.PRIMARY_500;
  }
});
const _module54 = require(dependencyMap[1]);
const result54 = _module54.experimental_createToken((theme) => {
  let str = "rgba(0, 0, 0, 0.16)";
  if (obj.isThemeDark(theme.theme)) {
    str = "rgba(0, 0, 0, 0.24)";
  }
  return str;
});
const _module55 = require(dependencyMap[1]);
const result55 = _module55.experimental_createToken((theme) => {
  let str = "rgba(106, 116, 128, 0.16)";
  if (obj.isThemeDark(theme.theme)) {
    str = "rgba(79, 84, 92, 0.4)";
  }
  return str;
});
const _module56 = require(dependencyMap[1]);
const result56 = _module56.experimental_createToken((theme) => {
  let str = "rgba(106, 116, 128, 0.16)";
  if (obj.isThemeDark(theme.theme)) {
    str = "rgba(79, 84, 92, 0.4)";
  }
  return str;
});
const _module57 = require(dependencyMap[1]);
const result57 = _module57.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const isThemeDarkResult = require(dependencyMap[2]).isThemeDark(theme.theme);
  const hexWithOpacity = require(dependencyMap[4]).hexWithOpacity;
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_100, 0.5);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_500, 0.5);
  }
  return hexWithOpacityResult;
});
const _module58 = require(dependencyMap[1]);
const result58 = _module58.experimental_createToken((theme) => {
  const obj = require(dependencyMap[2]);
  const isThemeDarkResult = require(dependencyMap[2]).isThemeDark(theme.theme);
  const hexWithOpacity = require(dependencyMap[4]).hexWithOpacity;
  const unsafe_rawColors = importDefault(dependencyMap[3]).unsafe_rawColors;
  if (isThemeDarkResult) {
    let hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_500, 0.5);
  } else {
    hexWithOpacityResult = hexWithOpacity(unsafe_rawColors.PRIMARY_430, 0.5);
  }
  return hexWithOpacityResult;
});
const _module59 = require(dependencyMap[1]);
const result59 = _module59.experimental_createToken((theme) => {
  if (obj.isThemeDark(theme.theme)) {
    let PRIMARY_500 = importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_500;
  } else {
    PRIMARY_500 = require(dependencyMap[4]).hexWithOpacity(importDefault(dependencyMap[3]).unsafe_rawColors.PRIMARY_500, 0.3);
    const obj2 = require(dependencyMap[4]);
  }
  return PRIMARY_500;
});
const _module60 = require(dependencyMap[5]);
const result60 = _module60.fileFinishedImporting("design/migrations/native/LegacyTokens.tsx");

export const DARK_PRIMARY_630_LIGHT_PRIMARY_230 = result;
export const DARK_WHITE_500_LIGHT_PRIMARY_660 = result1;
export const DARK_BLACK_500_LIGHT_PRIMARY_100 = result2;
export const DARK_PRIMARY_300_LIGHT_PRIMARY_400 = result3;
export const DARK_WHITE_500_LIGHT_PRIMARY_600 = result4;
export const DARK_PRIMARY_630_LIGHT_PRIMARY_100 = result5;
export const DARK_WHITE_500_LIGHT_BLACK_500 = result6;
export const DARK_PRIMARY_700_LIGHT_PRIMARY_100 = result7;
export const DARK_PRIMARY_300_LIGHT_PRIMARY_500 = result8;
export const DARK_PRIMARY_100_LIGHT_PRIMARY_500 = result9;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_100 = result10;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_430 = result11;
export const DIVIDER_BACKGROUND = result12;
export const DARK_BRAND_260_LIGHT_BRAND_200 = result13;
export const DARK_PRIMARY_700_LIGHT_PRIMARY_260 = result14;
export const DARK_WHITE_500_WITH_OPACITY_LIGHT_PRIMARY_160 = result15;
export const DARK_WHITE_500_LIGHT_GUILD_BOOSTING_PINK = result16;
export const DARK_PRIMARY_360_LIGHT_PRIMARY_400 = result17;
export const DARK_PRIMARY_630_LIGHT_WHITE_500 = result18;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_400 = result19;
export const DARK_PRIMARY_400_LIGHT_PRIMARY_360 = result20;
export const DARK_BRAND_330_LIGHT_BRAND_530 = result21;
export const DARK_BLACK_500_LIGHT_PRIMARY_400 = result22;
export const DARK_PRIMARY_700_LIGHT_WHITE_500 = result23;
export const ACTION_BAR_BUTTON_BACKGROUND = result24;
export const DARK_PRIMARY_600_LIGHT_WHITE_500 = result25;
export const DARK_WHITE_500_LIGHT_PLAYSTATION = result26;
export const CONTAINER_BACKGROUND = result27;
export const DARK_RED_500_LIGHT_RED_400 = result28;
export const DARK_RED_400_LIGHT_RED_360 = result29;
export const DARK_PRIMARY_700_LIGHT_PRIMARY_230 = result30;
export const DARK_PRIMARY_800_LIGHT_PRIMARY_200 = result31;
export const DARK_YELLOW_460_LIGHT_YELLOW_200 = result32;
export const DARK_PRIMARY_400_LIGHT_PRIMARY_300 = result33;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_300 = result34;
export const DARK_PRIMARY_200_LIGHT_PRIMARY_400 = result35;
export const DARK_WHITE_500_LIGHT_PRIMARY_500 = result36;
export const DARK_PRIMARY_330_LIGHT_PRIMARY_460 = result37;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_200 = result38;
export const DARK_PRIMARY_500_LIGHT_PRIMARY_230 = result39;
export const DARK_PRIMARY_600_LIGHT_PRIMARY_130 = result40;
export const DARK_PRIMARY_660_LIGHT_PRIMARY_130 = result41;
export const DARK_PRIMARY_800_LIGHT_PRIMARY_300 = result42;
export const DARK_PRIMARY_660_LIGHT_PRIMARY_300 = result43;
export const DARK_PRIMARY_630_LIGHT_TRANSPARENT = result44;
export const DARK_TRANSPARENT_LIGHT_WHITE_500 = result45;
export const DARK_PRIMARY_630_LIGHT_PRIMARY_160 = result46;
export const DARK_393C42_LIGHT_DEE0E4 = result47;
export const DARK_0_LIGHT_1 = result48;
export const DARK_1_LIGHT_08 = result49;
export const DARK_1_LIGHT_04 = result50;
export const DARK_03_LIGHT_02 = result51;
export const DARK_024_LIGHT_016 = result52;
export const FORM_TERNARY_CHECK_BOX_PASSTHROUGH_ACTIVE_BG = result53;
export const TOAST_CONTAINER_SHADOW_COLOR = result54;
export const PREMIUM_FEATURES_TABLE_HIGHLIGHTED_CELL_BG = result55;
export const TIER_0_MARKETING_PAGE_BACK_BUTTON_BG = result56;
export const BUTTON_PRIMARY_DISABLED_BACKGROUND = result57;
export const BUTTON_GREY_DISABLED_BACKGROUND = result58;
export const BUTTON_OUTLINED_BORDER = result59;
