// Module ID: 13615
// Function ID: 104587
// Name: DevToolsScreens
// Dependencies: [31, 33, 9129, 13616, 13618, 13620, 13623, 10974, 9257, 13625, 13626, 10991, 13627, 13653, 13655, 6623, 13656, 14690, 14694, 14359, 14697, 4115, 14732, 10891, 14735, 10295, 14738, 11094, 14761, 9078, 14780, 14343, 14781, 9004, 14784, 9002, 14785, 11291, 14792, 14793, 13633, 14795, 4109, 14798, 10729, 14799, 14800, 2]

// Module 13615 (DevToolsScreens)
import "EyeDropperIcon";
import { jsx } from "ShieldIcon";

const require = arg1;
let obj = {};
obj = {
  headerTitle: "Analytics",
  Icon: require("ClipboardListIcon").ClipboardListIcon,
  render() {
    return jsx(require(13616) /* CommonProperty */.default, {});
  }
};
obj.analytics = obj;
obj = {
  headerTitle: "Build Override",
  Icon: require("RefreshIcon").RefreshIcon,
  render() {
    return jsx(require(13620) /* jsx */.default, {});
  }
};
obj.buildOverride = obj;
obj.experiments = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(10974) /* _createForOfIteratorHelperLoose */.default, {});
  }
};
const obj1 = {
  headerTitle: "Experiment Overrides",
  Icon: require("BeakerIcon").BeakerIcon,
  render() {
    return jsx(require(10974) /* _createForOfIteratorHelperLoose */.default, {});
  }
};
obj.loggingFlags = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13625) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
const obj2 = {
  headerTitle: "Logging Flags",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(13625) /* DevToolsLoggingFlagsScreen */.default, {});
  }
};
obj.cacheStats = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13626) /* CacheLogEntry */.default, {});
  }
};
const obj3 = {
  headerTitle: "Cache Stats",
  Icon: require("PaperIcon").PaperIcon,
  predicate() {
    return false;
  },
  render() {
    return jsx(require(13626) /* CacheLogEntry */.default, {});
  }
};
obj.generatedTestUsers = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13627) /* PoolIdInput */.default, {});
  }
};
const obj4 = {
  headerTitle: "Generated Test Users",
  Icon: require("UserIcon").UserIcon,
  render() {
    return jsx(require(13627) /* PoolIdInput */.default, {});
  }
};
obj.dataStorage = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13655) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
const obj5 = {
  headerTitle: "Data Storage",
  Icon: require("FileUpIcon").FileUpIcon,
  render() {
    return jsx(require(13655) /* DevToolsPersistedStoresActionSheet */.default, {});
  }
};
obj.designSystems = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13656) /* SettingsDesignSystemsScreen */.default, {});
  }
};
const obj6 = {
  headerTitle: "Design Systems",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(13656) /* SettingsDesignSystemsScreen */.default, {});
  }
};
obj.dismissibleContent = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14690) /* DismissableContentsEmpty */.default, {});
  }
};
const obj7 = {
  headerTitle: "Dismissible Contents",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14690) /* DismissableContentsEmpty */.default, {});
  }
};
obj.gameCommunityUpsell = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14694) /* MultiGuildDevTools */.default, {});
  }
};
const obj8 = {
  headerTitle: "Game Community Upsell",
  Icon: require("PaperIcon").PaperIcon,
  render() {
    return jsx(require(14694) /* MultiGuildDevTools */.default, {});
  }
};
obj.i18n = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14697) /* TestLocaleSelector */.default, {});
  }
};
const obj9 = {
  headerTitle: "Intl Testing",
  Icon: require("LanguageIcon").LanguageIcon,
  render() {
    return jsx(require(14697) /* TestLocaleSelector */.default, {});
  }
};
obj.otatest = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14732) /* OtaVerificationActionSheet */.default, {});
  }
};
const obj10 = {
  headerTitle: "OTA Test",
  Icon: require("DownloadIcon").DownloadIcon,
  render() {
    return jsx(require(14732) /* OtaVerificationActionSheet */.default, {});
  }
};
obj.profiling = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14735) /* TableRowGroupReactProfiling */.default, {});
  }
};
const obj11 = {
  headerTitle: "Profiling",
  Icon: require("TimerIcon").TimerIcon,
  render() {
    return jsx(require(14735) /* TableRowGroupReactProfiling */.default, {});
  }
};
obj.quickActions = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14738) /* handleNewUserOnboarding */.default, {});
  }
};
const obj12 = {
  headerTitle: "Quick Actions",
  Icon: require("MagicWandIcon").MagicWandIcon,
  render() {
    return jsx(require(14738) /* handleNewUserOnboarding */.default, {});
  }
};
obj.revenuePlayground = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14761) /* dismissalPath */.default, {});
  }
};
const obj13 = {
  headerTitle: "Revenue Playground",
  Icon: require("PiggyBankIcon").PiggyBankIcon,
  render() {
    return jsx(require(14761) /* dismissalPath */.default, {});
  }
};
obj.surveyOverride = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14780) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
const obj14 = {
  headerTitle: "Survey & Changelog Override",
  Icon: require("PencilIcon").PencilIcon,
  render() {
    return jsx(require(14780) /* SurveyOverrideInfoActionSheet */.default, {});
  }
};
obj.toggles = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14781) /* fuzzySearchToggle */.default, {});
  }
};
const obj15 = {
  headerTitle: "Toggles (Design, Reporting, etc)",
  Icon: require("EyeDropperIcon").EyeDropperIcon,
  render() {
    return jsx(require(14781) /* fuzzySearchToggle */.default, {});
  }
};
obj.ageVerification = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14784) /* showAgeVerificationTestModal */.default, {});
  }
};
const obj16 = {
  headerTitle: "Age Verification",
  Icon: require("ShieldIcon").ShieldIcon,
  render() {
    return jsx(require(14784) /* showAgeVerificationTestModal */.default, {});
  }
};
obj.components = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14785) /* Select */.default, {});
  }
};
const obj17 = {
  headerTitle: "Bot Components Testing",
  Icon: require("RobotIcon").RobotIcon,
  render() {
    return jsx(require(14785) /* Select */.default, {});
  }
};
obj.shop = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14792) /* DevToolsShopScreen */.default, {});
  }
};
const obj18 = {
  headerTitle: "Shop",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14792) /* DevToolsShopScreen */.default, {});
  }
};
obj.shopProductPreview = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14793) /* FramePreviewOverrideSection */.default, {});
  }
};
const obj19 = {
  headerTitle: "Collectibles Tool",
  Icon: require("ShopIcon").ShopIcon,
  render() {
    return jsx(require(14793) /* FramePreviewOverrideSection */.default, {});
  }
};
obj.actionSheets = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14795) /* ActionSheetSelector */.default, {});
  }
};
const obj20 = {
  headerTitle: "Action Sheets",
  Icon: require("CompassIcon").CompassIcon,
  render() {
    return jsx(require(14795) /* ActionSheetSelector */.default, {});
  }
};
obj.accountLinking = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14798) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
const obj21 = {
  headerTitle: "Account Linking",
  Icon: require("LinkIcon").LinkIcon,
  render() {
    return jsx(require(14798) /* DevToolsAccountLinkingScreen */.default, {});
  }
};
obj.performanceTesting = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14799).default, {});
  }
};
const obj23 = {};
const obj22 = {
  headerTitle: "Performance Testing",
  Icon: require("SpeedometerIcon").SpeedometerIcon,
  render() {
    return jsx(require(14799).default, {});
  }
};
obj23.displayNameEffectsBenchmark = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14800) /* makeUniqueName */.default, {});
  }
};
const obj24 = {
  headerTitle: "Display Name Effects Benchmark",
  Icon: require("PaintPaletteIcon").PaintPaletteIcon,
  render() {
    return jsx(require(14800) /* makeUniqueName */.default, {});
  }
};
const result = require("ClipboardListIcon").fileFinishedImporting("modules/devtools/native/components/DevToolsScreens.tsx");

export const DevToolsScreens = obj;
export const PerformanceTestingScreens = obj23;
