// Module ID: 13760
// Function ID: 13761
// Name: DevToolsScreens
// Dependencies: [19, 21, 8347, 13761, 13763, 13765, 13768, 11129, 8490, 13770, 13771, 11142, 13772, 13798, 13800, 7642, 13801, 14850, 14854, 14519, 14857, 4235, 14892, 10987, 14895, 9747, 14898, 11250, 14921, 9591, 14940, 14497, 14941, 10150, 14944, 10459, 14945, 11444, 14952, 14953, 13778, 14955, 4229, 14958, 10754, 14959, 14960, 14961, 2]

// Module 13760 (DevToolsScreens)
import "LanguageIcon";
import { jsx } from "DownloadIcon";

const require = arg1;
let obj = { analytics: null, buildOverride: null, experiments: null, loggingFlags: null, cacheStats: null, generatedTestUsers: null, dataStorage: null, designSystems: null, dismissibleContent: null, gameCommunityUpsell: null, i18n: null, otatest: null, profiling: null, quickActions: null, revenuePlayground: null, surveyOverride: null, toggles: null, ageVerification: null, components: null, shop: null, shopProductPreview: null, actionSheets: null, accountLinking: null, performanceTesting: null, inAppNotificationTesting: null };
obj = {
  headerTitle: "Analytics",
  Icon: require("ClipboardListIcon").ClipboardListIcon,
  render() {
    return jsx(require(13761) /* CommonProperty */.default, {});
  }
};
obj[0] = obj;
obj = {
  headerTitle: "Build Override",
  Icon: require("RefreshIcon").RefreshIcon,
  render() {
    return jsx(require(13765) /* jsx */.default, {});
  }
};
obj[1] = obj;
obj[2] = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(11129) /* UserExperimentDebugView */.default, {});
  }
};
const obj1 = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(11129) /* UserExperimentDebugView */.default, {});
  }
};
obj[3] = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13770) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
const obj2 = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13770) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
obj[4] = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13771) /* CacheLogEntry */.default, {});
  }
};
const obj3 = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13771) /* CacheLogEntry */.default, {});
  }
};
obj[5] = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13772) /* PoolIdInput */.default, {});
  }
};
const obj4 = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13772) /* PoolIdInput */.default, {});
  }
};
obj[6] = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13800) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
const obj5 = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13800) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
obj[7] = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13801) /* SettingsDesignSystemsScreen */.default, {});
  }
};
const obj6 = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13801) /* SettingsDesignSystemsScreen */.default, {});
  }
};
obj[8] = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14850) /* DismissableContentsEmpty */.default, {});
  }
};
const obj7 = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14850) /* DismissableContentsEmpty */.default, {});
  }
};
obj[9] = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14854) /* MultiGuildDevTools */.default, {});
  }
};
const obj8 = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14854) /* MultiGuildDevTools */.default, {});
  }
};
obj[10] = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14857) /* TestLocaleSelector */.default, {});
  }
};
const obj9 = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14857) /* TestLocaleSelector */.default, {});
  }
};
obj[11] = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14892) /* OtaVerificationActionSheet */.default, {});
  }
};
const obj10 = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14892) /* OtaVerificationActionSheet */.default, {});
  }
};
obj[12] = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14895) /* DevToolsProfilingScreen */.default, {});
  }
};
const obj11 = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14895) /* DevToolsProfilingScreen */.default, {});
  }
};
obj[13] = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14898) /* handleNewUserOnboarding */.default, {});
  }
};
const obj12 = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14898) /* handleNewUserOnboarding */.default, {});
  }
};
obj[14] = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14921) /* describeServerError */.default, {});
  }
};
const obj13 = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14921) /* describeServerError */.default, {});
  }
};
obj[15] = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14940) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
const obj14 = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14940) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
obj[16] = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14941) /* fuzzySearchToggle */.default, {});
  }
};
const obj15 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14941) /* fuzzySearchToggle */.default, {});
  }
};
obj[17] = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14944) /* showAgeVerificationTestModal */.default, {});
  }
};
const obj16 = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14944) /* showAgeVerificationTestModal */.default, {});
  }
};
obj[18] = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14945) /* Select */.default, {});
  }
};
const obj17 = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14945) /* Select */.default, {});
  }
};
obj[19] = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14952) /* DevToolsShopScreen */.default, {});
  }
};
const obj18 = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14952) /* DevToolsShopScreen */.default, {});
  }
};
obj[20] = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14953) /* FramePreviewOverrideSection */.default, {});
  }
};
const obj19 = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14953) /* FramePreviewOverrideSection */.default, {});
  }
};
obj[21] = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14955) /* ActionSheetSelector */.default, {});
  }
};
const obj20 = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14955) /* ActionSheetSelector */.default, {});
  }
};
obj[22] = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14958) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
const obj21 = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14958) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
obj[23] = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14959).default, {});
  }
};
const obj22 = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14959).default, {});
  }
};
obj[24] = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14960) /* handleResetInAppNotificationExpandNux */.default, {});
  }
};
const obj24 = { displayNameEffectsBenchmark: null };
const obj23 = {
  headerTitle: "In App Notification Testing",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14960) /* handleResetInAppNotificationExpandNux */.default, {});
  }
};
obj24[0] = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14961) /* effectName */.default, {});
  }
};
const obj25 = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14961) /* effectName */.default, {});
  }
};
const result = require("ClipboardListIcon").fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj24;
