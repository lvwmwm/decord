// Module ID: 13559
// Function ID: 104282
// Name: DevToolsScreens
// Dependencies: [31, 33, 9193, 13560, 13562, 13564, 13567, 10984, 9320, 13569, 13570, 10997, 13571, 13597, 13599, 7503, 13600, 14634, 14638, 14303, 14641, 4080, 14676, 10902, 14679, 10321, 14682, 11096, 14705, 9142, 14724, 14287, 14725, 8217, 14728, 9068, 14729, 11290, 14736, 14737, 13577, 14739, 4074, 14742, 10726, 14743, 14744, 2]

// Module 13559 (DevToolsScreens)
import "EyeDropperIcon";
import { jsx } from "ShieldIcon";

const require = arg1;
let obj = {};
obj = {
  headerTitle: "Analytics",
  Icon: require("ClipboardListIcon").ClipboardListIcon,
  render() {
    return jsx(require(13560) /* CommonProperty */.default, {});
  }
};
obj.analytics = obj;
obj = {
  headerTitle: "Build Override",
  Icon: require("RefreshIcon").RefreshIcon,
  render() {
    return jsx(require(13564) /* jsx */.default, {});
  }
};
obj.buildOverride = obj;
obj.experiments = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(10984) /* _createForOfIteratorHelperLoose */.default, {});
  }
};
const obj1 = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(10984) /* _createForOfIteratorHelperLoose */.default, {});
  }
};
obj.loggingFlags = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13569) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
const obj2 = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13569) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
obj.cacheStats = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13570) /* CacheLogEntry */.default, {});
  }
};
const obj3 = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13570) /* CacheLogEntry */.default, {});
  }
};
obj.generatedTestUsers = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13571) /* PoolIdInput */.default, {});
  }
};
const obj4 = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13571) /* PoolIdInput */.default, {});
  }
};
obj.dataStorage = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13599) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
const obj5 = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13599) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
obj.designSystems = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13600) /* SettingsDesignSystemsScreen */.default, {});
  }
};
const obj6 = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13600) /* SettingsDesignSystemsScreen */.default, {});
  }
};
obj.dismissibleContent = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14634) /* DismissableContentsEmpty */.default, {});
  }
};
const obj7 = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14634) /* DismissableContentsEmpty */.default, {});
  }
};
obj.gameCommunityUpsell = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14638) /* MultiGuildDevTools */.default, {});
  }
};
const obj8 = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14638) /* MultiGuildDevTools */.default, {});
  }
};
obj.i18n = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14641) /* TestLocaleSelector */.default, {});
  }
};
const obj9 = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14641) /* TestLocaleSelector */.default, {});
  }
};
obj.otatest = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14676) /* OtaVerificationActionSheet */.default, {});
  }
};
const obj10 = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14676) /* OtaVerificationActionSheet */.default, {});
  }
};
obj.profiling = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14679) /* TableRowGroupReactProfiling */.default, {});
  }
};
const obj11 = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14679) /* TableRowGroupReactProfiling */.default, {});
  }
};
obj.quickActions = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14682) /* handleNewUserOnboarding */.default, {});
  }
};
const obj12 = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14682) /* handleNewUserOnboarding */.default, {});
  }
};
obj.revenuePlayground = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14705) /* dismissalPath */.default, {});
  }
};
const obj13 = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14705) /* dismissalPath */.default, {});
  }
};
obj.surveyOverride = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14724) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
const obj14 = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14724) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
obj.toggles = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14725) /* fuzzySearchToggle */.default, {});
  }
};
const obj15 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14725) /* fuzzySearchToggle */.default, {});
  }
};
obj.ageVerification = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14728) /* showAgeVerificationTestModal */.default, {});
  }
};
const obj16 = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14728) /* showAgeVerificationTestModal */.default, {});
  }
};
obj.components = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14729) /* Select */.default, {});
  }
};
const obj17 = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14729) /* Select */.default, {});
  }
};
obj.shop = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14736) /* DevToolsShopScreen */.default, {});
  }
};
const obj18 = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14736) /* DevToolsShopScreen */.default, {});
  }
};
obj.shopProductPreview = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14737) /* FramePreviewOverrideSection */.default, {});
  }
};
const obj19 = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14737) /* FramePreviewOverrideSection */.default, {});
  }
};
obj.actionSheets = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14739) /* ActionSheetSelector */.default, {});
  }
};
const obj20 = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14739) /* ActionSheetSelector */.default, {});
  }
};
obj.accountLinking = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14742) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
const obj21 = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14742) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
obj.performanceTesting = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14743).default, {});
  }
};
const obj23 = {};
const obj22 = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14743).default, {});
  }
};
obj23.displayNameEffectsBenchmark = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14744) /* makeUniqueName */.default, {});
  }
};
const obj24 = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14744) /* makeUniqueName */.default, {});
  }
};
const result = require("ClipboardListIcon").fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj23;
