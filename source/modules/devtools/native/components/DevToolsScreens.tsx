// Module ID: 13774
// Function ID: 13775
// Name: DevToolsScreens
// Dependencies: [19, 21, 8364, 13775, 13777, 13779, 13782, 11144, 8507, 13784, 13785, 11157, 13786, 13812, 13814, 7661, 13815, 14866, 14870, 14535, 14873, 4252, 14908, 11002, 14911, 9763, 14914, 11265, 14937, 9607, 14956, 14513, 14957, 10166, 14960, 10475, 14961, 11459, 14968, 14969, 13792, 14971, 4246, 14974, 10766, 14975, 14976, 14977, 2]

// Module 13774 (DevToolsScreens)
import "LanguageIcon";
import { jsx } from "DownloadIcon";

const require = arg1;
let obj = { analytics: null, buildOverride: null, experiments: null, loggingFlags: null, cacheStats: null, generatedTestUsers: null, dataStorage: null, designSystems: null, dismissibleContent: null, gameCommunityUpsell: null, i18n: null, otatest: null, profiling: null, quickActions: null, revenuePlayground: null, surveyOverride: null, toggles: null, ageVerification: null, components: null, shop: null, shopProductPreview: null, actionSheets: null, accountLinking: null, performanceTesting: null, inAppNotificationTesting: null };
obj = {
  headerTitle: "Analytics",
  Icon: require("ClipboardListIcon").ClipboardListIcon,
  render() {
    return jsx(require(13775) /* CommonProperty */.default, {});
  }
};
obj[0] = obj;
obj = {
  headerTitle: "Build Override",
  Icon: require("RefreshIcon").RefreshIcon,
  render() {
    return jsx(require(13779) /* jsx */.default, {});
  }
};
obj[1] = obj;
obj[2] = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(11144) /* UserExperimentDebugView */.default, {});
  }
};
const obj1 = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(11144) /* UserExperimentDebugView */.default, {});
  }
};
obj[3] = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13784) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
const obj2 = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13784) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
obj[4] = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13785) /* CacheLogEntry */.default, {});
  }
};
const obj3 = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13785) /* CacheLogEntry */.default, {});
  }
};
obj[5] = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13786) /* PoolIdInput */.default, {});
  }
};
const obj4 = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13786) /* PoolIdInput */.default, {});
  }
};
obj[6] = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13814) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
const obj5 = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13814) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
obj[7] = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13815) /* SettingsDesignSystemsScreen */.default, {});
  }
};
const obj6 = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13815) /* SettingsDesignSystemsScreen */.default, {});
  }
};
obj[8] = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14866) /* DismissableContentsEmpty */.default, {});
  }
};
const obj7 = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14866) /* DismissableContentsEmpty */.default, {});
  }
};
obj[9] = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14870) /* MultiGuildDevTools */.default, {});
  }
};
const obj8 = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14870) /* MultiGuildDevTools */.default, {});
  }
};
obj[10] = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14873) /* TestLocaleSelector */.default, {});
  }
};
const obj9 = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14873) /* TestLocaleSelector */.default, {});
  }
};
obj[11] = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14908) /* OtaVerificationActionSheet */.default, {});
  }
};
const obj10 = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14908) /* OtaVerificationActionSheet */.default, {});
  }
};
obj[12] = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14911) /* DevToolsProfilingScreen */.default, {});
  }
};
const obj11 = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14911) /* DevToolsProfilingScreen */.default, {});
  }
};
obj[13] = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14914) /* handleNewUserOnboarding */.default, {});
  }
};
const obj12 = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14914) /* handleNewUserOnboarding */.default, {});
  }
};
obj[14] = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14937) /* describeServerError */.default, {});
  }
};
const obj13 = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14937) /* describeServerError */.default, {});
  }
};
obj[15] = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14956) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
const obj14 = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14956) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
obj[16] = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14957) /* fuzzySearchToggle */.default, {});
  }
};
const obj15 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14957) /* fuzzySearchToggle */.default, {});
  }
};
obj[17] = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14960) /* showAgeVerificationTestModal */.default, {});
  }
};
const obj16 = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14960) /* showAgeVerificationTestModal */.default, {});
  }
};
obj[18] = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14961) /* Select */.default, {});
  }
};
const obj17 = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14961) /* Select */.default, {});
  }
};
obj[19] = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14968) /* DevToolsShopScreen */.default, {});
  }
};
const obj18 = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14968) /* DevToolsShopScreen */.default, {});
  }
};
obj[20] = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14969) /* FramePreviewOverrideSection */.default, {});
  }
};
const obj19 = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14969) /* FramePreviewOverrideSection */.default, {});
  }
};
obj[21] = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14971) /* ActionSheetSelector */.default, {});
  }
};
const obj20 = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14971) /* ActionSheetSelector */.default, {});
  }
};
obj[22] = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14974) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
const obj21 = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14974) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
obj[23] = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14975).default, {});
  }
};
const obj22 = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14975).default, {});
  }
};
obj[24] = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14976) /* handleResetInAppNotificationExpandNux */.default, {});
  }
};
const obj24 = { displayNameEffectsBenchmark: null };
const obj23 = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14976) /* handleResetInAppNotificationExpandNux */.default, {});
  }
};
obj24[0] = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14977) /* effectName */.default, {});
  }
};
const obj25 = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14977) /* effectName */.default, {});
  }
};
const result = require("ClipboardListIcon").fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj24;
