// Module ID: 13631
// Function ID: 13632
// Name: DevToolsScreens
// Dependencies: [19, 21, 9149, 13632, 13634, 13636, 13639, 10994, 9277, 13641, 13642, 11011, 13643, 13669, 13671, 6641, 13672, 14709, 14713, 14377, 14716, 4139, 14751, 10911, 14754, 10312, 14757, 11114, 14780, 9098, 14799, 14361, 14800, 9024, 14803, 9022, 14804, 11311, 14811, 14812, 13649, 14814, 4133, 14817, 10749, 14818, 14819, 14820, 2]

// Module 13631 (DevToolsScreens)
import "LanguageIcon";
import { jsx } from "DownloadIcon";

const require = arg1;
let obj = { analytics: null, buildOverride: null, experiments: null, loggingFlags: null, cacheStats: null, generatedTestUsers: null, dataStorage: null, designSystems: null, dismissibleContent: null, gameCommunityUpsell: null, i18n: null, otatest: null, profiling: null, quickActions: null, revenuePlayground: null, surveyOverride: null, toggles: null, ageVerification: null, components: null, shop: null, shopProductPreview: null, actionSheets: null, accountLinking: null, performanceTesting: null, inAppNotificationTesting: null };
obj = {
  headerTitle: "Analytics",
  Icon: require("ClipboardListIcon").ClipboardListIcon,
  render() {
    return jsx(require(13632) /* CommonProperty */.default, {});
  }
};
obj[0] = obj;
obj = {
  headerTitle: "Build Override",
  Icon: require("RefreshIcon").RefreshIcon,
  render() {
    return jsx(require(13636) /* jsx */.default, {});
  }
};
obj[1] = obj;
obj[2] = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(10994) /* UserExperimentDebugView */.default, {});
  }
};
const obj1 = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(10994) /* UserExperimentDebugView */.default, {});
  }
};
obj[3] = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13641) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
const obj2 = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13641) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
obj[4] = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13642) /* CacheLogEntry */.default, {});
  }
};
const obj3 = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13642) /* CacheLogEntry */.default, {});
  }
};
obj[5] = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13643) /* PoolIdInput */.default, {});
  }
};
const obj4 = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13643) /* PoolIdInput */.default, {});
  }
};
obj[6] = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13671) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
const obj5 = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13671) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
obj[7] = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13672) /* SettingsDesignSystemsScreen */.default, {});
  }
};
const obj6 = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13672) /* SettingsDesignSystemsScreen */.default, {});
  }
};
obj[8] = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14709) /* DismissableContentsEmpty */.default, {});
  }
};
const obj7 = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14709) /* DismissableContentsEmpty */.default, {});
  }
};
obj[9] = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14713) /* MultiGuildDevTools */.default, {});
  }
};
const obj8 = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14713) /* MultiGuildDevTools */.default, {});
  }
};
obj[10] = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14716) /* TestLocaleSelector */.default, {});
  }
};
const obj9 = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14716) /* TestLocaleSelector */.default, {});
  }
};
obj[11] = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14751) /* OtaVerificationActionSheet */.default, {});
  }
};
const obj10 = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14751) /* OtaVerificationActionSheet */.default, {});
  }
};
obj[12] = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14754) /* DevToolsProfilingScreen */.default, {});
  }
};
const obj11 = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14754) /* DevToolsProfilingScreen */.default, {});
  }
};
obj[13] = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14757) /* handleNewUserOnboarding */.default, {});
  }
};
const obj12 = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14757) /* handleNewUserOnboarding */.default, {});
  }
};
obj[14] = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14780) /* describeServerError */.default, {});
  }
};
const obj13 = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14780) /* describeServerError */.default, {});
  }
};
obj[15] = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14799) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
const obj14 = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14799) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
obj[16] = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14800) /* fuzzySearchToggle */.default, {});
  }
};
const obj15 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14800) /* fuzzySearchToggle */.default, {});
  }
};
obj[17] = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14803) /* showAgeVerificationTestModal */.default, {});
  }
};
const obj16 = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14803) /* showAgeVerificationTestModal */.default, {});
  }
};
obj[18] = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14804) /* Select */.default, {});
  }
};
const obj17 = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14804) /* Select */.default, {});
  }
};
obj[19] = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14811) /* DevToolsShopScreen */.default, {});
  }
};
const obj18 = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14811) /* DevToolsShopScreen */.default, {});
  }
};
obj[20] = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14812) /* FramePreviewOverrideSection */.default, {});
  }
};
const obj19 = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14812) /* FramePreviewOverrideSection */.default, {});
  }
};
obj[21] = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14814) /* ActionSheetSelector */.default, {});
  }
};
const obj20 = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14814) /* ActionSheetSelector */.default, {});
  }
};
obj[22] = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14817) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
const obj21 = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14817) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
obj[23] = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14818).default, {});
  }
};
const obj22 = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14818).default, {});
  }
};
obj[24] = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14819) /* handleResetInAppNotificationExpandNux */.default, {});
  }
};
const obj24 = { displayNameEffectsBenchmark: null };
const obj23 = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14819) /* handleResetInAppNotificationExpandNux */.default, {});
  }
};
obj24[0] = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14820) /* effectName */.default, {});
  }
};
const obj25 = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14820) /* effectName */.default, {});
  }
};
const result = require("ClipboardListIcon").fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj24;
